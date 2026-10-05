#!/usr/bin/env python3
"""Declare a synthetic online-shop architecture (~40 services in numbered
business stages, two datacenters, kafka/sql/redis/http links with evidence)
so the topology's domain, board, focus, impact and outage views have
something to show. It complements deploy/demo-traffic.sh and
demo-incident.sh: their web/api/billing/catalog/postgres apps are part of
the declaration, so live traffic confirms some of the declared links.

Usage: python3 deploy/demo-declared.py [http://localhost:9001] [api-key]
"""
import json
import sys
import urllib.request

BASE = (sys.argv[1] if len(sys.argv) > 1 else "http://localhost:9001").rstrip("/")
KEY = sys.argv[2] if len(sys.argv) > 2 else ""

STAGES = {
    "1 · storefront": ["web", "mobile-bff", "search", "catalog", "recommendations", "reviews", "cms"],
    "2 · checkout": ["api", "cart", "pricing", "promo", "checkout", "tax"],
    "3 · payments": ["billing", "payment-gateway", "fraud", "ledger", "refunds"],
    "4 · fulfillment": ["orders", "inventory", "warehouse", "shipping", "tracking", "returns"],
    "5 · engagement": ["notifications", "email", "sms", "loyalty", "analytics"],
}
INFRA = {
    "databases": ["postgres", "orders-db", "ledger-db", "catalog-db"],
    "redis": ["sessions-redis", "cart-redis"],
    "kafka topics": ["order-events", "payment-events", "shipment-events", "click-stream"],
}
# Datacenter plane: most stages live in one DC, payments and data are multi-homed.
DC = {"1 · storefront": "eu-1", "2 · checkout": "eu-1", "3 · payments": "eu-1/eu-2",
      "4 · fulfillment": "eu-2", "5 · engagement": "eu-2"}

DESCRIPTIONS = {
    "web": "Public storefront: renders product pages and the **checkout** flow.",
    "api": "Order API behind web and mobile: creates orders and asks billing to charge them.",
    "billing": "Charges cards through the payment gateway and records every move in the ledger.",
    "payment-gateway": "Adapter to the card acquirer; the only service that talks to the bank.",
    "catalog": "Product catalog read model for browse and search.",
    "orders": "Order lifecycle: placed → paid → shipped, publishes order-events.",
    "inventory": "Stock levels per warehouse; reserves items at checkout.",
}

EDGES = [
    ("web", "api", "http", "web/src/checkout.ts:42 — POST /orders when the user confirms the cart"),
    ("web", "search", "http", "web/src/search.ts:18 — instant search as the user types"),
    ("web", "catalog", "http", "web/src/product.ts:27 — product page data"),
    ("web", "sessions-redis", "redis", "web/session.go:31 — session store"),
    ("mobile-bff", "api", "http", "bff/orders.go:55"),
    ("mobile-bff", "catalog", "http", "bff/catalog.go:12"),
    ("search", "catalog-db", "sql", "search/index.go:80 — rebuilds the index nightly"),
    ("catalog", "catalog-db", "sql", "catalog/repo.go:22"),
    ("recommendations", "click-stream", "kafka", "reco/consumer.py:14 — consumes clicks to train models"),
    ("web", "click-stream", "kafka", "web/track.ts:9 — produces page-view and click events"),
    ("reviews", "catalog", "http", "reviews/enrich.go:33"),
    ("cms", "catalog", "http", "cms/publish.go:71"),
    ("api", "cart", "http", "api/order.go:40 — reads the cart to build the order"),
    ("api", "checkout", "http", "api/order.go:58"),
    ("api", "billing", "http", "api/order.go:91 — charges the order synchronously"),
    ("cart", "cart-redis", "redis", "cart/store.go:19"),
    ("cart", "pricing", "http", "cart/total.go:23"),
    ("pricing", "promo", "http", "pricing/discounts.go:44"),
    ("checkout", "tax", "http", "checkout/tax.go:16"),
    ("checkout", "inventory", "http", "checkout/reserve.go:28 — reserves stock before payment"),
    ("billing", "payment-gateway", "http", "billing/charge.go:61"),
    ("billing", "fraud", "http", "billing/charge.go:47 — fraud score before every charge"),
    ("billing", "postgres", "sql", "billing/db.go:12 — payments database"),
    ("billing", "ledger", "http", "billing/charge.go:88"),
    ("billing", "payment-events", "kafka", "billing/events.go:20 — produces payment.succeeded / failed"),
    ("ledger", "ledger-db", "sql", "ledger/repo.go:30"),
    ("refunds", "billing", "http", "refunds/refund.go:52"),
    ("orders", "orders-db", "sql", "orders/repo.go:15"),
    ("orders", "order-events", "kafka", "orders/publish.go:33 — produces order lifecycle events"),
    ("orders", "payment-events", "kafka", "orders/consume.go:12 — consumes payments to mark orders paid"),
    ("api", "orders", "http", "api/order.go:102"),
    ("warehouse", "order-events", "kafka", "warehouse/picker.go:20 — consumes paid orders to pick"),
    ("warehouse", "inventory", "http", "warehouse/stock.go:45"),
    ("shipping", "order-events", "kafka", "shipping/consumer.go:18"),
    ("shipping", "shipment-events", "kafka", "shipping/publish.go:40"),
    ("tracking", "shipment-events", "kafka", "tracking/consumer.go:11"),
    ("returns", "refunds", "http", "returns/flow.go:66"),
    ("notifications", "order-events", "kafka", "notify/orders.go:9"),
    ("notifications", "shipment-events", "kafka", "notify/shipping.go:9"),
    ("notifications", "email", "http", "notify/send.go:30"),
    ("notifications", "sms", "http", "notify/send.go:44"),
    ("loyalty", "payment-events", "kafka", "loyalty/points.go:21"),
    ("analytics", "click-stream", "kafka", "analytics/ingest.py:8"),
    ("analytics", "order-events", "kafka", "analytics/ingest.py:19"),
    ("api", "catalog", "http", "api/products.go:14"),
    ("catalog", "postgres", "sql", "catalog/legacy.go:7 — legacy price table, still read"),
]

nodes = []
for group, apps in STAGES.items():
    for app in apps:
        n = {"app": app, "group": group, "labels": {"dc": DC[group]}}
        if app in DESCRIPTIONS:
            n["description"] = DESCRIPTIONS[app]
        nodes.append(n)
for group, apps in INFRA.items():
    for app in apps:
        nodes.append({"app": app, "group": group, "labels": {"dc": "eu-1/eu-2" if group != "redis" else "eu-1"}})

body = json.dumps({
    "nodes": nodes,
    "edges": [{"src": s, "dst": d, "transport": t, "evidence": e} for s, d, t, e in EDGES],
}).encode()
headers = {"Content-Type": "application/json"}
if KEY:
    headers["X-API-Key"] = KEY
req = urllib.request.Request(f"{BASE}/api/v1/topology/declared", data=body, headers=headers, method="PUT")
print(urllib.request.urlopen(req).read().decode())
print(f"declared {len(nodes)} nodes, {len(EDGES)} edges at {BASE}")

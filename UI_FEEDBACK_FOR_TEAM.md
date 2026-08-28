Hi LogDoc team,

Feedback on the Topology map UI (tested on v2.0.0, `GET /healthz` → `{"status":"ok","version":"v2.0.0"}`) plus two things noticed on logdoc.org while getting set up. Not filing as separate GitHub issues yet — wanted to check with you first since I already have working patches for the product-side items.

## 1. Topology map: label legibility

Reproduce: seed a few dozen services with real traffic/errors (e.g. `deploy/demo-incident.sh`, or any dense graph), open the Topology tab, hover a node with several connections.

- Every edge touching the hovered node showed its own rps/error-rate text label, so hovering a hub node stacked many near-identical labels on top of each other.
- Labels had no separation from the background — they blended into crossing edges and other labels, especially in denser graphs.

**Suggested fix** (already implemented and manually verified locally against `ui/src/Topology.tsx`):
- Only show an edge's rps/error-rate label when that edge is the one under the cursor, the selected (clicked) edge, or actively failing (error rate above threshold) — not every edge lit by a hovered hub node.
- On hover/selection, draw a thin dark outline behind label text (`strokeText` before `fillText`, ~4px, drawn first so only the outward half stays visible) instead of a background chip — chip was tried first and felt visually noisy, plain text wasn't legible enough. Outline applies to the whole highlighted branch (hovered/selected node + its lit neighbors + their edge labels), not just the literal node under the cursor.
- Node label position/order kept as-is (below the node, service name then `NN% err` on its own line) — no change there, just the outline treatment.

Happy to open a PR with this if useful — it's a self-contained change to `ui/src/Topology.tsx`, no backend/API changes.

## 2. Topology toolbar: layout/style inconsistency

- `window` / `export` labels used plain body text, visually inconsistent with the `// period` / `// levels` section labels (monospace, letter-spaced) used on the Logs tab. Suggest reusing the same `.sect` style for consistency across tabs.
- The interaction hint (`drag to pan · wheel to zoom · click a service or an edge · double-click to reset`) shared the top toolbar row with the window/export controls, competing for space. Moved it below the canvas, right-aligned, out of the way.
- `Changes` sat with the export links rather than next to the window presets it actually affects; grouped it with `window` instead, and moved export (Mermaid/Markdown) to the top-right corner.
- The Mermaid/Markdown export links (`<a class="winbtn">`) rendered visibly taller than the window/Changes buttons (`<button class="winbtn">`) — a `<button>` and an `<a>` don't share default box metrics for the same padding. Fixed by giving `.winbtn` a fixed 24px height + `box-sizing: border-box` + `inline-flex`, which also normalizes the shared `.winbtn` buttons on the Logs tab (period/level/density) — no regression there from what I could see.

Both self-contained CSS/JSX changes in `ui/src/Topology.tsx` + `ui/src/style.css`. Can open this as a PR too.

## 3. logdoc.org: dead download link

The homepage's `$ download` terminal mockup shows:
```
curl -LO https://logdoc.org/releases/latest/logdoc.tar.gz
```
This 404s — returns the GitHub Pages default 404 page (9379 bytes), not a real archive. Since there's no packaged release artifact, this reads as a working install command but silently downloads an HTML error page. Worth either wiring up a real release tarball or pointing this at the actual install path (`git clone` + `make build` / `docker compose`, per the repo's own README).

## 4. logdoc.org/topology.html: demo doesn't match the product

The topology demo on the site (`logdoc.org/topology.html`) shows features that don't exist in the actual product:
- Labeled, bounded data-center/cloud clusters (`AWS us-east-1`, `GCP europe-west1`, `Azure westus2`, `AWS ap-southeast-1`, `On-prem Frankfurt`) — the real topology API/UI has no region/datacenter/cloud concept at all, it's a flat graph of services and edges.
- A left sidebar with per-node-type checkboxes and counts (Services/PostgreSQL/Kafka/Redis/ClickHouse/Temporal/NATS) — the real UI has no resource-type classification; nodes are just service names, colored only by error status.
- A `$ grep service...` search box and a `$ logdoc tail --all --follow` input on the topology view — the real Topology tab has no search box at all (search lives on the Logs tab).
- On-screen `+`/`−` zoom buttons — the real UI is wheel-zoom/drag-pan only.

Understand marketing pages often show an aspirational/illustrative version, but this is different enough from what ships that it could set the wrong expectation for someone evaluating the product against the demo. Might be worth a "illustrative, not a live product screenshot" note, or updating it to reflect the real topology map.

---

Let me know if any of this is useful / already tracked, and if you'd like PRs for #1 and #2.

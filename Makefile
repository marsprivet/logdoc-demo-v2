BINARY  := logdoc
VERSION ?= $(shell git describe --tags --always --dirty 2>/dev/null || echo dev)
LDFLAGS := -X main.version=$(VERSION)

.PHONY: build run test lint vet up down clean ui plugins proto demo

ui:
	cd ui && npm install && npm run build

build:
	go build -ldflags '$(LDFLAGS)' -o bin/$(BINARY) ./cmd/logdoc

run: build
	./bin/$(BINARY)

test:
	go test ./...

vet:
	go vet ./...

lint: vet
	@command -v golangci-lint >/dev/null 2>&1 && golangci-lint run ./... || echo "golangci-lint is not installed — ran go vet only"

up:
	docker compose -f deploy/docker-compose.dev.yml up -d

down:
	docker compose -f deploy/docker-compose.dev.yml down

# Demo data: the declared ~40-service shop, checkout traffic and a database
# incident. With auth on: make demo LOGDOC_API_KEY=ldt_...
DEMO_HOST ?= localhost:9001
demo:
	python3 deploy/demo-declared.py http://$(DEMO_HOST) "$(LOGDOC_API_KEY)"
	LOGDOC_API_KEY="$(LOGDOC_API_KEY)" sh deploy/demo-traffic.sh $(DEMO_HOST) 60
	LOGDOC_API_KEY="$(LOGDOC_API_KEY)" sh deploy/demo-incident.sh $(DEMO_HOST)

# Reference plugins (Plugin SDK v2), built as standalone binaries.
plugins:
	go build -o bin/plugins/syslog-source ./plugins/syslog-source

# Regenerate the Plugin SDK gRPC code (needs protoc, protoc-gen-go, protoc-gen-go-grpc).
proto:
	protoc --proto_path=pkg/sdk/proto \
		--go_out=. --go_opt=module=github.com/LogDoc-org/logdoc \
		--go-grpc_out=. --go-grpc_opt=module=github.com/LogDoc-org/logdoc \
		pkg/sdk/proto/plugin.proto

clean:
	rm -rf bin

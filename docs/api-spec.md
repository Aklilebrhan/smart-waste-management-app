# API contract

- `POST /api/requests` — **RECEIVER**. Validates pickup coordinates, waste metadata, and storage URLs; returns eligible providers.
- `POST /api/requests/:id/accept` — **GIVER**. Atomically accepts a matching request and creates a job.
- `GET /api/health` — readiness probe.

Send `Authorization: Bearer <JWT>`. Client-facing validation errors are `422`, missing authentication `401`, unauthorized role `403`, and stale job transitions `409`. Socket rooms are `providers` and `user:<id>`; emitted events include `matching.offer` and `job.updated`.

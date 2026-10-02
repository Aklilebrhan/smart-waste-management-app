# CivicCycle architecture

The Expo client is a role-aware mobile shell that communicates only with `/api` over TLS. It requests foreground location only as a user action and uses the operating system image picker for request/proof images. Production builds should place media behind short-lived pre-signed S3 URLs; images never traverse the API as base64.

The TypeScript API is stateless and horizontally scalable. PostgreSQL holds transactional data through Prisma, Socket.IO publishes job transitions, and a queue worker should fan out FCM notifications and payment webhooks. JWTs carry a minimal subject and role; every route additionally checks server-side role policy.

## Lifecycle
`MATCHING → ASSIGNED → EN_ROUTE → COLLECTED → COMPLETED`. Only a receiver creates a request. Matching scores available providers within their declared radius, capacity, and rating. A provider acceptance performs a conditional status update in a database transaction, creates the job, then assigns an available vehicle/driver. This prevents double acceptance.

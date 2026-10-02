# CivicCycle — smart waste operations

A React Native + Expo client and TypeScript API foundation for resident collection requests, collector dispatch, and city operations. The app includes a polished role preview, bilingual English/Amharic UI, pickup location action, image picker, live job tracking, provider work queue, and city analytics.

## Quick start

```bash
cp .env.example .env
npm install
npm run start
# press w for the responsive web preview, or scan with Expo Go

cd backend
cp .env.example .env
npm install
npm run dev
```

For persistence, add Prisma CLI/client, run `npx prisma migrate dev`, and use a managed PostgreSQL database. See [architecture](docs/architecture.md), [API contract](docs/api-spec.md), and [matching rules](docs/matching-engine.md).

## Production checklist

- Replace development JWT secret with a secret-manager value and rotate keys.
- Use HTTPS, secure refresh-token storage, pre-signed object uploads, Stripe webhooks, and FCM credentials.
- Add PostGIS candidate queries plus transactional first-accept locking.
- Configure error monitoring, rate limits, audit logs, backups, and Expo push credentials.

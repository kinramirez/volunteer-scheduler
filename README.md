# Volunteer Scheduler

Shift scheduling for event volunteers: roles, shifts, conflict detection, and check-in.

> Status: in development (Week 1: server and database connected)

## The problem
Event organizers assign volunteers through group chats and spreadsheets. People get double-booked, no-shows leave gaps, and nobody can see at a glance which shifts are understaffed.

## Planned features
- Organizer: create events, roles, and shifts; coverage dashboard; check-in
- Volunteer: browse open shifts, claim and drop shifts, personal schedule
- Conflict detection and capacity limits enforced at the database level

## Tech stack
- Frontend: React, TypeScript, Vite, Tailwind CSS, TanStack Query, Zustand, Axios
- Backend: Node.js, Express, TypeScript, Prisma, Zod
- Database: PostgreSQL (Supabase)

## Project structure
- `client/`: React frontend
- `server/`: Express API
- `docs/`: API collection, architecture notes, devlog

## Prerequisites
- Node.js (LTS)
- Git
- A free [Supabase](https://supabase.com) project

## Running locally

### 1. Clone and install
```bash
git clone https://github.com/kinramirez/volunteer-scheduler.git
cd volunteer-scheduler/server
npm install
```

### 2. Environment variables
```bash
cp .env.example .env
```

| Variable | Description |
|---|---|
| `PORT` | Port the API listens on (default `3000`) |
| `DATABASE_URL` | Supabase Session pooler connection string (port 5432). In the Supabase dashboard: **Connect**, then **Direct**, then **Session pooler**. Replace the password placeholder with your database password. |

Never commit your `.env` file.

### 3. Database
```bash
npx prisma generate
npm run db:check
```
You should see `Database connected:` in the output.

### 4. Start the server
```bash
npm run dev
```

### 5. Verify it works
`GET http://localhost:3000/health` should return:
```json
{ "status": "ok" }
```

## API
The request collection for [Bruno](https://www.usebruno.com) is in `docs/volunteer-scheduler-api/`. Open that folder as a collection and select the `local` environment.

## Troubleshooting
- **`Cannot resolve environment variable: DATABASE_URL`:** `server/.env` is missing or has no `DATABASE_URL` line.
- **`Could not load schema`:** the schema must be at `server/prisma/schema.prisma`.
- **`Cannot find module './generated/prisma/client.js'`:** run `npx prisma generate` first.
- **Database connection fails:** use the Session pooler string, not the Direct connection (many home networks have no IPv6). Check that the password placeholder and its square brackets were replaced.

## License
Released under the [MIT License](LICENSE).
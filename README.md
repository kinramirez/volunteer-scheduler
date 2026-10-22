# Volunteer Scheduler

Shift scheduling for event volunteers: roles, shifts, conflict detection, and check-in.

> Status: in development (Week 1: server setup)

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
- A free [Supabase](https://supabase.com) project (needed from the database step onward)

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

Never commit your `.env` file.

### 3. Start the server
```bash
npm run dev
```

### 4. Verify it works
`GET http://localhost:3000/health` should return:
```json
{ "status": "ok" }
```

## API
The request collection for [Bruno](https://www.usebruno.com) is in `docs/api/`. Open that folder as a collection and use the local environment.

## License
Released under the [MIT License](LICENSE).
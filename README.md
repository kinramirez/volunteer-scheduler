# Volunteer Scheduler

Shift scheduling for event volunteers: roles, shifts, conflict detection, and check-in.

> Status: in development (Week 1: project setup)

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
- `docs/`: architecture notes, database diagram, devlog

## Running locally
Setup instructions will be added as the project takes shape.

## License
Released under the [MIT License](LICENSE).
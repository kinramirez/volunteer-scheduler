# Devlog

One short entry per session: what I did, what I learned, what's next.

## 2026-10-22
- Did: installed tools, created the repo, set up the GitHub board, labels, and issues
- Learned: issues, milestones, and a project board turn a big idea into small daily tasks
- Stuck on: nothing major, just getting used to the GitHub workflow
- Next: initialize the Express + TypeScript server

## 2026-10-26
- Did: initialized the server, added the /health endpoint, set up the Bruno collection inside the repo, connected Prisma to Supabase
- Learned: check which version npm actually installs (I got a Prisma release candidate instead of stable 7); the Session pooler is needed when the network has no IPv6; the Prisma schema must live at `server/prisma/schema.prisma` to match the config
- Stuck on: duplicate `"type"` key in package.json, `DATABASE_URL` missing from `.env`, schema in the wrong folder, and 13 audit warnings that all came from the preview Prisma CLI
- Next: add the User model, run the first migration, and build the register endpoint
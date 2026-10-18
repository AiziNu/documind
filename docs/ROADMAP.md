# Roadmap

The roadmap is ordered by dependencies. A milestone is complete when its acceptance criteria are met, not merely when the code exists.

## Milestone 0 — Project foundation
- [ ] Create GitHub repository.
- [ ] Add README, PRD, architecture, roadmap, development guide, and contribution rules.
- [ ] Add `.gitignore` and `.env.example`.
- [ ] Establish `main` branch protection where available.
- [ ] Create first issue and milestone.

**Exit criteria:** Repository is understandable, has no secrets, and has a documented plan.

## Milestone 1 — Local development skeleton
- [ ] Scaffold React + TypeScript + Vite frontend.
- [ ] Scaffold Python + FastAPI backend.
- [ ] Add health endpoint.
- [ ] Add formatting/linting and a minimal test for each application.
- [ ] Document commands for running both services.

**Exit criteria:** Frontend loads locally, API health endpoint returns success, tests run.

## Milestone 2 — PDF ingestion
- [ ] Add upload UI and API contract.
- [ ] Validate PDF uploads and size limits.
- [ ] Extract page-aware text with PyMuPDF.
- [ ] Detect empty or scanned documents.
- [ ] Add upload/parser tests and error states.

**Exit criteria:** A text-based PDF can be uploaded and its extracted text/page references inspected locally.

## Milestone 3 — Learning features
- [ ] Add server-side AI provider adapter.
- [ ] Add plain-language explanation mode.
- [ ] Add term definitions and examples.
- [ ] Add summary generation.
- [ ] Validate structured outputs and display source references.
- [ ] Add a small evaluation dataset.

**Exit criteria:** Learning responses are grounded in selected source text and failure cases are handled.

## Milestone 4 — Quizzes and persistence
- [ ] Add PostgreSQL schema and migrations.
- [ ] Persist document metadata and learning sessions.
- [ ] Generate quizzes with answer explanations.
- [ ] Record quiz attempts.
- [ ] Add authorization before storing user-specific data.

**Exit criteria:** Learners can revisit saved learning content without accessing another user's data.

## Milestone 5 — Retrieval and polish
- [ ] Add embeddings and pgvector retrieval.
- [ ] Add multi-section questions and better source matching.
- [ ] Improve empty/loading/error states and accessibility.
- [ ] Add integration and end-to-end tests.

**Exit criteria:** Retrieval and citation quality are measured against a repeatable test set.

## Milestone 6 — Deployment
- [ ] Select hosting and storage providers.
- [ ] Configure secrets and environment variables.
- [ ] Add CI checks and deployment workflow.
- [ ] Configure logs, health checks, limits, and backups.
- [ ] Write deployment and incident notes.
- [ ] Publish a demo with sample material that is safe to share.

**Exit criteria:** A clean deployment works, secrets remain private, and setup/limitations are documented.

# Architecture Decision Records (ADRs)

An ADR records a significant technical decision, its context, alternatives, and consequences. Keep each decision short and update it when the decision changes; do not silently rewrite history.

## Naming

Use sequential numbers and a short kebab-case title, for example:

`0001-use-fastapi-for-the-api.md`

## Template

```markdown
# ADR 000X: <Decision title>

- Status: Proposed | Accepted | Superseded
- Date: YYYY-MM-DD

## Context
What problem or constraint requires a decision?

## Options considered
1. Option A — advantages and disadvantages.
2. Option B — advantages and disadvantages.

## Decision
What are we choosing and why?

## Consequences
What becomes easier or harder? What follow-up work is required?
```

## Initial decisions to record

- Frontend and backend repository layout.
- Python dependency manager.
- Database and migration tooling.
- AI provider and model configuration.
- File storage strategy.
- Authentication approach.

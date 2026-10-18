# DocuMind Learn

**AI-powered learning assistant for lectures, PDFs, and technical study material.**

DocuMind Learn helps learners understand difficult material by transforming uploaded documents into beginner-friendly explanations, glossaries, examples, summaries, and practice quizzes. Answers should remain grounded in the source material and link back to relevant pages or passages.

> **Status:** Planning / initial scaffold  
> **Version:** 0.1.0  
> **Initial audience:** Students and self-learners  
> **Initial subject focus:** Python and software development

## Product goals

- Explain a selected section in plain language.
- Define technical terms and provide examples.
- Summarize lecture sections.
- Generate practice questions with explanations.
- Cite source pages/passages so learners can verify answers.
- Help learners understand, not simply copy an answer.

## Planned stack

| Area | Technology | Purpose |
|---|---|---|
| Web client | React, TypeScript, Vite | User interface |
| UI | Tailwind CSS, shadcn/ui (planned) | Accessible, consistent components |
| API | Python, FastAPI, Pydantic | Application and AI endpoints |
| Document parsing | PyMuPDF | Extract text and page numbers from PDFs |
| AI | OpenAI API | Explanations, embeddings, summaries, quizzes |
| Data | PostgreSQL, pgvector | Users, documents, conversations, semantic retrieval |
| Tests | Pytest; Vitest/React Testing Library | Backend and frontend confidence |
| Tooling | Git, GitHub, Docker (later) | Collaboration, reproducibility, deployment |

Specific versions and provider choices will be recorded as implementation decisions are made.

## MVP scope

1. Upload a text-based PDF.
2. Extract text while retaining page references.
3. Display document sections.
4. Generate a plain-language explanation for a selected section.
5. Explain technical terms and give examples.
6. Generate a small quiz from the selected material.
7. Show source references and clear error/loading states.

Authentication, multiple workspaces, OCR, background jobs, billing, and advanced analytics are out of the initial MVP unless later justified.

## Repository layout (target)

```text
documind-learn/
├── frontend/                 # React + TypeScript + Vite
├── backend/                  # Python + FastAPI
├── docs/
│   ├── PRODUCT_REQUIREMENTS.md
│   ├── ARCHITECTURE.md
│   ├── ROADMAP.md
│   ├── DEVELOPMENT.md
│   └── decisions/
├── .github/
│   └── ISSUE_TEMPLATE/
├── .env.example
├── .gitignore
├── CONTRIBUTING.md
├── SECURITY.md
└── README.md
```

## Getting started

The initial setup instructions are in [`docs/DEVELOPMENT.md`](docs/DEVELOPMENT.md). The repository will become runnable as the frontend and backend scaffolds are added.

## Documentation

- [Product requirements](docs/PRODUCT_REQUIREMENTS.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Roadmap](docs/ROADMAP.md)
- [Development setup](docs/DEVELOPMENT.md)
- [Architecture decision records](docs/decisions/README.md)
- [Contributing](CONTRIBUTING.md)
- [Security policy](SECURITY.md)

## Quality principles

- Prefer small, reviewable changes.
- Keep secrets out of source control.
- Validate all uploaded files and user input.
- Enforce access checks on every document and conversation request.
- Treat uploaded document content as untrusted input.
- Do not claim that an AI answer is correct without grounding and evaluation.
- Add tests for important business rules and failure cases.
- Keep user-facing explanations clear and accessible.

## License

License not selected yet. Choose one before making the repository public or accepting contributions.

# Architecture Overview

- **Status:** Proposed for MVP
- **Version:** 0.1

## 1. System context

The browser communicates with a Python API. The API validates requests, coordinates document processing and AI services, and persists application data. The AI provider is accessed server-side so credentials are never exposed to the browser.

```text
Learner
  |
  v
React + TypeScript web client
  |
  | HTTPS / JSON (streaming can be added)
  v
FastAPI application
  |---- Document service ---- PDF text extraction + page metadata
  |---- Learning service ---- explanations, glossary, quiz
  |---- Retrieval service --- embeddings + similarity search
  |---- AI provider --------- model and embedding API
  |
  v
PostgreSQL + pgvector
  |
  +---- Object storage for original PDFs (later deployment stage)
```

## 2. Main components

### Frontend
- Upload interface and file status.
- Document/section viewer.
- Explanation panel.
- Glossary and example cards.
- Quiz interface.
- API client and typed request/response models.

### FastAPI backend
- API routing and request validation.
- Application services containing business rules.
- PDF extraction and page-aware chunking.
- AI provider adapter.
- Authentication/authorization (before storing private user data).
- Persistence layer and structured error responses.

### PostgreSQL and pgvector
- Relational data: users, documents, sections/chunks, conversations, quiz attempts.
- Vector data: embeddings for semantic retrieval.
- Use migrations and indexes; avoid storing large PDF binaries directly in relational rows unless a deliberate reason exists.

## 3. Proposed data entities

- **User:** identity and account metadata.
- **Document:** owner, filename, status, storage key, timestamps.
- **DocumentChunk:** document ID, chunk text, page number, sequence, embedding.
- **Conversation:** owner, optional document context, title, timestamps.
- **Message:** conversation ID, role, content, source references, timestamp.
- **Quiz:** document/section context and generated questions.
- **QuizAttempt:** quiz ID, answers, score, feedback, timestamp.

These are conceptual entities, not a final database schema. Final fields and constraints should be documented in migrations.

## 4. Request flows

### Upload and ingest
1. Client sends a PDF to the API.
2. API validates size, extension, MIME type, and file signature where practical.
3. API stores the file in a controlled location.
4. Parser extracts text page by page.
5. Text is divided into chunks while retaining page and section metadata.
6. Chunks and processing status are saved.
7. Client sees success or a recoverable error.

### Explain a section
1. Client submits selected text or a section identifier plus desired learning mode.
2. API verifies the user can access the document.
3. Retrieval selects relevant source passages if needed.
4. AI provider receives a constrained prompt and the selected evidence.
5. API returns explanation, examples, and source references.
6. Client labels the response as AI-generated and shows its sources.

### Generate a quiz
1. Client requests a quiz for a document or section.
2. API retrieves relevant source content.
3. AI generates structured questions and answer explanations.
4. API validates the response schema before returning it.
5. Learner answers and receives feedback.

## 5. API design principles

- Version public routes under `/api/v1`.
- Use resource-oriented paths and correct HTTP methods.
- Validate input and output with Pydantic models.
- Return consistent error responses.
- Set upload and request limits.
- Enforce ownership checks at the service boundary.
- Add pagination to potentially large lists.
- Document endpoints using FastAPI's OpenAPI output.

Initial candidate routes:
- `GET /api/v1/health`
- `POST /api/v1/documents`
- `GET /api/v1/documents`
- `GET /api/v1/documents/{document_id}`
- `POST /api/v1/documents/{document_id}/explanations`
- `POST /api/v1/documents/{document_id}/glossary`
- `POST /api/v1/documents/{document_id}/quizzes`

Routes are proposals; confirm request/response schemas before implementation.

## 6. AI quality and safety

- Treat uploaded content as untrusted input, not as instructions to the AI.
- Instruct the model to use supplied evidence and say when evidence is insufficient.
- Preserve page metadata from extraction through retrieval and output.
- Validate structured model output before using it.
- Avoid claiming citations are verified unless code checks that they map to actual extracted pages/passages.
- Build a small evaluation dataset of lecture passages, expected key points, and expected citations.
- Keep prompts versioned and test them against regression cases.

## 7. Security and privacy

- Never put AI provider keys in frontend variables or commit them.
- Validate upload size and content; consider malware scanning for public deployment.
- Store files outside a publicly served directory.
- Require authorization for document, chunk, and conversation access.
- Avoid logging document contents or sensitive prompts by default.
- Configure CORS for known frontend origins.
- Use HTTPS in deployed environments.
- Define file retention and deletion behavior before accepting real user documents.

## 8. Operational approach

For local development, run the frontend and API separately. Add PostgreSQL and pgvector using a local database or Docker Compose once persistence is introduced. Add object storage and background jobs only when the MVP needs them.

## 9. Architecture decisions

Important changes should be recorded in `docs/decisions/` using the ADR template. See [`decisions/README.md`](decisions/README.md).

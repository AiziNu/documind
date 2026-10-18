# Security Policy

## Reporting a vulnerability

Do not disclose exploitable security issues in a public issue. Until a private reporting channel is configured, contact the repository owner privately through GitHub.

## Security expectations

- Never commit API keys, passwords, tokens, `.env` files, or private documents.
- Keep AI provider credentials on the server.
- Validate uploaded files and impose size limits.
- Treat extracted document text as untrusted input.
- Enforce ownership checks for every private resource.
- Avoid logging raw document content unless there is a clear, documented need.
- Keep dependencies updated and review security advisories.
- Use HTTPS and secure cookie/session settings in production.

This project is in development. Do not upload confidential or sensitive documents to an unreviewed deployment.

# Contributing

Thanks for helping improve DocuMind Learn.

## Before starting
- Read the README and relevant documentation.
- Check existing issues before starting duplicate work.
- For significant changes, open an issue to discuss the approach first.

## Workflow
1. Create a branch from `main`.
2. Keep the change focused.
3. Add or update tests for behavior changes.
4. Update documentation when behavior or setup changes.
5. Run the available lint, test, and build commands.
6. Open a pull request with context, screenshots for UI changes, and test results.

## Commit messages

Use concise conventional-style messages where practical:
- `feat: add PDF upload flow`
- `fix: handle empty PDF text`
- `docs: clarify local setup`
- `test: cover parser errors`
- `refactor: isolate AI provider adapter`

## Pull request checklist
- [ ] Scope is clear and limited.
- [ ] Tests added/updated and passing.
- [ ] No secrets or personal documents included.
- [ ] Error/loading/empty states considered.
- [ ] Documentation updated.
- [ ] Accessibility considered for UI changes.

## Learning-friendly code

Prefer clear names and small functions. Comments should explain why something is done when the reason is not obvious, rather than restating each line.

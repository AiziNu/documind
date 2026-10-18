# Development Setup

This document describes the planned local workflow. Commands may be refined when the scaffold is created.

## Prerequisites

Install:
- Git
- Node.js LTS and npm
- Python 3.12 or a currently supported version selected for the project
- A code editor such as VS Code
- Optional later: Docker Desktop and PostgreSQL

Check installations:

```bash
git --version
node --version
npm --version
python --version
```

On some systems the Python command is `python3` rather than `python`.

## 1. Clone the repository

After creating the GitHub repository:

```bash
git clone https://github.com/<your-username>/documind-learn.git
cd documind-learn
```

Replace `<your-username>` with your GitHub username.

## 2. Frontend setup (once scaffolded)

```bash
cd frontend
npm install
npm run dev
```

Vite prints the local URL in the terminal. Open that URL in your browser.

## 3. Backend setup (once scaffolded)

Recommended: use a Python virtual environment so dependencies for this project stay isolated.

```bash
cd backend
python -m venv .venv
```

Activate it:

**macOS/Linux**
```bash
source .venv/bin/activate
```

**Windows PowerShell**
```powershell
.venv\Scripts\Activate.ps1
```

Then install the project dependencies using the method defined in `backend/pyproject.toml`. We will choose and document one dependency manager when scaffolding the backend.

## 4. Environment variables

Copy `.env.example` to a local `.env` file and fill in only the values you actually need. Never commit `.env`.

Keep provider API keys on the backend only. Do not use a frontend variable such as `VITE_OPENAI_API_KEY`; frontend variables are exposed to browser code.

## 5. Tests and quality checks

The exact scripts will be added with the scaffold. Expected checks:
- Frontend lint and tests.
- Backend tests using pytest.
- Type checking where configured.
- Build checks in CI.

Run checks before opening a pull request.

## 6. Branch and commit workflow

Use a short-lived branch per task:

```bash
git switch -c docs/add-product-foundation
git add README.md docs
git commit -m "docs: add product foundation"
git push -u origin docs/add-product-foundation
```

Open a pull request on GitHub, review the diff, ensure checks pass, and merge it into `main`.

## Troubleshooting

- If a command is not found, verify the relevant runtime is installed and restart the terminal.
- If a port is busy, use the alternate port suggested by the development server.
- If Python dependencies are missing, verify the virtual environment is active.
- Never solve dependency problems by committing `.venv`, `node_modules`, or secrets.

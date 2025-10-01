# Testing Claude GitHub Integration

A TypeScript/Node.js project for testing Claude's GitHub integration capabilities. Creates a simple HTTP server that serves an HTML page with a "Hello World" dialog.

## Description

This is a test project designed to verify and demonstrate the integration between Claude AI and GitHub workflows. The application creates an HTTP server on port 3000 that serves a static HTML page to demonstrate basic web server functionality.

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

Install the project dependencies:

```bash
npm install
```

## Usage

### Build the project

Compile TypeScript and copy HTML files to the dist folder:

```bash
npm run build
```

### Run the application

Execute the compiled code:

```bash
npm start
```

The application will start an HTTP server on port 3000. Access it at `http://localhost:3000`.

### Development mode

Build and run in one command:

```bash
npm run dev
```

## Project Structure

```
.
├── src/
│   ├── index.ts        # Main entry point - creates HTTP server
│   └── index.html      # Static HTML page served by the server
├── dist/               # Compiled JavaScript output (generated)
├── .github/
│   └── workflows/
│       ├── claude.yml            # Claude integration workflow
│       └── claude-code-review.yml # Automatic code review workflow
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration (strict mode)
├── CLAUDE.md          # Claude Code guidance and project instructions
└── README.md          # Project documentation
```

## Architecture

### HTTP Server
- **src/index.ts** - Creates an HTTP server that:
  - Serves `index.html` on all routes
  - Uses ES modules with `import.meta.url` for path resolution
  - Listens on port 3000
  - Console messages are in Italian

### Build Process
- TypeScript compiler generates JavaScript in `dist/`
- Build process copies both compiled JS and HTML files to `dist/`
- Generates source maps and declaration files

### TypeScript Configuration
The project uses strict TypeScript settings:
- Target: `esnext` with `nodenext` module resolution
- Source: `./src`, Output: `./dist`
- Strict mode enabled with additional checks:
  - `noUncheckedIndexedAccess`
  - `exactOptionalPropertyTypes`

## GitHub Integration

The repository includes two GitHub Actions workflows:

### 1. Claude Workflow (`.github/workflows/claude.yml`)
Triggers when:
- Comments containing `@claude` are posted on issues or PRs
- Issues are opened/assigned with `@claude` in title or body
- PR reviews are submitted with `@claude` in body

### 2. Claude Code Review Workflow (`.github/workflows/claude-code-review.yml`)
Automatic review workflow that:
- Runs on PR open/update
- Reviews code quality, bugs, performance, security, and test coverage
- Posts feedback using `gh pr comment`
- Uses repository's CLAUDE.md for guidance

Both workflows require `CLAUDE_CODE_OAUTH_TOKEN` secret to be configured.

## Technology Stack

- **TypeScript** - Programming language with strict type checking
- **Node.js** - Runtime environment
- **npm** - Package manager
- **ES Modules** - Modern module system

## Code Style

- Console messages are in Italian (matching existing pattern)
- ES modules pattern with `import.meta.url` for file path resolution
- Async/await for file operations
- Error handling with try/catch blocks

## License

ISC

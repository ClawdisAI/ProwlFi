# Contributing to ProwlFi

Thanks for your interest in contributing. 🐺

## Development

This is an npm monorepo.

```bash
git clone https://github.com/ProwlFi/ProwlFi.git
cd ProwlFi
npm install
npm run build
npm run typecheck
```

Packages live under [`packages/`](./packages); runnable examples under
[`examples/`](./examples); protocol docs under [`docs/`](./docs).

## Pull requests

1. Fork the repo and create a feature branch from `master`.
2. Keep changes focused; add or update tests and docs where relevant.
3. Run `npm run typecheck` before opening the PR.
4. Use clear, descriptive commit messages.

## Reporting bugs

Open an issue with a minimal reproduction. For anything security-sensitive, do
**not** open a public issue — follow [SECURITY.md](./SECURITY.md) instead.

## Code of Conduct

Participation is governed by our [Code of Conduct](./CODE_OF_CONDUCT.md).

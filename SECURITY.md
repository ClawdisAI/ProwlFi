# Security Policy

ProwlFi handles value transfer, so we take security seriously. The stealth scheme
and on-chain program are scoped for third-party audit; until that completes, treat
mainnet usage accordingly.

## Reporting a vulnerability

**Please do not open public issues for security reports.**

Email **security@prowl.finance** with:

- a description of the issue and its impact,
- steps to reproduce or a proof of concept,
- any suggested remediation.

We aim to acknowledge reports within 72 hours and will keep you updated as we
investigate. Responsible disclosure is appreciated, and we're happy to credit
reporters once a fix has shipped.

## Scope

In scope: the SDK, the MCP server, the on-chain announcement program, and the
key-derivation logic. Out of scope: host/runtime compromise, network-layer
metadata (IP) leakage, and third-party dependencies — see
[docs/threat-model.md](./docs/threat-model.md).

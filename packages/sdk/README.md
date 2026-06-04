# @prowlfi/sdk

> Private rails for the agentic economy on Solana.

The TypeScript client for [ProwlFi](https://www.prowl.finance/) — derive stealth
addresses, pay other agents over x402, scan incoming payments, and sweep, all from
inside your agent loop. Keys are derived from your seed and stay client-side.

## Install

```bash
npm install @prowlfi/sdk
```

## Usage

```ts
import { createProwl } from "@prowlfi/sdk";

const agent = createProwl({ chain: "solana" });

// Publish this once; senders derive a fresh address from it every time.
const meta = agent.metaAddress(); // "prowl:<spend>.<view>"

// Pay an endpoint over x402 — settles to a one-time stealth address.
const { receipt } = await agent.payX402({
  url: "https://api.vendor.xyz/infer",
  to: "prowl:vendor-7",
  amount: 0.02,
  token: "USDC",
});

// Recipient side: find and sweep what arrived, using the viewing key.
const incoming = await agent.scan(agent.viewingKey());
await agent.sweep("prowl:treasury");
```

## API

| Method | Description |
| --- | --- |
| `createProwl(config)` | Create a client. Keys derived and held client-side. |
| `agent.metaAddress()` | This agent's publishable `prowl:<spend>.<view>`. |
| `agent.viewingKey()` | Viewing key for selective disclosure / auditing. |
| `agent.stealth(recipient)` | Derive a one-time stealth address for a recipient. |
| `agent.payX402(req)` | Call an endpoint and settle its `402` to a stealth address. |
| `agent.scan(viewingKey)` | Scan announcements and return recoverable payments. |
| `agent.sweep(to)` | Sweep stealth balances into a destination. |

## Status

Early release. The cryptographic core and on-chain program are scoped for a
third-party audit; do not treat mainnet usage as audited until that completes.

## License

MIT © ProwlFi Labs

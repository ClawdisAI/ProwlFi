# Examples

Runnable end-to-end flows for [`@prowlfi/sdk`](../packages/sdk).

```bash
npm install
npx tsx examples/pay-x402.ts
npx tsx examples/scan-incoming.ts
```

| Example | What it shows |
| --- | --- |
| [`pay-x402.ts`](./pay-x402.ts) | Pay an agent endpoint over x402; settle to a one-time stealth address. |
| [`scan-incoming.ts`](./scan-incoming.ts) | Scan announcements with a viewing key and sweep recovered payments. |

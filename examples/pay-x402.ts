/**
 * Pay another agent's endpoint over x402 — the payment lands at a one-time
 * stealth address, unlinkable on-chain.
 *
 *   npx tsx examples/pay-x402.ts
 */

import { createProwl } from "@prowlfi/sdk";

async function main() {
  const agent = createProwl({ chain: "solana" });

  const { receipt } = await agent.payX402({
    url: "https://api.vendor.xyz/infer",
    to: "prowl:vendor-7",
    amount: 0.02,
    token: "USDC",
  });

  console.log("settled in", receipt.settledMs, "ms");
  console.log("stealth address:", receipt.stealth);
  console.log("linkable on-chain:", receipt.linkable); // false
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

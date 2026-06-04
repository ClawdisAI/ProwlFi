/**
 * Recipient side: scan announcements with a viewing key, then sweep what arrived.
 *
 *   npx tsx examples/scan-incoming.ts
 */

import { createProwl } from "@prowlfi/sdk";

async function main() {
  const agent = createProwl({ chain: "solana" });

  // Share this meta-address once; senders derive a fresh address every payment.
  console.log("meta-address:", agent.metaAddress());

  const incoming = await agent.scan(agent.viewingKey());
  const total = incoming.reduce((sum, p) => sum + p.amount, 0);
  console.log(`recovered ${incoming.length} payments · ${total} USDC`);

  if (incoming.length > 0) {
    const { signature } = await agent.sweep("prowl:treasury");
    console.log("swept to treasury:", signature);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

/**
 * @prowlfi/sdk — private rails for the agentic economy on Solana.
 *
 * @example
 * ```ts
 * import { createProwl } from "@prowlfi/sdk";
 *
 * const agent = createProwl({ chain: "solana" });
 * const { receipt } = await agent.payX402({
 *   url: "https://api.vendor.xyz/infer",
 *   to: "prowl:vendor-7",
 *   amount: 0.02,
 *   token: "USDC",
 * });
 * ```
 *
 * @packageDocumentation
 */

import { ProwlClient } from "./client";
import type { ProwlConfig } from "./types";

/** Create a ProwlFi client. Keys are derived and held client-side. */
export function createProwl(config: ProwlConfig = {}): ProwlClient {
  return new ProwlClient(config);
}

export { ProwlClient } from "./client";
export {
  parseMetaAddress,
  formatMetaAddress,
  deriveStealthAddress,
  viewTag,
  viewTagMatches,
} from "./stealth";
export { parsePaymentTerms, withPaymentHeader } from "./x402";
export type {
  Chain,
  Token,
  ProwlConfig,
  MetaAddress,
  StealthResult,
  PayX402Request,
  Receipt,
  IncomingPayment,
} from "./types";
export type { PaymentTerms } from "./x402";

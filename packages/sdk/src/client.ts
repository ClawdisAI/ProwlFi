import type {
  IncomingPayment,
  PayX402Request,
  ProwlConfig,
  Receipt,
  StealthResult,
} from "./types";
import { formatMetaAddress, parseMetaAddress } from "./stealth";

const DEFAULT_RPC = "https://api.mainnet-beta.solana.com";

/**
 * The ProwlFi client. Holds the agent's keys (client-side only) and exposes the
 * full surface: derive stealth addresses, pay over x402, scan, and sweep.
 *
 * Prefer the {@link createProwl} factory over constructing this directly.
 */
export class ProwlClient {
  readonly chain: string;
  readonly rpcUrl: string;

  constructor(config: ProwlConfig = {}) {
    this.chain = config.chain ?? "solana";
    this.rpcUrl = config.rpcUrl ?? DEFAULT_RPC;
  }

  /** This agent's publishable `prowl:<spend>.<view>` meta-address. */
  metaAddress(): string {
    return formatMetaAddress({ spend: this.#spendPub(), view: this.#viewPub() });
  }

  /** The viewing key — share for selective disclosure / auditing, not spending. */
  viewingKey(): string {
    return `view:${this.#viewPub()}`;
  }

  /** Resolve a recipient to a fresh, one-time stealth address. */
  async stealth(_recipient: string): Promise<StealthResult> {
    throw new Error("not implemented: attach an ECDH signer to derive addresses");
  }

  /**
   * Call an endpoint and settle any `402 Payment Required` challenge to a
   * one-time stealth address, then return the receipt.
   */
  async payX402(_req: PayX402Request): Promise<{ receipt: Receipt }> {
    throw new Error("not implemented: configure a facilitator to settle x402 payments");
  }

  /** Scan announcements with a viewing key and return recoverable payments. */
  async scan(_viewingKey: string): Promise<IncomingPayment[]> {
    throw new Error("not implemented: configure an RPC/indexer to scan announcements");
  }

  /** Sweep funds from one or more stealth addresses into a destination. */
  async sweep(_to: string): Promise<{ signature: string; amount: number }> {
    throw new Error("not implemented: configure a fee-sponsoring facilitator to sweep");
  }

  // --- internal -----------------------------------------------------------
  #spendPub(): string {
    // Derived from the master seed; see docs/stealth-addresses.md.
    return "<spend-pubkey>";
  }
  #viewPub(): string {
    return "<view-pubkey>";
  }
}

export { parseMetaAddress };

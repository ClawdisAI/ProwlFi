/**
 * Core types for the ProwlFi SDK.
 * @packageDocumentation
 */

export type Chain = "solana";

/** SPL token symbol. Arbitrary mints are accepted as plain strings. */
export type Token = "USDC" | "PYUSD" | "USDT" | "SOL" | (string & {});

export interface ProwlConfig {
  /** Settlement chain. Solana is the only supported SVM target today. */
  chain?: Chain;
  /** RPC endpoint. Defaults to the public mainnet endpoint. */
  rpcUrl?: string;
  /**
   * Master seed the spending and viewing keys are derived from.
   * Never leaves the process. If omitted, an ephemeral seed is generated.
   */
  seed?: Uint8Array | string;
}

/**
 * A recipient's long-lived, publishable identity. Formatted as
 * `prowl:<spend>.<view>` — senders derive one-time addresses from it.
 */
export interface MetaAddress {
  spend: string;
  view: string;
}

/** A freshly derived, single-use destination plus its announcement data. */
export interface StealthResult {
  /** One-time destination address. */
  address: string;
  /** Ephemeral public key, published in the on-chain announcement. */
  ephemeral: string;
  /** One-byte scanning hint (0–255). */
  viewTag: number;
}

export interface PayX402Request {
  /** Endpoint to call. A `402` response is settled automatically. */
  url: string;
  /** Recipient meta-address or registered handle. */
  to: string;
  amount: number;
  token?: Token;
}

export interface Receipt {
  signature: string;
  stealth: string;
  amount: number;
  token: Token;
  settledMs: number;
  /** Always false: payments are unlinkable on-chain by construction. */
  linkable: false;
}

export interface IncomingPayment {
  address: string;
  amount: number;
  token: Token;
  ephemeral: string;
}

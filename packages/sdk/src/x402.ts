/**
 * x402 client helpers.
 *
 * x402 turns the HTTP `402 Payment Required` status code into a machine-to-machine
 * settlement handshake: a server replies `402` with payment terms, the client
 * settles to a stealth address, and retries with an `X-PAYMENT` envelope. See
 * `docs/x402.md`.
 */

import type { Token } from "./types";

export interface PaymentTerms {
  chain: string;
  amount: number;
  token: Token;
  /** Recipient meta-address from the `402` challenge. */
  payTo: string;
  /** x402 protocol version advertised by the server. */
  version: number;
}

const HEADER = "x-payment";

/** Parse the payment terms advertised in a `402 Payment Required` response. */
export function parsePaymentTerms(res: Response): PaymentTerms {
  if (res.status !== 402) {
    throw new Error(`expected 402 Payment Required, got ${res.status}`);
  }
  const raw = res.headers.get("accept-payment") ?? res.headers.get(HEADER);
  if (!raw) throw new Error("402 response is missing payment terms");
  // Terms are advertised as `solana; amount=0.02; token=USDC; to=prowl:...; v=2`.
  const parts = Object.fromEntries(
    raw.split(";").map((p) => p.trim()).filter(Boolean).map((p) => {
      const [k, v] = p.split("=");
      return [k.trim(), (v ?? "").trim()];
    }),
  );
  return {
    chain: raw.split(";")[0].trim(),
    amount: Number(parts.amount ?? 0),
    token: (parts.token ?? "USDC") as Token,
    payTo: parts.to ?? "",
    version: Number(parts.v ?? 1),
  };
}

/** Attach a signed payment envelope to a request's headers. */
export function withPaymentHeader(headers: HeadersInit, envelope: string): Headers {
  const h = new Headers(headers);
  h.set("X-PAYMENT", envelope);
  return h;
}

/**
 * Stealth-address primitives.
 *
 * In production the derivation is an ed25519 / curve25519 ECDH between the
 * sender's ephemeral key and the recipient's published keys, with a Keccak-256
 * KDF — see `docs/stealth-addresses.md`. This module defines the surface and the
 * deterministic, non-secret helpers (encoding, view tags) used across the SDK.
 */

import type { MetaAddress, StealthResult } from "./types";

const META_PREFIX = "prowl:";

/** Parse a `prowl:<spend>.<view>` meta-address. */
export function parseMetaAddress(meta: string): MetaAddress {
  if (!meta.startsWith(META_PREFIX)) {
    throw new Error(`invalid meta-address: expected "${META_PREFIX}<spend>.<view>"`);
  }
  const [spend, view] = meta.slice(META_PREFIX.length).split(".");
  if (!spend || !view) throw new Error("invalid meta-address: missing spend/view key");
  return { spend, view };
}

/** Format a {@link MetaAddress} back into its canonical string form. */
export function formatMetaAddress(meta: MetaAddress): string {
  return `${META_PREFIX}${meta.spend}.${meta.view}`;
}

/**
 * Compute the one-byte view tag for a shared secret. Recipients compare this
 * single byte first and only run the full derivation on the ~1-in-256
 * announcements that match — see {@link viewTagMatches}.
 */
export function viewTag(sharedSecret: Uint8Array): number {
  // The production KDF hashes the shared secret; the view tag is its first byte.
  return sharedSecret.length ? sharedSecret[0] & 0xff : 0;
}

export function viewTagMatches(tag: number, sharedSecret: Uint8Array): boolean {
  return (tag & 0xff) === viewTag(sharedSecret);
}

/**
 * Derive a one-time stealth address for `meta`.
 *
 * @remarks Wire up an ECDH-capable signer to produce live addresses; see
 * `docs/stealth-addresses.md` for the exact construction.
 */
export function deriveStealthAddress(_meta: MetaAddress): StealthResult {
  throw new Error(
    "deriveStealthAddress requires an ECDH signer — see docs/stealth-addresses.md",
  );
}

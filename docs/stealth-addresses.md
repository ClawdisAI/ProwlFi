# Stealth addresses

A stealth address is a one-time destination only the recipient can spend from,
derived freshly for each payment. The recipient publishes a single, long-lived
**meta-address**; senders use it to compute unique destinations that cannot be
correlated to one another or back to the meta-address.

## The protocol

1. The recipient generates two keypairs — a **spending key** and a **viewing
   key** — and publishes their public halves as a meta-address,
   `prowl:<spend>.<view>`.
2. To pay, the sender generates an ephemeral keypair and combines its private half
   with the recipient's public keys (curve25519 ECDH) to derive a unique stealth
   address.
3. The sender publishes the ephemeral public key — plus a one-byte **view tag** —
   in an on-chain announcement, and sends funds to the stealth address.
4. The recipient scans announcements with the viewing key, recognizes payments
   meant for them, and derives the matching private key to spend.

## View tags

Scanning every announcement on-chain would be expensive. A one-byte **view tag** —
derived alongside each payment — lets a recipient check a single byte first and
only perform the full derivation on the ~1-in-256 announcements that match. The
SDK's `scan` handles view-tag filtering automatically.

## Spending and disclosure

The spending key never leaves the agent's process. The viewing key can be shared
with an auditor to reveal incoming payments for selective disclosure, **without**
granting spend authority — the basis for ProwlFi's auditability.

See [`@prowlfi/sdk`](../packages/sdk) for the API.

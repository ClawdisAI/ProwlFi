# Threat model

ProwlFi is designed against a **passive on-chain observer** with full visibility of
Solana's public ledger and an unbounded analysis budget — the realistic adversary
for an autonomous agent: competitors, MEV searchers, and analysts reconstructing
strategy from the transaction graph.

| Adversary capability | Mitigated | How |
| --- | --- | --- |
| Link payments to an agent's main wallet | Yes | Each payment lands at a fresh stealth address with no on-chain link to identity. |
| Cluster addresses by reuse | Yes | Addresses are single-use; there is nothing to cluster on. |
| Read counterparties from the graph | Yes | No durable link between payer and payee survives derivation. |
| Reconstruct an x402 customer/vendor graph | Yes | The buyer–vendor link is severed at the stealth-address layer. |
| Correlate by timing & round amounts | Partial | Mitigate with batching and jitter; deterministic round amounts still leak. |
| Read payment amounts on-chain | Partial | Amounts are visible today; confidential amounts (BN-254) are on the roadmap. |
| Compromise the agent host / key material | No | Out of scope — secure your runtime. ProwlFi protects the ledger, not the machine. |

## Out of scope

- **Network-layer privacy.** RPC and endpoint calls still reveal IPs; route agent
  traffic through a proxy or mixnet if network metadata matters.
- **Confidential amounts.** Transfer values are visible on Solana today.
- **Host security.** A compromised host exposes the master seed; use a TEE, HSM, or
  hardware signer for high-value agents.

ProwlFi cuts **linkability at the address layer**. It is confidentiality
infrastructure, not a mixer: funds are never pooled, and every payment stays
individually attributable to its sender via the viewing key.

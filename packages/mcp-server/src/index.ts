/**
 * @prowlfi/mcp-server
 *
 * A Model Context Protocol server that exposes ProwlFi as tools to any MCP host
 * (Claude Code, Cursor, Windsurf, ...). It wraps {@link @prowlfi/sdk} so an agent
 * can transact privately without leaving its host.
 */

import { createProwl } from "@prowlfi/sdk";

/** Tools advertised to the MCP host. */
export const TOOLS = [
  {
    name: "prowl.stealth_resolve",
    description: "Resolve a recipient meta-address to a fresh, one-time stealth address.",
  },
  {
    name: "prowl.x402_pay",
    description: "Call an endpoint and settle its 402 challenge to a stealth address.",
  },
  {
    name: "prowl.scan_incoming",
    description: "Scan announcements with a viewing key and return recoverable payments.",
  },
  {
    name: "prowl.sweep",
    description: "Sweep stealth balances into a destination address.",
  },
] as const;

export function createServer(config: { rpcUrl?: string } = {}) {
  const agent = createProwl({ chain: "solana", rpcUrl: config.rpcUrl });
  // Register TOOLS against your MCP transport here (stdio / SSE).
  return { agent, tools: TOOLS };
}

export default createServer;

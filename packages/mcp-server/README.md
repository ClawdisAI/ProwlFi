# @prowlfi/mcp-server

> ProwlFi as MCP tools for any agent host.

A [Model Context Protocol](https://modelcontextprotocol.io) server that exposes
[ProwlFi](https://www.prowl.finance/) to Claude Code, Cursor, Windsurf, or any MCP
host, so an agent can transact privately without leaving its runtime.

## Tools

| Tool | Description |
| --- | --- |
| `prowl.stealth_resolve` | Resolve a meta-address to a one-time stealth address. |
| `prowl.x402_pay` | Call an endpoint and settle its 402 challenge privately. |
| `prowl.scan_incoming` | Scan announcements with a viewing key. |
| `prowl.sweep` | Sweep stealth balances into a destination. |

## Configure (Claude Code)

```json
{
  "mcpServers": {
    "prowlfi": {
      "command": "npx",
      "args": ["-y", "@prowlfi/mcp-server"]
    }
  }
}
```

## License

MIT © ProwlFi Labs

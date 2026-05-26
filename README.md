<p align="center">
  <img src="https://cdn.prod.website-files.com/69082c5061a39922df8ed3b6/6a1f61d08b79f39442109dc1_New%20Project%20-%202026-06-03T000544.113.png" alt="Alea" width="220" />
</p>

<h1 align="center">Alea</h1>

<p align="center">
  <em>My AI research agent. Built around the way I actually think about markets.</em>
</p>

<p align="center">
  <a href="https://x.com/aleabitoreddit"><img alt="Twitter" src="https://img.shields.io/badge/follow-%40aleabitoreddit-000000?logo=x&style=for-the-badge"></a>
  <a href="https://github.com/aleabito"><img alt="GitHub" src="https://img.shields.io/badge/github-aleabito-181717?logo=github&style=for-the-badge"></a>
  <img alt="Site" src="https://img.shields.io/badge/site-coming%20soon-6366f1?style=for-the-badge">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-yellow?style=for-the-badge">
</p>

---

## What this is

I built Alea because I got tired of explaining my research process to people.

Everyone asks the same question: *"how do you find these plays before anyone else?"*

The answer isn't complicated. I don't try to pick which AI company wins. I look at what every AI company needs to exist — and find the two or three suppliers sitting at the chokepoint nobody's mapped yet.

Alea is that process, automated.

---

## The Framework

Most people in this space are asking the wrong question. They're looking at the hyperscalers, the GPU companies, the model labs. By the time those are obvious, they're already priced in.

I ask a different question:

> **What's the thing they all need that only one or two companies make?**

That's where the edge is. Always has been.

The map usually looks something like this:

```
AI demand scales
        │
        ▼
Clusters need faster interconnects
        │
        ▼
Interconnects need photonics
        │
        ▼
Photonics needs specific substrate materials
        │
        ▼
Two companies make those substrates.
        │
        ▼
Neither of them is on anyone's radar yet.
```

You buy the substrate companies. You wait. Wall Street eventually runs the same map.

Alea runs this process systematically — across every layer, every dependency, every capex disclosure.

---

## What I Focus On

| Area | What I'm actually looking at |
|---|---|
| **AI Data Centers** | Power constraints, cooling architecture, rack density limits |
| **Semiconductors** | Advanced packaging (CoWoS, SoIC), EUV tooling, fab bottlenecks |
| **Memory (HBM)** | HBM3E/HBM4 ramp, yield issues, who controls supply |
| **Silicon Photonics** | Co-packaged optics, transceiver supply, material concentration |
| **Optical Networking** | Bandwidth scaling limits, DSP power wall, coherent vs. direct-detect |
| **Supply Chain Chokepoints** | Single-source components, geographic risk, lead time signals |
| **Hyperscaler Capex** | Microsoft, Google, Amazon, Meta — where the money actually lands |

---

## Theses I've Been Public On

These shaped how Alea was trained to think:

- **$AXTI** — AXT Inc. Gallium arsenide and indium phosphide substrates. Every photonics company upstream of AI networking needs this material. Almost nobody was covering it.
- **$NBIS** — Nebius Group. GPU cloud infrastructure before the AI cluster buildout became consensus. Classic bottleneck play.
- **$SIVE** — Supply chain leverage into the silicon/photonics materials stack.

These aren't recommendations. They're examples of the framework in action — small cap, structural chokepoint, institutions haven't arrived yet.

---

## Background

I'm [@aleabitoreddit](https://x.com/aleabitoreddit) on X.

- Started on WallStreetBets
- Worked as an AI research scientist
- Contributed to the RISC-V Foundation
- Now I spend most of my time mapping AI supply chains and trading the gaps

My research is technical but I try to make it readable. I care more about the structural argument than the trade setup — if the thesis is right, the trade follows.

---

## How It Works

Give it a starting point — a company, a trend, a number from an earnings call. It maps the dependency chain in both directions, finds the concentration points, and ranks them by how underpriced they look relative to the structural demand coming downstream.

Supports OpenAI, OpenRouter, Gemini, and local inference via LM Studio.

```bash
git clone https://github.com/aleabito/alea
cd alea
cargo build --release
```

Set your backend in `config.json` and point `characterPrompt` at the research framework file.

---

## License

MIT — code is open. Follow me on [X](https://x.com/aleabitoreddit) if you want the actual analysis.

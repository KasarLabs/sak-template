<h1 align="center">
  <img src="https://pbs.twimg.com/profile_images/1834202903189618688/N4J8emeY_400x400.png" width="50"><br>
  sak-template
</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/starknet-agent-kit">
    <img src="https://img.shields.io/npm/v/starknet-agent-kit.svg" alt="NPM Version" />
  </a>
  <a href="https://github.com/kasarlabs/starknet-agent-kit/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/starknet-agent-kit.svg" alt="License" />
  </a>
  <a href="https://github.com/kasarlabs/starknet-agent-kit/stargazers">
    <img src="https://img.shields.io/github/stars/kasarlabs/starknet-agent-kit.svg" alt="GitHub Stars" />
  </a>
  <a href="https://nodejs.org">
    <img src="https://img.shields.io/node/v/starknet-agent-kit.svg" alt="Node Version" />
  </a>
</p>

<p align="center">
  A minimal template for using the <a href="https://github.com/kasarlabs/starknet-agent-kit/">Starknet Agent Kit</a>
</p>

> ⚠️ **Warning**: This kit is currently under development. Use it at your own risk! Please be aware that sharing sensitive information such as private keys, personal data, or confidential details with AI models or tools carries inherent security risks. The contributors of this repository are **not responsible** for any loss, damage, or issues arising from its use.

## Prerequisites

- Node.js installed
- Git installed
- An AI model provider API key (Choose one from the list [here](https://github.com/KasarLabs/starknet-agent-kit/blob/main/src/config/env.validation.ts))
- A Starknet wallet private key
- A Starknet RPC URL

## Quick Start

1. Clone the repository:

```bash
git clone https://github.com/kasarlabs/sak-template.git
cd sak-template
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with:

```
ANTHROPIC_API_KEY=your_anthropic_api_key
PRIVATE_KEY=your_wallet_private_key
PUBLIC_KEY=your_wallet_public_address
RPC_URL=your_starknet_rpc_url
AI_PROVIDER="your_ai_provider_name" 
AI_MODEL="your_model_name"
AI_PROVIDER_API_KEY="your_ai_provider_key"
```
> ℹ **Info**: You can find all the providers and their model names [here](https://github.com/KasarLabs/starknet-agent-kit/blob/main/src/config/env.validation.ts).

4. Run the application:

```bash
npm run dev
```

The template includes a basic setup that queries your ETH balance. You can modify `src/index.ts` to implement other functionalities available in the Starknet Agent Kit.

## Getting an Anthropic API Key

1. Visit https://console.anthropic.com/
2. Create an account
3. Navigate to API Keys section
4. Click "Create Key"

## Support

Need help? Feel free to reach out to us on [Telegram](https://t.me/kasarlabs)

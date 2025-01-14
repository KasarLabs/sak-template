# Quick Start Guide: Using sak-template

This guide shows you how to get started with the sak-template repository to use Starknet Agent Kit.

## Prerequisites

- Node.js installed
- Git installed
- An Anthropic API key (Get one at https://console.anthropic.com/)
- A Starknet wallet private key
- A Starknet RPC URL

## Steps

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
RPC_URL=your_starknet_rpc_url
```

4. Run the application:
```bash
npm run dev
```

The template includes a basic setup that queries your ETH balance. You can modify `src/index.ts` to implement other functionalities available in the Starknet Agent Kit.

## Note

The Anthropic API key can be obtained by:
1. Going to https://console.anthropic.com/
2. Creating an account
3. Navigating to the API Keys section
4. Creating a new API key
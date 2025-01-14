import { StarknetAgent } from 'starknet-agent-kit';
import * as dotenv from 'dotenv';

dotenv.config();

async function main() {
  try {
    // Ensure required environment variables are present
    const { ANTHROPIC_API_KEY, STARKNET_PRIVATE_KEY, RPC_URL } = process.env;
    if (!ANTHROPIC_API_KEY || !STARKNET_PRIVATE_KEY || !RPC_URL) {
      throw new Error(
        'Missing required environment variables. Please check your .env file.'
      );
    }

    // Initialize the StarknetAgent with required credentials
    const agent = new StarknetAgent({
      anthropicApiKey: ANTHROPIC_API_KEY,
      walletPrivateKey: STARKNET_PRIVATE_KEY,
    });

    console.log('StarknetAgent initialized successfully.');

    // Test the agent with a simple request
    const balanceResponse = await agent.execute('What is my ETH balance?');
    console.log('Balance response:', balanceResponse);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();

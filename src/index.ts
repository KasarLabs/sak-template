import { StarknetAgent } from "starknet-agent-kit";
import * as dotenv from "dotenv";

dotenv.config();

async function main() {
  try {
    // Ensure required environment variables are present
    const { AI_PROVIDER, AI_MODEL, AI_PROVIDER_API_KEY, PRIVATE_KEY, RPC_URL } = process.env;
    if (!AI_PROVIDER || !AI_MODEL || !AI_PROVIDER_API_KEY || !PRIVATE_KEY || !RPC_URL) {
      throw new Error(
        "Missing required environment variables. Please check your .env file.",
      );
    }

    // Initialize the StarknetAgent with required credentials
    const agent = new StarknetAgent({
      aiProviderApiKey: AI_PROVIDER_API_KEY,
      walletPrivateKey: PRIVATE_KEY,
      aiModel: AI_MODEL,
      aiProvider: AI_PROVIDER,
    });

    console.log("StarknetAgent initialized successfully.");

    // Test the agent with a simple request
    const balanceResponse = await agent.execute("What is my ETH balance?");
    console.log("Balance response:", balanceResponse);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

main();

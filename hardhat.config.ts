import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    base: {
      url: "https://base-rpc.publicnode.com",
      chainId: 8453,
      accounts: [process.env.PRIVATE_KEY ?? ""],
    },
    optimism: {
      url: "https://optimism-rpc.publicnode.com",
      chainId: 10,
      accounts: [process.env.PRIVATE_KEY ?? ""],
    },
    zksync: {
      url: "https://mainnet.era.zksync.io",
      chainId: 324,
      accounts: [process.env.PRIVATE_KEY ?? ""],
    },
    arbitrum: {
      url: "https://1rpc.io/arb",
      chainId: 42161,
      accounts: [process.env.PRIVATE_KEY ?? ""],
    },
    manta: {
      url: "https://1rpc.io/manta",
      chainId: 169,
      accounts: [process.env.PRIVATE_KEY ?? ""],
    },
  },
};

export default config;


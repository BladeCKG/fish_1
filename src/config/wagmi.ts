import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  braveWallet,
  coinbaseWallet,
  imTokenWallet,
  injectedWallet,
  metaMaskWallet,
  rainbowWallet,
  trustWallet,
  walletConnectWallet,
  phantomWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";

export const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    // chain.mainnet, //replace later
    mainnet,
  ],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID }),
    jsonRpcProvider({
      rpc: (chain) => ({
        http: `https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_ID}`,
        webSocket: `wss://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_ID}`,
      }),
    }),
    publicProvider(),
  ]
);

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

const needsInjectedWalletFallback =
  typeof window !== "undefined" &&
  window.ethereum &&
  !window.ethereum.isMetaMask &&
  !window.ethereum.isCoinbaseWallet;

const connectors = connectorsForWallets([
  {
    groupName: "Popular",
    wallets: [
      metaMaskWallet({ chains, shimDisconnect: true, projectId }),
      braveWallet({ chains, shimDisconnect: true }),
      rainbowWallet({ chains, projectId }),
      walletConnectWallet({ chains, projectId }),
      coinbaseWallet({ appName: "Coinbase", chains }),
      phantomWallet({ chains }),
      ...(needsInjectedWalletFallback
        ? [injectedWallet({ chains, shimDisconnect: true })]
        : []),
    ],
  },
  {
    groupName: "Other",
    wallets: [
      trustWallet({ chains, shimDisconnect: true, projectId }),
      imTokenWallet({ chains, projectId }),
    ],
  },
]);

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

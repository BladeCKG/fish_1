import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chains, wagmiConfig } from "config/wagmi";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import "../styles/global.css";
import { WagmiConfig } from "wagmi";
import { ChakraProvider } from "@chakra-ui/react";
import { env } from "../config/env";
const theme = {
  styles: {
    global: {
      html: {},
      "@keyframes marquee": {
        "0%": {
          left: "0",
        },
        to: {
          left: "-100%",
        },
      },
    },
  },
};
function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} modalSize="compact">
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;

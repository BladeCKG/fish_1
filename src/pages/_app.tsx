import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chains, wagmiConfig } from "config/wagmi";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import "styles/globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import { WagmiConfig } from "wagmi";
import { ChakraProvider } from "@chakra-ui/react";
import { env } from "../config/env";
const theme = {
  styles: {
    global: {
      html: {
        backgroundColor: "black",
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
      <RainbowKitProvider chains={chains}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;

import { BasciConnect, CustomConnect } from "components/ConnectWallet";
import type { NextPage } from "next";
import Head from "next/head";
import WithSubnavigation from "../components/WithSubnavigation";
import {
  Image,
  Text,
  Flex,
  Box,
  Grid,
  GridItem,
  Button,
  Stack,
  Link,
} from "@chakra-ui/react";
var sectionStyle = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url("https://zksync.io/images/ethereum_native.webp")`,
  backgroundPosition: "center",
  backgroundSize: "120% 100vh",
  backgroundRepeat: "no-repeat",
  backgroundColor: "black",
};

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>zkSync | Scaling the Ethos and technology of Ethereum</title>
        <link rel="canonical" href="https://zksync.io" />
        <meta
          name="keywords"
          content="Era, zkSync, Matter Labs, rollup, ZK-rollup, zero confirmation, ZKP, zero-knowledge proofs, Ethereum, crypto, blockchain, permissionless, L2, secure payments, scalable, ZKS"
        />
        <meta
          name="description"
          content="zkSync is a ZK-rollup that represents the end-game for scaling Ethereum - one that scales its technology and values without degrading security or decentralization."
        />
        <meta name="author" content="https://matter-labs.io" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://zksync.io/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://zksync.io/favicon-16x16.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://zksync.io/apple-touch-icon.png"
        ></link>
        <link
          rel="mask-icon"
          color="#1E69FF"
          href="https://zksync.io/safari-pinned-tab.svg"
        ></link>
        <link rel="shortcut icon" href="https://zksync.io/favicon.ico"></link>
        <link
          rel="mask-icon"
          href="https://zksync.io/safari-pinned-tab.svg"
          color="#1e69ff"
        ></link>
        <meta
          property="og:image"
          content="https://zksync.io/share_image.png"
        ></meta>
        <meta property="og:image" content="https://zksync.io/share_image.png" />
        <meta
          property="og:image:secure_url"
          content="https://zksync.io/share_image.png"
        />
        <meta property="og:url" content="https://zksync.io" />
        <meta
          property="og:title"
          content="zkSync — Accelerating the mass adoption of crypto for personal sovereignty."
        />
        <meta
          property="og:description"
          content="zkSync is a ZK-rollup that represents the end-game for scaling Ethereum - one that scales its technology and values without degrading security or decentralization."
        />
        <meta
          property="og:image:alt"
          content="zkSync — Accelerating the mass adoption of crypto for personal sovereignty."
        />
        <meta
          name="twitter:image"
          content="https://zksync.io/share_image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="zkSync — Accelerating the mass adoption of crypto for personal sovereignty."
        />
        <meta
          name="twitter:description"
          content="zkSync is a ZK-rollup that represents the end-game for scaling Ethereum - one that scales its technology and values without degrading security or decentralization."
        />
        <meta name="twitter:site" content="@zksync" />
        <meta name="twitter:creator" content="@the_matter_labs" />
        <meta
          name="twitter:image:alt"
          content="zkSync — Accelerating the mass adoption of crypto for personal sovereignty."
        />
        <meta name="msapplication-TileColor" content="#1E69FF" />
        <meta
          name="msapplication-config"
          content="https://zksync.io/browserconfig.xml"
        />
        <meta name="theme-color" content="#000000" />
        <link
          rel="preload"
          as="image"
          href="https://zksync.io/images/ethereum_native.webp"
        ></link>
        <link
          rel="preload"
          as="image"
          href="https://zksync.io/images/limitless_scale.webp"
        ></link>
      </Head>
      <Box color={"white"}>
        <Flex
          height={"50px"}
          backdropFilter={"auto"}
          backdropBlur={"10px"}
          as="header"
          position="fixed"
          width={"100%"}
          zIndex={"10"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box position={"relative"} width={"100%"}>
            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              position={"static"}
              flexDirection={"row"}
              maxWidth={"1250px"}
              margin={"0 auto"}
              padding={"0 2.5rem"}
              width={"100%"}
            >
              <Flex
                flex={"1 1"}
                zIndex={"1"}
                position={"relative"}
                flexDirection={"row"}
                gap={"2.5rem"}
                alignItems={"center"}
              >
                <Link href="/">
                  <Image
                    src="/zksync_logo.svg"
                    alt="Logo zkSync"
                    height={"25px"}
                  />
                </Link>
              </Flex>
              <Flex
                flex={"1 1"}
                justifyContent={"flex-end"}
                position={"relative"}
                zIndex={"10"}
                alignItems={"center"}
              >
                <Flex gap={"1.25rem"} alignItems={"center"}>
                  <Flex
                    as="a"
                    href={"https://join.zksync.dev/"}
                    gap={"0.625rem"}
                    flexDirection={"row"}
                    alignItems={"center"}
                  >
                    <Image src="/discord_logo.svg" alt="Discord"></Image>
                  </Flex>
                  <Flex
                    as="a"
                    href={"https://zksync.mirror.xyz/"}
                    gap={"0.625rem"}
                    flexDirection={"row"}
                    alignItems={"center"}
                  >
                    <Image src="/mirror_logo.svg" alt="Mirror"></Image>
                  </Flex>
                  <Flex
                    as="a"
                    href={"https://twitter.com/zksync"}
                    gap={"0.625rem"}
                    flexDirection={"row"}
                    alignItems={"center"}
                  >
                    <Image src="/twitter_logo.svg" alt="Twitter"></Image>
                  </Flex>
                  <Flex
                    as="a"
                    href={"https://zksync.io/contact"}
                    gap={"0.625rem"}
                    flexDirection={"row"}
                    alignItems={"center"}
                  >
                    <Image src="/contact_logo.svg" alt="Contact"></Image>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Flex>

        <Box>
          <Flex
            maxWidth={"1600px"}
            position={"absolute"}
            width={"100vw"}
            height={"100vh"}
            minHeight={"650px"}
            top={"0"}
            left={"50%"}
            transform={"translateX(-50%)"}
            zIndex={"-1"}
          >
            <Box width={"100%"} height={"100%"} position={"relative"}>
              <Image
                src="\ethereum_native.webp"
                alt="background"
                width={"100%"}
                height={"100%"}
                objectFit={"cover"}
                margin={"auto"}
              />
            </Box>
          </Flex>
          <Flex
            flexDirection={"column"}
            alignItems={"flex-start"}
            justifyContent={"center"}
            margin={"0 auto"}
            width={"100%"}
          >
            <Flex
              flexDirection={"column"}
              alignItems={"flex-start"}
              justifyContent={"flex-start"}
              margin={"0 auto"}
              position={"relative"}
              width={"100%"}
              maxWidth={"1250px"}
              padding={"0 2.5rem"}
            >
              <Flex
                alignItems={"center"}
                minHeight={"100vh"}
                marginTop={"0"}
                height={"460px"}
                width={"100%"}
              >
                <Grid
                  templateAreas={`"none overline"
                  "none logo"
                  "ethereum text"
                  "none-2 button"`}
                  gridTemplateColumns={"5rem 43.75rem"}
                >
                  <GridItem area={"ethereum"}>
                    <Flex
                      width={"3.125rem"}
                      height={"3.125rem"}
                      backgroundColor={"#1e69ff"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      borderRadius={"1.5625rem"}
                    >
                      <Image
                        src="/ethereum_logo.svg"
                        alt="Logo eth"
                        width={"21px"}
                        height={"32px"}
                      ></Image>
                    </Flex>
                  </GridItem>
                  <GridItem area={"logo"} paddingBottom={"2.1875rem"}>
                    <Image
                      src="/zksync_logo.svg"
                      alt="Logo zkSync"
                      height={"104px"}
                      marginLeft={"0"}
                    ></Image>
                  </GridItem>
                  <GridItem area={"none"}></GridItem>
                  <GridItem area={"none-2"}></GridItem>
                  <GridItem area={"button"} marginTop={"2.5rem"}>
                    <Flex flexDirection={"row"}>
                      <CustomConnect />
                      <Text
                        fontSize={"2rem"}
                        fontWeight={"600"}
                        lineHeight={"2.75rem"}
                        paddingLeft={"50px"}
                        fontFamily={"Gilroy,Arial"}
                      >
                        The Trending $Future
                      </Text>
                    </Flex>
                  </GridItem>
                  <GridItem area={"text"} maxWidth={"none"}>
                    <Text
                      fontSize={"2rem"}
                      fontWeight={"600"}
                      lineHeight={"2.75rem"}
                      fontFamily={"Gilroy,Arial"}
                    >
                      Scaling Ethereum{`'`}s technology and values
                    </Text>
                  </GridItem>
                </Grid>
              </Flex>
            </Flex>
          </Flex>
        </Box>
        <Flex
          height={"100px"}
          backgroundColor={"black"}
          paddingLeft={"100px"}
          align={"center"}
          as={"footer"}
        >
          <Text color={"white"} fontSize={"15"}>
            © 2023 Matter Labs | All rights reserved
          </Text>
        </Flex>
      </Box>
    </div>
  );
};

export default Home;

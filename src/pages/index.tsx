import { BasciConnect, CustomConnect } from "components/ConnectWallet";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Venom Foundation - Secure by design, scalable by nature</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0D0D0D" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://venom.foundation/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://venom.foundation/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://venom.foundation/favicon-16x16.png"
        />
        <link rel="shortcut icon" href="https://venom.foundation/favicon.ico" />
        <meta
          name="description"
          content="The infinitely scalable asynchronous blockchain powered by T-Sol smart contracts to build a more connected future."
        />
        <link rel="canonical" href="https://venom.foundation/" />
        <link
          rel="modulepreload"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/entry.6d072c04.js"
        />
        <link
          rel="preload"
          as="style"
          href="https://venom.foundation/_nuxt/entry.8ca420f3.css"
        />
        <link
          rel="modulepreload"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/KitIcon.63448b8d.js"
        />
        <link
          rel="modulepreload"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/index.54284acc.js"
        />
        <link
          rel="modulepreload"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/BodyComponent.45d6e845.js"
        />
        <link
          rel="preload"
          as="style"
          href="https://venom.foundation/_nuxt/BodyComponent.b7caa55c.css"
        />
        <link
          rel="modulepreload"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/KitButton.1aff4ac7.js"
        />
        <link
          rel="modulepreload"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/BricksComponent.b3e48ea2.js"
        />
        <link
          rel="modulepreload"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/BrickItem.cf39c5fc.js"
        />
        <link
          rel="modulepreload"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/KitDivLink.vue.288a65fe.js"
        />
        <link
          rel="modulepreload"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/useAsset.9ba7393b.js"
        />
        <link
          rel="modulepreload"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/VenomWallet.3c32f382.js"
        />
        <link
          rel="preload"
          as="style"
          href="https://venom.foundation/_nuxt/ItemComponent.c352bd0d.css"
        />
        <link
          rel="modulepreload"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/KitReadMore.4b5243bd.js"
        />
        <link
          rel="modulepreload"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/PlatformItem.0c09a047.js"
        />
        <link
          rel="modulepreload"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/BoundariesBlock.35843202.js"
        />
        <link
          rel="modulepreload"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/BoundariesItem.882ea2f5.js"
        />
        <link
          rel="modulepreload"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/EcosystemBlock.684f19b9.js"
        />
        <link
          rel="modulepreload"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/ItemsGallery.a669ae5d.js"
        />
        <link
          rel="modulepreload"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/ItemComponent.e11c7e27.js"
        />
        <link
          rel="modulepreload"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/KitSwiper.ba91d535.js"
        />
        <link
          rel="modulepreload"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/OpportunityComponent.253867f2.js"
        />
        <link
          rel="modulepreload"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/DevelopersBlock.c1a91a13.js"
        />
        <link
          rel="modulepreload"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/WindowComponent.fe38a3ab.js"
        />
        <link
          rel="modulepreload"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/MobileGallery.70f2774b.js"
        />
        <link
          rel="modulepreload"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/UseCasesBlock.5fc21081.js"
        />
        <link
          rel="modulepreload"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/ExploreGrantsBlock.085d532b.js"
        />
        <link
          rel="modulepreload"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/ProcessOverviewBlock.6f6f2488.js"
        />
        <link
          rel="modulepreload"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/ProcessOverviewRoadmap.2e84eab9.js"
        />
        <link
          rel="modulepreload"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/ApplyGrantModal.ab80e05a.js"
        />
        <link
          rel="modulepreload"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/CommunityBlock.bc42e7f5.js"
        />
        <link
          rel="modulepreload"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/FaqBlock.b6fc34dc.js"
        />
        <link
          rel="modulepreload"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/FaqComponent.2596efea.js"
        />
        <link
          rel="modulepreload"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/PublicationsBlock.0a7378b9.js"
        />
        <link
          rel="modulepreload"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/StayAheadBlock.675f620d.js"
        />
        <link
          rel="modulepreload"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/EmailCompose.0fc2341f.js"
        />
        <link
          rel="modulepreload"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/KitEmailInput.ed2543f3.js"
        />
        <link
          rel="modulepreload"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/KitDivLink.90fb517b.js"
        />
        <link
          rel="prefetch"
          as="image"
          type="image/svg+xml"
          href="https://venom.foundation/_nuxt/Logo.8cbf5be7.svg"
        />
        <link
          rel="prefetch"
          as="image"
          type="image/svg+xml"
          href="https://venom.foundation/_nuxt/LogoHover.bd77be5b.svg"
        />
        <link
          rel="prefetch"
          as="image"
          type="image/svg+xml"
          href="https://venom.foundation/_nuxt/ellipse.c2bb3973.svg"
        />
        <link
          rel="prefetch"
          as="image"
          type="image/svg+xml"
          href="https://venom.foundation/_nuxt/footer.dd98d1e5.svg"
        />
        <link
          rel="prefetch"
          as="image"
          type="image/svg+xml"
          href="https://venom.foundation/_nuxt/footer-320.d1f92bb1.svg"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/AppStore.4a7b0654.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/ArrowDown.19210333.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/ArrowLeft.7a75449b.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/ArrowLink.bf081d0c.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/ArrowRight.418772a2.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/BigArrowRight.cbb3c18e.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/Blocks.c41a6d5f.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/Build.2ba748d5.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/Burger.12363144.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/Chrome.951fc209.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/Clock.2b6d62a7.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/Close.03de4727.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/Ecology.857e36a6.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/Bridge.540c0050.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/Oasis.47fd10fe.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/Oxychat.f16d3e62.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/Pools.294fd052.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/Scan.eba08e6e.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/Stake.250dffa7.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/Wallet.a9c19ed9.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/WeUp.88ea6d97.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/Web3.30205bb4.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/Forward.17fcb51c.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/Github.6827a9e8.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/GooglePlay.8510456c.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/Lamp.95e619f4.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/Laptop.7eabc63f.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/Rocket.bb6a7567.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/LegalScale.11972025.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/Link.aaf2e8de.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/Logo.f253a0bf.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/LogoHover.13c46499.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/AppStore.8ee85e2d.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/Browser.8bab535c.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/Google.0bd455e6.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/PlayMarket.a48d786d.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/Twitter.8583311c.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/Sharding.f69e6e1f.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/DevForum.55712a34.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/Discord.55e2a06e.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/Medium.88bd9cd4.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/Telegram.2f0e0731.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/Twitter.378259b4.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/StatusFail.90cc4ab5.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/StatusOk.b0e7c71a.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/UserGroup.1e10d54f.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/apk.a692aa8f.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/chrome.45db4819.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/google.e8227631.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/ios.e154d118.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/roadmap-extend.47166930.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/usecases-background.2ec2ec21.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/ellipse.91b99a99.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/footer-320.287b5115.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/footer.43207846.js"
        />
        <link
          rel="prefetch"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/error-component.a21e4e90.js"
        />
        <link
          rel="prefetch"
          as="image"
          type="image/svg+xml"
          href="https://venom.foundation/_nuxt/CBDC.47b5b8f5.svg"
        />
        <link
          rel="prefetch"
          as="image"
          type="image/svg+xml"
          href="https://venom.foundation/_nuxt/DAO.e73eba23.svg"
        />
        <link
          rel="prefetch"
          as="image"
          type="image/svg+xml"
          href="https://venom.foundation/_nuxt/DID.06ecf63e.svg"
        />
        <link
          rel="prefetch"
          as="image"
          type="image/svg+xml"
          href="https://venom.foundation/_nuxt/DeFi.2e0e1e2e.svg"
        />
        <link
          rel="prefetch"
          as="image"
          type="image/svg+xml"
          href="https://venom.foundation/_nuxt/GameFi.64bbc27c.svg"
        />
        <link
          rel="prefetch"
          as="image"
          type="image/svg+xml"
          href="https://venom.foundation/_nuxt/SocialFi.3388b5aa.svg"
        />
        <link
          rel="prefetch"
          as="image"
          type="image/svg+xml"
          href="https://venom.foundation/_nuxt/TradeFi.29c5a68e.svg"
        />
        <link
          rel="prefetch"
          as="image"
          type="image/svg+xml"
          href="https://venom.foundation/_nuxt/ecosystem-big.957ee963.svg"
        />
        <link
          rel="prefetch"
          as="image"
          type="image/svg+xml"
          href="https://venom.foundation/_nuxt/ecosystem-tablet.5694c442.svg"
        />
        <link
          rel="prefetch"
          as="image"
          type="image/webp"
          href="https://venom.foundation/_nuxt/header-big.caf69b04.webp"
        />
        <link
          rel="prefetch"
          as="image"
          type="image/webp"
          href="https://venom.foundation/_nuxt/adgm.caa85f3b.webp"
        />
        <link
          rel="prefetch"
          as="image"
          type="image/webp"
          href="https://venom.foundation/_nuxt/1.29fa28b6.webp"
        />
        <link
          rel="prefetch"
          as="image"
          type="image/webp"
          href="https://venom.foundation/_nuxt/2.6c23e285.webp"
        />
        <link
          rel="prefetch"
          as="image"
          type="image/webp"
          href="https://venom.foundation/_nuxt/3.527c6779.webp"
        />
        <link
          rel="prefetch"
          as="image"
          type="image/webp"
          href="https://venom.foundation/_nuxt/4.6affe21f.webp"
        />
        <link
          rel="prefetch"
          as="image"
          type="image/webp"
          href="https://venom.foundation/_nuxt/5.63fef169.webp"
        />
        <link
          rel="prefetch"
          as="image"
          type="image/webp"
          href="https://venom.foundation/_nuxt/6.fc49b16a.webp"
        />
        <link
          rel="prefetch"
          as="image"
          type="image/webp"
          href="https://venom.foundation/_nuxt/7.5c104520.webp"
        />
        <link
          rel="prefetch"
          as="image"
          type="image/webp"
          href="https://venom.foundation/_nuxt/8.f6e79674.webp"
        />
        <link
          rel="prefetch"
          as="image"
          type="image/webp"
          href="https://venom.foundation/_nuxt/1024.55326121.webp"
        />
        <link
          rel="prefetch"
          as="image"
          type="image/webp"
          href="https://venom.foundation/_nuxt/1200.6d319130.webp"
        />
        <link
          rel="prefetch"
          as="image"
          type="image/webp"
          href="https://venom.foundation/_nuxt/1366.f7fdb4e5.webp"
        />
        <link
          rel="prefetch"
          as="image"
          type="image/webp"
          href="https://venom.foundation/_nuxt/max.3294019b.webp"
        />
        <link
          rel="stylesheet"
          href="https://venom.foundation/_nuxt/entry.8ca420f3.css"
        />
        <link
          rel="stylesheet"
          href="https://venom.foundation/_nuxt/BodyComponent.b7caa55c.css"
        />
        <link
          rel="stylesheet"
          href="https://venom.foundation/_nuxt/ItemComponent.c352bd0d.css"
        />
        <link
          rel="stylesheet"
          href="https://venom.foundation/_nuxt/index.d08fc2e7.css"
        />
        <link href="https://www.googletagmanager.com" rel="preconnect" />
        <link
          rel="modulepreload"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/PageEcosystemBanner.cec94351.js"
        />
        <link
          rel="stylesheet"
          href="https://venom.foundation/_nuxt/PageEcosystemBanner.6d01e606.css"
        />
        <link
          rel="modulepreload"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/EcosystemExplorerBlock.fd2bb077.js"
        />
        <link
          rel="stylesheet"
          href="https://venom.foundation/_nuxt/ecosystem.0d221a97.css"
        />
        <script
          type="text/javascript"
          async={true}
          src="https://www.google-analytics.com/analytics.js"
        ></script>
        <script
          type="text/javascript"
          async={true}
          src="https://www.googletagmanager.com/gtag/js?id=G-0RD34SCBJ0&amp;l=dataLayer&amp;cx=c"
        ></script>
        <script
          async={true}
          src="https://www.googletagmanager.com/gtag/js?id=GTM-W3V9XL9&amp;l=dataLayer"
        ></script>
        <link
          rel="modulepreload"
          as="script"
          crossOrigin=""
          href="https://venom.foundation/_nuxt/ecosystem.7803247f.js"
        />
      </Head>
      <body>
        <div id="__nuxt">
          <div id="root" data-v-82da5e0f="">
            <div className="header-block" data-v-82da5e0f="" data-v-aff382e3="">
              <div
                className="container desktop-header"
                data-v-aff382e3=""
                data-v-ed31b861=""
              >
                <div
                  className="header-links-component wrapper"
                  data-v-ed31b861=""
                >
                  <div className="logo" data-v-ed31b861="">
                    <a
                      aria-current="page"
                      className="router-link-active router-link-exact-active logo-component pointer"
                      aria-label="Venom main page"
                      data-v-ed31b861=""
                      data-v-10402e2e=""
                    >
                      <img
                        src="https://venom.foundation/_nuxt/Logo.8cbf5be7.svg"
                        alt="Venom logo"
                        className="Venom logo"
                        data-v-10402e2e=""
                      />
                      <img
                        src="https://venom.foundation/_nuxt/LogoHover.bd77be5b.svg"
                        alt="Venom logo hover state"
                        className="logo-hover"
                        data-v-10402e2e=""
                      />
                    </a>
                  </div>
                  <nav className="links" data-v-ed31b861="">
                    <div
                      className="header-link"
                      data-v-ed31b861=""
                      data-v-c9891cd2=""
                    >
                      <div className="is-link link-head" data-v-c9891cd2="">
                        <a
                          aria-current="page"
                          className="router-link-active router-link-exact-active"
                          data-v-c9891cd2=""
                          data-v-58e5307b=""
                        >
                          Home
                        </a>
                      </div>
                    </div>

                    <div
                      className="header-link"
                      data-v-ed31b861=""
                      data-v-c9891cd2=""
                    >
                      <div className="is-link link-head" data-v-c9891cd2="">
                        <a
                          href="https://docs.venom.foundation"
                          rel="noopener noreferrer"
                          target="_blank"
                          data-v-c9891cd2=""
                          data-v-58e5307b=""
                        >
                          Build
                        </a>
                        <div className="icon" data-v-c9891cd2="">
                          <div className="kit-icon is-fill" data-v-c9891cd2="">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.33716 5.084C7.92295 5.08108 7.58481 5.41449 7.58189 5.8287C7.57897 6.2429 7.91238 6.58105 8.32658 6.58397L12.3268 6.61217L5.34467 13.5943C5.05178 13.8872 5.05178 14.3621 5.34467 14.655C5.63756 14.9479 6.11244 14.9479 6.40533 14.655L13.3865 7.67388L13.4152 11.6727C13.4182 12.0869 13.7564 12.4203 14.1706 12.4173C14.5848 12.4143 14.9182 12.0761 14.9152 11.6619L14.8739 5.91626C14.8852 5.71071 14.8124 5.50137 14.6553 5.34435C14.5064 5.19538 14.3103 5.12218 14.1151 5.12474L8.33716 5.084Z"
                                fill="white"
                                fillOpacity="0.4"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="header-link"
                      data-v-ed31b861=""
                      data-v-c9891cd2=""
                    >
                      <div className="link-head" data-v-c9891cd2="">
                        Ecosystem
                        <div className="is-dropdown icon" data-v-c9891cd2="">
                          <div className="kit-icon is-fill" data-v-c9891cd2="">
                            <svg
                              width="26"
                              height="26"
                              viewBox="0 0 26 26"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.66675 10.8335L13.0001 15.1668L17.3334 10.8335"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="dropdown-wrapper" data-v-c9891cd2="">
                        <div className="dropdown" data-v-c9891cd2="">
                          <a
                            href="https://venomwallet.com"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="link"
                            data-v-c9891cd2=""
                          >
                            <div className="text" data-v-c9891cd2="">
                              Venom Wallet
                            </div>
                            <div className="icon" data-v-c9891cd2="">
                              <div
                                className="kit-icon is-fill"
                                data-v-c9891cd2=""
                              >
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8.33716 5.084C7.92295 5.08108 7.58481 5.41449 7.58189 5.8287C7.57897 6.2429 7.91238 6.58105 8.32658 6.58397L12.3268 6.61217L5.34467 13.5943C5.05178 13.8872 5.05178 14.3621 5.34467 14.655C5.63756 14.9479 6.11244 14.9479 6.40533 14.655L13.3865 7.67388L13.4152 11.6727C13.4182 12.0869 13.7564 12.4203 14.1706 12.4173C14.5848 12.4143 14.9182 12.0761 14.9152 11.6619L14.8739 5.91626C14.8852 5.71071 14.8124 5.50137 14.6553 5.34435C14.5064 5.19538 14.3103 5.12218 14.1151 5.12474L8.33716 5.084Z"
                                    fill="white"
                                    fillOpacity="0.4"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </a>
                          <a
                            href="https://testnet.venomscan.com"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="link"
                            data-v-c9891cd2=""
                          >
                            <div className="text" data-v-c9891cd2="">
                              Venom Scan
                            </div>
                            <div className="icon" data-v-c9891cd2="">
                              <div
                                className="kit-icon is-fill"
                                data-v-c9891cd2=""
                              >
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8.33716 5.084C7.92295 5.08108 7.58481 5.41449 7.58189 5.8287C7.57897 6.2429 7.91238 6.58105 8.32658 6.58397L12.3268 6.61217L5.34467 13.5943C5.05178 13.8872 5.05178 14.3621 5.34467 14.655C5.63756 14.9479 6.11244 14.9479 6.40533 14.655L13.3865 7.67388L13.4152 11.6727C13.4182 12.0869 13.7564 12.4203 14.1706 12.4173C14.5848 12.4143 14.9182 12.0761 14.9152 11.6619L14.8739 5.91626C14.8852 5.71071 14.8124 5.50137 14.6553 5.34435C14.5064 5.19538 14.3103 5.12218 14.1151 5.12474L8.33716 5.084Z"
                                    fill="white"
                                    fillOpacity="0.4"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </a>
                          <a
                            href="/ecosystem"
                            className="link"
                            data-v-c9891cd2=""
                          >
                            <div className="text" data-v-c9891cd2="">
                              dApp Explorer
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div
                      className="header-link"
                      data-v-ed31b861=""
                      data-v-c9891cd2=""
                    >
                      <div className="is-link link-head" data-v-c9891cd2="">
                        <a
                          aria-current="page"
                          href="#explore_grants"
                          className="router-link-active router-link-exact-active"
                          data-v-c9891cd2=""
                          data-v-58e5307b=""
                        >
                          Grants
                        </a>
                      </div>
                    </div>
                  </nav>
                  <div
                    className="social-compose is-medium social-compose"
                    data-v-ed31b861=""
                    data-v-465bfb6b=""
                  >
                    <a
                      href="https://discord.venom.foundation"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="social-media-item discord is-medium"
                      aria-label="Discord"
                      data-v-465bfb6b=""
                    >
                      <div className="icon" data-v-465bfb6b="">
                        <div className="kit-icon is-fill" data-v-465bfb6b="">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.8695 5.75623C17.5692 5.16091 16.1964 4.73857 14.7864 4.5C14.5934 4.84494 14.4188 5.19983 14.2633 5.5632C12.7613 5.33686 11.2339 5.33686 9.73188 5.5632C9.5763 5.19987 9.40172 4.84498 9.20884 4.5C7.79786 4.74059 6.42423 5.16393 5.1226 5.75934C2.53854 9.5825 1.83804 13.3107 2.18829 16.986C3.70158 18.1041 5.39539 18.9544 7.19608 19.5C7.60154 18.9547 7.96032 18.3761 8.26862 17.7705C7.68305 17.5518 7.11788 17.282 6.57964 16.9642C6.72129 16.8615 6.85984 16.7556 6.99371 16.6529C8.55986 17.3894 10.2692 17.7713 11.9999 17.7713C13.7306 17.7713 15.44 17.3894 17.0062 16.6529C17.1416 16.7634 17.2801 16.8692 17.4202 16.9642C16.881 17.2825 16.3147 17.5529 15.7281 17.7721C16.0361 18.3774 16.3949 18.9555 16.8007 19.5C18.6029 18.9566 20.298 18.1067 21.8116 16.9875C22.2225 12.7254 21.1095 9.03144 18.8695 5.75623ZM8.71227 14.7257C7.73624 14.7257 6.92989 13.84 6.92989 12.7503C6.92989 11.6606 7.70822 10.7671 8.70915 10.7671C9.71009 10.7671 10.5102 11.6606 10.4931 12.7503C10.476 13.84 9.70697 14.7257 8.71227 14.7257ZM15.2876 14.7257C14.31 14.7257 13.5068 13.84 13.5068 12.7503C13.5068 11.6606 14.2851 10.7671 15.2876 10.7671C16.2901 10.7671 17.084 11.6606 17.0669 12.7503C17.0498 13.84 16.2823 14.7257 15.2876 14.7257Z"
                              fill="white"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://twitter.com/venomfoundation"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="social-media-item twitter is-medium"
                      aria-label="Twitter"
                      data-v-465bfb6b=""
                    >
                      <div className="icon" data-v-465bfb6b="">
                        <div className="kit-icon is-fill" data-v-465bfb6b="">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19.3402 8.23421C19.3515 8.39695 19.3515 8.55969 19.3515 8.72393C19.3515 13.7284 15.5417 19.5 8.5754 19.5V19.497C6.51753 19.5 4.50241 18.9105 2.77002 17.7991C3.06925 17.8351 3.36998 17.8531 3.67146 17.8539C5.37686 17.8554 7.0335 17.2831 8.37517 16.2295C6.75452 16.1987 5.33336 15.142 4.83689 13.5994C5.4046 13.7089 5.98957 13.6864 6.54678 13.5341C4.77989 13.1771 3.50872 11.6247 3.50872 9.82186C3.50872 9.80536 3.50872 9.78961 3.50872 9.77386C4.03519 10.0671 4.62465 10.2298 5.22761 10.2478C3.56347 9.13565 3.0505 6.92179 4.05544 5.1909C5.97832 7.557 8.81539 8.99541 11.8609 9.14765C11.5557 7.83224 11.9727 6.45382 12.9566 5.52913C14.482 4.09522 16.8811 4.16872 18.315 5.69337C19.1632 5.52613 19.9762 5.2149 20.7201 4.77393C20.4374 5.65062 19.8457 6.39533 19.0552 6.86855C19.8059 6.78005 20.5394 6.57907 21.2301 6.27234C20.7216 7.03429 20.0812 7.698 19.3402 8.23421Z"
                              fill="white"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://forum.venom.foundation"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="social-media-item dev-forum is-medium"
                      aria-label="Forum"
                      data-v-465bfb6b=""
                    >
                      <div className="icon" data-v-465bfb6b="">
                        <div className="kit-icon is-fill" data-v-465bfb6b="">
                          <svg
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9.33333 23.9156V21H7C5.067 21 3.5 19.433 3.5 17.5V7C3.5 5.067 5.067 3.5 7 3.5H21C22.933 3.5 24.5 5.067 24.5 7V17.5C24.5 19.433 22.933 21 21 21H14.495L10.2811 24.3711C10.106 24.5112 9.86607 24.5385 9.66397 24.4413C9.46187 24.3442 9.33333 24.1398 9.33333 23.9156ZM11.325 8.50866C10.8693 8.05305 10.1307 8.05305 9.67504 8.50866C9.21943 8.96427 9.21943 9.70296 9.67504 10.1586L11.1834 11.667L9.67504 13.1753C9.21943 13.6309 9.21943 14.3696 9.67504 14.8252C10.1307 15.2809 10.8693 15.2809 11.325 14.8252L13.6583 12.4919C13.8771 12.2731 14 11.9764 14 11.667C14 11.3575 13.8771 11.0608 13.6583 10.842L11.325 8.50866ZM15.1667 14.0003C14.5223 14.0003 14 14.5226 14 15.167C14 15.8113 14.5223 16.3336 15.1667 16.3336H17.5C18.1443 16.3336 18.6667 15.8113 18.6667 15.167C18.6667 14.5226 18.1443 14.0003 17.5 14.0003H15.1667Z"
                              fill="white"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://medium.com/@venom.foundation"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="social-media-item medium is-medium"
                      aria-label="Medium"
                      data-v-465bfb6b=""
                    >
                      <div className="icon" data-v-465bfb6b="">
                        <div className="kit-icon is-fill" data-v-465bfb6b="">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.4708 12.0001C13.4708 15.6009 10.5716 18.5199 6.99542 18.5199C3.41923 18.5199 0.519775 15.6009 0.519775 12.0001C0.519775 8.39924 3.41901 5.47998 6.99542 5.47998C10.5718 5.47998 13.4708 8.39924 13.4708 12.0001Z"
                              fill="white"
                            ></path>
                            <path
                              d="M20.5746 12C20.5746 15.3894 19.125 18.1381 17.3368 18.1381C15.5486 18.1381 14.099 15.3894 14.099 12C14.099 8.61057 15.5484 5.86182 17.3366 5.86182C19.1248 5.86182 20.5744 8.60969 20.5744 12"
                              fill="white"
                            ></path>
                            <path
                              d="M23.4803 12.0003C23.4803 15.0364 22.9705 17.4991 22.3415 17.4991C21.7125 17.4991 21.203 15.037 21.203 12.0003C21.203 8.96355 21.7128 6.50146 22.3415 6.50146C22.9703 6.50146 23.4803 8.96333 23.4803 12.0003Z"
                              fill="white"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://t.me/VenomFoundationOfficial"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="social-media-item telegram is-medium"
                      aria-label="Telegram"
                      data-v-465bfb6b=""
                    >
                      <div className="icon" data-v-465bfb6b="">
                        <div className="kit-icon is-fill" data-v-465bfb6b="">
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M24.5901 25.2687V25.2662L24.6121 25.2136L28.282 6.71089V6.65215C28.282 6.19081 28.1107 5.78821 27.7411 5.54713C27.4169 5.33543 27.0436 5.32074 26.7817 5.34032C26.538 5.36237 26.2974 5.41162 26.0646 5.48717C25.9654 5.51918 25.8674 5.5551 25.7709 5.59486L25.755 5.60098L5.29439 13.6274L5.28827 13.6298C5.22606 13.6511 5.16518 13.676 5.10593 13.7045C4.96042 13.7698 4.82081 13.8476 4.68864 13.937C4.42554 14.1181 3.92504 14.5439 4.00948 15.2194C4.07923 15.7799 4.4647 16.1348 4.72535 16.3196C4.87921 16.4274 5.04462 16.5177 5.21852 16.5888L5.25767 16.6059L5.26991 16.6096L5.27848 16.6133L8.85909 17.8186C8.84685 18.0426 8.86888 18.2714 8.92884 18.4978L10.7216 25.3005C10.8195 25.6713 11.0312 26.0021 11.3268 26.2465C11.6224 26.4908 11.9871 26.6365 12.3697 26.6629C12.7523 26.6894 13.1336 26.5954 13.46 26.394C13.7864 26.1927 14.0416 25.8941 14.1896 25.5403L16.9895 22.5471L21.7975 26.2329L21.866 26.2623C22.3029 26.4532 22.7104 26.5132 23.0836 26.463C23.4569 26.4116 23.753 26.255 23.9757 26.0775C24.2333 25.8687 24.4387 25.6026 24.5754 25.3005L24.5852 25.2797L24.5888 25.2723L24.5901 25.2687ZM10.7032 18.0303C10.6834 17.9548 10.6881 17.875 10.7167 17.8024C10.7453 17.7298 10.7963 17.6682 10.8623 17.6265L23.0029 9.91705C23.0029 9.91705 23.7175 9.48262 23.6918 9.91705C23.6918 9.91705 23.8191 9.99292 23.4361 10.349C23.0739 10.688 14.7831 18.6924 13.9437 19.5025C13.897 19.5478 13.8643 19.6055 13.8494 19.6689L12.496 24.833L10.7032 18.0291V18.0303Z"
                              fill="#EEEEEE"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="mobile-header"
                data-v-aff382e3=""
                data-v-1e49e76c=""
              >
                <div
                  className="is-opacity header-top-wrapper"
                  data-v-1e49e76c=""
                >
                  <div className="top-compose wrapper" data-v-1e49e76c="">
                    <a
                      aria-current="page"
                      href="#"
                      className="router-link-active router-link-exact-active logo-component pointer logo"
                      aria-label="Venom main page"
                      data-v-1e49e76c=""
                      data-v-10402e2e=""
                    >
                      <img
                        src="https://venom.foundation/_nuxt/Logo.8cbf5be7.svg"
                        alt="Venom logo"
                        className="Venom logo"
                        data-v-10402e2e=""
                      />
                      <img
                        src="https://venom.foundation/_nuxt/LogoHover.bd77be5b.svg"
                        alt="Venom logo hover state"
                        className="logo-hover"
                        data-v-10402e2e=""
                      />
                    </a>
                    <div
                      className="menu-hamburger-wrapper hamburger"
                      data-v-1e49e76c=""
                      data-v-42b5453a=""
                    >
                      <div className="hamburger-compose" data-v-42b5453a="">
                        <span data-v-42b5453a=""></span>
                        <span data-v-42b5453a=""></span>
                        <span data-v-42b5453a=""></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="kit-spot top left"
                data-v-aff382e3=""
                data-v-c951ae60=""
              ></div>
              <div
                className="kit-spot top right"
                data-v-aff382e3=""
                data-v-c951ae60=""
              ></div>
            </div>

            <div id="index-page" className="page" data-v-b87b2b90="">
              <div
                className="header-body-component wrapper"
                data-v-b87b2b90=""
                data-v-864e500f=""
              >
                <h1 className="title" data-v-864e500f="">
                  Secure by
                  <span data-v-864e500f="">Design.</span>
                  <br data-v-864e500f="" />
                  Scalable by
                  <span data-v-864e500f="">Nature.</span>
                </h1>
                <div className="button-compose" data-v-864e500f="">
                  <CustomConnect
                    normalComp={
                      <button
                        className="kit-button is-primary btn pulse-button"
                        data-v-864e500f=""
                        data-v-d855b919=""
                      >
                        <div className="label" data-v-d855b919="">
                          Claim $Venom
                        </div>
                      </button>
                    }
                    clickComp={
                      <button
                        className="kit-button is-primary btn"
                        data-v-864e500f=""
                        data-v-d855b919=""
                      >
                        <div className="label" data-v-d855b919="">
                          Please wait...
                        </div>
                      </button>
                    }
                  />
                </div>
                <div
                  className="header-bricks-wrapper bricks"
                  data-v-864e500f=""
                  data-v-0f76d949=""
                >
                  <div className="header-bricks" data-v-0f76d949="">
                    <a
                      href="https://cointelegraph.com/press-releases/venom-foundation-announces-the-release-of-its-public-testnet"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="header-brick-item with-tag brick"
                      data-v-0f76d949=""
                      data-v-f6607e76=""
                    >
                      <div
                        className="tag"
                        style={{ backgroundColor: "#053EB4" }}
                        data-v-f6607e76=""
                      >
                        New
                      </div>

                      <div className="regular-text" data-v-f6607e76="">
                        Venom Foundation releases its Public Testnet
                      </div>
                    </a>
                    <a
                      href="https://venom.network"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="header-brick-item with-tag brick"
                      data-v-0f76d949=""
                      data-v-f6607e76=""
                    >
                      <div
                        className="tag"
                        style={{ backgroundColor: "#11A97D" }}
                        data-v-f6607e76=""
                      >
                        Live
                      </div>

                      <div className="regular-text" data-v-f6607e76="">
                        Venom Network launches their Testnet website
                      </div>
                    </a>
                    <div
                      className="header-brick-item with-icon brick"
                      data-v-0f76d949=""
                      data-v-f6607e76=""
                    >
                      <div className="icon" data-v-f6607e76="">
                        <div className="kit-icon is-fill" data-v-f6607e76="">
                          <svg
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.99797 8.99859H4.99672C4.16807 8.99829 3.4964 8.32662 3.49609 7.49797V4.49672C3.4964 3.66807 4.16807 2.9964 4.99672 2.99609H7.99797C8.82662 2.9964 9.49829 3.66807 9.49859 4.49672V7.49797C9.49829 8.32662 8.82662 8.99829 7.99797 8.99859Z"
                              stroke="#11A97D"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M20.0031 8.99859H14.0006C13.172 8.99829 12.5003 8.32662 12.5 7.49797V4.49672C12.5003 3.66807 13.172 2.9964 14.0006 2.99609H20.0031C20.8318 2.9964 21.5034 3.66807 21.5037 4.49672V7.49797C21.5034 8.32662 20.8318 8.99829 20.0031 8.99859Z"
                              stroke="#11A97D"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M20.0019 18.0025H17.0006C16.172 18.0022 15.5003 17.3305 15.5 16.5019V13.5006C15.5003 12.672 16.172 12.0003 17.0006 12H20.0019C20.8305 12.0003 21.5022 12.672 21.5025 13.5006V16.5019C21.5022 17.3305 20.8305 18.0022 20.0019 18.0025Z"
                              stroke="#11A97D"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10.499 21.0023H5.49693C4.96623 21.0025 4.45722 20.7917 4.08196 20.4164C3.7067 20.0412 3.49595 19.5322 3.49609 19.0015V14.4286C3.49595 13.8979 3.7067 13.3889 4.08196 13.0136C4.45722 12.6383 4.96623 12.4276 5.49693 12.4277H10.499C11.0297 12.4276 11.5387 12.6383 11.914 13.0136C12.2892 13.3889 12.5 13.8979 12.4998 14.4286V19.0015C12.5 19.5322 12.2892 20.0412 11.914 20.4164C11.5387 20.7917 11.0297 21.0025 10.499 21.0023Z"
                              stroke="#11A97D"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M9.42583 16L7.64018 17.7867L6.56836 16.7149"
                              stroke="#11A97D"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="regular-text" data-v-f6607e76="">
                        Layer 0 blockchain
                      </div>
                    </div>
                    <div
                      className="header-brick-item with-icon brick"
                      data-v-0f76d949=""
                      data-v-f6607e76=""
                    >
                      <div className="icon" data-v-f6607e76="">
                        <div className="kit-icon is-fill" data-v-f6607e76="">
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.0775 11.6509L11.9844 16.744H15.3798"
                              stroke="#15CC97"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M10.2876 8.25391H13.684L8.58984 13.349"
                              stroke="#15CC97"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <circle
                              cx="12.8336"
                              cy="12.5003"
                              r="9.00375"
                              stroke="#15CC97"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></circle>
                          </svg>
                        </div>
                      </div>
                      <div className="regular-text" data-v-f6607e76="">
                        Dynamic sharding
                      </div>
                    </div>
                    <div
                      className="header-brick-item with-regular-and-big-text brick"
                      data-v-0f76d949=""
                      data-v-f6607e76=""
                    >
                      <div className="regular-text" data-v-f6607e76="">
                        Transactions per second
                      </div>
                      <div className="big-text" data-v-f6607e76="">
                        100,000+
                      </div>
                    </div>
                    <div
                      className="header-brick-item with-regular-and-big-text brick"
                      data-v-0f76d949=""
                      data-v-f6607e76=""
                    >
                      <div className="regular-text" data-v-f6607e76="">
                        Licensed by
                      </div>
                      <div className="big-text" data-v-f6607e76="">
                        Abu Dhabi Global Market&nbsp;<sup>©</sup>
                      </div>
                    </div>
                    <div
                      className="header-brick-item with-regular-and-big-text brick"
                      data-v-0f76d949=""
                      data-v-f6607e76=""
                    >
                      <div className="regular-text" data-v-f6607e76="">
                        Avg. transaction fee
                      </div>
                      <div className="big-text" data-v-f6607e76="">
                        &lt;$0.0002
                      </div>
                    </div>
                    <div
                      className="header-brick-item with-big-icon brick"
                      data-v-0f76d949=""
                      data-v-f6607e76=""
                    >
                      <div className="regular-text" data-v-f6607e76="">
                        Zero Emission Policy
                      </div>

                      <div className="big-icon" data-v-f6607e76="">
                        <div className="kit-icon is-fill" data-v-f6607e76="">
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.84814 15.5004H6.33427C7.43884 15.5004 8.33427 14.605 8.33427 13.5004V11.5004C8.33427 10.3958 9.22971 9.50042 10.3343 9.50042H12.3343C13.4388 9.50042 14.3343 8.60499 14.3343 7.50042V3.7251"
                              stroke="#15CC97"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M17.5835 19.9994C20.1956 19.9994 20.8367 16.7487 22.3335 15.885C21.2278 14.37 19.459 13.4818 17.5835 13.4998"
                              stroke="#15CC97"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M17.5842 19.9995C15.7893 19.9995 14.3342 18.5444 14.3342 16.7495C14.3342 14.9546 15.7893 13.4995 17.5842 13.4995"
                              stroke="#15CC97"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M17.8232 16.5161C15.9699 16.8261 14.3367 17.9113 13.3328 19.4997"
                              stroke="#15CC97"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M21.1031 10.5003C20.1149 6.159 16.1 3.19344 11.66 3.5253C7.2201 3.85715 3.69065 7.3866 3.3588 11.8265C3.02694 16.2665 5.9925 20.2814 10.3338 21.2696"
                              stroke="#15CC97"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  src="https://venom.foundation/_nuxt/header-big.caf69b04.webp"
                  alt="Header background"
                  className="background"
                  data-v-864e500f=""
                />
              </div>
              <div
                className="venom-wallet wrapper default-margin"
                data-v-b87b2b90=""
                data-v-a9e36021=""
              >
                <div className="content" data-v-a9e36021="">
                  <div className="content-title" data-v-a9e36021="">
                    Your Venom Wallet
                  </div>
                  <div className="content-text" data-v-a9e36021="">
                    Access your non-custodial Venom wallet seamlessly on laptops
                    and PCs with our browser extension, or on the go with our
                    easy to use mobile app. Available on your App Store.
                  </div>
                  <a
                    href="https://docs.venom.foundation/general/wallet/create-a-new-wallet-account"
                    rel="noopener noreferrer"
                    target="_self"
                    className="kit-read-more"
                    data-v-a9e36021=""
                    data-v-d93ab3f1=""
                  >
                    <div className="text" data-v-d93ab3f1="">
                      Read more
                    </div>
                    <div className="icon" data-v-d93ab3f1="">
                      <div className="kit-icon is-fill" data-v-d93ab3f1="">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19 12H5"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M14 17L19 12"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M14 7L19 12"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </a>
                  <div className="platforms" data-v-a9e36021="">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.venom.wallet"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="platform-item"
                      data-v-a9e36021=""
                      data-v-0c056308=""
                    >
                      <div className="icon" data-v-0c056308="">
                        <div className="kit-icon is-fill" data-v-0c056308="">
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M25.0667 12.9558L11.4153 5.03883C10.8924 4.72566 10.2822 4.54492 9.62916 4.54492C8.36127 4.54492 7.23725 5.26778 6.63558 6.30395L19.1778 18.8435L25.0667 12.9558Z"
                              fill="#EEEEEE"
                            ></path>
                            <path
                              d="M6.17188 8.15244V31.847L18.0216 19.9996L6.17188 8.15244Z"
                              fill="#EEEEEE"
                            ></path>
                            <path
                              d="M6.63581 33.6952C7.23763 34.7313 8.36168 35.454 9.62915 35.454C10.2681 35.454 10.868 35.2813 11.3825 34.978L11.4233 34.9541L25.0898 27.0663L19.1779 21.1556L6.63581 33.6952Z"
                              fill="#EEEEEE"
                            ></path>
                            <path
                              d="M26.556 26.2201L32.007 23.074C33.0913 22.4886 33.8274 21.3456 33.8274 20.0274C33.8274 18.7187 33.1012 17.5813 32.0277 16.994L32.0154 16.9856L26.5303 13.8046L20.3341 19.9996L26.556 26.2201Z"
                              fill="#EEEEEE"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="content" data-v-0c056308="">
                        <div className="prefix" data-v-0c056308="">
                          GET IN ON
                        </div>
                        <div className="name" data-v-0c056308="">
                          Google Play
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://apps.apple.com/us/app/venom-blockchain-wallet/id1622970889"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="platform-item"
                      data-v-a9e36021=""
                      data-v-0c056308=""
                    >
                      <div className="icon" data-v-0c056308="">
                        <div className="kit-icon is-fill" data-v-0c056308="">
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M28.2321 21.0606C28.1932 16.8494 31.7686 14.8007 31.9321 14.7053C29.9072 11.8269 26.7687 11.4336 25.6658 11.4022C23.0298 11.1318 20.4729 12.9401 19.1301 12.9401C17.7606 12.9401 15.6928 11.4283 13.4642 11.4728C10.5964 11.5159 7.9135 13.1348 6.44207 15.6487C3.40541 20.7744 5.67018 28.307 8.57953 32.4502C10.0349 34.4793 11.7355 36.745 13.9614 36.6653C16.139 36.5777 16.9525 35.3116 19.5804 35.3116C22.1842 35.3116 22.9481 36.6653 25.2182 36.6143C27.5553 36.5777 29.0268 34.576 30.4312 32.5286C32.113 30.2028 32.7884 27.9124 32.8152 27.7948C32.7603 27.7765 28.2763 26.108 28.2321 21.0606Z"
                              fill="#EEEEEE"
                            ></path>
                            <path
                              d="M23.9438 8.67666C25.115 7.24855 25.9164 5.30564 25.6939 3.33398C23.9987 3.40715 21.8787 4.47726 20.6578 5.87401C19.5777 7.10482 18.6129 9.12221 18.8621 11.0194C20.7664 11.1579 22.7216 10.0826 23.9438 8.67666Z"
                              fill="#EEEEEE"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="content" data-v-0c056308="">
                        <div className="prefix" data-v-0c056308="">
                          Download on the
                        </div>
                        <div className="name" data-v-0c056308="">
                          App Store
                        </div>
                      </div>
                    </a>
                    <a
                      href="/venom-wallet.apk"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="platform-item"
                      data-v-a9e36021=""
                      data-v-0c056308=""
                    >
                      <div className="icon" data-v-0c056308="">
                        <div className="kit-icon is-fill" data-v-0c056308="">
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.7276 35.454C9.87763 35.454 9.14972 35.1511 8.5439 34.5453C7.93808 33.9395 7.63569 33.2121 7.63672 32.3631V7.63583C7.63672 6.78583 7.93963 6.05792 8.54545 5.45211C9.15127 4.84629 9.87866 4.54389 10.7276 4.54492H23.0913L32.364 13.8177V32.3631C32.364 33.2131 32.0611 33.941 31.4553 34.5468C30.8494 35.1526 30.122 35.455 29.2731 35.454H10.7276ZM12.2731 30.8176H27.7276C27.6246 29.5555 27.2382 28.3964 26.5685 27.3404C25.8988 26.2843 25.0231 25.4472 23.9413 24.829L25.4094 22.2017C25.461 22.0987 25.4738 21.9828 25.4481 21.854C25.4223 21.7252 25.345 21.6351 25.2163 21.5836C25.1132 21.532 25.0035 21.5192 24.8871 21.5449C24.7707 21.5707 24.6872 21.6351 24.6367 21.7381L23.1299 24.4426C22.6147 24.2366 22.0996 24.0753 21.5844 23.9589C21.0693 23.8425 20.5413 23.7848 20.0004 23.7858C19.4594 23.7858 18.9314 23.844 18.4163 23.9605C17.9011 24.0769 17.386 24.2376 16.8708 24.4426L15.364 21.7381C15.3125 21.6093 15.229 21.5449 15.1136 21.5449C14.9982 21.5449 14.8756 21.5707 14.7458 21.6222L14.5913 22.2017L16.0594 24.829C14.9776 25.4472 14.1019 26.2843 13.4322 27.3404C12.7625 28.3964 12.3761 29.5555 12.2731 30.8176ZM16.5231 28.4995C16.317 28.4995 16.1367 28.4222 15.9822 28.2676C15.8276 28.1131 15.7504 27.9328 15.7504 27.7267C15.7504 27.5207 15.8276 27.3404 15.9822 27.1858C16.1367 27.0313 16.317 26.954 16.5231 26.954C16.7291 26.954 16.9094 27.0313 17.064 27.1858C17.2185 27.3404 17.2958 27.5207 17.2958 27.7267C17.2958 27.9328 17.2185 28.1131 17.064 28.2676C16.9094 28.4222 16.7291 28.4995 16.5231 28.4995ZM23.4776 28.4995C23.2716 28.4995 23.0913 28.4222 22.9367 28.2676C22.7822 28.1131 22.7049 27.9328 22.7049 27.7267C22.7049 27.5207 22.7822 27.3404 22.9367 27.1858C23.0913 27.0313 23.2716 26.954 23.4776 26.954C23.6837 26.954 23.864 27.0313 24.0185 27.1858C24.1731 27.3404 24.2504 27.5207 24.2504 27.7267C24.2504 27.9328 24.1731 28.1131 24.0185 28.2676C23.864 28.4222 23.6837 28.4995 23.4776 28.4995ZM21.5458 15.3631H29.2731L21.5458 7.63583V15.3631Z"
                              fill="#EEEEEE"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="content" data-v-0c056308="">
                        <div className="prefix" data-v-0c056308="">
                          Download the
                        </div>
                        <div className="name" data-v-0c056308="">
                          APK
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://chrome.google.com/webstore/detail/venom-wallet/ojggmchlghnjlapmfbnjholfjkiidbch"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="platform-item"
                      data-v-a9e36021=""
                      data-v-0c056308=""
                    >
                      <div className="icon" data-v-0c056308="">
                        <div className="kit-icon is-fill" data-v-0c056308="">
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.7715 19.9956C15.7712 20.9126 16.0429 21.809 16.5523 22.5715C17.0616 23.334 17.7857 23.9284 18.6329 24.2795C19.4802 24.6305 20.4125 24.7225 21.3121 24.5438C22.2116 24.3651 23.038 23.9237 23.6866 23.2755C24.3352 22.6272 24.7769 21.8012 24.956 20.9019C25.135 20.0026 25.0432 19.0705 24.6923 18.2233C24.3414 17.3762 23.7471 16.6521 22.9846 16.1427C22.222 15.6332 21.3255 15.3613 20.4083 15.3613C19.1798 15.3646 18.0025 15.8539 17.1337 16.7222C16.2649 17.5906 15.7751 18.7674 15.7715 19.9956Z"
                              fill="#EEEEEE"
                            ></path>
                            <path
                              d="M35.6405 17.3649V17.3684C35.5274 16.6945 35.366 16.0296 35.1575 15.3789H35.1499C35.3616 16.0328 35.5246 16.7015 35.6377 17.3794C35.5243 16.7016 35.3613 16.0329 35.1499 15.3789H24.4272C25.7417 16.5516 26.5911 18.15 26.5911 20.0043C26.5941 21.0909 26.3004 22.1578 25.7417 23.0899L18.6836 35.3462C18.6839 35.3524 18.6839 35.3586 18.6836 35.3648V35.3842V35.3662C19.2565 35.4273 19.8324 35.4563 20.4086 35.4531C20.8806 35.4531 21.3477 35.4262 21.8093 35.3842C22.5009 35.3217 23.1874 35.2124 23.8642 35.0572C30.7366 33.4885 35.8647 27.3407 35.8647 19.9967C35.8648 19.1147 35.7898 18.2342 35.6405 17.3649Z"
                              fill="#EEEEEE"
                            ></path>
                            <path
                              d="M20.4085 26.1764C18.0901 26.1764 16.1581 24.9409 15.0755 23.0866L7.98841 10.831L7.97875 10.8145C6.44949 12.8844 5.46152 15.3033 5.10449 17.8517C4.74746 20.4002 5.03269 22.9974 5.93429 25.4077C6.83588 27.818 8.32529 29.965 10.2673 31.6539C12.2094 33.3428 14.5425 34.52 17.0551 35.0788V35.0753L22.4157 25.7901C21.7748 26.0366 21.0952 26.1674 20.4085 26.1764Z"
                              fill="#EEEEEE"
                            ></path>
                            <path
                              d="M9.04355 9.55527L14.3807 18.7473C14.6578 17.3522 15.4098 16.0962 16.5088 15.1929C17.6078 14.2896 18.9859 13.7949 20.4086 13.7929H34.5655C34.0788 12.7239 33.4827 11.708 32.7866 10.7618L32.7949 10.7673C33.4883 11.7118 34.0817 12.7258 34.5655 13.7929H34.5772C34.0937 12.7226 33.5003 11.7054 32.8067 10.7577C32.7981 10.7524 32.79 10.7464 32.7825 10.7397C31.4226 8.92217 29.6788 7.42655 27.6752 6.35926C25.6715 5.29196 23.4572 4.67922 21.1898 4.56462C18.9223 4.45003 16.6575 4.83639 14.5564 5.69622C12.4553 6.55605 10.5695 7.86823 9.0332 9.53941L9.04286 9.55596L9.04355 9.55527Z"
                              fill="#EEEEEE"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="content" data-v-0c056308="">
                        <div className="prefix" data-v-0c056308="">
                          Install extension
                        </div>
                        <div className="name" data-v-0c056308="">
                          Chrome
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="picture" data-v-a9e36021=""></div>
              </div>
              <div
                className="boundaries-block default-margin"
                data-v-b87b2b90=""
                data-v-f0c16b6f=""
              >
                <div className="wrapper" data-v-f0c16b6f="">
                  <h2 className="title" data-v-f0c16b6f="">
                    A Blockchain Without Boundaries
                  </h2>
                  <div className="subtitle" data-v-f0c16b6f="">
                    Our Mission is to build a Blockchain that will function as
                    the main infrastructure for a global ecosystem of Web3
                    applications, possessing ultra-fast transaction speeds and
                    infinite scalability to meet the demands of an
                    ever-expanding user base.
                  </div>
                </div>
                <div className="items-container wrapper" data-v-f0c16b6f="">
                  <div
                    className="boundaries-item type-1"
                    data-v-f0c16b6f=""
                    data-v-6ee8dd1e=""
                  >
                    <div className="title-with-icon" data-v-6ee8dd1e="">
                      <div className="title" data-v-6ee8dd1e="">
                        Build
                      </div>
                      <div className="icon" data-v-6ee8dd1e="">
                        <div className="kit-icon is-fill" data-v-6ee8dd1e="">
                          <svg
                            width="38"
                            height="38"
                            viewBox="0 0 38 38"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="4.74414"
                              y="4.74414"
                              width="28.5119"
                              height="28.5119"
                              rx="2"
                              stroke="#15CC97"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></rect>
                            <path
                              d="M33.256 11.0811H4.74414"
                              stroke="#15CC97"
                              strokeWidth="2"
                            ></path>
                            <path
                              d="M14.2481 25.336L11.0801 22.168L14.2481 19"
                              stroke="#15CC97"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M23.752 19L26.9199 22.168L23.752 25.336"
                              stroke="#15CC97"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M20.2284 17.416L17.5879 26.92"
                              stroke="#15CC97"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="subtitle" data-v-6ee8dd1e="">
                      Build your decentralised application in minutes on an
                      asynchronous blockchain with a global use case application
                    </div>
                    <a
                      href="https://docs.venom.foundation"
                      rel="noopener noreferrer"
                      target="_self"
                      className="button"
                      data-v-6ee8dd1e=""
                    >
                      <button
                        className="kit-button is-primary"
                        data-v-6ee8dd1e=""
                        data-v-d855b919=""
                      >
                        <div className="label" data-v-d855b919="">
                          Get Started
                        </div>
                      </button>
                    </a>
                  </div>
                  <div
                    className="boundaries-item type-2"
                    data-v-f0c16b6f=""
                    data-v-6ee8dd1e=""
                  >
                    <div className="title-with-icon" data-v-6ee8dd1e="">
                      <div className="title" data-v-6ee8dd1e="">
                        Use
                      </div>
                      <div className="icon" data-v-6ee8dd1e="">
                        <div className="kit-icon is-fill" data-v-6ee8dd1e="">
                          <svg
                            width="38"
                            height="38"
                            viewBox="0 0 38 38"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M32.9231 15.0788C34.174 16.3297 34.174 18.3577 32.9231 19.6086C31.6722 20.8595 29.6441 20.8595 28.3932 19.6086C27.1424 18.3577 27.1424 16.3297 28.3932 15.0788C29.6441 13.8279 31.6722 13.8279 32.9231 15.0788"
                              stroke="#15CC97"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M22.488 9.36059C24.414 11.2867 24.414 14.4095 22.488 16.3356C20.5619 18.2617 17.439 18.2617 15.5129 16.3356C13.5868 14.4095 13.5868 11.2867 15.5129 9.36059C17.439 7.43449 20.5618 7.43449 22.488 9.36059"
                              stroke="#15CC97"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M9.60862 15.0788C10.8595 16.3297 10.8595 18.3577 9.60862 19.6086C8.35774 20.8595 6.32967 20.8595 5.07879 19.6086C3.8279 18.3577 3.8279 16.3297 5.07879 15.0788C6.32967 13.8279 8.35774 13.8279 9.60862 15.0788"
                              stroke="#15CC97"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M36.418 30.0823V28.347C36.418 26.1604 34.6462 24.3887 32.4597 24.3887H31.1914"
                              stroke="#15CC97"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M1.58398 30.0823V28.347C1.58398 26.1604 3.35573 24.3887 5.54232 24.3887H6.81057"
                              stroke="#15CC97"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M27.4533 30.0824V27.5475C27.4533 24.4869 24.9723 22.0059 21.9117 22.0059H16.0866C13.026 22.0059 10.5449 24.4869 10.5449 27.5475V30.0824"
                              stroke="#15CC97"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="subtitle" data-v-6ee8dd1e="">
                      Explore Web3 without constraints with our fast, user
                      friendly, low cost blockchain hosting a variety exclusive
                      decentralised applications
                    </div>
                    <a href="/ecosystem" className="button" data-v-6ee8dd1e="">
                      <button
                        className="kit-button is-primary"
                        data-v-6ee8dd1e=""
                        data-v-d855b919=""
                      >
                        <div className="label" data-v-d855b919="">
                          Get Started
                        </div>
                      </button>
                    </a>
                  </div>
                </div>
                <div
                  className="kit-spot right bottom"
                  data-v-f0c16b6f=""
                  data-v-c951ae60=""
                ></div>
              </div>
              <div
                className="ecosystem-block default-margin"
                data-v-b87b2b90=""
                data-v-683b6745=""
              >
                <div className="wrapper" data-v-683b6745="">
                  <div className="title" data-v-683b6745="">
                    Venom Ecosystem
                  </div>
                  <div className="subtitle" data-v-683b6745="">
                    Start to explore a wide variety of Decentralized
                    applications on the Venom network.
                  </div>
                </div>
                <div className="gallery-wrapper" data-v-683b6745="">
                  <div
                    className="items-gallery"
                    data-v-683b6745=""
                    data-v-1ca2ff44=""
                  >
                    <div className="is-desktop" data-v-1ca2ff44="">
                      <div
                        className="item-component"
                        data-v-1ca2ff44=""
                        data-v-a133c29c=""
                      >
                        <div className="icon" data-v-a133c29c="">
                          <div className="kit-icon is-fill" data-v-a133c29c="">
                            <svg
                              width="183"
                              height="32"
                              viewBox="0 0 183 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.1175 5.04624C16.542 4.95328 15.9524 5.00621 15.4029 5.20018C14.8533 5.3942 14.3616 5.723 13.9729 6.15633C13.2309 6.98579 13.0001 8.0657 13.1782 9.14776C13.3397 10.1237 13.5536 11.1142 13.6019 12.0543C13.6693 13.4704 13.4533 14.8855 12.9665 16.2173C12.526 17.4225 11.8985 18.357 10.5536 18.5638C10.4539 18.5795 10.0908 18.5907 9.98767 18.5962C9.88462 18.6018 9.55844 18.5806 9.4576 18.565C8.11277 18.3581 7.47958 17.4236 7.04025 16.2106C6.55348 14.8788 6.33745 13.4636 6.40482 12.0476C6.45303 11.1108 6.66709 10.1193 6.82846 9.14111C7.00665 8.05897 6.77579 6.9791 6.03389 6.1496C5.64393 5.71662 5.15093 5.38854 4.60036 5.19569C4.04977 5.00287 3.45937 4.95148 2.88363 5.04624C1.15889 5.32687 0.0101868 6.85387 0.000100555 8.45583C-0.00471259 9.07304 0.16335 9.67933 0.485361 10.2064C1.02217 11.0896 1.90302 11.7335 2.67181 12.402C3.18061 12.8492 4.06036 14.1179 4.49183 15.4929C4.75293 16.3257 4.96588 17.1698 5.17654 18.0217C5.47241 19.2088 5.87921 21.8314 6.14706 23.0219C6.68165 25.4053 8.31785 25.9452 9.95743 26H10.0157C11.6553 25.9452 13.3184 25.4041 13.8529 23.0208C14.1196 21.8303 14.5254 19.2066 14.8234 18.0205C15.0353 17.1732 15.2471 16.3247 15.5081 15.4918C15.9397 14.1168 16.8193 12.8435 17.3282 12.4008C18.0969 11.7302 18.9767 11.0884 19.5146 10.2054C19.8366 9.67828 20.0047 9.0719 19.9999 8.45471C19.9909 6.84942 18.8467 5.32126 17.1175 5.04624Z"
                                fill="url(#paint0_linear_1529_12512)"
                              ></path>
                              <path
                                d="M43.6326 8.8972L38.14 23.8077H34.4926L29 8.8972H32.2183L36.3377 20.753L40.4357 8.8972H43.6326ZM56.483 17.6342C56.483 18.0614 56.4544 18.4459 56.3972 18.7877H47.7078C47.7793 19.6422 48.0796 20.3115 48.6089 20.7957C49.1381 21.2799 49.7889 21.522 50.5613 21.522C51.677 21.522 52.4709 21.0449 52.9429 20.0908H56.1826C55.8393 21.2301 55.1814 22.17 54.2087 22.9105C53.2361 23.6369 52.0417 24 50.6257 24C49.4814 24 48.4515 23.7508 47.5361 23.2523C46.635 22.7397 45.927 22.0205 45.412 21.0948C44.9114 20.1691 44.6611 19.101 44.6611 17.8905C44.6611 16.6658 44.9114 15.5906 45.412 14.6649C45.9127 13.7392 46.6135 13.0271 47.5147 12.5287C48.4158 12.0303 49.4528 11.781 50.6257 11.781C51.7557 11.781 52.7641 12.0231 53.6509 12.5073C54.552 12.9915 55.2458 13.6822 55.7321 14.5794C56.2327 15.4624 56.483 16.4806 56.483 17.6342ZM53.372 16.7797C53.3577 16.0107 53.0788 15.3983 52.5352 14.9426C51.9917 14.4726 51.3266 14.2377 50.5399 14.2377C49.7961 14.2377 49.1667 14.4655 48.6518 14.9212C48.1512 15.3627 47.8436 15.9822 47.7292 16.7797H53.372ZM65.2623 11.8024C66.6783 11.8024 67.8226 12.251 68.6952 13.1482C69.5677 14.0312 70.0039 15.2701 70.0039 16.8652V23.8077H67.0002V17.271C67.0002 16.3311 66.7642 15.6119 66.2921 15.1135C65.8201 14.6008 65.1765 14.3445 64.3612 14.3445C63.5316 14.3445 62.8736 14.6008 62.3873 15.1135C61.9152 15.6119 61.6792 16.3311 61.6792 17.271V23.8077H58.6755V11.9733H61.6792V13.4473C62.0797 12.9346 62.5875 12.5358 63.2026 12.251C63.8319 11.9519 64.5185 11.8024 65.2623 11.8024ZM78.1384 24C76.9941 24 75.9642 23.7508 75.0488 23.2523C74.1334 22.7397 73.411 22.0205 72.8818 21.0948C72.3669 20.1691 72.1094 19.101 72.1094 17.8905C72.1094 16.68 72.374 15.6119 72.9033 14.6862C73.4468 13.7606 74.1834 13.0485 75.1132 12.5501C76.0429 12.0374 77.0799 11.781 78.2242 11.781C79.3685 11.781 80.4055 12.0374 81.3352 12.5501C82.265 13.0485 82.9944 13.7606 83.5237 14.6862C84.0672 15.6119 84.339 16.68 84.339 17.8905C84.339 19.101 84.0601 20.1691 83.5022 21.0948C82.9587 22.0205 82.2149 22.7397 81.2709 23.2523C80.3411 23.7508 79.297 24 78.1384 24ZM78.1384 21.3939C78.6819 21.3939 79.1897 21.2657 79.6617 21.0093C80.148 20.7388 80.5342 20.34 80.8203 19.8131C81.1064 19.2862 81.2494 18.6453 81.2494 17.8905C81.2494 16.7655 80.949 15.9039 80.3483 15.3057C79.7618 14.6934 79.0395 14.3872 78.1813 14.3872C77.3231 14.3872 76.6007 14.6934 76.0143 15.3057C75.4422 15.9039 75.1561 16.7655 75.1561 17.8905C75.1561 19.0156 75.435 19.8843 75.9928 20.4967C76.565 21.0948 77.2802 21.3939 78.1384 21.3939ZM101.304 11.8024C102.763 11.8024 103.935 12.251 104.822 13.1482C105.723 14.0312 106.174 15.2701 106.174 16.8652V23.8077H103.17V17.271C103.17 16.3453 102.934 15.6404 102.462 15.1562C101.99 14.6578 101.346 14.4085 100.531 14.4085C99.7159 14.4085 99.0651 14.6578 98.5788 15.1562C98.1067 15.6404 97.8707 16.3453 97.8707 17.271V23.8077H94.867V17.271C94.867 16.3453 94.631 15.6404 94.1589 15.1562C93.6869 14.6578 93.0433 14.4085 92.228 14.4085C91.3983 14.4085 90.7404 14.6578 90.2541 15.1562C89.782 15.6404 89.546 16.3453 89.546 17.271V23.8077H86.5423V11.9733H89.546V13.4045C89.9322 12.9061 90.4257 12.5145 91.0265 12.2296C91.6415 11.9448 92.3138 11.8024 93.0433 11.8024C93.973 11.8024 94.8026 12.0018 95.5321 12.4005C96.2616 12.785 96.8266 13.3405 97.2271 14.0668C97.6133 13.3832 98.1711 12.8349 98.9006 12.4219C99.6444 12.0089 100.445 11.8024 101.304 11.8024ZM134.154 8.8972L129.971 23.8077H126.431L123.62 13.1909L120.68 23.8077L117.162 23.8291L113.128 8.8972H116.347L118.986 20.4753L122.032 8.8972H125.379L128.254 20.4112L130.915 8.8972H134.154ZM135.343 17.8478C135.343 16.6515 135.579 15.5906 136.051 14.6649C136.538 13.7392 137.189 13.0271 138.004 12.5287C138.834 12.0303 139.756 11.781 140.772 11.781C141.658 11.781 142.431 11.9591 143.089 12.3151C143.761 12.6711 144.298 13.1197 144.698 13.6609V11.9733H147.723V23.8077H144.698V22.0774C144.312 22.6328 143.775 23.0957 143.089 23.466C142.417 23.822 141.637 24 140.75 24C139.749 24 138.834 23.7437 138.004 23.231C137.189 22.7183 136.538 21.9991 136.051 21.0734C135.579 20.1335 135.343 19.0583 135.343 17.8478ZM144.698 17.8905C144.698 17.1642 144.555 16.5447 144.269 16.032C143.983 15.5051 143.597 15.1064 143.11 14.8358C142.624 14.551 142.102 14.4085 141.544 14.4085C140.986 14.4085 140.471 14.5438 139.999 14.8144C139.527 15.085 139.141 15.4838 138.841 16.0107C138.555 16.5234 138.412 17.1357 138.412 17.8478C138.412 18.5599 138.555 19.1865 138.841 19.7276C139.141 20.2546 139.527 20.6604 139.999 20.9453C140.486 21.2301 141.001 21.3725 141.544 21.3725C142.102 21.3725 142.624 21.2372 143.11 20.9666C143.597 20.6818 143.983 20.283 144.269 19.7704C144.555 19.2434 144.698 18.6168 144.698 17.8905ZM153.661 8V23.8077H150.657V8H153.661ZM159.632 8V23.8077H156.628V8H159.632ZM173.649 17.6342C173.649 18.0614 173.621 18.4459 173.564 18.7877H164.874C164.946 19.6422 165.246 20.3115 165.775 20.7957C166.304 21.2799 166.955 21.522 167.728 21.522C168.843 21.522 169.637 21.0449 170.109 20.0908H173.349C173.006 21.2301 172.348 22.17 171.375 22.9105C170.402 23.6369 169.208 24 167.792 24C166.648 24 165.618 23.7508 164.702 23.2523C163.801 22.7397 163.093 22.0205 162.578 21.0948C162.078 20.1691 161.827 19.101 161.827 17.8905C161.827 16.6658 162.078 15.5906 162.578 14.6649C163.079 13.7392 163.78 13.0271 164.681 12.5287C165.582 12.0303 166.619 11.781 167.792 11.781C168.922 11.781 169.93 12.0231 170.817 12.5073C171.718 12.9915 172.412 13.6822 172.898 14.5794C173.399 15.4624 173.649 16.4806 173.649 17.6342ZM170.538 16.7797C170.524 16.0107 170.245 15.3983 169.702 14.9426C169.158 14.4726 168.493 14.2377 167.706 14.2377C166.962 14.2377 166.333 14.4655 165.818 14.9212C165.318 15.3627 165.01 15.9822 164.896 16.7797H170.538ZM179.34 14.4299V20.1549C179.34 20.5536 179.433 20.8456 179.618 21.0307C179.819 21.2016 180.148 21.287 180.605 21.287H182V23.8077H180.112C177.58 23.8077 176.314 22.583 176.314 20.1335V14.4299H174.898V11.9733H176.314V9.04673H179.34V11.9733H182V14.4299H179.34Z"
                                fill="white"
                              ></path>
                              <defs>
                                <linearGradient
                                  id="paint0_linear_1529_12512"
                                  x1="1.95943"
                                  y1="7.48041"
                                  x2="40.0784"
                                  y2="32.8527"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#11A97D"></stop>
                                  <stop offset="1" stopColor="#6610F2"></stop>
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                        </div>
                        <div className="description" data-v-a133c29c="">
                          Non-custodial wallet with a Multisig accounts option
                          and Ledger support
                        </div>
                        <div className="platforms-with-link" data-v-a133c29c="">
                          <div className="platforms" data-v-a133c29c="">
                            <a
                              href="https://apps.apple.com/us/app/venom-blockchain-wallet/id1622970889"
                              rel="noopener noreferrer"
                              target="_blank"
                              className="platform-item stroke"
                              aria-label="AppStore"
                              data-v-a133c29c=""
                            >
                              <div
                                className="kit-icon is-fill"
                                data-v-a133c29c=""
                              >
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7.87997 15.4397L7.55997 15.9997"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M16.4399 16L13.1699 10.29"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M10.99 6.5L12 8.26"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M13.01 6.5L9.05005 13.41"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M12.62 13.4102H7"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M17 13.4102H14.95"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M18.3639 5.63604C21.8787 9.15076 21.8787 14.8492 18.3639 18.3639C14.8492 21.8787 9.15074 21.8787 5.63604 18.3639C2.12132 14.8492 2.12132 9.15074 5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.3639 5.63604"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://play.google.com/store/apps/details?id=com.venom.wallet"
                              rel="noopener noreferrer"
                              target="_blank"
                              className="platform-item stroke"
                              aria-label="PlayMarket"
                              data-v-a133c29c=""
                            >
                              <div
                                className="kit-icon is-fill"
                                data-v-a133c29c=""
                              >
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4.04126 4.43756V19.5616C4.04126 20.6626 5.22926 21.3546 6.18626 20.8106L19.4943 13.2486C20.4633 12.6986 20.4633 11.3016 19.4943 10.7516L6.18626 3.18856C5.22926 2.64456 4.04126 3.33656 4.04126 4.43756Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M14.8313 8.09961L4.62134 20.6996"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M4.62134 3.2998L14.8313 15.8998"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://chrome.google.com/webstore/detail/venom-wallet/ojggmchlghnjlapmfbnjholfjkiidbch"
                              rel="noopener noreferrer"
                              target="_blank"
                              className="platform-item stroke"
                              aria-label="Google"
                              data-v-a133c29c=""
                            >
                              <div
                                className="kit-icon is-fill"
                                data-v-a133c29c=""
                              >
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18.3637 5.63604C21.8784 9.15076 21.8784 14.8492 18.3637 18.3639C14.849 21.8787 9.1505 21.8787 5.6358 18.3639C2.12108 14.8492 2.12108 9.15074 5.6358 5.63604C9.15052 2.12132 14.849 2.12132 18.3637 5.63604"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M14.893 9.1074C16.4906 10.705 16.4906 13.2953 14.893 14.893C13.2953 16.4906 10.705 16.4906 9.1074 14.893C7.50977 13.2953 7.50977 10.705 9.1074 9.1074C10.705 7.50977 13.2953 7.50977 14.893 9.1074"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M15.5444 14.0449L11.5674 20.9999"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M4.42969 7.13965L8.45969 14.0496"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M12 7.91016H20.02"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </div>
                            </a>
                          </div>
                          <a
                            href="https://venomwallet.com"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="kit-read-more read-more"
                            data-v-a133c29c=""
                            data-v-d93ab3f1=""
                          >
                            <div className="text" data-v-d93ab3f1="">
                              Explore
                            </div>
                            <div className="icon" data-v-d93ab3f1="">
                              <div
                                className="kit-icon is-fill"
                                data-v-d93ab3f1=""
                              >
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M19 12H5"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M14 17L19 12"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M14 7L19 12"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div
                        className="item-component"
                        data-v-1ca2ff44=""
                        data-v-a133c29c=""
                      >
                        <div className="icon" data-v-a133c29c="">
                          <div className="kit-icon is-fill" data-v-a133c29c="">
                            <svg
                              width="169"
                              height="32"
                              viewBox="0 0 169 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20.7218 24.4933C21.0696 24.8411 21.0696 25.3974 20.7218 25.745C20.5596 25.9072 20.3278 26 20.096 26C19.8642 26 19.6325 25.9072 19.4702 25.745L17.2682 23.5199C15.3675 25.1192 13.0033 26 10.5 26C7.69536 26 5.05298 24.9106 3.08278 22.9172C1.0894 20.9239 0 18.3046 0 15.5C0 12.6954 1.0894 10.053 3.08278 8.08278C5.07616 6.0894 7.69536 5 10.5 5C12.9801 5 15.3212 5.85761 17.1986 7.4106C17.5 7.61921 17.7318 7.89735 17.9172 8.19868C18.1722 8.61594 18.3113 9.10261 18.3113 9.58937C18.3113 9.68212 18.3113 9.79798 18.2881 9.89073C18.2881 9.96029 18.2649 10.0298 18.2649 10.0993C18.2649 10.1225 18.2649 10.1225 18.2649 10.1457C18.2649 10.1689 18.2417 10.2153 18.2417 10.2385C18.2186 10.2847 18.2186 10.3543 18.1954 10.4007C18.1258 10.6093 18.0331 10.7947 17.9404 10.9801C17.9172 11.0265 17.894 11.0497 17.8708 11.096C17.8477 11.1424 17.8013 11.1887 17.7782 11.2351C17.361 11.7914 16.7814 12.2318 16.2483 12.6954C15.8543 13.0431 15.1589 14.0397 14.8344 15.106C14.6258 15.755 14.4636 16.4272 14.3014 17.0761C14.0696 18.0033 13.745 20.0662 13.5364 20.9933C13.1192 22.8477 11.8212 23.2881 10.5464 23.3344H10.5C10.5 23.3344 10.5 23.3344 10.4768 23.3344C9.20203 23.2881 7.92715 22.8708 7.50993 21.0165C7.30132 20.0894 6.97682 18.0265 6.74503 17.0993C6.58278 16.4272 6.42053 15.7782 6.21192 15.1292C5.86424 14.0629 5.19205 13.0662 4.79801 12.7186C4.42715 12.394 4.03311 12.0696 3.66225 11.7218C4.54304 10.1225 5.98013 8.87083 7.69536 8.22186C8.04304 8.80135 8.13576 9.49671 8.04304 10.1689C7.92715 10.9338 7.74172 11.6986 7.71854 12.4404C7.67218 13.5529 7.83443 14.6656 8.20529 15.7086C8.55298 16.6589 9.03971 17.3775 10.0828 17.5397C10.1523 17.5629 10.4073 17.5629 10.5 17.5629C10.5696 17.5629 10.8708 17.5397 10.9404 17.5397C11.9835 17.3775 12.4933 16.6358 12.8179 15.6854C13.1887 14.6424 13.3742 13.5298 13.3046 12.4172C13.2583 11.6755 13.096 10.9106 12.9801 10.1457C12.8643 9.45034 12.9569 8.77816 13.3046 8.19868C13.3974 8.0596 13.4901 7.94371 13.5828 7.80464C13.6987 7.68874 13.7914 7.57285 13.9304 7.48014C12.8642 7.01656 11.7053 6.78477 10.5 6.78477C5.67881 6.78477 1.78477 10.6788 1.78477 15.5C1.78477 20.3212 5.67881 24.2153 10.5 24.2153C15.3212 24.2153 19.2153 20.3212 19.2153 15.5C19.2153 14.1788 18.9371 12.9503 18.404 11.8378C18.4967 11.7218 18.5894 11.5828 18.6821 11.4437C19.0298 10.8874 19.1921 10.2615 19.1921 9.61256C20.3742 11.3278 21 13.3675 21 15.5C21 18.0033 20.1192 20.3675 18.5199 22.2682L20.7218 24.4933Z"
                                fill="white"
                              ></path>
                              <path
                                d="M44.5271 8.2092L39.0741 22.8117H35.453L30 8.2092H33.1951L37.2848 19.8201L41.3533 8.2092H44.5271ZM57.2848 16.7657C57.2848 17.1841 57.2564 17.5607 57.1996 17.8954H48.5729C48.6439 18.7322 48.9421 19.3877 49.4675 19.8619C49.9929 20.3361 50.639 20.5732 51.4058 20.5732C52.5135 20.5732 53.3016 20.106 53.7702 19.1715H56.9866C56.6458 20.2873 55.9926 21.2078 55.027 21.9331C54.0613 22.6444 52.8756 23 51.4697 23C50.3337 23 49.3113 22.7559 48.4025 22.2678C47.5078 21.7657 46.8049 21.0614 46.2937 20.1548C45.7967 19.2483 45.5482 18.2022 45.5482 17.0167C45.5482 15.8173 45.7967 14.7643 46.2937 13.8577C46.7907 12.9512 47.4865 12.2538 48.3811 11.7657C49.2758 11.2775 50.3053 11.0335 51.4697 11.0335C52.5916 11.0335 53.5927 11.2706 54.4731 11.7448C55.3678 12.219 56.0565 12.8954 56.5393 13.7741C57.0363 14.6388 57.2848 15.636 57.2848 16.7657ZM54.1962 15.9289C54.182 15.1757 53.9051 14.576 53.3655 14.1297C52.8259 13.6695 52.1656 13.4393 51.3845 13.4393C50.6461 13.4393 50.0213 13.6625 49.5101 14.1088C49.0131 14.5411 48.7078 15.1478 48.5942 15.9289H54.1962ZM66.0008 11.0544C67.4066 11.0544 68.5427 11.4937 69.4089 12.3724C70.2751 13.2371 70.7083 14.4505 70.7083 16.0126V22.8117H67.7262V16.41C67.7262 15.4895 67.4918 14.7852 67.0232 14.2971C66.5546 13.795 65.9156 13.5439 65.1062 13.5439C64.2825 13.5439 63.6293 13.795 63.1465 14.2971C62.6779 14.7852 62.4436 15.4895 62.4436 16.41V22.8117H59.4615V11.2218H62.4436V12.6653C62.8412 12.1632 63.3453 11.7727 63.9559 11.4937C64.5808 11.2008 65.2624 11.0544 66.0008 11.0544ZM78.784 23C77.648 23 76.6256 22.7559 75.7167 22.2678C74.8079 21.7657 74.0908 21.0614 73.5654 20.1548C73.0542 19.2483 72.7986 18.2022 72.7986 17.0167C72.7986 15.8312 73.0613 14.7852 73.5867 13.8787C74.1263 12.9721 74.8576 12.2748 75.7806 11.7866C76.7037 11.2845 77.7332 11.0335 78.8692 11.0335C80.0053 11.0335 81.0348 11.2845 81.9578 11.7866C82.8809 12.2748 83.6051 12.9721 84.1305 13.8787C84.6701 14.7852 84.9399 15.8312 84.9399 17.0167C84.9399 18.2022 84.663 19.2483 84.1092 20.1548C83.5696 21.0614 82.8312 21.7657 81.8939 22.2678C80.9709 22.7559 79.9343 23 78.784 23ZM78.784 20.4477C79.3237 20.4477 79.8278 20.3222 80.2964 20.0711C80.7792 19.8061 81.1626 19.4156 81.4466 18.8996C81.7306 18.3835 81.8726 17.7559 81.8726 17.0167C81.8726 15.9149 81.5744 15.0711 80.978 14.4854C80.3958 13.8856 79.6787 13.5858 78.8266 13.5858C77.9746 13.5858 77.2575 13.8856 76.6753 14.4854C76.1073 15.0711 75.8233 15.9149 75.8233 17.0167C75.8233 18.1185 76.1002 18.9693 76.654 19.569C77.222 20.1548 77.932 20.4477 78.784 20.4477ZM101.782 11.0544C103.23 11.0544 104.395 11.4937 105.275 12.3724C106.17 13.2371 106.617 14.4505 106.617 16.0126V22.8117H103.635V16.41C103.635 15.5035 103.401 14.8131 102.932 14.3389C102.464 13.8508 101.825 13.6067 101.015 13.6067C100.206 13.6067 99.5597 13.8508 99.0768 14.3389C98.6082 14.8131 98.3739 15.5035 98.3739 16.41V22.8117H95.3918V16.41C95.3918 15.5035 95.1575 14.8131 94.6889 14.3389C94.2203 13.8508 93.5813 13.6067 92.7718 13.6067C91.9482 13.6067 91.295 13.8508 90.8122 14.3389C90.3436 14.8131 90.1093 15.5035 90.1093 16.41V22.8117H87.1274V11.2218H90.1093V12.6234C90.4927 12.1353 90.9826 11.7517 91.579 11.4728C92.1896 11.1939 92.857 11.0544 93.5813 11.0544C94.5043 11.0544 95.3279 11.2497 96.0521 11.6402C96.7764 12.0167 97.3373 12.5607 97.7349 13.272C98.1183 12.6025 98.6721 12.0656 99.3963 11.6611C100.135 11.2566 100.93 11.0544 101.782 11.0544ZM119.656 22.9582C118.619 22.9582 117.682 22.7838 116.844 22.4351C116.021 22.0865 115.367 21.5844 114.885 20.9289C114.402 20.2734 114.153 19.4993 114.139 18.6067H117.334C117.377 19.2064 117.59 19.6806 117.973 20.0293C118.371 20.378 118.91 20.5523 119.592 20.5523C120.288 20.5523 120.835 20.3919 121.232 20.0711C121.63 19.7364 121.829 19.304 121.829 18.7741C121.829 18.3417 121.694 17.9861 121.424 17.7071C121.154 17.4282 120.813 17.212 120.401 17.0586C120.004 16.8912 119.45 16.7099 118.74 16.5146C117.774 16.2357 116.986 15.9637 116.376 15.6987C115.779 15.4198 115.261 15.0084 114.821 14.4644C114.395 13.9066 114.182 13.1674 114.182 12.2469C114.182 11.3821 114.402 10.629 114.842 9.98745C115.282 9.34589 115.9 8.85774 116.695 8.52301C117.49 8.17434 118.399 8 119.422 8C120.955 8 122.198 8.36959 123.149 9.10879C124.115 9.83403 124.647 10.8522 124.747 12.1632H121.467C121.438 11.6611 121.218 11.2497 120.806 10.9289C120.409 10.5941 119.876 10.4268 119.209 10.4268C118.626 10.4268 118.158 10.5732 117.803 10.8661C117.462 11.159 117.292 11.5844 117.292 12.1423C117.292 12.5328 117.419 12.8605 117.675 13.1255C117.945 13.3766 118.271 13.5858 118.655 13.7531C119.052 13.9066 119.606 14.0879 120.316 14.2971C121.282 14.576 122.07 14.855 122.681 15.1339C123.291 15.4128 123.817 15.8312 124.257 16.3891C124.697 16.947 124.917 17.6792 124.917 18.5858C124.917 19.3668 124.711 20.0921 124.299 20.7615C123.888 21.431 123.284 21.9679 122.489 22.3724C121.694 22.7629 120.749 22.9582 119.656 22.9582ZM126.736 17.0167C126.736 15.8173 126.984 14.7713 127.481 13.8787C127.978 12.9721 128.667 12.2748 129.547 11.7866C130.428 11.2845 131.436 11.0335 132.572 11.0335C134.035 11.0335 135.242 11.3961 136.193 12.1213C137.159 12.8326 137.805 13.8368 138.132 15.1339H134.915C134.745 14.6318 134.454 14.2413 134.042 13.9623C133.644 13.6695 133.147 13.523 132.551 13.523C131.699 13.523 131.024 13.8298 130.527 14.4435C130.03 15.0432 129.782 15.901 129.782 17.0167C129.782 18.1185 130.03 18.9763 130.527 19.59C131.024 20.1897 131.699 20.4895 132.551 20.4895C133.758 20.4895 134.546 19.9596 134.915 18.8996H138.132C137.805 20.1548 137.159 21.152 136.193 21.8912C135.228 22.6304 134.021 23 132.572 23C131.436 23 130.428 22.7559 129.547 22.2678C128.667 21.7657 127.978 21.0683 127.481 20.1757C126.984 19.2692 126.736 18.2162 126.736 17.0167ZM139.55 16.9749C139.55 15.8033 139.784 14.7643 140.253 13.8577C140.736 12.9512 141.382 12.2538 142.191 11.7657C143.015 11.2775 143.931 11.0335 144.939 11.0335C145.819 11.0335 146.586 11.2078 147.239 11.5565C147.907 11.9052 148.439 12.3445 148.837 12.8745V11.2218H151.84V22.8117H148.837V21.1172C148.454 21.6611 147.921 22.1144 147.239 22.477C146.572 22.8257 145.798 23 144.918 23C143.924 23 143.015 22.749 142.191 22.2469C141.382 21.7448 140.736 21.0404 140.253 20.1339C139.784 19.2134 139.55 18.1604 139.55 16.9749ZM148.837 17.0167C148.837 16.3054 148.695 15.6987 148.411 15.1967C148.127 14.6806 147.744 14.2901 147.261 14.0251C146.778 13.7462 146.26 13.6067 145.706 13.6067C145.152 13.6067 144.641 13.7392 144.172 14.0042C143.704 14.2692 143.32 14.6597 143.022 15.1757C142.738 15.6778 142.596 16.2775 142.596 16.9749C142.596 17.6722 142.738 18.2859 143.022 18.8159C143.32 19.3319 143.704 19.7294 144.172 20.0084C144.655 20.2873 145.166 20.4268 145.706 20.4268C146.26 20.4268 146.778 20.2943 147.261 20.0293C147.744 19.7503 148.127 19.3598 148.411 18.8577C148.695 18.3417 148.837 17.728 148.837 17.0167ZM161.293 11.0544C162.698 11.0544 163.834 11.4937 164.701 12.3724C165.567 13.2371 166 14.4505 166 16.0126V22.8117H163.018V16.41C163.018 15.4895 162.784 14.7852 162.315 14.2971C161.846 13.795 161.207 13.5439 160.398 13.5439C159.574 13.5439 158.921 13.795 158.438 14.2971C157.97 14.7852 157.735 15.4895 157.735 16.41V22.8117H154.753V11.2218H157.735V12.6653C158.133 12.1632 158.637 11.7727 159.248 11.4937C159.873 11.2008 160.554 11.0544 161.293 11.0544Z"
                                fill="white"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="description" data-v-a133c29c="">
                          Search and explore the immutable records of the Venom
                          blockchain
                        </div>
                        <div className="platforms-with-link" data-v-a133c29c="">
                          <div className="platforms" data-v-a133c29c=""></div>
                          <a
                            href="https://testnet.venomscan.com"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="kit-read-more read-more"
                            data-v-a133c29c=""
                            data-v-d93ab3f1=""
                          >
                            <div className="text" data-v-d93ab3f1="">
                              Explore
                            </div>
                            <div className="icon" data-v-d93ab3f1="">
                              <div
                                className="kit-icon is-fill"
                                data-v-d93ab3f1=""
                              >
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M19 12H5"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M14 17L19 12"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M14 7L19 12"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div
                        className="item-component"
                        data-v-1ca2ff44=""
                        data-v-a133c29c=""
                      >
                        <div className="icon" data-v-a133c29c="">
                          <div className="kit-icon is-fill" data-v-a133c29c="">
                            <svg
                              width="143"
                              height="32"
                              viewBox="0 0 143 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <mask
                                id="mask0_1529_12461"
                                style={{ maskType: "luminance" }}
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="1"
                                width="141"
                                height="30"
                              >
                                <path
                                  d="M141 1H0V31H141V1Z"
                                  fill="white"
                                ></path>
                              </mask>
                              <g mask="url(#mask0_1529_12461)">
                                <path
                                  d="M46.8899 10L42.5499 21.8468H40.3571L36 10H38.0284L41.4534 19.8514L44.8954 10H46.8899ZM56.8706 16.9192C56.8735 17.2388 56.8516 17.5582 56.8045 17.8745H49.8056C49.827 18.5552 50.1163 19.2019 50.6132 19.6802C50.8511 19.9044 51.1322 20.0801 51.4402 20.1973C51.7483 20.3146 52.0772 20.371 52.4077 20.3632C53.4279 20.3632 54.1487 19.9257 54.5702 19.0507H56.614C56.3497 19.8964 55.822 20.6407 55.1043 21.1804C54.3834 21.7265 53.4852 21.9994 52.4095 21.9994C51.5814 22.0122 50.765 21.806 50.0469 21.4032C49.3555 20.9897 48.7926 20.4007 48.4186 19.6986C48.0209 18.9065 47.8235 18.0329 47.8431 17.1512C47.8229 16.2727 48.0169 15.4021 48.409 14.611C48.7678 13.9033 49.3279 13.3115 50.0224 12.9065C50.7506 12.5014 51.5772 12.2953 52.4152 12.3101C53.2245 12.2934 54.0232 12.4906 54.7269 12.8807C55.4031 13.2676 55.9511 13.8355 56.3064 14.5171C56.6954 15.2599 56.8893 16.0853 56.8706 16.9192ZM54.8928 16.3062C54.9003 15.9834 54.8369 15.6629 54.7066 15.366C54.5764 15.0691 54.3827 14.8029 54.1381 14.5852C53.6415 14.1499 52.992 13.9178 52.3246 13.9373C52.0148 13.9318 51.7068 13.9863 51.4185 14.0975C51.1303 14.2087 50.8675 14.3745 50.6452 14.5852C50.1628 15.0411 49.8676 15.653 49.8149 16.3062H54.8928ZM63.3583 12.3009C64.0311 12.2889 64.6956 12.4475 65.2867 12.7611C65.8683 13.0706 66.3385 13.5467 66.6342 14.125C66.9726 14.8036 67.1376 15.552 67.1152 16.3062V21.8468H65.2376V16.5989C65.2376 15.7596 65.0327 15.1177 64.6226 14.6735C64.4118 14.4457 64.1517 14.2665 63.8613 14.1487C63.5708 14.0309 63.2572 13.9775 62.943 13.9925C62.6262 13.9781 62.3098 14.0317 62.0164 14.1493C61.7231 14.267 61.4596 14.4459 61.2447 14.6735C60.8372 15.1153 60.6327 15.7571 60.6315 16.5989V21.8468H58.7444V12.4592H60.6315V13.5342C60.9453 13.145 61.3505 12.835 61.8128 12.6304C62.2971 12.4123 62.8246 12.2999 63.3583 12.3009ZM73.5066 21.9994C72.6846 22.0104 71.8748 21.8043 71.1629 21.4032C70.4641 20.9937 69.8945 20.4039 69.5176 19.6986C69.1065 18.9103 68.9005 18.0354 68.9175 17.1512C68.8992 16.2673 69.111 15.3934 69.5326 14.611C69.9153 13.8994 70.497 13.3084 71.2101 12.9065C71.9385 12.5153 72.7563 12.3101 73.5879 12.3101C74.4193 12.3101 75.2372 12.5153 75.9655 12.9065C76.6794 13.3083 77.2618 13.8993 77.6449 14.611C78.0666 15.3936 78.2786 16.2672 78.262 17.1512C78.279 18.0363 78.0613 18.9106 77.63 19.6895C77.2275 20.4063 76.6284 20.9997 75.8994 21.4032C75.1693 21.8029 74.3441 22.0086 73.5066 21.9994ZM73.5066 20.3116C73.986 20.3134 74.457 20.1901 74.871 19.9546C75.318 19.7009 75.6813 19.3279 75.9183 18.8796C76.197 18.3449 76.3339 17.7506 76.3165 17.1512C76.3377 16.5553 76.208 15.9636 75.9392 15.4282C75.7737 15.1105 75.5435 14.8291 75.2626 14.6014C74.9817 14.3736 74.6561 14.2043 74.3056 14.1037C73.9552 14.0033 73.5874 13.9737 73.2247 14.0169C72.8621 14.0601 72.5124 14.1752 72.1971 14.3551C71.7705 14.6128 71.4298 14.9856 71.2159 15.4282C70.9556 15.9662 70.8295 16.5566 70.8478 17.1512C70.8478 18.1623 71.0994 18.9464 71.6027 19.5037C71.8413 19.7644 72.1352 19.9717 72.4639 20.1112C72.7926 20.2506 73.1484 20.3191 73.5066 20.3116ZM91.224 12.3009C91.8967 12.2889 92.5615 12.4475 93.1529 12.7611C93.7338 13.0706 94.2043 13.5467 94.5001 14.125C94.8497 14.8004 95.0209 15.5501 94.998 16.3062V21.8468H93.1203V16.5989C93.1203 15.7596 92.9155 15.1177 92.5058 14.6735C92.2949 14.4456 92.0344 14.2663 91.744 14.1485C91.4536 14.0307 91.1402 13.9774 90.8259 13.9925C90.509 13.9781 90.1929 14.0317 89.899 14.1493C89.6059 14.267 89.3428 14.4459 89.1274 14.6735C88.7187 15.1165 88.5139 15.7584 88.5121 16.5989V21.8468H86.6254V16.5989C86.6254 15.7596 86.4203 15.1177 86.0102 14.6735C85.7996 14.4457 85.5395 14.2665 85.2491 14.1487C84.9586 14.0309 84.645 13.9775 84.3308 13.9925C84.014 13.9784 83.6977 14.0321 83.4044 14.1497C83.111 14.2674 82.8475 14.4462 82.6325 14.6735C82.2325 15.1153 82.0317 15.7571 82.0304 16.5989V21.8468H80.1434V12.4592H82.0304V13.5342C82.3442 13.145 82.7494 12.835 83.2117 12.6304C83.6904 12.4133 84.2126 12.3027 84.7403 12.3064C85.4261 12.2949 86.1028 12.4593 86.7028 12.7832C87.2788 13.102 87.7425 13.5832 88.0331 14.1637C88.3108 13.5946 88.7646 13.1242 89.3296 12.8181C89.8999 12.4787 90.5558 12.2998 91.224 12.3009Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M105.527 11.7653C105.215 11.2049 104.739 10.7569 104.164 10.4837C103.474 10.143 102.712 9.9778 101.945 10.0024H98V22H99.8841V17.1307H101.954C102.895 17.1307 103.67 16.961 104.271 16.6289C104.831 16.3288 105.289 15.8655 105.587 15.2987C105.86 14.7666 106.003 14.1749 106 13.5749C106.004 12.9398 105.841 12.315 105.527 11.7653ZM103.539 15.0245C103.188 15.3566 102.657 15.5245 101.945 15.5245H99.8841V11.6068H101.954C103.368 11.6068 104.074 12.2623 104.074 13.5731C104.064 14.1944 103.889 14.6794 103.539 15.0245Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M116.341 14.3726C115.927 13.6389 115.306 13.03 114.548 12.6148C113.768 12.2113 112.893 12 112.006 12C111.118 12 110.244 12.2113 109.464 12.6148C108.705 13.0291 108.083 13.6382 107.67 14.3726C107.215 15.1779 106.984 16.0812 107.001 16.9959C106.982 17.9113 107.203 18.8167 107.643 19.6306C108.051 20.3586 108.66 20.9654 109.406 21.3846C110.17 21.7989 111.036 22.0111 111.914 21.9996C112.809 22.0095 113.691 21.7975 114.474 21.3846C115.251 20.9695 115.892 20.3561 116.323 19.6135C116.785 18.8121 117.018 17.9097 116.999 16.9959C117.017 16.0824 116.791 15.1796 116.341 14.3726ZM114.493 18.7802C114.245 19.2269 113.874 19.6004 113.419 19.8606C112.965 20.1204 112.444 20.2569 111.914 20.2551C111.53 20.2635 111.147 20.1924 110.794 20.0465C110.441 19.9008 110.125 19.6837 109.868 19.4105C109.337 18.8384 109.071 18.031 109.071 16.9883C109.054 16.3761 109.19 15.7689 109.47 15.2173C109.698 14.7587 110.063 14.3735 110.518 14.1087C110.962 13.8687 111.465 13.7425 111.976 13.7425C112.487 13.7425 112.989 13.8687 113.434 14.1087C113.902 14.3699 114.279 14.7552 114.52 15.2173C114.806 15.7667 114.943 16.3756 114.919 16.9883C114.937 17.6103 114.791 18.2267 114.493 18.7802Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M127.343 14.3726C126.929 13.6384 126.308 13.0294 125.549 12.6148C124.767 12.2113 123.894 12 123.004 12C122.115 12 121.241 12.2113 120.46 12.6148C119.7 13.0284 119.078 13.6376 118.665 14.3726C118.211 15.1784 117.983 16.0817 118.001 16.9959C117.981 17.9107 118.199 18.8161 118.637 19.6306C119.047 20.3583 119.658 20.9651 120.404 21.3845C121.168 21.7987 122.033 22.0109 122.911 21.9996C123.81 22.0073 124.695 21.7928 125.479 21.3769C126.257 20.9613 126.896 20.3482 127.329 19.6059C127.787 18.8063 128.018 17.9067 127.999 16.9959C128.018 16.0826 127.793 15.1797 127.343 14.3726ZM125.491 18.7802C125.244 19.2269 124.873 19.6004 124.418 19.8606C123.963 20.1204 123.442 20.2569 122.911 20.2551C122.526 20.2637 122.145 20.1927 121.791 20.0469C121.438 19.901 121.123 19.6838 120.866 19.4105C120.335 18.8384 120.069 18.031 120.069 16.9883C120.049 16.377 120.183 15.77 120.458 15.2173C120.687 14.758 121.054 14.3728 121.51 14.1087C121.955 13.8687 122.457 13.7425 122.968 13.7425C123.479 13.7425 123.982 13.8687 124.427 14.1087C124.895 14.3692 125.273 14.7546 125.513 15.2173C125.803 15.7686 125.942 16.38 125.92 16.9959C125.938 17.6156 125.79 18.2294 125.491 18.7802Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M132 9H130V22H132V9Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M137.647 21.9988C137.009 22.0096 136.377 21.8715 135.793 21.5941C135.283 21.3397 134.84 20.953 134.506 20.4694C134.194 20.0012 134.017 19.4443 134 18.8695H135.871C135.886 19.0717 135.941 19.2686 136.031 19.4472C136.121 19.6257 136.245 19.7822 136.395 19.9068C136.747 20.1853 137.178 20.3277 137.616 20.3115C138.028 20.3386 138.439 20.2278 138.79 19.9943C138.922 19.903 139.03 19.778 139.105 19.6306C139.179 19.4834 139.219 19.3182 139.219 19.1507C139.224 18.9807 139.18 18.8131 139.096 18.6692C139.011 18.5253 138.888 18.4118 138.742 18.3431C138.272 18.0977 137.78 17.9011 137.274 17.756C136.731 17.6016 136.197 17.4112 135.675 17.186C135.258 16.9934 134.889 16.6985 134.597 16.3253C134.285 15.8873 134.127 15.3456 134.152 14.7957C134.15 14.2926 134.293 13.801 134.565 13.3897C134.859 12.9391 135.267 12.5857 135.74 12.3693C136.301 12.1145 136.906 11.989 137.516 12.0008C138.509 12.0008 139.307 12.2819 139.912 12.8444C140.515 13.4068 140.843 14.1624 140.894 15.1112H139.076C139.067 14.9128 139.021 14.7186 138.939 14.5403C138.857 14.3622 138.741 14.204 138.6 14.0756C138.269 13.8043 137.858 13.6694 137.441 13.6956C137.056 13.6689 136.673 13.7733 136.347 13.9939C136.227 14.0817 136.13 14.2002 136.063 14.3386C135.997 14.4769 135.963 14.6307 135.967 14.7862C135.965 14.9075 135.987 15.0278 136.03 15.1396C136.074 15.2515 136.139 15.3524 136.221 15.436C136.4 15.6171 136.61 15.7597 136.84 15.8559C137.083 15.9484 137.443 16.0713 137.918 16.2246C138.45 16.3738 138.969 16.5682 139.473 16.806C139.886 16.9919 140.252 17.2812 140.539 17.6496C140.851 18.0742 141.014 18.6029 140.999 19.143C141.002 19.6644 140.857 20.1746 140.583 20.6061C140.288 21.0583 139.881 21.4131 139.407 21.6302C138.852 21.888 138.252 22.0137 137.647 21.9988Z"
                                  fill="white"
                                ></path>
                                <mask
                                  id="mask1_1529_12461"
                                  style={{ maskType: "luminance" }}
                                  maskUnits="userSpaceOnUse"
                                  x="0"
                                  y="1"
                                  width="30"
                                  height="30"
                                >
                                  <path
                                    d="M30 1H0V31H30V1Z"
                                    fill="white"
                                  ></path>
                                </mask>
                                <g mask="url(#mask1_1529_12461)">
                                  <path
                                    d="M15.5004 2.8882C12.8059 2.8882 10.6144 2.49091 10.6144 2H10C10 2.55164 12.4672 3 15.5004 3C18.5337 3 21 2.55164 21 2H20.3855C20.3855 2.48807 18.1941 2.8882 15.5004 2.8882Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M15.5003 11.665C8.88761 11.665 3.50817 10.4694 3.50817 9H2C2 10.6544 8.05625 12 15.5003 12C22.9446 12 29 10.6544 29 9H27.4919C27.4919 10.4722 22.1123 11.665 15.5003 11.665Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M15.0001 19.5535C7.65002 19.5535 1.67549 17.9597 1.67549 16H0C0 18.2062 6.72902 20 15.0001 20C23.2711 20 30 18.2062 30 16H28.3238C28.3238 17.9597 22.3471 19.5535 15.0001 19.5535Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M15.5003 25.6649C8.88761 25.6649 3.50817 24.4692 3.50817 23H2C2 24.6543 8.05625 26 15.5003 26C22.9446 26 29 24.6517 29 23.0006H27.4919C27.4919 24.4692 22.1123 25.6649 15.5003 25.6649Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M15.5004 30.8888C12.8059 30.8888 10.6144 30.4912 10.6144 30H10C10 30.5514 12.4672 31 15.5004 31C18.5337 31 21 30.5514 21 30H20.3855C20.3855 30.4902 18.1941 30.8888 15.5004 30.8888Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M10.8098 12.865C8.71463 12.7226 6.79067 12.4485 5.21042 12.0541L5 12C5.04545 12.0938 5.09578 12.185 5.1508 12.2734C5.65301 13.0722 6.47716 13.6538 7.1961 14.259C7.67235 14.6634 8.49578 15.8104 8.89907 17.0542C9.08772 17.6366 9.2498 18.2246 9.40486 18.8177C10.2367 18.9017 11.105 18.9601 12 19C11.6942 18.644 11.4697 18.1998 11.2839 17.7035C10.8296 16.5043 10.627 15.2219 10.689 13.9386C10.7112 13.5789 10.7515 13.2206 10.8098 12.865Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M18.1877 12.8637C18.247 13.2214 18.2881 13.5819 18.3107 13.9438C18.3736 15.2273 18.1706 16.5099 17.715 17.7091C17.5282 18.2025 17.3048 18.6447 17 19C17.8927 18.963 18.7602 18.9017 19.5904 18.8177C19.7456 18.2261 19.9072 17.6351 20.0961 17.0533C20.5006 15.8094 21.3246 14.658 21.8015 14.2572C22.5214 13.6505 23.3468 13.0702 23.8496 12.2712C23.9045 12.1836 23.9546 12.0931 24 12L23.7893 12.0534C22.2081 12.4472 20.2835 12.7213 18.1877 12.8637Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M14.5032 20.1957H14.4883C14.4633 20.1957 14.4256 20.1957 14.3807 20.1957C12.8709 20.1919 11.3966 20.1265 10 20.0023C10.2701 21.2829 10.6086 23.4969 10.8387 24.5616C10.9326 25.0263 11.0963 25.4708 11.3232 25.8773C12.3415 25.955 13.4088 26 14.5004 26C15.592 26 16.6558 25.9587 17.6733 25.878C17.9025 25.4705 18.0677 25.0243 18.1622 24.5578C18.3909 23.4969 18.7279 21.2806 19 20C17.5693 20.1297 16.0558 20.1957 14.5032 20.1957Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M12 27C12.7069 27.7233 13.5855 27.959 14.4634 28H14.5217C15.4011 27.959 16.2864 27.7233 17 27.001C16.1856 27.0553 15.3518 27.0847 14.506 27.0847C13.6602 27.0847 12.8188 27.0553 12 27Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M6.73479 11.2347C8.16695 11.5993 9.89946 11.8583 11.7897 12C11.8407 11.7134 11.8933 11.4268 11.9421 11.1418C12.1227 10.0592 11.888 8.97901 11.1341 8.15001C10.7318 7.71301 10.2313 7.38526 9.67688 7.19578C9.11496 7.00285 8.51645 6.95154 7.93141 7.04617C6.17836 7.32646 5.00991 8.85702 5 10.456C5 10.53 5.00002 10.604 5.00612 10.678C5.56936 10.9041 6.14694 11.0901 6.73479 11.2347Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M18.8668 8.15457C18.1126 8.98499 17.8754 10.0651 18.0592 11.1484C18.1065 11.432 18.1584 11.7156 18.2117 12C20.1008 11.859 21.832 11.599 23.2633 11.2351C23.8519 11.0905 24.43 10.9043 24.9937 10.678C24.9984 10.6039 25.0006 10.5292 24.9998 10.4551C24.9908 8.8479 23.8269 7.31867 22.0684 7.04371C21.4832 6.95156 20.885 7.00559 20.3242 7.20128C19.77 7.39058 19.2695 7.71799 18.8668 8.15457Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M15.5004 1.11187C18.1941 1.11187 20.3855 1.50937 20.3855 2H21C21 1.44861 18.5328 1 15.5004 1C12.4679 1 10 1.44861 10 2H10.6144C10.6144 1.5105 12.8059 1.11187 15.5004 1.11187Z"
                                    fill="url(#paint0_linear_1529_12461)"
                                  ></path>
                                  <path
                                    d="M15.5003 6.33503C22.1123 6.33503 27.4919 7.53061 27.4919 9H29C29 7.349 22.9438 6 15.5003 6C8.05701 6 2 7.34556 2 9H3.50817C3.50817 7.53061 8.88761 6.33503 15.5003 6.33503Z"
                                    fill="url(#paint1_linear_1529_12461)"
                                  ></path>
                                  <path
                                    d="M15.5004 28C12.4672 28 10 28.4486 10 29H10.6144C10.6144 28.5104 12.8059 28.1118 15.5004 28.1118C18.1949 28.1118 20.3855 28.5093 20.3855 29H21C21 28.4486 18.5328 28 15.5004 28Z"
                                    fill="url(#paint2_linear_1529_12461)"
                                  ></path>
                                  <path
                                    d="M6.20888 13.3914C3.43437 14.0278 1.67893 14.9618 1.67893 16H0C0 14.7963 2.09361 13.7184 5.37953 13C5.71022 13.0247 5.97118 13.1822 6.20888 13.3914ZM24.6174 13C24.2867 13.0239 24.025 13.1822 23.7926 13.3914C26.5671 14.0278 28.3247 14.961 28.3247 16H30C29.9947 14.7963 27.9004 13.7184 24.6145 13H24.6174Z"
                                    fill="url(#paint3_linear_1529_12461)"
                                  ></path>
                                  <path
                                    d="M10.3583 20.335C6.31351 20.8093 3.50787 21.8252 3.50787 23H2C2 21.6783 5.15577 20.5345 9.70979 20.0007L9.75475 20.0054C10.2107 20.0609 10.3583 20.335 10.3583 20.335ZM21.2871 20L21.2421 20.0047C20.7855 20.0609 20.6415 20.335 20.6415 20.335C24.6872 20.8093 27.492 21.8252 27.492 23H29C28.9976 21.6774 25.8419 20.5337 21.2871 20Z"
                                    fill="url(#paint4_linear_1529_12461)"
                                  ></path>
                                </g>
                              </g>
                              <defs>
                                <linearGradient
                                  id="paint0_linear_1529_12461"
                                  x1="15.5004"
                                  y1="2"
                                  x2="15.5004"
                                  y2="1"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="white"></stop>
                                  <stop
                                    offset="1"
                                    stopColor="white"
                                    stopOpacity="0.3"
                                  ></stop>
                                </linearGradient>
                                <linearGradient
                                  id="paint1_linear_1529_12461"
                                  x1="15.5003"
                                  y1="9"
                                  x2="15.5003"
                                  y2="6"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="white"></stop>
                                  <stop
                                    offset="1"
                                    stopColor="white"
                                    stopOpacity="0.3"
                                  ></stop>
                                </linearGradient>
                                <linearGradient
                                  id="paint2_linear_1529_12461"
                                  x1="15.5004"
                                  y1="29"
                                  x2="15.5004"
                                  y2="28"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="white"></stop>
                                  <stop
                                    offset="1"
                                    stopColor="white"
                                    stopOpacity="0.3"
                                  ></stop>
                                </linearGradient>
                                <linearGradient
                                  id="paint3_linear_1529_12461"
                                  x1="14.9974"
                                  y1="16"
                                  x2="14.9974"
                                  y2="13"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="white"></stop>
                                  <stop
                                    offset="1"
                                    stopColor="white"
                                    stopOpacity="0.3"
                                  ></stop>
                                </linearGradient>
                                <linearGradient
                                  id="paint4_linear_1529_12461"
                                  x1="15.5007"
                                  y1="22.9993"
                                  x2="15.5007"
                                  y2="20"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="white"></stop>
                                  <stop
                                    offset="1"
                                    stopColor="white"
                                    stopOpacity="0.3"
                                  ></stop>
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                        </div>
                        <div className="description" data-v-a133c29c="">
                          Use your VENOM on validator nodes using Venom Pools
                        </div>
                        <div className="platforms-with-link" data-v-a133c29c="">
                          <div className="platforms" data-v-a133c29c=""></div>
                          <a
                            href="https://testnet.venompools.com"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="kit-read-more read-more"
                            data-v-a133c29c=""
                            data-v-d93ab3f1=""
                          >
                            <div className="text" data-v-d93ab3f1="">
                              Explore
                            </div>
                            <div className="icon" data-v-d93ab3f1="">
                              <div
                                className="kit-icon is-fill"
                                data-v-d93ab3f1=""
                              >
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M19 12H5"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M14 17L19 12"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M14 7L19 12"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div
                        className="item-component"
                        data-v-1ca2ff44=""
                        data-v-a133c29c=""
                      >
                        <div className="icon" data-v-a133c29c="">
                          <div className="kit-icon is-fill" data-v-a133c29c="">
                            <svg
                              width="150"
                              height="32"
                              viewBox="0 0 150 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <mask
                                id="mask0_1529_12452"
                                style={{ maskType: "luminance" }}
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="3"
                                width="36"
                                height="27"
                              >
                                <path d="M36 3H0V30H36V3Z" fill="white"></path>
                              </mask>
                              <g mask="url(#mask0_1529_12452)">
                                <path
                                  d="M30.9998 7.44209C31.0067 8.23645 30.7938 9.01384 30.3818 9.69276C29.6961 10.8266 28.5713 11.6516 27.5918 12.5138C26.9433 13.0841 25.8185 14.7204 25.2679 16.489C24.9335 17.5583 24.6633 18.6515 24.3931 19.7411C24.0114 21.2654 23.4946 24.6398 23.1534 26.1708C22.8123 27.7018 22.1098 28.6421 21.2349 29.209C20.3567 29.7726 19.3029 29.9661 18.2592 30H18.1849C16.0941 29.9287 14.0066 29.2362 13.3244 26.1708C12.9967 24.7145 12.5137 21.5879 12.1422 19.972C13.0811 19.2965 14.0607 18.8551 14.9794 18.5768C15.5199 19.5476 16.2899 20.247 17.5465 20.4405C17.6748 20.4608 18.0903 20.488 18.222 20.4812C18.3538 20.4744 18.8165 20.4608 18.9448 20.4405C20.6236 20.179 21.4274 19.0249 21.9882 17.5244C20.4749 17.039 19.0968 16.9439 18.2389 16.9439C16.1244 16.9439 10.8924 17.5278 8.12604 23.0374C7.07556 25.132 4.90032 26.3778 2.70481 25.5733C-1.28089 24.0185 -0.656013 19.2048 3.23173 17.4056C5.71097 16.2616 8.14292 15.4366 10.5546 14.8935C10.0007 13.8038 9.3319 12.9109 8.88939 12.5172C7.90986 11.6583 6.78508 10.83 6.09941 9.69618C5.68733 9.01724 5.47453 8.23985 5.48128 7.44548C5.4948 5.38489 6.96073 3.42274 9.15962 3.05951C10.6525 2.81169 12.1692 3.34806 13.1791 4.4785C14.1248 5.54444 14.4187 6.93288 14.1924 8.32472C13.9864 9.58081 13.7128 10.8572 13.652 12.0623C13.6148 12.8228 13.6418 13.5798 13.733 14.3334C15.2362 14.1399 16.7358 14.0516 18.2389 14.0516C19.7487 14.0516 21.2519 14.1432 22.7549 14.3368C22.8427 13.5865 22.8697 12.8295 22.8326 12.0725C22.7718 10.8639 22.4982 9.59098 22.2922 8.3349C22.0658 6.94306 22.3597 5.55463 23.3055 4.48869C24.312 3.35484 25.8253 2.81848 27.3182 3.0629C29.5306 3.41595 30.9897 5.3781 30.9998 7.44209Z"
                                  fill="#09C790"
                                ></path>
                                <path
                                  d="M33.2588 25.745C31.0366 26.5764 28.8315 25.289 27.7632 23.1246C26.9927 21.56 26.034 20.3778 25 19.4903C25.2259 18.5641 25.4657 17.6205 25.7396 16.7154C25.9279 16.1016 26.1846 15.5157 26.4586 15C28.5199 15.5507 30.6017 16.3085 32.7177 17.3048C36.6657 19.164 37.2992 24.1384 33.2588 25.745Z"
                                  fill="#09C790"
                                ></path>
                              </g>
                              <path
                                d="M54.7067 11L51.0777 20.8725H49.629L46 11H47.3385L50.3602 19.5127L53.382 11H54.7067ZM63.1206 16.6941C63.1206 16.9395 63.1068 17.1992 63.0791 17.4731H57.0355C57.0815 18.2379 57.3345 18.8376 57.7944 19.2719C58.2636 19.6968 58.8294 19.9093 59.4916 19.9093C60.0344 19.9093 60.4851 19.7819 60.8438 19.5269C61.2118 19.2625 61.4694 18.9131 61.6166 18.4788H62.9688C62.7664 19.2247 62.3617 19.8338 61.7546 20.306C61.1474 20.7687 60.3931 21 59.4916 21C58.7741 21 58.1303 20.8347 57.5599 20.5043C56.9988 20.1737 56.5572 19.7064 56.2352 19.102C55.9133 18.4882 55.7523 17.78 55.7523 16.9773C55.7523 16.1747 55.9087 15.4712 56.2215 14.8668C56.5342 14.2625 56.9711 13.7998 57.5322 13.4787C58.1026 13.1483 58.7557 12.983 59.4916 12.983C60.2091 12.983 60.8438 13.1435 61.3958 13.4646C61.9477 13.7857 62.3709 14.2294 62.6652 14.796C62.9688 15.3531 63.1206 15.9859 63.1206 16.6941ZM61.8235 16.4249C61.8235 15.9339 61.7178 15.5137 61.5062 15.1643C61.2946 14.8055 61.0048 14.5364 60.6369 14.3569C60.2781 14.1681 59.878 14.0737 59.4365 14.0737C58.8017 14.0737 58.259 14.2814 57.8082 14.6969C57.3667 15.1124 57.1138 15.6883 57.0493 16.4249H61.8235ZM68.6 12.9688C69.5199 12.9688 70.265 13.2568 70.8353 13.8328C71.4057 14.3995 71.6909 15.221 71.6909 16.2975V20.8725H70.4491V16.4816C70.4491 15.7073 70.2604 15.1171 69.8833 14.7111C69.5061 14.2956 68.991 14.0878 68.3379 14.0878C67.6756 14.0878 67.1466 14.3003 66.7511 14.7252C66.3647 15.1502 66.1716 15.7686 66.1716 16.5807V20.8725H64.916V13.1105H66.1716V14.2153C66.42 13.8187 66.7557 13.5118 67.1788 13.2946C67.6112 13.0775 68.0849 12.9688 68.6 12.9688ZM77.1777 21C76.4694 21 75.8255 20.8347 75.246 20.5043C74.6756 20.1737 74.2248 19.7064 73.8937 19.102C73.5717 18.4882 73.4107 17.78 73.4107 16.9773C73.4107 16.1842 73.5764 15.4854 73.9075 14.881C74.2478 14.2672 74.7079 13.7998 75.2873 13.4787C75.8669 13.1483 76.5153 12.983 77.2329 12.983C77.9504 12.983 78.5989 13.1483 79.1785 13.4787C79.7579 13.7998 80.2133 14.2625 80.5445 14.8668C80.8848 15.4712 81.055 16.1747 81.055 16.9773C81.055 17.78 80.8802 18.4882 80.5307 19.102C80.1903 19.7064 79.7258 20.1737 79.137 20.5043C78.5483 20.8347 77.8952 21 77.1777 21ZM77.1777 19.8669C77.6284 19.8669 78.0515 19.7582 78.4471 19.5411C78.8426 19.3239 79.16 18.9981 79.3992 18.5637C79.6476 18.1294 79.7717 17.6005 79.7717 16.9773C79.7717 16.3541 79.6522 15.8253 79.413 15.3909C79.1738 14.9565 78.8611 14.6355 78.4747 14.4277C78.0884 14.2106 77.6698 14.102 77.2191 14.102C76.7592 14.102 76.336 14.2106 75.9497 14.4277C75.5725 14.6355 75.269 14.9565 75.0389 15.3909C74.809 15.8253 74.694 16.3541 74.694 16.9773C74.694 17.6101 74.8044 18.1435 75.0251 18.5779C75.2551 19.0123 75.5587 19.338 75.9359 19.5553C76.313 19.763 76.727 19.8669 77.1777 19.8669ZM91.9369 12.9688C92.5252 12.9688 93.0503 13.0963 93.5103 13.3513C93.9694 13.5968 94.3332 13.9698 94.5997 14.4702C94.8672 14.9707 95 15.5798 95 16.2975V20.8725H93.7582V16.4816C93.7582 15.7073 93.5701 15.1171 93.193 14.7111C92.8248 14.2956 92.3229 14.0878 91.6881 14.0878C91.0356 14.0878 90.5158 14.305 90.1289 14.7393C89.7429 15.1643 89.5495 15.7828 89.5495 16.5949V20.8725H88.308V16.4816C88.308 15.7073 88.1194 15.1171 87.7422 14.7111C87.3743 14.2956 86.873 14.0878 86.2382 14.0878C85.5851 14.0878 85.0654 14.305 84.6791 14.7393C84.2927 15.1643 84.0995 15.7828 84.0995 16.5949V20.8725H82.8439V13.1105H84.0995V14.2294C84.3479 13.8234 84.6791 13.5118 85.093 13.2946C85.5161 13.0775 85.9807 12.9688 86.4866 12.9688C87.1213 12.9688 87.6825 13.1152 88.17 13.4079C88.6575 13.7007 89.0209 14.1303 89.2597 14.6969C89.4719 14.1492 89.8214 13.7243 90.309 13.4221C90.7966 13.1199 91.3387 12.9688 91.9369 12.9688Z"
                                fill="white"
                              ></path>
                              <path
                                d="M102.897 15.1478C103.462 15.2685 103.914 15.5521 104.257 15.9981C104.599 16.4349 104.771 16.9368 104.771 17.5037C104.771 18.3216 104.484 18.9721 103.91 19.4554C103.346 19.9294 102.554 20.1664 101.537 20.1664H97V10.3801H101.385C102.374 10.3801 103.147 10.6078 103.702 11.0632C104.266 11.5186 104.548 12.1366 104.548 12.9173C104.548 13.4935 104.396 13.9721 104.09 14.3532C103.794 14.7342 103.396 14.9991 102.897 15.1478ZM99.3729 14.3392H100.926C101.316 14.3392 101.611 14.2556 101.815 14.0883C102.027 13.9117 102.134 13.6562 102.134 13.3215C102.134 12.9869 102.027 12.7314 101.815 12.5548C101.611 12.3783 101.316 12.29 100.926 12.29H99.3729V14.3392ZM101.121 18.2426C101.519 18.2426 101.824 18.1542 102.037 17.9777C102.259 17.7918 102.37 17.5269 102.37 17.1831C102.37 16.8392 102.254 16.5697 102.023 16.3745C101.801 16.1794 101.491 16.0818 101.093 16.0818H99.3729V18.2426H101.121ZM108.658 13.684C108.935 13.2565 109.282 12.9219 109.698 12.6803C110.114 12.4293 110.577 12.3039 111.086 12.3039V14.8271H110.433C109.842 14.8271 109.398 14.9573 109.102 15.2175C108.805 15.4684 108.658 15.9145 108.658 16.5558V20.1664H106.286V12.3875H108.658V13.684ZM113.552 11.579C113.135 11.579 112.794 11.4581 112.525 11.2166C112.267 10.9656 112.137 10.659 112.137 10.2964C112.137 9.92473 112.267 9.61805 112.525 9.37639C112.794 9.12546 113.135 9 113.552 9C113.959 9 114.292 9.12546 114.551 9.37639C114.819 9.61805 114.953 9.92473 114.953 10.2964C114.953 10.659 114.819 10.9656 114.551 11.2166C114.292 11.4581 113.959 11.579 113.552 11.579ZM114.731 12.3875V20.1664H112.359V12.3875H114.731ZM116.118 16.263C116.118 15.4637 116.266 14.7621 116.562 14.158C116.867 13.5539 117.279 13.0892 117.797 12.7639C118.315 12.4387 118.893 12.276 119.532 12.276C120.04 12.276 120.502 12.3829 120.918 12.5967C121.344 12.8104 121.677 13.0985 121.918 13.461V9.85033H124.29V20.1664H121.918V19.0511C121.696 19.4228 121.377 19.7202 120.961 19.9433C120.554 20.1663 120.077 20.2779 119.532 20.2779C118.893 20.2779 118.315 20.1152 117.797 19.79C117.279 19.4554 116.867 18.986 116.562 18.3819C116.266 17.7686 116.118 17.0623 116.118 16.263ZM121.918 16.2769C121.918 15.6821 121.751 15.2128 121.419 14.8689C121.094 14.5251 120.697 14.3532 120.225 14.3532C119.753 14.3532 119.351 14.5251 119.018 14.8689C118.694 15.2035 118.532 15.6682 118.532 16.263C118.532 16.8578 118.694 17.3318 119.018 17.685C119.351 18.0288 119.753 18.2007 120.225 18.2007C120.697 18.2007 121.094 18.0288 121.419 17.685C121.751 17.3411 121.918 16.8718 121.918 16.2769ZM129.087 12.276C129.633 12.276 130.109 12.3875 130.516 12.6106C130.933 12.8337 131.252 13.1264 131.473 13.4888V12.3875H133.846V20.1524C133.846 20.868 133.703 21.5139 133.416 22.0901C133.139 22.6756 132.709 23.1403 132.126 23.4842C131.552 23.8281 130.835 24 129.975 24C128.828 24 127.898 23.7258 127.186 23.1775C126.474 22.6384 126.067 21.9043 125.965 20.9749H128.311C128.384 21.2723 128.56 21.5047 128.838 21.6719C129.115 21.8485 129.457 21.9368 129.864 21.9368C130.355 21.9368 130.743 21.7927 131.03 21.5047C131.325 21.2258 131.473 20.7751 131.473 20.1524V19.0511C131.242 19.4136 130.923 19.711 130.516 19.9433C130.109 20.1663 129.633 20.2779 129.087 20.2779C128.449 20.2779 127.87 20.1152 127.353 19.79C126.835 19.4554 126.424 18.986 126.118 18.3819C125.822 17.7686 125.674 17.0623 125.674 16.263C125.674 15.4637 125.822 14.7621 126.118 14.158C126.424 13.5539 126.835 13.0892 127.353 12.7639C127.87 12.4387 128.449 12.276 129.087 12.276ZM131.473 16.2769C131.473 15.6821 131.307 15.2128 130.974 14.8689C130.65 14.5251 130.252 14.3532 129.781 14.3532C129.309 14.3532 128.907 14.5251 128.574 14.8689C128.25 15.2035 128.088 15.6682 128.088 16.263C128.088 16.8578 128.25 17.3318 128.574 17.685C128.907 18.0288 129.309 18.2007 129.781 18.2007C130.252 18.2007 130.65 18.0288 130.974 17.685C131.307 17.3411 131.473 16.8718 131.473 16.2769ZM143 16.1515C143 16.3745 142.987 16.6069 142.959 16.8485H137.589C137.626 17.3318 137.778 17.7035 138.046 17.9637C138.324 18.2147 138.662 18.3401 139.059 18.3401C139.652 18.3401 140.063 18.0892 140.294 17.5873H142.82C142.69 18.0985 142.454 18.5585 142.112 18.9675C141.779 19.3764 141.358 19.697 140.849 19.9294C140.34 20.1617 139.772 20.2779 139.143 20.2779C138.384 20.2779 137.709 20.1152 137.117 19.79C136.525 19.4647 136.062 19 135.73 18.3959C135.396 17.7918 135.229 17.0855 135.229 16.2769C135.229 15.4684 135.392 14.7621 135.715 14.158C136.049 13.5539 136.511 13.0892 137.103 12.7639C137.695 12.4387 138.375 12.276 139.143 12.276C139.892 12.276 140.558 12.434 141.141 12.75C141.723 13.066 142.177 13.5167 142.501 14.1023C142.833 14.6877 143 15.3708 143 16.1515ZM140.571 15.5242C140.571 15.1153 140.433 14.7899 140.156 14.5484C139.878 14.3067 139.532 14.1858 139.115 14.1858C138.718 14.1858 138.38 14.302 138.102 14.5344C137.834 14.7667 137.667 15.0966 137.602 15.5242H140.571Z"
                                fill="#09C790"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="description" data-v-a133c29c="">
                          Explore the world of interchain transactions
                        </div>
                        <div className="platforms-with-link" data-v-a133c29c="">
                          <div className="platforms" data-v-a133c29c="">
                            <a
                              href="https://twitter.com/VenomBridge"
                              rel="noopener noreferrer"
                              target="_blank"
                              className="platform-item fill"
                              aria-label="Twitter"
                              data-v-a133c29c=""
                            >
                              <div
                                className="kit-icon is-fill"
                                data-v-a133c29c=""
                              >
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M19.95 9.3501C19.95 8.93588 19.6142 8.6001 19.2 8.6001C18.7858 8.6001 18.45 8.93588 18.45 9.3501H19.95ZM3.60565 16.1077C3.36134 15.7732 2.89213 15.7001 2.55764 15.9444C2.22314 16.1888 2.15004 16.658 2.39435 16.9925L3.60565 16.1077ZM2.87257 15.811C2.46438 15.8814 2.19053 16.2693 2.2609 16.6775C2.33128 17.0857 2.71924 17.3596 3.12743 17.2892L2.87257 15.811ZM5.7 15.6501L5.93829 16.3612C6.18386 16.2789 6.36961 16.0758 6.4296 15.8238C6.4896 15.5719 6.41535 15.3068 6.23322 15.1227L5.7 15.6501ZM4.8 4.8501L5.46058 4.49494C5.33797 4.26688 5.10639 4.1182 4.84798 4.10163C4.58958 4.08507 4.34091 4.20296 4.19018 4.4135L4.8 4.8501ZM10.2 9.3501L10.0229 10.0789C10.2422 10.1322 10.4739 10.0839 10.6537 9.94732C10.8334 9.81076 10.9421 9.60051 10.9496 9.37489L10.2 9.3501ZM18.3 6.6501L17.6738 7.06287C17.8126 7.27339 18.0479 7.4001 18.3 7.4001V6.6501ZM21 6.6501L21.624 7.06612C21.7775 6.83598 21.7918 6.54007 21.6613 6.2962C21.5307 6.05234 21.2766 5.9001 21 5.9001V6.6501ZM18.576 8.93407C18.3462 9.27872 18.4393 9.74437 18.784 9.97414C19.1286 10.2039 19.5943 10.1108 19.824 9.76612L18.576 8.93407ZM18.45 9.3501C18.45 12.3621 17.5901 14.8711 16.0501 16.6164C14.5204 18.35 12.2593 19.4001 9.3 19.4001V20.9001C12.6407 20.9001 15.3296 19.7002 17.1749 17.6088C19.0099 15.5291 19.95 12.6381 19.95 9.3501H18.45ZM9.3 19.4001C7.64458 19.4001 6.5374 18.9725 5.70459 18.3832C4.84887 17.7777 4.23772 16.9731 3.60565 16.1077L2.39435 16.9925C3.01928 17.8481 3.75813 18.8435 4.83816 19.6077C5.9411 20.3881 7.35542 20.9001 9.3 20.9001V19.4001ZM3.12743 17.2892C3.15119 17.2851 3.16958 17.2807 3.17593 17.2792C3.18458 17.2771 3.19158 17.2753 3.19578 17.2741C3.20418 17.2719 3.21102 17.2699 3.21457 17.2688C3.22212 17.2666 3.229 17.2645 3.23345 17.2631C3.24301 17.2601 3.25419 17.2566 3.26552 17.2529C3.28875 17.2454 3.32054 17.235 3.35881 17.2224C3.43573 17.1971 3.54331 17.1614 3.67073 17.1191C3.92579 17.0343 4.26283 16.9218 4.5986 16.8095C4.93446 16.6973 5.26937 16.5852 5.5203 16.5012C5.64577 16.4592 5.75026 16.4242 5.82338 16.3997C5.85994 16.3875 5.88866 16.3779 5.90825 16.3713C5.91804 16.368 5.92555 16.3655 5.93061 16.3638C5.93314 16.363 5.93506 16.3623 5.93634 16.3619C5.93699 16.3617 5.93747 16.3615 5.9378 16.3614C5.93796 16.3613 5.93808 16.3613 5.93816 16.3613C5.93821 16.3613 5.93824 16.3613 5.93826 16.3612C5.93828 16.3612 5.93829 16.3612 5.7 15.6501C5.46171 14.939 5.4617 14.939 5.46168 14.939C5.46166 14.939 5.46163 14.939 5.46159 14.939C5.46151 14.939 5.46139 14.9391 5.46123 14.9391C5.46091 14.9392 5.46042 14.9394 5.45978 14.9396C5.4585 14.94 5.45659 14.9407 5.45407 14.9415C5.44902 14.9432 5.44152 14.9457 5.43175 14.949C5.41219 14.9556 5.3835 14.9652 5.34697 14.9774C5.2739 15.0019 5.16949 15.0368 5.0441 15.0788C4.79331 15.1628 4.45867 15.2748 4.12315 15.3869C3.78755 15.4991 3.4514 15.6112 3.19749 15.6957C3.07042 15.7379 2.96458 15.773 2.88987 15.7976C2.85233 15.8099 2.82377 15.8193 2.80469 15.8254C2.79486 15.8286 2.78939 15.8303 2.78715 15.831C2.78569 15.8315 2.78787 15.8308 2.79198 15.8296C2.79381 15.8291 2.79923 15.8275 2.80654 15.8255C2.8102 15.8245 2.81673 15.8228 2.82499 15.8208C2.83095 15.8194 2.84904 15.8151 2.87257 15.811L3.12743 17.2892ZM6.23322 15.1227C3.48941 12.3487 3.28417 8.25569 5.40982 5.2867L4.19018 4.4135C1.64783 7.96451 1.89859 12.8735 5.16678 16.1775L6.23322 15.1227ZM4.13942 5.20525C5.31949 7.40017 7.53919 9.47526 10.0229 10.0789L10.3771 8.62131C8.40881 8.14294 6.49451 6.41803 5.46058 4.49494L4.13942 5.20525ZM10.9496 9.37489C10.9872 8.2389 11.388 7.29977 12.0242 6.64966C12.6563 6.00364 13.5621 5.6001 14.7 5.6001V4.1001C13.1869 4.1001 11.8857 4.64655 10.9521 5.60054C10.0225 6.55042 9.49883 7.86129 9.45041 9.3253L10.9496 9.37489ZM14.7 5.6001C15.5057 5.6001 16.0959 5.75301 16.5489 5.99477C17.0003 6.23567 17.3617 6.58945 17.6738 7.06287L18.9262 6.23733C18.5053 5.59874 17.9692 5.05253 17.2551 4.67143C16.5426 4.29119 15.6993 4.1001 14.7 4.1001V5.6001ZM18.3 7.4001H21V5.9001H18.3V7.4001ZM20.376 6.23407L18.576 8.93407L19.824 9.76612L21.624 7.06612L20.376 6.23407Z"
                                    fill="#EEEEEE"
                                  ></path>
                                </svg>
                              </div>
                            </a>
                          </div>
                          <a
                            href="https://testnet.venombridge.com/bridge"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="kit-read-more read-more"
                            data-v-a133c29c=""
                            data-v-d93ab3f1=""
                          >
                            <div className="text" data-v-d93ab3f1="">
                              Explore
                            </div>
                            <div className="icon" data-v-d93ab3f1="">
                              <div
                                className="kit-icon is-fill"
                                data-v-d93ab3f1=""
                              >
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M19 12H5"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M14 17L19 12"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M14 7L19 12"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div
                        className="item-component"
                        data-v-1ca2ff44=""
                        data-v-a133c29c=""
                      >
                        <div className="icon" data-v-a133c29c="">
                          <div className="kit-icon is-fill" data-v-a133c29c="">
                            <svg
                              width="194"
                              height="40"
                              viewBox="0 0 194 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M88.7625 30.1535C88.236 29.6185 87.9727 28.9601 87.9727 28.1782C87.9727 27.3963 88.236 26.7378 88.7625 26.2028C89.289 25.6679 89.9371 25.4004 90.7067 25.4004C91.4762 25.4004 92.1243 25.6679 92.6509 26.2028C93.1774 26.7378 93.4407 27.3963 93.4407 28.1782C93.4407 28.9601 93.1774 29.6185 92.6509 30.1535C92.1243 30.6885 91.4762 30.9559 90.7067 30.9559C89.9371 30.9559 89.289 30.6885 88.7625 30.1535Z"
                                fill="white"
                              ></path>
                              <path
                                d="M93.582 8.88867H99.202L101.936 24.0121H102.24L105.095 8.88867H111.84L114.695 24.0121H114.998L117.733 8.88867H123.353L118.947 30.4936H111.353L108.619 15.9874H108.315L105.581 30.4936H97.9868L93.582 8.88867Z"
                                fill="white"
                              ></path>
                              <path
                                d="M126.474 28.4558C124.773 26.7891 123.922 24.7932 123.922 22.4681C123.922 20.143 124.773 18.1471 126.474 16.4805C128.175 14.8138 130.261 13.9805 132.732 13.9805C135.203 13.9805 137.289 14.8138 138.99 16.4805C140.691 18.1471 141.541 20.143 141.541 22.4681C141.541 24.7932 140.691 26.7891 138.99 28.4558C137.289 30.1225 135.203 30.9558 132.732 30.9558C130.261 30.9558 128.175 30.1225 126.474 28.4558ZM130.211 19.5669C129.562 20.2871 129.239 21.2541 129.239 22.4681C129.239 23.6821 129.562 24.6595 130.211 25.4002C130.879 26.1205 131.72 26.4805 132.732 26.4805C133.744 26.4805 134.574 26.1205 135.223 25.4002C135.891 24.6595 136.225 23.6821 136.225 22.4681C136.225 21.2541 135.891 20.2871 135.223 19.5669C134.574 18.8261 133.744 18.4558 132.732 18.4558C131.72 18.4558 130.879 18.8261 130.211 19.5669Z"
                                fill="white"
                              ></path>
                              <path
                                d="M144.098 30.4947V14.4454H149.11V16.7602H149.413C149.597 16.2664 149.87 15.8343 150.234 15.4639C151.064 14.5792 152.077 14.1367 153.272 14.1367H154.882V19.2294H152.3C151.389 19.2294 150.649 19.5174 150.082 20.0935C149.535 20.6491 149.262 21.3898 149.262 22.3157V30.4947H144.098Z"
                                fill="white"
                              ></path>
                              <path
                                d="M157.135 30.4936V8.88867H162.299V26.3269H165.793V30.4936H157.135Z"
                                fill="white"
                              ></path>
                              <path
                                d="M169.317 28.6418C167.96 27.078 167.281 25.0203 167.281 22.4689C167.281 19.9175 167.96 17.8701 169.317 16.3269C170.673 14.7631 172.323 13.9812 174.268 13.9812C175.523 13.9812 176.709 14.4237 177.822 15.3084C178.288 15.6993 178.673 16.1314 178.977 16.6047H179.28V8.88867H184.445V30.4936H179.28V28.3331H178.977C178.693 28.8269 178.308 29.2693 177.822 29.6602C176.729 30.5245 175.545 30.9566 174.268 30.9566C172.323 30.9566 170.673 30.185 169.317 28.6418ZM173.509 19.506C172.901 20.2056 172.598 21.1932 172.598 22.4689C172.598 23.7447 172.901 24.7323 173.509 25.4319C174.117 26.1315 174.927 26.4812 175.939 26.4812C176.951 26.4812 177.761 26.1315 178.369 25.4319C178.977 24.7323 179.28 23.7447 179.28 22.4689C179.28 21.1932 178.977 20.2056 178.369 19.506C177.761 18.8063 176.951 18.4566 175.939 18.4566C174.927 18.4566 174.117 18.8063 173.509 19.506Z"
                                fill="white"
                              ></path>
                              <path
                                d="M30.8768 28.4558C29.1959 26.7891 28.3555 24.7932 28.3555 22.4681C28.3555 20.143 29.1959 18.1471 30.8768 16.4805C32.5578 14.8138 34.6032 13.9805 37.0131 13.9805C39.4637 13.9805 41.5192 14.8138 43.1799 16.4805C44.8406 18.1471 45.6709 20.143 45.6709 22.4681V23.3941H33.6716C33.8336 24.4846 34.1981 25.3282 34.7652 25.9249C35.3526 26.5011 36.1018 26.7891 37.0131 26.7891C38.0866 26.7891 38.8966 26.5114 39.4435 25.9558C39.6865 25.7295 39.8889 25.4414 40.051 25.0916H45.519C45.1545 26.2234 44.6077 27.2007 43.8786 28.0237C42.2787 29.9785 39.9902 30.9558 37.0131 30.9558C34.6032 30.9558 32.5578 30.1225 30.8768 28.4558ZM33.8235 20.7706H40.2029C40.0206 20.0299 39.6459 19.4126 39.0789 18.9188C38.5118 18.4044 37.8232 18.1471 37.0131 18.1471C36.2031 18.1471 35.5146 18.4044 34.9475 18.9188C34.3805 19.4126 34.0058 20.0299 33.8235 20.7706Z"
                                fill="white"
                              ></path>
                              <path
                                d="M48.3828 30.4936V8.88867H53.5471V16.6047H53.8509C54.1344 16.1314 54.5191 15.6993 55.0053 15.3084C56.1191 14.4237 57.3038 13.9812 58.5595 13.9812C60.5036 13.9812 62.1541 14.7631 63.511 16.3269C64.8679 17.8701 65.5464 19.9175 65.5464 22.4689C65.5464 25.0203 64.8679 27.078 63.511 28.6418C62.1541 30.185 60.5036 30.9566 58.5595 30.9566C57.2836 30.9566 56.0988 30.5245 55.0053 29.6602C54.5191 29.2693 54.1344 28.8269 53.8509 28.3331H53.5471V30.4936H48.3828ZM54.4585 19.506C53.8509 20.2056 53.5471 21.1932 53.5471 22.4689C53.5471 23.7447 53.8509 24.7323 54.4585 25.4319C55.066 26.1315 55.876 26.4812 56.8887 26.4812C57.9013 26.4812 58.7114 26.1315 59.3189 25.4319C59.9265 24.7323 60.2303 23.7447 60.2303 22.4689C60.2303 21.1932 59.9265 20.2056 59.3189 19.506C58.7114 18.8063 57.9013 18.4566 56.8887 18.4566C55.876 18.4566 55.066 18.8063 54.4585 19.506Z"
                                fill="white"
                              ></path>
                              <path
                                d="M67.332 23.7035H73.1038C73.2254 24.1768 73.4481 24.5882 73.7721 24.938C74.4607 25.7611 75.453 26.1727 76.7491 26.1727C77.782 26.1727 78.5921 25.9257 79.1795 25.4319C79.787 24.9175 80.0908 24.2899 80.0908 23.5491C80.0908 22.829 79.787 22.2117 79.1795 21.6973C78.5921 21.1829 77.782 20.9257 76.7491 20.9257H71.8887V17.222L76.7491 14.1356V13.8269H68.5471V8.88867H84.4956V13.8269L79.787 16.759L79.4528 16.8824V17.2529L79.5136 17.222C81.316 17.222 82.8248 17.829 84.0399 19.043C85.255 20.257 85.8626 21.759 85.8626 23.5491C85.8626 25.7097 85.0424 27.5101 83.4019 28.9504C81.7616 30.3908 79.5439 31.1109 76.7491 31.1109C73.1646 31.1109 70.5318 29.8763 68.8509 27.4072C68.0814 26.3167 67.575 25.0821 67.332 23.7035Z"
                                fill="#09C790"
                              ></path>
                              <path
                                d="M14.0819 8.88867H16.2559L19.1111 24.0121H19.4149L18.2493 30.4936H15.7699L13.0362 15.9874H12.7324L14.0819 8.88867Z"
                                fill="#09C790"
                              ></path>
                              <path
                                d="M14.0819 8.88867H16.2559L19.1111 24.0121H19.4149L18.2493 30.4936H15.7699L13.0362 15.9874H12.7324L14.0819 8.88867Z"
                                fill="url(#paint0_linear_1739_15220)"
                                fillOpacity="0.5"
                              ></path>
                              <path
                                d="M16.0829 8.88867L11.98 30.4494L11.9932 30.4936H4.4048L0 8.88867H5.61991L8.35392 24.0121H8.6577L11.5132 8.88867H16.0829Z"
                                fill="white"
                              ></path>
                              <path
                                d="M18.2109 30.4936L22.1185 8.88867H27.7278L23.3234 30.4936H18.2109Z"
                                fill="white"
                              ></path>
                              <defs>
                                <linearGradient
                                  id="paint0_linear_1739_15220"
                                  x1="13.4006"
                                  y1="12.369"
                                  x2="19.8708"
                                  y2="13.3232"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#05382A"></stop>
                                  <stop offset="1" stopColor="#09C790"></stop>
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                        </div>
                        <div className="description" data-v-a133c29c="">
                          Intuitively swap assets, provide liquidity and farm
                          available assets
                        </div>
                        <div className="platforms-with-link" data-v-a133c29c="">
                          <div className="platforms" data-v-a133c29c="">
                            <a
                              href="https://twitter.com/w3w_exchange"
                              rel="noopener noreferrer"
                              target="_blank"
                              className="platform-item fill"
                              aria-label="Twitter"
                              data-v-a133c29c=""
                            >
                              <div
                                className="kit-icon is-fill"
                                data-v-a133c29c=""
                              >
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M19.95 9.3501C19.95 8.93588 19.6142 8.6001 19.2 8.6001C18.7858 8.6001 18.45 8.93588 18.45 9.3501H19.95ZM3.60565 16.1077C3.36134 15.7732 2.89213 15.7001 2.55764 15.9444C2.22314 16.1888 2.15004 16.658 2.39435 16.9925L3.60565 16.1077ZM2.87257 15.811C2.46438 15.8814 2.19053 16.2693 2.2609 16.6775C2.33128 17.0857 2.71924 17.3596 3.12743 17.2892L2.87257 15.811ZM5.7 15.6501L5.93829 16.3612C6.18386 16.2789 6.36961 16.0758 6.4296 15.8238C6.4896 15.5719 6.41535 15.3068 6.23322 15.1227L5.7 15.6501ZM4.8 4.8501L5.46058 4.49494C5.33797 4.26688 5.10639 4.1182 4.84798 4.10163C4.58958 4.08507 4.34091 4.20296 4.19018 4.4135L4.8 4.8501ZM10.2 9.3501L10.0229 10.0789C10.2422 10.1322 10.4739 10.0839 10.6537 9.94732C10.8334 9.81076 10.9421 9.60051 10.9496 9.37489L10.2 9.3501ZM18.3 6.6501L17.6738 7.06287C17.8126 7.27339 18.0479 7.4001 18.3 7.4001V6.6501ZM21 6.6501L21.624 7.06612C21.7775 6.83598 21.7918 6.54007 21.6613 6.2962C21.5307 6.05234 21.2766 5.9001 21 5.9001V6.6501ZM18.576 8.93407C18.3462 9.27872 18.4393 9.74437 18.784 9.97414C19.1286 10.2039 19.5943 10.1108 19.824 9.76612L18.576 8.93407ZM18.45 9.3501C18.45 12.3621 17.5901 14.8711 16.0501 16.6164C14.5204 18.35 12.2593 19.4001 9.3 19.4001V20.9001C12.6407 20.9001 15.3296 19.7002 17.1749 17.6088C19.0099 15.5291 19.95 12.6381 19.95 9.3501H18.45ZM9.3 19.4001C7.64458 19.4001 6.5374 18.9725 5.70459 18.3832C4.84887 17.7777 4.23772 16.9731 3.60565 16.1077L2.39435 16.9925C3.01928 17.8481 3.75813 18.8435 4.83816 19.6077C5.9411 20.3881 7.35542 20.9001 9.3 20.9001V19.4001ZM3.12743 17.2892C3.15119 17.2851 3.16958 17.2807 3.17593 17.2792C3.18458 17.2771 3.19158 17.2753 3.19578 17.2741C3.20418 17.2719 3.21102 17.2699 3.21457 17.2688C3.22212 17.2666 3.229 17.2645 3.23345 17.2631C3.24301 17.2601 3.25419 17.2566 3.26552 17.2529C3.28875 17.2454 3.32054 17.235 3.35881 17.2224C3.43573 17.1971 3.54331 17.1614 3.67073 17.1191C3.92579 17.0343 4.26283 16.9218 4.5986 16.8095C4.93446 16.6973 5.26937 16.5852 5.5203 16.5012C5.64577 16.4592 5.75026 16.4242 5.82338 16.3997C5.85994 16.3875 5.88866 16.3779 5.90825 16.3713C5.91804 16.368 5.92555 16.3655 5.93061 16.3638C5.93314 16.363 5.93506 16.3623 5.93634 16.3619C5.93699 16.3617 5.93747 16.3615 5.9378 16.3614C5.93796 16.3613 5.93808 16.3613 5.93816 16.3613C5.93821 16.3613 5.93824 16.3613 5.93826 16.3612C5.93828 16.3612 5.93829 16.3612 5.7 15.6501C5.46171 14.939 5.4617 14.939 5.46168 14.939C5.46166 14.939 5.46163 14.939 5.46159 14.939C5.46151 14.939 5.46139 14.9391 5.46123 14.9391C5.46091 14.9392 5.46042 14.9394 5.45978 14.9396C5.4585 14.94 5.45659 14.9407 5.45407 14.9415C5.44902 14.9432 5.44152 14.9457 5.43175 14.949C5.41219 14.9556 5.3835 14.9652 5.34697 14.9774C5.2739 15.0019 5.16949 15.0368 5.0441 15.0788C4.79331 15.1628 4.45867 15.2748 4.12315 15.3869C3.78755 15.4991 3.4514 15.6112 3.19749 15.6957C3.07042 15.7379 2.96458 15.773 2.88987 15.7976C2.85233 15.8099 2.82377 15.8193 2.80469 15.8254C2.79486 15.8286 2.78939 15.8303 2.78715 15.831C2.78569 15.8315 2.78787 15.8308 2.79198 15.8296C2.79381 15.8291 2.79923 15.8275 2.80654 15.8255C2.8102 15.8245 2.81673 15.8228 2.82499 15.8208C2.83095 15.8194 2.84904 15.8151 2.87257 15.811L3.12743 17.2892ZM6.23322 15.1227C3.48941 12.3487 3.28417 8.25569 5.40982 5.2867L4.19018 4.4135C1.64783 7.96451 1.89859 12.8735 5.16678 16.1775L6.23322 15.1227ZM4.13942 5.20525C5.31949 7.40017 7.53919 9.47526 10.0229 10.0789L10.3771 8.62131C8.40881 8.14294 6.49451 6.41803 5.46058 4.49494L4.13942 5.20525ZM10.9496 9.37489C10.9872 8.2389 11.388 7.29977 12.0242 6.64966C12.6563 6.00364 13.5621 5.6001 14.7 5.6001V4.1001C13.1869 4.1001 11.8857 4.64655 10.9521 5.60054C10.0225 6.55042 9.49883 7.86129 9.45041 9.3253L10.9496 9.37489ZM14.7 5.6001C15.5057 5.6001 16.0959 5.75301 16.5489 5.99477C17.0003 6.23567 17.3617 6.58945 17.6738 7.06287L18.9262 6.23733C18.5053 5.59874 17.9692 5.05253 17.2551 4.67143C16.5426 4.29119 15.6993 4.1001 14.7 4.1001V5.6001ZM18.3 7.4001H21V5.9001H18.3V7.4001ZM20.376 6.23407L18.576 8.93407L19.824 9.76612L21.624 7.06612L20.376 6.23407Z"
                                    fill="#EEEEEE"
                                  ></path>
                                </svg>
                              </div>
                            </a>
                          </div>
                          <a
                            href="https://testnet.web3.world"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="kit-read-more read-more"
                            data-v-a133c29c=""
                            data-v-d93ab3f1=""
                          >
                            <div className="text" data-v-d93ab3f1="">
                              Explore
                            </div>
                            <div className="icon" data-v-d93ab3f1="">
                              <div
                                className="kit-icon is-fill"
                                data-v-d93ab3f1=""
                              >
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M19 12H5"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M14 17L19 12"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M14 7L19 12"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div
                        className="item-component"
                        data-v-1ca2ff44=""
                        data-v-a133c29c=""
                      >
                        <div className="icon" data-v-a133c29c="">
                          <div className="kit-icon is-fill" data-v-a133c29c="">
                            <svg
                              width="176"
                              height="40"
                              viewBox="0 0 176 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M46.9249 25.5016C44.5533 25.5016 43.3809 24.3292 43.3809 21.9576V17.2144C43.3809 14.8429 44.5533 13.6704 46.9249 13.6704H51.6681C54.0396 13.6704 55.2121 14.8429 55.2121 17.2144V21.9576C55.2121 24.3292 54.0396 25.5016 51.6681 25.5016H46.9249ZM51.6681 23.1301V16.0153H46.9249V23.1301H51.6681ZM64.6984 23.1301V20.7585H59.9552V23.1301H64.6984ZM68.2424 24.3025C68.2424 25.1019 67.8427 25.475 67.07 25.475H59.9552C57.5837 25.475 56.4112 24.3025 56.4112 21.931C56.4112 19.5594 57.5837 18.3869 59.9552 18.3869H64.6984V16.0153H58.1966C57.7968 16.0153 57.6103 15.8288 57.6103 15.4291V14.2566C57.6103 13.8569 57.7968 13.6704 58.1966 13.6704H64.6984C67.07 13.6704 68.2424 14.8429 68.2424 17.2144V24.3025ZM72.9856 20.7585C70.614 20.7585 69.4416 19.7726 69.4416 17.8007V16.7614C69.4416 14.683 70.614 13.6438 72.959 13.6438H80.7132C81.1129 13.6438 81.2994 13.8303 81.2994 14.23V15.4025C81.2994 15.8022 81.1129 15.9887 80.7132 15.9887H73.0122V18.3603H77.8087C80.0737 18.3603 81.2461 19.3462 81.3261 21.2914V22.4905C81.3261 24.4624 80.1536 25.4483 77.782 25.4483H70.0811C69.6814 25.4483 69.4949 25.2618 69.4949 24.8621V23.6896C69.4949 23.2899 69.6814 23.1034 70.0811 23.1034H77.782V20.7318L72.9856 20.7585ZM86.0159 24.3025C86.0159 25.1019 85.6162 25.475 84.8435 25.475H83.671C82.8716 25.475 82.4986 25.0753 82.4986 24.3025V18.3869C82.4986 17.5875 82.8983 17.2144 83.671 17.2144H84.8435C85.6429 17.2144 86.0159 17.6141 86.0159 18.3869V24.3025ZM82.4719 13.6438C82.4719 12.8444 82.8716 12.4713 83.6444 12.4713H84.8168C85.563 12.4713 85.9627 12.8443 85.9893 13.5638V14.8162C85.9893 15.6156 85.5896 15.9887 84.8168 15.9887H83.6444C82.845 15.9887 82.4719 15.589 82.4719 14.8162V13.6438ZM90.7591 20.7585C88.3875 20.7585 87.2151 19.7726 87.2151 17.8007V16.7614C87.2151 14.683 88.3875 13.6438 90.7324 13.6438H98.4867C98.8864 13.6438 99.0729 13.8303 99.0729 14.23V15.4025C99.0729 15.8022 98.8864 15.9887 98.4867 15.9887H90.7591V18.3603H95.5555C97.8205 18.3603 98.993 19.3462 99.0729 21.2914V22.4905C99.0729 24.4624 97.9005 25.4483 95.5289 25.4483H87.8279C87.4282 25.4483 87.2417 25.2618 87.2417 24.8621V23.6896C87.2417 23.2899 87.4282 23.1034 87.8279 23.1034H95.5289V20.7318L90.7591 20.7585ZM100.219 23.1301C100.219 22.3307 100.618 21.9576 101.391 21.9576H102.564C103.363 21.9576 103.736 22.3573 103.736 23.1301V24.4091C103.71 25.1286 103.31 25.5016 102.564 25.5016H101.418C100.618 25.5016 100.245 25.1019 100.245 24.3292V23.1301H100.219ZM108.533 23.1301H113.276V16.0153H108.533V23.1301ZM108.533 25.5016C106.161 25.5016 104.989 24.3292 104.989 21.9576V17.2144C104.989 14.8429 106.161 13.6704 108.533 13.6704H113.276C115.647 13.6704 116.82 14.6563 116.82 16.6282V27.287C116.82 29.2589 115.647 30.2448 113.276 30.2448H106.747C106.348 30.2448 106.161 30.0583 106.161 29.6586V28.4594C106.161 28.0597 106.348 27.8732 106.747 27.8732H113.249V25.5016H108.533ZM126.279 23.1301V20.7585H121.536V23.1301H126.279ZM129.85 24.3025C129.85 25.1019 129.45 25.475 128.678 25.475H121.563C119.191 25.475 118.019 24.3025 118.019 21.931C118.019 19.5594 119.191 18.3869 121.563 18.3869H126.306V16.0153H119.804C119.405 16.0153 119.218 15.8288 119.218 15.4291V14.2566C119.218 13.8569 119.405 13.6704 119.804 13.6704H126.306C128.678 13.6704 129.85 14.8429 129.85 17.2144V24.3025ZM131.023 12.4713C131.023 11.6719 131.422 11.2988 132.195 11.2988H133.368C134.167 11.2988 134.54 11.6985 134.54 12.4713V24.3292C134.54 25.1286 134.14 25.5016 133.368 25.5016H132.195C131.396 25.5016 131.023 25.1019 131.023 24.3292V12.4713ZM135.766 12.4713C135.766 11.6719 136.165 11.2988 136.938 11.2988H138.111C138.91 11.2988 139.283 11.6985 139.283 12.4713V24.3292C139.283 25.1286 138.883 25.5016 138.111 25.5016H136.938C136.139 25.5016 135.766 25.1019 135.766 24.3292V12.4713ZM144.053 18.3869H148.796V16.0153H144.053V18.3869ZM144.053 20.7585V23.1301H151.754C152.154 23.1301 152.34 23.3166 152.34 23.7163V24.8888C152.34 25.2885 152.154 25.475 151.754 25.475H144.053C141.681 25.475 140.509 24.3025 140.509 21.931V17.1878C140.509 14.8162 141.681 13.6438 144.053 13.6438H148.796C151.168 13.6438 152.34 14.6297 152.34 16.6016V17.6408C152.34 19.7193 151.168 20.7585 148.823 20.7585H144.053ZM153.539 24.3025C153.539 25.1019 153.939 25.475 154.712 25.475H155.884C156.684 25.475 157.057 25.0753 157.057 24.3025V16.0153H160.601V17.8007C160.601 18.2004 160.787 18.3869 161.187 18.3869H162.359C162.759 18.3869 162.946 18.2004 162.946 17.8007V16.0153C162.946 14.4432 162.146 13.6438 160.574 13.6438H154.578C153.832 13.6704 153.459 14.0701 153.459 14.8162V24.3025H153.539ZM167.742 25.5016C165.37 25.5016 164.198 24.3292 164.198 21.9576V14.8429C164.198 14.0435 164.598 13.6704 165.37 13.6704H166.543C167.342 13.6704 167.715 14.0701 167.715 14.8429V23.1301H172.459V14.8429C172.459 14.0435 172.858 13.6704 173.631 13.6704H174.804C175.603 13.6704 175.976 14.0701 175.976 14.8429V27.287C175.976 29.2589 174.803 30.2448 172.432 30.2448H165.93C165.53 30.2448 165.344 30.0583 165.344 29.6586V28.4594C165.344 28.0597 165.53 27.8732 165.93 27.8732H172.432V25.5016H167.742Z"
                                fill="white"
                              ></path>
                              <path
                                d="M4.7698 34.9889C1.59882 33.5233 0 30.4589 0 25.7957V12.2058C0 5.41081 3.41081 2 10.2058 2H23.7957C30.5907 2 34.0015 5.41081 34.0015 12.2058V25.7957C34.0015 30.4589 32.4027 33.4967 29.2317 34.9889C26.3005 32.1643 22.49 30.4323 18.3597 30.1125L17.6669 17.0822L25.5011 24.9164C23.5292 18.3612 25.5011 24.9164 23.5292 18.3612C22.49 17.322 21.1843 16.6558 19.8253 16.3893H29.0451C23.0229 13.1651 29.0451 16.3893 23.0229 13.1651C21.5307 13.1651 20.1451 13.6181 18.9993 14.3908L25.5278 7.86232C18.9726 9.8342 25.5278 7.86232 18.9726 9.8342C17.9067 10.9001 17.2406 12.2058 16.9741 13.5648C16.7076 12.2058 16.0414 10.9001 14.9756 9.8342C8.42043 7.86232 14.9756 9.8342 8.42043 7.86232L14.9489 14.3908C13.8031 13.6181 12.4175 13.1651 10.9252 13.1651C4.90303 16.3893 10.9252 13.1651 4.90303 16.3893H14.1229C12.7639 16.6558 11.4848 17.322 10.4189 18.3612C8.44707 24.9164 10.4189 18.3612 8.44707 24.9164L16.3079 17.0555L15.5885 30.1125C11.5381 30.4323 7.70096 32.1643 4.7698 34.9889Z"
                                fill="white"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17.001 31.498C22.5702 31.498 27.3933 34.1627 29.6583 37.9999H4.34375C6.58209 34.1627 11.4052 31.498 17.001 31.498Z"
                                fill="#EBBE40"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="description" data-v-a133c29c="">
                          An NFT marketplace on Venom blockchain for unique
                          digital assets trading
                        </div>
                        <div className="platforms-with-link" data-v-a133c29c="">
                          <div className="platforms" data-v-a133c29c="">
                            <a
                              href="https://twitter.com/0asisgallery"
                              rel="noopener noreferrer"
                              target="_blank"
                              className="platform-item fill"
                              aria-label="Twitter"
                              data-v-a133c29c=""
                            >
                              <div
                                className="kit-icon is-fill"
                                data-v-a133c29c=""
                              >
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M19.95 9.3501C19.95 8.93588 19.6142 8.6001 19.2 8.6001C18.7858 8.6001 18.45 8.93588 18.45 9.3501H19.95ZM3.60565 16.1077C3.36134 15.7732 2.89213 15.7001 2.55764 15.9444C2.22314 16.1888 2.15004 16.658 2.39435 16.9925L3.60565 16.1077ZM2.87257 15.811C2.46438 15.8814 2.19053 16.2693 2.2609 16.6775C2.33128 17.0857 2.71924 17.3596 3.12743 17.2892L2.87257 15.811ZM5.7 15.6501L5.93829 16.3612C6.18386 16.2789 6.36961 16.0758 6.4296 15.8238C6.4896 15.5719 6.41535 15.3068 6.23322 15.1227L5.7 15.6501ZM4.8 4.8501L5.46058 4.49494C5.33797 4.26688 5.10639 4.1182 4.84798 4.10163C4.58958 4.08507 4.34091 4.20296 4.19018 4.4135L4.8 4.8501ZM10.2 9.3501L10.0229 10.0789C10.2422 10.1322 10.4739 10.0839 10.6537 9.94732C10.8334 9.81076 10.9421 9.60051 10.9496 9.37489L10.2 9.3501ZM18.3 6.6501L17.6738 7.06287C17.8126 7.27339 18.0479 7.4001 18.3 7.4001V6.6501ZM21 6.6501L21.624 7.06612C21.7775 6.83598 21.7918 6.54007 21.6613 6.2962C21.5307 6.05234 21.2766 5.9001 21 5.9001V6.6501ZM18.576 8.93407C18.3462 9.27872 18.4393 9.74437 18.784 9.97414C19.1286 10.2039 19.5943 10.1108 19.824 9.76612L18.576 8.93407ZM18.45 9.3501C18.45 12.3621 17.5901 14.8711 16.0501 16.6164C14.5204 18.35 12.2593 19.4001 9.3 19.4001V20.9001C12.6407 20.9001 15.3296 19.7002 17.1749 17.6088C19.0099 15.5291 19.95 12.6381 19.95 9.3501H18.45ZM9.3 19.4001C7.64458 19.4001 6.5374 18.9725 5.70459 18.3832C4.84887 17.7777 4.23772 16.9731 3.60565 16.1077L2.39435 16.9925C3.01928 17.8481 3.75813 18.8435 4.83816 19.6077C5.9411 20.3881 7.35542 20.9001 9.3 20.9001V19.4001ZM3.12743 17.2892C3.15119 17.2851 3.16958 17.2807 3.17593 17.2792C3.18458 17.2771 3.19158 17.2753 3.19578 17.2741C3.20418 17.2719 3.21102 17.2699 3.21457 17.2688C3.22212 17.2666 3.229 17.2645 3.23345 17.2631C3.24301 17.2601 3.25419 17.2566 3.26552 17.2529C3.28875 17.2454 3.32054 17.235 3.35881 17.2224C3.43573 17.1971 3.54331 17.1614 3.67073 17.1191C3.92579 17.0343 4.26283 16.9218 4.5986 16.8095C4.93446 16.6973 5.26937 16.5852 5.5203 16.5012C5.64577 16.4592 5.75026 16.4242 5.82338 16.3997C5.85994 16.3875 5.88866 16.3779 5.90825 16.3713C5.91804 16.368 5.92555 16.3655 5.93061 16.3638C5.93314 16.363 5.93506 16.3623 5.93634 16.3619C5.93699 16.3617 5.93747 16.3615 5.9378 16.3614C5.93796 16.3613 5.93808 16.3613 5.93816 16.3613C5.93821 16.3613 5.93824 16.3613 5.93826 16.3612C5.93828 16.3612 5.93829 16.3612 5.7 15.6501C5.46171 14.939 5.4617 14.939 5.46168 14.939C5.46166 14.939 5.46163 14.939 5.46159 14.939C5.46151 14.939 5.46139 14.9391 5.46123 14.9391C5.46091 14.9392 5.46042 14.9394 5.45978 14.9396C5.4585 14.94 5.45659 14.9407 5.45407 14.9415C5.44902 14.9432 5.44152 14.9457 5.43175 14.949C5.41219 14.9556 5.3835 14.9652 5.34697 14.9774C5.2739 15.0019 5.16949 15.0368 5.0441 15.0788C4.79331 15.1628 4.45867 15.2748 4.12315 15.3869C3.78755 15.4991 3.4514 15.6112 3.19749 15.6957C3.07042 15.7379 2.96458 15.773 2.88987 15.7976C2.85233 15.8099 2.82377 15.8193 2.80469 15.8254C2.79486 15.8286 2.78939 15.8303 2.78715 15.831C2.78569 15.8315 2.78787 15.8308 2.79198 15.8296C2.79381 15.8291 2.79923 15.8275 2.80654 15.8255C2.8102 15.8245 2.81673 15.8228 2.82499 15.8208C2.83095 15.8194 2.84904 15.8151 2.87257 15.811L3.12743 17.2892ZM6.23322 15.1227C3.48941 12.3487 3.28417 8.25569 5.40982 5.2867L4.19018 4.4135C1.64783 7.96451 1.89859 12.8735 5.16678 16.1775L6.23322 15.1227ZM4.13942 5.20525C5.31949 7.40017 7.53919 9.47526 10.0229 10.0789L10.3771 8.62131C8.40881 8.14294 6.49451 6.41803 5.46058 4.49494L4.13942 5.20525ZM10.9496 9.37489C10.9872 8.2389 11.388 7.29977 12.0242 6.64966C12.6563 6.00364 13.5621 5.6001 14.7 5.6001V4.1001C13.1869 4.1001 11.8857 4.64655 10.9521 5.60054C10.0225 6.55042 9.49883 7.86129 9.45041 9.3253L10.9496 9.37489ZM14.7 5.6001C15.5057 5.6001 16.0959 5.75301 16.5489 5.99477C17.0003 6.23567 17.3617 6.58945 17.6738 7.06287L18.9262 6.23733C18.5053 5.59874 17.9692 5.05253 17.2551 4.67143C16.5426 4.29119 15.6993 4.1001 14.7 4.1001V5.6001ZM18.3 7.4001H21V5.9001H18.3V7.4001ZM20.376 6.23407L18.576 8.93407L19.824 9.76612L21.624 7.06612L20.376 6.23407Z"
                                    fill="#EEEEEE"
                                  ></path>
                                </svg>
                              </div>
                            </a>
                          </div>
                          <a
                            href="https://testnet.oasis.gallery"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="kit-read-more read-more"
                            data-v-a133c29c=""
                            data-v-d93ab3f1=""
                          >
                            <div className="text" data-v-d93ab3f1="">
                              Explore
                            </div>
                            <div className="icon" data-v-d93ab3f1="">
                              <div
                                className="kit-icon is-fill"
                                data-v-d93ab3f1=""
                              >
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M19 12H5"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M14 17L19 12"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M14 7L19 12"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="is-mobile" data-v-1ca2ff44="">
                      <div
                        className="kit-swiper"
                        data-v-1ca2ff44=""
                        data-v-7d6ec4d7=""
                      >
                        <div
                          className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper"
                          data-v-7d6ec4d7=""
                        >
                          <div
                            className="swiper-wrapper"
                            style={{ transitionDuration: "0ms" }}
                          >
                            <div className="swiper-slide" data-v-1ca2ff44="">
                              <div
                                className="item-component"
                                data-v-1ca2ff44=""
                                data-v-a133c29c=""
                              >
                                <div className="icon" data-v-a133c29c="">
                                  <div
                                    className="kit-icon is-fill"
                                    data-v-a133c29c=""
                                  >
                                    <svg
                                      width="183"
                                      height="32"
                                      viewBox="0 0 183 32"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M17.1175 5.04624C16.542 4.95328 15.9524 5.00621 15.4029 5.20018C14.8533 5.3942 14.3616 5.723 13.9729 6.15633C13.2309 6.98579 13.0001 8.0657 13.1782 9.14776C13.3397 10.1237 13.5536 11.1142 13.6019 12.0543C13.6693 13.4704 13.4533 14.8855 12.9665 16.2173C12.526 17.4225 11.8985 18.357 10.5536 18.5638C10.4539 18.5795 10.0908 18.5907 9.98767 18.5962C9.88462 18.6018 9.55844 18.5806 9.4576 18.565C8.11277 18.3581 7.47958 17.4236 7.04025 16.2106C6.55348 14.8788 6.33745 13.4636 6.40482 12.0476C6.45303 11.1108 6.66709 10.1193 6.82846 9.14111C7.00665 8.05897 6.77579 6.9791 6.03389 6.1496C5.64393 5.71662 5.15093 5.38854 4.60036 5.19569C4.04977 5.00287 3.45937 4.95148 2.88363 5.04624C1.15889 5.32687 0.0101868 6.85387 0.000100555 8.45583C-0.00471259 9.07304 0.16335 9.67933 0.485361 10.2064C1.02217 11.0896 1.90302 11.7335 2.67181 12.402C3.18061 12.8492 4.06036 14.1179 4.49183 15.4929C4.75293 16.3257 4.96588 17.1698 5.17654 18.0217C5.47241 19.2088 5.87921 21.8314 6.14706 23.0219C6.68165 25.4053 8.31785 25.9452 9.95743 26H10.0157C11.6553 25.9452 13.3184 25.4041 13.8529 23.0208C14.1196 21.8303 14.5254 19.2066 14.8234 18.0205C15.0353 17.1732 15.2471 16.3247 15.5081 15.4918C15.9397 14.1168 16.8193 12.8435 17.3282 12.4008C18.0969 11.7302 18.9767 11.0884 19.5146 10.2054C19.8366 9.67828 20.0047 9.0719 19.9999 8.45471C19.9909 6.84942 18.8467 5.32126 17.1175 5.04624Z"
                                        fill="url(#paint0_linear_1529_12512)"
                                      ></path>
                                      <path
                                        d="M43.6326 8.8972L38.14 23.8077H34.4926L29 8.8972H32.2183L36.3377 20.753L40.4357 8.8972H43.6326ZM56.483 17.6342C56.483 18.0614 56.4544 18.4459 56.3972 18.7877H47.7078C47.7793 19.6422 48.0796 20.3115 48.6089 20.7957C49.1381 21.2799 49.7889 21.522 50.5613 21.522C51.677 21.522 52.4709 21.0449 52.9429 20.0908H56.1826C55.8393 21.2301 55.1814 22.17 54.2087 22.9105C53.2361 23.6369 52.0417 24 50.6257 24C49.4814 24 48.4515 23.7508 47.5361 23.2523C46.635 22.7397 45.927 22.0205 45.412 21.0948C44.9114 20.1691 44.6611 19.101 44.6611 17.8905C44.6611 16.6658 44.9114 15.5906 45.412 14.6649C45.9127 13.7392 46.6135 13.0271 47.5147 12.5287C48.4158 12.0303 49.4528 11.781 50.6257 11.781C51.7557 11.781 52.7641 12.0231 53.6509 12.5073C54.552 12.9915 55.2458 13.6822 55.7321 14.5794C56.2327 15.4624 56.483 16.4806 56.483 17.6342ZM53.372 16.7797C53.3577 16.0107 53.0788 15.3983 52.5352 14.9426C51.9917 14.4726 51.3266 14.2377 50.5399 14.2377C49.7961 14.2377 49.1667 14.4655 48.6518 14.9212C48.1512 15.3627 47.8436 15.9822 47.7292 16.7797H53.372ZM65.2623 11.8024C66.6783 11.8024 67.8226 12.251 68.6952 13.1482C69.5677 14.0312 70.0039 15.2701 70.0039 16.8652V23.8077H67.0002V17.271C67.0002 16.3311 66.7642 15.6119 66.2921 15.1135C65.8201 14.6008 65.1765 14.3445 64.3612 14.3445C63.5316 14.3445 62.8736 14.6008 62.3873 15.1135C61.9152 15.6119 61.6792 16.3311 61.6792 17.271V23.8077H58.6755V11.9733H61.6792V13.4473C62.0797 12.9346 62.5875 12.5358 63.2026 12.251C63.8319 11.9519 64.5185 11.8024 65.2623 11.8024ZM78.1384 24C76.9941 24 75.9642 23.7508 75.0488 23.2523C74.1334 22.7397 73.411 22.0205 72.8818 21.0948C72.3669 20.1691 72.1094 19.101 72.1094 17.8905C72.1094 16.68 72.374 15.6119 72.9033 14.6862C73.4468 13.7606 74.1834 13.0485 75.1132 12.5501C76.0429 12.0374 77.0799 11.781 78.2242 11.781C79.3685 11.781 80.4055 12.0374 81.3352 12.5501C82.265 13.0485 82.9944 13.7606 83.5237 14.6862C84.0672 15.6119 84.339 16.68 84.339 17.8905C84.339 19.101 84.0601 20.1691 83.5022 21.0948C82.9587 22.0205 82.2149 22.7397 81.2709 23.2523C80.3411 23.7508 79.297 24 78.1384 24ZM78.1384 21.3939C78.6819 21.3939 79.1897 21.2657 79.6617 21.0093C80.148 20.7388 80.5342 20.34 80.8203 19.8131C81.1064 19.2862 81.2494 18.6453 81.2494 17.8905C81.2494 16.7655 80.949 15.9039 80.3483 15.3057C79.7618 14.6934 79.0395 14.3872 78.1813 14.3872C77.3231 14.3872 76.6007 14.6934 76.0143 15.3057C75.4422 15.9039 75.1561 16.7655 75.1561 17.8905C75.1561 19.0156 75.435 19.8843 75.9928 20.4967C76.565 21.0948 77.2802 21.3939 78.1384 21.3939ZM101.304 11.8024C102.763 11.8024 103.935 12.251 104.822 13.1482C105.723 14.0312 106.174 15.2701 106.174 16.8652V23.8077H103.17V17.271C103.17 16.3453 102.934 15.6404 102.462 15.1562C101.99 14.6578 101.346 14.4085 100.531 14.4085C99.7159 14.4085 99.0651 14.6578 98.5788 15.1562C98.1067 15.6404 97.8707 16.3453 97.8707 17.271V23.8077H94.867V17.271C94.867 16.3453 94.631 15.6404 94.1589 15.1562C93.6869 14.6578 93.0433 14.4085 92.228 14.4085C91.3983 14.4085 90.7404 14.6578 90.2541 15.1562C89.782 15.6404 89.546 16.3453 89.546 17.271V23.8077H86.5423V11.9733H89.546V13.4045C89.9322 12.9061 90.4257 12.5145 91.0265 12.2296C91.6415 11.9448 92.3138 11.8024 93.0433 11.8024C93.973 11.8024 94.8026 12.0018 95.5321 12.4005C96.2616 12.785 96.8266 13.3405 97.2271 14.0668C97.6133 13.3832 98.1711 12.8349 98.9006 12.4219C99.6444 12.0089 100.445 11.8024 101.304 11.8024ZM134.154 8.8972L129.971 23.8077H126.431L123.62 13.1909L120.68 23.8077L117.162 23.8291L113.128 8.8972H116.347L118.986 20.4753L122.032 8.8972H125.379L128.254 20.4112L130.915 8.8972H134.154ZM135.343 17.8478C135.343 16.6515 135.579 15.5906 136.051 14.6649C136.538 13.7392 137.189 13.0271 138.004 12.5287C138.834 12.0303 139.756 11.781 140.772 11.781C141.658 11.781 142.431 11.9591 143.089 12.3151C143.761 12.6711 144.298 13.1197 144.698 13.6609V11.9733H147.723V23.8077H144.698V22.0774C144.312 22.6328 143.775 23.0957 143.089 23.466C142.417 23.822 141.637 24 140.75 24C139.749 24 138.834 23.7437 138.004 23.231C137.189 22.7183 136.538 21.9991 136.051 21.0734C135.579 20.1335 135.343 19.0583 135.343 17.8478ZM144.698 17.8905C144.698 17.1642 144.555 16.5447 144.269 16.032C143.983 15.5051 143.597 15.1064 143.11 14.8358C142.624 14.551 142.102 14.4085 141.544 14.4085C140.986 14.4085 140.471 14.5438 139.999 14.8144C139.527 15.085 139.141 15.4838 138.841 16.0107C138.555 16.5234 138.412 17.1357 138.412 17.8478C138.412 18.5599 138.555 19.1865 138.841 19.7276C139.141 20.2546 139.527 20.6604 139.999 20.9453C140.486 21.2301 141.001 21.3725 141.544 21.3725C142.102 21.3725 142.624 21.2372 143.11 20.9666C143.597 20.6818 143.983 20.283 144.269 19.7704C144.555 19.2434 144.698 18.6168 144.698 17.8905ZM153.661 8V23.8077H150.657V8H153.661ZM159.632 8V23.8077H156.628V8H159.632ZM173.649 17.6342C173.649 18.0614 173.621 18.4459 173.564 18.7877H164.874C164.946 19.6422 165.246 20.3115 165.775 20.7957C166.304 21.2799 166.955 21.522 167.728 21.522C168.843 21.522 169.637 21.0449 170.109 20.0908H173.349C173.006 21.2301 172.348 22.17 171.375 22.9105C170.402 23.6369 169.208 24 167.792 24C166.648 24 165.618 23.7508 164.702 23.2523C163.801 22.7397 163.093 22.0205 162.578 21.0948C162.078 20.1691 161.827 19.101 161.827 17.8905C161.827 16.6658 162.078 15.5906 162.578 14.6649C163.079 13.7392 163.78 13.0271 164.681 12.5287C165.582 12.0303 166.619 11.781 167.792 11.781C168.922 11.781 169.93 12.0231 170.817 12.5073C171.718 12.9915 172.412 13.6822 172.898 14.5794C173.399 15.4624 173.649 16.4806 173.649 17.6342ZM170.538 16.7797C170.524 16.0107 170.245 15.3983 169.702 14.9426C169.158 14.4726 168.493 14.2377 167.706 14.2377C166.962 14.2377 166.333 14.4655 165.818 14.9212C165.318 15.3627 165.01 15.9822 164.896 16.7797H170.538ZM179.34 14.4299V20.1549C179.34 20.5536 179.433 20.8456 179.618 21.0307C179.819 21.2016 180.148 21.287 180.605 21.287H182V23.8077H180.112C177.58 23.8077 176.314 22.583 176.314 20.1335V14.4299H174.898V11.9733H176.314V9.04673H179.34V11.9733H182V14.4299H179.34Z"
                                        fill="white"
                                      ></path>
                                      <defs>
                                        <linearGradient
                                          id="paint0_linear_1529_12512"
                                          x1="1.95943"
                                          y1="7.48041"
                                          x2="40.0784"
                                          y2="32.8527"
                                          gradientUnits="userSpaceOnUse"
                                        >
                                          <stop stopColor="#11A97D"></stop>
                                          <stop
                                            offset="1"
                                            stopColor="#6610F2"
                                          ></stop>
                                        </linearGradient>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div className="description" data-v-a133c29c="">
                                  Non-custodial wallet with a Multisig accounts
                                  option and Ledger support
                                </div>
                                <div
                                  className="platforms-with-link"
                                  data-v-a133c29c=""
                                >
                                  <div className="platforms" data-v-a133c29c="">
                                    <a
                                      href="https://apps.apple.com/us/app/venom-blockchain-wallet/id1622970889"
                                      rel="noopener noreferrer"
                                      target="_blank"
                                      className="platform-item stroke"
                                      aria-label="AppStore"
                                      data-v-a133c29c=""
                                    >
                                      <div
                                        className="kit-icon is-fill"
                                        data-v-a133c29c=""
                                      >
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M7.87997 15.4397L7.55997 15.9997"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                          <path
                                            d="M16.4399 16L13.1699 10.29"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                          <path
                                            d="M10.99 6.5L12 8.26"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                          <path
                                            d="M13.01 6.5L9.05005 13.41"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                          <path
                                            d="M12.62 13.4102H7"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                          <path
                                            d="M17 13.4102H14.95"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                          <path
                                            d="M18.3639 5.63604C21.8787 9.15076 21.8787 14.8492 18.3639 18.3639C14.8492 21.8787 9.15074 21.8787 5.63604 18.3639C2.12132 14.8492 2.12132 9.15074 5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.3639 5.63604"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                        </svg>
                                      </div>
                                    </a>
                                    <a
                                      href="https://play.google.com/store/apps/details?id=com.venom.wallet"
                                      rel="noopener noreferrer"
                                      target="_blank"
                                      className="platform-item stroke"
                                      aria-label="PlayMarket"
                                      data-v-a133c29c=""
                                    >
                                      <div
                                        className="kit-icon is-fill"
                                        data-v-a133c29c=""
                                      >
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M4.04126 4.43756V19.5616C4.04126 20.6626 5.22926 21.3546 6.18626 20.8106L19.4943 13.2486C20.4633 12.6986 20.4633 11.3016 19.4943 10.7516L6.18626 3.18856C5.22926 2.64456 4.04126 3.33656 4.04126 4.43756Z"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                          <path
                                            d="M14.8313 8.09961L4.62134 20.6996"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                          <path
                                            d="M4.62134 3.2998L14.8313 15.8998"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                        </svg>
                                      </div>
                                    </a>
                                    <a
                                      href="https://chrome.google.com/webstore/detail/venom-wallet/ojggmchlghnjlapmfbnjholfjkiidbch"
                                      rel="noopener noreferrer"
                                      target="_blank"
                                      className="platform-item stroke"
                                      aria-label="Google"
                                      data-v-a133c29c=""
                                    >
                                      <div
                                        className="kit-icon is-fill"
                                        data-v-a133c29c=""
                                      >
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M18.3637 5.63604C21.8784 9.15076 21.8784 14.8492 18.3637 18.3639C14.849 21.8787 9.1505 21.8787 5.6358 18.3639C2.12108 14.8492 2.12108 9.15074 5.6358 5.63604C9.15052 2.12132 14.849 2.12132 18.3637 5.63604"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                          <path
                                            d="M14.893 9.1074C16.4906 10.705 16.4906 13.2953 14.893 14.893C13.2953 16.4906 10.705 16.4906 9.1074 14.893C7.50977 13.2953 7.50977 10.705 9.1074 9.1074C10.705 7.50977 13.2953 7.50977 14.893 9.1074"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                          <path
                                            d="M15.5444 14.0449L11.5674 20.9999"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                          <path
                                            d="M4.42969 7.13965L8.45969 14.0496"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                          <path
                                            d="M12 7.91016H20.02"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                        </svg>
                                      </div>
                                    </a>
                                  </div>
                                  <a
                                    href="https://venomwallet.com"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="kit-read-more read-more"
                                    data-v-a133c29c=""
                                    data-v-d93ab3f1=""
                                  >
                                    <div className="text" data-v-d93ab3f1="">
                                      Explore
                                    </div>
                                    <div className="icon" data-v-d93ab3f1="">
                                      <div
                                        className="kit-icon is-fill"
                                        data-v-d93ab3f1=""
                                      >
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M19 12H5"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                          <path
                                            d="M14 17L19 12"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                          <path
                                            d="M14 7L19 12"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide" data-v-1ca2ff44="">
                              <div
                                className="item-component"
                                data-v-1ca2ff44=""
                                data-v-a133c29c=""
                              >
                                <div className="icon" data-v-a133c29c="">
                                  <div
                                    className="kit-icon is-fill"
                                    data-v-a133c29c=""
                                  >
                                    <svg
                                      width="169"
                                      height="32"
                                      viewBox="0 0 169 32"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M20.7218 24.4933C21.0696 24.8411 21.0696 25.3974 20.7218 25.745C20.5596 25.9072 20.3278 26 20.096 26C19.8642 26 19.6325 25.9072 19.4702 25.745L17.2682 23.5199C15.3675 25.1192 13.0033 26 10.5 26C7.69536 26 5.05298 24.9106 3.08278 22.9172C1.0894 20.9239 0 18.3046 0 15.5C0 12.6954 1.0894 10.053 3.08278 8.08278C5.07616 6.0894 7.69536 5 10.5 5C12.9801 5 15.3212 5.85761 17.1986 7.4106C17.5 7.61921 17.7318 7.89735 17.9172 8.19868C18.1722 8.61594 18.3113 9.10261 18.3113 9.58937C18.3113 9.68212 18.3113 9.79798 18.2881 9.89073C18.2881 9.96029 18.2649 10.0298 18.2649 10.0993C18.2649 10.1225 18.2649 10.1225 18.2649 10.1457C18.2649 10.1689 18.2417 10.2153 18.2417 10.2385C18.2186 10.2847 18.2186 10.3543 18.1954 10.4007C18.1258 10.6093 18.0331 10.7947 17.9404 10.9801C17.9172 11.0265 17.894 11.0497 17.8708 11.096C17.8477 11.1424 17.8013 11.1887 17.7782 11.2351C17.361 11.7914 16.7814 12.2318 16.2483 12.6954C15.8543 13.0431 15.1589 14.0397 14.8344 15.106C14.6258 15.755 14.4636 16.4272 14.3014 17.0761C14.0696 18.0033 13.745 20.0662 13.5364 20.9933C13.1192 22.8477 11.8212 23.2881 10.5464 23.3344H10.5C10.5 23.3344 10.5 23.3344 10.4768 23.3344C9.20203 23.2881 7.92715 22.8708 7.50993 21.0165C7.30132 20.0894 6.97682 18.0265 6.74503 17.0993C6.58278 16.4272 6.42053 15.7782 6.21192 15.1292C5.86424 14.0629 5.19205 13.0662 4.79801 12.7186C4.42715 12.394 4.03311 12.0696 3.66225 11.7218C4.54304 10.1225 5.98013 8.87083 7.69536 8.22186C8.04304 8.80135 8.13576 9.49671 8.04304 10.1689C7.92715 10.9338 7.74172 11.6986 7.71854 12.4404C7.67218 13.5529 7.83443 14.6656 8.20529 15.7086C8.55298 16.6589 9.03971 17.3775 10.0828 17.5397C10.1523 17.5629 10.4073 17.5629 10.5 17.5629C10.5696 17.5629 10.8708 17.5397 10.9404 17.5397C11.9835 17.3775 12.4933 16.6358 12.8179 15.6854C13.1887 14.6424 13.3742 13.5298 13.3046 12.4172C13.2583 11.6755 13.096 10.9106 12.9801 10.1457C12.8643 9.45034 12.9569 8.77816 13.3046 8.19868C13.3974 8.0596 13.4901 7.94371 13.5828 7.80464C13.6987 7.68874 13.7914 7.57285 13.9304 7.48014C12.8642 7.01656 11.7053 6.78477 10.5 6.78477C5.67881 6.78477 1.78477 10.6788 1.78477 15.5C1.78477 20.3212 5.67881 24.2153 10.5 24.2153C15.3212 24.2153 19.2153 20.3212 19.2153 15.5C19.2153 14.1788 18.9371 12.9503 18.404 11.8378C18.4967 11.7218 18.5894 11.5828 18.6821 11.4437C19.0298 10.8874 19.1921 10.2615 19.1921 9.61256C20.3742 11.3278 21 13.3675 21 15.5C21 18.0033 20.1192 20.3675 18.5199 22.2682L20.7218 24.4933Z"
                                        fill="white"
                                      ></path>
                                      <path
                                        d="M44.5271 8.2092L39.0741 22.8117H35.453L30 8.2092H33.1951L37.2848 19.8201L41.3533 8.2092H44.5271ZM57.2848 16.7657C57.2848 17.1841 57.2564 17.5607 57.1996 17.8954H48.5729C48.6439 18.7322 48.9421 19.3877 49.4675 19.8619C49.9929 20.3361 50.639 20.5732 51.4058 20.5732C52.5135 20.5732 53.3016 20.106 53.7702 19.1715H56.9866C56.6458 20.2873 55.9926 21.2078 55.027 21.9331C54.0613 22.6444 52.8756 23 51.4697 23C50.3337 23 49.3113 22.7559 48.4025 22.2678C47.5078 21.7657 46.8049 21.0614 46.2937 20.1548C45.7967 19.2483 45.5482 18.2022 45.5482 17.0167C45.5482 15.8173 45.7967 14.7643 46.2937 13.8577C46.7907 12.9512 47.4865 12.2538 48.3811 11.7657C49.2758 11.2775 50.3053 11.0335 51.4697 11.0335C52.5916 11.0335 53.5927 11.2706 54.4731 11.7448C55.3678 12.219 56.0565 12.8954 56.5393 13.7741C57.0363 14.6388 57.2848 15.636 57.2848 16.7657ZM54.1962 15.9289C54.182 15.1757 53.9051 14.576 53.3655 14.1297C52.8259 13.6695 52.1656 13.4393 51.3845 13.4393C50.6461 13.4393 50.0213 13.6625 49.5101 14.1088C49.0131 14.5411 48.7078 15.1478 48.5942 15.9289H54.1962ZM66.0008 11.0544C67.4066 11.0544 68.5427 11.4937 69.4089 12.3724C70.2751 13.2371 70.7083 14.4505 70.7083 16.0126V22.8117H67.7262V16.41C67.7262 15.4895 67.4918 14.7852 67.0232 14.2971C66.5546 13.795 65.9156 13.5439 65.1062 13.5439C64.2825 13.5439 63.6293 13.795 63.1465 14.2971C62.6779 14.7852 62.4436 15.4895 62.4436 16.41V22.8117H59.4615V11.2218H62.4436V12.6653C62.8412 12.1632 63.3453 11.7727 63.9559 11.4937C64.5808 11.2008 65.2624 11.0544 66.0008 11.0544ZM78.784 23C77.648 23 76.6256 22.7559 75.7167 22.2678C74.8079 21.7657 74.0908 21.0614 73.5654 20.1548C73.0542 19.2483 72.7986 18.2022 72.7986 17.0167C72.7986 15.8312 73.0613 14.7852 73.5867 13.8787C74.1263 12.9721 74.8576 12.2748 75.7806 11.7866C76.7037 11.2845 77.7332 11.0335 78.8692 11.0335C80.0053 11.0335 81.0348 11.2845 81.9578 11.7866C82.8809 12.2748 83.6051 12.9721 84.1305 13.8787C84.6701 14.7852 84.9399 15.8312 84.9399 17.0167C84.9399 18.2022 84.663 19.2483 84.1092 20.1548C83.5696 21.0614 82.8312 21.7657 81.8939 22.2678C80.9709 22.7559 79.9343 23 78.784 23ZM78.784 20.4477C79.3237 20.4477 79.8278 20.3222 80.2964 20.0711C80.7792 19.8061 81.1626 19.4156 81.4466 18.8996C81.7306 18.3835 81.8726 17.7559 81.8726 17.0167C81.8726 15.9149 81.5744 15.0711 80.978 14.4854C80.3958 13.8856 79.6787 13.5858 78.8266 13.5858C77.9746 13.5858 77.2575 13.8856 76.6753 14.4854C76.1073 15.0711 75.8233 15.9149 75.8233 17.0167C75.8233 18.1185 76.1002 18.9693 76.654 19.569C77.222 20.1548 77.932 20.4477 78.784 20.4477ZM101.782 11.0544C103.23 11.0544 104.395 11.4937 105.275 12.3724C106.17 13.2371 106.617 14.4505 106.617 16.0126V22.8117H103.635V16.41C103.635 15.5035 103.401 14.8131 102.932 14.3389C102.464 13.8508 101.825 13.6067 101.015 13.6067C100.206 13.6067 99.5597 13.8508 99.0768 14.3389C98.6082 14.8131 98.3739 15.5035 98.3739 16.41V22.8117H95.3918V16.41C95.3918 15.5035 95.1575 14.8131 94.6889 14.3389C94.2203 13.8508 93.5813 13.6067 92.7718 13.6067C91.9482 13.6067 91.295 13.8508 90.8122 14.3389C90.3436 14.8131 90.1093 15.5035 90.1093 16.41V22.8117H87.1274V11.2218H90.1093V12.6234C90.4927 12.1353 90.9826 11.7517 91.579 11.4728C92.1896 11.1939 92.857 11.0544 93.5813 11.0544C94.5043 11.0544 95.3279 11.2497 96.0521 11.6402C96.7764 12.0167 97.3373 12.5607 97.7349 13.272C98.1183 12.6025 98.6721 12.0656 99.3963 11.6611C100.135 11.2566 100.93 11.0544 101.782 11.0544ZM119.656 22.9582C118.619 22.9582 117.682 22.7838 116.844 22.4351C116.021 22.0865 115.367 21.5844 114.885 20.9289C114.402 20.2734 114.153 19.4993 114.139 18.6067H117.334C117.377 19.2064 117.59 19.6806 117.973 20.0293C118.371 20.378 118.91 20.5523 119.592 20.5523C120.288 20.5523 120.835 20.3919 121.232 20.0711C121.63 19.7364 121.829 19.304 121.829 18.7741C121.829 18.3417 121.694 17.9861 121.424 17.7071C121.154 17.4282 120.813 17.212 120.401 17.0586C120.004 16.8912 119.45 16.7099 118.74 16.5146C117.774 16.2357 116.986 15.9637 116.376 15.6987C115.779 15.4198 115.261 15.0084 114.821 14.4644C114.395 13.9066 114.182 13.1674 114.182 12.2469C114.182 11.3821 114.402 10.629 114.842 9.98745C115.282 9.34589 115.9 8.85774 116.695 8.52301C117.49 8.17434 118.399 8 119.422 8C120.955 8 122.198 8.36959 123.149 9.10879C124.115 9.83403 124.647 10.8522 124.747 12.1632H121.467C121.438 11.6611 121.218 11.2497 120.806 10.9289C120.409 10.5941 119.876 10.4268 119.209 10.4268C118.626 10.4268 118.158 10.5732 117.803 10.8661C117.462 11.159 117.292 11.5844 117.292 12.1423C117.292 12.5328 117.419 12.8605 117.675 13.1255C117.945 13.3766 118.271 13.5858 118.655 13.7531C119.052 13.9066 119.606 14.0879 120.316 14.2971C121.282 14.576 122.07 14.855 122.681 15.1339C123.291 15.4128 123.817 15.8312 124.257 16.3891C124.697 16.947 124.917 17.6792 124.917 18.5858C124.917 19.3668 124.711 20.0921 124.299 20.7615C123.888 21.431 123.284 21.9679 122.489 22.3724C121.694 22.7629 120.749 22.9582 119.656 22.9582ZM126.736 17.0167C126.736 15.8173 126.984 14.7713 127.481 13.8787C127.978 12.9721 128.667 12.2748 129.547 11.7866C130.428 11.2845 131.436 11.0335 132.572 11.0335C134.035 11.0335 135.242 11.3961 136.193 12.1213C137.159 12.8326 137.805 13.8368 138.132 15.1339H134.915C134.745 14.6318 134.454 14.2413 134.042 13.9623C133.644 13.6695 133.147 13.523 132.551 13.523C131.699 13.523 131.024 13.8298 130.527 14.4435C130.03 15.0432 129.782 15.901 129.782 17.0167C129.782 18.1185 130.03 18.9763 130.527 19.59C131.024 20.1897 131.699 20.4895 132.551 20.4895C133.758 20.4895 134.546 19.9596 134.915 18.8996H138.132C137.805 20.1548 137.159 21.152 136.193 21.8912C135.228 22.6304 134.021 23 132.572 23C131.436 23 130.428 22.7559 129.547 22.2678C128.667 21.7657 127.978 21.0683 127.481 20.1757C126.984 19.2692 126.736 18.2162 126.736 17.0167ZM139.55 16.9749C139.55 15.8033 139.784 14.7643 140.253 13.8577C140.736 12.9512 141.382 12.2538 142.191 11.7657C143.015 11.2775 143.931 11.0335 144.939 11.0335C145.819 11.0335 146.586 11.2078 147.239 11.5565C147.907 11.9052 148.439 12.3445 148.837 12.8745V11.2218H151.84V22.8117H148.837V21.1172C148.454 21.6611 147.921 22.1144 147.239 22.477C146.572 22.8257 145.798 23 144.918 23C143.924 23 143.015 22.749 142.191 22.2469C141.382 21.7448 140.736 21.0404 140.253 20.1339C139.784 19.2134 139.55 18.1604 139.55 16.9749ZM148.837 17.0167C148.837 16.3054 148.695 15.6987 148.411 15.1967C148.127 14.6806 147.744 14.2901 147.261 14.0251C146.778 13.7462 146.26 13.6067 145.706 13.6067C145.152 13.6067 144.641 13.7392 144.172 14.0042C143.704 14.2692 143.32 14.6597 143.022 15.1757C142.738 15.6778 142.596 16.2775 142.596 16.9749C142.596 17.6722 142.738 18.2859 143.022 18.8159C143.32 19.3319 143.704 19.7294 144.172 20.0084C144.655 20.2873 145.166 20.4268 145.706 20.4268C146.26 20.4268 146.778 20.2943 147.261 20.0293C147.744 19.7503 148.127 19.3598 148.411 18.8577C148.695 18.3417 148.837 17.728 148.837 17.0167ZM161.293 11.0544C162.698 11.0544 163.834 11.4937 164.701 12.3724C165.567 13.2371 166 14.4505 166 16.0126V22.8117H163.018V16.41C163.018 15.4895 162.784 14.7852 162.315 14.2971C161.846 13.795 161.207 13.5439 160.398 13.5439C159.574 13.5439 158.921 13.795 158.438 14.2971C157.97 14.7852 157.735 15.4895 157.735 16.41V22.8117H154.753V11.2218H157.735V12.6653C158.133 12.1632 158.637 11.7727 159.248 11.4937C159.873 11.2008 160.554 11.0544 161.293 11.0544Z"
                                        fill="white"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className="description" data-v-a133c29c="">
                                  Search and explore the immutable records of
                                  the Venom blockchain
                                </div>
                                <div
                                  className="platforms-with-link"
                                  data-v-a133c29c=""
                                >
                                  <div
                                    className="platforms"
                                    data-v-a133c29c=""
                                  ></div>
                                  <a
                                    href="https://testnet.venomscan.com"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="kit-read-more read-more"
                                    data-v-a133c29c=""
                                    data-v-d93ab3f1=""
                                  >
                                    <div className="text" data-v-d93ab3f1="">
                                      Explore
                                    </div>
                                    <div className="icon" data-v-d93ab3f1="">
                                      <div
                                        className="kit-icon is-fill"
                                        data-v-d93ab3f1=""
                                      >
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M19 12H5"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                          <path
                                            d="M14 17L19 12"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                          <path
                                            d="M14 7L19 12"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide" data-v-1ca2ff44="">
                              <div
                                className="item-component"
                                data-v-1ca2ff44=""
                                data-v-a133c29c=""
                              >
                                <div className="icon" data-v-a133c29c="">
                                  <div
                                    className="kit-icon is-fill"
                                    data-v-a133c29c=""
                                  >
                                    <svg
                                      width="143"
                                      height="32"
                                      viewBox="0 0 143 32"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <mask
                                        id="mask0_1529_12461"
                                        style={{ maskType: "luminance" }}
                                        maskUnits="userSpaceOnUse"
                                        x="0"
                                        y="1"
                                        width="141"
                                        height="30"
                                      >
                                        <path
                                          d="M141 1H0V31H141V1Z"
                                          fill="white"
                                        ></path>
                                      </mask>
                                      <g mask="url(#mask0_1529_12461)">
                                        <path
                                          d="M46.8899 10L42.5499 21.8468H40.3571L36 10H38.0284L41.4534 19.8514L44.8954 10H46.8899ZM56.8706 16.9192C56.8735 17.2388 56.8516 17.5582 56.8045 17.8745H49.8056C49.827 18.5552 50.1163 19.2019 50.6132 19.6802C50.8511 19.9044 51.1322 20.0801 51.4402 20.1973C51.7483 20.3146 52.0772 20.371 52.4077 20.3632C53.4279 20.3632 54.1487 19.9257 54.5702 19.0507H56.614C56.3497 19.8964 55.822 20.6407 55.1043 21.1804C54.3834 21.7265 53.4852 21.9994 52.4095 21.9994C51.5814 22.0122 50.765 21.806 50.0469 21.4032C49.3555 20.9897 48.7926 20.4007 48.4186 19.6986C48.0209 18.9065 47.8235 18.0329 47.8431 17.1512C47.8229 16.2727 48.0169 15.4021 48.409 14.611C48.7678 13.9033 49.3279 13.3115 50.0224 12.9065C50.7506 12.5014 51.5772 12.2953 52.4152 12.3101C53.2245 12.2934 54.0232 12.4906 54.7269 12.8807C55.4031 13.2676 55.9511 13.8355 56.3064 14.5171C56.6954 15.2599 56.8893 16.0853 56.8706 16.9192ZM54.8928 16.3062C54.9003 15.9834 54.8369 15.6629 54.7066 15.366C54.5764 15.0691 54.3827 14.8029 54.1381 14.5852C53.6415 14.1499 52.992 13.9178 52.3246 13.9373C52.0148 13.9318 51.7068 13.9863 51.4185 14.0975C51.1303 14.2087 50.8675 14.3745 50.6452 14.5852C50.1628 15.0411 49.8676 15.653 49.8149 16.3062H54.8928ZM63.3583 12.3009C64.0311 12.2889 64.6956 12.4475 65.2867 12.7611C65.8683 13.0706 66.3385 13.5467 66.6342 14.125C66.9726 14.8036 67.1376 15.552 67.1152 16.3062V21.8468H65.2376V16.5989C65.2376 15.7596 65.0327 15.1177 64.6226 14.6735C64.4118 14.4457 64.1517 14.2665 63.8613 14.1487C63.5708 14.0309 63.2572 13.9775 62.943 13.9925C62.6262 13.9781 62.3098 14.0317 62.0164 14.1493C61.7231 14.267 61.4596 14.4459 61.2447 14.6735C60.8372 15.1153 60.6327 15.7571 60.6315 16.5989V21.8468H58.7444V12.4592H60.6315V13.5342C60.9453 13.145 61.3505 12.835 61.8128 12.6304C62.2971 12.4123 62.8246 12.2999 63.3583 12.3009ZM73.5066 21.9994C72.6846 22.0104 71.8748 21.8043 71.1629 21.4032C70.4641 20.9937 69.8945 20.4039 69.5176 19.6986C69.1065 18.9103 68.9005 18.0354 68.9175 17.1512C68.8992 16.2673 69.111 15.3934 69.5326 14.611C69.9153 13.8994 70.497 13.3084 71.2101 12.9065C71.9385 12.5153 72.7563 12.3101 73.5879 12.3101C74.4193 12.3101 75.2372 12.5153 75.9655 12.9065C76.6794 13.3083 77.2618 13.8993 77.6449 14.611C78.0666 15.3936 78.2786 16.2672 78.262 17.1512C78.279 18.0363 78.0613 18.9106 77.63 19.6895C77.2275 20.4063 76.6284 20.9997 75.8994 21.4032C75.1693 21.8029 74.3441 22.0086 73.5066 21.9994ZM73.5066 20.3116C73.986 20.3134 74.457 20.1901 74.871 19.9546C75.318 19.7009 75.6813 19.3279 75.9183 18.8796C76.197 18.3449 76.3339 17.7506 76.3165 17.1512C76.3377 16.5553 76.208 15.9636 75.9392 15.4282C75.7737 15.1105 75.5435 14.8291 75.2626 14.6014C74.9817 14.3736 74.6561 14.2043 74.3056 14.1037C73.9552 14.0033 73.5874 13.9737 73.2247 14.0169C72.8621 14.0601 72.5124 14.1752 72.1971 14.3551C71.7705 14.6128 71.4298 14.9856 71.2159 15.4282C70.9556 15.9662 70.8295 16.5566 70.8478 17.1512C70.8478 18.1623 71.0994 18.9464 71.6027 19.5037C71.8413 19.7644 72.1352 19.9717 72.4639 20.1112C72.7926 20.2506 73.1484 20.3191 73.5066 20.3116ZM91.224 12.3009C91.8967 12.2889 92.5615 12.4475 93.1529 12.7611C93.7338 13.0706 94.2043 13.5467 94.5001 14.125C94.8497 14.8004 95.0209 15.5501 94.998 16.3062V21.8468H93.1203V16.5989C93.1203 15.7596 92.9155 15.1177 92.5058 14.6735C92.2949 14.4456 92.0344 14.2663 91.744 14.1485C91.4536 14.0307 91.1402 13.9774 90.8259 13.9925C90.509 13.9781 90.1929 14.0317 89.899 14.1493C89.6059 14.267 89.3428 14.4459 89.1274 14.6735C88.7187 15.1165 88.5139 15.7584 88.5121 16.5989V21.8468H86.6254V16.5989C86.6254 15.7596 86.4203 15.1177 86.0102 14.6735C85.7996 14.4457 85.5395 14.2665 85.2491 14.1487C84.9586 14.0309 84.645 13.9775 84.3308 13.9925C84.014 13.9784 83.6977 14.0321 83.4044 14.1497C83.111 14.2674 82.8475 14.4462 82.6325 14.6735C82.2325 15.1153 82.0317 15.7571 82.0304 16.5989V21.8468H80.1434V12.4592H82.0304V13.5342C82.3442 13.145 82.7494 12.835 83.2117 12.6304C83.6904 12.4133 84.2126 12.3027 84.7403 12.3064C85.4261 12.2949 86.1028 12.4593 86.7028 12.7832C87.2788 13.102 87.7425 13.5832 88.0331 14.1637C88.3108 13.5946 88.7646 13.1242 89.3296 12.8181C89.8999 12.4787 90.5558 12.2998 91.224 12.3009Z"
                                          fill="white"
                                        ></path>
                                        <path
                                          d="M105.527 11.7653C105.215 11.2049 104.739 10.7569 104.164 10.4837C103.474 10.143 102.712 9.9778 101.945 10.0024H98V22H99.8841V17.1307H101.954C102.895 17.1307 103.67 16.961 104.271 16.6289C104.831 16.3288 105.289 15.8655 105.587 15.2987C105.86 14.7666 106.003 14.1749 106 13.5749C106.004 12.9398 105.841 12.315 105.527 11.7653ZM103.539 15.0245C103.188 15.3566 102.657 15.5245 101.945 15.5245H99.8841V11.6068H101.954C103.368 11.6068 104.074 12.2623 104.074 13.5731C104.064 14.1944 103.889 14.6794 103.539 15.0245Z"
                                          fill="white"
                                        ></path>
                                        <path
                                          d="M116.341 14.3726C115.927 13.6389 115.306 13.03 114.548 12.6148C113.768 12.2113 112.893 12 112.006 12C111.118 12 110.244 12.2113 109.464 12.6148C108.705 13.0291 108.083 13.6382 107.67 14.3726C107.215 15.1779 106.984 16.0812 107.001 16.9959C106.982 17.9113 107.203 18.8167 107.643 19.6306C108.051 20.3586 108.66 20.9654 109.406 21.3846C110.17 21.7989 111.036 22.0111 111.914 21.9996C112.809 22.0095 113.691 21.7975 114.474 21.3846C115.251 20.9695 115.892 20.3561 116.323 19.6135C116.785 18.8121 117.018 17.9097 116.999 16.9959C117.017 16.0824 116.791 15.1796 116.341 14.3726ZM114.493 18.7802C114.245 19.2269 113.874 19.6004 113.419 19.8606C112.965 20.1204 112.444 20.2569 111.914 20.2551C111.53 20.2635 111.147 20.1924 110.794 20.0465C110.441 19.9008 110.125 19.6837 109.868 19.4105C109.337 18.8384 109.071 18.031 109.071 16.9883C109.054 16.3761 109.19 15.7689 109.47 15.2173C109.698 14.7587 110.063 14.3735 110.518 14.1087C110.962 13.8687 111.465 13.7425 111.976 13.7425C112.487 13.7425 112.989 13.8687 113.434 14.1087C113.902 14.3699 114.279 14.7552 114.52 15.2173C114.806 15.7667 114.943 16.3756 114.919 16.9883C114.937 17.6103 114.791 18.2267 114.493 18.7802Z"
                                          fill="white"
                                        ></path>
                                        <path
                                          d="M127.343 14.3726C126.929 13.6384 126.308 13.0294 125.549 12.6148C124.767 12.2113 123.894 12 123.004 12C122.115 12 121.241 12.2113 120.46 12.6148C119.7 13.0284 119.078 13.6376 118.665 14.3726C118.211 15.1784 117.983 16.0817 118.001 16.9959C117.981 17.9107 118.199 18.8161 118.637 19.6306C119.047 20.3583 119.658 20.9651 120.404 21.3845C121.168 21.7987 122.033 22.0109 122.911 21.9996C123.81 22.0073 124.695 21.7928 125.479 21.3769C126.257 20.9613 126.896 20.3482 127.329 19.6059C127.787 18.8063 128.018 17.9067 127.999 16.9959C128.018 16.0826 127.793 15.1797 127.343 14.3726ZM125.491 18.7802C125.244 19.2269 124.873 19.6004 124.418 19.8606C123.963 20.1204 123.442 20.2569 122.911 20.2551C122.526 20.2637 122.145 20.1927 121.791 20.0469C121.438 19.901 121.123 19.6838 120.866 19.4105C120.335 18.8384 120.069 18.031 120.069 16.9883C120.049 16.377 120.183 15.77 120.458 15.2173C120.687 14.758 121.054 14.3728 121.51 14.1087C121.955 13.8687 122.457 13.7425 122.968 13.7425C123.479 13.7425 123.982 13.8687 124.427 14.1087C124.895 14.3692 125.273 14.7546 125.513 15.2173C125.803 15.7686 125.942 16.38 125.92 16.9959C125.938 17.6156 125.79 18.2294 125.491 18.7802Z"
                                          fill="white"
                                        ></path>
                                        <path
                                          d="M132 9H130V22H132V9Z"
                                          fill="white"
                                        ></path>
                                        <path
                                          d="M137.647 21.9988C137.009 22.0096 136.377 21.8715 135.793 21.5941C135.283 21.3397 134.84 20.953 134.506 20.4694C134.194 20.0012 134.017 19.4443 134 18.8695H135.871C135.886 19.0717 135.941 19.2686 136.031 19.4472C136.121 19.6257 136.245 19.7822 136.395 19.9068C136.747 20.1853 137.178 20.3277 137.616 20.3115C138.028 20.3386 138.439 20.2278 138.79 19.9943C138.922 19.903 139.03 19.778 139.105 19.6306C139.179 19.4834 139.219 19.3182 139.219 19.1507C139.224 18.9807 139.18 18.8131 139.096 18.6692C139.011 18.5253 138.888 18.4118 138.742 18.3431C138.272 18.0977 137.78 17.9011 137.274 17.756C136.731 17.6016 136.197 17.4112 135.675 17.186C135.258 16.9934 134.889 16.6985 134.597 16.3253C134.285 15.8873 134.127 15.3456 134.152 14.7957C134.15 14.2926 134.293 13.801 134.565 13.3897C134.859 12.9391 135.267 12.5857 135.74 12.3693C136.301 12.1145 136.906 11.989 137.516 12.0008C138.509 12.0008 139.307 12.2819 139.912 12.8444C140.515 13.4068 140.843 14.1624 140.894 15.1112H139.076C139.067 14.9128 139.021 14.7186 138.939 14.5403C138.857 14.3622 138.741 14.204 138.6 14.0756C138.269 13.8043 137.858 13.6694 137.441 13.6956C137.056 13.6689 136.673 13.7733 136.347 13.9939C136.227 14.0817 136.13 14.2002 136.063 14.3386C135.997 14.4769 135.963 14.6307 135.967 14.7862C135.965 14.9075 135.987 15.0278 136.03 15.1396C136.074 15.2515 136.139 15.3524 136.221 15.436C136.4 15.6171 136.61 15.7597 136.84 15.8559C137.083 15.9484 137.443 16.0713 137.918 16.2246C138.45 16.3738 138.969 16.5682 139.473 16.806C139.886 16.9919 140.252 17.2812 140.539 17.6496C140.851 18.0742 141.014 18.6029 140.999 19.143C141.002 19.6644 140.857 20.1746 140.583 20.6061C140.288 21.0583 139.881 21.4131 139.407 21.6302C138.852 21.888 138.252 22.0137 137.647 21.9988Z"
                                          fill="white"
                                        ></path>
                                        <mask
                                          id="mask1_1529_12461"
                                          style={{ maskType: "luminance" }}
                                          maskUnits="userSpaceOnUse"
                                          x="0"
                                          y="1"
                                          width="30"
                                          height="30"
                                        >
                                          <path
                                            d="M30 1H0V31H30V1Z"
                                            fill="white"
                                          ></path>
                                        </mask>
                                        <g mask="url(#mask1_1529_12461)">
                                          <path
                                            d="M15.5004 2.8882C12.8059 2.8882 10.6144 2.49091 10.6144 2H10C10 2.55164 12.4672 3 15.5004 3C18.5337 3 21 2.55164 21 2H20.3855C20.3855 2.48807 18.1941 2.8882 15.5004 2.8882Z"
                                            fill="white"
                                          ></path>
                                          <path
                                            d="M15.5003 11.665C8.88761 11.665 3.50817 10.4694 3.50817 9H2C2 10.6544 8.05625 12 15.5003 12C22.9446 12 29 10.6544 29 9H27.4919C27.4919 10.4722 22.1123 11.665 15.5003 11.665Z"
                                            fill="white"
                                          ></path>
                                          <path
                                            d="M15.0001 19.5535C7.65002 19.5535 1.67549 17.9597 1.67549 16H0C0 18.2062 6.72902 20 15.0001 20C23.2711 20 30 18.2062 30 16H28.3238C28.3238 17.9597 22.3471 19.5535 15.0001 19.5535Z"
                                            fill="white"
                                          ></path>
                                          <path
                                            d="M15.5003 25.6649C8.88761 25.6649 3.50817 24.4692 3.50817 23H2C2 24.6543 8.05625 26 15.5003 26C22.9446 26 29 24.6517 29 23.0006H27.4919C27.4919 24.4692 22.1123 25.6649 15.5003 25.6649Z"
                                            fill="white"
                                          ></path>
                                          <path
                                            d="M15.5004 30.8888C12.8059 30.8888 10.6144 30.4912 10.6144 30H10C10 30.5514 12.4672 31 15.5004 31C18.5337 31 21 30.5514 21 30H20.3855C20.3855 30.4902 18.1941 30.8888 15.5004 30.8888Z"
                                            fill="white"
                                          ></path>
                                          <path
                                            d="M10.8098 12.865C8.71463 12.7226 6.79067 12.4485 5.21042 12.0541L5 12C5.04545 12.0938 5.09578 12.185 5.1508 12.2734C5.65301 13.0722 6.47716 13.6538 7.1961 14.259C7.67235 14.6634 8.49578 15.8104 8.89907 17.0542C9.08772 17.6366 9.2498 18.2246 9.40486 18.8177C10.2367 18.9017 11.105 18.9601 12 19C11.6942 18.644 11.4697 18.1998 11.2839 17.7035C10.8296 16.5043 10.627 15.2219 10.689 13.9386C10.7112 13.5789 10.7515 13.2206 10.8098 12.865Z"
                                            fill="white"
                                          ></path>
                                          <path
                                            d="M18.1877 12.8637C18.247 13.2214 18.2881 13.5819 18.3107 13.9438C18.3736 15.2273 18.1706 16.5099 17.715 17.7091C17.5282 18.2025 17.3048 18.6447 17 19C17.8927 18.963 18.7602 18.9017 19.5904 18.8177C19.7456 18.2261 19.9072 17.6351 20.0961 17.0533C20.5006 15.8094 21.3246 14.658 21.8015 14.2572C22.5214 13.6505 23.3468 13.0702 23.8496 12.2712C23.9045 12.1836 23.9546 12.0931 24 12L23.7893 12.0534C22.2081 12.4472 20.2835 12.7213 18.1877 12.8637Z"
                                            fill="white"
                                          ></path>
                                          <path
                                            d="M14.5032 20.1957H14.4883C14.4633 20.1957 14.4256 20.1957 14.3807 20.1957C12.8709 20.1919 11.3966 20.1265 10 20.0023C10.2701 21.2829 10.6086 23.4969 10.8387 24.5616C10.9326 25.0263 11.0963 25.4708 11.3232 25.8773C12.3415 25.955 13.4088 26 14.5004 26C15.592 26 16.6558 25.9587 17.6733 25.878C17.9025 25.4705 18.0677 25.0243 18.1622 24.5578C18.3909 23.4969 18.7279 21.2806 19 20C17.5693 20.1297 16.0558 20.1957 14.5032 20.1957Z"
                                            fill="white"
                                          ></path>
                                          <path
                                            d="M12 27C12.7069 27.7233 13.5855 27.959 14.4634 28H14.5217C15.4011 27.959 16.2864 27.7233 17 27.001C16.1856 27.0553 15.3518 27.0847 14.506 27.0847C13.6602 27.0847 12.8188 27.0553 12 27Z"
                                            fill="white"
                                          ></path>
                                          <path
                                            d="M6.73479 11.2347C8.16695 11.5993 9.89946 11.8583 11.7897 12C11.8407 11.7134 11.8933 11.4268 11.9421 11.1418C12.1227 10.0592 11.888 8.97901 11.1341 8.15001C10.7318 7.71301 10.2313 7.38526 9.67688 7.19578C9.11496 7.00285 8.51645 6.95154 7.93141 7.04617C6.17836 7.32646 5.00991 8.85702 5 10.456C5 10.53 5.00002 10.604 5.00612 10.678C5.56936 10.9041 6.14694 11.0901 6.73479 11.2347Z"
                                            fill="white"
                                          ></path>
                                          <path
                                            d="M18.8668 8.15457C18.1126 8.98499 17.8754 10.0651 18.0592 11.1484C18.1065 11.432 18.1584 11.7156 18.2117 12C20.1008 11.859 21.832 11.599 23.2633 11.2351C23.8519 11.0905 24.43 10.9043 24.9937 10.678C24.9984 10.6039 25.0006 10.5292 24.9998 10.4551C24.9908 8.8479 23.8269 7.31867 22.0684 7.04371C21.4832 6.95156 20.885 7.00559 20.3242 7.20128C19.77 7.39058 19.2695 7.71799 18.8668 8.15457Z"
                                            fill="white"
                                          ></path>
                                          <path
                                            d="M15.5004 1.11187C18.1941 1.11187 20.3855 1.50937 20.3855 2H21C21 1.44861 18.5328 1 15.5004 1C12.4679 1 10 1.44861 10 2H10.6144C10.6144 1.5105 12.8059 1.11187 15.5004 1.11187Z"
                                            fill="url(#paint0_linear_1529_12461)"
                                          ></path>
                                          <path
                                            d="M15.5003 6.33503C22.1123 6.33503 27.4919 7.53061 27.4919 9H29C29 7.349 22.9438 6 15.5003 6C8.05701 6 2 7.34556 2 9H3.50817C3.50817 7.53061 8.88761 6.33503 15.5003 6.33503Z"
                                            fill="url(#paint1_linear_1529_12461)"
                                          ></path>
                                          <path
                                            d="M15.5004 28C12.4672 28 10 28.4486 10 29H10.6144C10.6144 28.5104 12.8059 28.1118 15.5004 28.1118C18.1949 28.1118 20.3855 28.5093 20.3855 29H21C21 28.4486 18.5328 28 15.5004 28Z"
                                            fill="url(#paint2_linear_1529_12461)"
                                          ></path>
                                          <path
                                            d="M6.20888 13.3914C3.43437 14.0278 1.67893 14.9618 1.67893 16H0C0 14.7963 2.09361 13.7184 5.37953 13C5.71022 13.0247 5.97118 13.1822 6.20888 13.3914ZM24.6174 13C24.2867 13.0239 24.025 13.1822 23.7926 13.3914C26.5671 14.0278 28.3247 14.961 28.3247 16H30C29.9947 14.7963 27.9004 13.7184 24.6145 13H24.6174Z"
                                            fill="url(#paint3_linear_1529_12461)"
                                          ></path>
                                          <path
                                            d="M10.3583 20.335C6.31351 20.8093 3.50787 21.8252 3.50787 23H2C2 21.6783 5.15577 20.5345 9.70979 20.0007L9.75475 20.0054C10.2107 20.0609 10.3583 20.335 10.3583 20.335ZM21.2871 20L21.2421 20.0047C20.7855 20.0609 20.6415 20.335 20.6415 20.335C24.6872 20.8093 27.492 21.8252 27.492 23H29C28.9976 21.6774 25.8419 20.5337 21.2871 20Z"
                                            fill="url(#paint4_linear_1529_12461)"
                                          ></path>
                                        </g>
                                      </g>
                                      <defs>
                                        <linearGradient
                                          id="paint0_linear_1529_12461"
                                          x1="15.5004"
                                          y1="2"
                                          x2="15.5004"
                                          y2="1"
                                          gradientUnits="userSpaceOnUse"
                                        >
                                          <stop stopColor="white"></stop>
                                          <stop
                                            offset="1"
                                            stopColor="white"
                                            stopOpacity="0.3"
                                          ></stop>
                                        </linearGradient>
                                        <linearGradient
                                          id="paint1_linear_1529_12461"
                                          x1="15.5003"
                                          y1="9"
                                          x2="15.5003"
                                          y2="6"
                                          gradientUnits="userSpaceOnUse"
                                        >
                                          <stop stopColor="white"></stop>
                                          <stop
                                            offset="1"
                                            stopColor="white"
                                            stopOpacity="0.3"
                                          ></stop>
                                        </linearGradient>
                                        <linearGradient
                                          id="paint2_linear_1529_12461"
                                          x1="15.5004"
                                          y1="29"
                                          x2="15.5004"
                                          y2="28"
                                          gradientUnits="userSpaceOnUse"
                                        >
                                          <stop stopColor="white"></stop>
                                          <stop
                                            offset="1"
                                            stopColor="white"
                                            stopOpacity="0.3"
                                          ></stop>
                                        </linearGradient>
                                        <linearGradient
                                          id="paint3_linear_1529_12461"
                                          x1="14.9974"
                                          y1="16"
                                          x2="14.9974"
                                          y2="13"
                                          gradientUnits="userSpaceOnUse"
                                        >
                                          <stop stopColor="white"></stop>
                                          <stop
                                            offset="1"
                                            stopColor="white"
                                            stopOpacity="0.3"
                                          ></stop>
                                        </linearGradient>
                                        <linearGradient
                                          id="paint4_linear_1529_12461"
                                          x1="15.5007"
                                          y1="22.9993"
                                          x2="15.5007"
                                          y2="20"
                                          gradientUnits="userSpaceOnUse"
                                        >
                                          <stop stopColor="white"></stop>
                                          <stop
                                            offset="1"
                                            stopColor="white"
                                            stopOpacity="0.3"
                                          ></stop>
                                        </linearGradient>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div className="description" data-v-a133c29c="">
                                  Use your VENOM on validator nodes using Venom
                                  Pools
                                </div>
                                <div
                                  className="platforms-with-link"
                                  data-v-a133c29c=""
                                >
                                  <div
                                    className="platforms"
                                    data-v-a133c29c=""
                                  ></div>
                                  <a
                                    href="https://testnet.venompools.com"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="kit-read-more read-more"
                                    data-v-a133c29c=""
                                    data-v-d93ab3f1=""
                                  >
                                    <div className="text" data-v-d93ab3f1="">
                                      Explore
                                    </div>
                                    <div className="icon" data-v-d93ab3f1="">
                                      <div
                                        className="kit-icon is-fill"
                                        data-v-d93ab3f1=""
                                      >
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M19 12H5"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                          <path
                                            d="M14 17L19 12"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                          <path
                                            d="M14 7L19 12"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide" data-v-1ca2ff44="">
                              <div
                                className="item-component"
                                data-v-1ca2ff44=""
                                data-v-a133c29c=""
                              >
                                <div className="icon" data-v-a133c29c="">
                                  <div
                                    className="kit-icon is-fill"
                                    data-v-a133c29c=""
                                  >
                                    <svg
                                      width="150"
                                      height="32"
                                      viewBox="0 0 150 32"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <mask
                                        id="mask0_1529_12452"
                                        style={{ maskType: "luminance" }}
                                        maskUnits="userSpaceOnUse"
                                        x="0"
                                        y="3"
                                        width="36"
                                        height="27"
                                      >
                                        <path
                                          d="M36 3H0V30H36V3Z"
                                          fill="white"
                                        ></path>
                                      </mask>
                                      <g mask="url(#mask0_1529_12452)">
                                        <path
                                          d="M30.9998 7.44209C31.0067 8.23645 30.7938 9.01384 30.3818 9.69276C29.6961 10.8266 28.5713 11.6516 27.5918 12.5138C26.9433 13.0841 25.8185 14.7204 25.2679 16.489C24.9335 17.5583 24.6633 18.6515 24.3931 19.7411C24.0114 21.2654 23.4946 24.6398 23.1534 26.1708C22.8123 27.7018 22.1098 28.6421 21.2349 29.209C20.3567 29.7726 19.3029 29.9661 18.2592 30H18.1849C16.0941 29.9287 14.0066 29.2362 13.3244 26.1708C12.9967 24.7145 12.5137 21.5879 12.1422 19.972C13.0811 19.2965 14.0607 18.8551 14.9794 18.5768C15.5199 19.5476 16.2899 20.247 17.5465 20.4405C17.6748 20.4608 18.0903 20.488 18.222 20.4812C18.3538 20.4744 18.8165 20.4608 18.9448 20.4405C20.6236 20.179 21.4274 19.0249 21.9882 17.5244C20.4749 17.039 19.0968 16.9439 18.2389 16.9439C16.1244 16.9439 10.8924 17.5278 8.12604 23.0374C7.07556 25.132 4.90032 26.3778 2.70481 25.5733C-1.28089 24.0185 -0.656013 19.2048 3.23173 17.4056C5.71097 16.2616 8.14292 15.4366 10.5546 14.8935C10.0007 13.8038 9.3319 12.9109 8.88939 12.5172C7.90986 11.6583 6.78508 10.83 6.09941 9.69618C5.68733 9.01724 5.47453 8.23985 5.48128 7.44548C5.4948 5.38489 6.96073 3.42274 9.15962 3.05951C10.6525 2.81169 12.1692 3.34806 13.1791 4.4785C14.1248 5.54444 14.4187 6.93288 14.1924 8.32472C13.9864 9.58081 13.7128 10.8572 13.652 12.0623C13.6148 12.8228 13.6418 13.5798 13.733 14.3334C15.2362 14.1399 16.7358 14.0516 18.2389 14.0516C19.7487 14.0516 21.2519 14.1432 22.7549 14.3368C22.8427 13.5865 22.8697 12.8295 22.8326 12.0725C22.7718 10.8639 22.4982 9.59098 22.2922 8.3349C22.0658 6.94306 22.3597 5.55463 23.3055 4.48869C24.312 3.35484 25.8253 2.81848 27.3182 3.0629C29.5306 3.41595 30.9897 5.3781 30.9998 7.44209Z"
                                          fill="#09C790"
                                        ></path>
                                        <path
                                          d="M33.2588 25.745C31.0366 26.5764 28.8315 25.289 27.7632 23.1246C26.9927 21.56 26.034 20.3778 25 19.4903C25.2259 18.5641 25.4657 17.6205 25.7396 16.7154C25.9279 16.1016 26.1846 15.5157 26.4586 15C28.5199 15.5507 30.6017 16.3085 32.7177 17.3048C36.6657 19.164 37.2992 24.1384 33.2588 25.745Z"
                                          fill="#09C790"
                                        ></path>
                                      </g>
                                      <path
                                        d="M54.7067 11L51.0777 20.8725H49.629L46 11H47.3385L50.3602 19.5127L53.382 11H54.7067ZM63.1206 16.6941C63.1206 16.9395 63.1068 17.1992 63.0791 17.4731H57.0355C57.0815 18.2379 57.3345 18.8376 57.7944 19.2719C58.2636 19.6968 58.8294 19.9093 59.4916 19.9093C60.0344 19.9093 60.4851 19.7819 60.8438 19.5269C61.2118 19.2625 61.4694 18.9131 61.6166 18.4788H62.9688C62.7664 19.2247 62.3617 19.8338 61.7546 20.306C61.1474 20.7687 60.3931 21 59.4916 21C58.7741 21 58.1303 20.8347 57.5599 20.5043C56.9988 20.1737 56.5572 19.7064 56.2352 19.102C55.9133 18.4882 55.7523 17.78 55.7523 16.9773C55.7523 16.1747 55.9087 15.4712 56.2215 14.8668C56.5342 14.2625 56.9711 13.7998 57.5322 13.4787C58.1026 13.1483 58.7557 12.983 59.4916 12.983C60.2091 12.983 60.8438 13.1435 61.3958 13.4646C61.9477 13.7857 62.3709 14.2294 62.6652 14.796C62.9688 15.3531 63.1206 15.9859 63.1206 16.6941ZM61.8235 16.4249C61.8235 15.9339 61.7178 15.5137 61.5062 15.1643C61.2946 14.8055 61.0048 14.5364 60.6369 14.3569C60.2781 14.1681 59.878 14.0737 59.4365 14.0737C58.8017 14.0737 58.259 14.2814 57.8082 14.6969C57.3667 15.1124 57.1138 15.6883 57.0493 16.4249H61.8235ZM68.6 12.9688C69.5199 12.9688 70.265 13.2568 70.8353 13.8328C71.4057 14.3995 71.6909 15.221 71.6909 16.2975V20.8725H70.4491V16.4816C70.4491 15.7073 70.2604 15.1171 69.8833 14.7111C69.5061 14.2956 68.991 14.0878 68.3379 14.0878C67.6756 14.0878 67.1466 14.3003 66.7511 14.7252C66.3647 15.1502 66.1716 15.7686 66.1716 16.5807V20.8725H64.916V13.1105H66.1716V14.2153C66.42 13.8187 66.7557 13.5118 67.1788 13.2946C67.6112 13.0775 68.0849 12.9688 68.6 12.9688ZM77.1777 21C76.4694 21 75.8255 20.8347 75.246 20.5043C74.6756 20.1737 74.2248 19.7064 73.8937 19.102C73.5717 18.4882 73.4107 17.78 73.4107 16.9773C73.4107 16.1842 73.5764 15.4854 73.9075 14.881C74.2478 14.2672 74.7079 13.7998 75.2873 13.4787C75.8669 13.1483 76.5153 12.983 77.2329 12.983C77.9504 12.983 78.5989 13.1483 79.1785 13.4787C79.7579 13.7998 80.2133 14.2625 80.5445 14.8668C80.8848 15.4712 81.055 16.1747 81.055 16.9773C81.055 17.78 80.8802 18.4882 80.5307 19.102C80.1903 19.7064 79.7258 20.1737 79.137 20.5043C78.5483 20.8347 77.8952 21 77.1777 21ZM77.1777 19.8669C77.6284 19.8669 78.0515 19.7582 78.4471 19.5411C78.8426 19.3239 79.16 18.9981 79.3992 18.5637C79.6476 18.1294 79.7717 17.6005 79.7717 16.9773C79.7717 16.3541 79.6522 15.8253 79.413 15.3909C79.1738 14.9565 78.8611 14.6355 78.4747 14.4277C78.0884 14.2106 77.6698 14.102 77.2191 14.102C76.7592 14.102 76.336 14.2106 75.9497 14.4277C75.5725 14.6355 75.269 14.9565 75.0389 15.3909C74.809 15.8253 74.694 16.3541 74.694 16.9773C74.694 17.6101 74.8044 18.1435 75.0251 18.5779C75.2551 19.0123 75.5587 19.338 75.9359 19.5553C76.313 19.763 76.727 19.8669 77.1777 19.8669ZM91.9369 12.9688C92.5252 12.9688 93.0503 13.0963 93.5103 13.3513C93.9694 13.5968 94.3332 13.9698 94.5997 14.4702C94.8672 14.9707 95 15.5798 95 16.2975V20.8725H93.7582V16.4816C93.7582 15.7073 93.5701 15.1171 93.193 14.7111C92.8248 14.2956 92.3229 14.0878 91.6881 14.0878C91.0356 14.0878 90.5158 14.305 90.1289 14.7393C89.7429 15.1643 89.5495 15.7828 89.5495 16.5949V20.8725H88.308V16.4816C88.308 15.7073 88.1194 15.1171 87.7422 14.7111C87.3743 14.2956 86.873 14.0878 86.2382 14.0878C85.5851 14.0878 85.0654 14.305 84.6791 14.7393C84.2927 15.1643 84.0995 15.7828 84.0995 16.5949V20.8725H82.8439V13.1105H84.0995V14.2294C84.3479 13.8234 84.6791 13.5118 85.093 13.2946C85.5161 13.0775 85.9807 12.9688 86.4866 12.9688C87.1213 12.9688 87.6825 13.1152 88.17 13.4079C88.6575 13.7007 89.0209 14.1303 89.2597 14.6969C89.4719 14.1492 89.8214 13.7243 90.309 13.4221C90.7966 13.1199 91.3387 12.9688 91.9369 12.9688Z"
                                        fill="white"
                                      ></path>
                                      <path
                                        d="M102.897 15.1478C103.462 15.2685 103.914 15.5521 104.257 15.9981C104.599 16.4349 104.771 16.9368 104.771 17.5037C104.771 18.3216 104.484 18.9721 103.91 19.4554C103.346 19.9294 102.554 20.1664 101.537 20.1664H97V10.3801H101.385C102.374 10.3801 103.147 10.6078 103.702 11.0632C104.266 11.5186 104.548 12.1366 104.548 12.9173C104.548 13.4935 104.396 13.9721 104.09 14.3532C103.794 14.7342 103.396 14.9991 102.897 15.1478ZM99.3729 14.3392H100.926C101.316 14.3392 101.611 14.2556 101.815 14.0883C102.027 13.9117 102.134 13.6562 102.134 13.3215C102.134 12.9869 102.027 12.7314 101.815 12.5548C101.611 12.3783 101.316 12.29 100.926 12.29H99.3729V14.3392ZM101.121 18.2426C101.519 18.2426 101.824 18.1542 102.037 17.9777C102.259 17.7918 102.37 17.5269 102.37 17.1831C102.37 16.8392 102.254 16.5697 102.023 16.3745C101.801 16.1794 101.491 16.0818 101.093 16.0818H99.3729V18.2426H101.121ZM108.658 13.684C108.935 13.2565 109.282 12.9219 109.698 12.6803C110.114 12.4293 110.577 12.3039 111.086 12.3039V14.8271H110.433C109.842 14.8271 109.398 14.9573 109.102 15.2175C108.805 15.4684 108.658 15.9145 108.658 16.5558V20.1664H106.286V12.3875H108.658V13.684ZM113.552 11.579C113.135 11.579 112.794 11.4581 112.525 11.2166C112.267 10.9656 112.137 10.659 112.137 10.2964C112.137 9.92473 112.267 9.61805 112.525 9.37639C112.794 9.12546 113.135 9 113.552 9C113.959 9 114.292 9.12546 114.551 9.37639C114.819 9.61805 114.953 9.92473 114.953 10.2964C114.953 10.659 114.819 10.9656 114.551 11.2166C114.292 11.4581 113.959 11.579 113.552 11.579ZM114.731 12.3875V20.1664H112.359V12.3875H114.731ZM116.118 16.263C116.118 15.4637 116.266 14.7621 116.562 14.158C116.867 13.5539 117.279 13.0892 117.797 12.7639C118.315 12.4387 118.893 12.276 119.532 12.276C120.04 12.276 120.502 12.3829 120.918 12.5967C121.344 12.8104 121.677 13.0985 121.918 13.461V9.85033H124.29V20.1664H121.918V19.0511C121.696 19.4228 121.377 19.7202 120.961 19.9433C120.554 20.1663 120.077 20.2779 119.532 20.2779C118.893 20.2779 118.315 20.1152 117.797 19.79C117.279 19.4554 116.867 18.986 116.562 18.3819C116.266 17.7686 116.118 17.0623 116.118 16.263ZM121.918 16.2769C121.918 15.6821 121.751 15.2128 121.419 14.8689C121.094 14.5251 120.697 14.3532 120.225 14.3532C119.753 14.3532 119.351 14.5251 119.018 14.8689C118.694 15.2035 118.532 15.6682 118.532 16.263C118.532 16.8578 118.694 17.3318 119.018 17.685C119.351 18.0288 119.753 18.2007 120.225 18.2007C120.697 18.2007 121.094 18.0288 121.419 17.685C121.751 17.3411 121.918 16.8718 121.918 16.2769ZM129.087 12.276C129.633 12.276 130.109 12.3875 130.516 12.6106C130.933 12.8337 131.252 13.1264 131.473 13.4888V12.3875H133.846V20.1524C133.846 20.868 133.703 21.5139 133.416 22.0901C133.139 22.6756 132.709 23.1403 132.126 23.4842C131.552 23.8281 130.835 24 129.975 24C128.828 24 127.898 23.7258 127.186 23.1775C126.474 22.6384 126.067 21.9043 125.965 20.9749H128.311C128.384 21.2723 128.56 21.5047 128.838 21.6719C129.115 21.8485 129.457 21.9368 129.864 21.9368C130.355 21.9368 130.743 21.7927 131.03 21.5047C131.325 21.2258 131.473 20.7751 131.473 20.1524V19.0511C131.242 19.4136 130.923 19.711 130.516 19.9433C130.109 20.1663 129.633 20.2779 129.087 20.2779C128.449 20.2779 127.87 20.1152 127.353 19.79C126.835 19.4554 126.424 18.986 126.118 18.3819C125.822 17.7686 125.674 17.0623 125.674 16.263C125.674 15.4637 125.822 14.7621 126.118 14.158C126.424 13.5539 126.835 13.0892 127.353 12.7639C127.87 12.4387 128.449 12.276 129.087 12.276ZM131.473 16.2769C131.473 15.6821 131.307 15.2128 130.974 14.8689C130.65 14.5251 130.252 14.3532 129.781 14.3532C129.309 14.3532 128.907 14.5251 128.574 14.8689C128.25 15.2035 128.088 15.6682 128.088 16.263C128.088 16.8578 128.25 17.3318 128.574 17.685C128.907 18.0288 129.309 18.2007 129.781 18.2007C130.252 18.2007 130.65 18.0288 130.974 17.685C131.307 17.3411 131.473 16.8718 131.473 16.2769ZM143 16.1515C143 16.3745 142.987 16.6069 142.959 16.8485H137.589C137.626 17.3318 137.778 17.7035 138.046 17.9637C138.324 18.2147 138.662 18.3401 139.059 18.3401C139.652 18.3401 140.063 18.0892 140.294 17.5873H142.82C142.69 18.0985 142.454 18.5585 142.112 18.9675C141.779 19.3764 141.358 19.697 140.849 19.9294C140.34 20.1617 139.772 20.2779 139.143 20.2779C138.384 20.2779 137.709 20.1152 137.117 19.79C136.525 19.4647 136.062 19 135.73 18.3959C135.396 17.7918 135.229 17.0855 135.229 16.2769C135.229 15.4684 135.392 14.7621 135.715 14.158C136.049 13.5539 136.511 13.0892 137.103 12.7639C137.695 12.4387 138.375 12.276 139.143 12.276C139.892 12.276 140.558 12.434 141.141 12.75C141.723 13.066 142.177 13.5167 142.501 14.1023C142.833 14.6877 143 15.3708 143 16.1515ZM140.571 15.5242C140.571 15.1153 140.433 14.7899 140.156 14.5484C139.878 14.3067 139.532 14.1858 139.115 14.1858C138.718 14.1858 138.38 14.302 138.102 14.5344C137.834 14.7667 137.667 15.0966 137.602 15.5242H140.571Z"
                                        fill="#09C790"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className="description" data-v-a133c29c="">
                                  Explore the world of interchain transactions
                                </div>
                                <div
                                  className="platforms-with-link"
                                  data-v-a133c29c=""
                                >
                                  <div className="platforms" data-v-a133c29c="">
                                    <a
                                      href="https://twitter.com/VenomBridge"
                                      rel="noopener noreferrer"
                                      target="_blank"
                                      className="platform-item fill"
                                      aria-label="Twitter"
                                      data-v-a133c29c=""
                                    >
                                      <div
                                        className="kit-icon is-fill"
                                        data-v-a133c29c=""
                                      >
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M19.95 9.3501C19.95 8.93588 19.6142 8.6001 19.2 8.6001C18.7858 8.6001 18.45 8.93588 18.45 9.3501H19.95ZM3.60565 16.1077C3.36134 15.7732 2.89213 15.7001 2.55764 15.9444C2.22314 16.1888 2.15004 16.658 2.39435 16.9925L3.60565 16.1077ZM2.87257 15.811C2.46438 15.8814 2.19053 16.2693 2.2609 16.6775C2.33128 17.0857 2.71924 17.3596 3.12743 17.2892L2.87257 15.811ZM5.7 15.6501L5.93829 16.3612C6.18386 16.2789 6.36961 16.0758 6.4296 15.8238C6.4896 15.5719 6.41535 15.3068 6.23322 15.1227L5.7 15.6501ZM4.8 4.8501L5.46058 4.49494C5.33797 4.26688 5.10639 4.1182 4.84798 4.10163C4.58958 4.08507 4.34091 4.20296 4.19018 4.4135L4.8 4.8501ZM10.2 9.3501L10.0229 10.0789C10.2422 10.1322 10.4739 10.0839 10.6537 9.94732C10.8334 9.81076 10.9421 9.60051 10.9496 9.37489L10.2 9.3501ZM18.3 6.6501L17.6738 7.06287C17.8126 7.27339 18.0479 7.4001 18.3 7.4001V6.6501ZM21 6.6501L21.624 7.06612C21.7775 6.83598 21.7918 6.54007 21.6613 6.2962C21.5307 6.05234 21.2766 5.9001 21 5.9001V6.6501ZM18.576 8.93407C18.3462 9.27872 18.4393 9.74437 18.784 9.97414C19.1286 10.2039 19.5943 10.1108 19.824 9.76612L18.576 8.93407ZM18.45 9.3501C18.45 12.3621 17.5901 14.8711 16.0501 16.6164C14.5204 18.35 12.2593 19.4001 9.3 19.4001V20.9001C12.6407 20.9001 15.3296 19.7002 17.1749 17.6088C19.0099 15.5291 19.95 12.6381 19.95 9.3501H18.45ZM9.3 19.4001C7.64458 19.4001 6.5374 18.9725 5.70459 18.3832C4.84887 17.7777 4.23772 16.9731 3.60565 16.1077L2.39435 16.9925C3.01928 17.8481 3.75813 18.8435 4.83816 19.6077C5.9411 20.3881 7.35542 20.9001 9.3 20.9001V19.4001ZM3.12743 17.2892C3.15119 17.2851 3.16958 17.2807 3.17593 17.2792C3.18458 17.2771 3.19158 17.2753 3.19578 17.2741C3.20418 17.2719 3.21102 17.2699 3.21457 17.2688C3.22212 17.2666 3.229 17.2645 3.23345 17.2631C3.24301 17.2601 3.25419 17.2566 3.26552 17.2529C3.28875 17.2454 3.32054 17.235 3.35881 17.2224C3.43573 17.1971 3.54331 17.1614 3.67073 17.1191C3.92579 17.0343 4.26283 16.9218 4.5986 16.8095C4.93446 16.6973 5.26937 16.5852 5.5203 16.5012C5.64577 16.4592 5.75026 16.4242 5.82338 16.3997C5.85994 16.3875 5.88866 16.3779 5.90825 16.3713C5.91804 16.368 5.92555 16.3655 5.93061 16.3638C5.93314 16.363 5.93506 16.3623 5.93634 16.3619C5.93699 16.3617 5.93747 16.3615 5.9378 16.3614C5.93796 16.3613 5.93808 16.3613 5.93816 16.3613C5.93821 16.3613 5.93824 16.3613 5.93826 16.3612C5.93828 16.3612 5.93829 16.3612 5.7 15.6501C5.46171 14.939 5.4617 14.939 5.46168 14.939C5.46166 14.939 5.46163 14.939 5.46159 14.939C5.46151 14.939 5.46139 14.9391 5.46123 14.9391C5.46091 14.9392 5.46042 14.9394 5.45978 14.9396C5.4585 14.94 5.45659 14.9407 5.45407 14.9415C5.44902 14.9432 5.44152 14.9457 5.43175 14.949C5.41219 14.9556 5.3835 14.9652 5.34697 14.9774C5.2739 15.0019 5.16949 15.0368 5.0441 15.0788C4.79331 15.1628 4.45867 15.2748 4.12315 15.3869C3.78755 15.4991 3.4514 15.6112 3.19749 15.6957C3.07042 15.7379 2.96458 15.773 2.88987 15.7976C2.85233 15.8099 2.82377 15.8193 2.80469 15.8254C2.79486 15.8286 2.78939 15.8303 2.78715 15.831C2.78569 15.8315 2.78787 15.8308 2.79198 15.8296C2.79381 15.8291 2.79923 15.8275 2.80654 15.8255C2.8102 15.8245 2.81673 15.8228 2.82499 15.8208C2.83095 15.8194 2.84904 15.8151 2.87257 15.811L3.12743 17.2892ZM6.23322 15.1227C3.48941 12.3487 3.28417 8.25569 5.40982 5.2867L4.19018 4.4135C1.64783 7.96451 1.89859 12.8735 5.16678 16.1775L6.23322 15.1227ZM4.13942 5.20525C5.31949 7.40017 7.53919 9.47526 10.0229 10.0789L10.3771 8.62131C8.40881 8.14294 6.49451 6.41803 5.46058 4.49494L4.13942 5.20525ZM10.9496 9.37489C10.9872 8.2389 11.388 7.29977 12.0242 6.64966C12.6563 6.00364 13.5621 5.6001 14.7 5.6001V4.1001C13.1869 4.1001 11.8857 4.64655 10.9521 5.60054C10.0225 6.55042 9.49883 7.86129 9.45041 9.3253L10.9496 9.37489ZM14.7 5.6001C15.5057 5.6001 16.0959 5.75301 16.5489 5.99477C17.0003 6.23567 17.3617 6.58945 17.6738 7.06287L18.9262 6.23733C18.5053 5.59874 17.9692 5.05253 17.2551 4.67143C16.5426 4.29119 15.6993 4.1001 14.7 4.1001V5.6001ZM18.3 7.4001H21V5.9001H18.3V7.4001ZM20.376 6.23407L18.576 8.93407L19.824 9.76612L21.624 7.06612L20.376 6.23407Z"
                                            fill="#EEEEEE"
                                          ></path>
                                        </svg>
                                      </div>
                                    </a>
                                  </div>
                                  <a
                                    href="https://testnet.venombridge.com/bridge"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="kit-read-more read-more"
                                    data-v-a133c29c=""
                                    data-v-d93ab3f1=""
                                  >
                                    <div className="text" data-v-d93ab3f1="">
                                      Explore
                                    </div>
                                    <div className="icon" data-v-d93ab3f1="">
                                      <div
                                        className="kit-icon is-fill"
                                        data-v-d93ab3f1=""
                                      >
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M19 12H5"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                          <path
                                            d="M14 17L19 12"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                          <path
                                            d="M14 7L19 12"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide" data-v-1ca2ff44="">
                              <div
                                className="item-component"
                                data-v-1ca2ff44=""
                                data-v-a133c29c=""
                              >
                                <div className="icon" data-v-a133c29c="">
                                  <div
                                    className="kit-icon is-fill"
                                    data-v-a133c29c=""
                                  >
                                    <svg
                                      width="194"
                                      height="40"
                                      viewBox="0 0 194 40"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M88.7625 30.1535C88.236 29.6185 87.9727 28.9601 87.9727 28.1782C87.9727 27.3963 88.236 26.7378 88.7625 26.2028C89.289 25.6679 89.9371 25.4004 90.7067 25.4004C91.4762 25.4004 92.1243 25.6679 92.6509 26.2028C93.1774 26.7378 93.4407 27.3963 93.4407 28.1782C93.4407 28.9601 93.1774 29.6185 92.6509 30.1535C92.1243 30.6885 91.4762 30.9559 90.7067 30.9559C89.9371 30.9559 89.289 30.6885 88.7625 30.1535Z"
                                        fill="white"
                                      ></path>
                                      <path
                                        d="M93.582 8.88867H99.202L101.936 24.0121H102.24L105.095 8.88867H111.84L114.695 24.0121H114.998L117.733 8.88867H123.353L118.947 30.4936H111.353L108.619 15.9874H108.315L105.581 30.4936H97.9868L93.582 8.88867Z"
                                        fill="white"
                                      ></path>
                                      <path
                                        d="M126.474 28.4558C124.773 26.7891 123.922 24.7932 123.922 22.4681C123.922 20.143 124.773 18.1471 126.474 16.4805C128.175 14.8138 130.261 13.9805 132.732 13.9805C135.203 13.9805 137.289 14.8138 138.99 16.4805C140.691 18.1471 141.541 20.143 141.541 22.4681C141.541 24.7932 140.691 26.7891 138.99 28.4558C137.289 30.1225 135.203 30.9558 132.732 30.9558C130.261 30.9558 128.175 30.1225 126.474 28.4558ZM130.211 19.5669C129.562 20.2871 129.239 21.2541 129.239 22.4681C129.239 23.6821 129.562 24.6595 130.211 25.4002C130.879 26.1205 131.72 26.4805 132.732 26.4805C133.744 26.4805 134.574 26.1205 135.223 25.4002C135.891 24.6595 136.225 23.6821 136.225 22.4681C136.225 21.2541 135.891 20.2871 135.223 19.5669C134.574 18.8261 133.744 18.4558 132.732 18.4558C131.72 18.4558 130.879 18.8261 130.211 19.5669Z"
                                        fill="white"
                                      ></path>
                                      <path
                                        d="M144.098 30.4947V14.4454H149.11V16.7602H149.413C149.597 16.2664 149.87 15.8343 150.234 15.4639C151.064 14.5792 152.077 14.1367 153.272 14.1367H154.882V19.2294H152.3C151.389 19.2294 150.649 19.5174 150.082 20.0935C149.535 20.6491 149.262 21.3898 149.262 22.3157V30.4947H144.098Z"
                                        fill="white"
                                      ></path>
                                      <path
                                        d="M157.135 30.4936V8.88867H162.299V26.3269H165.793V30.4936H157.135Z"
                                        fill="white"
                                      ></path>
                                      <path
                                        d="M169.317 28.6418C167.96 27.078 167.281 25.0203 167.281 22.4689C167.281 19.9175 167.96 17.8701 169.317 16.3269C170.673 14.7631 172.323 13.9812 174.268 13.9812C175.523 13.9812 176.709 14.4237 177.822 15.3084C178.288 15.6993 178.673 16.1314 178.977 16.6047H179.28V8.88867H184.445V30.4936H179.28V28.3331H178.977C178.693 28.8269 178.308 29.2693 177.822 29.6602C176.729 30.5245 175.545 30.9566 174.268 30.9566C172.323 30.9566 170.673 30.185 169.317 28.6418ZM173.509 19.506C172.901 20.2056 172.598 21.1932 172.598 22.4689C172.598 23.7447 172.901 24.7323 173.509 25.4319C174.117 26.1315 174.927 26.4812 175.939 26.4812C176.951 26.4812 177.761 26.1315 178.369 25.4319C178.977 24.7323 179.28 23.7447 179.28 22.4689C179.28 21.1932 178.977 20.2056 178.369 19.506C177.761 18.8063 176.951 18.4566 175.939 18.4566C174.927 18.4566 174.117 18.8063 173.509 19.506Z"
                                        fill="white"
                                      ></path>
                                      <path
                                        d="M30.8768 28.4558C29.1959 26.7891 28.3555 24.7932 28.3555 22.4681C28.3555 20.143 29.1959 18.1471 30.8768 16.4805C32.5578 14.8138 34.6032 13.9805 37.0131 13.9805C39.4637 13.9805 41.5192 14.8138 43.1799 16.4805C44.8406 18.1471 45.6709 20.143 45.6709 22.4681V23.3941H33.6716C33.8336 24.4846 34.1981 25.3282 34.7652 25.9249C35.3526 26.5011 36.1018 26.7891 37.0131 26.7891C38.0866 26.7891 38.8966 26.5114 39.4435 25.9558C39.6865 25.7295 39.8889 25.4414 40.051 25.0916H45.519C45.1545 26.2234 44.6077 27.2007 43.8786 28.0237C42.2787 29.9785 39.9902 30.9558 37.0131 30.9558C34.6032 30.9558 32.5578 30.1225 30.8768 28.4558ZM33.8235 20.7706H40.2029C40.0206 20.0299 39.6459 19.4126 39.0789 18.9188C38.5118 18.4044 37.8232 18.1471 37.0131 18.1471C36.2031 18.1471 35.5146 18.4044 34.9475 18.9188C34.3805 19.4126 34.0058 20.0299 33.8235 20.7706Z"
                                        fill="white"
                                      ></path>
                                      <path
                                        d="M48.3828 30.4936V8.88867H53.5471V16.6047H53.8509C54.1344 16.1314 54.5191 15.6993 55.0053 15.3084C56.1191 14.4237 57.3038 13.9812 58.5595 13.9812C60.5036 13.9812 62.1541 14.7631 63.511 16.3269C64.8679 17.8701 65.5464 19.9175 65.5464 22.4689C65.5464 25.0203 64.8679 27.078 63.511 28.6418C62.1541 30.185 60.5036 30.9566 58.5595 30.9566C57.2836 30.9566 56.0988 30.5245 55.0053 29.6602C54.5191 29.2693 54.1344 28.8269 53.8509 28.3331H53.5471V30.4936H48.3828ZM54.4585 19.506C53.8509 20.2056 53.5471 21.1932 53.5471 22.4689C53.5471 23.7447 53.8509 24.7323 54.4585 25.4319C55.066 26.1315 55.876 26.4812 56.8887 26.4812C57.9013 26.4812 58.7114 26.1315 59.3189 25.4319C59.9265 24.7323 60.2303 23.7447 60.2303 22.4689C60.2303 21.1932 59.9265 20.2056 59.3189 19.506C58.7114 18.8063 57.9013 18.4566 56.8887 18.4566C55.876 18.4566 55.066 18.8063 54.4585 19.506Z"
                                        fill="white"
                                      ></path>
                                      <path
                                        d="M67.332 23.7035H73.1038C73.2254 24.1768 73.4481 24.5882 73.7721 24.938C74.4607 25.7611 75.453 26.1727 76.7491 26.1727C77.782 26.1727 78.5921 25.9257 79.1795 25.4319C79.787 24.9175 80.0908 24.2899 80.0908 23.5491C80.0908 22.829 79.787 22.2117 79.1795 21.6973C78.5921 21.1829 77.782 20.9257 76.7491 20.9257H71.8887V17.222L76.7491 14.1356V13.8269H68.5471V8.88867H84.4956V13.8269L79.787 16.759L79.4528 16.8824V17.2529L79.5136 17.222C81.316 17.222 82.8248 17.829 84.0399 19.043C85.255 20.257 85.8626 21.759 85.8626 23.5491C85.8626 25.7097 85.0424 27.5101 83.4019 28.9504C81.7616 30.3908 79.5439 31.1109 76.7491 31.1109C73.1646 31.1109 70.5318 29.8763 68.8509 27.4072C68.0814 26.3167 67.575 25.0821 67.332 23.7035Z"
                                        fill="#09C790"
                                      ></path>
                                      <path
                                        d="M14.0819 8.88867H16.2559L19.1111 24.0121H19.4149L18.2493 30.4936H15.7699L13.0362 15.9874H12.7324L14.0819 8.88867Z"
                                        fill="#09C790"
                                      ></path>
                                      <path
                                        d="M14.0819 8.88867H16.2559L19.1111 24.0121H19.4149L18.2493 30.4936H15.7699L13.0362 15.9874H12.7324L14.0819 8.88867Z"
                                        fill="url(#paint0_linear_1739_15220)"
                                        fillOpacity="0.5"
                                      ></path>
                                      <path
                                        d="M16.0829 8.88867L11.98 30.4494L11.9932 30.4936H4.4048L0 8.88867H5.61991L8.35392 24.0121H8.6577L11.5132 8.88867H16.0829Z"
                                        fill="white"
                                      ></path>
                                      <path
                                        d="M18.2109 30.4936L22.1185 8.88867H27.7278L23.3234 30.4936H18.2109Z"
                                        fill="white"
                                      ></path>
                                      <defs>
                                        <linearGradient
                                          id="paint0_linear_1739_15220"
                                          x1="13.4006"
                                          y1="12.369"
                                          x2="19.8708"
                                          y2="13.3232"
                                          gradientUnits="userSpaceOnUse"
                                        >
                                          <stop stopColor="#05382A"></stop>
                                          <stop
                                            offset="1"
                                            stopColor="#09C790"
                                          ></stop>
                                        </linearGradient>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div className="description" data-v-a133c29c="">
                                  Intuitively swap assets, provide liquidity and
                                  farm available assets
                                </div>
                                <div
                                  className="platforms-with-link"
                                  data-v-a133c29c=""
                                >
                                  <div className="platforms" data-v-a133c29c="">
                                    <a
                                      href="https://twitter.com/w3w_exchange"
                                      rel="noopener noreferrer"
                                      target="_blank"
                                      className="platform-item fill"
                                      aria-label="Twitter"
                                      data-v-a133c29c=""
                                    >
                                      <div
                                        className="kit-icon is-fill"
                                        data-v-a133c29c=""
                                      >
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M19.95 9.3501C19.95 8.93588 19.6142 8.6001 19.2 8.6001C18.7858 8.6001 18.45 8.93588 18.45 9.3501H19.95ZM3.60565 16.1077C3.36134 15.7732 2.89213 15.7001 2.55764 15.9444C2.22314 16.1888 2.15004 16.658 2.39435 16.9925L3.60565 16.1077ZM2.87257 15.811C2.46438 15.8814 2.19053 16.2693 2.2609 16.6775C2.33128 17.0857 2.71924 17.3596 3.12743 17.2892L2.87257 15.811ZM5.7 15.6501L5.93829 16.3612C6.18386 16.2789 6.36961 16.0758 6.4296 15.8238C6.4896 15.5719 6.41535 15.3068 6.23322 15.1227L5.7 15.6501ZM4.8 4.8501L5.46058 4.49494C5.33797 4.26688 5.10639 4.1182 4.84798 4.10163C4.58958 4.08507 4.34091 4.20296 4.19018 4.4135L4.8 4.8501ZM10.2 9.3501L10.0229 10.0789C10.2422 10.1322 10.4739 10.0839 10.6537 9.94732C10.8334 9.81076 10.9421 9.60051 10.9496 9.37489L10.2 9.3501ZM18.3 6.6501L17.6738 7.06287C17.8126 7.27339 18.0479 7.4001 18.3 7.4001V6.6501ZM21 6.6501L21.624 7.06612C21.7775 6.83598 21.7918 6.54007 21.6613 6.2962C21.5307 6.05234 21.2766 5.9001 21 5.9001V6.6501ZM18.576 8.93407C18.3462 9.27872 18.4393 9.74437 18.784 9.97414C19.1286 10.2039 19.5943 10.1108 19.824 9.76612L18.576 8.93407ZM18.45 9.3501C18.45 12.3621 17.5901 14.8711 16.0501 16.6164C14.5204 18.35 12.2593 19.4001 9.3 19.4001V20.9001C12.6407 20.9001 15.3296 19.7002 17.1749 17.6088C19.0099 15.5291 19.95 12.6381 19.95 9.3501H18.45ZM9.3 19.4001C7.64458 19.4001 6.5374 18.9725 5.70459 18.3832C4.84887 17.7777 4.23772 16.9731 3.60565 16.1077L2.39435 16.9925C3.01928 17.8481 3.75813 18.8435 4.83816 19.6077C5.9411 20.3881 7.35542 20.9001 9.3 20.9001V19.4001ZM3.12743 17.2892C3.15119 17.2851 3.16958 17.2807 3.17593 17.2792C3.18458 17.2771 3.19158 17.2753 3.19578 17.2741C3.20418 17.2719 3.21102 17.2699 3.21457 17.2688C3.22212 17.2666 3.229 17.2645 3.23345 17.2631C3.24301 17.2601 3.25419 17.2566 3.26552 17.2529C3.28875 17.2454 3.32054 17.235 3.35881 17.2224C3.43573 17.1971 3.54331 17.1614 3.67073 17.1191C3.92579 17.0343 4.26283 16.9218 4.5986 16.8095C4.93446 16.6973 5.26937 16.5852 5.5203 16.5012C5.64577 16.4592 5.75026 16.4242 5.82338 16.3997C5.85994 16.3875 5.88866 16.3779 5.90825 16.3713C5.91804 16.368 5.92555 16.3655 5.93061 16.3638C5.93314 16.363 5.93506 16.3623 5.93634 16.3619C5.93699 16.3617 5.93747 16.3615 5.9378 16.3614C5.93796 16.3613 5.93808 16.3613 5.93816 16.3613C5.93821 16.3613 5.93824 16.3613 5.93826 16.3612C5.93828 16.3612 5.93829 16.3612 5.7 15.6501C5.46171 14.939 5.4617 14.939 5.46168 14.939C5.46166 14.939 5.46163 14.939 5.46159 14.939C5.46151 14.939 5.46139 14.9391 5.46123 14.9391C5.46091 14.9392 5.46042 14.9394 5.45978 14.9396C5.4585 14.94 5.45659 14.9407 5.45407 14.9415C5.44902 14.9432 5.44152 14.9457 5.43175 14.949C5.41219 14.9556 5.3835 14.9652 5.34697 14.9774C5.2739 15.0019 5.16949 15.0368 5.0441 15.0788C4.79331 15.1628 4.45867 15.2748 4.12315 15.3869C3.78755 15.4991 3.4514 15.6112 3.19749 15.6957C3.07042 15.7379 2.96458 15.773 2.88987 15.7976C2.85233 15.8099 2.82377 15.8193 2.80469 15.8254C2.79486 15.8286 2.78939 15.8303 2.78715 15.831C2.78569 15.8315 2.78787 15.8308 2.79198 15.8296C2.79381 15.8291 2.79923 15.8275 2.80654 15.8255C2.8102 15.8245 2.81673 15.8228 2.82499 15.8208C2.83095 15.8194 2.84904 15.8151 2.87257 15.811L3.12743 17.2892ZM6.23322 15.1227C3.48941 12.3487 3.28417 8.25569 5.40982 5.2867L4.19018 4.4135C1.64783 7.96451 1.89859 12.8735 5.16678 16.1775L6.23322 15.1227ZM4.13942 5.20525C5.31949 7.40017 7.53919 9.47526 10.0229 10.0789L10.3771 8.62131C8.40881 8.14294 6.49451 6.41803 5.46058 4.49494L4.13942 5.20525ZM10.9496 9.37489C10.9872 8.2389 11.388 7.29977 12.0242 6.64966C12.6563 6.00364 13.5621 5.6001 14.7 5.6001V4.1001C13.1869 4.1001 11.8857 4.64655 10.9521 5.60054C10.0225 6.55042 9.49883 7.86129 9.45041 9.3253L10.9496 9.37489ZM14.7 5.6001C15.5057 5.6001 16.0959 5.75301 16.5489 5.99477C17.0003 6.23567 17.3617 6.58945 17.6738 7.06287L18.9262 6.23733C18.5053 5.59874 17.9692 5.05253 17.2551 4.67143C16.5426 4.29119 15.6993 4.1001 14.7 4.1001V5.6001ZM18.3 7.4001H21V5.9001H18.3V7.4001ZM20.376 6.23407L18.576 8.93407L19.824 9.76612L21.624 7.06612L20.376 6.23407Z"
                                            fill="#EEEEEE"
                                          ></path>
                                        </svg>
                                      </div>
                                    </a>
                                  </div>
                                  <a
                                    href="https://testnet.web3.world"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="kit-read-more read-more"
                                    data-v-a133c29c=""
                                    data-v-d93ab3f1=""
                                  >
                                    <div className="text" data-v-d93ab3f1="">
                                      Explore
                                    </div>
                                    <div className="icon" data-v-d93ab3f1="">
                                      <div
                                        className="kit-icon is-fill"
                                        data-v-d93ab3f1=""
                                      >
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M19 12H5"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                          <path
                                            d="M14 17L19 12"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                          <path
                                            d="M14 7L19 12"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide" data-v-1ca2ff44="">
                              <div
                                className="item-component"
                                data-v-1ca2ff44=""
                                data-v-a133c29c=""
                              >
                                <div className="icon" data-v-a133c29c="">
                                  <div
                                    className="kit-icon is-fill"
                                    data-v-a133c29c=""
                                  >
                                    <svg
                                      width="176"
                                      height="40"
                                      viewBox="0 0 176 40"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M46.9249 25.5016C44.5533 25.5016 43.3809 24.3292 43.3809 21.9576V17.2144C43.3809 14.8429 44.5533 13.6704 46.9249 13.6704H51.6681C54.0396 13.6704 55.2121 14.8429 55.2121 17.2144V21.9576C55.2121 24.3292 54.0396 25.5016 51.6681 25.5016H46.9249ZM51.6681 23.1301V16.0153H46.9249V23.1301H51.6681ZM64.6984 23.1301V20.7585H59.9552V23.1301H64.6984ZM68.2424 24.3025C68.2424 25.1019 67.8427 25.475 67.07 25.475H59.9552C57.5837 25.475 56.4112 24.3025 56.4112 21.931C56.4112 19.5594 57.5837 18.3869 59.9552 18.3869H64.6984V16.0153H58.1966C57.7968 16.0153 57.6103 15.8288 57.6103 15.4291V14.2566C57.6103 13.8569 57.7968 13.6704 58.1966 13.6704H64.6984C67.07 13.6704 68.2424 14.8429 68.2424 17.2144V24.3025ZM72.9856 20.7585C70.614 20.7585 69.4416 19.7726 69.4416 17.8007V16.7614C69.4416 14.683 70.614 13.6438 72.959 13.6438H80.7132C81.1129 13.6438 81.2994 13.8303 81.2994 14.23V15.4025C81.2994 15.8022 81.1129 15.9887 80.7132 15.9887H73.0122V18.3603H77.8087C80.0737 18.3603 81.2461 19.3462 81.3261 21.2914V22.4905C81.3261 24.4624 80.1536 25.4483 77.782 25.4483H70.0811C69.6814 25.4483 69.4949 25.2618 69.4949 24.8621V23.6896C69.4949 23.2899 69.6814 23.1034 70.0811 23.1034H77.782V20.7318L72.9856 20.7585ZM86.0159 24.3025C86.0159 25.1019 85.6162 25.475 84.8435 25.475H83.671C82.8716 25.475 82.4986 25.0753 82.4986 24.3025V18.3869C82.4986 17.5875 82.8983 17.2144 83.671 17.2144H84.8435C85.6429 17.2144 86.0159 17.6141 86.0159 18.3869V24.3025ZM82.4719 13.6438C82.4719 12.8444 82.8716 12.4713 83.6444 12.4713H84.8168C85.563 12.4713 85.9627 12.8443 85.9893 13.5638V14.8162C85.9893 15.6156 85.5896 15.9887 84.8168 15.9887H83.6444C82.845 15.9887 82.4719 15.589 82.4719 14.8162V13.6438ZM90.7591 20.7585C88.3875 20.7585 87.2151 19.7726 87.2151 17.8007V16.7614C87.2151 14.683 88.3875 13.6438 90.7324 13.6438H98.4867C98.8864 13.6438 99.0729 13.8303 99.0729 14.23V15.4025C99.0729 15.8022 98.8864 15.9887 98.4867 15.9887H90.7591V18.3603H95.5555C97.8205 18.3603 98.993 19.3462 99.0729 21.2914V22.4905C99.0729 24.4624 97.9005 25.4483 95.5289 25.4483H87.8279C87.4282 25.4483 87.2417 25.2618 87.2417 24.8621V23.6896C87.2417 23.2899 87.4282 23.1034 87.8279 23.1034H95.5289V20.7318L90.7591 20.7585ZM100.219 23.1301C100.219 22.3307 100.618 21.9576 101.391 21.9576H102.564C103.363 21.9576 103.736 22.3573 103.736 23.1301V24.4091C103.71 25.1286 103.31 25.5016 102.564 25.5016H101.418C100.618 25.5016 100.245 25.1019 100.245 24.3292V23.1301H100.219ZM108.533 23.1301H113.276V16.0153H108.533V23.1301ZM108.533 25.5016C106.161 25.5016 104.989 24.3292 104.989 21.9576V17.2144C104.989 14.8429 106.161 13.6704 108.533 13.6704H113.276C115.647 13.6704 116.82 14.6563 116.82 16.6282V27.287C116.82 29.2589 115.647 30.2448 113.276 30.2448H106.747C106.348 30.2448 106.161 30.0583 106.161 29.6586V28.4594C106.161 28.0597 106.348 27.8732 106.747 27.8732H113.249V25.5016H108.533ZM126.279 23.1301V20.7585H121.536V23.1301H126.279ZM129.85 24.3025C129.85 25.1019 129.45 25.475 128.678 25.475H121.563C119.191 25.475 118.019 24.3025 118.019 21.931C118.019 19.5594 119.191 18.3869 121.563 18.3869H126.306V16.0153H119.804C119.405 16.0153 119.218 15.8288 119.218 15.4291V14.2566C119.218 13.8569 119.405 13.6704 119.804 13.6704H126.306C128.678 13.6704 129.85 14.8429 129.85 17.2144V24.3025ZM131.023 12.4713C131.023 11.6719 131.422 11.2988 132.195 11.2988H133.368C134.167 11.2988 134.54 11.6985 134.54 12.4713V24.3292C134.54 25.1286 134.14 25.5016 133.368 25.5016H132.195C131.396 25.5016 131.023 25.1019 131.023 24.3292V12.4713ZM135.766 12.4713C135.766 11.6719 136.165 11.2988 136.938 11.2988H138.111C138.91 11.2988 139.283 11.6985 139.283 12.4713V24.3292C139.283 25.1286 138.883 25.5016 138.111 25.5016H136.938C136.139 25.5016 135.766 25.1019 135.766 24.3292V12.4713ZM144.053 18.3869H148.796V16.0153H144.053V18.3869ZM144.053 20.7585V23.1301H151.754C152.154 23.1301 152.34 23.3166 152.34 23.7163V24.8888C152.34 25.2885 152.154 25.475 151.754 25.475H144.053C141.681 25.475 140.509 24.3025 140.509 21.931V17.1878C140.509 14.8162 141.681 13.6438 144.053 13.6438H148.796C151.168 13.6438 152.34 14.6297 152.34 16.6016V17.6408C152.34 19.7193 151.168 20.7585 148.823 20.7585H144.053ZM153.539 24.3025C153.539 25.1019 153.939 25.475 154.712 25.475H155.884C156.684 25.475 157.057 25.0753 157.057 24.3025V16.0153H160.601V17.8007C160.601 18.2004 160.787 18.3869 161.187 18.3869H162.359C162.759 18.3869 162.946 18.2004 162.946 17.8007V16.0153C162.946 14.4432 162.146 13.6438 160.574 13.6438H154.578C153.832 13.6704 153.459 14.0701 153.459 14.8162V24.3025H153.539ZM167.742 25.5016C165.37 25.5016 164.198 24.3292 164.198 21.9576V14.8429C164.198 14.0435 164.598 13.6704 165.37 13.6704H166.543C167.342 13.6704 167.715 14.0701 167.715 14.8429V23.1301H172.459V14.8429C172.459 14.0435 172.858 13.6704 173.631 13.6704H174.804C175.603 13.6704 175.976 14.0701 175.976 14.8429V27.287C175.976 29.2589 174.803 30.2448 172.432 30.2448H165.93C165.53 30.2448 165.344 30.0583 165.344 29.6586V28.4594C165.344 28.0597 165.53 27.8732 165.93 27.8732H172.432V25.5016H167.742Z"
                                        fill="white"
                                      ></path>
                                      <path
                                        d="M4.7698 34.9889C1.59882 33.5233 0 30.4589 0 25.7957V12.2058C0 5.41081 3.41081 2 10.2058 2H23.7957C30.5907 2 34.0015 5.41081 34.0015 12.2058V25.7957C34.0015 30.4589 32.4027 33.4967 29.2317 34.9889C26.3005 32.1643 22.49 30.4323 18.3597 30.1125L17.6669 17.0822L25.5011 24.9164C23.5292 18.3612 25.5011 24.9164 23.5292 18.3612C22.49 17.322 21.1843 16.6558 19.8253 16.3893H29.0451C23.0229 13.1651 29.0451 16.3893 23.0229 13.1651C21.5307 13.1651 20.1451 13.6181 18.9993 14.3908L25.5278 7.86232C18.9726 9.8342 25.5278 7.86232 18.9726 9.8342C17.9067 10.9001 17.2406 12.2058 16.9741 13.5648C16.7076 12.2058 16.0414 10.9001 14.9756 9.8342C8.42043 7.86232 14.9756 9.8342 8.42043 7.86232L14.9489 14.3908C13.8031 13.6181 12.4175 13.1651 10.9252 13.1651C4.90303 16.3893 10.9252 13.1651 4.90303 16.3893H14.1229C12.7639 16.6558 11.4848 17.322 10.4189 18.3612C8.44707 24.9164 10.4189 18.3612 8.44707 24.9164L16.3079 17.0555L15.5885 30.1125C11.5381 30.4323 7.70096 32.1643 4.7698 34.9889Z"
                                        fill="white"
                                      ></path>
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M17.001 31.498C22.5702 31.498 27.3933 34.1627 29.6583 37.9999H4.34375C6.58209 34.1627 11.4052 31.498 17.001 31.498Z"
                                        fill="#EBBE40"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className="description" data-v-a133c29c="">
                                  An NFT marketplace on Venom blockchain for
                                  unique digital assets trading
                                </div>
                                <div
                                  className="platforms-with-link"
                                  data-v-a133c29c=""
                                >
                                  <div className="platforms" data-v-a133c29c="">
                                    <a
                                      href="https://twitter.com/0asisgallery"
                                      rel="noopener noreferrer"
                                      target="_blank"
                                      className="platform-item fill"
                                      aria-label="Twitter"
                                      data-v-a133c29c=""
                                    >
                                      <div
                                        className="kit-icon is-fill"
                                        data-v-a133c29c=""
                                      >
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M19.95 9.3501C19.95 8.93588 19.6142 8.6001 19.2 8.6001C18.7858 8.6001 18.45 8.93588 18.45 9.3501H19.95ZM3.60565 16.1077C3.36134 15.7732 2.89213 15.7001 2.55764 15.9444C2.22314 16.1888 2.15004 16.658 2.39435 16.9925L3.60565 16.1077ZM2.87257 15.811C2.46438 15.8814 2.19053 16.2693 2.2609 16.6775C2.33128 17.0857 2.71924 17.3596 3.12743 17.2892L2.87257 15.811ZM5.7 15.6501L5.93829 16.3612C6.18386 16.2789 6.36961 16.0758 6.4296 15.8238C6.4896 15.5719 6.41535 15.3068 6.23322 15.1227L5.7 15.6501ZM4.8 4.8501L5.46058 4.49494C5.33797 4.26688 5.10639 4.1182 4.84798 4.10163C4.58958 4.08507 4.34091 4.20296 4.19018 4.4135L4.8 4.8501ZM10.2 9.3501L10.0229 10.0789C10.2422 10.1322 10.4739 10.0839 10.6537 9.94732C10.8334 9.81076 10.9421 9.60051 10.9496 9.37489L10.2 9.3501ZM18.3 6.6501L17.6738 7.06287C17.8126 7.27339 18.0479 7.4001 18.3 7.4001V6.6501ZM21 6.6501L21.624 7.06612C21.7775 6.83598 21.7918 6.54007 21.6613 6.2962C21.5307 6.05234 21.2766 5.9001 21 5.9001V6.6501ZM18.576 8.93407C18.3462 9.27872 18.4393 9.74437 18.784 9.97414C19.1286 10.2039 19.5943 10.1108 19.824 9.76612L18.576 8.93407ZM18.45 9.3501C18.45 12.3621 17.5901 14.8711 16.0501 16.6164C14.5204 18.35 12.2593 19.4001 9.3 19.4001V20.9001C12.6407 20.9001 15.3296 19.7002 17.1749 17.6088C19.0099 15.5291 19.95 12.6381 19.95 9.3501H18.45ZM9.3 19.4001C7.64458 19.4001 6.5374 18.9725 5.70459 18.3832C4.84887 17.7777 4.23772 16.9731 3.60565 16.1077L2.39435 16.9925C3.01928 17.8481 3.75813 18.8435 4.83816 19.6077C5.9411 20.3881 7.35542 20.9001 9.3 20.9001V19.4001ZM3.12743 17.2892C3.15119 17.2851 3.16958 17.2807 3.17593 17.2792C3.18458 17.2771 3.19158 17.2753 3.19578 17.2741C3.20418 17.2719 3.21102 17.2699 3.21457 17.2688C3.22212 17.2666 3.229 17.2645 3.23345 17.2631C3.24301 17.2601 3.25419 17.2566 3.26552 17.2529C3.28875 17.2454 3.32054 17.235 3.35881 17.2224C3.43573 17.1971 3.54331 17.1614 3.67073 17.1191C3.92579 17.0343 4.26283 16.9218 4.5986 16.8095C4.93446 16.6973 5.26937 16.5852 5.5203 16.5012C5.64577 16.4592 5.75026 16.4242 5.82338 16.3997C5.85994 16.3875 5.88866 16.3779 5.90825 16.3713C5.91804 16.368 5.92555 16.3655 5.93061 16.3638C5.93314 16.363 5.93506 16.3623 5.93634 16.3619C5.93699 16.3617 5.93747 16.3615 5.9378 16.3614C5.93796 16.3613 5.93808 16.3613 5.93816 16.3613C5.93821 16.3613 5.93824 16.3613 5.93826 16.3612C5.93828 16.3612 5.93829 16.3612 5.7 15.6501C5.46171 14.939 5.4617 14.939 5.46168 14.939C5.46166 14.939 5.46163 14.939 5.46159 14.939C5.46151 14.939 5.46139 14.9391 5.46123 14.9391C5.46091 14.9392 5.46042 14.9394 5.45978 14.9396C5.4585 14.94 5.45659 14.9407 5.45407 14.9415C5.44902 14.9432 5.44152 14.9457 5.43175 14.949C5.41219 14.9556 5.3835 14.9652 5.34697 14.9774C5.2739 15.0019 5.16949 15.0368 5.0441 15.0788C4.79331 15.1628 4.45867 15.2748 4.12315 15.3869C3.78755 15.4991 3.4514 15.6112 3.19749 15.6957C3.07042 15.7379 2.96458 15.773 2.88987 15.7976C2.85233 15.8099 2.82377 15.8193 2.80469 15.8254C2.79486 15.8286 2.78939 15.8303 2.78715 15.831C2.78569 15.8315 2.78787 15.8308 2.79198 15.8296C2.79381 15.8291 2.79923 15.8275 2.80654 15.8255C2.8102 15.8245 2.81673 15.8228 2.82499 15.8208C2.83095 15.8194 2.84904 15.8151 2.87257 15.811L3.12743 17.2892ZM6.23322 15.1227C3.48941 12.3487 3.28417 8.25569 5.40982 5.2867L4.19018 4.4135C1.64783 7.96451 1.89859 12.8735 5.16678 16.1775L6.23322 15.1227ZM4.13942 5.20525C5.31949 7.40017 7.53919 9.47526 10.0229 10.0789L10.3771 8.62131C8.40881 8.14294 6.49451 6.41803 5.46058 4.49494L4.13942 5.20525ZM10.9496 9.37489C10.9872 8.2389 11.388 7.29977 12.0242 6.64966C12.6563 6.00364 13.5621 5.6001 14.7 5.6001V4.1001C13.1869 4.1001 11.8857 4.64655 10.9521 5.60054C10.0225 6.55042 9.49883 7.86129 9.45041 9.3253L10.9496 9.37489ZM14.7 5.6001C15.5057 5.6001 16.0959 5.75301 16.5489 5.99477C17.0003 6.23567 17.3617 6.58945 17.6738 7.06287L18.9262 6.23733C18.5053 5.59874 17.9692 5.05253 17.2551 4.67143C16.5426 4.29119 15.6993 4.1001 14.7 4.1001V5.6001ZM18.3 7.4001H21V5.9001H18.3V7.4001ZM20.376 6.23407L18.576 8.93407L19.824 9.76612L21.624 7.06612L20.376 6.23407Z"
                                            fill="#EEEEEE"
                                          ></path>
                                        </svg>
                                      </div>
                                    </a>
                                  </div>
                                  <a
                                    href="https://testnet.oasis.gallery"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="kit-read-more read-more"
                                    data-v-a133c29c=""
                                    data-v-d93ab3f1=""
                                  >
                                    <div className="text" data-v-d93ab3f1="">
                                      Explore
                                    </div>
                                    <div className="icon" data-v-d93ab3f1="">
                                      <div
                                        className="kit-icon is-fill"
                                        data-v-d93ab3f1=""
                                      >
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M19 12H5"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                          <path
                                            d="M14 17L19 12"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                          <path
                                            d="M14 7L19 12"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wrapper" data-v-683b6745="">
                  <div
                    className="opportunity-component opportunity"
                    data-v-683b6745=""
                    data-v-c6a7d5db=""
                  >
                    <div className="text-compose" data-v-c6a7d5db="">
                      <div className="title" data-v-c6a7d5db="">
                        What are the opportunities?
                      </div>
                      <div className="subtitle" data-v-c6a7d5db="">
                        An ecosystem full of potential for innovative solutions.
                      </div>
                    </div>
                    <div className="buttons" data-v-c6a7d5db="">
                      <a
                        aria-current="page"
                        href="#explore_grants"
                        className="router-link-active router-link-exact-active"
                        data-v-c6a7d5db=""
                      >
                        <button
                          className="kit-button is-primary button"
                          data-v-c6a7d5db=""
                          data-v-d855b919=""
                        >
                          <div className="label" data-v-d855b919="">
                            Launch Project
                          </div>
                        </button>
                      </a>
                      <a href="/ecosystem" className="" data-v-c6a7d5db="">
                        <button
                          className="kit-button is-secondary button"
                          data-v-c6a7d5db=""
                          data-v-d855b919=""
                        >
                          <div className="label" data-v-d855b919="">
                            Explore Ecosystem
                          </div>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="kit-spot left bottom"
                  data-v-683b6745=""
                  data-v-c951ae60=""
                ></div>
              </div>
              <div
                className="developers-block default-margin"
                data-v-b87b2b90=""
                data-v-abed6bf0=""
              >
                <div className="wrapper" data-v-abed6bf0="">
                  <div className="title" data-v-abed6bf0="">
                    Blockchain For Developers
                  </div>
                  <div className="subtitle" data-v-abed6bf0="">
                    The Venom Blockchain has plenty of unique features that
                    differentiate it from other blockchains.
                  </div>
                </div>
                <div className="wrapper" data-v-abed6bf0="">
                  <div className="buttons-compose" data-v-abed6bf0="">
                    <a
                      href="https://docs.venom.foundation"
                      rel="noopener noreferrer"
                      target="_blank"
                      data-v-abed6bf0=""
                    >
                      <button
                        className="kit-button is-primary btn"
                        data-v-abed6bf0=""
                        data-v-d855b919=""
                      >
                        <div className="label" data-v-d855b919="">
                          Read the Docs
                        </div>
                      </button>
                    </a>
                    <a
                      href="https://github.com/venom-blockchain"
                      rel="noopener noreferrer"
                      target="_blank"
                      data-v-abed6bf0=""
                    >
                      <button
                        className="kit-button is-secondary btn"
                        data-v-abed6bf0=""
                        data-v-d855b919=""
                      >
                        <div
                          className="kit-icon is-fill icon"
                          data-v-d855b919=""
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5.4 5.9C4 7.4 3 9.5 3 12.2C3 14.2 3.7 16.1 4.8 17.6C6.1 19.3 8 20.3 9 20.7V20C9 20 9 18.4 9.9 17C7.9 16.9 6.3 15 6.3 12.8C6.3 12 6.6 11.3 7.1 10.7L7.2 8.8C7.2 8.3 7.7 8 8.2 8.1L10.3 8.9C10.9 8.8 11.5 8.7 12.2 8.7C12.9 8.7 13.5 8.8 14.1 8.9L15.9 8C16.4 7.8 16.9 8.2 16.9 8.7L17 10.6C17.5 11.2 17.8 12 17.8 12.7C17.8 14.9 16.2 16.7 14.2 16.9C15.1 18.3 15.1 19.9 15.1 19.9V20.6C16.1 20.2 18 19.2 19.3 17.5C20.4 16.1 21.1 14.1 21.1 12.1C21.1 9.4 20.1 7.3 18.7 5.8C16.8 3.9 14.2 3 12 3C9.8 3 7.2 3.9 5.4 5.9V5.9Z"
                              stroke="#EEEEEE"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                        <div className="label" data-v-d855b919="">
                          Github
                        </div>
                      </button>
                    </a>
                  </div>
                </div>
                <div className="wrapper" data-v-abed6bf0="">
                  <div
                    className="developer-window window is-desktop"
                    data-v-abed6bf0=""
                    data-v-a87fc970=""
                  >
                    <div className="menu" data-v-a87fc970="">
                      <div className="current menu-link" data-v-a87fc970="">
                        TVM
                      </div>
                      <div className="menu-link" data-v-a87fc970="">
                        Account abstraction
                      </div>
                      <div className="menu-link" data-v-a87fc970="">
                        External messaging
                      </div>
                      <div className="menu-link" data-v-a87fc970="">
                        Arbitrary workchains
                      </div>
                      <div className="menu-link" data-v-a87fc970="">
                        T-Sol
                      </div>
                      <div className="menu-link" data-v-a87fc970="">
                        Locklift
                      </div>
                      <div className="menu-link" data-v-a87fc970="">
                        Documentation
                      </div>
                    </div>
                    <div className="content" data-v-a87fc970="">
                      <div className="content-title" data-v-a87fc970="">
                        TVM
                      </div>
                      <div className="content-body" data-v-a87fc970="">
                        Venom Blockchain is built on the Threaded Virtual
                        Machine (TVM). TVM provides a highly efficient and
                        scalable way to handle account interactions in the Venom
                        Blockchain. By utilizing the Actor model, TVM can
                        isolate and parallelize actors, allowing for the
                        efficient handling of complex distributed systems. This
                        makes the dynamic sharding protocol further groups
                        account into shards, improving efficiency and enabling
                        contracts to execute in an asynchronous mode.
                      </div>
                      <a
                        href="https://docs.venom.foundation/learn/tvm"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="kit-read-more read-more"
                        data-v-a87fc970=""
                        data-v-d93ab3f1=""
                      >
                        <div className="text" data-v-d93ab3f1="">
                          Read more
                        </div>
                        <div className="icon" data-v-d93ab3f1="">
                          <div className="kit-icon is-fill" data-v-d93ab3f1="">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 12H5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M14 17L19 12"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M14 7L19 12"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="nav-buttons" data-v-a87fc970="">
                        <div
                          style={{ display: "none" }}
                          className="nav-btn"
                          data-v-a87fc970=""
                        >
                          Previous
                        </div>
                        <div className="nav-btn next-btn" data-v-a87fc970="">
                          Next
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="mobile-gallery window is-mobile"
                  data-v-abed6bf0=""
                  data-v-5b1c4390=""
                >
                  <div
                    className="kit-swiper"
                    data-v-5b1c4390=""
                    data-v-7d6ec4d7=""
                  >
                    <div
                      className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper"
                      data-v-7d6ec4d7=""
                    >
                      <div
                        className="swiper-wrapper"
                        style={{ transitionDuration: "0ms" }}
                      >
                        <div className="swiper-slide" data-v-5b1c4390="">
                          <div className="developer-item" data-v-5b1c4390="">
                            <div className="item-title" data-v-5b1c4390="">
                              TVM
                            </div>
                            <div className="item-body" data-v-5b1c4390="">
                              Venom Blockchain is built on the Threaded Virtual
                              Machine (TVM). TVM provides a highly efficient and
                              scalable way to handle account interactions in the
                              Venom Blockchain. By utilizing the Actor model,
                              TVM can isolate and parallelize actors, allowing
                              for the efficient handling of complex distributed
                              systems. This makes the dynamic sharding protocol
                              further groups account into shards, improving
                              efficiency and enabling contracts to execute in an
                              asynchronous mode.
                            </div>
                            <a
                              href="https://docs.venom.foundation/learn/tvm"
                              rel="noopener noreferrer"
                              target="_blank"
                              className="kit-read-more item-read-more"
                              data-v-5b1c4390=""
                              data-v-d93ab3f1=""
                            >
                              <div className="text" data-v-d93ab3f1="">
                                Read more
                              </div>
                              <div className="icon" data-v-d93ab3f1="">
                                <div
                                  className="kit-icon is-fill"
                                  data-v-d93ab3f1=""
                                >
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M19 12H5"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M14 17L19 12"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M14 7L19 12"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="swiper-slide" data-v-5b1c4390="">
                          <div className="developer-item" data-v-5b1c4390="">
                            <div className="item-title" data-v-5b1c4390="">
                              Account abstraction
                            </div>
                            <div className="item-body" data-v-5b1c4390="">
                              Blockchain account abstraction is typically
                              achieved through smart contracts, which are
                              self-executing contracts with the terms of the
                              agreement written directly into code. Smart
                              contracts define the account&apos;s behavior and
                              specify the rules for interacting with it, such as
                              how to check the balance or transfer assets.
                              <br />
                              <br />
                              The Venom Blockchain provides developers greater
                              flexibility and modularity in their dApp designs
                              by abstracting the functionality of an account
                              into a smart contract.
                            </div>
                            <a
                              href="https://docs.venom.foundation/learn/accounts"
                              rel="noopener noreferrer"
                              target="_blank"
                              className="kit-read-more item-read-more"
                              data-v-5b1c4390=""
                              data-v-d93ab3f1=""
                            >
                              <div className="text" data-v-d93ab3f1="">
                                Read more
                              </div>
                              <div className="icon" data-v-d93ab3f1="">
                                <div
                                  className="kit-icon is-fill"
                                  data-v-d93ab3f1=""
                                >
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M19 12H5"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M14 17L19 12"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M14 7L19 12"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="swiper-slide" data-v-5b1c4390="">
                          <div className="developer-item" data-v-5b1c4390="">
                            <div className="item-title" data-v-5b1c4390="">
                              External messaging
                            </div>
                            <div className="item-body" data-v-5b1c4390="">
                              External messaging is a crucial feature in Venom
                              that allows the blockchain to interact with the
                              external world seamlessly. By bridging the gap
                              between off-chain and on-chain systems, the Venom
                              blockchain is able to receive data and events from
                              external sources and use that information to
                              trigger actions inside the blockchain network,
                              even if the sender doesn&apos;t have an on-chain
                              entity.
                              <br />
                              <br />
                              This powerful capability can support the off-chain
                              data-providing network in the Venom Blockchain.
                            </div>
                            <a
                              href="https://docs.venom.foundation/learn/messages-and-transactions"
                              rel="noopener noreferrer"
                              target="_blank"
                              className="kit-read-more item-read-more"
                              data-v-5b1c4390=""
                              data-v-d93ab3f1=""
                            >
                              <div className="text" data-v-d93ab3f1="">
                                Read more
                              </div>
                              <div className="icon" data-v-d93ab3f1="">
                                <div
                                  className="kit-icon is-fill"
                                  data-v-d93ab3f1=""
                                >
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M19 12H5"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M14 17L19 12"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M14 7L19 12"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="swiper-slide" data-v-5b1c4390="">
                          <div className="developer-item" data-v-5b1c4390="">
                            <div className="item-title" data-v-5b1c4390="">
                              Arbitrary workchains
                            </div>
                            <div className="item-body" data-v-5b1c4390="">
                              Workchains in the Venom blockchain offer a
                              flexible and efficient way of meeting the diverse
                              needs of different applications across industries.
                              With different levels of security, compliance, and
                              privacy requirements, workchains provide
                              specialized layer-1 blockchains that can cater to
                              specific needs. Public, private, and consortium
                              workchains offer a range of options for users to
                              choose from and customize based on their specific
                              requirements.
                            </div>
                            <a
                              href="https://docs.venom.foundation/learn/architecture"
                              rel="noopener noreferrer"
                              target="_blank"
                              className="kit-read-more item-read-more"
                              data-v-5b1c4390=""
                              data-v-d93ab3f1=""
                            >
                              <div className="text" data-v-d93ab3f1="">
                                Read more
                              </div>
                              <div className="icon" data-v-d93ab3f1="">
                                <div
                                  className="kit-icon is-fill"
                                  data-v-d93ab3f1=""
                                >
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M19 12H5"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M14 17L19 12"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M14 7L19 12"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="swiper-slide" data-v-5b1c4390="">
                          <div className="developer-item" data-v-5b1c4390="">
                            <div className="item-title" data-v-5b1c4390="">
                              T-Sol
                            </div>
                            <div className="item-body" data-v-5b1c4390="">
                              T-Sol is the developer-friendly language offering
                              unlimitless potential and ease of use. Due to the
                              fact that T-Sol is derived from Solidity,
                              developers with existing experience in C, C++,
                              Javascript, and C# can enduldge in a frictionless
                              onboarding due to syntax similarity.
                              <br />
                              <br />
                              T-Sol provides developers the tools to create
                              complex smart contracts that interact with other
                              Venom blockchain accounts.
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide" data-v-5b1c4390="">
                          <div className="developer-item" data-v-5b1c4390="">
                            <div className="item-title" data-v-5b1c4390="">
                              Locklift
                            </div>
                            <div className="item-body" data-v-5b1c4390="">
                              Locklift is a development framework aiming to help
                              users with Venom contract development. It is
                              designed to be modular and flexible, allowing
                              developers to choose the tools and libraries that
                              best fit their specific project needs. It includes
                              a wide range of features, including network
                              management, automated testing, a convenient
                              abstraction for Venom contracts, support for
                              custom accounts, key management, and an external
                              script runner to execute scripts in a specific
                              environment.
                            </div>
                            <a
                              href="https://docs.venom.foundation/build/development-guides/setting-up-the-venom-smart-contract-development-environment"
                              rel="noopener noreferrer"
                              target="_blank"
                              className="kit-read-more item-read-more"
                              data-v-5b1c4390=""
                              data-v-d93ab3f1=""
                            >
                              <div className="text" data-v-d93ab3f1="">
                                Read more
                              </div>
                              <div className="icon" data-v-d93ab3f1="">
                                <div
                                  className="kit-icon is-fill"
                                  data-v-d93ab3f1=""
                                >
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M19 12H5"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M14 17L19 12"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M14 7L19 12"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="swiper-slide" data-v-5b1c4390="">
                          <div className="developer-item" data-v-5b1c4390="">
                            <div className="item-title" data-v-5b1c4390="">
                              Documentation
                            </div>
                            <div className="item-body" data-v-5b1c4390="">
                              The Venom Knowledge Base is a comprehensive
                              resource for developers and enthusiasts who want
                              to learn about the Venom blockchain. It is an
                              entry point into the Venom universe that provides
                              clear and concise information about the various
                              aspects of the blockchain, including its
                              architecture, consensus mechanism, virtual
                              machine, and more.
                              <br />
                              <br />
                              Whether you are new to blockchain technology or an
                              experienced developer, the Venom Knowledge Base
                              offers valuable insights how the blockchain works
                              and how to use it effectively.
                            </div>
                            <a
                              href="https://docs.venom.foundation"
                              rel="noopener noreferrer"
                              target="_blank"
                              className="kit-read-more item-read-more"
                              data-v-5b1c4390=""
                              data-v-d93ab3f1=""
                            >
                              <div className="text" data-v-d93ab3f1="">
                                Read more
                              </div>
                              <div className="icon" data-v-d93ab3f1="">
                                <div
                                  className="kit-icon is-fill"
                                  data-v-d93ab3f1=""
                                >
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M19 12H5"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M14 17L19 12"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M14 7L19 12"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"></div>
                    </div>
                  </div>
                </div>
                <div
                  className="kit-spot right bottom"
                  data-v-abed6bf0=""
                  data-v-c951ae60=""
                ></div>
              </div>
              <div
                className="use-cases-block default-margin"
                data-v-b87b2b90=""
                data-v-a5255e30=""
              >
                <div className="wrapper extend" data-v-a5255e30="">
                  <div className="title" data-v-a5255e30="">
                    Use Cases
                  </div>
                  <div className="subtitle" data-v-a5255e30="">
                    Venom is a versatile and innovative blockchain that offers a
                    range of use cases across various industries.
                  </div>
                </div>
                <div className="controls scroll-wrapper" data-v-a5255e30="">
                  <div className="current control-item" data-v-a5255e30="">
                    DAO
                  </div>
                  <div className="control-item" data-v-a5255e30="">
                    SocialFi
                  </div>
                  <div className="control-item" data-v-a5255e30="">
                    DeFi
                  </div>
                  <div className="control-item" data-v-a5255e30="">
                    CBDC
                  </div>
                  <div className="control-item" data-v-a5255e30="">
                    DID
                  </div>
                  <div className="control-item" data-v-a5255e30="">
                    TradeFi
                  </div>
                  <div className="control-item" data-v-a5255e30="">
                    GameFi
                  </div>
                </div>
                <div className="wrapper" data-v-a5255e30="">
                  <div className="info-block" data-v-a5255e30="">
                    <div className="info padding-extend" data-v-a5255e30="">
                      <div className="info-title" data-v-a5255e30="">
                        DAO
                      </div>
                      <div className="info-text" data-v-a5255e30="">
                        DAOs (Decentralized Autonomous Organizations) are
                        organizations that run on a blockchain network, where
                        decisions are made through a voting system that&apos;s
                        open to anyone who holds the organization&apos;s tokens.
                        This means that members have a direct say in how the
                        organization operates, without needing a central
                        authority to make decisions for them.Some use cases for
                        DAOs include managing community projects, creating
                        decentralized investment funds, and even running online
                        social networks.
                      </div>
                    </div>
                    <div className="picture" data-v-a5255e30="">
                      <img
                        src="https://venom.foundation/_nuxt/DAO.e73eba23.svg"
                        alt="DAO icon"
                        data-v-a5255e30=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="explore_grants"
                className="explore-grants-block default-margin"
                data-v-b87b2b90=""
                data-v-0797090c=""
              >
                <div className="title wrapper extend" data-v-0797090c="">
                  Explore Grants
                </div>
                <div className="blocks scroll-wrapper" data-v-0797090c="">
                  <div className="block" data-v-0797090c="">
                    <div className="title-with-icon" data-v-0797090c="">
                      <div className="grant-icon" data-v-0797090c="">
                        <div className="kit-icon is-fill" data-v-0797090c="">
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M23.9924 25.0807C24.058 24.9468 24.1426 24.8232 24.2436 24.7136C24.9585 24.0953 28.9579 20.1055 27.4316 14.8695C26.9568 13.1763 25.9726 11.6701 24.6125 10.5554C23.2524 9.44069 21.5822 8.77145 19.8287 8.63849C17.9859 8.58594 16.17 9.0908 14.6188 10.0871C13.0675 11.0833 11.8531 12.5245 11.1343 14.2223C9.62724 17.8643 11.5593 22.2018 14.3222 24.6073C14.4551 24.7181 14.5664 24.8523 14.6507 25.0034L15.8389 29.2926H22.6882L23.9924 25.0807Z"
                              stroke="#11A97D"
                              strokeWidth="2"
                              strokeMiterlimit="10"
                            ></path>
                            <path
                              d="M15.9355 29.582L15.9549 32.6734L17.0079 35.0016H21.5676L22.6496 32.5381V29.582"
                              stroke="#11A97D"
                              strokeWidth="2"
                              strokeMiterlimit="10"
                            ></path>
                            <path
                              d="M15.9355 32.6348H22.6496"
                              stroke="#11A97D"
                              strokeWidth="2"
                              strokeMiterlimit="10"
                            ></path>
                            <path
                              d="M5 17.5625H7.38615"
                              stroke="#11A97D"
                              strokeWidth="2"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                            ></path>
                            <path
                              d="M9.21289 7.48828L10.8938 9.18853"
                              stroke="#11A97D"
                              strokeWidth="2"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                            ></path>
                            <path
                              d="M19.2676 3.33398L19.3062 5.72013"
                              stroke="#11A97D"
                              strokeWidth="2"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                            ></path>
                            <path
                              d="M29.3548 7.49805L27.6738 9.17898"
                              stroke="#11A97D"
                              strokeWidth="2"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                            ></path>
                            <path
                              d="M31.2676 17.574L33.6537 17.5547"
                              stroke="#11A97D"
                              strokeWidth="2"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="grant-title" data-v-0797090c="">
                        Idea
                      </div>
                    </div>
                    <div className="text" data-v-0797090c="">
                      Your project has a bright idea and a seasoned team to
                      bring to life a novel solution
                    </div>
                  </div>
                  <div className="block" data-v-0797090c="">
                    <div className="title-with-icon" data-v-0797090c="">
                      <div className="grant-icon" data-v-0797090c="">
                        <div className="kit-icon is-fill" data-v-0797090c="">
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_1419_10332)">
                              <path
                                d="M30.8011 36.1719H9.18701C9.14061 36.1733 9.09442 36.1653 9.05116 36.1484C9.00791 36.1316 8.96848 36.1062 8.9352 36.0739C8.90192 36.0415 8.87546 36.0028 8.85741 35.9601C8.83935 35.9173 8.83006 35.8713 8.83008 35.8249V4.18701C8.83008 4.09234 8.86768 4.00156 8.93462 3.93462C9.00156 3.86768 9.09234 3.83008 9.18701 3.83008L22.8297 3.98871C22.92 3.98868 23.0068 4.02387 23.0716 4.08682C23.1364 4.14977 23.1741 4.23551 23.1767 4.32581L23.0181 12.1188C23.0181 12.3072 23.0181 12.5055 23.2362 12.5154L31.3464 12.7335C31.4367 12.7386 31.5215 12.7788 31.5826 12.8455C31.6437 12.9121 31.6764 13 31.6736 13.0904L31.1481 35.8348C31.1456 35.9251 31.1079 36.0109 31.0431 36.0738C30.9783 36.1368 30.8915 36.172 30.8011 36.1719Z"
                                stroke="#11A97D"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                              ></path>
                              <path
                                d="M22.9492 3.97852L31.6444 12.9018"
                                stroke="#11A97D"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                              ></path>
                              <path
                                d="M15.7897 26.4453L13.192 23.7584C13.1641 23.7324 13.1418 23.7009 13.1266 23.666C13.1114 23.631 13.1035 23.5933 13.1035 23.5551C13.1035 23.517 13.1114 23.4793 13.1266 23.4443C13.1418 23.4093 13.1641 23.3779 13.192 23.3519L15.7599 20.8633"
                                stroke="#11A97D"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                              ></path>
                              <path
                                d="M24.8223 26.4453L27.41 23.7584C27.4393 23.7333 27.4629 23.7021 27.479 23.667C27.4951 23.6319 27.5035 23.5937 27.5035 23.5551C27.5035 23.5165 27.4951 23.4784 27.479 23.4433C27.4629 23.4082 27.4393 23.377 27.41 23.3519L24.852 20.8633"
                                stroke="#11A97D"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                              ></path>
                              <path
                                d="M19.1211 26.8821L21.2428 20.6953"
                                stroke="#11A97D"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_1419_10332">
                                <rect
                                  width="23.8449"
                                  height="33.3333"
                                  fill="white"
                                  transform="translate(8.33398 3.33398)"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <div className="grant-title" data-v-0797090c="">
                        MVP
                      </div>
                    </div>
                    <div className="text" data-v-0797090c="">
                      You’ve designed a Minimum Viable Product and are ready to
                      get your first users
                    </div>
                  </div>
                  <div className="block" data-v-0797090c="">
                    <div className="title-with-icon" data-v-0797090c="">
                      <div className="grant-icon" data-v-0797090c="">
                        <div className="kit-icon is-fill" data-v-0797090c="">
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.2988 28.8747L21.089 34.6429C21.099 34.6529 21.1109 34.6608 21.1239 34.6662C21.137 34.6717 21.1509 34.6745 21.1651 34.6745C21.1792 34.6745 21.1932 34.6717 21.2062 34.6662C21.2193 34.6608 21.2311 34.6529 21.2411 34.6429C22.6561 33.2271 23.9208 31.6687 25.015 29.9925C26.4012 27.8283 26.1061 26.7104 25.9093 23.9023"
                              stroke="#11A97D"
                              strokeWidth="2"
                              strokeMiterlimit="10"
                            ></path>
                            <path
                              d="M11.082 21.5499L5.41211 18.5629C5.39319 18.5404 5.38281 18.5119 5.38281 18.4825C5.38281 18.453 5.39319 18.4245 5.41211 18.402C6.90058 17.0736 8.50141 15.8767 10.1966 14.8248C12.2893 13.6175 13.5234 13.85 16.3136 14.154"
                              stroke="#11A97D"
                              strokeWidth="2"
                              strokeMiterlimit="10"
                            ></path>
                            <path
                              d="M16.4381 13.5996C16.4381 13.5996 23.8429 3.76228 34.9501 5.13056C34.9867 5.13445 35.0209 5.15077 35.0469 5.17681C35.073 5.20285 35.0893 5.23703 35.0932 5.27365C35.3793 9.74515 34.1989 17.9459 25.4794 24.2418C18.2088 29.4734 17.9673 29.1157 17.9673 29.1157C17.9673 29.1157 12.3511 27.4165 11.0723 21.8987C12.6813 19.0203 14.4736 16.2482 16.4381 13.5996Z"
                              stroke="#11A97D"
                              strokeWidth="2"
                              strokeMiterlimit="10"
                            ></path>
                            <path
                              d="M23.8703 19.2601C25.599 19.2601 27.0003 17.8587 27.0003 16.1301C27.0003 14.4014 25.599 13 23.8703 13C22.1416 13 20.7402 14.4014 20.7402 16.1301C20.7402 17.8587 22.1416 19.2601 23.8703 19.2601Z"
                              stroke="#11A97D"
                              strokeWidth="2"
                              strokeMiterlimit="10"
                            ></path>
                            <path
                              d="M26.5801 6.13281C26.7976 7.9584 27.6045 9.66327 28.8784 10.9889C30.2709 12.405 32.1159 13.2879 34.0922 13.484"
                              stroke="#11A97D"
                              strokeWidth="2"
                              strokeMiterlimit="10"
                            ></path>
                            <path
                              d="M9.13086 35.0007L13.665 30.5918"
                              stroke="#11A97D"
                              strokeWidth="2"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                            ></path>
                            <path
                              d="M5.55469 33.9354L10.0888 29.5176"
                              stroke="#11A97D"
                              strokeWidth="2"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                            ></path>
                            <path
                              d="M5 30.4218L9.5341 26.0039"
                              stroke="#11A97D"
                              strokeWidth="2"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="grant-title" data-v-0797090c="">
                        Launched
                      </div>
                    </div>
                    <div className="text" data-v-0797090c="">
                      Your product is well designed and already has live users
                    </div>
                  </div>
                </div>
                <div
                  className="kit-spot left bottom"
                  data-v-0797090c=""
                  data-v-c951ae60=""
                ></div>
              </div>
              <div
                className="process-overview-block default-margin"
                data-v-b87b2b90=""
                data-v-f88de825=""
              >
                <div className="title-roadmap" data-v-f88de825="">
                  <div className="text-block" data-v-f88de825="">
                    <div className="title" data-v-f88de825="">
                      Process Overview
                    </div>
                    <div className="subtitle" data-v-f88de825="">
                      Resourceful teams with passion in their hearts who strive
                      to implement new ideas into life
                    </div>
                  </div>
                  <div className="splitter" data-v-f88de825=""></div>
                  <div className="roadmap-wrapper" data-v-f88de825="">
                    <div
                      className="process-overview-roadmap roadmap"
                      data-v-f88de825=""
                      data-v-a551766b=""
                    >
                      <div className="stages split" data-v-a551766b="">
                        <div className="stage" data-v-a551766b="">
                          Stage 1
                        </div>
                        <div className="stage" data-v-a551766b="">
                          Stage 2
                        </div>
                        <div className="stage" data-v-a551766b="">
                          Stage 3
                        </div>
                      </div>
                      <div className="horizontal-compose" data-v-a551766b="">
                        <div
                          className="horizontal-line"
                          data-v-a551766b=""
                        ></div>
                        <div className="points split" data-v-a551766b="">
                          <div className="point" data-v-a551766b=""></div>
                          <div className="point" data-v-a551766b=""></div>
                          <div className="point" data-v-a551766b=""></div>
                        </div>
                      </div>
                      <div className="items split" data-v-a551766b="">
                        <div className="item" data-v-a551766b="">
                          <div className="item-title" data-v-a551766b="">
                            Pre-screening
                          </div>
                          <div className="item-text" data-v-a551766b="">
                            We review whether the submitted application fits the
                            basic criteria
                          </div>
                          <div className="item-time" data-v-a551766b="">
                            <div className="icon" data-v-a551766b="">
                              <div
                                className="kit-icon is-fill"
                                data-v-a551766b=""
                              >
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.99219 5.83398L9.99219 10.834H12.4922"
                                    stroke="#11A97D"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M10 2.5V2.5C5.8575 2.5 2.5 5.8575 2.5 10V10C2.5 14.1425 5.8575 17.5 10 17.5V17.5C14.1425 17.5 17.5 14.1425 17.5 10V10C17.5 5.8575 14.1425 2.5 10 2.5Z"
                                    stroke="#11A97D"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="time" data-v-a551766b="">
                              2-4 weeks
                            </div>
                          </div>
                        </div>
                        <div className="item" data-v-a551766b="">
                          <div className="item-title" data-v-a551766b="">
                            Pitch
                          </div>
                          <div className="item-text" data-v-a551766b="">
                            Tell us about your idea
                          </div>
                          <div className="item-time" data-v-a551766b="">
                            <div className="icon" data-v-a551766b="">
                              <div
                                className="kit-icon is-fill"
                                data-v-a551766b=""
                              >
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.99219 5.83398L9.99219 10.834H12.4922"
                                    stroke="#11A97D"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M10 2.5V2.5C5.8575 2.5 2.5 5.8575 2.5 10V10C2.5 14.1425 5.8575 17.5 10 17.5V17.5C14.1425 17.5 17.5 14.1425 17.5 10V10C17.5 5.8575 14.1425 2.5 10 2.5Z"
                                    stroke="#11A97D"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="time" data-v-a551766b="">
                              1 week
                            </div>
                          </div>
                        </div>
                        <div className="item" data-v-a551766b="">
                          <div className="item-title" data-v-a551766b="">
                            Approval
                          </div>
                          <div className="item-text" data-v-a551766b="">
                            We will notify you about our&nbsp;decision
                          </div>
                          <div className="item-time" data-v-a551766b="">
                            <div className="icon" data-v-a551766b="">
                              <div
                                className="kit-icon is-fill"
                                data-v-a551766b=""
                              >
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.99219 5.83398L9.99219 10.834H12.4922"
                                    stroke="#11A97D"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M10 2.5V2.5C5.8575 2.5 2.5 5.8575 2.5 10V10C2.5 14.1425 5.8575 17.5 10 17.5V17.5C14.1425 17.5 17.5 14.1425 17.5 10V10C17.5 5.8575 14.1425 2.5 10 2.5Z"
                                    stroke="#11A97D"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="time" data-v-a551766b="">
                              1 week
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="buttons wrapper" data-v-f88de825="">
                  <button
                    className="kit-button is-primary btn"
                    data-v-f88de825=""
                    data-v-d855b919=""
                  >
                    <div className="label" data-v-d855b919="">
                      Apply for grants
                    </div>
                  </button>
                  <a
                    href="https://venom.ventures"
                    rel="noopener noreferrer"
                    target="_blank"
                    data-v-f88de825=""
                  >
                    <button
                      className="kit-button is-secondary btn"
                      data-v-f88de825=""
                      data-v-d855b919=""
                    >
                      <div className="label" data-v-d855b919="">
                        Learn More
                      </div>
                    </button>
                  </a>
                </div>
              </div>
              <div
                className="wrapper extend default-margin"
                data-v-b87b2b90=""
                data-v-a7dd74ac=""
              >
                <div className="community-block" data-v-a7dd74ac="">
                  <div className="text" data-v-a7dd74ac="">
                    Join Venom community
                  </div>
                  <div
                    className="social-compose is-community"
                    data-v-a7dd74ac=""
                    data-v-465bfb6b=""
                  >
                    <a
                      href="https://discord.venom.foundation"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="social-media-item discord is-community"
                      aria-label="Discord"
                      data-v-465bfb6b=""
                    >
                      <div className="icon" data-v-465bfb6b="">
                        <div className="kit-icon is-fill" data-v-465bfb6b="">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.8695 5.75623C17.5692 5.16091 16.1964 4.73857 14.7864 4.5C14.5934 4.84494 14.4188 5.19983 14.2633 5.5632C12.7613 5.33686 11.2339 5.33686 9.73188 5.5632C9.5763 5.19987 9.40172 4.84498 9.20884 4.5C7.79786 4.74059 6.42423 5.16393 5.1226 5.75934C2.53854 9.5825 1.83804 13.3107 2.18829 16.986C3.70158 18.1041 5.39539 18.9544 7.19608 19.5C7.60154 18.9547 7.96032 18.3761 8.26862 17.7705C7.68305 17.5518 7.11788 17.282 6.57964 16.9642C6.72129 16.8615 6.85984 16.7556 6.99371 16.6529C8.55986 17.3894 10.2692 17.7713 11.9999 17.7713C13.7306 17.7713 15.44 17.3894 17.0062 16.6529C17.1416 16.7634 17.2801 16.8692 17.4202 16.9642C16.881 17.2825 16.3147 17.5529 15.7281 17.7721C16.0361 18.3774 16.3949 18.9555 16.8007 19.5C18.6029 18.9566 20.298 18.1067 21.8116 16.9875C22.2225 12.7254 21.1095 9.03144 18.8695 5.75623ZM8.71227 14.7257C7.73624 14.7257 6.92989 13.84 6.92989 12.7503C6.92989 11.6606 7.70822 10.7671 8.70915 10.7671C9.71009 10.7671 10.5102 11.6606 10.4931 12.7503C10.476 13.84 9.70697 14.7257 8.71227 14.7257ZM15.2876 14.7257C14.31 14.7257 13.5068 13.84 13.5068 12.7503C13.5068 11.6606 14.2851 10.7671 15.2876 10.7671C16.2901 10.7671 17.084 11.6606 17.0669 12.7503C17.0498 13.84 16.2823 14.7257 15.2876 14.7257Z"
                              fill="white"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div
                        className="tooltip"
                        style={{ width: "72px" }}
                        data-v-465bfb6b=""
                      >
                        <span data-v-465bfb6b="">Discord</span>
                      </div>
                    </a>
                    <a
                      href="https://twitter.com/venomfoundation"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="social-media-item twitter is-community"
                      aria-label="Twitter"
                      data-v-465bfb6b=""
                    >
                      <div className="icon" data-v-465bfb6b="">
                        <div className="kit-icon is-fill" data-v-465bfb6b="">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19.3402 8.23421C19.3515 8.39695 19.3515 8.55969 19.3515 8.72393C19.3515 13.7284 15.5417 19.5 8.5754 19.5V19.497C6.51753 19.5 4.50241 18.9105 2.77002 17.7991C3.06925 17.8351 3.36998 17.8531 3.67146 17.8539C5.37686 17.8554 7.0335 17.2831 8.37517 16.2295C6.75452 16.1987 5.33336 15.142 4.83689 13.5994C5.4046 13.7089 5.98957 13.6864 6.54678 13.5341C4.77989 13.1771 3.50872 11.6247 3.50872 9.82186C3.50872 9.80536 3.50872 9.78961 3.50872 9.77386C4.03519 10.0671 4.62465 10.2298 5.22761 10.2478C3.56347 9.13565 3.0505 6.92179 4.05544 5.1909C5.97832 7.557 8.81539 8.99541 11.8609 9.14765C11.5557 7.83224 11.9727 6.45382 12.9566 5.52913C14.482 4.09522 16.8811 4.16872 18.315 5.69337C19.1632 5.52613 19.9762 5.2149 20.7201 4.77393C20.4374 5.65062 19.8457 6.39533 19.0552 6.86855C19.8059 6.78005 20.5394 6.57907 21.2301 6.27234C20.7216 7.03429 20.0812 7.698 19.3402 8.23421Z"
                              fill="white"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div
                        className="tooltip"
                        style={{ width: "65px" }}
                        data-v-465bfb6b=""
                      >
                        <span data-v-465bfb6b="">Twitter</span>
                      </div>
                    </a>
                    <a
                      href="https://forum.venom.foundation"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="social-media-item dev-forum is-community"
                      aria-label="Forum"
                      data-v-465bfb6b=""
                    >
                      <div className="icon" data-v-465bfb6b="">
                        <div className="kit-icon is-fill" data-v-465bfb6b="">
                          <svg
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9.33333 23.9156V21H7C5.067 21 3.5 19.433 3.5 17.5V7C3.5 5.067 5.067 3.5 7 3.5H21C22.933 3.5 24.5 5.067 24.5 7V17.5C24.5 19.433 22.933 21 21 21H14.495L10.2811 24.3711C10.106 24.5112 9.86607 24.5385 9.66397 24.4413C9.46187 24.3442 9.33333 24.1398 9.33333 23.9156ZM11.325 8.50866C10.8693 8.05305 10.1307 8.05305 9.67504 8.50866C9.21943 8.96427 9.21943 9.70296 9.67504 10.1586L11.1834 11.667L9.67504 13.1753C9.21943 13.6309 9.21943 14.3696 9.67504 14.8252C10.1307 15.2809 10.8693 15.2809 11.325 14.8252L13.6583 12.4919C13.8771 12.2731 14 11.9764 14 11.667C14 11.3575 13.8771 11.0608 13.6583 10.842L11.325 8.50866ZM15.1667 14.0003C14.5223 14.0003 14 14.5226 14 15.167C14 15.8113 14.5223 16.3336 15.1667 16.3336H17.5C18.1443 16.3336 18.6667 15.8113 18.6667 15.167C18.6667 14.5226 18.1443 14.0003 17.5 14.0003H15.1667Z"
                              fill="white"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div
                        className="tooltip"
                        style={{ width: "63px" }}
                        data-v-465bfb6b=""
                      >
                        <span data-v-465bfb6b="">Forum</span>
                      </div>
                    </a>
                    <a
                      href="https://medium.com/@venom.foundation"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="social-media-item medium is-community"
                      aria-label="Medium"
                      data-v-465bfb6b=""
                    >
                      <div className="icon" data-v-465bfb6b="">
                        <div className="kit-icon is-fill" data-v-465bfb6b="">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.4708 12.0001C13.4708 15.6009 10.5716 18.5199 6.99542 18.5199C3.41923 18.5199 0.519775 15.6009 0.519775 12.0001C0.519775 8.39924 3.41901 5.47998 6.99542 5.47998C10.5718 5.47998 13.4708 8.39924 13.4708 12.0001Z"
                              fill="white"
                            ></path>
                            <path
                              d="M20.5746 12C20.5746 15.3894 19.125 18.1381 17.3368 18.1381C15.5486 18.1381 14.099 15.3894 14.099 12C14.099 8.61057 15.5484 5.86182 17.3366 5.86182C19.1248 5.86182 20.5744 8.60969 20.5744 12"
                              fill="white"
                            ></path>
                            <path
                              d="M23.4803 12.0003C23.4803 15.0364 22.9705 17.4991 22.3415 17.4991C21.7125 17.4991 21.203 15.037 21.203 12.0003C21.203 8.96355 21.7128 6.50146 22.3415 6.50146C22.9703 6.50146 23.4803 8.96333 23.4803 12.0003Z"
                              fill="white"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div
                        className="tooltip"
                        style={{ width: "77px" }}
                        data-v-465bfb6b=""
                      >
                        <span data-v-465bfb6b="">Medium</span>
                      </div>
                    </a>
                    <a
                      href="https://t.me/VenomFoundationOfficial"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="social-media-item telegram is-community"
                      aria-label="Telegram"
                      data-v-465bfb6b=""
                    >
                      <div className="icon" data-v-465bfb6b="">
                        <div className="kit-icon is-fill" data-v-465bfb6b="">
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M24.5901 25.2687V25.2662L24.6121 25.2136L28.282 6.71089V6.65215C28.282 6.19081 28.1107 5.78821 27.7411 5.54713C27.4169 5.33543 27.0436 5.32074 26.7817 5.34032C26.538 5.36237 26.2974 5.41162 26.0646 5.48717C25.9654 5.51918 25.8674 5.5551 25.7709 5.59486L25.755 5.60098L5.29439 13.6274L5.28827 13.6298C5.22606 13.6511 5.16518 13.676 5.10593 13.7045C4.96042 13.7698 4.82081 13.8476 4.68864 13.937C4.42554 14.1181 3.92504 14.5439 4.00948 15.2194C4.07923 15.7799 4.4647 16.1348 4.72535 16.3196C4.87921 16.4274 5.04462 16.5177 5.21852 16.5888L5.25767 16.6059L5.26991 16.6096L5.27848 16.6133L8.85909 17.8186C8.84685 18.0426 8.86888 18.2714 8.92884 18.4978L10.7216 25.3005C10.8195 25.6713 11.0312 26.0021 11.3268 26.2465C11.6224 26.4908 11.9871 26.6365 12.3697 26.6629C12.7523 26.6894 13.1336 26.5954 13.46 26.394C13.7864 26.1927 14.0416 25.8941 14.1896 25.5403L16.9895 22.5471L21.7975 26.2329L21.866 26.2623C22.3029 26.4532 22.7104 26.5132 23.0836 26.463C23.4569 26.4116 23.753 26.255 23.9757 26.0775C24.2333 25.8687 24.4387 25.6026 24.5754 25.3005L24.5852 25.2797L24.5888 25.2723L24.5901 25.2687ZM10.7032 18.0303C10.6834 17.9548 10.6881 17.875 10.7167 17.8024C10.7453 17.7298 10.7963 17.6682 10.8623 17.6265L23.0029 9.91705C23.0029 9.91705 23.7175 9.48262 23.6918 9.91705C23.6918 9.91705 23.8191 9.99292 23.4361 10.349C23.0739 10.688 14.7831 18.6924 13.9437 19.5025C13.897 19.5478 13.8643 19.6055 13.8494 19.6689L12.496 24.833L10.7032 18.0291V18.0303Z"
                              fill="#EEEEEE"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div
                        className="tooltip"
                        style={{ width: "89px" }}
                        data-v-465bfb6b=""
                      >
                        <span data-v-465bfb6b="">Telegram</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="block-wrapper default-margin"
                data-v-b87b2b90=""
                data-v-e61416f2=""
              >
                <div className="faq-block wrapper" data-v-e61416f2="">
                  <div className="text-section" data-v-e61416f2="">
                    <div className="title" data-v-e61416f2="">
                      Frequently asked
                      <br data-v-e61416f2="" />
                      questions
                    </div>
                    <div className="subtitle" data-v-e61416f2="">
                      General about Venom
                    </div>
                    <a
                      href="https://forum.venom.foundation"
                      rel="noopener noreferrer"
                      target="_blank"
                      data-v-e61416f2=""
                    >
                      <button
                        className="kit-button is-primary btn"
                        data-v-e61416f2=""
                        data-v-d855b919=""
                      >
                        <div className="label" data-v-d855b919="">
                          Ask us
                        </div>
                      </button>
                    </a>
                  </div>
                  <div
                    className="faq-component"
                    data-v-e61416f2=""
                    data-v-996c2376=""
                  >
                    <div className="is-open faq-item" data-v-996c2376="">
                      <div className="item-head" data-v-996c2376="">
                        <div className="head-name" data-v-996c2376="">
                          What is the Mission of Venom Foundation?
                        </div>
                        <div className="control" data-v-996c2376="">
                          <span data-v-996c2376=""></span>
                          <span data-v-996c2376=""></span>
                        </div>
                      </div>
                      <div
                        style={{
                          transition: "height 300ms ease-in-out 0s",
                          height: "112px",
                        }}
                        className="slide-up-down__container"
                        aria-hidden="false"
                        data-v-996c2376=""
                      >
                        <div className="item-content" data-v-996c2376="">
                          The mission of Venom Foundation is to bring
                          transparency and innovation to the industry as a
                          leading global blockchain company. We aim to provide
                          infrastructure for governments and web3 projects while
                          empowering emerging economies in the Middle East and
                          North Africa with our unique technology.
                        </div>
                      </div>
                      <div className="splitter" data-v-996c2376="">
                        <div className="splitter-line" data-v-996c2376=""></div>
                        <div
                          className="splitter-gradient-line"
                          data-v-996c2376=""
                        ></div>
                      </div>
                    </div>
                    <div className="faq-item" data-v-996c2376="">
                      <div className="item-head" data-v-996c2376="">
                        <div className="head-name" data-v-996c2376="">
                          Is Venom Foundation Licensed?
                        </div>
                        <div className="control" data-v-996c2376="">
                          <span data-v-996c2376=""></span>
                          <span data-v-996c2376=""></span>
                        </div>
                      </div>
                      <div
                        style={{
                          transition: "height 300ms ease-in-out 0s",
                          height: "0px",
                          overflowY: "hidden",
                        }}
                        className="slide-up-down__container"
                        aria-hidden="true"
                        tabIndex={-1}
                        data-v-996c2376=""
                      >
                        <div className="item-content" data-v-996c2376="">
                          Yes, the Venom Foundation is licensed under the Abu
                          Dhabi Global Market (ADGM) framework, showcasing its
                          commitment to maintaining the highest level of
                          governance and regulatory compliance. This ensures
                          trust for our clients, as the Foundation adheres to
                          international laws and regulations.
                        </div>
                      </div>
                      <div className="pointer splitter" data-v-996c2376="">
                        <div className="splitter-line" data-v-996c2376=""></div>
                        <div
                          className="splitter-gradient-line"
                          data-v-996c2376=""
                        ></div>
                      </div>
                    </div>
                    <div className="faq-item" data-v-996c2376="">
                      <div className="item-head" data-v-996c2376="">
                        <div className="head-name" data-v-996c2376="">
                          Can I use my Metamask wallet with Venom?
                        </div>
                        <div className="control" data-v-996c2376="">
                          <span data-v-996c2376=""></span>
                          <span data-v-996c2376=""></span>
                        </div>
                      </div>
                      <div
                        style={{
                          transition: "height 300ms ease-in-out 0s",
                          height: "0px",
                          overflowY: "hidden",
                        }}
                        className="slide-up-down__container"
                        aria-hidden="true"
                        tabIndex={-1}
                        data-v-996c2376=""
                      >
                        <div className="item-content" data-v-996c2376="">
                          MetaMask cannot be used for the Venom blockchain as
                          they do not support the Venom Network. Please download
                          the non-custodial Venom wallet to send and receive
                          tokens.
                        </div>
                      </div>
                      <div className="pointer splitter" data-v-996c2376="">
                        <div className="splitter-line" data-v-996c2376=""></div>
                        <div
                          className="splitter-gradient-line"
                          data-v-996c2376=""
                        ></div>
                      </div>
                    </div>
                    <div className="faq-item" data-v-996c2376="">
                      <div className="item-head" data-v-996c2376="">
                        <div className="head-name" data-v-996c2376="">
                          Is the Venom Blockchain EVM compatible?
                        </div>
                        <div className="control" data-v-996c2376="">
                          <span data-v-996c2376=""></span>
                          <span data-v-996c2376=""></span>
                        </div>
                      </div>
                      <div
                        style={{
                          transition: "height 300ms ease-in-out 0s",
                          height: "0px",
                          overflowY: "hidden",
                        }}
                        className="slide-up-down__container"
                        aria-hidden="true"
                        tabIndex={-1}
                        data-v-996c2376=""
                      >
                        <div className="item-content" data-v-996c2376="">
                          Currently, the Venom blockchain only has one virtual
                          machine, which is the Threaded Virtual Machine.
                          However, adding an EVM-based workchain to the Venom
                          blockchain would provide a boost to both blockchains.
                          This would enable a large number of Ethereum smart
                          contracts to be executed on Venom.
                        </div>
                      </div>
                      <div className="pointer splitter" data-v-996c2376="">
                        <div className="splitter-line" data-v-996c2376=""></div>
                        <div
                          className="splitter-gradient-line"
                          data-v-996c2376=""
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="kit-spot top right"
                  data-v-e61416f2=""
                  data-v-c951ae60=""
                ></div>
              </div>
              <div
                className="publications-block wrapper extend publications-margin"
                data-v-b87b2b90=""
                data-v-311f16dc=""
              >
                <a
                  href="https://cointelegraph.com/news/abu-dhabi-based-venom-foundation-launches-1b-fund-for-web3-and-blockchain"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="publication-item"
                  data-v-311f16dc=""
                >
                  <img
                    src="https://venom.foundation/_nuxt/1.29fa28b6.webp"
                    alt="Publication item"
                    data-v-311f16dc=""
                  />
                </a>
                <a
                  href="https://techcrunch.com/2023/01/11/venom-foundation-and-iceberg-capital-launch-1b-venture-fund-to-invest-in-web3"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="publication-item"
                  data-v-311f16dc=""
                >
                  <img
                    src="https://venom.foundation/_nuxt/2.6c23e285.webp"
                    alt="Publication item"
                    data-v-311f16dc=""
                  />
                </a>
                <a
                  href="https://www.reuters.com/markets/currencies/venom-iceberg-set-up-1-bln-fund-invest-blockchain-firms-amid-crypto-winter-2023-01-11"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="publication-item"
                  data-v-311f16dc=""
                >
                  <img
                    src="https://venom.foundation/_nuxt/3.527c6779.webp"
                    alt="Publication item"
                    data-v-311f16dc=""
                  />
                </a>
                <a
                  href="https://www.investing.com/news/cryptocurrency-news/abu-dhabibased-venom-foundation-launches-1b-fund-for-web3-and-blockchain-2978371"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="publication-item"
                  data-v-311f16dc=""
                >
                  <img
                    src="https://venom.foundation/_nuxt/4.6affe21f.webp"
                    alt="Publication item"
                    data-v-311f16dc=""
                  />
                </a>
                <a
                  href="https://www.theblock.co/post/200959/uae-investor-groups-launch-billion-dollar-web3-fund"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="publication-item"
                  data-v-311f16dc=""
                >
                  <img
                    src="https://venom.foundation/_nuxt/5.63fef169.webp"
                    alt="Publication item"
                    data-v-311f16dc=""
                  />
                </a>
                <a
                  href="https://www.entrepreneur.com/en-in/technology/the-first-adgm-licensed-blockchain-is-also-the-most/436898"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="publication-item"
                  data-v-311f16dc=""
                >
                  <img
                    src="https://venom.foundation/_nuxt/6.fc49b16a.webp"
                    alt="Publication item"
                    data-v-311f16dc=""
                  />
                </a>
                <a
                  href="https://thedefiant.io/venom-foundation-in-partnership-with-iceberg-capital-launches-1-billion-venom-ventures-fund"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="publication-item"
                  data-v-311f16dc=""
                >
                  <img
                    src="https://venom.foundation/_nuxt/7.5c104520.webp"
                    alt="Publication item"
                    data-v-311f16dc=""
                  />
                </a>
                <a
                  href="https://news.bitcoin.com/venom-foundation-and-hub71-partner-to-accelerate-growth-and-adoption-of-blockchain-technologies-from-abu-dhabi"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="publication-item"
                  data-v-311f16dc=""
                >
                  <img
                    src="https://venom.foundation/_nuxt/8.f6e79674.webp"
                    alt="Publication item"
                    data-v-311f16dc=""
                  />
                </a>
              </div>
              <div
                className="stay-ahead-block wrapper extend default-margin"
                data-v-b87b2b90=""
                data-v-f1d976bb=""
              >
                <div className="title" data-v-f1d976bb="">
                  Subscribe To Our Newsletter
                </div>
                <div className="subtitle" data-v-f1d976bb="">
                  Stay up to date for the latest crypto news, courses &amp;
                  more!
                </div>
                <div className="email-and-button" data-v-f1d976bb="">
                  <div
                    className="email-compose email-input"
                    data-v-f1d976bb=""
                    data-v-5acf3522=""
                  >
                    <div
                      className="kit-email-input email-input"
                      data-v-5acf3522=""
                      data-v-e4e68729=""
                    >
                      <input
                        value=""
                        placeholder="Your email"
                        type="email"
                        inputMode="email"
                        data-v-e4e68729=""
                      />
                    </div>
                  </div>
                  <button
                    className="kit-button is-primary is-disabled"
                    data-v-f1d976bb=""
                    data-v-d855b919=""
                  >
                    <div className="label" data-v-d855b919="">
                      Subscribe
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <footer
              className="footer-block default-margin"
              data-v-82da5e0f=""
              data-v-3a846a5e=""
            >
              <div
                className="footer-desktop wrapper extend is-desktop"
                data-v-3a846a5e=""
                data-v-3bb034d2=""
              >
                <div className="footer-flex-container" data-v-3bb034d2="">
                  <div className="venom-information" data-v-3bb034d2="">
                    <a
                      aria-current="page"
                      href="#"
                      className="router-link-active router-link-exact-active logo-component pointer logo"
                      aria-label="Venom main page"
                      data-v-3bb034d2=""
                      data-v-10402e2e=""
                    >
                      <img
                        src="https://venom.foundation/_nuxt/Logo.8cbf5be7.svg"
                        alt="Venom logo"
                        className="Venom logo"
                        data-v-10402e2e=""
                      />
                      <img
                        src="https://venom.foundation/_nuxt/LogoHover.bd77be5b.svg"
                        alt="Venom logo hover state"
                        className="logo-hover"
                        data-v-10402e2e=""
                      />
                    </a>
                    <div
                      className="footer-disclaimer disclaimer"
                      data-v-3bb034d2=""
                      data-v-79c3f820=""
                    >
                      Venom Foundation is licensed under the Abu Dhabi Global
                      Market (ADGM) framework is and dedicated to the
                      development and launch of the Venom blockchain, providing
                      scalable and secure solutions for real-world applications.
                      To learn more about our policies, click on
                      <a
                        href="/privacy-policy"
                        className="link"
                        data-v-79c3f820=""
                      >
                        Privacy&nbsp;Policy
                      </a>
                    </div>
                    <div
                      className="social-compose is-medium socials"
                      data-v-3bb034d2=""
                      data-v-465bfb6b=""
                    >
                      <a
                        href="https://discord.venom.foundation"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="social-media-item discord is-medium"
                        aria-label="Discord"
                        data-v-465bfb6b=""
                      >
                        <div className="icon" data-v-465bfb6b="">
                          <div className="kit-icon is-fill" data-v-465bfb6b="">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M18.8695 5.75623C17.5692 5.16091 16.1964 4.73857 14.7864 4.5C14.5934 4.84494 14.4188 5.19983 14.2633 5.5632C12.7613 5.33686 11.2339 5.33686 9.73188 5.5632C9.5763 5.19987 9.40172 4.84498 9.20884 4.5C7.79786 4.74059 6.42423 5.16393 5.1226 5.75934C2.53854 9.5825 1.83804 13.3107 2.18829 16.986C3.70158 18.1041 5.39539 18.9544 7.19608 19.5C7.60154 18.9547 7.96032 18.3761 8.26862 17.7705C7.68305 17.5518 7.11788 17.282 6.57964 16.9642C6.72129 16.8615 6.85984 16.7556 6.99371 16.6529C8.55986 17.3894 10.2692 17.7713 11.9999 17.7713C13.7306 17.7713 15.44 17.3894 17.0062 16.6529C17.1416 16.7634 17.2801 16.8692 17.4202 16.9642C16.881 17.2825 16.3147 17.5529 15.7281 17.7721C16.0361 18.3774 16.3949 18.9555 16.8007 19.5C18.6029 18.9566 20.298 18.1067 21.8116 16.9875C22.2225 12.7254 21.1095 9.03144 18.8695 5.75623ZM8.71227 14.7257C7.73624 14.7257 6.92989 13.84 6.92989 12.7503C6.92989 11.6606 7.70822 10.7671 8.70915 10.7671C9.71009 10.7671 10.5102 11.6606 10.4931 12.7503C10.476 13.84 9.70697 14.7257 8.71227 14.7257ZM15.2876 14.7257C14.31 14.7257 13.5068 13.84 13.5068 12.7503C13.5068 11.6606 14.2851 10.7671 15.2876 10.7671C16.2901 10.7671 17.084 11.6606 17.0669 12.7503C17.0498 13.84 16.2823 14.7257 15.2876 14.7257Z"
                                fill="white"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </a>
                      <a
                        href="https://twitter.com/venomfoundation"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="social-media-item twitter is-medium"
                        aria-label="Twitter"
                        data-v-465bfb6b=""
                      >
                        <div className="icon" data-v-465bfb6b="">
                          <div className="kit-icon is-fill" data-v-465bfb6b="">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19.3402 8.23421C19.3515 8.39695 19.3515 8.55969 19.3515 8.72393C19.3515 13.7284 15.5417 19.5 8.5754 19.5V19.497C6.51753 19.5 4.50241 18.9105 2.77002 17.7991C3.06925 17.8351 3.36998 17.8531 3.67146 17.8539C5.37686 17.8554 7.0335 17.2831 8.37517 16.2295C6.75452 16.1987 5.33336 15.142 4.83689 13.5994C5.4046 13.7089 5.98957 13.6864 6.54678 13.5341C4.77989 13.1771 3.50872 11.6247 3.50872 9.82186C3.50872 9.80536 3.50872 9.78961 3.50872 9.77386C4.03519 10.0671 4.62465 10.2298 5.22761 10.2478C3.56347 9.13565 3.0505 6.92179 4.05544 5.1909C5.97832 7.557 8.81539 8.99541 11.8609 9.14765C11.5557 7.83224 11.9727 6.45382 12.9566 5.52913C14.482 4.09522 16.8811 4.16872 18.315 5.69337C19.1632 5.52613 19.9762 5.2149 20.7201 4.77393C20.4374 5.65062 19.8457 6.39533 19.0552 6.86855C19.8059 6.78005 20.5394 6.57907 21.2301 6.27234C20.7216 7.03429 20.0812 7.698 19.3402 8.23421Z"
                                fill="white"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </a>
                      <a
                        href="https://forum.venom.foundation"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="social-media-item dev-forum is-medium"
                        aria-label="Forum"
                        data-v-465bfb6b=""
                      >
                        <div className="icon" data-v-465bfb6b="">
                          <div className="kit-icon is-fill" data-v-465bfb6b="">
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.33333 23.9156V21H7C5.067 21 3.5 19.433 3.5 17.5V7C3.5 5.067 5.067 3.5 7 3.5H21C22.933 3.5 24.5 5.067 24.5 7V17.5C24.5 19.433 22.933 21 21 21H14.495L10.2811 24.3711C10.106 24.5112 9.86607 24.5385 9.66397 24.4413C9.46187 24.3442 9.33333 24.1398 9.33333 23.9156ZM11.325 8.50866C10.8693 8.05305 10.1307 8.05305 9.67504 8.50866C9.21943 8.96427 9.21943 9.70296 9.67504 10.1586L11.1834 11.667L9.67504 13.1753C9.21943 13.6309 9.21943 14.3696 9.67504 14.8252C10.1307 15.2809 10.8693 15.2809 11.325 14.8252L13.6583 12.4919C13.8771 12.2731 14 11.9764 14 11.667C14 11.3575 13.8771 11.0608 13.6583 10.842L11.325 8.50866ZM15.1667 14.0003C14.5223 14.0003 14 14.5226 14 15.167C14 15.8113 14.5223 16.3336 15.1667 16.3336H17.5C18.1443 16.3336 18.6667 15.8113 18.6667 15.167C18.6667 14.5226 18.1443 14.0003 17.5 14.0003H15.1667Z"
                                fill="white"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </a>
                      <a
                        href="https://medium.com/@venom.foundation"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="social-media-item medium is-medium"
                        aria-label="Medium"
                        data-v-465bfb6b=""
                      >
                        <div className="icon" data-v-465bfb6b="">
                          <div className="kit-icon is-fill" data-v-465bfb6b="">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.4708 12.0001C13.4708 15.6009 10.5716 18.5199 6.99542 18.5199C3.41923 18.5199 0.519775 15.6009 0.519775 12.0001C0.519775 8.39924 3.41901 5.47998 6.99542 5.47998C10.5718 5.47998 13.4708 8.39924 13.4708 12.0001Z"
                                fill="white"
                              ></path>
                              <path
                                d="M20.5746 12C20.5746 15.3894 19.125 18.1381 17.3368 18.1381C15.5486 18.1381 14.099 15.3894 14.099 12C14.099 8.61057 15.5484 5.86182 17.3366 5.86182C19.1248 5.86182 20.5744 8.60969 20.5744 12"
                                fill="white"
                              ></path>
                              <path
                                d="M23.4803 12.0003C23.4803 15.0364 22.9705 17.4991 22.3415 17.4991C21.7125 17.4991 21.203 15.037 21.203 12.0003C21.203 8.96355 21.7128 6.50146 22.3415 6.50146C22.9703 6.50146 23.4803 8.96333 23.4803 12.0003Z"
                                fill="white"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </a>
                      <a
                        href="https://t.me/VenomFoundationOfficial"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="social-media-item telegram is-medium"
                        aria-label="Telegram"
                        data-v-465bfb6b=""
                      >
                        <div className="icon" data-v-465bfb6b="">
                          <div className="kit-icon is-fill" data-v-465bfb6b="">
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24.5901 25.2687V25.2662L24.6121 25.2136L28.282 6.71089V6.65215C28.282 6.19081 28.1107 5.78821 27.7411 5.54713C27.4169 5.33543 27.0436 5.32074 26.7817 5.34032C26.538 5.36237 26.2974 5.41162 26.0646 5.48717C25.9654 5.51918 25.8674 5.5551 25.7709 5.59486L25.755 5.60098L5.29439 13.6274L5.28827 13.6298C5.22606 13.6511 5.16518 13.676 5.10593 13.7045C4.96042 13.7698 4.82081 13.8476 4.68864 13.937C4.42554 14.1181 3.92504 14.5439 4.00948 15.2194C4.07923 15.7799 4.4647 16.1348 4.72535 16.3196C4.87921 16.4274 5.04462 16.5177 5.21852 16.5888L5.25767 16.6059L5.26991 16.6096L5.27848 16.6133L8.85909 17.8186C8.84685 18.0426 8.86888 18.2714 8.92884 18.4978L10.7216 25.3005C10.8195 25.6713 11.0312 26.0021 11.3268 26.2465C11.6224 26.4908 11.9871 26.6365 12.3697 26.6629C12.7523 26.6894 13.1336 26.5954 13.46 26.394C13.7864 26.1927 14.0416 25.8941 14.1896 25.5403L16.9895 22.5471L21.7975 26.2329L21.866 26.2623C22.3029 26.4532 22.7104 26.5132 23.0836 26.463C23.4569 26.4116 23.753 26.255 23.9757 26.0775C24.2333 25.8687 24.4387 25.6026 24.5754 25.3005L24.5852 25.2797L24.5888 25.2723L24.5901 25.2687ZM10.7032 18.0303C10.6834 17.9548 10.6881 17.875 10.7167 17.8024C10.7453 17.7298 10.7963 17.6682 10.8623 17.6265L23.0029 9.91705C23.0029 9.91705 23.7175 9.48262 23.6918 9.91705C23.6918 9.91705 23.8191 9.99292 23.4361 10.349C23.0739 10.688 14.7831 18.6924 13.9437 19.5025C13.897 19.5478 13.8643 19.6055 13.8494 19.6689L12.496 24.833L10.7032 18.0291V18.0303Z"
                                fill="#EEEEEE"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="columns-wrapper" data-v-3bb034d2="">
                    <div className="column" data-v-3bb034d2="">
                      <div className="column-title" data-v-3bb034d2="">
                        Venom
                      </div>
                      <div className="column-links" data-v-3bb034d2="">
                        <a
                          href="/Venom_Whitepaper.pdf"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="footer-link link"
                          data-v-3bb034d2=""
                          data-v-03a024e4=""
                        >
                          <div className="text" data-v-03a024e4="">
                            Whitepaper
                          </div>
                          <div className="icon" data-v-03a024e4="">
                            <div
                              className="kit-icon is-fill"
                              data-v-03a024e4=""
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.33716 5.084C7.92295 5.08108 7.58481 5.41449 7.58189 5.8287C7.57897 6.2429 7.91238 6.58105 8.32658 6.58397L12.3268 6.61217L5.34467 13.5943C5.05178 13.8872 5.05178 14.3621 5.34467 14.655C5.63756 14.9479 6.11244 14.9479 6.40533 14.655L13.3865 7.67388L13.4152 11.6727C13.4182 12.0869 13.7564 12.4203 14.1706 12.4173C14.5848 12.4143 14.9182 12.0761 14.9152 11.6619L14.8739 5.91626C14.8852 5.71071 14.8124 5.50137 14.6553 5.34435C14.5064 5.19538 14.3103 5.12218 14.1151 5.12474L8.33716 5.084Z"
                                  fill="white"
                                  fillOpacity="0.4"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </a>
                        <a
                          href="mailto:pr@venomtech.io"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="footer-link link"
                          data-v-3bb034d2=""
                          data-v-03a024e4=""
                        >
                          <div className="text" data-v-03a024e4="">
                            Media Inquiries
                          </div>
                          <div className="icon" data-v-03a024e4="">
                            <div
                              className="kit-icon is-fill"
                              data-v-03a024e4=""
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.33716 5.084C7.92295 5.08108 7.58481 5.41449 7.58189 5.8287C7.57897 6.2429 7.91238 6.58105 8.32658 6.58397L12.3268 6.61217L5.34467 13.5943C5.05178 13.8872 5.05178 14.3621 5.34467 14.655C5.63756 14.9479 6.11244 14.9479 6.40533 14.655L13.3865 7.67388L13.4152 11.6727C13.4182 12.0869 13.7564 12.4203 14.1706 12.4173C14.5848 12.4143 14.9182 12.0761 14.9152 11.6619L14.8739 5.91626C14.8852 5.71071 14.8124 5.50137 14.6553 5.34435C14.5064 5.19538 14.3103 5.12218 14.1151 5.12474L8.33716 5.084Z"
                                  fill="white"
                                  fillOpacity="0.4"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="column" data-v-3bb034d2="">
                      <div className="column-title" data-v-3bb034d2="">
                        Develop
                      </div>
                      <div className="column-links" data-v-3bb034d2="">
                        <a
                          href="https://docs.venom.foundation"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="footer-link link"
                          data-v-3bb034d2=""
                          data-v-03a024e4=""
                        >
                          <div className="text" data-v-03a024e4="">
                            Docs
                          </div>
                          <div className="icon" data-v-03a024e4="">
                            <div
                              className="kit-icon is-fill"
                              data-v-03a024e4=""
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.33716 5.084C7.92295 5.08108 7.58481 5.41449 7.58189 5.8287C7.57897 6.2429 7.91238 6.58105 8.32658 6.58397L12.3268 6.61217L5.34467 13.5943C5.05178 13.8872 5.05178 14.3621 5.34467 14.655C5.63756 14.9479 6.11244 14.9479 6.40533 14.655L13.3865 7.67388L13.4152 11.6727C13.4182 12.0869 13.7564 12.4203 14.1706 12.4173C14.5848 12.4143 14.9182 12.0761 14.9152 11.6619L14.8739 5.91626C14.8852 5.71071 14.8124 5.50137 14.6553 5.34435C14.5064 5.19538 14.3103 5.12218 14.1151 5.12474L8.33716 5.084Z"
                                  fill="white"
                                  fillOpacity="0.4"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </a>
                        <a
                          href="https://github.com/venom-blockchain"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="footer-link link"
                          data-v-3bb034d2=""
                          data-v-03a024e4=""
                        >
                          <div className="text" data-v-03a024e4="">
                            Github
                          </div>
                          <div className="icon" data-v-03a024e4="">
                            <div
                              className="kit-icon is-fill"
                              data-v-03a024e4=""
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.33716 5.084C7.92295 5.08108 7.58481 5.41449 7.58189 5.8287C7.57897 6.2429 7.91238 6.58105 8.32658 6.58397L12.3268 6.61217L5.34467 13.5943C5.05178 13.8872 5.05178 14.3621 5.34467 14.655C5.63756 14.9479 6.11244 14.9479 6.40533 14.655L13.3865 7.67388L13.4152 11.6727C13.4182 12.0869 13.7564 12.4203 14.1706 12.4173C14.5848 12.4143 14.9182 12.0761 14.9152 11.6619L14.8739 5.91626C14.8852 5.71071 14.8124 5.50137 14.6553 5.34435C14.5064 5.19538 14.3103 5.12218 14.1151 5.12474L8.33716 5.084Z"
                                  fill="white"
                                  fillOpacity="0.4"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="column" data-v-3bb034d2="">
                      <div className="column-title" data-v-3bb034d2="">
                        Participate
                      </div>
                      <div className="column-links" data-v-3bb034d2="">
                        <a
                          href="/terms-of-use"
                          className="footer-link link"
                          data-v-3bb034d2=""
                          data-v-03a024e4=""
                        >
                          <div className="text" data-v-03a024e4="">
                            Terms of Use
                          </div>
                        </a>
                        <a
                          href="/cookie-policy"
                          className="footer-link link"
                          data-v-3bb034d2=""
                          data-v-03a024e4=""
                        >
                          <div className="text" data-v-03a024e4="">
                            Cookie Policy
                          </div>
                        </a>
                        <a
                          href="/privacy-policy"
                          className="footer-link link"
                          data-v-3bb034d2=""
                          data-v-03a024e4=""
                        >
                          <div className="text" data-v-03a024e4="">
                            Privacy Policy
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="footer-disclaimer bottom-disclaimer"
                  data-v-3bb034d2=""
                  data-v-79c3f820=""
                >
                  Venom Foundation is licensed under the Abu Dhabi Global Market
                  (ADGM) framework is and dedicated to the development and
                  launch of the Venom blockchain, providing scalable and secure
                  solutions for real-world applications. To learn more about our
                  policies, click on
                  <a href="/privacy-policy" className="link" data-v-79c3f820="">
                    Privacy&nbsp;Policy
                  </a>
                </div>
                <div
                  className="footer-copyright copyright"
                  data-v-3bb034d2=""
                  data-v-a6d462e3=""
                >
                  Venom ©2023 All Rights Reserved
                </div>
              </div>
              <div
                className="footer-mobile wrapper is-mobile"
                data-v-3a846a5e=""
                data-v-c3851004=""
              >
                <div className="logo-socials" data-v-c3851004="">
                  <div className="logo" data-v-c3851004="">
                    <a
                      aria-current="page"
                      href="#"
                      className="router-link-active router-link-exact-active logo-component pointer"
                      aria-label="Venom main page"
                      data-v-c3851004=""
                      data-v-10402e2e=""
                    >
                      <img
                        src="https://venom.foundation/_nuxt/Logo.8cbf5be7.svg"
                        alt="Venom logo"
                        className="Venom logo"
                        data-v-10402e2e=""
                      />
                      <img
                        src="https://venom.foundation/_nuxt/LogoHover.bd77be5b.svg"
                        alt="Venom logo hover state"
                        className="logo-hover"
                        data-v-10402e2e=""
                      />
                    </a>
                  </div>
                  <div
                    className="social-compose is-small"
                    data-v-c3851004=""
                    data-v-465bfb6b=""
                  >
                    <a
                      href="https://discord.venom.foundation"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="social-media-item discord is-small"
                      aria-label="Discord"
                      data-v-465bfb6b=""
                    >
                      <div className="icon" data-v-465bfb6b="">
                        <div className="kit-icon is-fill" data-v-465bfb6b="">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.8695 5.75623C17.5692 5.16091 16.1964 4.73857 14.7864 4.5C14.5934 4.84494 14.4188 5.19983 14.2633 5.5632C12.7613 5.33686 11.2339 5.33686 9.73188 5.5632C9.5763 5.19987 9.40172 4.84498 9.20884 4.5C7.79786 4.74059 6.42423 5.16393 5.1226 5.75934C2.53854 9.5825 1.83804 13.3107 2.18829 16.986C3.70158 18.1041 5.39539 18.9544 7.19608 19.5C7.60154 18.9547 7.96032 18.3761 8.26862 17.7705C7.68305 17.5518 7.11788 17.282 6.57964 16.9642C6.72129 16.8615 6.85984 16.7556 6.99371 16.6529C8.55986 17.3894 10.2692 17.7713 11.9999 17.7713C13.7306 17.7713 15.44 17.3894 17.0062 16.6529C17.1416 16.7634 17.2801 16.8692 17.4202 16.9642C16.881 17.2825 16.3147 17.5529 15.7281 17.7721C16.0361 18.3774 16.3949 18.9555 16.8007 19.5C18.6029 18.9566 20.298 18.1067 21.8116 16.9875C22.2225 12.7254 21.1095 9.03144 18.8695 5.75623ZM8.71227 14.7257C7.73624 14.7257 6.92989 13.84 6.92989 12.7503C6.92989 11.6606 7.70822 10.7671 8.70915 10.7671C9.71009 10.7671 10.5102 11.6606 10.4931 12.7503C10.476 13.84 9.70697 14.7257 8.71227 14.7257ZM15.2876 14.7257C14.31 14.7257 13.5068 13.84 13.5068 12.7503C13.5068 11.6606 14.2851 10.7671 15.2876 10.7671C16.2901 10.7671 17.084 11.6606 17.0669 12.7503C17.0498 13.84 16.2823 14.7257 15.2876 14.7257Z"
                              fill="white"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://twitter.com/venomfoundation"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="social-media-item twitter is-small"
                      aria-label="Twitter"
                      data-v-465bfb6b=""
                    >
                      <div className="icon" data-v-465bfb6b="">
                        <div className="kit-icon is-fill" data-v-465bfb6b="">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19.3402 8.23421C19.3515 8.39695 19.3515 8.55969 19.3515 8.72393C19.3515 13.7284 15.5417 19.5 8.5754 19.5V19.497C6.51753 19.5 4.50241 18.9105 2.77002 17.7991C3.06925 17.8351 3.36998 17.8531 3.67146 17.8539C5.37686 17.8554 7.0335 17.2831 8.37517 16.2295C6.75452 16.1987 5.33336 15.142 4.83689 13.5994C5.4046 13.7089 5.98957 13.6864 6.54678 13.5341C4.77989 13.1771 3.50872 11.6247 3.50872 9.82186C3.50872 9.80536 3.50872 9.78961 3.50872 9.77386C4.03519 10.0671 4.62465 10.2298 5.22761 10.2478C3.56347 9.13565 3.0505 6.92179 4.05544 5.1909C5.97832 7.557 8.81539 8.99541 11.8609 9.14765C11.5557 7.83224 11.9727 6.45382 12.9566 5.52913C14.482 4.09522 16.8811 4.16872 18.315 5.69337C19.1632 5.52613 19.9762 5.2149 20.7201 4.77393C20.4374 5.65062 19.8457 6.39533 19.0552 6.86855C19.8059 6.78005 20.5394 6.57907 21.2301 6.27234C20.7216 7.03429 20.0812 7.698 19.3402 8.23421Z"
                              fill="white"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://forum.venom.foundation"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="social-media-item dev-forum is-small"
                      aria-label="Forum"
                      data-v-465bfb6b=""
                    >
                      <div className="icon" data-v-465bfb6b="">
                        <div className="kit-icon is-fill" data-v-465bfb6b="">
                          <svg
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9.33333 23.9156V21H7C5.067 21 3.5 19.433 3.5 17.5V7C3.5 5.067 5.067 3.5 7 3.5H21C22.933 3.5 24.5 5.067 24.5 7V17.5C24.5 19.433 22.933 21 21 21H14.495L10.2811 24.3711C10.106 24.5112 9.86607 24.5385 9.66397 24.4413C9.46187 24.3442 9.33333 24.1398 9.33333 23.9156ZM11.325 8.50866C10.8693 8.05305 10.1307 8.05305 9.67504 8.50866C9.21943 8.96427 9.21943 9.70296 9.67504 10.1586L11.1834 11.667L9.67504 13.1753C9.21943 13.6309 9.21943 14.3696 9.67504 14.8252C10.1307 15.2809 10.8693 15.2809 11.325 14.8252L13.6583 12.4919C13.8771 12.2731 14 11.9764 14 11.667C14 11.3575 13.8771 11.0608 13.6583 10.842L11.325 8.50866ZM15.1667 14.0003C14.5223 14.0003 14 14.5226 14 15.167C14 15.8113 14.5223 16.3336 15.1667 16.3336H17.5C18.1443 16.3336 18.6667 15.8113 18.6667 15.167C18.6667 14.5226 18.1443 14.0003 17.5 14.0003H15.1667Z"
                              fill="white"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://medium.com/@venom.foundation"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="social-media-item medium is-small"
                      aria-label="Medium"
                      data-v-465bfb6b=""
                    >
                      <div className="icon" data-v-465bfb6b="">
                        <div className="kit-icon is-fill" data-v-465bfb6b="">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.4708 12.0001C13.4708 15.6009 10.5716 18.5199 6.99542 18.5199C3.41923 18.5199 0.519775 15.6009 0.519775 12.0001C0.519775 8.39924 3.41901 5.47998 6.99542 5.47998C10.5718 5.47998 13.4708 8.39924 13.4708 12.0001Z"
                              fill="white"
                            ></path>
                            <path
                              d="M20.5746 12C20.5746 15.3894 19.125 18.1381 17.3368 18.1381C15.5486 18.1381 14.099 15.3894 14.099 12C14.099 8.61057 15.5484 5.86182 17.3366 5.86182C19.1248 5.86182 20.5744 8.60969 20.5744 12"
                              fill="white"
                            ></path>
                            <path
                              d="M23.4803 12.0003C23.4803 15.0364 22.9705 17.4991 22.3415 17.4991C21.7125 17.4991 21.203 15.037 21.203 12.0003C21.203 8.96355 21.7128 6.50146 22.3415 6.50146C22.9703 6.50146 23.4803 8.96333 23.4803 12.0003Z"
                              fill="white"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://t.me/VenomFoundationOfficial"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="social-media-item telegram is-small"
                      aria-label="Telegram"
                      data-v-465bfb6b=""
                    >
                      <div className="icon" data-v-465bfb6b="">
                        <div className="kit-icon is-fill" data-v-465bfb6b="">
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M24.5901 25.2687V25.2662L24.6121 25.2136L28.282 6.71089V6.65215C28.282 6.19081 28.1107 5.78821 27.7411 5.54713C27.4169 5.33543 27.0436 5.32074 26.7817 5.34032C26.538 5.36237 26.2974 5.41162 26.0646 5.48717C25.9654 5.51918 25.8674 5.5551 25.7709 5.59486L25.755 5.60098L5.29439 13.6274L5.28827 13.6298C5.22606 13.6511 5.16518 13.676 5.10593 13.7045C4.96042 13.7698 4.82081 13.8476 4.68864 13.937C4.42554 14.1181 3.92504 14.5439 4.00948 15.2194C4.07923 15.7799 4.4647 16.1348 4.72535 16.3196C4.87921 16.4274 5.04462 16.5177 5.21852 16.5888L5.25767 16.6059L5.26991 16.6096L5.27848 16.6133L8.85909 17.8186C8.84685 18.0426 8.86888 18.2714 8.92884 18.4978L10.7216 25.3005C10.8195 25.6713 11.0312 26.0021 11.3268 26.2465C11.6224 26.4908 11.9871 26.6365 12.3697 26.6629C12.7523 26.6894 13.1336 26.5954 13.46 26.394C13.7864 26.1927 14.0416 25.8941 14.1896 25.5403L16.9895 22.5471L21.7975 26.2329L21.866 26.2623C22.3029 26.4532 22.7104 26.5132 23.0836 26.463C23.4569 26.4116 23.753 26.255 23.9757 26.0775C24.2333 25.8687 24.4387 25.6026 24.5754 25.3005L24.5852 25.2797L24.5888 25.2723L24.5901 25.2687ZM10.7032 18.0303C10.6834 17.9548 10.6881 17.875 10.7167 17.8024C10.7453 17.7298 10.7963 17.6682 10.8623 17.6265L23.0029 9.91705C23.0029 9.91705 23.7175 9.48262 23.6918 9.91705C23.6918 9.91705 23.8191 9.99292 23.4361 10.349C23.0739 10.688 14.7831 18.6924 13.9437 19.5025C13.897 19.5478 13.8643 19.6055 13.8494 19.6689L12.496 24.833L10.7032 18.0291V18.0303Z"
                              fill="#EEEEEE"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="column-wrapper" data-v-c3851004="">
                  <div className="column" data-v-c3851004="">
                    <div className="column-title-control" data-v-c3851004="">
                      <div className="title" data-v-c3851004="">
                        Venom
                      </div>
                      <div className="icon" data-v-c3851004="">
                        <div className="kit-icon is-fill" data-v-c3851004="">
                          <svg
                            width="26"
                            height="26"
                            viewBox="0 0 26 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.66675 10.8335L13.0001 15.1668L17.3334 10.8335"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        transition: "height 300ms ease-in-out 0s",
                        height: "0px",
                        overflowY: "hidden",
                      }}
                      className="slide-up-down__container"
                      aria-hidden="true"
                      tabIndex={-1}
                      data-v-c3851004=""
                    >
                      <div className="column-links" data-v-c3851004="">
                        <a
                          href="/Venom_Whitepaper.pdf"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="footer-link column-link"
                          data-v-c3851004=""
                          data-v-03a024e4=""
                        >
                          <div className="text" data-v-03a024e4="">
                            Whitepaper
                          </div>
                          <div className="icon" data-v-03a024e4="">
                            <div
                              className="kit-icon is-fill"
                              data-v-03a024e4=""
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.33716 5.084C7.92295 5.08108 7.58481 5.41449 7.58189 5.8287C7.57897 6.2429 7.91238 6.58105 8.32658 6.58397L12.3268 6.61217L5.34467 13.5943C5.05178 13.8872 5.05178 14.3621 5.34467 14.655C5.63756 14.9479 6.11244 14.9479 6.40533 14.655L13.3865 7.67388L13.4152 11.6727C13.4182 12.0869 13.7564 12.4203 14.1706 12.4173C14.5848 12.4143 14.9182 12.0761 14.9152 11.6619L14.8739 5.91626C14.8852 5.71071 14.8124 5.50137 14.6553 5.34435C14.5064 5.19538 14.3103 5.12218 14.1151 5.12474L8.33716 5.084Z"
                                  fill="white"
                                  fillOpacity="0.4"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </a>
                        <a
                          href="mailto:pr@venomtech.io"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="footer-link column-link"
                          data-v-c3851004=""
                          data-v-03a024e4=""
                        >
                          <div className="text" data-v-03a024e4="">
                            Media Inquiries
                          </div>
                          <div className="icon" data-v-03a024e4="">
                            <div
                              className="kit-icon is-fill"
                              data-v-03a024e4=""
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.33716 5.084C7.92295 5.08108 7.58481 5.41449 7.58189 5.8287C7.57897 6.2429 7.91238 6.58105 8.32658 6.58397L12.3268 6.61217L5.34467 13.5943C5.05178 13.8872 5.05178 14.3621 5.34467 14.655C5.63756 14.9479 6.11244 14.9479 6.40533 14.655L13.3865 7.67388L13.4152 11.6727C13.4182 12.0869 13.7564 12.4203 14.1706 12.4173C14.5848 12.4143 14.9182 12.0761 14.9152 11.6619L14.8739 5.91626C14.8852 5.71071 14.8124 5.50137 14.6553 5.34435C14.5064 5.19538 14.3103 5.12218 14.1151 5.12474L8.33716 5.084Z"
                                  fill="white"
                                  fillOpacity="0.4"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="divider" data-v-c3851004=""></div>
                  </div>
                  <div className="column" data-v-c3851004="">
                    <div className="column-title-control" data-v-c3851004="">
                      <div className="title" data-v-c3851004="">
                        Develop
                      </div>
                      <div className="icon" data-v-c3851004="">
                        <div className="kit-icon is-fill" data-v-c3851004="">
                          <svg
                            width="26"
                            height="26"
                            viewBox="0 0 26 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.66675 10.8335L13.0001 15.1668L17.3334 10.8335"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        transition: "height 300ms ease-in-out 0s",
                        height: "0px",
                        overflowY: "hidden",
                      }}
                      className="slide-up-down__container"
                      aria-hidden="true"
                      tabIndex={-1}
                      data-v-c3851004=""
                    >
                      <div className="column-links" data-v-c3851004="">
                        <a
                          href="https://docs.venom.foundation"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="footer-link column-link"
                          data-v-c3851004=""
                          data-v-03a024e4=""
                        >
                          <div className="text" data-v-03a024e4="">
                            Docs
                          </div>
                          <div className="icon" data-v-03a024e4="">
                            <div
                              className="kit-icon is-fill"
                              data-v-03a024e4=""
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.33716 5.084C7.92295 5.08108 7.58481 5.41449 7.58189 5.8287C7.57897 6.2429 7.91238 6.58105 8.32658 6.58397L12.3268 6.61217L5.34467 13.5943C5.05178 13.8872 5.05178 14.3621 5.34467 14.655C5.63756 14.9479 6.11244 14.9479 6.40533 14.655L13.3865 7.67388L13.4152 11.6727C13.4182 12.0869 13.7564 12.4203 14.1706 12.4173C14.5848 12.4143 14.9182 12.0761 14.9152 11.6619L14.8739 5.91626C14.8852 5.71071 14.8124 5.50137 14.6553 5.34435C14.5064 5.19538 14.3103 5.12218 14.1151 5.12474L8.33716 5.084Z"
                                  fill="white"
                                  fillOpacity="0.4"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </a>
                        <a
                          href="https://github.com/venom-blockchain"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="footer-link column-link"
                          data-v-c3851004=""
                          data-v-03a024e4=""
                        >
                          <div className="text" data-v-03a024e4="">
                            Github
                          </div>
                          <div className="icon" data-v-03a024e4="">
                            <div
                              className="kit-icon is-fill"
                              data-v-03a024e4=""
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.33716 5.084C7.92295 5.08108 7.58481 5.41449 7.58189 5.8287C7.57897 6.2429 7.91238 6.58105 8.32658 6.58397L12.3268 6.61217L5.34467 13.5943C5.05178 13.8872 5.05178 14.3621 5.34467 14.655C5.63756 14.9479 6.11244 14.9479 6.40533 14.655L13.3865 7.67388L13.4152 11.6727C13.4182 12.0869 13.7564 12.4203 14.1706 12.4173C14.5848 12.4143 14.9182 12.0761 14.9152 11.6619L14.8739 5.91626C14.8852 5.71071 14.8124 5.50137 14.6553 5.34435C14.5064 5.19538 14.3103 5.12218 14.1151 5.12474L8.33716 5.084Z"
                                  fill="white"
                                  fillOpacity="0.4"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="divider" data-v-c3851004=""></div>
                  </div>
                  <div className="column" data-v-c3851004="">
                    <div className="column-title-control" data-v-c3851004="">
                      <div className="title" data-v-c3851004="">
                        Participate
                      </div>
                      <div className="icon" data-v-c3851004="">
                        <div className="kit-icon is-fill" data-v-c3851004="">
                          <svg
                            width="26"
                            height="26"
                            viewBox="0 0 26 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.66675 10.8335L13.0001 15.1668L17.3334 10.8335"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        transition: "height 300ms ease-in-out 0s",
                        height: "0px",
                        overflowY: "hidden",
                      }}
                      className="slide-up-down__container"
                      aria-hidden="true"
                      tabIndex={-1}
                      data-v-c3851004=""
                    >
                      <div className="column-links" data-v-c3851004="">
                        <a
                          href="/terms-of-use"
                          className="footer-link column-link"
                          data-v-c3851004=""
                          data-v-03a024e4=""
                        >
                          <div className="text" data-v-03a024e4="">
                            Terms of Use
                          </div>
                        </a>
                        <a
                          href="/cookie-policy"
                          className="footer-link column-link"
                          data-v-c3851004=""
                          data-v-03a024e4=""
                        >
                          <div className="text" data-v-03a024e4="">
                            Cookie Policy
                          </div>
                        </a>
                        <a
                          href="/privacy-policy"
                          className="footer-link column-link"
                          data-v-c3851004=""
                          data-v-03a024e4=""
                        >
                          <div className="text" data-v-03a024e4="">
                            Privacy Policy
                          </div>
                        </a>
                      </div>
                    </div>
                    <div
                      style={{ display: "none" }}
                      className="divider"
                      data-v-c3851004=""
                    ></div>
                  </div>
                </div>
                <div className="legal-block" data-v-c3851004="">
                  <div
                    className="footer-disclaimer"
                    data-v-c3851004=""
                    data-v-79c3f820=""
                  >
                    Venom Foundation is licensed under the Abu Dhabi Global
                    Market (ADGM) framework is and dedicated to the development
                    and launch of the Venom blockchain, providing scalable and
                    secure solutions for real-world applications. To learn more
                    about our policies, click on
                    <a
                      href="/privacy-policy"
                      className="link"
                      data-v-79c3f820=""
                    >
                      Privacy&nbsp;Policy
                    </a>
                  </div>
                  <div
                    className="footer-copyright copyright"
                    data-v-c3851004=""
                    data-v-a6d462e3=""
                  >
                    Venom ©2023 All Rights Reserved
                  </div>
                </div>
              </div>
              <div
                className="kit-spot footer"
                data-v-3a846a5e=""
                data-v-c951ae60=""
              ></div>
            </footer>
          </div>
        </div>
        <script
          async={true}
          type="module"
          src="https://venom.foundation/_nuxt/entry.6d072c04.js"
          crossOrigin=""
        ></script>
        <div id="loom-companion-mv3" ext-id="liecbddmkiiihnedobmlmillhodjkdmb">
          <section id="shadow-host-companion"></section>
        </div>
      </body>
    </div>
  );
};

export default Home;

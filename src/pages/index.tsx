import { BasciConnect, CustomConnect } from "components/ConnectWallet";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";

const Home: NextPage = () => {
  const [style1, setStyle1] = useState(
    "xl:container lg:mt-[32px] transition-width-nav2 lg:m-auto"
  );
  const [style2, setStyle2] = useState(
    "justify-between sm:p-[12px] max-sm:pr-[5px] lg:rounded-[12px] flex items-center min-lg:w-full"
  );
  window.addEventListener("scroll", () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > 0) {
    } else {
    }
  });
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Home - Taiko</title>
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="Home - Taiko" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta property="og:url" content="https://taiko.xyz/" />
        <meta property="og:title" content="Home" />
        <meta
          property="og:description"
          content="A decentralized, Ethereum-equivalent ZK-Rollup."
        />
        <meta
          property="og:image"
          content="https://taiko.xyz/images/Taiko_social_media_preview.png"
        />
        <link rel="icon" href="https://taiko.xyz/images/favicon.svg" />
        <script
          async={false}
          src="https://www.googletagmanager.com/gtag/js?id=G-96XHJ533EK"
        ></script>
        <meta name="theme-color" content="#fff" />
        <meta name="next-head-count" content="14" />
        <link
          rel="preload"
          href="https://taiko.xyz/_next/static/media/63b4fc36549c6773-s.p.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          data-next-font="size-adjust"
        />
        <link
          rel="preload"
          href="https://taiko.xyz/_next/static/media/fe501771e48c7d75-s.p.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          data-next-font="size-adjust"
        />
        <link
          rel="preload"
          href="https://taiko.xyz/_next/static/css/7db74610982f61f8.css"
          as="style"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://taiko.xyz/_next/static/css/7db74610982f61f8.css"
          crossOrigin=""
          data-n-g=""
        />
        <link
          as="script"
          rel="prefetch"
          href="https://taiko.xyz/_next/static/chunks/pages/ecosystem-128dccdfec6ee0e9.js"
        ></link>
      </Head>
      <body>
        <div id="__next">
          <main className="__variable_b912a7 __variable_f7b17c">
            <div dir="ltr">
              <div className="nextra-nav-container nx-sticky nx-top-0 nx-z-20 nx-w-full nx-bg-transparent print:nx-hidden">
                <div className="nextra-nav-container-blur nx-pointer-events-none nx-absolute nx-z-[-1] nx-h-full nx-w-full nx-bg-white dark:nx-bg-dark nx-shadow-[0_2px_4px_rgba(0,0,0,.02),0_1px_0_rgba(0,0,0,.06)] dark:nx-shadow-[0_-1px_0_rgba(255,255,255,.1)_inset] contrast-more:nx-shadow-[0_0_0_1px_#000] contrast-more:dark:nx-shadow-[0_0_0_1px_#fff]"></div>
                <nav className="nx-mx-auto nx-flex nx-h-[var(--nextra-navbar-height)] nx-max-w-[90rem] nx-items-center nx-justify-end nx-gap-2 nx-pl-[max(env(safe-area-inset-left),1.5rem)] nx-pr-[max(env(safe-area-inset-right),1.5rem)]">
                  <Link
                    className="nx-flex nx-items-center hover:nx-opacity-75 ltr:nx-mr-auto rtl:nx-ml-auto"
                    href="/"
                  >
                    <img
                      alt="logo"
                      loading="lazy"
                      width="100"
                      height="100"
                      decoding="async"
                      data-nimg="1"
                      src="https://taiko.xyz/images/logotype-black.svg"
                      style={{
                        color: "transparent",
                        width: "128px",
                        height: "auto",
                      }}
                    />
                  </Link>
                  <a
                    href="https://docs.taiko.xyz"
                    target="_blank"
                    rel="noreferrer"
                    className="nx-text-sm contrast-more:nx-text-gray-700 contrast-more:dark:nx-text-gray-100 nx-relative -nx-ml-2 nx-hidden nx-whitespace-nowrap nx-p-2 md:nx-inline-block nx-text-gray-600 hover:nx-text-gray-800 dark:nx-text-gray-400 dark:hover:nx-text-gray-200"
                    aria-current="false"
                  >
                    <span className="nx-absolute nx-inset-x-0 nx-text-center">
                      Docs ↗
                    </span>
                    <span className="nx-invisible nx-font-medium">Docs ↗</span>
                    <span className="nx-sr-only nx-select-none">
                      {" "}
                      (opens in a new tab)
                    </span>
                  </a>
                  <a
                    href="https://bridge.katla.taiko.xyz"
                    target="_blank"
                    rel="noreferrer"
                    className="nx-text-sm contrast-more:nx-text-gray-700 contrast-more:dark:nx-text-gray-100 nx-relative -nx-ml-2 nx-hidden nx-whitespace-nowrap nx-p-2 md:nx-inline-block nx-text-gray-600 hover:nx-text-gray-800 dark:nx-text-gray-400 dark:hover:nx-text-gray-200"
                    aria-current="false"
                  >
                    <span className="nx-absolute nx-inset-x-0 nx-text-center">
                      Bridge ↗
                    </span>
                    <span className="nx-invisible nx-font-medium">
                      Bridge ↗
                    </span>
                    <span className="nx-sr-only nx-select-none">
                      {" "}
                      (opens in a new tab)
                    </span>
                  </a>
                  <a
                    href="https://swap.katla.taiko.xyz"
                    target="_blank"
                    rel="noreferrer"
                    className="nx-text-sm contrast-more:nx-text-gray-700 contrast-more:dark:nx-text-gray-100 nx-relative -nx-ml-2 nx-hidden nx-whitespace-nowrap nx-p-2 md:nx-inline-block nx-text-gray-600 hover:nx-text-gray-800 dark:nx-text-gray-400 dark:hover:nx-text-gray-200"
                    aria-current="false"
                  >
                    <span className="nx-absolute nx-inset-x-0 nx-text-center">
                      Swap ↗
                    </span>
                    <span className="nx-invisible nx-font-medium">Swap ↗</span>
                    <span className="nx-sr-only nx-select-none">
                      {" "}
                      (opens in a new tab)
                    </span>
                  </a>
                  <a
                    className="nx-text-sm contrast-more:nx-text-gray-700 contrast-more:dark:nx-text-gray-100 nx-relative -nx-ml-2 nx-hidden nx-whitespace-nowrap nx-p-2 md:nx-inline-block nx-text-gray-600 hover:nx-text-gray-800 dark:nx-text-gray-400 dark:hover:nx-text-gray-200"
                    aria-current="false"
                    href="#"
                  >
                    <span className="nx-absolute nx-inset-x-0 nx-text-center">
                      Ecosystem
                    </span>
                    <span className="nx-invisible nx-font-medium">
                      Ecosystem
                    </span>
                  </a>
                  <div className="nx-relative nx-inline-block">
                    <button
                      className="nx-text-sm contrast-more:nx-text-gray-700 contrast-more:dark:nx-text-gray-100 nx-flex nx-gap-1 nx-text-gray-600 hover:nx-text-gray-800 dark:nx-text-gray-400 dark:hover:nx-text-gray-200 -nx-ml-2 nx-hidden nx-items-center nx-whitespace-nowrap nx-rounded nx-p-2 md:nx-inline-flex nx-text-gray-600 hover:nx-text-gray-800 dark:nx-text-gray-400 dark:hover:nx-text-gray-200"
                      id="headlessui-menu-button-:R6l96:"
                      type="button"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      data-headlessui-state=""
                    >
                      Status ↗
                    </button>
                  </div>
                  <div className="nx-relative nx-inline-block">
                    <button
                      className="nx-text-sm contrast-more:nx-text-gray-700 contrast-more:dark:nx-text-gray-100 nx-flex nx-gap-1 nx-text-gray-600 hover:nx-text-gray-800 dark:nx-text-gray-400 dark:hover:nx-text-gray-200 -nx-ml-2 nx-hidden nx-items-center nx-whitespace-nowrap nx-rounded nx-p-2 md:nx-inline-flex nx-text-gray-600 hover:nx-text-gray-800 dark:nx-text-gray-400 dark:hover:nx-text-gray-200"
                      id="headlessui-menu-button-:R7596:"
                      type="button"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      data-headlessui-state=""
                    >
                      Explorer ↗
                    </button>
                  </div>
                  <a
                    href="https://github.com/taikoxyz"
                    target="_blank"
                    rel="noreferrer"
                    className="nx-p-2 nx-text-current"
                  >
                    <svg
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="3 3 18 18"
                    >
                      <title>GitHub</title>
                      <path d="M12 3C7.0275 3 3 7.12937 3 12.2276C3 16.3109 5.57625 19.7597 9.15374 20.9824C9.60374 21.0631 9.77249 20.7863 9.77249 20.5441C9.77249 20.3249 9.76125 19.5982 9.76125 18.8254C7.5 19.2522 6.915 18.2602 6.735 17.7412C6.63375 17.4759 6.19499 16.6569 5.8125 16.4378C5.4975 16.2647 5.0475 15.838 5.80124 15.8264C6.51 15.8149 7.01625 16.4954 7.18499 16.7723C7.99499 18.1679 9.28875 17.7758 9.80625 17.5335C9.885 16.9337 10.1212 16.53 10.38 16.2993C8.3775 16.0687 6.285 15.2728 6.285 11.7432C6.285 10.7397 6.63375 9.9092 7.20749 9.26326C7.1175 9.03257 6.8025 8.08674 7.2975 6.81794C7.2975 6.81794 8.05125 6.57571 9.77249 7.76377C10.4925 7.55615 11.2575 7.45234 12.0225 7.45234C12.7875 7.45234 13.5525 7.55615 14.2725 7.76377C15.9937 6.56418 16.7475 6.81794 16.7475 6.81794C17.2424 8.08674 16.9275 9.03257 16.8375 9.26326C17.4113 9.9092 17.76 10.7281 17.76 11.7432C17.76 15.2843 15.6563 16.0687 13.6537 16.2993C13.98 16.5877 14.2613 17.1414 14.2613 18.0065C14.2613 19.2407 14.25 20.2326 14.25 20.5441C14.25 20.7863 14.4188 21.0746 14.8688 20.9824C16.6554 20.364 18.2079 19.1866 19.3078 17.6162C20.4077 16.0457 20.9995 14.1611 21 12.2276C21 7.12937 16.9725 3 12 3Z"></path>
                    </svg>
                    <span className="nx-sr-only">GitHub</span>
                    <span className="nx-sr-only nx-select-none">
                      {" "}
                      (opens in a new tab)
                    </span>
                  </a>
                  <a
                    href="https://discord.gg/taikoxyz"
                    target="_blank"
                    rel="noreferrer"
                    className="nx-p-2 nx-text-current"
                  >
                    <svg
                      width="24"
                      height="24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 5 30.67 23.25"
                    >
                      <title>Discord</title>
                      <path d="M26.0015 6.9529C24.0021 6.03845 21.8787 5.37198 19.6623 5C19.3833 5.48048 19.0733 6.13144 18.8563 6.64292C16.4989 6.30193 14.1585 6.30193 11.8336 6.64292C11.6166 6.13144 11.2911 5.48048 11.0276 5C8.79575 5.37198 6.67235 6.03845 4.6869 6.9529C0.672601 12.8736 -0.41235 18.6548 0.130124 24.3585C2.79599 26.2959 5.36889 27.4739 7.89682 28.2489C8.51679 27.4119 9.07477 26.5129 9.55525 25.5675C8.64079 25.2265 7.77283 24.808 6.93587 24.312C7.15286 24.1571 7.36986 23.9866 7.57135 23.8161C12.6241 26.1255 18.0969 26.1255 23.0876 23.8161C23.3046 23.9866 23.5061 24.1571 23.7231 24.312C22.8861 24.808 22.0182 25.2265 21.1037 25.5675C21.5842 26.5129 22.1422 27.4119 22.7621 28.2489C25.2885 27.4739 27.8769 26.2959 30.5288 24.3585C31.1952 17.7559 29.4733 12.0212 26.0015 6.9529ZM10.2527 20.8402C8.73376 20.8402 7.49382 19.4608 7.49382 17.7714C7.49382 16.082 8.70276 14.7025 10.2527 14.7025C11.7871 14.7025 13.0425 16.082 13.0115 17.7714C13.0115 19.4608 11.7871 20.8402 10.2527 20.8402ZM20.4373 20.8402C18.9183 20.8402 17.6768 19.4608 17.6768 17.7714C17.6768 16.082 18.8873 14.7025 20.4373 14.7025C21.9717 14.7025 23.2271 16.082 23.1961 17.7714C23.1961 19.4608 21.9872 20.8402 20.4373 20.8402Z"></path>
                    </svg>
                    <span className="nx-sr-only">Discord</span>
                    <span className="nx-sr-only nx-select-none">
                      {" "}
                      (opens in a new tab)
                    </span>
                  </a>
                  <button
                    type="button"
                    aria-label="Menu"
                    className="nextra-hamburger -nx-mr-2 nx-rounded nx-p-2 active:nx-bg-gray-400/20 md:nx-hidden"
                  >
                    <svg
                      fill="none"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className=""
                    >
                      <g>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16"
                        ></path>
                      </g>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 12h16"
                      ></path>
                      <g>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 18h16"
                        ></path>
                      </g>
                    </svg>
                  </button>
                </nav>
              </div>
              <div className="nx-mx-auto nx-flex">
                <div className="motion-reduce:nx-transition-none [transition:background-color_1.5s_ease] nx-bg-transparent"></div>
                <aside className="nextra-sidebar-container nx-flex nx-flex-col md:nx-top-16 md:nx-shrink-0 motion-reduce:nx-transform-none nx-transform-gpu nx-transition-all nx-ease-in-out print:nx-hidden md:nx-w-64 md:nx-hidden max-md:[transform:translate3d(0,-100%,0)]">
                  <div className="nx-px-4 nx-pt-4 md:nx-hidden"></div>
                  <div className="nx-overflow-y-auto nx-overflow-x-hidden nx-p-4 nx-grow md:nx-h-[calc(100vh-var(--nextra-navbar-height)-var(--nextra-menu-height))] nextra-scrollbar"></div>
                </aside>
                <div id="reach-skip-nav"></div>
                <div className="nx-w-full nx-break-words">
                  <div className="mx-auto max-w-[90rem] px-3">
                    <div className="relative bg-neutral-50 dark:bg-neutral-900 mt-3">
                      <main className="lg:relative">
                        <div className="relative z-10 w-3/4 pt-16 pb-20 text-left lg:py-48">
                          <div className="pl-[max(env(safe-area-inset-left),1.5rem)]">
                            <h1 className="font-grotesk text-4xl md:text-5xl tracking-tight text-neutral-900 dark:text-neutral-100">
                              <span className="text-[#e81899]">Taiko</span>{" "}
                              Airdrop is{" "}
                              <span className="text-[#e81899]">Live</span> Now!
                            </h1>
                            <p className="font-groteskmedium mt-3 text-lg text-neutral-600 sm:text-xl md:mt-5 dark:text-neutral-100">
                              Decentralized, Ethereum-equivalent (Type 1)
                              ZK-EVM.
                            </p>
                            <div className="mt-10 flex flex-col sm:flex-row md:justify-left">
                              <CustomConnect
                                clickComp={
                                  <div className="inline-flex">
                                    <div className="inline-flex items-center rounded-md border-2 border-[#e81899] bg-transparent px-5 py-2.5 text-base font-semibold text-[#e81899] hover:border-[#d1168a] hover:text-[#d1168a] hover:no-underline w-auto">
                                      Please wait...
                                    </div>
                                  </div>
                                }
                                normalComp={
                                  <div className="inline-flex mb-4 sm:mb-0 sm:mr-4 borderc-div">
                                    <div className="inline-flex items-center rounded-md border border-transparent bg-[#e81899] px-5 py-2.5 text-base font-semibold text-white dark:text-neutral-100 hover:bg-[#d1168a] hover:no-underline hover:text-white w-auto">
                                      Claim $TAIKO
                                    </div>
                                  </div>
                                }
                              ></CustomConnect>
                            </div>
                          </div>
                        </div>
                        <div
                          id="taikoGeomParent"
                          className="absolute inset-y-0 right-0 overflow-hidden h-full w-11/12 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2"
                          style={{ width: "683px" }}
                        >
                          <img
                            id="taikoGeom"
                            className="absolute z-0 -right-6 overflow-visible h-full w-full object-cover max-w-none"
                            src="https://taiko.xyz/images/Taiko_GEOM_1_Fluo_Sliced.svg"
                            alt=""
                            style={{ opacity: "1" }}
                          />
                        </div>
                      </main>
                    </div>
                  </div>
                  <div className="mx-auto max-w-md px-6 text-center sm:max-w-2xl lg:max-w-7xl lg:px-8">
                    <div className="my-20">
                      <div className="grid grid-cols-1 gap-12 sm:grid-cols-1 lg:grid-cols-3">
                        <div className="pt-6">
                          <div className="flow-root rounded-lg bg-neutral-50 px-6 pb-8 dark:bg-neutral-800">
                            <div className="-mt-6">
                              <div>
                                <span className="inline-flex items-center justify-center rounded-xl bg-neutral-600 p-3 shadow-lg dark:bg-neutral-500">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="h-8 w-8 text-neutral-100"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                                    ></path>
                                  </svg>
                                </span>
                              </div>
                              <h3 className="font-groteskmedium mt-8 text-lg leading-8 tracking-tight text-neutral-900 dark:text-neutral-100">
                                Ethereum-equivalent
                              </h3>
                              <p className="mt-5 text-base leading-7 text-neutral-600 dark:text-neutral-300">
                                A Type 1 (Ethereum-equivalent) ZK-EVM aims for
                                maximum compatibility. This results in a
                                seamless developer experience.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="pt-6">
                          <div className="flow-root rounded-lg bg-neutral-50 px-6 pb-8 dark:bg-neutral-800">
                            <div className="-mt-6">
                              <div>
                                <span className="inline-flex items-center justify-center rounded-xl bg-neutral-600 p-3 shadow-lg dark:bg-neutral-500">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="h-8 w-8 text-neutral-100"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
                                    ></path>
                                  </svg>
                                </span>
                              </div>
                              <h3 className="font-groteskmedium mt-8 text-lg leading-8 tracking-tight text-neutral-900 dark:text-neutral-100">
                                Open source
                              </h3>
                              <p className="mt-5 text-base leading-7 text-neutral-600 dark:text-neutral-300">
                                Taiko&apos;s code is open source and available
                                on GitHub. Free to use and modify the source
                                code with the permissive license.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="pt-6">
                          <div className="flow-root rounded-lg bg-neutral-50 px-6 pb-8 dark:bg-neutral-800">
                            <div className="-mt-6">
                              <div>
                                <span className="inline-flex items-center justify-center rounded-xl bg-neutral-600 p-3 shadow-lg dark:bg-neutral-500">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="h-8 w-8 text-neutral-100"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                                    ></path>
                                  </svg>
                                </span>
                              </div>
                              <h3 className="font-groteskmedium mt-8 text-lg leading-8 tracking-tight text-neutral-900 dark:text-neutral-100">
                                Decentralized
                              </h3>
                              <p className="mt-5 text-base leading-7 text-neutral-600 dark:text-neutral-300">
                                Decentralized and permissionless nodes,
                                proposers, and provers. Anyone can participate
                                in Taiko.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-neutral-900">
                    <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8">
                      <h2 className="font-grotesk text-3xl tracking-tight text-gray-900 sm:text-4xl dark:text-neutral-100">
                        <span className="block">Join the community 🥁</span>
                      </h2>
                      <section className="bg-white dark:bg-neutral-900 py-12">
                        <div className="container mx-auto px-4">
                          <div className="flex flex-wrap justify-center">
                            <a
                              href="https://docs.taiko.xyz/start-here/contributing"
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center justify-center float w-64 px-4 md:px-6 py-2 md:py-3 mb-4 mx-2 text-base md:text-lg font-semibold text-white rounded-md shadow-md bg-[#404040] hover:bg-[#3a3a3a]"
                            >
                              Contribute to Taiko
                            </a>
                            <a
                              href="https://discord.gg/taikoxyz"
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center justify-center float w-64 px-4 md:px-6 py-2 md:py-3 mb-4 mx-2 text-base md:text-lg font-semibold text-white rounded-md shadow-md bg-[#5865f2] hover:bg-[#4f5bda]"
                            >
                              Join the Discord
                            </a>
                            <a
                              href="https://twitter.com/taikoxyz"
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center justify-center float w-64 px-4 md:px-6 py-2 md:py-3 mb-4 mx-2 text-base md:text-lg font-semibold text-white rounded-md shadow-md bg-[#00acee] hover:bg-[#009bd6]"
                            >
                              Follow on Twitter
                            </a>
                            <a
                              href="https://taikoxyz.notion.site/Taiko-Jobs-828fd7232d2c4150a11e10c8baa910a2"
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center justify-center float w-64 px-4 md:px-6 py-2 md:py-3 mb-4 mx-2 text-base md:text-lg font-semibold text-white rounded-md shadow-md bg-[#e81899] hover:bg-[#d1168a]"
                            >
                              Explore open positions
                            </a>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
              <footer className="bg-neutral-100 dark:bg-neutral-900">
                <div className="mx-auto max-w-[90rem] pl-3">
                  <div className="grid grid-cols-2 pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)] py-8 md:grid-cols-3">
                    <div>
                      <h2 className="font-grotesk mb-6 text-lg text-neutral-500 dark:text-neutral-300 pt-3">
                        About
                      </h2>
                      <ul className="text-neutral-500 dark:text-neutral-400">
                        <li className="mb-4">
                          <a
                            href="https://mirror.xyz/labs.taiko.eth"
                            className="hover:underline"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Blog
                          </a>
                        </li>
                        <li className="mb-4">
                          <a
                            href="https://taikoxyz.notion.site/Taiko-Jobs-828fd7232d2c4150a11e10c8baa910a2"
                            className="hover:underline"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Careers
                          </a>
                        </li>
                        <li className="mb-4">
                          <a
                            href="https://github.com/taikoxyz/taiko-mono/tree/main/packages/branding/"
                            className="hover:underline"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Media kit
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="font-grotesk mb-6 text-lg text-neutral-500 dark:text-neutral-300 pt-3">
                        Developers
                      </h2>
                      <ul className="text-neutral-500 dark:text-neutral-400">
                        <li className="mb-4">
                          <a
                            href="https://docs.taiko.xyz"
                            className="hover:underline"
                          >
                            Get started
                          </a>
                        </li>
                        <li className="mb-4">
                          <a
                            href="https://github.com/taikoxyz"
                            className="hover:underline"
                            target="_blank"
                            rel="noreferrer"
                          >
                            GitHub
                          </a>
                        </li>
                        <li className="mb-4">
                          <a
                            href="https://status.taiko.xyz"
                            className="hover:underline"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Status
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="font-grotesk mb-6 text-lg text-neutral-500 dark:text-neutral-300 pt-3">
                        Follow us
                      </h2>
                      <ul className="text-neutral-500 dark:text-neutral-400">
                        <li className="mb-4">
                          <a
                            href="https://discord.gg/taikoxyz"
                            className="hover:underline"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Discord
                          </a>
                        </li>
                        <li className="mb-4">
                          <a
                            href="https://community.taiko.xyz"
                            className="hover:underline"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Forum
                          </a>
                        </li>
                        <li className="mb-4">
                          <a
                            href="https://twitter.com/taikoxyz"
                            className="hover:underline"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Twitter
                          </a>
                        </li>
                        <li className="mb-4">
                          <a
                            href="https://www.youtube.com/@taikoxyz"
                            className="hover:underline"
                            target="_blank"
                            rel="noreferrer"
                          >
                            YouTube
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="font-groteskmedium text-md text-center text-neutral-500 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-900 px-4 py-6">
                    © 2024 Taiko Labs
                  </div>
                </div>
              </footer>
            </div>
          </main>
        </div>

        <div id="loom-companion-mv3" ext-id="liecbddmkiiihnedobmlmillhodjkdmb">
          <section id="shadow-host-companion"></section>
        </div>
        <script
          src="https://taiko.xyz/_next/static/chunks/pages/ecosystem-128dccdfec6ee0e9.js"
          async={false}
        ></script>
      </body>
    </div>
  );
};

export default Home;

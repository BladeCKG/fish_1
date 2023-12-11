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
      setStyle1("w-full width-transition2 lg:m-auto");
      setStyle2(
        "justify-between sm:p-[12px] max-sm:pr-[5px] bg-special flex items-center min-lg:w-full"
      );
    } else {
      setStyle1("xl:container lg:mt-[32px] transition-width-nav2 lg:m-auto");
      setStyle2(
        "justify-between sm:p-[12px] max-sm:pr-[5px] lg:rounded-[12px] flex items-center min-lg:w-full"
      );
    }
  });
  return (
    <div>
      <Head>
        <script
          async={true}
          src="https://www.googletagmanager.com/gtag/js?id=G-R9B169GJVT"
        ></script>
        <link rel="icon" href="https://niza.io/logo.png" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <style></style>
        <link rel="apple-touch-icon" href="https://niza.io/logo192.png" />
        <link rel="manifest" href="https://niza.io/manifest.json" />
        <title>NizaGlobal</title>
        <meta name="title" content="Niza Coin" />
        <meta
          name="description"
          content="Not your average crypto token! Invest in your future!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://niza.io/" />
        <meta property="og:title" content="Niza Coin" />
        <meta
          property="og:description"
          content="Not your average crypto token! Invest in your future!"
        />
        <meta property="og:image" content="https://niza.io/niza-banner.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://niza.io/" />
        <meta property="twitter:title" content="Niza Coin" />
        <meta
          property="twitter:description"
          content="Not your average crypto token! Invest in your future!"
        />
        <meta
          property="twitter:image"
          content="https://niza.io/niza-banner.jpg"
        />
        <script
          async={true}
          src="https://widgets.coingecko.com/coingecko-coin-ticker-widget.js"
        ></script>
      </Head>
      <body className="scroll-smooth">
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">
          <div className="bg-gradient-to-b from-[#0f151c] to-[#151A1C] scrollbar scrollbar-thumb-rose-500">
            <div className="fixed top-0 left-0 w-full z-20">
              <div className={style1}>
                <div className={style2}>
                  <div className="">
                    <a href="#">
                      <img
                        src="https://niza.io/icons/nizatoken-logo.png"
                        alt=""
                        className="h-[50px] md:h-[60px] md:h-[40px]"
                      />
                    </a>
                  </div>
                  <div className="max-lg:hidden lg:flex items-center gap-[30px]">
                    <a href="#hero">
                      <p
                        className="text-white text-[18px] 2xl:text-lg font-medium leading-5"
                        style={{ letterSpacing: "-0.72px" }}
                      >
                        Home
                      </p>
                    </a>
                    <a href="#about-us">
                      <p
                        className="text-white text-[18px] 2xl:text-lg font-medium leading-5"
                        style={{ letterSpacing: "-0.72px" }}
                      >
                        About
                      </p>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="https://www.dextools.io/app/en/pether/pair-explorer/0x6acb4250ff8c65f0ba95b3001b920370740be940"
                      target="_blank"
                    >
                      <p
                        className="text-white text-[18px] 2xl:text-lg font-medium leading-5"
                        style={{ letterSpacing: "-0.72px" }}
                      >
                        Charts
                      </p>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="https://niza.io/docs/NizaCoin_whitepaper.pdf"
                      target="_blank"
                    >
                      <p
                        className="text-white text-[18px] 2xl:text-lg font-medium leading-5"
                        style={{ letterSpacing: "-0.72px" }}
                      >
                        Whitepaper
                      </p>
                    </a>
                    <a href="#roadmap">
                      <p
                        className="text-white text-[18px] 2xl:text-lg font-medium leading-5"
                        style={{ letterSpacing: "-0.72px" }}
                      >
                        Roadmap
                      </p>
                    </a>
                    <a href="#contact-us">
                      <p
                        className="text-white text-[18px] 2xl:text-lg font-medium leading-5"
                        style={{ letterSpacing: "-0.72px" }}
                      >
                        Communities
                      </p>
                    </a>
                    <div className="relative cursor-pointer flex items-center">
                      <p
                        className="text-white text-[18px] 2xl:text-lg font-medium leading-5 mr-[5px]"
                        style={{ letterSpacing: "-0.72px" }}
                      >
                        Licenses
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#fff"
                        height="14px"
                        width="20px"
                        version="1.1"
                        viewBox="0 0 308 308"
                        stroke="#fff"
                        className="navbar-arrow-down"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            id="XMLID_105_"
                            d="M324.001,209.25L173.997,96.75c-5.334-4-12.667-4-18,0L6.001,209.25c-6.627,4.971-7.971,14.373-3,21 c2.947,3.93,7.451,6.001,12.012,6.001c3.131,0,6.29-0.978,8.988-3.001L164.998,127.5l141.003,105.75c6.629,4.972,16.03,3.627,21-3 C331.972,223.623,330.628,214.221,324.001,209.25z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="flex justify-between max-lg:justify-end">
                    <div className="flex items-center">
                      <div className="borderc-div">
                        <CustomConnect
                          clickComp={
                            <div
                              className="text-black text-sm md:text-lg bg-custom-primary hover:bg-custom-primary-dark transition-colors px-[16px] md:px-[28px] py-[7px] md:py-[16px] rounded-[5px] font-semibold h-fit"
                              style={{ lineHeight: "1.25rem" }}
                            >
                              <p>Processing...</p>
                            </div>
                          }
                          normalComp={
                            <div
                              className="text-black text-sm md:text-lg bg-custom-primary hover:bg-custom-primary-dark transition-colors px-[16px] md:px-[28px] py-[7px] md:py-[16px] rounded-[5px] font-semibold h-fit"
                              style={{ lineHeight: "1.25rem" }}
                            >
                              <p>Claim $Niza</p>
                            </div>
                          }
                        />
                      </div>
                      <div className="items-center max-lg:flex lg:hidden ml-[20px]">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="bars"
                          className="svg-inline--fa fa-bars text-[30px] md:text-[50px] text-white"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path
                            fill="currentColor"
                            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-menu relative z-50 hidden ">
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25 false"></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-full max-w-sm py-6 px-6 bg-gradient-to-b from-[#0f151c] to-[#151A1C] overflow-y-auto mobileNavAnimation">
                  <div className="flex items-center mb-8">
                    <a className="mr-auto text-3xl font-bold leading-none cursor-pointer">
                      <img
                        src="https://niza.io/icons/nizatoken-logo.png"
                        alt=""
                        className="h-[50px] md:h-[60px] md:h-[40px]"
                      />
                    </a>
                    <button className="navbar-close">
                      <svg
                        className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div>
                    <ul>
                      <li className="mb-1">
                        <a
                          className="block p-4 text-base font-semibold text-custom-primary hover:bg-[#19232e7e] hover:text-custom-primary rounded"
                          href="#hero"
                        >
                          Home
                        </a>
                      </li>
                      <li className="mb-1">
                        <a
                          className="block p-4 text-base font-semibold text-gray-400 hover:bg-[#19232e7e] hover:text-custom-primary rounded"
                          href="#about-us"
                        >
                          About
                        </a>
                      </li>
                      <li className="mb-1">
                        <a
                          className="block p-4 text-base font-semibold text-gray-400 hover:bg-[#19232e7e] hover:text-custom-primary rounded"
                          rel="noopener noreferrer"
                          href="https://www.dextools.io/app/en/ether/pair-explorer/0x6acb4250ff8c65f0ba95b3001b920370740be940"
                          target="_blank"
                        >
                          Charts
                        </a>
                      </li>
                      <li className="mb-1">
                        <a
                          rel="noopener noreferrer"
                          className="block p-4 text-base font-semibold text-gray-400 hover:bg-[#19232e7e] hover:text-custom-primary rounded"
                          href="https://niza.io/docs/NizaCoin_whitepaper.pdf"
                          target="_blank"
                        >
                          Whitepaper
                        </a>
                      </li>
                      <li className="mb-1">
                        <a
                          className="block p-4 text-base font-semibold text-gray-400 hover:bg-[#19232e7e] hover:text-custom-primary rounded"
                          href="#roadmap"
                        >
                          Roadmap
                        </a>
                      </li>
                      <li className="mb-1">
                        <a
                          className="block p-4 text-base font-semibold text-gray-400 hover:bg-[#19232e7e] hover:text-custom-primary rounded"
                          href="#contact-us"
                        >
                          Communities
                        </a>
                      </li>
                      {/* <li className="mb-1 relative">
                        <a
                          className="block p-4 text-base font-semibold text-gray-400 hover:bg-[#19232e7e] hover:text-custom-primary rounded"
                          href="/"
                        >
                          Licenses
                        </a>
                      </li> */}
                    </ul>
                  </div>
                  <div className="mt-auto">
                    <div className="pt-6">
                      <CustomConnect
                        clickComp={
                          <div
                            className="text-black text-sm md:text-lg bg-custom-primary hover:bg-custom-primary-dark transition-colors px-[16px] md:px-[28px] py-[7px] md:py-[16px] rounded-[5px] font-semibold h-fit"
                            style={{ lineHeight: "1.25rem" }}
                          >
                            <p>Processing...</p>
                          </div>
                        }
                        normalComp={
                          <div
                            className="text-black text-sm md:text-lg bg-custom-primary hover:bg-custom-primary-dark transition-colors px-[16px] md:px-[28px] py-[7px] md:py-[16px] rounded-[5px] font-semibold h-fit"
                            style={{ lineHeight: "1.25rem" }}
                          >
                            <p>Claim $Niza</p>
                          </div>
                        }
                      />
                    </div>
                    <p className="my-4 text-xs text-center text-gray-400">
                      <span>Copyright Niza Global © 2023</span>
                    </p>
                  </div>
                </nav>
              </div>
            </div>
            <div className="relative overflow-x-hidden">
              <div
                className="h-[1080px] max-sm:h-[100vh] bg-[#141A20] relative fade-bottom"
                style={{ background: "rgba(0, 0, 0, 0.08)" }}
                id="hero"
              >
                <div
                  className="h-full w-full opacity-[0.6]"
                  style={{
                    backgroundImage: `url("https://niza.io/gradientBg.svg")`,
                  }}
                ></div>
                <div className="z-[10] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[100%]">
                  <div className="flex items-center flex-col md:container m-auto ">
                    <div className="w-full">
                      <p className="text-[42px] max-sm:text-[36px] lg:text-[64px] font-[600] text-white text-center max-sm:max-w-[350px] max-sm:m-auto max-sm:font-[700] lg:tracking-[-2.56px] tracking-[-1.28px] max-sm:leading-[40px]">
                        <div className="max-sm:mb-[20px]">
                          Not your average{" "}
                          <span className="text-custom-primary">crypto</span>{" "}
                          token! <br />
                        </div>
                        Invest in your{" "}
                        <span className="text-custom-primary">future!</span>{" "}
                      </p>
                    </div>
                    <div className="w-[700px] max-lg:w-[550px] max-sm:w-[350px]">
                      <img src="https://niza.io/heroImage.png" alt="Hero" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="relative flex items-center py-16 min-h-screen bg-[#10171b]"
                id="about-us"
              >
                <div
                  className="h-full w-full opacity-[0.6] absolute"
                  style={{
                    backgroundImage: `url("https://niza.io/gradientBg2.svg")`,
                    backgroundPosition: "70% 61%",
                  }}
                ></div>
                <div className="container m-auto xl:flex items-center z-[10] fadeIn">
                  <div className="w-full xl:w-1/2 flex flex-col xl:items-start max-xl:mb-[30px] items-center max-xl:text-center">
                    <p
                      className="text-[42px] max-sm:text-[38px] lg:text-[64px] font-[600] text-white text-center lg:mb-[32px] mb-[20px] tracking-[-2.56px]"
                      style={{ lineHeight: "normal" }}
                    >
                      About <span className="text-custom-primary">Niza</span>
                      Global
                    </p>
                    <p
                      className="text-[20px] max-w-[492px] tracking-[-0.8px]"
                      style={{
                        color: "rgba(255, 255, 255, 0.7)",
                        lineHeight: "normal",
                      }}
                    >
                      Niza Coin (NIZA) a blockchain Ethereum (ERC20) token, is
                      the native digital currency of our ecosystem. It
                      facilitates transactions within the Niza Global platform
                      and serves as a channel of exchange, unit of account, and
                      store of value. <br />
                      <br />
                      With a total supply of 10 billion Niza Coins, we aim to
                      create a dynamic and versatile digital asset that empowers
                      users across various financial activities. <br />
                      <br />
                      <br />
                      New Year new vision! Niza Global web and mobile apps go
                      live on January 1st, 2024.
                    </p>
                  </div>
                  <div className="w-full xl:w-1/2 relative flex justify-center max-lg:h-[400px]">
                    <img
                      className="absolute max-w-[1300px] xl:h-[700px] md:h-[600px] h-[500px] xl:right-[-45%] xl:top-[-19%] md:right-[-6%] top-[-2%] right-[-26%] z-[-1] blur-[2px]"
                      src="https://niza.io/about-us.svg"
                      alt="About us"
                    />
                    <div className="flex flex-col items-center">
                      <p
                        className="text-[42px] max-sm:text-[38px] xl:text-[50px] xl:max-w-[650px] max-w-[500px] font-[600] text-white text-center tracking-[-2.56px]"
                        style={{ lineHeight: "normal" }}
                      >
                        Crypto Exchange &amp; Banking{" "}
                        <span className="text-custom-primary">Coming Soon</span>
                        !
                      </p>
                      <div className="about-us-countdown">
                        <div className="flex items-center sm:gap-[20px]">
                          <div className="flex flex-col text-[85px] max-sm:text-[50px] text-[#FFF000]">
                            <span className="text-[25px] max-sm:text-[16px] text-white mb-[5px]">
                              Days
                            </span>
                            <div className="flex space-x-3 max-sm:space-x-2 about-us-countdown-timer">
                              <span className="w-[85px] max-sm:w-[45px] max-w-full text-center rounded-[12px] bg-[#ffffff15] max-sm:p-[0px] py-2 px-4 max-sm:flex max-sm:justify-center max-sm:items-center">
                                3
                              </span>
                              <span className="w-[85px] max-sm:w-[45px] max-w-full text-center rounded-[12px] bg-[#ffffff15] max-sm:p-[0px] py-2 px-4 max-sm:flex max-sm:justify-center max-sm:items-center">
                                5
                              </span>
                            </div>
                          </div>
                          <span className="text-[55px] max-sm:text-[35px] text-white sm:mt-[35px] max-sm:h-[20px] max-sm:mx-[5px]">
                            :
                          </span>
                          <div className="flex flex-col text-[85px] max-sm:text-[50px] text-[#FFF000]">
                            <span className="text-[25px] max-sm:text-[16px] text-white mb-[5px]">
                              Hours
                            </span>
                            <div className="flex space-x-3 max-sm:space-x-2 about-us-countdown-timer">
                              <span className="w-[85px] max-sm:w-[45px] max-w-full text-center rounded-[12px] bg-[#ffffff15] max-sm:p-[0px] py-2 px-4 max-sm:flex max-sm:justify-center max-sm:items-center">
                                0
                              </span>
                              <span className="w-[85px] max-sm:w-[45px] max-w-full text-center rounded-[12px] bg-[#ffffff15] max-sm:p-[0px] py-2 px-4 max-sm:flex max-sm:justify-center max-sm:items-center">
                                2
                              </span>
                            </div>
                          </div>
                          <span className="text-[55px] max-sm:text-[35px] text-white sm:mt-[35px] max-sm:h-[20px] max-sm:mx-[5px]">
                            :
                          </span>
                          <div className="flex flex-col text-[85px] max-sm:text-[50px] text-[#FFF000]">
                            <span className="text-[25px] max-sm:text-[16px] text-white mb-[5px]">
                              Minutes
                            </span>
                            <div className="flex space-x-3 max-sm:space-x-2 about-us-countdown-timer">
                              <span className="w-[85px] max-sm:w-[45px] max-w-full text-center rounded-[12px] bg-[#ffffff15] max-sm:p-[0px] py-2 px-4 max-sm:flex max-sm:justify-center max-sm:items-center">
                                2
                              </span>
                              <span className="w-[85px] max-sm:w-[45px] max-w-full text-center rounded-[12px] bg-[#ffffff15] max-sm:p-[0px] py-2 px-4 max-sm:flex max-sm:justify-center max-sm:items-center">
                                7
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-4">
                        <img
                          src="https://niza.io/icons/about-us-web.png"
                          alt="Web"
                          style={{ filter: "blur(0px)" }}
                        />
                        <img
                          src="https://niza.io/icons/about-us-mobile.png"
                          alt="Mobile"
                          style={{ filter: "blur(0px)" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center py-16 min-h-screen bg-[#10171b]">
                <div className="container m-auto lg:flex items-center flex-col fadeIn">
                  <div className="flex flex-col">
                    <p
                      className="text-[42px] max-sm:text-[38px] lg:text-[64px] font-[700] text-white text-center mb-[28px] tracking-[-2.56px]"
                      style={{ lineHeight: "normal" }}
                    >
                      Token Information
                    </p>
                  </div>
                  <div className="flex justify-center max-lg:mb-[30px] mb-[50px] w-full">
                    {/* <coingecko-coin-ticker-widget
                      classname="flex justify-center text-white! w-full"
                      coin-id="niza-global"
                      currency="usd"
                      locale="en"
                      text-color="#ffffff"
                      background-color="#10171b"
                      width="400"
                      vce-ready=""
                    ></coingecko-coin-ticker-widget> */}
                  </div>
                  <div className="w-full flex justify-center max-w-[1130px]">
                    <div
                      className="w-full rounded-[16px] relative max-md:h-[495px] max-sm:h-[442px]"
                      style={{
                        background: "rgba(9, 68, 181, 0.12)",
                        border: "1px solid rgba(255, 255, 255, 0.16)",
                      }}
                    >
                      <div className="max-w-[796px] text-white pt-[67px] pl-[40px] flex flex-col max-sm:pt-[57px] max-lg:px-[36px]">
                        <p
                          className="font-medium text-[36px] mb-[24px] max-sm:text-[28px] tracking-[-1.44px]"
                          style={{ lineHeight: "normal" }}
                        >
                          Contract Address
                        </p>
                        <p
                          className="text-[20px] max-sm:text-[18px] tracking-[-0.8px]"
                          style={{
                            color: "rgba(255, 255, 255, 0.8)",
                            lineHeight: "normal",
                          }}
                        >
                          Name:{" "}
                          <span className="text-[24px] text-white font-medium max-sm:text-[18px] tracking-[-0.96px]">
                            Niza
                          </span>
                        </p>
                        <p
                          className="text-[20px] max-sm:text-[18px] tracking-[-0.8px]"
                          style={{
                            color: "rgba(255, 255, 255, 0.8)",
                            lineHeight: "normal",
                          }}
                        >
                          Symbol:{" "}
                          <span className="text-[24px] text-white font-medium max-sm:text-[18px] tracking-[-0.96px]">
                            NIZA
                          </span>
                        </p>
                        <p
                          className="text-[20px] mb-[24px] max-sm:text-[18px] tracking-[-0.8px]"
                          style={{
                            color: "rgba(255, 255, 255, 0.8)",
                            lineHeight: "normal",
                          }}
                        >
                          Total Supply:
                          <span className="text-[24px] text-white font-medium max-sm:text-[18px] tracking-[-0.96px]">
                            10,000,000,000
                          </span>
                        </p>
                        <div
                          className="max-w-[720px] p-[16px] rounded-[12px] mb-[32px] flex items-center justify-center cursor-pointer z-10"
                          style={{ background: "rgba(255, 255, 255, 0.08)" }}
                        >
                          <p className="text-[28px] text-white font-medium tokenInformation">
                            0xb58e26ac9cc14c0422c2b419b0ca555ee4dcb7cb
                          </p>
                        </div>
                        <div className="absolute top-0 right-0 max-md:top-[65%] max-sm:top-[60%] coinPosition">
                          <img
                            src="https://niza.io/informationImg.svg"
                            className="coinHeight h-[361px] max-md:h-[175px]"
                            alt="Coins"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="relative flex items-center py-16 min-h-screen bg-[#10171b]"
                id="roadmap"
              >
                <div className="w-full fadeIn">
                  <div className="container">
                    <div className="w-full flex flex-col max-lg:mb-[30px] items-center text-center mb-[64px]">
                      <p
                        className="text-[42px] max-sm:text-[38px] lg:text-[64px] font-[700] text-white text-center mb-[24px] tracking-[-2.56px]"
                        style={{ lineHeight: "normal" }}
                      >
                        NIZA Coin Product
                        <span className="text-custom-primary">Roadmap</span>
                      </p>
                      <p
                        className="text-[20px] max:sm-text-[18px] max-w-[756px] tracking-[-0.8px]"
                        style={{ color: "rgba(255, 255, 255, 0.7)" }}
                      >
                        In the coming months, Niza Global will become the only
                        all-in-one financial ecosystem. Our approach combines a
                        cryptocurrency exchange, a secure banking system, and
                        innovative digital payment solutions—all under one roof.
                      </p>
                    </div>
                  </div>
                  <div className="w-full mx-auto">
                    <div className="timeline">
                      <div className="absolute top-[45%] 2xl:left-[-3%] left-[-1%] z-[10] cursor-pointer timeline-arrow">
                        <svg
                          width="72"
                          height="72"
                          viewBox="0 0 1024 1024"
                          className="icon rotate-180"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#ffffff"
                          stroke="#ffffff"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <path
                              d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                              fill="#fff"
                            ></path>
                          </g>
                        </svg>
                      </div>
                      <ol className="timeline-scroller">
                        <li>
                          <div className="flex flex-col">
                            <span className="pb-2 text-gray-300 self-end">
                              Q3 2023
                            </span>
                            <h2 className="m-0 mb-6 uppercase flex items-center gap-x-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="50"
                                height="50"
                                x="0"
                                y="0"
                                viewBox="0 0 511 512"
                                xmlSpace="preserve"
                                className=""
                              >
                                <g>
                                  <path
                                    fill="#ff5b5b"
                                    d="M157.086 266.195c-.324 0-.649-.011-.977-.03l-140.96-8.802a15.617 15.617 0 0 1-12.657-23.222c.738-1.32 18.504-32.645 52.336-59.965 45.719-36.914 98.867-48.887 153.695-34.621a15.622 15.622 0 0 1 10.063 22.05l-47.504 95.903a15.627 15.627 0 0 1-13.996 8.687zm0 0"
                                    opacity="1"
                                    data-original="#ff5b5b"
                                    className=""
                                  ></path>
                                  <path
                                    fill="#ff193d"
                                    d="M270.723 512a15.623 15.623 0 0 1-15.59-14.648l-8.797-140.961a15.626 15.626 0 0 1 8.656-14.973l95.903-47.508a15.618 15.618 0 0 1 13.418-.21 15.603 15.603 0 0 1 8.632 10.277c14.27 54.828 2.297 107.976-34.62 153.695-27.317 33.832-58.645 51.594-59.966 52.336a15.619 15.619 0 0 1-7.636 1.992zm0 0"
                                    opacity="1"
                                    data-original="#ff193d"
                                  ></path>
                                  <path
                                    fill="#e1f1fa"
                                    d="m487.441 126.059-101-101a15.623 15.623 0 0 0-15.472-3.934c-67.614 20-123.117 51.367-164.98 93.227-8.731 8.734-17.118 18.199-24.923 28.128-22.695 28.856-41.652 62.973-56.34 101.407-9.355 24.496-16.972 50.738-22.64 77.996-9.899 47.613-10.43 81.738-10.45 83.168a15.63 15.63 0 0 0 4.575 11.238 15.626 15.626 0 0 0 11.047 4.574h.191c1.434-.015 35.559-.547 83.168-10.445 27.258-5.668 53.5-13.285 78-22.645 38.43-14.687 72.547-33.64 101.395-56.332 9.937-7.808 19.402-16.195 28.136-24.93 41.864-41.863 73.23-97.366 93.227-164.98a15.615 15.615 0 0 0-3.934-15.472zm0 0"
                                    opacity="1"
                                    data-original="#e1f1fa"
                                  ></path>
                                  <path
                                    fill="#fff261"
                                    d="m201.29 386.883-75.673-75.672c-5.586-5.586-14.465-6.121-20.683-1.246a152.26 152.26 0 0 0-13.664 12.094c-52.653 52.652-54.282 134.234-54.325 137.68a15.6 15.6 0 0 0 4.575 11.241 15.605 15.605 0 0 0 11.042 4.579c.067 0 .133 0 .2-.004 3.445-.043 85.031-1.672 137.68-54.325a152.26 152.26 0 0 0 12.093-13.664c4.875-6.218 4.34-15.097-1.246-20.683zm0 0"
                                    opacity="1"
                                    data-original="#fff261"
                                  ></path>
                                  <path
                                    fill="#1b3b6b"
                                    d="m125.934 240.762-46.426 46.43a15.607 15.607 0 0 0 0 22.085l123.715 123.715c2.925 2.93 6.898 4.574 11.043 4.574s8.113-1.644 11.043-4.574l46.425-46.426zm0 0"
                                    opacity="1"
                                    data-original="#1b3b6b"
                                  ></path>
                                  <path
                                    fill="#06ccab"
                                    d="M328.602 231.55c-12.727 0-24.696-4.956-33.696-13.956-18.578-18.578-18.578-48.805 0-67.387 9-9 20.969-13.957 33.696-13.957 12.726 0 24.695 4.957 33.695 13.957s13.957 20.965 13.957 33.695c0 12.727-4.957 24.692-13.957 33.692s-20.969 13.957-33.695 13.957zm0 0"
                                    opacity="1"
                                    data-original="#06ccab"
                                  ></path>
                                  <path
                                    fill="#1b3b6b"
                                    d="M328.598 246.828c-16.809 0-32.61-6.547-44.493-18.43-24.535-24.535-24.535-64.457 0-88.992 11.883-11.883 27.688-18.43 44.493-18.43 16.808 0 32.609 6.547 44.496 18.43 11.886 11.887 18.43 27.688 18.43 44.496s-6.544 32.61-18.43 44.496c-11.887 11.883-27.688 18.43-44.496 18.43zm0-94.613c-8.461 0-16.422 3.297-22.407 9.281-12.351 12.356-12.351 32.457 0 44.813 5.985 5.984 13.946 9.28 22.407 9.28 8.464 0 16.422-3.296 22.406-9.28s9.281-13.942 9.281-22.407-3.297-16.422-9.281-22.406-13.942-9.281-22.406-9.281zm0 0"
                                    opacity="1"
                                    data-original="#1b3b6b"
                                  ></path>
                                  <path
                                    fill="#ff5b5b"
                                    d="M507.926 4.578c-2.98-2.98-7.059-4.656-11.246-4.574-2.317.027-57.532.957-125.711 21.121l120.406 120.406c20.164-68.18 21.094-123.394 21.121-125.71a15.613 15.613 0 0 0-4.57-11.243zm0 0"
                                    opacity="1"
                                    data-original="#ff5b5b"
                                    className=""
                                  ></path>
                                  <path
                                    fill="#cdebfc"
                                    d="m487.441 126.059-50.5-50.5-340.73 340.73a15.617 15.617 0 0 0 11.043 4.574h.195c1.43-.015 35.555-.547 83.168-10.445 27.258-5.668 53.496-13.285 77.996-22.645 38.434-14.687 72.551-33.64 101.399-56.332 9.933-7.808 19.402-16.195 28.133-24.93 41.863-41.863 73.23-97.366 93.226-164.98a15.604 15.604 0 0 0-3.93-15.472zm0 0"
                                    opacity="1"
                                    data-original="#cdebfc"
                                  ></path>
                                  <path
                                    fill="#fdbf00"
                                    d="m201.29 386.883-37.837-37.836L41.516 470.98v.004a15.633 15.633 0 0 0 11.047 4.575h.195c3.449-.043 85.031-1.676 137.683-54.329a151.615 151.615 0 0 0 12.09-13.664c4.88-6.218 4.348-15.097-1.242-20.683zm0 0"
                                    opacity="1"
                                    data-original="#fdbf00"
                                  ></path>
                                  <path
                                    fill="#001035"
                                    d="m198.836 313.664-57.473 57.473 61.86 61.86a15.62 15.62 0 0 0 22.086 0l46.425-46.43zm0 0"
                                    opacity="1"
                                    data-original="#001035"
                                  ></path>
                                  <path
                                    fill="#1cadb5"
                                    d="M362.297 150.207h-.004l-67.387 67.387h.004c8.996 9 20.965 13.957 33.692 13.957 12.726 0 24.695-4.957 33.695-13.957s13.957-20.965 13.957-33.692c-.004-12.726-4.957-24.695-13.957-33.695zm0 0"
                                    opacity="1"
                                    data-original="#1cadb5"
                                  ></path>
                                  <path
                                    fill="#001035"
                                    d="m373.094 139.406-22.09 22.09c5.984 5.984 9.281 13.941 9.281 22.406s-3.297 16.422-9.281 22.407-13.941 9.28-22.406 9.28-16.422-3.296-22.407-9.28v-.004l-22.09 22.09v.003c11.887 11.883 27.688 18.43 44.497 18.43s32.609-6.547 44.496-18.43c11.883-11.886 18.43-27.687 18.43-44.496s-6.547-32.609-18.43-44.496zm0 0"
                                    opacity="1"
                                    data-original="#001035"
                                  ></path>
                                  <path
                                    fill="#ff193d"
                                    d="m507.922 4.574-76.75 76.754 60.203 60.203c20.164-68.18 21.094-123.394 21.121-125.71a15.616 15.616 0 0 0-4.574-11.247zm0 0"
                                    opacity="1"
                                    data-original="#ff193d"
                                  ></path>
                                </g>
                              </svg>{" "}
                              Niza Coin Launch
                            </h2>
                            <p className="m-0">
                              NIZA token creation, website launch, and
                              establishment of community groups and social
                              channels.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="flex flex-col">
                            <span className="pb-2 text-gray-300 self-end">
                              Q4 2023
                            </span>
                            <h2 className="m-0 mb-6 uppercase flex items-center gap-x-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="50"
                                height="50"
                                x="0"
                                y="0"
                                viewBox="0 0 64 64"
                                xmlSpace="preserve"
                                className=""
                              >
                                <g>
                                  <path
                                    fill="#f4f5f7"
                                    d="M22.34 53.58h-4.03v-.01h-4.04c-.94 0-1.4-1.13-.73-1.79l.43-.42a5.266 5.266 0 0 0 1.54-4.22l-.63-6.925h1.14c1.93 0 3.77.259 5.66.539v.126l-.58 6.26c-.13 1.56.43 3.12 1.55 4.22l.42.42c.68.66.21 1.8-.73 1.8zM11.71 24.04c-3.63 0-6.57 2.6-6.57 5.81v.02c0 3.21 2.94 5.81 6.57 5.81h.576V24.04z"
                                    opacity="1"
                                    data-original="#f4f5f7"
                                    className=""
                                  ></path>
                                  <path
                                    fill="#fed2a5"
                                    d="M45.25 24.47h-.982v10.78h.982c2.98 0 5.39-2.42 5.39-5.39 0-2.98-2.41-5.39-5.39-5.39z"
                                    opacity="1"
                                    data-original="#fed2a5"
                                  ></path>
                                  <path
                                    fill="#e95b6b"
                                    d="M45.25 10.42V49.3h-4.04a40.247 40.247 0 0 0-15.87-7.73c-1.2-.3-2.42-.53-3.66-.7-1.89-.28-3.8-.42-5.73-.42h-2.14c-1.16 0-2.1-.94-2.1-2.09v-17c0-1.16.94-2.1 2.1-2.1h2.14c3.19 0 6.34-.38 9.39-1.12a40.092 40.092 0 0 0 15.87-7.72h4.04z"
                                    opacity="1"
                                    data-original="#e95b6b"
                                    className=""
                                  ></path>
                                  <path
                                    fill="#c3ccdb"
                                    d="M9.71 35.404a7.358 7.358 0 0 0 2 .276V24.04c-.698 0-1.369.098-2 .276z"
                                    opacity="1"
                                    data-original="#c3ccdb"
                                    className=""
                                  ></path>
                                  <path
                                    fill="#f4f5f7"
                                    d="M41.21 10.42V49.3a40.247 40.247 0 0 0-15.87-7.73V18.14a40.092 40.092 0 0 0 15.87-7.72z"
                                    opacity="1"
                                    data-original="#f4f5f7"
                                    className=""
                                  ></path>
                                  <path
                                    fill="#c3ccdb"
                                    d="m14.9 40.45.274 3h.777c1.776 0 3.556.13 5.322.392.044.006.087.015.131.021l.276-2.984v-.01c-1.89-.28-3.8-.42-5.73-.42H14.9z"
                                    opacity="1"
                                    data-original="#c3ccdb"
                                    className=""
                                  ></path>
                                  <g fill="#767c94">
                                    <path
                                      d="M52.595 21.249a.997.997 0 0 0 .707-.293l3.055-3.054a.999.999 0 1 0-1.414-1.414l-3.055 3.054a.999.999 0 0 0 .707 1.707zM53.302 37.303a.999.999 0 1 0-1.414 1.414l3.055 3.054a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414zM58.857 28.129h-4.32a1 1 0 1 0 0 2h4.32a1 1 0 1 0 0-2z"
                                      fill="#767c94"
                                      opacity="1"
                                      data-original="#767c94"
                                    ></path>
                                  </g>
                                  <path
                                    fill="#e2ae7f"
                                    d="M47.25 24.862a5.363 5.363 0 0 0-2-.392v10.78c.708 0 1.381-.145 2-.394z"
                                    opacity="1"
                                    data-original="#e2ae7f"
                                  ></path>
                                </g>
                              </svg>{" "}
                              Listing and Marketing
                            </h2>
                            <p className="m-0">
                              Listing NIZA token on both decentralized (DEX) and
                              centralized (CEX) exchanges, implementing targeted
                              marketing strategies, and bring up partnerships
                              with investors.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="flex flex-col">
                            <span className="pb-2 text-gray-300 self-end">
                              Q1 2024
                            </span>
                            <h2 className="m-0 mb-6 uppercase flex items-center gap-x-3">
                              <svg
                                width="50"
                                height="50"
                                viewBox="0 0 48 42"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M36.0111 1.00122L35.7989 0.576843H12.6173L1 21L12.5643 41.4232H35.7459L47.3632 21L36.0111 1.00122ZM15.3227 7.89735L2.9097 19.7799L12.7765 2.38045L15.3227 7.89735ZM35.1624 2.3274L38.5574 21.2652L17.2324 8.16259L35.1624 2.3274ZM16.4898 8.95829L38.2391 22.3262L16.4898 34.6862V8.95829ZM38.5043 23.3871L34.6849 39.7257L17.3916 35.4288L38.5043 23.3871ZM15.4288 34.2618L2.9097 21.2652L15.4288 9.22353V34.2618ZM15.2697 35.641L12.8295 39.7257L3.75845 23.7054L15.2697 35.641ZM16.2245 36.1715L32.8813 40.3622H13.6783L16.2245 36.1715ZM39.7244 22.7506L45.8779 21.4244L35.905 39.036L39.7244 22.7506ZM45.7718 20.4165L39.7244 21.7427L36.5946 4.18405L45.7718 20.4165ZM16.2245 7.36688L13.5722 1.63779H33.8362L16.2245 7.36688Z"
                                  fill="url(#paint0_linear_656_85883)"
                                  stroke="url(#paint1_linear_656_85883)"
                                  strokeWidth="0.736766"
                                ></path>
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_656_85883"
                                    x1="47.6251"
                                    y1="9.0116"
                                    x2="0.795288"
                                    y2="6.13364"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#F2F230"></stop>
                                    <stop offset="1" stopColor="#888827"></stop>
                                  </linearGradient>
                                  <linearGradient
                                    id="paint1_linear_656_85883"
                                    x1="47.6251"
                                    y1="9.0116"
                                    x2="0.795288"
                                    y2="6.13364"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#F2F230"></stop>
                                    <stop offset="1" stopColor="#888827"></stop>
                                  </linearGradient>
                                </defs>
                              </svg>{" "}
                              Niza Global CEX Platform Launch
                            </h2>
                            <p className="m-0">
                              Launch Niza Global UAB&apos;s CEX (Web and
                              Mobile), listing NIZA Coin on our platform. We
                              will also continue our marketing and bring up
                              investors to our company.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="flex flex-col">
                            <span className="pb-2 text-gray-300 self-end">
                              Q2 2024
                            </span>
                            <h2 className="m-0 mb-6 uppercase flex items-center gap-x-3">
                              <svg
                                width="64"
                                height="64"
                                viewBox="0 0 64 64"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M2 23.8776V44.7552H32.5H63V23.8776V3H32.5H2V23.8776ZM25.5505 14.7023L30.7106 17.3797L30.6819 23.8626L30.6533 30.3453L26.0664 32.7469C23.5436 34.0678 21.2061 35.2867 20.8719 35.4556L20.2644 35.7627L15.0032 33.0234L9.7421 30.2842L9.7729 23.8496L9.8037 17.4148L14.9268 14.727C17.7444 13.2486 20.1264 12.0358 20.2202 12.032C20.3138 12.028 22.7126 13.2297 25.5505 14.7023ZM17.9304 17.2317C16.6388 17.9023 15.5827 18.4806 15.5837 18.5169C15.5847 18.5533 16.637 19.1315 17.9223 19.8017L20.2593 21.0206L22.6241 19.8017C23.9246 19.1315 24.9889 18.5559 24.9889 18.5228C24.989 18.4897 23.9293 17.9114 22.6338 17.2376L20.2787 16.0125L17.9304 17.2317ZM46.382 17.9937C47.3939 18.2214 47.8691 18.3806 47.8691 18.4919C47.8691 18.6324 45.4493 29.4303 45.2973 29.9678C45.2485 30.14 45.0547 30.118 43.572 29.7719C42.6532 29.5575 41.876 29.3563 41.8448 29.3248C41.8136 29.2934 42.3884 26.6296 43.1222 23.4054C44.3279 18.1074 44.4773 17.5489 44.6756 17.6012C44.7963 17.6331 45.5641 17.8097 46.382 17.9937ZM40.3633 22.5539L39.0526 23.8816L40.3632 25.2011L41.6738 26.5208L40.4548 27.7563C39.7843 28.4358 39.1807 28.9917 39.1134 28.9917C38.9569 28.9917 34.0488 24.0355 34.0488 23.8776C34.0488 23.8125 35.1875 22.6083 36.579 21.2017L39.1093 18.6441L40.3916 19.9352L41.6739 21.2263L40.3633 22.5539ZM53.1419 26.494L50.5515 29.1124L49.3011 27.8494L48.0506 26.5864L49.3299 25.2902C50.0337 24.5773 50.6094 23.9416 50.6094 23.8776C50.6094 23.8136 50.0339 23.1782 49.3306 22.4657L48.052 21.1702L49.2993 19.9062L50.5467 18.642L53.1396 21.2588L55.7324 23.8755L53.1419 26.494ZM13.3203 24.8102L13.3222 28.0892L15.8082 29.3828C17.1755 30.0942 18.3273 30.6763 18.3678 30.6763C18.4083 30.6763 18.4403 29.2008 18.439 27.3973L18.4366 24.1183L15.9483 22.8247C14.5796 22.1133 13.428 21.5311 13.3891 21.5311C13.3502 21.5311 13.3192 23.0066 13.3203 24.8102ZM24.5176 22.8516L22.0752 24.1442L22.0435 27.4103C22.0249 29.3251 22.0568 30.6763 22.1207 30.6763C22.1805 30.6763 23.334 30.1034 24.6841 29.4032L27.1387 28.1302V24.8306C27.1387 23.0159 27.0984 21.5374 27.0493 21.545C27.0002 21.5527 25.8609 22.1406 24.5176 22.8516ZM26.6621 52.8776V57.39H22.0752H17.4883V59.195V61H32.5H47.5117V59.195V57.39H42.9248H38.3379V52.8776V48.3651H32.5H26.6621V52.8776Z"
                                  fill="white"
                                ></path>
                              </svg>{" "}
                              DEX Wallet Launch
                            </h2>
                            <p className="m-0">
                              We are excited to launch the Niza DEX Wallet as a
                              separate web and mobile application.
                            </p>
                          </div>
                        </li>
                        <li></li>
                      </ol>
                      <div className="absolute top-[45%] right-[-3%] z-[10] 2xl:right-[-3%] right-[-1%] cursor-pointer timeline-arrow">
                        <svg
                          width="72"
                          height="72"
                          viewBox="0 0 1024 1024"
                          className="icon"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#ffffff"
                          stroke="#ffffff"
                        >
                          <g strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g>
                            <path
                              d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                              fill="#fff"
                            ></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="relative flex items-center py-16 min-h-screen bg-[#10171b]"
                id="contact-us"
              >
                <div
                  className="h-full w-full absolute"
                  style={{
                    backgroundImage: `url("https://niza.io/gradientBg5.svg")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "0% 90%",
                  }}
                ></div>
                <div className="container m-auto lg:flex items-center flex-col z-10 fadeIn">
                  <div className="max-md:w-[90%] max-md:m-auto">
                    <p
                      className="text-[42px] lg:text-[54px] xl:text-[64px] font-bold text-center text-white"
                      style={{ letterSpacing: "-2.16px" }}
                    >
                      Communities
                    </p>
                  </div>
                  <div className="flex justify-center mt-[46px]">
                    <div className="max-md:w-[90%] grid lg:grid-cols-3 gap-6">
                      <div className="px-[34px] py-[35px] rounded-xl communities-twitter">
                        <div className="flex items-center gap-3">
                          <svg
                            width="36"
                            height="37"
                            viewBox="0 0 36 37"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_64_2356)">
                              <path
                                d="M21.4284 15.6687L34.8324 0H31.6572L20.0136 13.6022L10.7208 0H0L14.0556 20.5708L0 36.9999H3.1752L15.4632 22.6325L25.2792 36.9999H36M4.3212 2.40792H9.1992L31.6548 34.7103H26.7756"
                                fill="white"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_64_2356">
                                <rect
                                  width="36"
                                  height="37"
                                  fill="white"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                          <h2 className="text-white text-2xl font-bold leading-7 tracking-[-0.48px] my-0 max-sm:text-[20px] max-sm:gap-4">
                            X.com{" "}
                            <span className="text-white text-opacity-50 font-normal">
                              (Ex Twitter)
                            </span>
                          </h2>
                        </div>
                        <div className="mt-6">
                          <a
                            href="https://twitter.com/nizacoin"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-6 text-white text-2xl leading-7 tracking-[-0.48px] max-sm:text-[20px] max-sm:gap-4"
                          >
                            x.com/nizacoin
                            <svg
                              width="34"
                              height="35"
                              viewBox="0 0 34 35"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M26.5626 8.9375V22.75C26.5626 23.0318 26.4507 23.302 26.2514 23.5013C26.0521 23.7006 25.7819 23.8125 25.5001 23.8125C25.2183 23.8125 24.9481 23.7006 24.7488 23.5013C24.5495 23.302 24.4376 23.0318 24.4376 22.75V11.5021L9.25182 26.6892C9.05245 26.8886 8.78205 27.0006 8.5001 27.0006C8.21815 27.0006 7.94775 26.8886 7.74838 26.6892C7.54902 26.4899 7.43701 26.2194 7.43701 25.9375C7.43701 25.6556 7.54902 25.3851 7.74838 25.1858L22.9355 10H11.6876C11.4058 10 11.1356 9.88806 10.9363 9.6888C10.737 9.48954 10.6251 9.21929 10.6251 8.9375C10.6251 8.65571 10.737 8.38546 10.9363 8.1862C11.1356 7.98694 11.4058 7.875 11.6876 7.875H25.5001C25.7819 7.875 26.0521 7.98694 26.2514 8.1862C26.4507 8.38546 26.5626 8.65571 26.5626 8.9375Z"
                                fill="white"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="px-[34px] py-[35px] rounded-xl communities-telegram">
                        <div className="flex items-center gap-3">
                          <svg
                            width="36"
                            height="37"
                            viewBox="0 0 36 37"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_64_2365)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M27.5761 34.6687C28.0591 35.0107 28.6816 35.0962 29.2366 34.8862C29.7916 34.6747 30.1996 34.2007 30.3226 33.6262C31.6261 27.5002 34.7881 11.9947 35.9746 6.42222C36.0646 6.00222 35.9146 5.56572 35.5846 5.28522C35.2546 5.00472 34.7971 4.92372 34.3891 5.07522C28.0996 7.40322 8.73011 14.6707 0.813108 17.6002C0.310608 17.7862 -0.0163915 18.2692 0.000108499 18.7987C0.0181085 19.3297 0.375108 19.7902 0.889608 19.9447C4.44011 21.0067 9.10061 22.4842 9.10061 22.4842C9.10061 22.4842 11.2786 29.0617 12.4141 32.4067C12.5566 32.8267 12.8851 33.1567 13.3186 33.2707C13.7506 33.3832 14.2126 33.2647 14.5351 32.9602C16.3591 31.2382 19.1791 28.5757 19.1791 28.5757C19.1791 28.5757 24.5371 32.5042 27.5761 34.6687ZM11.0611 21.6532L13.5796 29.9602L14.1391 24.6997C14.1391 24.6997 23.8696 15.9232 29.4166 10.9207C29.5786 10.7737 29.6011 10.5277 29.4661 10.3552C29.3326 10.1827 29.0866 10.1422 28.9021 10.2592C22.4731 14.3647 11.0611 21.6532 11.0611 21.6532Z"
                                fill="white"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_64_2365">
                                <rect
                                  width="36"
                                  height="36"
                                  fill="white"
                                  transform="translate(0 0.5)"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                          <h2 className="text-white text-2xl font-bold leading-7 tracking-[-0.48px] my-0 max-sm:text-[20px] max-sm:gap-4">
                            Telegram{" "}
                            <span className="text-white text-opacity-50 font-normal"></span>
                          </h2>
                        </div>
                        <div className="mt-6">
                          <a
                            href="https://t.me/nizaio"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-6 text-white text-2xl leading-7 tracking-[-0.48px] max-sm:text-[20px] max-sm:gap-4"
                          >
                            t.me/nizaio
                            <svg
                              width="34"
                              height="35"
                              viewBox="0 0 34 35"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M26.5626 8.9375V22.75C26.5626 23.0318 26.4507 23.302 26.2514 23.5013C26.0521 23.7006 25.7819 23.8125 25.5001 23.8125C25.2183 23.8125 24.9481 23.7006 24.7488 23.5013C24.5495 23.302 24.4376 23.0318 24.4376 22.75V11.5021L9.25182 26.6892C9.05245 26.8886 8.78205 27.0006 8.5001 27.0006C8.21815 27.0006 7.94775 26.8886 7.74838 26.6892C7.54902 26.4899 7.43701 26.2194 7.43701 25.9375C7.43701 25.6556 7.54902 25.3851 7.74838 25.1858L22.9355 10H11.6876C11.4058 10 11.1356 9.88806 10.9363 9.6888C10.737 9.48954 10.6251 9.21929 10.6251 8.9375C10.6251 8.65571 10.737 8.38546 10.9363 8.1862C11.1356 7.98694 11.4058 7.875 11.6876 7.875H25.5001C25.7819 7.875 26.0521 7.98694 26.2514 8.1862C26.4507 8.38546 26.5626 8.65571 26.5626 8.9375Z"
                                fill="white"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="px-[34px] py-[35px] rounded-xl communities-discord">
                        <div className="flex items-center gap-3">
                          <svg
                            width="36"
                            height="29"
                            viewBox="0 0 36 29"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M30.4954 2.8964C28.1651 1.80609 25.6734 1.0137 23.0683 0.5625C22.7484 1.14092 22.3746 1.9189 22.117 2.53778C19.3477 2.12133 16.604 2.12133 13.8857 2.53778C13.6281 1.9189 13.2458 1.14092 12.923 0.5625C10.3152 1.0137 7.82063 1.809 5.49029 2.90217C0.789964 10.005 -0.484217 16.9314 0.152875 23.7594C3.27038 26.0875 6.29161 27.5017 9.26186 28.4271C9.99523 27.4178 10.6493 26.3449 11.2128 25.2141C10.1396 24.8063 9.11179 24.3031 8.14061 23.7189C8.39826 23.528 8.65028 23.3285 8.89377 23.1231C14.8173 25.8937 21.2533 25.8937 27.1061 23.1231C27.3525 23.3285 27.6044 23.528 27.8593 23.7189C26.8852 24.306 25.8546 24.8092 24.7814 25.217C25.3449 26.3449 25.9962 27.4207 26.7323 28.43C29.7054 27.5046 32.7295 26.0904 35.847 23.7594C36.5945 15.844 34.57 8.98119 30.4954 2.8964ZM12.0198 19.5602C10.2416 19.5602 8.78333 17.9002 8.78333 15.8787C8.78333 13.8571 10.2104 12.1942 12.0198 12.1942C13.8291 12.1942 15.2873 13.8542 15.2562 15.8787C15.259 17.9002 13.8291 19.5602 12.0198 19.5602ZM23.9801 19.5602C22.2019 19.5602 20.7437 17.9002 20.7437 15.8787C20.7437 13.8571 22.1707 12.1942 23.9801 12.1942C25.7894 12.1942 27.2477 13.8542 27.2165 15.8787C27.2165 17.9002 25.7894 19.5602 23.9801 19.5602Z"
                              fill="white"
                            ></path>
                          </svg>
                          <h2 className="text-white text-2xl font-bold leading-7 tracking-[-0.48px] my-0 max-sm:text-[20px] max-sm:gap-4">
                            Discord{" "}
                            <span className="text-white text-opacity-50 font-normal"></span>
                          </h2>
                        </div>
                        <div className="mt-6">
                          <a
                            href="https://discord.gg/Niza"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-6 text-white text-2xl leading-7 tracking-[-0.48px] max-sm:text-[20px] max-sm:gap-4"
                          >
                            discord.gg/Niza
                            <svg
                              width="34"
                              height="35"
                              viewBox="0 0 34 35"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M26.5626 8.9375V22.75C26.5626 23.0318 26.4507 23.302 26.2514 23.5013C26.0521 23.7006 25.7819 23.8125 25.5001 23.8125C25.2183 23.8125 24.9481 23.7006 24.7488 23.5013C24.5495 23.302 24.4376 23.0318 24.4376 22.75V11.5021L9.25182 26.6892C9.05245 26.8886 8.78205 27.0006 8.5001 27.0006C8.21815 27.0006 7.94775 26.8886 7.74838 26.6892C7.54902 26.4899 7.43701 26.2194 7.43701 25.9375C7.43701 25.6556 7.54902 25.3851 7.74838 25.1858L22.9355 10H11.6876C11.4058 10 11.1356 9.88806 10.9363 9.6888C10.737 9.48954 10.6251 9.21929 10.6251 8.9375C10.6251 8.65571 10.737 8.38546 10.9363 8.1862C11.1356 7.98694 11.4058 7.875 11.6876 7.875H25.5001C25.7819 7.875 26.0521 7.98694 26.2514 8.1862C26.4507 8.38546 26.5626 8.65571 26.5626 8.9375Z"
                                fill="white"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#131719] pt-[54px] pb-[30px]">
              <div className="container m-auto block lg:flex justify-between max-lg:px-[20px] max-lg:py-[32px] max-lg:rounded-[32px]">
                <div>
                  <img
                    src="https://niza.io/icons/nizatoken-logo.png"
                    alt=""
                    className="h-[60px] mb-4 translate-x-[-10px] max-md:h-[90px] max-md:translate-x-[-15px]"
                  />
                  <p className="text-[18px] max-w-[500px] xl:w-[500px] font-[500] text-white/80 mb-4 tracking-[-0.36px] leading-[30px]">
                    Niza Coin is owned and operated by Niza Global UAB with
                    registration number 306048866 and license number 306048866
                    for Providing virtual currency service. <br />
                    Adress: Architektų g.56-101, LT-04111 Vilnius, Lithuania.
                  </p>
                  <div className="flex gap-[15px] pb-[13px]">
                    <a
                      rel="noopener noreferrer"
                      href="https://twitter.com/nizacoin"
                      target="_blank"
                    >
                      <img
                        src="https://niza.io/icons/twitter.png"
                        alt=""
                        className="p-[7.5px] bg-[#26242C] rounded-[3px] w-[40px]"
                      />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="https://t.me/nizaio"
                      target="_blank"
                    >
                      <img
                        src="https://niza.io/icons/plne.png"
                        alt=""
                        className="p-[7.5px] bg-[#26242C] rounded-[3px] w-[40px]"
                      />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="https://discord.gg/Niza"
                      target="_blank"
                    >
                      <img
                        src="https://niza.io/icons/discord.png"
                        alt=""
                        className="p-[7.5px] bg-[#26242C] rounded-[3px] w-[40px]"
                      />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      className="ml-[20px]"
                      href="https://coinmarketcap.com/currencies/niza-global/"
                      target="_blank"
                    >
                      <img
                        src="https://niza.io/icons/coin-market-logo.png"
                        alt=""
                        className="w-[40px]"
                      />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="https://www.coingecko.com/en/coins/niza-global"
                      target="_blank"
                    >
                      <img
                        src="https://niza.io/icons/coin-gecko-logo.png"
                        alt=""
                        className="w-[40px]"
                      />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="https://www.cyberscope.io/audits/niza"
                      target="_blank"
                    >
                      <img
                        src="https://niza.io/icons/cyber-scope-logo.svg"
                        alt=""
                        className="w-[40px]"
                      />
                    </a>
                  </div>
                </div>
                <div className="flex lg:gap-[70px]">
                  <div className="w-[132px] max-lg:mt-[25px]">
                    <p className="text-lg text-custom-primary tracking-[-0.36px]">
                      Navigation
                    </p>
                    <div className="flex flex-col gap-2.5 mt-4">
                      <a
                        className="hover:underline hover:text-white"
                        href="#hero"
                      >
                        <p className="text-white/60 tracking-[-0.64px]">Home</p>
                      </a>
                      <a
                        className="hover:underline hover:text-white"
                        href="#about-us"
                      >
                        <p className="text-white/60 tracking-[-0.64px]">
                          About
                        </p>
                      </a>
                      <a
                        rel="noopener noreferrer"
                        className="hover:underline hover:text-white"
                        href="https://www.dextools.io/app/en/ether/pair-explorer/0x6acb4250ff8c65f0ba95b3001b920370740be940"
                        target="_blank"
                      >
                        <p className="text-white/60 tracking-[-0.64px]">
                          Charts
                        </p>
                      </a>
                      <a
                        rel="noopener noreferrer"
                        className="hover:underline hover:text-white"
                        href="https://niza.io/docs/NizaCoin_whitepaper.pdf"
                        target="_blank"
                      >
                        <p className="text-white/60 tracking-[-0.64px]">
                          Whitepaper
                        </p>
                      </a>
                      <a
                        className="hover:underline hover:text-white"
                        href="#roadmap"
                      >
                        <p className="text-white/60 tracking-[-0.64px]">
                          Roadmap
                        </p>
                      </a>
                      <a
                        className="hover:underline hover:text-white"
                        href="#contact-us"
                      >
                        <p className="text-white/60 tracking-[-0.64px]">
                          Communites
                        </p>
                      </a>
                    </div>
                  </div>
                  <div className="w-[132px] max-lg:mt-[25px]">
                    <p className="text-lg text-custom-primary tracking-[-0.36px]">
                      Licenses
                    </p>
                    <div className="flex flex-col gap-2.5 mt-4">
                      <button className="hover:underline hover:text-white w-[155px] text-left">
                        <p className="text-white/60 tracking-[-0.64px]">
                          U.S.A
                        </p>
                      </button>
                      <button className="hover:underline hover:text-white w-[155px] text-left">
                        <p className="text-white/60 tracking-[-0.64px]">
                          Canada
                        </p>
                      </button>
                      <button className="hover:underline hover:text-white w-[155px] text-left">
                        <p className="text-white/60 tracking-[-0.64px]">
                          Lithuania
                        </p>
                      </button>
                      <button className="hover:underline hover:text-white w-[155px] text-left">
                        <p className="text-white/60 tracking-[-0.64px]">
                          Bulgaria
                        </p>
                      </button>
                      <button className="hover:underline hover:text-white w-[155px] text-left">
                        <p className="text-white/60 tracking-[-0.64px]">
                          Costa Rica
                        </p>
                      </button>
                      <button className="hover:underline hover:text-white w-[155px] text-left">
                        <p className="text-white/60 tracking-[-0.64px]">
                          Iban services: UK FCA
                        </p>
                      </button>
                      <button className="hover:underline hover:text-white w-[155px] text-left">
                        <p className="text-white/60 tracking-[-0.64px]">
                          Italy
                        </p>
                      </button>
                    </div>
                  </div>
                  <div className="w-[132px] max-lg:mt-[25px] tracking-[-0.36px]">
                    <p className="text-lg text-custom-primary">Contact</p>
                    <div className="flex flex-col gap-2.5 mt-4">
                      <a
                        className="hover:underline hover:text-white"
                        href="mailto:info@niza.io"
                      >
                        <p className="text-white/60 tracking-[-0.64px]">
                          info@niza.io
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="my-4 text-xs text-center text-gray-400">
                  <span>Copyright Niza Global © 2023</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <svg
          id="SvgjsSvg1001"
          width="2"
          height="0"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{
            overflow: "hidden",
            top: "-100%",
            left: "-100%",
            position: "absolute",
            opacity: "0",
          }}
        >
          <defs id="SvgjsDefs1002"></defs>
          <polyline id="SvgjsPolyline1003" points="0,0"></polyline>
          <path id="SvgjsPath1004" d="M0 0 "></path>
        </svg>
        <div className="ReactModalPortal"></div>
        <div className="ReactModalPortal"></div>
        <div className="ReactModalPortal"></div>
        <div id="loom-companion-mv3" ext-id="liecbddmkiiihnedobmlmillhodjkdmb">
          <section id="shadow-host-companion"></section>
        </div>
      </body>
    </div>
  );
};

export default Home;

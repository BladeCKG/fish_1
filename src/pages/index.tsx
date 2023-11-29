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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
        />

        <title>Token Airdrop - Morra Games</title>
        <script
          async={true}
          src="https://www.googletagmanager.com/gtag/js?id=G-H4Q3S7VS5R"
        ></script>

        <meta
          name="description"
          content="Morra Token: The Legacy of ra Innovating The Future of Play, One Token at a Time Become a token holder Morra Token ($MORRA) is the native utility token of Morra Games ecosystem, designed to power the future of entertainment. We believe in a future where the community's voice is the driving force behind content creation."
        />
        <meta name="robots" content="max-image-preview:large" />
        <link rel="canonical" href="https://www.morragames.com/token/" />
        <meta name="generator" content="All in One SEO (AIOSEO) 4.4.9.2" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Morra Games -" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Token - Morra Games" />
        <meta
          property="og:description"
          content="Morra Token: The Legacy of ra Innovating The Future of Play, One Token at a Time Become a token holder Morra Token ($MORRA) is the native utility token of Morra Games ecosystem, designed to power the future of entertainment. We believe in a future where the community's voice is the driving force behind content creation."
        />
        <meta property="og:url" content="https://www.morragames.com/token/" />
        <meta
          property="article:published_time"
          content="2023-06-18T11:48:22+00:00"
        />
        <meta
          property="article:modified_time"
          content="2023-11-24T00:17:57+00:00"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Token - Morra Games" />
        <meta
          name="twitter:description"
          content="Morra Token: The Legacy of ra Innovating The Future of Play, One Token at a Time Become a token holder Morra Token ($MORRA) is the native utility token of Morra Games ecosystem, designed to power the future of entertainment. We believe in a future where the community's voice is the driving force behind content creation."
        />

        <link
          rel="stylesheet"
          id="wp-block-library-css"
          href="https://www.morragames.com/wp-includes/css/dist/block-library/style.min.css?ver=6.4.1"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="contact-form-7-css"
          href="https://www.morragames.com/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=5.8.2"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="ohio-style-css"
          href="https://www.morragames.com/wp-content/themes/ohio/style.css?ver=3.3.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="icon-pack-fontawesome-css"
          href="https://www.morragames.com/wp-content/themes/ohio/assets/fonts/fa/css/all.css?ver=6.4.1"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-icons-css"
          href="https://www.morragames.com/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.23.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-frontend-css"
          href="https://www.morragames.com/wp-content/plugins/elementor/assets/css/frontend-lite.min.css?ver=3.17.2"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="swiper-css"
          href="https://www.morragames.com/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css?ver=8.4.5"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-post-7-css"
          href="https://www.morragames.com/wp-content/uploads/elementor/css/post-7.css?ver=1699267233"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-post-224936-css"
          href="https://www.morragames.com/wp-content/uploads/elementor/css/post-224936.css?ver=1700785078"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="google-fonts-1-css"
          href="https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CDM+Serif+Display%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&amp;display=swap&amp;ver=6.4.1"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-icons-shared-9-css"
          href="https://www.morragames.com/wp-content/themes/ohio/assets/fonts/bootstrap/css/bootstrap.min.css?ver=1.10.2"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-icons-bootstrap_basic-css"
          href="https://www.morragames.com/wp-content/themes/ohio/assets/fonts/bootstrap/css/bootstrap.min.css?ver=1.10.2"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-icons-shared-8-css"
          href="https://www.morragames.com/wp-content/themes/ohio/assets/fonts/ionicons/css/ionicons.min.css?ver=1.0.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-icons-ionicons-css"
          href="https://www.morragames.com/wp-content/themes/ohio/assets/fonts/ionicons/css/ionicons.min.css?ver=1.0.0"
          type="text/css"
          media="all"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin=""
        />
        <script
          async={true}
          type="text/javascript"
          src="https://www.morragames.com/wp-includes/js/jquery/jquery.min.js?ver=3.7.1"
          id="jquery-core-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://www.morragames.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1"
          id="jquery-migrate-js"
        ></script>
        <link
          rel="EditURI"
          type="application/rsd+xml"
          title="RSD"
          href="https://www.morragames.com/xmlrpc.php?rsd"
        />
        <meta name="generator" content="WordPress 6.4.1" />
        <link rel="shortlink" href="https://www.morragames.com/?p=224936" />
        <link
          rel="alternate"
          type="application/json+oembed"
          href="https://www.morragames.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.morragames.com%2Ftoken%2F"
        />
        <link
          rel="alternate"
          type="text/xml+oembed"
          href="https://www.morragames.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.morragames.com%2Ftoken%2F&amp;format=xml"
        />
        <meta
          name="generator"
          content="Elementor 3.17.2; features: e_dom_optimization, e_optimized_assets_loading, e_optimized_css_loading, additional_custom_breakpoints; settings: css_print_method-external, google_font-enabled, font_display-swap"
        />
        <meta
          name="generator"
          content="Powered by Slider Revolution 6.6.11 - responsive, Mobile-Friendly Slider Plugin for WordPress with comfortable drag and drop interface."
        />
        <link
          rel="icon"
          href="https://www.morragames.com/wp-content/uploads/2023/11/cropped-Morragames-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="https://www.morragames.com/wp-content/uploads/2023/11/cropped-Morragames-192x192.png"
          sizes="192x192"
        />
        <link
          rel="apple-touch-icon"
          href="https://www.morragames.com/wp-content/uploads/2023/11/cropped-Morragames-180x180.png"
        />
        <meta
          name="msapplication-TileImage"
          content="https://www.morragames.com/wp-content/uploads/2023/11/cropped-Morragames-270x270.png"
        />
        <script
          src="https://www.morragames.com/wp-includes/js/wp-emoji-release.min.js?ver=6.4.1"
          defer={true}
        ></script>
      </Head>
      <body
        className="page-template-default page page-id-224936 wp-embed-responsive ohio-theme-3-3-0 with-header-1 with-fixed-search with-sticky-header with-sticky-footer links-underline icon-buttons-animation dark-scheme custom-cursor elementor-default elementor-kit-7 elementor-page elementor-page-224936 e--ua-blink e--ua-chrome e--ua-webkit page-is-loaded"
        data-elementor-device-mode="desktop"
        data-aos-easing="ease"
        data-aos-duration="400"
        data-aos-delay="0"
      >
        <div id="page" className="site">
          <ul className="elements-bar left -unlist">
            <li>
              <a className="scroll-top dynamic-typo -undash -small-t vc_hidden-md">
                <div className="scroll-top-bar">
                  <div
                    className="scroll-track"
                    style={{ width: "18.9749%" }}
                  ></div>
                </div>

                <div className="scroll-top-holder titles-typo title">
                  Scroll to top{" "}
                </div>
              </a>
            </li>
            <li></li>
          </ul>

          <ul className="elements-bar right -unlist">
            <li>
              <div className="social-bar dynamic-typo">
                <ul className="social-bar-holder titles-typo -small-t -unlist icons vc_hidden-md">
                  <li>Follow Us</li>
                  <li>—</li>
                  <li>
                    <a
                      className="-undash twitter"
                      href="https://www.twitter.com/morragames"
                      rel="nofollow"
                    >
                      <i className="fab">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
                          width="16"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="#ffffff"
                            d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                          />
                        </svg>
                      </i>{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="-undash discord"
                      href="https://discord.gg/srn6xxyAq9"
                      rel="nofollow"
                    >
                      <i className="fab">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
                          width="20"
                          viewBox="0 0 640 512"
                        >
                          <path
                            fill="#ffffff"
                            d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"
                          />
                        </svg>
                      </i>{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="-undash youtube"
                      href="https://www.youtube.com/@morracom"
                      rel="nofollow"
                    >
                      <i className="fab">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
                          width="18"
                          viewBox="0 0 576 512"
                        >
                          <path
                            fill="#ffffff"
                            d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
                          />
                        </svg>
                      </i>{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="-undash linkedin"
                      href="https://www.linkedin.com/company/morrastudio"
                      rel="nofollow"
                    >
                      <i className="fab">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
                          width="14"
                          viewBox="0 0 448 512"
                        >
                          <path
                            fill="#ffffff"
                            d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                          />
                        </svg>
                      </i>{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          <div
            className="circle-cursor circle-cursor-outer"
            style={{
              visibility: "visible",
              transform: "translate(59px, 434px)",
            }}
          ></div>
          <div
            className="circle-cursor circle-cursor-inner"
            style={{
              visibility: "visible",
              transform: "translate(59px, 434px)",
            }}
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.06055 0H20.0605V18H17.0605V5.12155L2.12132 20.0608L0 17.9395L14.9395 3H2.06055V0Z"></path>
            </svg>
          </div>

          <a className="skip-link screen-reader-text" href="#main">
            Skip to content
          </a>

          <header
            id="masthead"
            className="header header-1 without-mobile-search both-types"
            data-header-fixed="true"
            data-fixed-initial-offset="150"
            style={{ zIndex: "1000" }}
          >
            <div className="header-wrap">
              <div className="header-wrap-inner">
                <div className="left-part">
                  <div className="desktop-hamburger -left">
                    <button
                      className="icon-button hamburger"
                      aria-controls="site-menu"
                      aria-expanded="false"
                    >
                      <i className="icon"></i>
                    </button>
                  </div>

                  <div className="mobile-hamburger -left">
                    <button
                      className="icon-button hamburger"
                      aria-controls="site-menu"
                      aria-expanded="false"
                    >
                      <i className="icon"></i>
                    </button>
                  </div>

                  <div className="branding">
                    <a
                      className="branding-title titles-typo -undash"
                      href="https://www.morragames.com/"
                      rel="home"
                    >
                      <div
                        className="logo with-mobile"
                        style={{ display: "flex" }}
                      >
                        <img
                          src="https://www.morragames.com/wp-content/uploads/2023/11/logo_white.png"
                          className="main-logo light-scheme-logo"
                          srcSet="https://www.morragames.com/wp-content/uploads/2023/11/logo_white.png 2x"
                          alt="Morra"
                        />

                        <img
                          src="https://www.morragames.com/wp-content/uploads/2023/11/logo_white.png"
                          className="dark-scheme-logo"
                          srcSet="https://www.morragames.com/wp-content/uploads/2023/11/logo_white.png 2x"
                          alt="Morra"
                        />
                      </div>

                      <div className="logo-mobile" style={{ display: "none" }}>
                        <img
                          src="https://www.morragames.com/wp-content/uploads/2023/11/logo_white.png"
                          className="main-logo light-scheme-logo"
                          alt="Morra"
                        />

                        <img
                          src="https://www.morragames.com/wp-content/uploads/2023/11/logo_white.png"
                          className="dark-scheme-logo"
                          alt="Morra"
                        />
                      </div>

                      <div className="logo-sticky">
                        <img
                          src="https://www.morragames.com/wp-content/uploads/2023/11/logo_white.png"
                          className="main-logo light-scheme-logo"
                          srcSet="https://www.morragames.com/wp-content/uploads/2023/11/logo_white.png 2x"
                          alt="Morra"
                        />

                        <img
                          src="https://www.morragames.com/wp-content/uploads/2023/11/logo_white.png"
                          className="dark-scheme-logo"
                          srcSet="https://www.morragames.com/wp-content/uploads/2023/11/logo_white.png 2x"
                          alt="Morra"
                        />
                      </div>

                      <div className="logo-sticky-mobile">
                        <img
                          src="https://www.morragames.com/wp-content/uploads/2023/11/logo_white.png"
                          className="main-logo light-scheme-logo"
                          alt="Morra"
                        />

                        <img
                          src="https://www.morragames.com/wp-content/uploads/2023/11/logo_white.png"
                          className="dark-scheme-logo"
                          alt="Morra"
                        />
                      </div>

                      <div className="logo-dynamic">
                        <span className="dark hidden">
                          <img
                            src="https://www.morragames.com/wp-content/uploads/2023/11/logo_white.png"
                            srcSet="https://www.morragames.com/wp-content/uploads/2023/11/logo_white.png 2x"
                            alt="Morra"
                          />
                        </span>
                        <span className="light hidden">
                          <img
                            src="https://www.morragames.com/wp-content/uploads/2023/11/logo_white.png"
                            srcSet="https://www.morragames.com/wp-content/uploads/2023/11/logo_white.png 2x"
                            alt="Morra"
                          />
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="right-part">
                  <nav
                    id="site-navigation"
                    className="nav with-counters"
                    data-mobile-menu-second-click-link=""
                  >
                    <div className="mobile-overlay menu-mobile-overlay visible">
                      <div className="overlay"></div>
                      <div className="close-bar">
                        <button
                          className="icon-button -overlay-button"
                          aria-label="close"
                        >
                          <i className="icon">
                            <svg
                              className="default"
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"></path>
                            </svg>
                            <svg
                              className="minimal"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M15.7552 0.244806C16.0816 0.571215 16.0816 1.10043 15.7552 1.42684L1.42684 15.7552C1.10043 16.0816 0.571215 16.0816 0.244806 15.7552C-0.0816021 15.4288 -0.0816021 14.8996 0.244806 14.5732L14.5732 0.244806C14.8996 -0.0816019 15.4288 -0.0816019 15.7552 0.244806Z"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M15.7552 15.7552C15.4288 16.0816 14.8996 16.0816 14.5732 15.7552L0.244807 1.42684C-0.0816013 1.10043 -0.0816013 0.571215 0.244807 0.244806C0.571215 -0.0816021 1.10043 -0.0816021 1.42684 0.244806L15.7552 14.5732C16.0816 14.8996 16.0816 15.4288 15.7552 15.7552Z"
                              ></path>
                            </svg>
                          </i>
                        </button>
                      </div>
                      <div className="holder">
                        <div id="mega-menu-wrap" className="nav-container">
                          <ul id="menu-primary" className="menu">
                            <li
                              id="nav-menu-item-224851-6566aee6bfbda"
                              className="mega-menu-item nav-item menu-item-depth-0 "
                            >
                              <a
                                href="https://www.morragames.com/"
                                className="menu-link -undash main-menu-link item-title"
                              >
                                <span>Home</span>
                              </a>
                            </li>
                            <li
                              id="nav-menu-item-225074-6566aee6bfbff"
                              className="mega-menu-item nav-item menu-item-depth-0 current-menu-item "
                            >
                              <a
                                href="https://www.morragames.com/token/"
                                className="menu-link -undash main-menu-link item-title"
                              >
                                <span>Token</span>
                              </a>
                            </li>
                            <li
                              id="nav-menu-item-225073-6566aee6bfc1b"
                              className="mega-menu-item nav-item menu-item-depth-0 "
                            >
                              <a
                                href="https://www.morragames.com/news/"
                                className="menu-link -undash main-menu-link item-title"
                              >
                                <span>News Archive</span>
                              </a>
                            </li>
                            <li
                              id="nav-menu-item-225114-6566aee6bfc36"
                              className="mega-menu-item nav-item menu-item-depth-0 "
                            >
                              <a
                                href="https://www.morragames.com/contact/"
                                className="menu-link -undash main-menu-link item-title"
                              >
                                <span>Contact</span>
                              </a>
                            </li>
                          </ul>{" "}
                        </div>
                        <div className="copyright">
                          <p>
                            © 2021-2023{" "}
                            <a href="http://linkedin.com/company/morrastudio">
                              Morra Studio
                            </a>
                            .
                          </p>
                          <p>All rights reserved.</p>
                        </div>
                      </div>

                      <div className="social-bar dynamic-typo">
                        <ul className="social-bar-holder titles-typo -small-t -unlist icons vc_hidden-md">
                          <li>Follow Us</li>
                          <li>—</li>
                          <li>
                            <a
                              className="-undash twitter"
                              href="https://www.twitter.com/morragames"
                              rel="nofollow"
                            >
                              <i className="fab fa-x-twitter"></i>{" "}
                            </a>
                          </li>
                          <li>
                            <a
                              className="-undash discord"
                              href="https://discord.gg/srn6xxyAq9"
                              rel="nofollow"
                            >
                              <i className="fab fa-discord"></i>{" "}
                            </a>
                          </li>
                          <li>
                            <a
                              className="-undash youtube"
                              href="https://www.youtube.com/@morracom"
                              rel="nofollow"
                            >
                              <i className="fab fa-youtube"></i>{" "}
                            </a>
                          </li>
                          <li>
                            <a
                              className="-undash linkedin"
                              href="https://www.linkedin.com/company/morrastudio"
                              rel="nofollow"
                            >
                              <i className="fab fa-linkedin"></i>{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </header>

          <div className="clb-popup hamburger-nav">
            <div className="close-bar -left-flex">
              <button className="icon-button -light" aria-label="close">
                <i className="icon">
                  <svg
                    className="default"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"></path>
                  </svg>
                  <svg
                    className="minimal"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.7552 0.244806C16.0816 0.571215 16.0816 1.10043 15.7552 1.42684L1.42684 15.7552C1.10043 16.0816 0.571215 16.0816 0.244806 15.7552C-0.0816021 15.4288 -0.0816021 14.8996 0.244806 14.5732L14.5732 0.244806C14.8996 -0.0816019 15.4288 -0.0816019 15.7552 0.244806Z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.7552 15.7552C15.4288 16.0816 14.8996 16.0816 14.5732 15.7552L0.244807 1.42684C-0.0816013 1.10043 -0.0816013 0.571215 0.244807 0.244806C0.571215 -0.0816021 1.10043 -0.0816021 1.42684 0.244806L15.7552 14.5732C16.0816 14.8996 16.0816 15.4288 15.7552 15.7552Z"
                    ></path>
                  </svg>
                </i>
              </button>
            </div>
            <div className="hamburger-nav-holder">
              <ul id="secondary-menu" className="menu">
                <li
                  id="nav-menu-item-225122-6566aee6c0e77"
                  className="mega-menu-item nav-item menu-item-depth-0"
                >
                  <a
                    href="https://docs.morragames.com"
                    className="menu-link -undash main-menu-link item-title"
                  >
                    <span>Litepaper</span>
                  </a>
                </li>
                <li
                  id="nav-menu-item-225124-6566aee6c0ea0"
                  className="mega-menu-item nav-item menu-item-depth-0"
                >
                  <a
                    href="https://linkedin.com/company/morrastudio"
                    className="menu-link -undash main-menu-link item-title"
                  >
                    <span>Company</span>
                  </a>
                </li>
                <li
                  id="nav-menu-item-225125-6566aee6c0ebb"
                  className="mega-menu-item nav-item menu-item-depth-0"
                >
                  <a
                    href="https://discord.gg/yKEAysy4Md/"
                    className="menu-link -undash main-menu-link item-title"
                  >
                    <span>Community</span>
                  </a>
                </li>
                <li
                  id="nav-menu-item-225123-6566aee6c0ed4"
                  className="mega-menu-item nav-item menu-item-depth-0"
                >
                  <a
                    href="https://app.uniswap.org/tokens/ethereum/0xd9adfb67381d392c6e9671f64cdd9014bfcd74f2"
                    className="menu-link -undash main-menu-link item-title"
                  >
                    <span>Buy $MORRA</span>
                  </a>
                </li>
              </ul>{" "}
            </div>
            <div className="hamburger-nav-details">
              <div className="details-column">
                <b>Get In Touch</b>
                <br /> 35 Marasi Drive, Business bay, Dubai,
                <br /> contact@morragames.com
                <br /> Ph: +971.527.815.160{" "}
              </div>
              <div className="details-column">
                <b>Business</b>
                <br /> business@morragames.com
                <br /> Ph: +971.527.815.160{" "}
              </div>

              <div className="details-column social-networks ">
                <a
                  href="https://www.twitter.com/morragames"
                  rel="nofollow"
                  className="network -unlink twitter"
                >
                  {" "}
                  <i className="fab fa-x-twitter"></i>
                </a>
                <a
                  href="https://discord.gg/srn6xxyAq9"
                  rel="nofollow"
                  className="network -unlink discord"
                >
                  {" "}
                  <i className="fab fa-discord"></i>
                </a>
                <a
                  href="https://www.youtube.com/@morracom"
                  rel="nofollow"
                  className="network -unlink youtube"
                >
                  {" "}
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/morrastudio"
                  rel="nofollow"
                  className="network -unlink linkedin"
                >
                  {" "}
                  <i className="fab fa-linkedin"></i>
                </a>{" "}
              </div>
            </div>
          </div>

          <div
            id="content"
            className="site-content"
            data-mobile-menu-resolution="768"
            style={{ marginBottom: "422.891px" }}
          >
            <div className="page-container">
              <div id="primary" className="content-area">
                <div className="page-content">
                  <main id="main" className="site-main">
                    <article
                      id="post-224936"
                      className="post-224936 page type-page status-publish hentry"
                    >
                      <div className="entry-content">
                        <div
                          data-elementor-type="wp-page"
                          data-elementor-id="224936"
                          className="elementor elementor-224936"
                        >
                          <section
                            className="elementor-section elementor-top-section elementor-element elementor-element-2f68e74 elementor-section-height-full elementor-section-stretched elementor-hidden-tablet elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
                            data-id="2f68e74"
                            data-element_type="section"
                            data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                            style={{ width: "1349px", left: "-64.5px" }}
                          >
                            <div className="elementor-container elementor-column-gap-no">
                              <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-109f1ca"
                                data-id="109f1ca"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <section
                                    className="elementor-section elementor-inner-section elementor-element elementor-element-8a8f216 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="8a8f216"
                                    data-element_type="section"
                                  >
                                    <div className="elementor-container elementor-column-gap-wide">
                                      <div
                                        className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-0cb5712 animated fadeInUp"
                                        data-id="0cb5712"
                                        data-element_type="column"
                                        data-settings='{"animation":"fadeInUp"}'
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-53fd2fa elementor-widget elementor-widget-spacer"
                                            data-id="53fd2fa"
                                            data-element_type="widget"
                                            data-widget_type="spacer.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="elementor-spacer">
                                                <div className="elementor-spacer-inner"></div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-element elementor-element-60a7e47 elementor-widget elementor-widget-ohio_heading"
                                            data-id="60a7e47"
                                            data-element_type="widget"
                                            data-widget_type="ohio_heading.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="ohio-widget heading -left">
                                                <div className="subtitle">
                                                  Morra Token: The Legacy of ra{" "}
                                                </div>

                                                <h1 className="title">
                                                  Innovating The Future of Play,
                                                  <br />
                                                  One Token at a Time{" "}
                                                </h1>
                                              </div>{" "}
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-element elementor-element-bbfa5f1 elementor-widget elementor-widget-ohio_button"
                                            data-id="bbfa5f1"
                                            data-element_type="widget"
                                            data-widget_type="ohio_button.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <CustomConnect
                                                clickComp={
                                                  <div className="ohio-widget-holder -left">
                                                    <div className="ohio-widget button -primary">
                                                      Please wait...{" "}
                                                    </div>
                                                  </div>
                                                }
                                                normalComp={
                                                  <div className="ohio-widget-holder -left">
                                                    <div className="ohio-widget button -primary borderc-div">
                                                      Claim $Morra
                                                      <i className="icon -right bi">
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          height="16"
                                                          width="14"
                                                          viewBox="0 0 448 512"
                                                        >
                                                          <path
                                                            fill="#ffffff"
                                                            d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                                                          />
                                                        </svg>
                                                      </i>{" "}
                                                    </div>
                                                  </div>
                                                }
                                              />{" "}
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-element elementor-element-90b03e9 elementor-widget elementor-widget-spacer"
                                            data-id="90b03e9"
                                            data-element_type="widget"
                                            data-widget_type="spacer.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="elementor-spacer">
                                                <div className="elementor-spacer-inner"></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-b4e9173"
                                        data-id="b4e9173"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap"></div>
                                      </div>
                                      <div
                                        className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-04adf84"
                                        data-id="04adf84"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-494b7ff elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-spacer"
                                            data-id="494b7ff"
                                            data-element_type="widget"
                                            data-widget_type="spacer.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="elementor-spacer">
                                                <div className="elementor-spacer-inner"></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section
                            className="elementor-section elementor-top-section elementor-element elementor-element-442ca9b4 elementor-section-stretched clb__dark_section elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="442ca9b4"
                            data-element_type="section"
                            data-settings='{"background_background":"classic","stretch_section":"section-stretched"}'
                            style={{ width: "1349px", left: "-64.5px" }}
                          >
                            <div className="elementor-container elementor-column-gap-no">
                              <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1b6e5488"
                                data-id="1b6e5488"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-d1baae6 elementor-widget elementor-widget-spacer"
                                    data-id="d1baae6"
                                    data-element_type="widget"
                                    data-widget_type="spacer.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-spacer">
                                        <div className="elementor-spacer-inner"></div>
                                      </div>
                                    </div>
                                  </div>
                                  <section
                                    className="elementor-section elementor-inner-section elementor-element elementor-element-7ece86c elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="7ece86c"
                                    data-element_type="section"
                                  >
                                    <div className="elementor-container elementor-column-gap-wide">
                                      <div
                                        className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-5d821f10"
                                        data-id="5d821f10"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-611848cf elementor-widget__width-initial elementor-widget elementor-widget-ohio_heading"
                                            data-id="611848cf"
                                            data-element_type="widget"
                                            data-widget_type="ohio_heading.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="ohio-widget heading -left">
                                                <h2 className="title">
                                                  Morra Token ($MORRA) is the{" "}
                                                  <br className="vc_hidden-xs vc_hidden-sm" />{" "}
                                                  native utility token of Morra
                                                  Games{" "}
                                                  <br className="vc_hidden-xs vc_hidden-sm" />
                                                  ecosystem, designed to power
                                                  <br className="vc_hidden-xs vc_hidden-sm" />{" "}
                                                  the future of entertainment.{" "}
                                                </h2>

                                                <div className="subtitle"></div>
                                              </div>{" "}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-16c2595c"
                                        data-id="16c2595c"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-5b57e534 elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-spacer"
                                            data-id="5b57e534"
                                            data-element_type="widget"
                                            data-widget_type="spacer.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="elementor-spacer">
                                                <div className="elementor-spacer-inner"></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                  <section
                                    className="elementor-section elementor-inner-section elementor-element elementor-element-2c2bdcde elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="2c2bdcde"
                                    data-element_type="section"
                                  >
                                    <div className="elementor-container elementor-column-gap-wide">
                                      <div
                                        className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-505dceda"
                                        data-id="505dceda"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-4ed976ae elementor-widget elementor-widget-spacer"
                                            data-id="4ed976ae"
                                            data-element_type="widget"
                                            data-widget_type="spacer.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="elementor-spacer">
                                                <div className="elementor-spacer-inner"></div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-element elementor-element-44d66b15 elementor-widget elementor-widget-image"
                                            data-id="44d66b15"
                                            data-element_type="widget"
                                            data-widget_type="image.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <img
                                                decoding="async"
                                                width="1668"
                                                height="798"
                                                src="https://www.morragames.com/wp-content/uploads/2023/11/shape1-min.png"
                                                className="attachment-full size-full wp-image-224941"
                                                alt=""
                                                srcSet="https://www.morragames.com/wp-content/uploads/2023/11/shape1-min.png 1668w, https://www.morragames.com/wp-content/uploads/2023/11/shape1-min-300x144.png 300w, https://www.morragames.com/wp-content/uploads/2023/11/shape1-min-1024x490.png 1024w, https://www.morragames.com/wp-content/uploads/2023/11/shape1-min-768x367.png 768w, https://www.morragames.com/wp-content/uploads/2023/11/shape1-min-1536x735.png 1536w"
                                                sizes="(max-width: 1668px) 100vw, 1668px"
                                              />{" "}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-a4535bb"
                                        data-id="a4535bb"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-13c717e0 elementor-widget elementor-widget-spacer"
                                            data-id="13c717e0"
                                            data-element_type="widget"
                                            data-widget_type="spacer.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="elementor-spacer">
                                                <div className="elementor-spacer-inner"></div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-element elementor-element-fbb4793 elementor-widget elementor-widget-text-editor"
                                            data-id="fbb4793"
                                            data-element_type="widget"
                                            data-widget_type="text-editor.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <p>
                                                We believe in a future where the
                                                community’s voice is the driving
                                                force behind content creation.
                                                <strong>
                                                  {" "}
                                                  A vision where entertainment
                                                  is not just created for you,
                                                  but with you.{" "}
                                                </strong>
                                              </p>{" "}
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-element elementor-element-332b21a6 elementor-widget elementor-widget-text-editor"
                                            data-id="332b21a6"
                                            data-element_type="widget"
                                            data-widget_type="text-editor.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <p>
                                                In this journey of redefining
                                                entertainment, Morra Token (RA)
                                                plays an irreplaceable role.
                                              </p>{" "}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-ccfe23f"
                                        data-id="ccfe23f"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-1e7f6519 elementor-widget elementor-widget-spacer"
                                            data-id="1e7f6519"
                                            data-element_type="widget"
                                            data-widget_type="spacer.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="elementor-spacer">
                                                <div className="elementor-spacer-inner"></div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-element elementor-element-5302cb82 elementor-widget elementor-widget-text-editor"
                                            data-id="5302cb82"
                                            data-element_type="widget"
                                            data-widget_type="text-editor.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <p>
                                                At the heart of this
                                                transformation lies the
                                                <strong>
                                                  {" "}
                                                  crucial element: Morra Token
                                                  (RA),
                                                </strong>
                                                designed to play a pivotal role
                                                in powering and enhancing the
                                                Morra Games platform’s
                                                entertainment experiences.
                                              </p>{" "}
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-element elementor-element-72e74993 elementor-widget elementor-widget-spacer"
                                            data-id="72e74993"
                                            data-element_type="widget"
                                            data-widget_type="spacer.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="elementor-spacer">
                                                <div className="elementor-spacer-inner"></div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-element elementor-element-60c3a2d9 elementor-widget elementor-widget-ohio_progress_bar"
                                            data-id="60c3a2d9"
                                            data-element_type="widget"
                                            data-widget_type="ohio_progress_bar.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div
                                                className="ohio-widget progress -tooltip"
                                                data-ohio-progress-bar="100"
                                                data-processed="true"
                                              >
                                                <div className="progress-heading">
                                                  <h6 className="label">
                                                    Community-driven
                                                  </h6>
                                                </div>
                                                <div className="progress-holder  -thin">
                                                  <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    style={{ width: "100%" }}
                                                  >
                                                    <span className="progress-percent tooltip">
                                                      <span className="percent">
                                                        100
                                                      </span>
                                                      %
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>{" "}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                  <div
                                    className="elementor-element elementor-element-48d8b298 elementor-widget elementor-widget-spacer"
                                    data-id="48d8b298"
                                    data-element_type="widget"
                                    data-widget_type="spacer.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-spacer">
                                        <div className="elementor-spacer-inner"></div>
                                      </div>
                                    </div>
                                  </div>
                                  <section
                                    className="elementor-section elementor-inner-section elementor-element elementor-element-3ca379bc elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="3ca379bc"
                                    data-element_type="section"
                                  >
                                    <div className="elementor-container elementor-column-gap-wide">
                                      <div
                                        className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-26df8a69"
                                        data-id="26df8a69"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-7deca048 elementor-widget elementor-widget-ohio_heading"
                                            data-id="7deca048"
                                            data-element_type="widget"
                                            data-widget_type="ohio_heading.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="ohio-widget heading -left">
                                                <h4 className="title">
                                                  Features{" "}
                                                </h4>
                                              </div>{" "}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-475b2a82"
                                        data-id="475b2a82"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap"></div>
                                      </div>
                                    </div>
                                  </section>
                                  <div
                                    className="elementor-element elementor-element-4b6fc4c8 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                                    data-id="4b6fc4c8"
                                    data-element_type="widget"
                                    data-widget_type="divider.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-divider">
                                        <span className="elementor-divider-separator"></span>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-641cbcba elementor-widget elementor-widget-spacer"
                                    data-id="641cbcba"
                                    data-element_type="widget"
                                    data-widget_type="spacer.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-spacer">
                                        <div className="elementor-spacer-inner"></div>
                                      </div>
                                    </div>
                                  </div>
                                  <section
                                    className="elementor-section elementor-inner-section elementor-element elementor-element-5c7c1f26 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="5c7c1f26"
                                    data-element_type="section"
                                  >
                                    <div className="elementor-container elementor-column-gap-wide">
                                      <div
                                        className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-4f56e015"
                                        data-id="4f56e015"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-6cfc3a75 elementor-widget elementor-widget-ohio_banner"
                                            data-id="6cfc3a75"
                                            data-element_type="widget"
                                            data-widget_type="ohio_banner.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="ohio-banner-sc ohio-widget banner card -with-overlay">
                                                <div
                                                  className="image-holder"
                                                  data-tilt="true"
                                                  data-tilt-perspective="6000"
                                                >
                                                  <img
                                                    decoding="async"
                                                    src="https://www.morragames.com/wp-content/uploads/2023/11/oh__img9.jpeg"
                                                    srcSet="https://www.morragames.com/wp-content/uploads/2023/11/oh__img9-871x1024.jpeg 871w, https://www.morragames.com/wp-content/uploads/2023/11/oh__img9-255x300.jpeg 255w, https://www.morragames.com/wp-content/uploads/2023/11/oh__img9-768x903.jpeg 768w, https://www.morragames.com/wp-content/uploads/2023/11/oh__img9-1306x1536.jpeg 1306w, https://www.morragames.com/wp-content/uploads/2023/11/oh__img9.jpeg 1600w"
                                                    sizes="(max-width: 640px) 100vw, 640px"
                                                    alt=""
                                                  />
                                                  <div className="overlay-details">
                                                    <div className="card-details">
                                                      <div className="heading">
                                                        <div className="subtitle">
                                                          Utility
                                                        </div>

                                                        <h3 className="title">
                                                          Transaction
                                                          <br /> Currency
                                                        </h3>
                                                      </div>
                                                    </div>

                                                    <p>
                                                      $Morra act as a{" "}
                                                      <b>
                                                        primary means of
                                                        exchange{" "}
                                                      </b>
                                                      within the Morra Games
                                                      platform, allowing users
                                                      to make transactions for
                                                      various services and
                                                      content{" "}
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>{" "}
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-element elementor-element-1f458fe6 elementor-widget elementor-widget-spacer"
                                            data-id="1f458fe6"
                                            data-element_type="widget"
                                            data-widget_type="spacer.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="elementor-spacer">
                                                <div className="elementor-spacer-inner"></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-3070937f"
                                        data-id="3070937f"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-6ea7d05f elementor-widget elementor-widget-ohio_banner"
                                            data-id="6ea7d05f"
                                            data-element_type="widget"
                                            data-widget_type="ohio_banner.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="ohio-banner-sc ohio-widget banner card -with-overlay -img-overlay">
                                                <div
                                                  className="image-holder"
                                                  data-tilt="true"
                                                  data-tilt-perspective="6000"
                                                  style={{
                                                    willChange: "transform",
                                                    transform:
                                                      "perspective(6000px) rotateX(0deg) rotateY(0deg)",
                                                  }}
                                                >
                                                  <img
                                                    decoding="async"
                                                    src="https://www.morragames.com/wp-content/uploads/2023/11/oh__img116.jpeg"
                                                    srcSet="https://www.morragames.com/wp-content/uploads/2023/11/oh__img116-871x1024.jpeg 871w, https://www.morragames.com/wp-content/uploads/2023/11/oh__img116-255x300.jpeg 255w, https://www.morragames.com/wp-content/uploads/2023/11/oh__img116-768x903.jpeg 768w, https://www.morragames.com/wp-content/uploads/2023/11/oh__img116-1306x1536.jpeg 1306w, https://www.morragames.com/wp-content/uploads/2023/11/oh__img116.jpeg 1600w"
                                                    sizes="(max-width: 640px) 100vw, 640px"
                                                    alt=""
                                                  />
                                                  <div className="overlay-details">
                                                    <div className="card-details">
                                                      <div className="heading">
                                                        <div className="subtitle">
                                                          DAO
                                                        </div>

                                                        <h3 className="title">
                                                          Governance
                                                          <br /> Influence
                                                        </h3>
                                                      </div>
                                                    </div>

                                                    <p>
                                                      Token holders can
                                                      participate in governance
                                                      decisions, contributing to
                                                      the direction and
                                                      development of the Morra
                                                      Games platform{" "}
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>{" "}
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-element elementor-element-121ae92b elementor-widget elementor-widget-spacer"
                                            data-id="121ae92b"
                                            data-element_type="widget"
                                            data-widget_type="spacer.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="elementor-spacer">
                                                <div className="elementor-spacer-inner"></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-3a4268b2"
                                        data-id="3a4268b2"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-4a2cc387 elementor-widget elementor-widget-ohio_banner"
                                            data-id="4a2cc387"
                                            data-element_type="widget"
                                            data-widget_type="ohio_banner.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="ohio-banner-sc ohio-widget banner card -with-overlay -img-overlay">
                                                <div
                                                  className="image-holder"
                                                  data-tilt="true"
                                                  data-tilt-perspective="6000"
                                                  style={{
                                                    willChange: "transform",
                                                    transform:
                                                      "perspective(6000px) rotateX(0deg) rotateY(0deg)",
                                                  }}
                                                >
                                                  <img
                                                    decoding="async"
                                                    src="https://www.morragames.com/wp-content/uploads/2023/11/oh__img34.1.jpeg"
                                                    srcSet="https://www.morragames.com/wp-content/uploads/2023/11/oh__img34.1-871x1024.jpeg 871w, https://www.morragames.com/wp-content/uploads/2023/11/oh__img34.1-255x300.jpeg 255w, https://www.morragames.com/wp-content/uploads/2023/11/oh__img34.1-768x903.jpeg 768w, https://www.morragames.com/wp-content/uploads/2023/11/oh__img34.1-1306x1536.jpeg 1306w, https://www.morragames.com/wp-content/uploads/2023/11/oh__img34.1.jpeg 1600w"
                                                    sizes="(max-width: 640px) 100vw, 640px"
                                                    alt=""
                                                  />
                                                  <div className="overlay-details">
                                                    <div className="card-details">
                                                      <div className="heading">
                                                        <div className="subtitle">
                                                          Incentives
                                                        </div>

                                                        <h3 className="title">
                                                          Incentive
                                                          <br /> Mechanism
                                                        </h3>
                                                      </div>
                                                    </div>

                                                    <p>
                                                      Morra Token is used to
                                                      reward and incentivize
                                                      active community members,
                                                      content creators, and
                                                      gamers, encouraging
                                                      engagement.{" "}
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>{" "}
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-element elementor-element-35e9fab1 elementor-widget elementor-widget-spacer"
                                            data-id="35e9fab1"
                                            data-element_type="widget"
                                            data-widget_type="spacer.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="elementor-spacer">
                                                <div className="elementor-spacer-inner"></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-7c8a206d"
                                        data-id="7c8a206d"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-3c2cae3a elementor-widget elementor-widget-ohio_banner"
                                            data-id="3c2cae3a"
                                            data-element_type="widget"
                                            data-widget_type="ohio_banner.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="ohio-banner-sc ohio-widget banner card -with-overlay -img-overlay">
                                                <div
                                                  className="image-holder"
                                                  data-tilt="true"
                                                  data-tilt-perspective="6000"
                                                >
                                                  <img
                                                    decoding="async"
                                                    src="https://www.morragames.com/wp-content/uploads/2023/11/oh__img118.jpeg"
                                                    srcSet="https://www.morragames.com/wp-content/uploads/2023/11/oh__img118-871x1024.jpeg 871w, https://www.morragames.com/wp-content/uploads/2023/11/oh__img118-255x300.jpeg 255w, https://www.morragames.com/wp-content/uploads/2023/11/oh__img118-768x903.jpeg 768w, https://www.morragames.com/wp-content/uploads/2023/11/oh__img118-1306x1536.jpeg 1306w, https://www.morragames.com/wp-content/uploads/2023/11/oh__img118.jpeg 1600w"
                                                    sizes="(max-width: 640px) 100vw, 640px"
                                                    alt=""
                                                  />
                                                  <div className="overlay-details">
                                                    <div className="card-details">
                                                      <div className="heading">
                                                        <div className="subtitle">
                                                          Payment
                                                        </div>

                                                        <h3 className="title">
                                                          Fast &amp;
                                                          <br /> Cost-effective
                                                        </h3>
                                                      </div>
                                                    </div>

                                                    <p>
                                                      Users can utilize $MORRA
                                                      tokens for swift and
                                                      economical transactions,
                                                      making it easy to engage
                                                      with various aspects of
                                                      the Morra Games ecosystem{" "}
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>{" "}
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-element elementor-element-3458c36b elementor-widget elementor-widget-spacer"
                                            data-id="3458c36b"
                                            data-element_type="widget"
                                            data-widget_type="spacer.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="elementor-spacer">
                                                <div className="elementor-spacer-inner"></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                  <section
                                    className="elementor-section elementor-inner-section elementor-element elementor-element-75d97d9d elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="75d97d9d"
                                    data-element_type="section"
                                  >
                                    <div className="elementor-container elementor-column-gap-wide">
                                      <div
                                        className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-63929f3e"
                                        data-id="63929f3e"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-5c919b27 elementor-widget elementor-widget-ohio_banner"
                                            data-id="5c919b27"
                                            data-element_type="widget"
                                            data-widget_type="ohio_banner.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="ohio-banner-sc ohio-widget banner card -with-overlay -img-overlay">
                                                <div
                                                  className="image-holder"
                                                  data-tilt="true"
                                                  data-tilt-perspective="6000"
                                                >
                                                  <img
                                                    decoding="async"
                                                    src="https://www.morragames.com/wp-content/uploads/2023/11/oh__img9.jpeg"
                                                    srcSet="https://www.morragames.com/wp-content/uploads/2023/11/oh__img9-871x1024.jpeg 871w, https://www.morragames.com/wp-content/uploads/2023/11/oh__img9-255x300.jpeg 255w, https://www.morragames.com/wp-content/uploads/2023/11/oh__img9-768x903.jpeg 768w, https://www.morragames.com/wp-content/uploads/2023/11/oh__img9-1306x1536.jpeg 1306w, https://www.morragames.com/wp-content/uploads/2023/11/oh__img9.jpeg 1600w"
                                                    sizes="(max-width: 640px) 100vw, 640px"
                                                    alt=""
                                                  />
                                                  <div className="overlay-details">
                                                    <div className="card-details">
                                                      <div className="heading">
                                                        <div className="subtitle">
                                                          Digital Assets
                                                        </div>

                                                        <h3 className="title">
                                                          NFT Creation <br />{" "}
                                                          and Ownership
                                                        </h3>
                                                      </div>
                                                    </div>

                                                    <p>
                                                      Morra tokens are used for
                                                      minting Non-Fungible
                                                      Tokens (NFTs) within the
                                                      Morra Games ecosystem,
                                                      allowing users to create
                                                      and own digital assets.{" "}
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>{" "}
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-element elementor-element-45f5ad8d elementor-widget elementor-widget-spacer"
                                            data-id="45f5ad8d"
                                            data-element_type="widget"
                                            data-widget_type="spacer.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="elementor-spacer">
                                                <div className="elementor-spacer-inner"></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-7e997f7b"
                                        data-id="7e997f7b"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-61924e68 elementor-widget elementor-widget-ohio_banner"
                                            data-id="61924e68"
                                            data-element_type="widget"
                                            data-widget_type="ohio_banner.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="ohio-banner-sc ohio-widget banner card -with-overlay -img-overlay">
                                                <div
                                                  className="image-holder"
                                                  data-tilt="true"
                                                  data-tilt-perspective="6000"
                                                >
                                                  <img
                                                    decoding="async"
                                                    src="https://www.morragames.com/wp-content/uploads/2023/11/oh__img116.jpeg"
                                                    srcSet="https://www.morragames.com/wp-content/uploads/2023/11/oh__img116-871x1024.jpeg 871w, https://www.morragames.com/wp-content/uploads/2023/11/oh__img116-255x300.jpeg 255w, https://www.morragames.com/wp-content/uploads/2023/11/oh__img116-768x903.jpeg 768w, https://www.morragames.com/wp-content/uploads/2023/11/oh__img116-1306x1536.jpeg 1306w, https://www.morragames.com/wp-content/uploads/2023/11/oh__img116.jpeg 1600w"
                                                    sizes="(max-width: 640px) 100vw, 640px"
                                                    alt=""
                                                  />
                                                  <div className="overlay-details">
                                                    <div className="card-details">
                                                      <div className="heading">
                                                        <div className="subtitle">
                                                          Morraverse
                                                        </div>

                                                        <h3 className="title">
                                                          AR
                                                          <br /> Adventures
                                                        </h3>
                                                      </div>
                                                    </div>

                                                    <p>
                                                      Morra tokens facilitates
                                                      participation and payment
                                                      of augmented reality
                                                      experiences, where the
                                                      digital and physical
                                                      worlds seamlessly blend.{" "}
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>{" "}
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-element elementor-element-3252c8fb elementor-widget elementor-widget-spacer"
                                            data-id="3252c8fb"
                                            data-element_type="widget"
                                            data-widget_type="spacer.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="elementor-spacer">
                                                <div className="elementor-spacer-inner"></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-3b5734f7"
                                        data-id="3b5734f7"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-248e859a elementor-widget elementor-widget-ohio_banner"
                                            data-id="248e859a"
                                            data-element_type="widget"
                                            data-widget_type="ohio_banner.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="ohio-banner-sc ohio-widget banner card -with-overlay -img-overlay">
                                                <div
                                                  className="image-holder"
                                                  data-tilt="true"
                                                  data-tilt-perspective="6000"
                                                  style={{
                                                    willChange: "transform",
                                                    transform:
                                                      "perspective(6000px) rotateX(0deg) rotateY(0deg)",
                                                  }}
                                                >
                                                  <img
                                                    decoding="async"
                                                    src="https://www.morragames.com/wp-content/uploads/2023/11/oh__img34.1.jpeg"
                                                    srcSet="https://www.morragames.com/wp-content/uploads/2023/11/oh__img34.1-871x1024.jpeg 871w, https://www.morragames.com/wp-content/uploads/2023/11/oh__img34.1-255x300.jpeg 255w, https://www.morragames.com/wp-content/uploads/2023/11/oh__img34.1-768x903.jpeg 768w, https://www.morragames.com/wp-content/uploads/2023/11/oh__img34.1-1306x1536.jpeg 1306w, https://www.morragames.com/wp-content/uploads/2023/11/oh__img34.1.jpeg 1600w"
                                                    sizes="(max-width: 640px) 100vw, 640px"
                                                    alt=""
                                                  />
                                                  <div className="overlay-details">
                                                    <div className="card-details">
                                                      <div className="heading">
                                                        <div className="subtitle">
                                                          Security
                                                        </div>

                                                        <h3 className="title">
                                                          Blockchain
                                                          <br /> Technology
                                                        </h3>
                                                      </div>
                                                    </div>

                                                    <p>
                                                      $MORRA operates on the
                                                      Ethereum blockchain,
                                                      leveraging the benefits of
                                                      security, transparency,
                                                      and immutability provided
                                                      by blockchain.{" "}
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>{" "}
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-element elementor-element-3773217d elementor-widget elementor-widget-spacer"
                                            data-id="3773217d"
                                            data-element_type="widget"
                                            data-widget_type="spacer.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="elementor-spacer">
                                                <div className="elementor-spacer-inner"></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-34c45e53"
                                        data-id="34c45e53"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-66916bbe elementor-widget elementor-widget-ohio_banner"
                                            data-id="66916bbe"
                                            data-element_type="widget"
                                            data-widget_type="ohio_banner.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="ohio-banner-sc ohio-widget banner card -with-overlay -img-overlay">
                                                <div
                                                  className="image-holder"
                                                  data-tilt="true"
                                                  data-tilt-perspective="6000"
                                                  style={{
                                                    willChange: "transform",
                                                    transform:
                                                      "perspective(6000px) rotateX(0deg) rotateY(0deg)",
                                                  }}
                                                >
                                                  <img
                                                    decoding="async"
                                                    src="https://www.morragames.com/wp-content/uploads/2023/11/oh__img118.jpeg"
                                                    srcSet="https://www.morragames.com/wp-content/uploads/2023/11/oh__img118-871x1024.jpeg 871w, https://www.morragames.com/wp-content/uploads/2023/11/oh__img118-255x300.jpeg 255w, https://www.morragames.com/wp-content/uploads/2023/11/oh__img118-768x903.jpeg 768w, https://www.morragames.com/wp-content/uploads/2023/11/oh__img118-1306x1536.jpeg 1306w, https://www.morragames.com/wp-content/uploads/2023/11/oh__img118.jpeg 1600w"
                                                    sizes="(max-width: 640px) 100vw, 640px"
                                                    alt=""
                                                  />
                                                  <div className="overlay-details">
                                                    <div className="card-details">
                                                      <div className="heading">
                                                        <div className="subtitle">
                                                          Value
                                                        </div>

                                                        <h3 className="title">
                                                          Maximum
                                                          <br /> Supply
                                                        </h3>
                                                      </div>
                                                    </div>

                                                    <p>
                                                      With a capped supply of{" "}
                                                      <b>
                                                        500,000,000 $MORRA
                                                        tokens, scarcity is
                                                        built into the
                                                        token&apos;s design
                                                      </b>
                                                      , potentially impacting
                                                      its value and utility.{" "}
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>{" "}
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-element elementor-element-41704c8d elementor-widget elementor-widget-spacer"
                                            data-id="41704c8d"
                                            data-element_type="widget"
                                            data-widget_type="spacer.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="elementor-spacer">
                                                <div className="elementor-spacer-inner"></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section
                            className="elementor-section elementor-top-section elementor-element elementor-element-6921c123 elementor-section-stretched elementor-section-content-middle dark_mode_light_row elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="6921c123"
                            data-element_type="section"
                            data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                            style={{ width: "1349px", left: "-64.5px" }}
                          >
                            <div className="elementor-container elementor-column-gap-wide">
                              <div
                                className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-22b3445c"
                                data-id="22b3445c"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-2865a731 elementor-widget elementor-widget-spacer"
                                    data-id="2865a731"
                                    data-element_type="widget"
                                    data-widget_type="spacer.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-spacer">
                                        <div className="elementor-spacer-inner"></div>
                                      </div>
                                    </div>
                                  </div>
                                  <section
                                    className="elementor-section elementor-inner-section elementor-element elementor-element-273b1e45 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="273b1e45"
                                    data-element_type="section"
                                  >
                                    <div className="elementor-container elementor-column-gap-no">
                                      <div
                                        className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-28989e10"
                                        data-id="28989e10"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-22df2382 elementor-widget elementor-widget-ohio_heading"
                                            data-id="22df2382"
                                            data-element_type="widget"
                                            data-widget_type="ohio_heading.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="ohio-widget heading -left">
                                                <div className="subtitle">
                                                  Token Generation Event{" "}
                                                </div>

                                                <h3 className="title">
                                                  Allocation
                                                  <br /> and distribution{" "}
                                                </h3>
                                              </div>{" "}
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-element elementor-element-14d403f6 elementor-widget elementor-widget-spacer"
                                            data-id="14d403f6"
                                            data-element_type="widget"
                                            data-widget_type="spacer.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="elementor-spacer">
                                                <div className="elementor-spacer-inner"></div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-element elementor-element-828198c elementor-widget elementor-widget-text-editor"
                                            data-id="828198c"
                                            data-element_type="widget"
                                            data-widget_type="text-editor.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <p>
                                                Morra Token is taking a unique
                                                approach.
                                                <strong>
                                                  {" "}
                                                  No sales, no lock up, and no
                                                  VCs.
                                                </strong>{" "}
                                                At TGE, everyone can start
                                                trading $MORRA token.
                                              </p>{" "}
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-element elementor-element-380e3b84 elementor-widget elementor-widget-ohio_accordion"
                                            data-id="380e3b84"
                                            data-element_type="widget"
                                            data-widget_type="ohio_accordion.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div
                                                className="ohio-accordion-sс ohio-widget accordion -text"
                                                data-ohio-accordion="true"
                                              >
                                                <div className="accordion-item elementor-repeater-item-6e76f80 active">
                                                  <div className="accordion-button">
                                                    <h6 className="accordion-header">
                                                      Tax System
                                                    </h6>
                                                    <button className="icon-button -extra-small">
                                                      <i className="icon"></i>
                                                    </button>
                                                  </div>
                                                  <div
                                                    className="accordion-collapse visible"
                                                    style={{
                                                      height: "100.781px",
                                                    }}
                                                  >
                                                    <div className="accordion-body">
                                                      <p>
                                                        To fuel our
                                                        project&apos;s
                                                        development, we&apos;re
                                                        introducing a buy/sell
                                                        tax system. This system
                                                        will help generate
                                                        revenue for Morra Games
                                                        growth, development and
                                                        marketing.
                                                      </p>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="accordion-item elementor-repeater-item-8a71fbc">
                                                  <div className="accordion-button">
                                                    <h6 className="accordion-header">
                                                      Epoch Period
                                                    </h6>
                                                    <button className="icon-button -extra-small">
                                                      <i className="icon"></i>
                                                    </button>
                                                  </div>
                                                  <div className="accordion-collapse ">
                                                    <div className="accordion-body">
                                                      <p>
                                                        Morra token tax&nbsp;
                                                        system is governed by
                                                        epoch period. The higher
                                                        the period, the lower
                                                        the tax.
                                                      </p>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>{" "}
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-element elementor-element-4c4fabed elementor-widget elementor-widget-spacer"
                                            data-id="4c4fabed"
                                            data-element_type="widget"
                                            data-widget_type="spacer.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="elementor-spacer">
                                                <div className="elementor-spacer-inner"></div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-element elementor-element-7ef18dd elementor-widget elementor-widget-ohio_button"
                                            data-id="7ef18dd"
                                            data-element_type="widget"
                                            data-widget_type="ohio_button.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="ohio-widget-holder -left">
                                                <a
                                                  href="https://www.morragames.com/unlocking-the-potential-morra-token-and-the-epoch-system/"
                                                  className="ohio-widget button -primary"
                                                >
                                                  Discover Epoch System
                                                  <i className="icon -right bi">
                                                    <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      height="16"
                                                      width="14"
                                                      viewBox="0 0 448 512"
                                                    >
                                                      <path
                                                        fill="#ffffff"
                                                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                                                      />
                                                    </svg>
                                                  </i>{" "}
                                                </a>
                                              </div>{" "}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                  <div
                                    className="elementor-element elementor-element-5b922261 elementor-hidden-phone elementor-widget elementor-widget-spacer"
                                    data-id="5b922261"
                                    data-element_type="widget"
                                    data-widget_type="spacer.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-spacer">
                                        <div className="elementor-spacer-inner"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-986f8c5"
                                data-id="986f8c5"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap"></div>
                              </div>
                              <div
                                className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-66e8d8a8"
                                data-id="66e8d8a8"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <section
                                    className="elementor-section elementor-inner-section elementor-element elementor-element-7873190 elementor-section-boxed elementor-section-height-default elementor-section-height-default animated fadeInUp"
                                    data-id="7873190"
                                    data-element_type="section"
                                    data-settings='{"background_background":"classic","animation":"fadeInUp"}'
                                  >
                                    <div className="elementor-container elementor-column-gap-wide">
                                      <div
                                        className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-46929477"
                                        data-id="46929477"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-753d9323 elementor-widget elementor-widget-spacer"
                                            data-id="753d9323"
                                            data-element_type="widget"
                                            data-widget_type="spacer.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="elementor-spacer">
                                                <div className="elementor-spacer-inner"></div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-element elementor-element-718a88c1 elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-ohio_video"
                                            data-id="718a88c1"
                                            data-element_type="widget"
                                            data-widget_type="ohio_video.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div
                                                className="video-button open-popup -center-flex -animation"
                                                data-video="https://www.youtube.com/embed/t67_zAg5vvI?controls=1&amp;start=0&amp;mute=0"
                                              >
                                                <button className="icon-button ">
                                                  <i className="icon">
                                                    <svg
                                                      className="default"
                                                      width="13"
                                                      height="20"
                                                      viewBox="0 0 13 20"
                                                      fill="none"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                      <path d="M0 20L13 10L0 0V20Z"></path>
                                                    </svg>
                                                    <svg
                                                      className="minimal"
                                                      width="17"
                                                      height="20"
                                                      viewBox="0 0 17 20"
                                                      fill="none"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                      <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M0.766274 0.442678C0.998698 0.312329 1.26165 0.24625 1.52808 0.25124C1.79452 0.256229 2.05481 0.332105 2.28219 0.471065L15.78 8.72C15.9993 8.85399 16.1804 9.04206 16.3061 9.26618C16.4318 9.4903 16.4978 9.74295 16.4978 9.99991C16.4978 10.2569 16.4318 10.5095 16.3061 10.7336C16.1804 10.9578 15.9993 11.1458 15.78 11.2798L2.28219 19.5288C2.05481 19.6677 1.79451 19.7436 1.52808 19.7486C1.26165 19.7536 0.9987 19.6875 0.766274 19.5571C0.533848 19.4268 0.340346 19.2369 0.205669 19.0069C0.0709916 18.777 1.3411e-07 18.5153 0 18.2488V1.75098C1.3411e-07 1.48449 0.0709911 1.22282 0.205669 0.992883C0.340347 0.76294 0.533849 0.573027 0.766274 0.442678ZM14.9978 9.99991L1.5 1.75098L1.5 18.2488L14.9978 9.99991Z"
                                                      ></path>
                                                    </svg>
                                                  </i>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-element elementor-element-cec9f8f elementor-widget elementor-widget-spacer"
                                            data-id="cec9f8f"
                                            data-element_type="widget"
                                            data-widget_type="spacer.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="elementor-spacer">
                                                <div className="elementor-spacer-inner"></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section
                            className="elementor-section elementor-top-section elementor-element elementor-element-04ff75e clb-stretch-column-right elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="04ff75e"
                            data-element_type="section"
                          >
                            <div className="elementor-container elementor-column-gap-no">
                              <div
                                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-c352ff6"
                                data-id="c352ff6"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-a1e68ac elementor-widget elementor-widget-spacer"
                                    data-id="a1e68ac"
                                    data-element_type="widget"
                                    data-widget_type="spacer.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-spacer">
                                        <div className="elementor-spacer-inner"></div>
                                      </div>
                                    </div>
                                  </div>
                                  <section
                                    className="elementor-section elementor-inner-section elementor-element elementor-element-db4bf0c elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="db4bf0c"
                                    data-element_type="section"
                                  >
                                    <div className="elementor-container elementor-column-gap-wide">
                                      <div
                                        className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-e02ac9c"
                                        data-id="e02ac9c"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-d64077b elementor-widget elementor-widget-spacer"
                                            data-id="d64077b"
                                            data-element_type="widget"
                                            data-widget_type="spacer.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="elementor-spacer">
                                                <div className="elementor-spacer-inner"></div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-element elementor-element-1d1d0ae9 elementor-widget elementor-widget-ohio_heading"
                                            data-id="1d1d0ae9"
                                            data-element_type="widget"
                                            data-widget_type="ohio_heading.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="ohio-widget heading -left">
                                                <h2 className="title">
                                                  Frequently Asked Questions{" "}
                                                </h2>
                                              </div>{" "}
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-element elementor-element-52a1540 elementor-widget elementor-widget-spacer"
                                            data-id="52a1540"
                                            data-element_type="widget"
                                            data-widget_type="spacer.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="elementor-spacer">
                                                <div className="elementor-spacer-inner"></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                  <div
                                    className="elementor-element elementor-element-657383c elementor-widget elementor-widget-spacer"
                                    data-id="657383c"
                                    data-element_type="widget"
                                    data-widget_type="spacer.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-spacer">
                                        <div className="elementor-spacer-inner"></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-5dd16b3 elementor-widget elementor-widget-ohio_accordion"
                                    data-id="5dd16b3"
                                    data-element_type="widget"
                                    data-widget_type="ohio_accordion.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div
                                        className="ohio-accordion-sс ohio-widget accordion -text"
                                        data-ohio-accordion="true"
                                      >
                                        <div className="accordion-item elementor-repeater-item-041b31f active">
                                          <div className="accordion-button">
                                            <h6 className="accordion-header">
                                              What is Morra Token ($MORRA)?
                                            </h6>
                                            <button className="icon-button -extra-small">
                                              <i className="icon"></i>
                                            </button>
                                          </div>
                                          <div
                                            className="accordion-collapse visible"
                                            style={{ height: "100.781px" }}
                                          >
                                            <div className="accordion-body">
                                              <p>
                                                Morra Token ($MORRA) is the
                                                native utility token of the
                                                Morra Games ecosystem, designed
                                                to facilitate various
                                                transactions and governance
                                                within the platform.
                                              </p>{" "}
                                            </div>
                                          </div>
                                        </div>
                                        <div className="accordion-item elementor-repeater-item-750e816">
                                          <div className="accordion-button">
                                            <h6 className="accordion-header">
                                              Is Morra Token available for sale
                                              or investment at its launch?
                                            </h6>
                                            <button className="icon-button -extra-small">
                                              <i className="icon"></i>
                                            </button>
                                          </div>
                                          <div className="accordion-collapse ">
                                            <div className="accordion-body">
                                              <p>
                                                No, Morra Token does not involve
                                                sales, investments, or venture
                                                capital funding at its launch.
                                                It&apos;s open and available for
                                                everyone to trade.
                                              </p>{" "}
                                            </div>
                                          </div>
                                        </div>
                                        <div className="accordion-item elementor-repeater-item-0dca2fd">
                                          <div className="accordion-button">
                                            <h6 className="accordion-header">
                                              What are the primary use cases of
                                              Morra Token?
                                            </h6>
                                            <button className="icon-button -extra-small">
                                              <i className="icon"></i>
                                            </button>
                                          </div>
                                          <div className="accordion-collapse ">
                                            <div className="accordion-body">
                                              <ul>
                                                <li>
                                                  $MORRA can be used for in-game
                                                  purchases, accessing premium
                                                  content, minting NFTs,
                                                  participating in virtual
                                                  events, and much more within
                                                  the Morra Games ecosystem.
                                                </li>
                                              </ul>{" "}
                                            </div>
                                          </div>
                                        </div>
                                        <div className="accordion-item elementor-repeater-item-74c0587">
                                          <div className="accordion-button">
                                            <h6 className="accordion-header">
                                              Who are PVP holders?
                                            </h6>
                                            <button className="icon-button -extra-small">
                                              <i className="icon"></i>
                                            </button>
                                          </div>
                                          <div className="accordion-collapse ">
                                            <div className="accordion-body">
                                              <p>
                                                PVP holders are Morra Games
                                                early investors.{" "}
                                                <strong>
                                                  They will be able to convert
                                                  their PVP token at the ratio
                                                  of 1:10
                                                </strong>
                                              </p>{" "}
                                            </div>
                                          </div>
                                        </div>
                                        <div className="accordion-item elementor-repeater-item-b6f6eb7">
                                          <div className="accordion-button">
                                            <h6 className="accordion-header">
                                              What role does Morra Token play in
                                              governance within the Morra Studio
                                              ecosystem?
                                            </h6>
                                            <button className="icon-button -extra-small">
                                              <i className="icon"></i>
                                            </button>
                                          </div>
                                          <div className="accordion-collapse ">
                                            <div className="accordion-body">
                                              <p>
                                                Morra Token allows holders to
                                                participate in governance
                                                decisions, enabling them to
                                                influence the platform&apos;s
                                                development and content
                                                creation.
                                              </p>{" "}
                                            </div>
                                          </div>
                                        </div>
                                      </div>{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-32fbb5e"
                                data-id="32fbb5e"
                                data-element_type="column"
                                data-settings='{"background_background":"classic"}'
                              >
                                <div
                                  className="elementor-widget-wrap elementor-element-populated stretch-content"
                                  style={{ minWidth: "776.172px" }}
                                >
                                  <div
                                    className="elementor-element elementor-element-8ce1035 elementor-widget elementor-widget-spacer"
                                    data-id="8ce1035"
                                    data-element_type="widget"
                                    data-widget_type="spacer.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="elementor-spacer">
                                        <div className="elementor-spacer-inner"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </article>{" "}
                  </main>
                </div>
              </div>
            </div>
          </div>

          <footer
            id="colophon"
            className="site-footer sticky clb__light_section visible"
          >
            <div className="page-container">
              <div className="widgets vc_row">
                <div className="vc_col-md-3 vc_col-sm-6 widgets-column">
                  <ul>
                    <li
                      id="ohio_widget_logo-1"
                      className="widget widget_ohio_widget_logo"
                    >
                      {" "}
                      <div className="branding">
                        <div className="logo ">
                          <a
                            className="-unlink"
                            href="https://www.morragames.com/"
                          >
                            <img
                              src="https://www.morragames.com/wp-content/uploads/2023/11/logo_white.png"
                              className="light-scheme-logo "
                              srcSet="https://www.morragames.com/wp-content/uploads/2023/11/logo_white.png 2x"
                              alt="Morra Games"
                            />

                            <img
                              src="https://www.morragames.com/wp-content/uploads/2023/11/logo_white.png"
                              className="dark-scheme-logo"
                              srcSet="https://www.morragames.com/wp-content/uploads/2023/11/logo_white.png 2x"
                              alt="Morra Games"
                            />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li id="block-7" className="widget widget_block">
                      <strong>
                        <a href="https://linkedin.com/company/morrastudio/">
                          In.
                        </a>
                        &nbsp;/&nbsp;&nbsp;
                        <a href="https://x.com/morragames/">X.</a>
                        &nbsp;&nbsp;/&nbsp;&nbsp;{" "}
                        <a href="https://discord.gg/srn6xxyAq9">Dis.</a>
                        &nbsp;&nbsp;/&nbsp;&nbsp;{" "}
                        <a href="https://www.youtube.com/@morracom/">Yt.</a>
                      </strong>
                    </li>
                  </ul>
                </div>

                <div className="vc_col-md-3 vc_col-sm-6 widgets-column">
                  <ul>
                    <li id="block-8" className="widget widget_block">
                      <h3 className="title widget-title">Dubai</h3>
                      <b>Morra Games.</b>
                      <br className="vc_hidden-xs" />
                      Marasi Drive,
                      <br className="vc_hidden-xs" />
                      Business Bay, Dubai
                      <br className="vc_hidden-xs" />
                      United Arab Emirates
                    </li>
                  </ul>
                </div>

                <div className="vc_col-md-3 vc_col-sm-6 widgets-column">
                  <ul>
                    <li id="block-10" className="widget widget_block">
                      <h3 className="title widget-title">
                        Partnership inquiries
                      </h3>
                      Interested in working with us?
                      <br className="vc_hidden-xs" />
                      <b>
                        <a href="mailto:partnership@morragames.com">
                          partnership@morragames.com
                        </a>
                      </b>
                    </li>
                    <li id="block-11" className="widget widget_block">
                      <h3 className="title widget-title">Business inquiries</h3>
                      Interested in working with us?
                      <br className="vc_hidden-xs" />
                      <b>
                        <a href="mailto:business@morragames.com">
                          business@morragames.com
                        </a>
                      </b>
                    </li>
                  </ul>
                </div>

                <div className="vc_col-md-3 vc_col-sm-6 widgets-column">
                  <ul>
                    <li
                      id="ohio_widget_subscribe-1"
                      className="widget widget_ohio_widget_subscribe"
                    >
                      <h3 className="title widget-title">
                        Sign up for the newsletter
                      </h3>
                      <div className="subscribe-widget contact-form">
                        <div
                          className="wpcf7 js"
                          id="wpcf7-f223705-o1"
                          lang="en-US"
                          dir="ltr"
                        >
                          <div className="screen-reader-response">
                            <p
                              role="status"
                              aria-live="polite"
                              aria-atomic="true"
                            ></p>{" "}
                            <ul></ul>
                          </div>
                          <form
                            action="/token/#wpcf7-f223705-o1"
                            method="post"
                            className="wpcf7-form mailchimp-ext-0.5.70 init"
                            aria-label="Contact form"
                            noValidate={true}
                            data-status="init"
                          >
                            <div style={{ display: "none" }}>
                              <input
                                type="hidden"
                                name="_wpcf7"
                                value="223705"
                              />
                              <input
                                type="hidden"
                                name="_wpcf7_version"
                                value="5.8.2"
                              />
                              <input
                                type="hidden"
                                name="_wpcf7_locale"
                                value="en_US"
                              />
                              <input
                                type="hidden"
                                name="_wpcf7_unit_tag"
                                value="wpcf7-f223705-o1"
                              />
                              <input
                                type="hidden"
                                name="_wpcf7_container_post"
                                value="0"
                              />
                              <input
                                type="hidden"
                                name="_wpcf7_posted_data_hash"
                                value=""
                              />
                            </div>
                            <div className="subscribe-form">
                              <p>
                                <span
                                  className="wpcf7-form-control-wrap"
                                  data-name="your-email"
                                >
                                  <input
                                    size={40}
                                    className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
                                    aria-required="true"
                                    aria-invalid="false"
                                    placeholder="Email address"
                                    value=""
                                    type="email"
                                    name="your-email"
                                  />
                                </span>
                                <br />
                                <button
                                  className="button -flat -reset-color"
                                  data-button-loading="true"
                                >
                                  Sign Up
                                </button>
                                <span className="wpcf7-spinner"></span>
                                <br />
                                <span
                                  className="wpcf7-form-control-wrap"
                                  data-name="checkbox-101"
                                >
                                  <span className="wpcf7-form-control wpcf7-checkbox wpcf7-validates-as-required">
                                    <span className="wpcf7-list-item first last">
                                      <label>
                                        <input
                                          type="checkbox"
                                          name="checkbox-101[]"
                                          value="I’m okay with getting emails and having that activity tracked to improve my experience."
                                        />
                                        <span className="wpcf7-list-item-label">
                                          I’m okay with getting emails and
                                          having that activity tracked to
                                          improve my experience.
                                        </span>
                                      </label>
                                    </span>
                                  </span>
                                </span>
                              </p>
                            </div>
                            <div
                              className="wpcf7-response-output"
                              aria-hidden="true"
                            ></div>
                            <p style={{ display: "none" }}>
                              <span className="wpcf7-form-control-wrap referer-page">
                                <input
                                  type="hidden"
                                  name="referer-page"
                                  value="https://www.morragames.com/news/"
                                  data-value="https://www.morragames.com/news/"
                                  className="wpcf7-form-control wpcf7-text referer-page"
                                  aria-invalid="false"
                                />
                              </span>
                            </p>
                            <input
                              type="hidden"
                              name="3p9isi5u"
                              value="rsqpxaddov0b"
                            />
                            <input
                              type="hidden"
                              name="fpzw3d9s"
                              value="401qn139h42u"
                            />
                            <input
                              type="hidden"
                              name="otqd1bjc"
                              value="mcwoc9vdxklv"
                            />
                          </form>
                        </div>
                        <div
                          className="hidden"
                          data-button-contact="true"
                        ></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="site-footer-copyright">
              <div className="page-container">
                <div className="vc_row">
                  <div className="vc_col-md-12">
                    <div className="holder">
                      <div className="-left">
                        © 2021-2023{" "}
                        <a href="http://linkedin.com/company/morrastudio">
                          Morra Studio
                        </a>
                        .{" "}
                      </div>
                      <div className="-right">All rights reserved. </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>

        <div className="notification">
          <div className="alert -small -fixed -blur">
            <p className="alert-message -unspace">
              $MORRA listed on Uniswap
              <a href="https://app.uniswap.org/swap?inputCurrency=ETH&amp;outputCurrency=0xd9adfb67381d392c6e9671f64cdd9014bfcd74f2">
                Start Trading{" "}
              </a>
            </p>
          </div>
        </div>

        <div className="clb-popup container-loading custom-popup hidden">
          <div className="close-bar">
            <button className="icon-button -light" aria-label="close">
              <i className="icon">
                <svg
                  className="default"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"></path>
                </svg>
                <svg
                  className="minimal"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.7552 0.244806C16.0816 0.571215 16.0816 1.10043 15.7552 1.42684L1.42684 15.7552C1.10043 16.0816 0.571215 16.0816 0.244806 15.7552C-0.0816021 15.4288 -0.0816021 14.8996 0.244806 14.5732L14.5732 0.244806C14.8996 -0.0816019 15.4288 -0.0816019 15.7552 0.244806Z"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.7552 15.7552C15.4288 16.0816 14.8996 16.0816 14.5732 15.7552L0.244807 1.42684C-0.0816013 1.10043 -0.0816013 0.571215 0.244807 0.244806C0.571215 -0.0816021 1.10043 -0.0816021 1.42684 0.244806L15.7552 14.5732C16.0816 14.8996 16.0816 15.4288 15.7552 15.7552Z"
                  ></path>
                </svg>
              </i>
            </button>
          </div>
          <div className="clb-popup-holder"></div>
        </div>

        <link
          rel="stylesheet"
          id="ohio-global-fonts-css"
          href="//fonts.googleapis.com/css?family=DM+Sans%3A700%26display%3Dswap&amp;ver=6.4.1"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="e-animations-css"
          href="https://www.morragames.com/wp-content/plugins/elementor/assets/lib/animations/animations.min.css?ver=3.17.2"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="rs-plugin-settings-css"
          href="https://www.morragames.com/wp-content/plugins/revslider/public/assets/css/rs6.css?ver=6.6.11"
          type="text/css"
          media="all"
        />

        <script
          async={true}
          type="text/javascript"
          src="https://www.morragames.com/wp-content/plugins/contact-form-7/includes/swv/js/index.js?ver=5.8.2"
          id="swv-js"
        ></script>

        <script
          async={true}
          type="text/javascript"
          src="https://www.morragames.com/wp-content/plugins/contact-form-7/includes/js/index.js?ver=5.8.2"
          id="contact-form-7-js"
        ></script>
        <script
          type="text/javascript"
          src="https://www.morragames.com/wp-content/plugins/revslider/public/assets/js/rbtools.min.js?ver=6.6.11"
          defer={true}
          async={true}
          id="tp-tools-js"
        ></script>
        <script
          type="text/javascript"
          src="https://www.morragames.com/wp-content/plugins/revslider/public/assets/js/rs6.min.js?ver=6.6.11"
          defer={true}
          async={true}
          id="revmin-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://www.morragames.com/wp-content/themes/ohio/assets/js/libs/jquery.event.move.min.js?ver=1.0.0"
          id="jquery-event-move-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://www.morragames.com/wp-content/themes/ohio/assets/js/libs/jquery.compare.min.js?ver=1.0.0"
          id="jquery-twentytwenty-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://www.morragames.com/wp-content/themes/ohio/assets/js/libs/typed.min.js?ver=1.0.0"
          id="typed-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://www.morragames.com/wp-includes/js/imagesloaded.min.js?ver=5.0.0"
          id="imagesloaded-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://www.morragames.com/wp-includes/js/masonry.min.js?ver=4.2.2"
          id="masonry-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://www.morragames.com/wp-content/themes/ohio/assets/js/libs/aos.min.js?ver=6.4.1"
          id="aos-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://www.morragames.com/wp-content/themes/ohio/assets/js/libs/isotope.pkgd.min.js?ver=6.4.1"
          id="isotope-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://www.morragames.com/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js?ver=3.17.2"
          id="elementor-webpack-runtime-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://www.morragames.com/wp-content/plugins/elementor/assets/js/frontend-modules.min.js?ver=3.17.2"
          id="elementor-frontend-modules-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://www.morragames.com/wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min.js?ver=4.0.2"
          id="elementor-waypoints-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://www.morragames.com/wp-includes/js/jquery/ui/core.min.js?ver=1.13.2"
          id="jquery-ui-core-js"
        ></script>

        <script
          async={true}
          type="text/javascript"
          src="https://www.morragames.com/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=3.17.2"
          id="elementor-frontend-js"
        ></script>
        <span
          id="elementor-device-mode"
          className="elementor-screen-only"
        ></span>
        <script
          async={true}
          type="text/javascript"
          src="https://www.morragames.com/wp-content/plugins/ohio-extra/elementor/widgets/progress-bar/handler.js?ver=1.0.0"
          id="ohio-elementor-progress-bar-widget-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://www.morragames.com/wp-content/plugins/ohio-extra/elementor/widgets/accordion/handler.js?ver=1.0.0"
          id="ohio-elementor-accordion-widget-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://www.morragames.com/wp-includes/js/jquery/jquery.masonry.min.js?ver=3.1.2b"
          id="jquery-masonry-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://www.morragames.com/wp-content/themes/ohio/assets/js/jquery.clb-slider.min.js?ver=6.4.1"
          id="ohio-slider-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://www.morragames.com/wp-content/themes/ohio/assets/js/libs/jquery.mega-menu.min.js?ver=6.4.1"
          id="jquery-mega-menu-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://www.morragames.com/wp-content/themes/ohio/assets/js/libs/jquery.tilt.min.js?ver=6.4.1"
          id="tilt-effect-js"
        ></script>

        <script
          async={true}
          type="text/javascript"
          src="https://www.morragames.com/wp-content/themes/ohio/assets/js/main.min.js?ver=3.3.0"
          id="ohio-main-js"
        ></script>

        <div id="loom-companion-mv3" ext-id="liecbddmkiiihnedobmlmillhodjkdmb">
          <section id="shadow-host-companion"></section>
        </div>
      </body>
    </div>
  );
};

export default Home;

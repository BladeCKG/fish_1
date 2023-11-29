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
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
        <title>Deepcave - Turn Your Words Into Art</title>
        <meta name="robots" content="max-image-preview:large" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Deepcave.io » Feed"
          href="https://deepcave.io/feed/"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Deepcave.io » Comments Feed"
          href="https://deepcave.io/comments/feed/"
        />

        <link
          rel="stylesheet"
          id="wp-block-library-css"
          href="https://deepcave.io/wp-includes/css/dist/block-library/style.min.css?ver=6.4.1"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="copy-the-code-css"
          href="https://deepcave.io/wp-content/plugins/copy-the-code/assets/css/copy-the-code.css?ver=3.2.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="ctc-copy-inline-css"
          href="https://deepcave.io/wp-content/plugins/copy-the-code/assets/css/copy-inline.css?ver=3.2.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="contact-form-7-css"
          href="https://deepcave.io/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=5.8.1"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="woocommerce-layout-css"
          href="https://deepcave.io/wp-content/plugins/woocommerce/assets/css/woocommerce-layout.css?ver=8.2.1"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="woocommerce-smallscreen-css"
          href="https://deepcave.io/wp-content/plugins/woocommerce/assets/css/woocommerce-smallscreen.css?ver=8.2.1"
          type="text/css"
          media="only screen and (max-width: 767px)"
        />
        <link
          rel="stylesheet"
          id="woocommerce-general-css"
          href="https://deepcave.io/wp-content/plugins/woocommerce/assets/css/woocommerce.css?ver=8.2.1"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="wgl-extensions-css"
          href="https://deepcave.io/wp-content/plugins/wgl-extensions/public/css/wgl-extensions-public.css?ver=1.0.6"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="wgl-parent-style-css"
          href="https://deepcave.io/wp-content/themes/nico/style.css?ver=6.4.1"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="nico-theme-info-css"
          href="https://deepcave.io/wp-content/themes/nico-child/style.css?ver=1.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="font-awesome-5-all-css"
          href="https://deepcave.io/wp-content/themes/nico/css/font-awesome-5.min.css?ver=1.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="nico-flaticon-css"
          href="https://deepcave.io/wp-content/themes/nico/fonts/flaticon/flaticon.css?ver=1.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="nico-main-css"
          href="https://deepcave.io/wp-content/themes/nico/css/main.css?ver=1.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="nico-gutenberg-css"
          href="https://deepcave.io/wp-content/themes/nico/css/pluggable/gutenberg.css?ver=1.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="nico-woocommerce-css"
          href="https://deepcave.io/wp-content/themes/nico/css/pluggable/woocommerce.css?ver=1.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="nico-webgl_fluid-css"
          href="https://deepcave.io/wp-content/themes/nico/css/pluggable/webgl_fluid.css?ver=1.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="nico-responsive-css"
          href="https://deepcave.io/wp-content/themes/nico/css/responsive.css?ver=1.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="nico-dynamic-css"
          href="https://deepcave.io/wp-content/themes/nico/css/dynamic.css?ver=1.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-icons-css"
          href="https://deepcave.io/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.23.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-frontend-css"
          href="https://deepcave.io/wp-content/uploads/elementor/css/custom-frontend.min.css?ver=1697641938"
          type="text/css"
          media="all"
        />

        <link
          rel="stylesheet"
          id="swiper-css"
          href="https://deepcave.io/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css?ver=8.4.5"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-post-4329-css"
          href="https://deepcave.io/wp-content/uploads/elementor/css/post-4329.css?ver=1697641938"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-pro-css"
          href="https://deepcave.io/wp-content/uploads/elementor/css/custom-pro-frontend.min.css?ver=1698089377"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="font-awesome-4-shim-css"
          href="https://deepcave.io/wp-content/plugins/elementor/assets/lib/font-awesome/css/v4-shims.min.css?ver=3.16.6"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-global-css"
          href="https://deepcave.io/wp-content/uploads/elementor/css/global.css?ver=1697641939"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-post-3462-css"
          href="https://deepcave.io/wp-content/uploads/elementor/css/post-3462.css?ver=1701076524"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="ctc-blocks-core-css"
          href="https://deepcave.io/wp-content/plugins/copy-the-code/classes/blocks/assets/css/style.css?ver=3.2.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="ctc-el-email-sample-css"
          href="https://deepcave.io/wp-content/plugins/copy-the-code/classes/elementor/widgets/email-sample/style.css?ver=3.2.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="ctc-blocks-css"
          href="https://deepcave.io/wp-content/plugins/copy-the-code/classes/blocks/assets/css/style.css?ver=3.2.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="ctc-el-email-address-css"
          href="https://deepcave.io/wp-content/plugins/copy-the-code/classes/elementor/widgets/email-address/style.css?ver=3.2.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="ctc-el-phone-number-css"
          href="https://deepcave.io/wp-content/plugins/copy-the-code/classes/elementor/widgets/phone-number/style.css?ver=3.2.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="ctc-el-copy-button-css"
          href="https://deepcave.io/wp-content/plugins/copy-the-code/classes/elementor/widgets/copy-button/style.css?ver=3.2.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="ctc-el-copy-icon-css"
          href="https://deepcave.io/wp-content/plugins/copy-the-code/classes/elementor/widgets/copy-icon/style.css?ver=3.2.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="ctc-el-blockquote-css"
          href="https://deepcave.io/wp-content/plugins/copy-the-code/classes/elementor/widgets/blockquote/style.css?ver=3.2.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="ctc-el-code-snippet-css"
          href="https://deepcave.io/wp-content/plugins/copy-the-code/classes/elementor/widgets/code-snippet/style.css?ver=3.2.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="ctc-el-message-css"
          href="https://deepcave.io/wp-content/plugins/copy-the-code/classes/elementor/widgets/message/style.css?ver=3.2.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="ctc-el-wish-css"
          href="https://deepcave.io/wp-content/plugins/copy-the-code/classes/elementor/widgets/wish/style.css?ver=3.2.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="ctc-el-shayari-css"
          href="https://deepcave.io/wp-content/plugins/copy-the-code/classes/elementor/widgets/shayari/style.css?ver=3.2.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="ctc-el-sms-css"
          href="https://deepcave.io/wp-content/plugins/copy-the-code/classes/elementor/widgets/sms/style.css?ver=3.2.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="ctc-el-deal-css"
          href="https://deepcave.io/wp-content/plugins/copy-the-code/classes/elementor/widgets/deal/style.css?ver=3.2.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="ctc-el-coupon-css"
          href="https://deepcave.io/wp-content/plugins/copy-the-code/classes/elementor/widgets/coupon/style.css?ver=3.2.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="ctc-el-ai-prompt-generator-css"
          href="https://deepcave.io/wp-content/plugins/copy-the-code/classes/elementor/widgets/ai-prompt-generator/style.css?ver=3.2.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-post-32-css"
          href="https://deepcave.io/wp-content/uploads/elementor/css/post-32.css?ver=1700505163"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-post-3264-css"
          href="https://deepcave.io/wp-content/uploads/elementor/css/post-3264.css?ver=1700505132"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-post-216-css"
          href="https://deepcave.io/wp-content/uploads/elementor/css/post-216.css?ver=1700340452"
          type="text/css"
          media="all"
        />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css?family=DM%20Sans:400,400,500,700%7CSpace%20Grotesk:700,500,300,400,700&amp;display=swap&amp;ver=1701077771"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=DM%20Sans:400,400,500,700%7CSpace%20Grotesk:700,500,300,400,700&amp;display=swap&amp;ver=1701077771"
          media="all"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=DM%20Sans:400,400,500,700%7CSpace%20Grotesk:700,500,300,400,700&#038;display=swap&#038;ver=1701077771"
          />
        </noscript>
        <link
          rel="stylesheet"
          id="google-fonts-1-css"
          href="https://fonts.googleapis.com/css?family=Space+Grotesk%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CDM+Sans%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&amp;display=swap&amp;ver=6.4.1"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-icons-shared-0-css"
          href="https://deepcave.io/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.min.css?ver=5.15.3"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-icons-fa-brands-css"
          href="https://deepcave.io/wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.min.css?ver=5.15.3"
          type="text/css"
          media="all"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://deepcave.io/wp-content/plugins/nextend-smart-slider3-pro/Public/SmartSlider3/Application/Frontend/Assets/dist/smartslider.min.css?ver=4e06d1a7"
          media="all"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?display=swap&amp;family=Roboto%3A300%2C400"
          media="all"
        />
        <script
          async={true}
          type="text/javascript"
          src="https://deepcave.io/wp-includes/js/jquery/jquery.min.js?ver=3.7.1"
          id="jquery-core-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://deepcave.io/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1"
          id="jquery-migrate-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://deepcave.io/wp-content/plugins/elementor/assets/lib/font-awesome/js/v4-shims.min.js?ver=3.16.6"
          id="font-awesome-4-shim-js"
        ></script>
        <link rel="https://api.w.org/" href="https://deepcave.io/wp-json/" />
        <link
          rel="alternate"
          type="application/json"
          href="https://deepcave.io/wp-json/wp/v2/pages/3462"
        />
        <link
          rel="EditURI"
          type="application/rsd+xml"
          title="RSD"
          href="https://deepcave.io/xmlrpc.php?rsd"
        />
        <meta name="generator" content="WordPress 6.4.1" />
        <meta name="generator" content="WooCommerce 8.2.1" />
        <link rel="canonical" href="https://deepcave.io/" />
        <link rel="shortlink" href="https://deepcave.io/" />
        <link
          rel="alternate"
          type="application/json+oembed"
          href="https://deepcave.io/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fdeepcave.io%2F"
        />
        <link
          rel="alternate"
          type="text/xml+oembed"
          href="https://deepcave.io/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fdeepcave.io%2F&amp;format=xml"
        />
        <script
          async={true}
          src="https://www.googletagmanager.com/gtag/js?id=G-0QW9L7YQH5"
        ></script>
        <meta
          name="generator"
          content="Elementor 3.16.6; features: e_dom_optimization, e_optimized_assets_loading, additional_custom_breakpoints; settings: css_print_method-external, google_font-enabled, font_display-swap"
        />
        <meta
          name="generator"
          content="Powered by Slider Revolution 6.6.16 - responsive, Mobile-Friendly Slider Plugin for WordPress with comfortable drag and drop interface."
        />
        <link
          rel="icon"
          href="https://deepcave.io/wp-content/uploads/2023/10/cropped-a-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="https://deepcave.io/wp-content/uploads/2023/10/cropped-a-192x192.png"
          sizes="192x192"
        />
        <link
          rel="apple-touch-icon"
          href="https://deepcave.io/wp-content/uploads/2023/10/cropped-a-180x180.png"
        />
        <meta
          name="msapplication-TileImage"
          content="https://deepcave.io/wp-content/uploads/2023/10/cropped-a-270x270.png"
        />

        <script
          src="https://deepcave.io/wp-content/plugins/nextend-smart-slider3-pro/Public/SmartSlider3/Application/Frontend/Assets/dist/n2.min.js?ver=4e06d1a7"
          defer={true}
          async={true}
        ></script>
        <script
          src="https://deepcave.io/wp-content/plugins/nextend-smart-slider3-pro/Public/SmartSlider3/Application/Frontend/Assets/dist/smartslider-frontend.min.js?ver=4e06d1a7"
          defer={true}
          async={true}
        ></script>
        <script
          src="https://deepcave.io/wp-content/plugins/nextend-smart-slider3-pro/Public/SmartSlider3Pro/Slider/SliderType/Showcase/Assets/dist/ss-showcase.min.js?ver=4e06d1a7"
          defer={true}
          async={true}
        ></script>
        <script
          src="https://deepcave.io/wp-content/plugins/nextend-smart-slider3-pro/Public/SmartSlider3/Widget/Arrow/ArrowImage/Assets/dist/w-arrow-image.min.js?ver=4e06d1a7"
          defer={true}
          async={true}
        ></script>
        <script
          src="https://deepcave.io/wp-includes/js/wp-emoji-release.min.js?ver=6.4.1"
          defer={true}
        ></script>
      </Head>
      <body
        className="home page-template-default page page-id-3462 theme-nico woocommerce-js elementor-default elementor-kit-4329 elementor-page elementor-page-3462 sticky-sidebar_init e--ua-blink e--ua-chrome e--ua-webkit"
        data-mobile-width="1200"
        style={{ transform: "none" }}
        data-elementor-device-mode="desktop"
      >
        <header className="wgl-theme-header header_overlap">
          <div className="wgl-site-header mobile_header_custom">
            <div className="container-wrapper">
              {" "}
              <div
                data-elementor-type="wp-post"
                data-elementor-id="32"
                className="elementor elementor-32"
                data-elementor-post-type="header"
              >
                <section
                  className="elementor-section elementor-top-section elementor-element elementor-element-cbde00d elementor-section-full_width elementor-section-content-middle elementor-section-height-default elementor-section-height-default"
                  data-id="cbde00d"
                  data-element_type="section"
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div
                      className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-5aebac7"
                      data-id="5aebac7"
                      data-element_type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-551346b elementor-widget elementor-widget-wgl-header-logo"
                          data-id="551346b"
                          data-element_type="widget"
                          data-widget_type="wgl-header-logo.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="wgl-logotype-container default_logo">
                              <a href="https://deepcave.io/">
                                <img
                                  className="default_logo"
                                  src="https://deepcave.io/wp-content/uploads/2023/10/a.png"
                                  alt="logotype"
                                  style={{ height: "70px" }}
                                />
                              </a>
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-ff3e74d"
                      data-id="ff3e74d"
                      data-element_type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-571f10c elementor-widget elementor-widget-wgl-menu"
                          data-id="571f10c"
                          data-element_type="widget"
                          data-widget_type="wgl-menu.default"
                        >
                          <div className="elementor-widget-container">
                            <nav className="primary-nav">
                              <ul id="menu-main" className="menu">
                                <li
                                  id="menu-item-4396"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-3462 current_page_item menu-item-4396 mega-menu mega-menu-links mega-columns-5col "
                                >
                                  <a href="https://deepcave.io/">
                                    <span>
                                      <span className="item_text">Home</span>
                                      <span className="menu-item_dots"></span>
                                    </span>
                                    <i className="menu-item__plus"></i>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-5644"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5644"
                                >
                                  <a href="https://deepcave.io/dc-tool/">
                                    <span>
                                      <span className="item_text">DC Tool</span>
                                      <span className="menu-item_dots"></span>
                                    </span>
                                    <i className="menu-item__plus"></i>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-4636"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4636"
                                >
                                  <a href="https://deepcave.io/shop/">
                                    <span>
                                      <span className="item_text">
                                        NFT Shop
                                      </span>
                                      <span className="menu-item_dots"></span>
                                    </span>
                                    <i className="menu-item__plus"></i>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-4803"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4803"
                                >
                                  <a href="https://deepcave.io/whitepaper/">
                                    <span>
                                      <span className="item_text">
                                        Whitepaper
                                      </span>
                                      <span className="menu-item_dots"></span>
                                    </span>
                                    <i className="menu-item__plus"></i>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-5415"
                                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5415"
                                >
                                  <a href="#">
                                    <span>
                                      <span className="item_text">Docs</span>
                                      <span className="menu-item_dots"></span>
                                    </span>
                                    <i className="menu-item__plus"></i>
                                  </a>
                                  <ul className="sub-menu wgl-submenu-position-default">
                                    {" "}
                                    <li
                                      id="menu-item-4716"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4716"
                                    >
                                      <a href="https://deepcave.io/revenue-model/">
                                        <span>
                                          <span className="item_text">
                                            Revenue Model
                                          </span>
                                          <span className="menu-item_dots"></span>
                                        </span>
                                        <i className="menu-item__plus"></i>
                                      </a>
                                    </li>{" "}
                                    <li
                                      id="menu-item-5416"
                                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5416"
                                    >
                                      <a href="#">
                                        <span>
                                          <span className="item_text">
                                            Developers
                                          </span>
                                          <span className="menu-item_dots"></span>
                                        </span>
                                        <i className="menu-item__plus"></i>
                                      </a>
                                    </li>{" "}
                                    <li
                                      id="menu-item-5417"
                                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5417"
                                    >
                                      <a href="https://deepcave-documentation.gitbook.io">
                                        <span>
                                          <span className="item_text">
                                            Gitbook
                                          </span>
                                          <span className="menu-item_dots"></span>
                                        </span>
                                        <i className="menu-item__plus"></i>
                                      </a>
                                    </li>{" "}
                                    <li
                                      id="menu-item-5516"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5516"
                                    >
                                      <a href="https://deepcave.io/kyc/">
                                        <span>
                                          <span className="item_text">KYC</span>
                                          <span className="menu-item_dots"></span>
                                        </span>
                                        <i className="menu-item__plus"></i>
                                      </a>
                                    </li>{" "}
                                    <li
                                      id="menu-item-5419"
                                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5419"
                                    >
                                      <a href="https://github.com/Coinsult/solidity/blob/main/Coinsult_Deepcave_0xBc...fD5D_Audit.pdf">
                                        <span>
                                          <span className="item_text">
                                            Audit
                                          </span>
                                          <span className="menu-item_dots"></span>
                                        </span>
                                        <i className="menu-item__plus"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  id="menu-item-5335"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5335"
                                >
                                  <a href="https://deepcave.io/utility/">
                                    <span>
                                      <span className="item_text">Utility</span>
                                      <span className="menu-item_dots"></span>
                                    </span>
                                    <i className="menu-item__plus"></i>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-4813"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4813"
                                >
                                  <a href="https://deepcave.io/contacts/">
                                    <span>
                                      <span className="item_text">Contact</span>
                                      <span className="menu-item_dots"></span>
                                    </span>
                                    <i className="menu-item__plus"></i>
                                  </a>
                                </li>
                              </ul>{" "}
                            </nav>
                            <div className="mobile-hamburger-toggle">
                              <div className="hamburger-box">
                                <div className="hamburger-inner"></div>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-bb928e3"
                      data-id="bb928e3"
                      data-element_type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-54f0f40 full-height-yes elementor-widget elementor-widget-wgl-header-search"
                          data-id="54f0f40"
                          data-element_type="widget"
                          data-widget_type="wgl-header-search.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="header_search search_standard">
                              <div
                                className="wgl-search elementor-search header_search-button-wrapper"
                                role="button"
                              >
                                <div className="header_search-button flaticon-search "></div>
                                <div className="header_search-close flaticon-close-1"></div>
                              </div>{" "}
                              <div className="header_search-field">
                                <div className="header_search-close flaticon-close-1"></div>
                                <form
                                  role="search"
                                  method="get"
                                  action="https://deepcave.io/"
                                  className="search-form"
                                >
                                  <input
                                    required={true}
                                    type="text"
                                    id="search-form-6566af7799e1e"
                                    className="search-field"
                                    placeholder="Search …"
                                    value=""
                                    name="s"
                                  />
                                  <input
                                    className="search-button"
                                    type="submit"
                                    value="Search"
                                  />
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="16"
                                    width="16"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="#ffffff"
                                      d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                                    />
                                  </svg>
                                </form>{" "}
                              </div>{" "}
                            </div>{" "}
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-4e5de7e elementor-widget__width-auto aleft elementor-widget elementor-widget-wgl-button"
                          data-id="4e5de7e"
                          data-element_type="widget"
                          data-widget_type="wgl-button.default"
                        >
                          <div className="elementor-widget-container">
                            <CustomConnect
                              clickComp={
                                <div
                                  className="wgl-button btn-size-xl"
                                  role="button"
                                >
                                  <div className="button__content">
                                    <span className="button__text">
                                      Please wait...
                                    </span>
                                  </div>
                                </div>
                              }
                              normalComp={
                                <div
                                  className="wgl-button btn-size-xl pulse-button"
                                  role="button"
                                >
                                  <div className="button__content ">
                                    <span className="button__text">
                                      Claim $DeepCave
                                    </span>
                                  </div>
                                </div>
                              }
                            />{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div
            className="wgl-sticky-header wgl-sticky-element"
            data-style="scroll_up"
          >
            <div className="container-wrapper">
              {" "}
              <div
                data-elementor-type="wp-post"
                data-elementor-id="3264"
                className="elementor elementor-3264"
                data-elementor-post-type="header"
              >
                <section
                  className="elementor-section elementor-top-section elementor-element elementor-element-cbde00d elementor-section-full_width elementor-section-content-middle elementor-section-height-default elementor-section-height-default"
                  data-id="cbde00d"
                  data-element_type="section"
                  data-settings='{"background_background":"classic"}'
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div
                      className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-5aebac7"
                      data-id="5aebac7"
                      data-element_type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-551346b elementor-widget elementor-widget-wgl-header-logo"
                          data-id="551346b"
                          data-element_type="widget"
                          data-widget_type="wgl-header-logo.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="wgl-logotype-container default_logo">
                              <a href="https://deepcave.io/">
                                <img
                                  className="default_logo"
                                  src="https://deepcave.io/wp-content/uploads/2023/10/a.png"
                                  alt="logotype"
                                  style={{ height: "70px" }}
                                />
                              </a>
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-ff3e74d"
                      data-id="ff3e74d"
                      data-element_type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-571f10c elementor-widget elementor-widget-wgl-menu"
                          data-id="571f10c"
                          data-element_type="widget"
                          data-widget_type="wgl-menu.default"
                        >
                          <div className="elementor-widget-container">
                            <nav className="primary-nav">
                              <ul id="menu-main-1" className="menu">
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-3462 current_page_item menu-item-4396 mega-menu mega-menu-links mega-columns-5col ">
                                  <a href="https://deepcave.io/">
                                    <span>
                                      <span className="item_text">Home</span>
                                      <span className="menu-item_dots"></span>
                                    </span>
                                    <i className="menu-item__plus"></i>
                                  </a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5644">
                                  <a href="https://deepcave.io/dc-tool/">
                                    <span>
                                      <span className="item_text">DC Tool</span>
                                      <span className="menu-item_dots"></span>
                                    </span>
                                    <i className="menu-item__plus"></i>
                                  </a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4636">
                                  <a href="https://deepcave.io/shop/">
                                    <span>
                                      <span className="item_text">
                                        NFT Shop
                                      </span>
                                      <span className="menu-item_dots"></span>
                                    </span>
                                    <i className="menu-item__plus"></i>
                                  </a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4803">
                                  <a href="https://deepcave.io/whitepaper/">
                                    <span>
                                      <span className="item_text">
                                        Whitepaper
                                      </span>
                                      <span className="menu-item_dots"></span>
                                    </span>
                                    <i className="menu-item__plus"></i>
                                  </a>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5415">
                                  <a href="#">
                                    <span>
                                      <span className="item_text">Docs</span>
                                      <span className="menu-item_dots"></span>
                                    </span>
                                    <i className="menu-item__plus"></i>
                                  </a>
                                  <ul className="sub-menu wgl-submenu-position-default">
                                    {" "}
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4716">
                                      <a href="https://deepcave.io/revenue-model/">
                                        <span>
                                          <span className="item_text">
                                            Revenue Model
                                          </span>
                                          <span className="menu-item_dots"></span>
                                        </span>
                                        <i className="menu-item__plus"></i>
                                      </a>
                                    </li>{" "}
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5416">
                                      <a href="#">
                                        <span>
                                          <span className="item_text">
                                            Developers
                                          </span>
                                          <span className="menu-item_dots"></span>
                                        </span>
                                        <i className="menu-item__plus"></i>
                                      </a>
                                    </li>{" "}
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5417">
                                      <a href="https://deepcave-documentation.gitbook.io">
                                        <span>
                                          <span className="item_text">
                                            Gitbook
                                          </span>
                                          <span className="menu-item_dots"></span>
                                        </span>
                                        <i className="menu-item__plus"></i>
                                      </a>
                                    </li>{" "}
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5516">
                                      <a href="https://deepcave.io/kyc/">
                                        <span>
                                          <span className="item_text">KYC</span>
                                          <span className="menu-item_dots"></span>
                                        </span>
                                        <i className="menu-item__plus"></i>
                                      </a>
                                    </li>{" "}
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5419">
                                      <a href="https://github.com/Coinsult/solidity/blob/main/Coinsult_Deepcave_0xBc...fD5D_Audit.pdf">
                                        <span>
                                          <span className="item_text">
                                            Audit
                                          </span>
                                          <span className="menu-item_dots"></span>
                                        </span>
                                        <i className="menu-item__plus"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5335">
                                  <a href="https://deepcave.io/utility/">
                                    <span>
                                      <span className="item_text">Utility</span>
                                      <span className="menu-item_dots"></span>
                                    </span>
                                    <i className="menu-item__plus"></i>
                                  </a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4813">
                                  <a href="https://deepcave.io/contacts/">
                                    <span>
                                      <span className="item_text">Contact</span>
                                      <span className="menu-item_dots"></span>
                                    </span>
                                    <i className="menu-item__plus"></i>
                                  </a>
                                </li>
                              </ul>{" "}
                            </nav>
                            <div className="mobile-hamburger-toggle">
                              <div className="hamburger-box">
                                <div className="hamburger-inner"></div>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-bb928e3"
                      data-id="bb928e3"
                      data-element_type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-54f0f40 full-height-yes elementor-widget elementor-widget-wgl-header-search"
                          data-id="54f0f40"
                          data-element_type="widget"
                          data-widget_type="wgl-header-search.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="header_search search_standard">
                              <div
                                className="wgl-search elementor-search header_search-button-wrapper"
                                role="button"
                              >
                                <div className="header_search-button flaticon-search "></div>
                                <div className="header_search-close flaticon-close-1"></div>
                              </div>{" "}
                              <div className="header_search-field">
                                <div className="header_search-close flaticon-close-1"></div>
                                <form
                                  role="search"
                                  method="get"
                                  action="https://deepcave.io/"
                                  className="search-form"
                                >
                                  <input
                                    required={true}
                                    type="text"
                                    id="search-form-6566af779d3dd"
                                    className="search-field"
                                    placeholder="Search …"
                                    value=""
                                    name="s"
                                  />
                                  <input
                                    className="search-button"
                                    type="submit"
                                    value="Search"
                                  />
                                  <i className="search__icon flaticon-search"></i>
                                </form>{" "}
                              </div>{" "}
                            </div>{" "}
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-4e5de7e elementor-widget__width-auto aleft elementor-widget elementor-widget-wgl-button"
                          data-id="4e5de7e"
                          data-element_type="widget"
                          data-widget_type="wgl-button.default"
                        >
                          <div className="elementor-widget-container">
                            <a
                              className="wgl-button btn-size-lg "
                              role="button"
                              href="https://www.pinksale.finance/launchpad/0x4b010864E55DF415d6f3d8F7f47a3E35143c8C78?chain=ETH"
                            >
                              <div className="button__content ">
                                <span className="button__text">Presale</span>
                              </div>
                            </a>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="wgl-mobile-header">
            {" "}
            <div className="container-wrapper">
              <div className="wgl-header-row wgl-header-row-section">
                <div className="wgl-container">
                  <div
                    className="wgl-header-row_wrapper"
                    style={{ height: "60px" }}
                  >
                    <div className="position_left header_side">
                      <div className="header_area_container">
                        <div className="wgl-logotype-container logo-mobile">
                          <a href="https://deepcave.io/">
                            <img
                              className="logo-mobile"
                              src="https://deepcave.io/wp-content/uploads/2023/10/a.png"
                              alt="logotype"
                              style={{ height: "36px" }}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="position_center header_side">
                      <div className="header_area_container">
                        <div className="mobile_header html1_editor header_render_editor header_render">
                          <div className="wrapper">
                            <a
                              className="wgl-button btn-size-lg "
                              role="button"
                              href="https://www.pinksale.finance/launchpad/0x4b010864E55DF415d6f3d8F7f47a3E35143c8C78?chain=ETH"
                            >
                              <div className="button__content ">
                                <span className="button__text">Presale</span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="position_right header_side">
                      <div className="header_area_container">
                        <nav className="primary-nav" style={{ height: "60px" }}>
                          <ul id="menu-main-2" className="menu">
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-3462 current_page_item menu-item-4396 mega-menu mega-menu-links mega-columns-5col ">
                              <a href="https://deepcave.io/">
                                <span>
                                  <span className="item_text">Home</span>
                                  <span className="menu-item_dots"></span>
                                </span>
                                <i className="menu-item__plus"></i>
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5644">
                              <a href="https://deepcave.io/dc-tool/">
                                <span>
                                  <span className="item_text">DC Tool</span>
                                  <span className="menu-item_dots"></span>
                                </span>
                                <i className="menu-item__plus"></i>
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4636">
                              <a href="https://deepcave.io/shop/">
                                <span>
                                  <span className="item_text">NFT Shop</span>
                                  <span className="menu-item_dots"></span>
                                </span>
                                <i className="menu-item__plus"></i>
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4803">
                              <a href="https://deepcave.io/whitepaper/">
                                <span>
                                  <span className="item_text">Whitepaper</span>
                                  <span className="menu-item_dots"></span>
                                </span>
                                <i className="menu-item__plus"></i>
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5415">
                              <a href="#">
                                <span>
                                  <span className="item_text">Docs</span>
                                  <span className="menu-item_dots"></span>
                                </span>
                                <i className="menu-item__plus"></i>
                              </a>
                              <ul className="sub-menu wgl-submenu-position-default">
                                {" "}
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4716">
                                  <a href="https://deepcave.io/revenue-model/">
                                    <span>
                                      <span className="item_text">
                                        Revenue Model
                                      </span>
                                      <span className="menu-item_dots"></span>
                                    </span>
                                    <i className="menu-item__plus"></i>
                                  </a>
                                </li>{" "}
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5416">
                                  <a href="#">
                                    <span>
                                      <span className="item_text">
                                        Developers
                                      </span>
                                      <span className="menu-item_dots"></span>
                                    </span>
                                    <i className="menu-item__plus"></i>
                                  </a>
                                </li>{" "}
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5417">
                                  <a href="https://deepcave-documentation.gitbook.io">
                                    <span>
                                      <span className="item_text">Gitbook</span>
                                      <span className="menu-item_dots"></span>
                                    </span>
                                    <i className="menu-item__plus"></i>
                                  </a>
                                </li>{" "}
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5516">
                                  <a href="https://deepcave.io/kyc/">
                                    <span>
                                      <span className="item_text">KYC</span>
                                      <span className="menu-item_dots"></span>
                                    </span>
                                    <i className="menu-item__plus"></i>
                                  </a>
                                </li>{" "}
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5419">
                                  <a href="https://github.com/Coinsult/solidity/blob/main/Coinsult_Deepcave_0xBc...fD5D_Audit.pdf">
                                    <span>
                                      <span className="item_text">Audit</span>
                                      <span className="menu-item_dots"></span>
                                    </span>
                                    <i className="menu-item__plus"></i>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5335">
                              <a href="https://deepcave.io/utility/">
                                <span>
                                  <span className="item_text">Utility</span>
                                  <span className="menu-item_dots"></span>
                                </span>
                                <i className="menu-item__plus"></i>
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4813">
                              <a href="https://deepcave.io/contacts/">
                                <span>
                                  <span className="item_text">Contact</span>
                                  <span className="menu-item_dots"></span>
                                </span>
                                <i className="menu-item__plus"></i>
                              </a>
                            </li>
                          </ul>
                        </nav>
                        <div className="hamburger-box">
                          <div className="hamburger-inner">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mobile_nav_wrapper" data-mobile-width="1200">
                <div className="container-wrapper">
                  <div className="wgl-menu_overlay"></div>
                  <div className="wgl-menu_outer menu-position_left">
                    <div className="wgl-menu-outer_header">
                      <div className="mobile-hamburger-close">
                        <div className="hamburger-box">
                          <div className="hamburger-inner">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wgl-menu-outer_content">
                      <div className="wgl-logotype-container logo-menu">
                        <a href="https://deepcave.io/">
                          <img
                            className="logo-menu"
                            src="https://deepcave.io/wp-content/uploads/2023/10/a.png"
                            alt="logotype"
                            style={{ height: "36px" }}
                          />
                        </a>
                      </div>
                      <nav className="primary-nav">
                        <ul
                          id="menu-main-3"
                          className="menu"
                          style={{ display: "block" }}
                        >
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-3462 current_page_item menu-item-4396 mega-menu mega-menu-links mega-columns-5col ">
                            <a href="https://deepcave.io/">
                              <span>
                                <span className="item_text">Home</span>
                                <span className="menu-item_dots"></span>
                              </span>
                              <i className="menu-item__plus"></i>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5644">
                            <a href="https://deepcave.io/dc-tool/">
                              <span>
                                <span className="item_text">DC Tool</span>
                                <span className="menu-item_dots"></span>
                              </span>
                              <i className="menu-item__plus"></i>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4636">
                            <a href="https://deepcave.io/shop/">
                              <span>
                                <span className="item_text">NFT Shop</span>
                                <span className="menu-item_dots"></span>
                              </span>
                              <i className="menu-item__plus"></i>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4803">
                            <a href="https://deepcave.io/whitepaper/">
                              <span>
                                <span className="item_text">Whitepaper</span>
                                <span className="menu-item_dots"></span>
                              </span>
                              <i className="menu-item__plus"></i>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5415">
                            <a href="#">
                              <span>
                                <span className="item_text">Docs</span>
                                <span className="menu-item_dots"></span>
                              </span>
                              <i className="menu-item__plus"></i>
                              <span className="button_switcher"></span>
                            </a>
                            <ul className="sub-menu wgl-submenu-position-default">
                              {" "}
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4716">
                                <a href="https://deepcave.io/revenue-model/">
                                  <span>
                                    <span className="item_text">
                                      Revenue Model
                                    </span>
                                    <span className="menu-item_dots"></span>
                                  </span>
                                  <i className="menu-item__plus"></i>
                                </a>
                              </li>{" "}
                              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5416">
                                <a href="#">
                                  <span>
                                    <span className="item_text">
                                      Developers
                                    </span>
                                    <span className="menu-item_dots"></span>
                                  </span>
                                  <i className="menu-item__plus"></i>
                                </a>
                              </li>{" "}
                              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5417">
                                <a href="https://deepcave-documentation.gitbook.io">
                                  <span>
                                    <span className="item_text">Gitbook</span>
                                    <span className="menu-item_dots"></span>
                                  </span>
                                  <i className="menu-item__plus"></i>
                                </a>
                              </li>{" "}
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5516">
                                <a href="https://deepcave.io/kyc/">
                                  <span>
                                    <span className="item_text">KYC</span>
                                    <span className="menu-item_dots"></span>
                                  </span>
                                  <i className="menu-item__plus"></i>
                                </a>
                              </li>{" "}
                              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5419">
                                <a href="https://github.com/Coinsult/solidity/blob/main/Coinsult_Deepcave_0xBc...fD5D_Audit.pdf">
                                  <span>
                                    <span className="item_text">Audit</span>
                                    <span className="menu-item_dots"></span>
                                  </span>
                                  <i className="menu-item__plus"></i>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5335">
                            <a href="https://deepcave.io/utility/">
                              <span>
                                <span className="item_text">Utility</span>
                                <span className="menu-item_dots"></span>
                              </span>
                              <i className="menu-item__plus"></i>
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4813">
                            <a href="https://deepcave.io/contacts/">
                              <span>
                                <span className="item_text">Contact</span>
                                <span className="menu-item_dots"></span>
                              </span>
                              <i className="menu-item__plus"></i>
                            </a>
                          </li>
                        </ul>
                      </nav>
                      <div className="header_search search_mobile_menu">
                        <div className="header_search-field">
                          <form
                            role="search"
                            method="get"
                            action="https://deepcave.io/"
                            className="search-form"
                          >
                            <input
                              required={true}
                              type="text"
                              id="search-form-6566af779f0f2"
                              className="search-field"
                              placeholder="Search..."
                              value=""
                              name="s"
                            />
                            <input
                              className="search-button"
                              type="submit"
                              value="Search"
                            />
                            <i className="search__icon flaticon-search"></i>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
          <div
            className="wgl_notices_wrapper stick_home"
            style={{ height: "112px", opacity: "1" }}
          >
            <div className="woocommerce-notices-wrapper closable"></div>
          </div>
        </header>{" "}
        <main id="main" className="site-main" style={{ transform: "none" }}>
          <div className="wgl-container" style={{ transform: "none" }}>
            <div className="row  sidebar_none" style={{ transform: "none" }}>
              <div
                id="main-content"
                className="wgl_col-12"
                style={{ transform: "none" }}
              >
                {" "}
                <div
                  data-elementor-type="wp-page"
                  data-elementor-id="3462"
                  className="elementor elementor-3462"
                  data-elementor-post-type="page"
                  style={{ transform: "none" }}
                >
                  <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-bb1f74d elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="bb1f74d"
                    data-element_type="section"
                    data-settings='{"background_background":"classic"}'
                  >
                    <div className="elementor-container elementor-column-gap-default">
                      <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d65c7cf"
                        data-id="d65c7cf"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-1ccc14a elementor-widget elementor-widget-spacer"
                            data-id="1ccc14a"
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
                            className="elementor-section elementor-inner-section elementor-element elementor-element-36c9670 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="36c9670"
                            data-element_type="section"
                          >
                            <div className="elementor-container elementor-column-gap-default">
                              <div
                                className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-e3e91a9"
                                data-id="e3e91a9"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-f638bb0 aleft elementor-widget elementor-widget-wgl-double-heading"
                                    data-id="f638bb0"
                                    data-element_type="widget"
                                    data-widget_type="wgl-double-heading.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="wgl-double-heading">
                                        <h2 className="dblh__title-wrapper">
                                          <span className="dblh__title dblh__title-1">
                                            Turn Your Words Into{" "}
                                          </span>
                                          <span className="dblh__title dblh__title-2">
                                            Art{" "}
                                          </span>
                                          <span className="dblh__title dblh__title-3">
                                            With DeepCave
                                          </span>
                                        </h2>
                                      </div>{" "}
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-d304bcd elementor-widget elementor-widget-text-editor"
                                    data-id="d304bcd"
                                    data-element_type="widget"
                                    data-widget_type="text-editor.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <p>
                                        Simply describe your vision in words,
                                        and let our Artificial Intelligence
                                        bring it to life
                                      </p>{" "}
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-acdb2e7 aleft elementor-widget elementor-widget-wgl-button"
                                    data-id="acdb2e7"
                                    data-element_type="widget"
                                    data-widget_type="wgl-button.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <CustomConnect
                                        clickComp={
                                          <div
                                            className="wgl-button btn-size-xl "
                                            role="button"
                                          >
                                            <div className="button__content ">
                                              <span className="button__text">
                                                Please wait...
                                              </span>
                                            </div>
                                          </div>
                                        }
                                        normalComp={
                                          <div
                                            className="wgl-button btn-size-xl pulse-button "
                                            role="button"
                                          >
                                            <div className="button__content ">
                                              <span className="button__text">
                                                Claim $DeepCave
                                              </span>
                                            </div>
                                          </div>
                                        }
                                      />{" "}
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-4c6f3a9 elementor-widget elementor-widget-spacer"
                                    data-id="4c6f3a9"
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
                                    className="elementor-element elementor-element-4ff8994 elementor-widget elementor-widget-text-editor"
                                    data-id="4ff8994"
                                    data-element_type="widget"
                                    data-widget_type="text-editor.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <p>
                                        <span style={{ color: "#ffffff" }}>
                                          {" "}
                                          <span
                                            className="ctc-inline-copy "
                                            aria-label="Copied"
                                          >
                                            <span className="ctc-inline-copy-text ">
                                              0x63f3795f332be0b27580EDB6b33613CF4E5a7C30
                                            </span>
                                            <span
                                              className="ctc-inline-copy-icon"
                                              role="button"
                                              aria-label="Copied"
                                            >
                                              <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                role="img"
                                                className="copy-icon"
                                                viewBox="0 0 16 16"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                              >
                                                <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
                                                <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
                                              </svg>{" "}
                                              <svg
                                                aria-hidden="true"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                version="1.1"
                                                width="16"
                                                data-view-component="true"
                                                className="check-icon"
                                                fill="currentColor"
                                              >
                                                <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                                              </svg>{" "}
                                            </span>
                                          </span>
                                        </span>
                                      </p>{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-d565a00"
                                data-id="d565a00"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap"></div>
                              </div>
                            </div>
                          </section>
                          <div
                            className="elementor-element elementor-element-ef1d346 elementor-widget elementor-widget-spacer"
                            data-id="ef1d346"
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
                    className="elementor-section elementor-top-section elementor-element elementor-element-9720c89 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="9720c89"
                    data-element_type="section"
                    style={{ transform: "none" }}
                  >
                    <div
                      className="elementor-container elementor-column-gap-default"
                      style={{ transform: "none" }}
                    >
                      <div
                        className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-15fe468 sticky-sidebar elementor-hidden-tablet elementor-hidden-mobile"
                        data-id="15fe468"
                        data-element_type="column"
                        style={{
                          position: "relative",
                          overflow: "visible",
                          boxSizing: "border-box",
                          minHeight: "1px",
                        }}
                      >
                        <div
                          className="theiaStickySidebar"
                          style={{
                            paddingTop: "0px",
                            paddingBottom: "1px",
                            position: "static",
                            transform: "none",
                          }}
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="elementor-element elementor-element-129e69f menu_yes elementor-hidden-tablet elementor-hidden-mobile animation_fluid elementor-widget elementor-widget-wgl-menu"
                              data-id="129e69f"
                              data-element_type="widget"
                              data-widget_type="wgl-menu.default"
                            >
                              <div className="elementor-widget-container">
                                <nav className="primary-nav">
                                  <ul id="menu-home5-menu" className="menu">
                                    <li
                                      id="menu-item-4330"
                                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4330"
                                    >
                                      <a href="#about-us">
                                        <span>
                                          <span className="item_text">
                                            About Us
                                          </span>
                                          <span className="menu-item_dots"></span>
                                        </span>
                                        <i className="menu-item__plus"></i>
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-4332"
                                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4332"
                                    >
                                      <a href="#offer">
                                        <span>
                                          <span className="item_text">
                                            Revenue Sharing Model
                                          </span>
                                          <span className="menu-item_dots"></span>
                                        </span>
                                        <i className="menu-item__plus"></i>
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-4331"
                                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4331"
                                    >
                                      <a href="#shop">
                                        <span>
                                          <span className="item_text">
                                            Most popular NFTs
                                          </span>
                                          <span className="menu-item_dots"></span>
                                        </span>
                                        <i className="menu-item__plus"></i>
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-4333"
                                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4333"
                                    >
                                      <a href="#team">
                                        <span>
                                          <span className="item_text">
                                            Team
                                          </span>
                                          <span className="menu-item_dots"></span>
                                        </span>
                                        <i className="menu-item__plus"></i>
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-4336"
                                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4336"
                                    >
                                      <a href="#partners">
                                        <span>
                                          <span className="item_text">
                                            Partners
                                          </span>
                                          <span className="menu-item_dots"></span>
                                        </span>
                                        <i className="menu-item__plus"></i>
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-4337"
                                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4337"
                                    >
                                      <a href="#community">
                                        <span>
                                          <span className="item_text">
                                            Community
                                          </span>
                                          <span className="menu-item_dots"></span>
                                        </span>
                                        <i className="menu-item__plus"></i>
                                      </a>
                                    </li>
                                  </ul>{" "}
                                </nav>
                                <div className="mobile-hamburger-toggle">
                                  <div className="hamburger-box">
                                    <div className="hamburger-inner"></div>
                                  </div>
                                </div>{" "}
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-37b71e9 elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-spacer"
                              data-id="37b71e9"
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
                      <div
                        className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-fd2de2f"
                        data-id="fd2de2f"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated e-swiper-container">
                          <section
                            className="elementor-section elementor-inner-section elementor-element elementor-element-ee64a67 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="ee64a67"
                            data-element_type="section"
                          >
                            <div className="elementor-container elementor-column-gap-default">
                              <div
                                className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-062f962"
                                data-id="062f962"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-b14a1db aleft elementor-widget elementor-widget-wgl-info-box"
                                    data-id="b14a1db"
                                    data-element_type="widget"
                                    data-widget_type="wgl-info-box.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="wgl-infobox">
                                        <div className="wgl-infobox_wrapper">
                                          <div className="content_wrapper">
                                            <div className="wgl-infobox-title_wrapper">
                                              <h3 className="wgl-infobox_title">
                                                <span className="wgl-infobox_title-idle">
                                                  Text-to-Image AI{" "}
                                                </span>
                                              </h3>
                                            </div>
                                            <div className="wgl-infobox_content">
                                              <p>
                                                Whether you want GIFs, animated
                                                NFTs, or stickers, DeepCave
                                                creates them for you. Why not
                                                create NFTs for free and sell
                                                them on OpenSea?
                                              </p>
                                            </div>
                                            <div className="wgl-infobox_bg_text_wrapper">
                                              <span className="wgl-infobox_bg_text">
                                                01
                                              </span>
                                            </div>
                                            <div className="wgl-infobox-button_wrapper">
                                              <a className="wgl-infobox_button button-read-more"></a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-6556531"
                                data-id="6556531"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-d0b36ab aleft elementor-widget elementor-widget-wgl-info-box"
                                    data-id="d0b36ab"
                                    data-element_type="widget"
                                    data-widget_type="wgl-info-box.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="wgl-infobox">
                                        <div className="wgl-infobox_wrapper">
                                          <div className="content_wrapper">
                                            <div className="wgl-infobox-title_wrapper">
                                              <h3 className="wgl-infobox_title">
                                                <span className="wgl-infobox_title-idle">
                                                  No Paid Plan, Always Free
                                                </span>
                                              </h3>
                                            </div>
                                            <div className="wgl-infobox_content">
                                              <p>
                                                DeepCave distinguishes itself
                                                from paid services like
                                                Midjourney and Leonardo by
                                                remaining free and accessible to
                                                all.
                                              </p>
                                            </div>
                                            <div className="wgl-infobox_bg_text_wrapper">
                                              <span className="wgl-infobox_bg_text">
                                                02
                                              </span>
                                            </div>
                                            <div className="wgl-infobox-button_wrapper">
                                              <a className="wgl-infobox_button button-read-more"></a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-206bf93"
                                data-id="206bf93"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-3326e95 aleft elementor-widget elementor-widget-wgl-info-box"
                                    data-id="3326e95"
                                    data-element_type="widget"
                                    data-widget_type="wgl-info-box.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="wgl-infobox">
                                        <div className="wgl-infobox_wrapper">
                                          <div className="content_wrapper">
                                            <div className="wgl-infobox-title_wrapper">
                                              <h3 className="wgl-infobox_title">
                                                <span className="wgl-infobox_title-idle">
                                                  Established Advertising
                                                  Partnerships
                                                </span>
                                              </h3>
                                            </div>
                                            <div className="wgl-infobox_content">
                                              <p>
                                                DeepCave has partnered with
                                                major brands to offer innovative
                                                digital marketing for
                                                businesses.
                                              </p>
                                            </div>
                                            <div className="wgl-infobox_bg_text_wrapper">
                                              <span className="wgl-infobox_bg_text">
                                                03
                                              </span>
                                            </div>
                                            <div className="wgl-infobox-button_wrapper">
                                              <a className="wgl-infobox_button button-read-more"></a>
                                            </div>
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
                            className="elementor-element elementor-element-02359b7 elementor-widget elementor-widget-spacer"
                            data-id="02359b7"
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
                            className="elementor-element elementor-element-a89ecfb elementor-widget elementor-widget-spacer"
                            data-id="a89ecfb"
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
                            className="elementor-section elementor-inner-section elementor-element elementor-element-bd4e0d5 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="bd4e0d5"
                            data-element_type="section"
                          >
                            <div className="elementor-container elementor-column-gap-default">
                              <div
                                className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-5a7b892"
                                data-id="5a7b892"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-ef6808d elementor-widget elementor-widget-spacer"
                                    data-id="ef6808d"
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
                                    className="elementor-element elementor-element-cbb263d aleft elementor-widget elementor-widget-wgl-double-heading"
                                    data-id="cbb263d"
                                    data-element_type="widget"
                                    id="about-us"
                                    data-widget_type="wgl-double-heading.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="wgl-double-heading">
                                        <h2 className="dblh__title-wrapper">
                                          <span className="dblh__title dblh__title-1">
                                            Turn Ideas into Art with DeepCave
                                          </span>
                                        </h2>
                                      </div>{" "}
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-eecca66 elementor-widget elementor-widget-text-editor"
                                    data-id="eecca66"
                                    data-element_type="widget"
                                    data-widget_type="text-editor.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <p>
                                        DeepCave is a smart tool for creating
                                        images and NFTs. It’s incredibly
                                        userfriendly, allowing you to produce
                                        stunning images and videos with a single
                                        click.
                                      </p>
                                      <p>
                                        We’re making image and NFT creation
                                        faster and more accessible than ever,
                                        even for those who aren’t tech-savvy.
                                      </p>{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-a5320e8"
                                data-id="a5320e8"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-c7a4d6a elementor-widget elementor-widget-wgl-image-layers"
                                    data-id="c7a4d6a"
                                    data-element_type="widget"
                                    data-widget_type="wgl-image-layers.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="wgl-image-layers img-layer_animate">
                                        <a
                                          className="image_link"
                                          href="https://deepcave.io/shop"
                                        >
                                          <div
                                            className="img-layer_image-wrapper"
                                            style={{ zIndex: "1" }}
                                          >
                                            <div
                                              className="img-layer_item"
                                              style={{
                                                transform: "translate(0px, 0%)",
                                              }}
                                            >
                                              <div
                                                className="img-layer_image"
                                                style={{
                                                  transition: "all 800ms",
                                                  transitionDelay: "600ms",
                                                }}
                                              >
                                                <img
                                                  decoding="async"
                                                  src="https://deepcave.io/wp-content/uploads/2022/06/home5-il-1-1.png"
                                                  alt="home5-il-1-1"
                                                />
                                              </div>
                                            </div>
                                          </div>{" "}
                                          <div
                                            className="img-layer_image-wrapper slide_left"
                                            style={{ zIndex: "1" }}
                                          >
                                            <div
                                              className="img-layer_item"
                                              style={{
                                                transform: "translate(0px, 0%)",
                                              }}
                                            >
                                              <div
                                                className="img-layer_image"
                                                style={{
                                                  transition: "all 800ms",
                                                  transitionDelay: "1200ms",
                                                }}
                                              >
                                                <img
                                                  decoding="async"
                                                  src="https://deepcave.io/wp-content/uploads/2023/11/dreamscape.png"
                                                  alt=""
                                                />
                                              </div>
                                            </div>
                                          </div>{" "}
                                          <div
                                            className="img-layer_image-wrapper slide_left"
                                            style={{ zIndex: "1" }}
                                          >
                                            <div
                                              className="img-layer_item"
                                              style={{
                                                transform: "translate(0px, 0%)",
                                              }}
                                            >
                                              <div
                                                className="img-layer_image"
                                                style={{
                                                  transition: "all 800ms",
                                                  transitionDelay: "1800ms",
                                                }}
                                              >
                                                <img
                                                  decoding="async"
                                                  src="https://deepcave.io/wp-content/uploads/2023/11/rainforest.png"
                                                  alt=""
                                                />
                                              </div>
                                            </div>
                                          </div>{" "}
                                        </a>
                                      </div>{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section
                            className="elementor-section elementor-inner-section elementor-element elementor-element-45a4713 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="45a4713"
                            data-element_type="section"
                          >
                            <div className="elementor-container elementor-column-gap-default">
                              <div
                                className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-d1545fc"
                                data-id="d1545fc"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-ee693ef aleft elementor-widget elementor-widget-wgl-double-heading"
                                    data-id="ee693ef"
                                    data-element_type="widget"
                                    id="shop"
                                    data-widget_type="wgl-double-heading.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="wgl-double-heading">
                                        <div className="dblh__subtitle">
                                          <span>DeepCave NFT&apos;s</span>
                                        </div>
                                        <h2 className="dblh__title-wrapper">
                                          <span className="dblh__title dblh__title-1">
                                            Most Popular NFTs
                                          </span>
                                        </h2>
                                      </div>{" "}
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-7d13176 elementor-grid-3 elementor-grid-tablet-3 elementor-grid-mobile-2 elementor-products-grid elementor-wc-products elementor-widget elementor-widget-woocommerce-products"
                                    data-id="7d13176"
                                    data-element_type="widget"
                                    data-widget_type="woocommerce-products.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="woocommerce columns-3 ">
                                        <div className="wgl-products  anim-slide-left">
                                          <div className="product type-product post-5150 status-publish first instock product_cat-deepcave has-post-thumbnail shipping-taxable product-type-external">
                                            <div className="woo_product_inner_wrapper">
                                              {" "}
                                              <div className="woo_product_image shop_media">
                                                <div className="picture no_effects">
                                                  {" "}
                                                  <a
                                                    className="woo_post-link"
                                                    href="https://deepcave.io/product/deepcave-99017/"
                                                  >
                                                    <img
                                                      decoding="async"
                                                      width="540"
                                                      height="540"
                                                      src="https://deepcave.io/wp-content/uploads/2023/10/IMG_8216-540x540.png"
                                                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                      alt=""
                                                      srcSet="https://deepcave.io/wp-content/uploads/2023/10/IMG_8216-540x540.png 540w, https://deepcave.io/wp-content/uploads/2023/10/IMG_8216-300x300.png 300w, https://deepcave.io/wp-content/uploads/2023/10/IMG_8216-150x150.png 150w, https://deepcave.io/wp-content/uploads/2023/10/IMG_8216-768x768.png 768w, https://deepcave.io/wp-content/uploads/2023/10/IMG_8216-240x240.png 240w, https://deepcave.io/wp-content/uploads/2023/10/IMG_8216.png 800w"
                                                      sizes="(max-width: 540px) 100vw, 540px"
                                                    />
                                                  </a>{" "}
                                                </div>
                                              </div>
                                              <div className="woo_product_content primary">
                                                <div className="woocommerce-loop-product__wrapper title_wrapper">
                                                  <h2 className="woocommerce-loop-product__title">
                                                    <a
                                                      href="https://deepcave.io/product/deepcave-99017/"
                                                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                                                    >
                                                      Mickey Mesh #99017
                                                    </a>
                                                  </h2>
                                                  <div className="woocommerce-loop-product__price"></div>
                                                </div>
                                                <div className="woocommerce-loop-product__cats_wrapper">
                                                  <div className="woocommerce-loop-product__cats">
                                                    <a
                                                      href="https://deepcave.io/product-categorie/deepcave/"
                                                      className="woocommerce-LoopProduct-cat"
                                                    >
                                                      Deepcave
                                                    </a>
                                                  </div>
                                                </div>
                                                <div className="wgl_woo_button_wrapper">
                                                  <a
                                                    href="https://opensea.io/assets/matic/0xa381d58b0f009814e3c59241d43b052cc7612696/15"
                                                    data-quantity="1"
                                                    className="button product_type_external"
                                                    data-product_id="5150"
                                                    data-product_sku=""
                                                    aria-label="Make offer"
                                                    aria-describedby=""
                                                    rel="nofollow"
                                                  >
                                                    Make offer
                                                  </a>
                                                </div>
                                              </div>
                                              <div className="woo_product_content emulate">
                                                <div className="woocommerce-loop-product__wrapper title_wrapper">
                                                  <h2 className="woocommerce-loop-product__title">
                                                    <a
                                                      href="https://deepcave.io/product/deepcave-99017/"
                                                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                                                    >
                                                      Mickey Mesh #99017
                                                    </a>
                                                  </h2>
                                                  <div className="woocommerce-loop-product__price"></div>
                                                </div>
                                                <div className="woocommerce-loop-product__cats_wrapper">
                                                  <div className="woocommerce-loop-product__cats">
                                                    <a
                                                      href="https://deepcave.io/product-categorie/deepcave/"
                                                      className="woocommerce-LoopProduct-cat"
                                                    >
                                                      Deepcave
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="product type-product post-5149 status-publish instock product_cat-deepcave has-post-thumbnail shipping-taxable product-type-external">
                                            <div className="woo_product_inner_wrapper">
                                              {" "}
                                              <div className="woo_product_image shop_media">
                                                <div className="picture no_effects">
                                                  {" "}
                                                  <a
                                                    className="woo_post-link"
                                                    href="https://deepcave.io/product/deepcave-99016/"
                                                  >
                                                    <img
                                                      loading="lazy"
                                                      decoding="async"
                                                      width="540"
                                                      height="540"
                                                      src="https://deepcave.io/wp-content/uploads/2023/10/IMG_8215-540x540.png"
                                                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                      alt=""
                                                      srcSet="https://deepcave.io/wp-content/uploads/2023/10/IMG_8215-540x540.png 540w, https://deepcave.io/wp-content/uploads/2023/10/IMG_8215-300x300.png 300w, https://deepcave.io/wp-content/uploads/2023/10/IMG_8215-150x150.png 150w, https://deepcave.io/wp-content/uploads/2023/10/IMG_8215-768x768.png 768w, https://deepcave.io/wp-content/uploads/2023/10/IMG_8215-240x240.png 240w, https://deepcave.io/wp-content/uploads/2023/10/IMG_8215.png 800w"
                                                      sizes="(max-width: 540px) 100vw, 540px"
                                                    />{" "}
                                                  </a>{" "}
                                                </div>
                                              </div>
                                              <div className="woo_product_content primary">
                                                <div className="woocommerce-loop-product__wrapper title_wrapper">
                                                  <h2 className="woocommerce-loop-product__title">
                                                    <a
                                                      href="https://deepcave.io/product/deepcave-99016/"
                                                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                                                    >
                                                      Mickey Mesh #99016
                                                    </a>
                                                  </h2>
                                                  <div className="woocommerce-loop-product__price"></div>
                                                </div>
                                                <div className="woocommerce-loop-product__cats_wrapper">
                                                  <div className="woocommerce-loop-product__cats">
                                                    <a
                                                      href="https://deepcave.io/product-categorie/deepcave/"
                                                      className="woocommerce-LoopProduct-cat"
                                                    >
                                                      Deepcave
                                                    </a>
                                                  </div>
                                                </div>
                                                <div className="wgl_woo_button_wrapper">
                                                  <a
                                                    href="https://opensea.io/assets/matic/0xa381d58b0f009814e3c59241d43b052cc7612696/14"
                                                    data-quantity="1"
                                                    className="button product_type_external"
                                                    data-product_id="5149"
                                                    data-product_sku=""
                                                    aria-label="Make offer"
                                                    aria-describedby=""
                                                    rel="nofollow"
                                                  >
                                                    Make offer
                                                  </a>
                                                </div>
                                              </div>
                                              <div className="woo_product_content emulate">
                                                <div className="woocommerce-loop-product__wrapper title_wrapper">
                                                  <h2 className="woocommerce-loop-product__title">
                                                    <a
                                                      href="https://deepcave.io/product/deepcave-99016/"
                                                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                                                    >
                                                      Mickey Mesh #99016
                                                    </a>
                                                  </h2>
                                                  <div className="woocommerce-loop-product__price"></div>
                                                </div>
                                                <div className="woocommerce-loop-product__cats_wrapper">
                                                  <div className="woocommerce-loop-product__cats">
                                                    <a
                                                      href="https://deepcave.io/product-categorie/deepcave/"
                                                      className="woocommerce-LoopProduct-cat"
                                                    >
                                                      Deepcave
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="product type-product post-5148 status-publish last instock product_cat-deepcave has-post-thumbnail shipping-taxable product-type-external">
                                            <div className="woo_product_inner_wrapper">
                                              {" "}
                                              <div className="woo_product_image shop_media">
                                                <div className="picture no_effects">
                                                  {" "}
                                                  <a
                                                    className="woo_post-link"
                                                    href="https://deepcave.io/product/deepcave-99015/"
                                                  >
                                                    <img
                                                      loading="lazy"
                                                      decoding="async"
                                                      width="540"
                                                      height="540"
                                                      src="https://deepcave.io/wp-content/uploads/2023/10/IMG_8214-540x540.png"
                                                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                      alt=""
                                                      srcSet="https://deepcave.io/wp-content/uploads/2023/10/IMG_8214-540x540.png 540w, https://deepcave.io/wp-content/uploads/2023/10/IMG_8214-300x300.png 300w, https://deepcave.io/wp-content/uploads/2023/10/IMG_8214-150x150.png 150w, https://deepcave.io/wp-content/uploads/2023/10/IMG_8214-768x768.png 768w, https://deepcave.io/wp-content/uploads/2023/10/IMG_8214-240x240.png 240w, https://deepcave.io/wp-content/uploads/2023/10/IMG_8214.png 800w"
                                                      sizes="(max-width: 540px) 100vw, 540px"
                                                    />{" "}
                                                  </a>{" "}
                                                </div>
                                              </div>
                                              <div className="woo_product_content primary">
                                                <div className="woocommerce-loop-product__wrapper title_wrapper">
                                                  <h2 className="woocommerce-loop-product__title">
                                                    <a
                                                      href="https://deepcave.io/product/deepcave-99015/"
                                                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                                                    >
                                                      Mickey Mesh #99015
                                                    </a>
                                                  </h2>
                                                  <div className="woocommerce-loop-product__price"></div>
                                                </div>
                                                <div className="woocommerce-loop-product__cats_wrapper">
                                                  <div className="woocommerce-loop-product__cats">
                                                    <a
                                                      href="https://deepcave.io/product-categorie/deepcave/"
                                                      className="woocommerce-LoopProduct-cat"
                                                    >
                                                      Deepcave
                                                    </a>
                                                  </div>
                                                </div>
                                                <div className="wgl_woo_button_wrapper">
                                                  <a
                                                    href="https://opensea.io/assets/matic/0xa381d58b0f009814e3c59241d43b052cc7612696/13"
                                                    data-quantity="1"
                                                    className="button product_type_external"
                                                    data-product_id="5148"
                                                    data-product_sku=""
                                                    aria-label="Make offer"
                                                    aria-describedby=""
                                                    rel="nofollow"
                                                  >
                                                    Make offer
                                                  </a>
                                                </div>
                                              </div>
                                              <div className="woo_product_content emulate">
                                                <div className="woocommerce-loop-product__wrapper title_wrapper">
                                                  <h2 className="woocommerce-loop-product__title">
                                                    <a
                                                      href="https://deepcave.io/product/deepcave-99015/"
                                                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                                                    >
                                                      Mickey Mesh #99015
                                                    </a>
                                                  </h2>
                                                  <div className="woocommerce-loop-product__price"></div>
                                                </div>
                                                <div className="woocommerce-loop-product__cats_wrapper">
                                                  <div className="woocommerce-loop-product__cats">
                                                    <a
                                                      href="https://deepcave.io/product-categorie/deepcave/"
                                                      className="woocommerce-LoopProduct-cat"
                                                    >
                                                      Deepcave
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="product type-product post-5147 status-publish first instock product_cat-deepcave has-post-thumbnail shipping-taxable product-type-external">
                                            <div className="woo_product_inner_wrapper">
                                              {" "}
                                              <div className="woo_product_image shop_media">
                                                <div className="picture no_effects">
                                                  {" "}
                                                  <a
                                                    className="woo_post-link"
                                                    href="https://deepcave.io/product/deepcave-99014/"
                                                  >
                                                    <img
                                                      loading="lazy"
                                                      decoding="async"
                                                      width="540"
                                                      height="540"
                                                      src="https://deepcave.io/wp-content/uploads/2023/10/IMG_8213-540x540.png"
                                                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                      alt=""
                                                      srcSet="https://deepcave.io/wp-content/uploads/2023/10/IMG_8213-540x540.png 540w, https://deepcave.io/wp-content/uploads/2023/10/IMG_8213-300x300.png 300w, https://deepcave.io/wp-content/uploads/2023/10/IMG_8213-150x150.png 150w, https://deepcave.io/wp-content/uploads/2023/10/IMG_8213-768x768.png 768w, https://deepcave.io/wp-content/uploads/2023/10/IMG_8213-240x240.png 240w, https://deepcave.io/wp-content/uploads/2023/10/IMG_8213.png 800w"
                                                      sizes="(max-width: 540px) 100vw, 540px"
                                                    />{" "}
                                                  </a>{" "}
                                                </div>
                                              </div>
                                              <div className="woo_product_content primary">
                                                <div className="woocommerce-loop-product__wrapper title_wrapper">
                                                  <h2 className="woocommerce-loop-product__title">
                                                    <a
                                                      href="https://deepcave.io/product/deepcave-99014/"
                                                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                                                    >
                                                      Mickey Mesh #99014
                                                    </a>
                                                  </h2>
                                                  <div className="woocommerce-loop-product__price"></div>
                                                </div>
                                                <div className="woocommerce-loop-product__cats_wrapper">
                                                  <div className="woocommerce-loop-product__cats">
                                                    <a
                                                      href="https://deepcave.io/product-categorie/deepcave/"
                                                      className="woocommerce-LoopProduct-cat"
                                                    >
                                                      Deepcave
                                                    </a>
                                                  </div>
                                                </div>
                                                <div className="wgl_woo_button_wrapper">
                                                  <a
                                                    href="https://opensea.io/assets/matic/0xa381d58b0f009814e3c59241d43b052cc7612696/12"
                                                    data-quantity="1"
                                                    className="button product_type_external"
                                                    data-product_id="5147"
                                                    data-product_sku=""
                                                    aria-label="Make offer"
                                                    aria-describedby=""
                                                    rel="nofollow"
                                                  >
                                                    Make offer
                                                  </a>
                                                </div>
                                              </div>
                                              <div className="woo_product_content emulate">
                                                <div className="woocommerce-loop-product__wrapper title_wrapper">
                                                  <h2 className="woocommerce-loop-product__title">
                                                    <a
                                                      href="https://deepcave.io/product/deepcave-99014/"
                                                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                                                    >
                                                      Mickey Mesh #99014
                                                    </a>
                                                  </h2>
                                                  <div className="woocommerce-loop-product__price"></div>
                                                </div>
                                                <div className="woocommerce-loop-product__cats_wrapper">
                                                  <div className="woocommerce-loop-product__cats">
                                                    <a
                                                      href="https://deepcave.io/product-categorie/deepcave/"
                                                      className="woocommerce-LoopProduct-cat"
                                                    >
                                                      Deepcave
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="product type-product post-5146 status-publish instock product_cat-deepcave has-post-thumbnail shipping-taxable product-type-external">
                                            <div className="woo_product_inner_wrapper">
                                              {" "}
                                              <div className="woo_product_image shop_media">
                                                <div className="picture no_effects">
                                                  {" "}
                                                  <a
                                                    className="woo_post-link"
                                                    href="https://deepcave.io/product/deepcave-99013/"
                                                  >
                                                    <img
                                                      loading="lazy"
                                                      decoding="async"
                                                      width="540"
                                                      height="540"
                                                      src="https://deepcave.io/wp-content/uploads/2023/10/IMG_8212-540x540.png"
                                                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                      alt=""
                                                      srcSet="https://deepcave.io/wp-content/uploads/2023/10/IMG_8212-540x540.png 540w, https://deepcave.io/wp-content/uploads/2023/10/IMG_8212-300x300.png 300w, https://deepcave.io/wp-content/uploads/2023/10/IMG_8212-150x150.png 150w, https://deepcave.io/wp-content/uploads/2023/10/IMG_8212-768x768.png 768w, https://deepcave.io/wp-content/uploads/2023/10/IMG_8212-240x240.png 240w, https://deepcave.io/wp-content/uploads/2023/10/IMG_8212.png 800w"
                                                      sizes="(max-width: 540px) 100vw, 540px"
                                                    />{" "}
                                                  </a>{" "}
                                                </div>
                                              </div>
                                              <div className="woo_product_content primary">
                                                <div className="woocommerce-loop-product__wrapper title_wrapper">
                                                  <h2 className="woocommerce-loop-product__title">
                                                    <a
                                                      href="https://deepcave.io/product/deepcave-99013/"
                                                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                                                    >
                                                      Mickey Mesh #99013
                                                    </a>
                                                  </h2>
                                                  <div className="woocommerce-loop-product__price"></div>
                                                </div>
                                                <div className="woocommerce-loop-product__cats_wrapper">
                                                  <div className="woocommerce-loop-product__cats">
                                                    <a
                                                      href="https://deepcave.io/product-categorie/deepcave/"
                                                      className="woocommerce-LoopProduct-cat"
                                                    >
                                                      Deepcave
                                                    </a>
                                                  </div>
                                                </div>
                                                <div className="wgl_woo_button_wrapper">
                                                  <a
                                                    href="https://opensea.io/assets/matic/0xa381d58b0f009814e3c59241d43b052cc7612696/11"
                                                    data-quantity="1"
                                                    className="button product_type_external"
                                                    data-product_id="5146"
                                                    data-product_sku=""
                                                    aria-label="Make offer"
                                                    aria-describedby=""
                                                    rel="nofollow"
                                                  >
                                                    Make offer
                                                  </a>
                                                </div>
                                              </div>
                                              <div className="woo_product_content emulate">
                                                <div className="woocommerce-loop-product__wrapper title_wrapper">
                                                  <h2 className="woocommerce-loop-product__title">
                                                    <a
                                                      href="https://deepcave.io/product/deepcave-99013/"
                                                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                                                    >
                                                      Mickey Mesh #99013
                                                    </a>
                                                  </h2>
                                                  <div className="woocommerce-loop-product__price"></div>
                                                </div>
                                                <div className="woocommerce-loop-product__cats_wrapper">
                                                  <div className="woocommerce-loop-product__cats">
                                                    <a
                                                      href="https://deepcave.io/product-categorie/deepcave/"
                                                      className="woocommerce-LoopProduct-cat"
                                                    >
                                                      Deepcave
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="product type-product post-5145 status-publish last instock product_cat-deepcave has-post-thumbnail shipping-taxable product-type-external">
                                            <div className="woo_product_inner_wrapper">
                                              {" "}
                                              <div className="woo_product_image shop_media">
                                                <div className="picture no_effects">
                                                  {" "}
                                                  <a
                                                    className="woo_post-link"
                                                    href="https://deepcave.io/product/deepcave-99012/"
                                                  >
                                                    <img
                                                      loading="lazy"
                                                      decoding="async"
                                                      width="540"
                                                      height="540"
                                                      src="https://deepcave.io/wp-content/uploads/2023/10/IMG_8211-540x540.png"
                                                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                      alt=""
                                                      srcSet="https://deepcave.io/wp-content/uploads/2023/10/IMG_8211-540x540.png 540w, https://deepcave.io/wp-content/uploads/2023/10/IMG_8211-300x300.png 300w, https://deepcave.io/wp-content/uploads/2023/10/IMG_8211-150x150.png 150w, https://deepcave.io/wp-content/uploads/2023/10/IMG_8211-768x768.png 768w, https://deepcave.io/wp-content/uploads/2023/10/IMG_8211-240x240.png 240w, https://deepcave.io/wp-content/uploads/2023/10/IMG_8211.png 800w"
                                                      sizes="(max-width: 540px) 100vw, 540px"
                                                    />
                                                  </a>
                                                </div>
                                              </div>
                                              <div className="woo_product_content primary">
                                                <div className="woocommerce-loop-product__wrapper title_wrapper">
                                                  <h2 className="woocommerce-loop-product__title">
                                                    <a
                                                      href="https://deepcave.io/product/deepcave-99012/"
                                                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                                                    >
                                                      Mickey Mesh #99012
                                                    </a>
                                                  </h2>
                                                  <div className="woocommerce-loop-product__price"></div>
                                                </div>
                                                <div className="woocommerce-loop-product__cats_wrapper">
                                                  <div className="woocommerce-loop-product__cats">
                                                    <a
                                                      href="https://deepcave.io/product-categorie/deepcave/"
                                                      className="woocommerce-LoopProduct-cat"
                                                    >
                                                      Deepcave
                                                    </a>
                                                  </div>
                                                </div>
                                                <div className="wgl_woo_button_wrapper">
                                                  <a
                                                    href="https://opensea.io/assets/matic/0xa381d58b0f009814e3c59241d43b052cc7612696/10"
                                                    data-quantity="1"
                                                    className="button product_type_external"
                                                    data-product_id="5145"
                                                    data-product_sku=""
                                                    aria-label="Make offer"
                                                    aria-describedby=""
                                                    rel="nofollow"
                                                  >
                                                    Make offer
                                                  </a>
                                                </div>
                                              </div>
                                              <div className="woo_product_content emulate">
                                                <div className="woocommerce-loop-product__wrapper title_wrapper">
                                                  <h2 className="woocommerce-loop-product__title">
                                                    <a
                                                      href="https://deepcave.io/product/deepcave-99012/"
                                                      className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                                                    >
                                                      Mickey Mesh #99012
                                                    </a>
                                                  </h2>
                                                  <div className="woocommerce-loop-product__price"></div>
                                                </div>
                                                <div className="woocommerce-loop-product__cats_wrapper">
                                                  <div className="woocommerce-loop-product__cats">
                                                    <a
                                                      href="https://deepcave.io/product-categorie/deepcave/"
                                                      className="woocommerce-LoopProduct-cat"
                                                    >
                                                      Deepcave
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>{" "}
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-b75a03b elementor-widget elementor-widget-spacer"
                                    data-id="b75a03b"
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
                                    className="elementor-element elementor-element-a67f053 aleft elementor-widget-icon-box wgl-icon-box elementor-widget elementor-widget-wgl-button"
                                    data-id="a67f053"
                                    data-element_type="widget"
                                    data-widget_type="wgl-button.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <a
                                        className="wgl-button btn-size-lg "
                                        role="button"
                                        href="/shop/"
                                      >
                                        <div className="button__content align-icon-left">
                                          <div className="media-wrapper icon-wrapper"></div>
                                          <span className="button__text">
                                            View More
                                          </span>
                                        </div>
                                      </a>{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <div
                            className="elementor-element elementor-element-38aae0e elementor-widget elementor-widget-spacer"
                            data-id="38aae0e"
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
                            className="elementor-element elementor-element-07d12ca elementor-widget elementor-widget-spacer"
                            data-id="07d12ca"
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
                            className="elementor-section elementor-inner-section elementor-element elementor-element-62bf750 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="62bf750"
                            data-element_type="section"
                          >
                            <div className="elementor-container elementor-column-gap-default">
                              <div
                                className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-82552ac"
                                data-id="82552ac"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-87de8b8 aleft elementor-widget elementor-widget-wgl-double-heading"
                                    data-id="87de8b8"
                                    data-element_type="widget"
                                    id="offer"
                                    data-widget_type="wgl-double-heading.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="wgl-double-heading">
                                        <h2 className="dblh__title-wrapper">
                                          <span className="dblh__title dblh__title-1">
                                            Revenue Sharing Model
                                          </span>
                                        </h2>
                                      </div>{" "}
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-5accbe5 elementor-widget elementor-widget-text-editor"
                                    data-id="5accbe5"
                                    data-element_type="widget"
                                    data-widget_type="text-editor.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <p>
                                        <span
                                          style={{
                                            display: "block",
                                            color: "var(--nico-tertiary-color)",
                                            fontSize: "20px",
                                            marginBottom: "4px",
                                          }}
                                        >
                                          DeepCave is reshaping how investors,
                                          artists, and creators earn money.
                                          Here’s how you can generate income
                                          with DeepCave.
                                        </span>
                                      </p>{" "}
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-6f836c3 aleft elementor-widget elementor-widget-wgl-button"
                                    data-id="6f836c3"
                                    data-element_type="widget"
                                    data-widget_type="wgl-button.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <a
                                        className="wgl-button btn-size-lg "
                                        role="button"
                                        href="/revenue-model/"
                                      >
                                        <div className="button__content ">
                                          <span className="button__text">
                                            Read More
                                          </span>
                                        </div>
                                      </a>{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section
                            className="elementor-section elementor-inner-section elementor-element elementor-element-807a07f elementor-reverse-tablet elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="807a07f"
                            data-element_type="section"
                          >
                            <div className="elementor-container elementor-column-gap-default">
                              <div
                                className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-d772535"
                                data-id="d772535"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-8e5d029 elementor-widget elementor-widget-spacer"
                                    data-id="8e5d029"
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
                            className="elementor-section elementor-inner-section elementor-element elementor-element-2dee445 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="2dee445"
                            data-element_type="section"
                          >
                            <div className="elementor-container elementor-column-gap-default">
                              <div
                                className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-9ef0e67"
                                data-id="9ef0e67"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated e-swiper-container">
                                  <div
                                    className="elementor-element elementor-element-3905565 aleft elementor-widget elementor-widget-wgl-double-heading"
                                    data-id="3905565"
                                    data-element_type="widget"
                                    id="team"
                                    data-widget_type="wgl-double-heading.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="wgl-double-heading">
                                        <div className="dblh__subtitle">
                                          <span>OUR TEAM MEMBERS</span>
                                        </div>
                                        <h2 className="dblh__title-wrapper">
                                          <span className="dblh__title dblh__title-1">
                                            Meet DeepCave
                                          </span>
                                        </h2>
                                      </div>{" "}
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-84898a8 acenter elementor-widget elementor-widget-wgl-team e-widget-swiper"
                                    data-id="84898a8"
                                    data-element_type="widget"
                                    data-widget_type="wgl-team.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <section className="wgl_module_team">
                                        <div className="team__members grid-col--4 carousel">
                                          <div className="wgl-carousel_wrapper navigation-position-nearby">
                                            <div
                                              className="wgl-carousel swiper wgl-carousel_swiper swiper-container swiper-initialized swiper-horizontal swiper-pointer-events"
                                              data-swiper='{"animationDuration":300,"watchOverflow":true,"infinite":true,"variableWidth":false,"autoplay":false,"autoplaySpeed":null,"autoplayPause":true,"autoplayReverse":false,"arrows":true,"dots":false,"adaptiveHeight":false,"responsive":[{"breakpoint":1601,"slidesToShow":"4","slidesToScroll":1},{"breakpoint":1201,"slidesToShow":"4","slidesToScroll":1},{"breakpoint":768,"slidesToShow":"2","slidesToScroll":1},{"breakpoint":280,"slidesToShow":"1","slidesToScroll":1}]}'
                                              data-item-carousel="wgl_carousel_6566af77be41e"
                                            >
                                              <div
                                                className="swiper-wrapper"
                                                id="swiper-wrapper-9f0c104fdd5a7b8b3"
                                                aria-live="off"
                                                style={{
                                                  transform:
                                                    "translate3d(-1301px, 0px, 0px)",
                                                  transitionDuration: "0ms",
                                                }}
                                              >
                                                <article
                                                  className="team__member swiper-slide swiper-slide-duplicate"
                                                  data-swiper-slide-index="7"
                                                  style={{ width: "325.25px" }}
                                                  role="group"
                                                  aria-label="8 / 11"
                                                >
                                                  <div className="member__wrapper">
                                                    <div className="member__media">
                                                      <a
                                                        href="https://deepcave.io/team/liam-mccallister/"
                                                        className="member__thumbnail"
                                                      >
                                                        <img
                                                          decoding="async"
                                                          src="https://deepcave.io/wp-content/uploads/2023/10/IMG_8109-580x540.jpg"
                                                          className="thumbnail__featured"
                                                          alt=""
                                                        />
                                                      </a>
                                                    </div>
                                                    <div className="member__info">
                                                      <h2 className="member__name">
                                                        <a href="https://deepcave.io/team/liam-mccallister/">
                                                          Liam McCallister
                                                        </a>
                                                      </h2>
                                                      <div className="info__wrapper">
                                                        <div className="info__highlighted">
                                                          CFO
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </article>
                                                <article
                                                  className="team__member swiper-slide swiper-slide-duplicate"
                                                  data-swiper-slide-index="8"
                                                  style={{ width: "325.25px" }}
                                                  role="group"
                                                  aria-label="9 / 11"
                                                >
                                                  <div className="member__wrapper">
                                                    <div className="member__media">
                                                      <a
                                                        href="https://deepcave.io/team/camille-dubois/"
                                                        className="member__thumbnail"
                                                      >
                                                        <img
                                                          decoding="async"
                                                          src="https://deepcave.io/wp-content/uploads/2023/10/IMG_8106-580x540.jpg"
                                                          className="thumbnail__featured"
                                                          alt=""
                                                        />
                                                      </a>
                                                    </div>
                                                    <div className="member__info">
                                                      <h2 className="member__name">
                                                        <a href="https://deepcave.io/team/camille-dubois/">
                                                          Camille Dubois
                                                        </a>
                                                      </h2>
                                                      <div className="info__wrapper">
                                                        <div className="info__highlighted">
                                                          Visual Storytelling
                                                          Officer
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </article>
                                                <article
                                                  className="team__member swiper-slide swiper-slide-duplicate"
                                                  data-swiper-slide-index="9"
                                                  style={{ width: "325.25px" }}
                                                  role="group"
                                                  aria-label="10 / 11"
                                                >
                                                  <div className="member__wrapper">
                                                    <div className="member__media">
                                                      <a
                                                        href="https://deepcave.io/team/siobhan-oneill/"
                                                        className="member__thumbnail"
                                                      >
                                                        <img
                                                          decoding="async"
                                                          src="https://deepcave.io/wp-content/uploads/2023/10/IMG_8107-580x540.jpg"
                                                          className="thumbnail__featured"
                                                          alt=""
                                                        />
                                                      </a>
                                                    </div>
                                                    <div className="member__info">
                                                      <h2 className="member__name">
                                                        <a href="https://deepcave.io/team/siobhan-oneill/">
                                                          Siobhan O’Neill
                                                        </a>
                                                      </h2>
                                                      <div className="info__wrapper">
                                                        <div className="info__highlighted">
                                                          Chief Design
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </article>
                                                <article
                                                  className="team__member swiper-slide swiper-slide-duplicate swiper-slide-prev"
                                                  data-swiper-slide-index="10"
                                                  style={{ width: "325.25px" }}
                                                  role="group"
                                                  aria-label="11 / 11"
                                                >
                                                  <div className="member__wrapper">
                                                    <div className="member__media">
                                                      <a
                                                        href="https://deepcave.io/team/elenore-fournier-lacroix/"
                                                        className="member__thumbnail"
                                                      >
                                                        <img
                                                          decoding="async"
                                                          src="https://deepcave.io/wp-content/uploads/2023/10/IMG_8108-580x540.jpg"
                                                          className="thumbnail__featured"
                                                          alt=""
                                                        />
                                                      </a>
                                                    </div>
                                                    <div className="member__info">
                                                      <h2 className="member__name">
                                                        <a href="https://deepcave.io/team/elenore-fournier-lacroix/">
                                                          Elénore
                                                          Fournier-Lacroix
                                                        </a>
                                                      </h2>
                                                      <div className="info__wrapper">
                                                        <div className="info__highlighted">
                                                          Chief VR Animator
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </article>
                                                <article
                                                  className="team__member swiper-slide swiper-slide-active"
                                                  data-swiper-slide-index="0"
                                                  style={{ width: "325.25px" }}
                                                  role="group"
                                                  aria-label="1 / 11"
                                                >
                                                  <div className="member__wrapper">
                                                    <div className="member__media">
                                                      <a
                                                        href="https://deepcave.io/team/gabriel-kalifi/"
                                                        className="member__thumbnail"
                                                      >
                                                        <img
                                                          decoding="async"
                                                          src="https://deepcave.io/wp-content/uploads/2023/10/IMG_8098-580x540.jpg"
                                                          className="thumbnail__featured"
                                                          alt=""
                                                        />
                                                      </a>
                                                    </div>
                                                    <div className="member__info">
                                                      <h2 className="member__name">
                                                        <a href="https://deepcave.io/team/gabriel-kalifi/">
                                                          Gabriel Kalifi
                                                        </a>
                                                      </h2>
                                                      <div className="info__wrapper">
                                                        <div className="info__highlighted">
                                                          CCO &amp; Board
                                                          Advisor
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </article>
                                                <article
                                                  className="team__member swiper-slide swiper-slide-next"
                                                  data-swiper-slide-index="1"
                                                  style={{ width: "325.25px" }}
                                                  role="group"
                                                  aria-label="2 / 11"
                                                >
                                                  <div className="member__wrapper">
                                                    <div className="member__media">
                                                      <a
                                                        href="https://deepcave.io/team/balthazar-saint-pierre/"
                                                        className="member__thumbnail"
                                                      >
                                                        <img
                                                          decoding="async"
                                                          src="https://deepcave.io/wp-content/uploads/2023/10/IMG_8103-580x540.jpg"
                                                          className="thumbnail__featured"
                                                          alt=""
                                                        />
                                                      </a>
                                                    </div>
                                                    <div className="member__info">
                                                      <h2 className="member__name">
                                                        <a href="https://deepcave.io/team/balthazar-saint-pierre/">
                                                          Balthazar Saint-Pierre
                                                        </a>
                                                      </h2>
                                                      <div className="info__wrapper">
                                                        <div className="info__highlighted">
                                                          CEO &amp; Lead
                                                          Blockchain
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </article>
                                                <article
                                                  className="team__member swiper-slide"
                                                  data-swiper-slide-index="2"
                                                  style={{ width: "325.25px" }}
                                                  role="group"
                                                  aria-label="3 / 11"
                                                >
                                                  <div className="member__wrapper">
                                                    <div className="member__media">
                                                      <a
                                                        href="https://deepcave.io/team/niamh-mc-farland/"
                                                        className="member__thumbnail"
                                                      >
                                                        <img
                                                          decoding="async"
                                                          src="https://deepcave.io/wp-content/uploads/2023/10/IMG_8105-580x540.jpg"
                                                          className="thumbnail__featured"
                                                          alt=""
                                                        />
                                                      </a>
                                                    </div>
                                                    <div className="member__info">
                                                      <h2 className="member__name">
                                                        <a href="https://deepcave.io/team/niamh-mc-farland/">
                                                          Niamh Mc Farland
                                                        </a>
                                                      </h2>
                                                      <div className="info__wrapper">
                                                        <div className="info__highlighted">
                                                          CRO
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </article>
                                                <article
                                                  className="team__member swiper-slide"
                                                  data-swiper-slide-index="3"
                                                  style={{ width: "325.25px" }}
                                                  role="group"
                                                  aria-label="4 / 11"
                                                >
                                                  <div className="member__wrapper">
                                                    <div className="member__media">
                                                      <a
                                                        href="https://deepcave.io/team/niels-de-ruiter/"
                                                        className="member__thumbnail"
                                                      >
                                                        <img
                                                          decoding="async"
                                                          src="https://deepcave.io/wp-content/uploads/2023/10/IMG_8104-580x540.jpg"
                                                          className="thumbnail__featured"
                                                          alt=""
                                                        />
                                                      </a>
                                                    </div>
                                                    <div className="member__info">
                                                      <h2 className="member__name">
                                                        <a href="https://deepcave.io/team/niels-de-ruiter/">
                                                          Niels de Ruiter
                                                        </a>
                                                      </h2>
                                                      <div className="info__wrapper">
                                                        <div className="info__highlighted">
                                                          CMO
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </article>
                                                <article
                                                  className="team__member swiper-slide"
                                                  data-swiper-slide-index="4"
                                                  style={{ width: "325.25px" }}
                                                  role="group"
                                                  aria-label="5 / 11"
                                                >
                                                  <div className="member__wrapper">
                                                    <div className="member__media">
                                                      <a
                                                        href="https://deepcave.io/team/francois-xavier-leclair/"
                                                        className="member__thumbnail"
                                                      >
                                                        <img
                                                          decoding="async"
                                                          src="https://deepcave.io/wp-content/uploads/2023/10/IMG_8102-580x540.jpg"
                                                          className="thumbnail__featured"
                                                          alt=""
                                                        />
                                                      </a>
                                                    </div>
                                                    <div className="member__info">
                                                      <h2 className="member__name">
                                                        <a href="https://deepcave.io/team/francois-xavier-leclair/">
                                                          François-Xavier
                                                          Leclair
                                                        </a>
                                                      </h2>
                                                      <div className="info__wrapper">
                                                        <div className="info__highlighted">
                                                          COO
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </article>
                                                <article
                                                  className="team__member swiper-slide"
                                                  data-swiper-slide-index="5"
                                                  style={{ width: "325.25px" }}
                                                  role="group"
                                                  aria-label="6 / 11"
                                                >
                                                  <div className="member__wrapper">
                                                    <div className="member__media">
                                                      <a
                                                        href="https://deepcave.io/team/raphael-duvalier/"
                                                        className="member__thumbnail"
                                                      >
                                                        <img
                                                          decoding="async"
                                                          src="https://deepcave.io/wp-content/uploads/2023/10/IMG_8101-580x540.jpg"
                                                          className="thumbnail__featured"
                                                          alt=""
                                                        />
                                                      </a>
                                                    </div>
                                                    <div className="member__info">
                                                      <h2 className="member__name">
                                                        <a href="https://deepcave.io/team/raphael-duvalier/">
                                                          Raphaël Duvalier
                                                        </a>
                                                      </h2>
                                                      <div className="info__wrapper">
                                                        <div className="info__highlighted">
                                                          CTO &amp; Senior
                                                          Developer
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </article>
                                                <article
                                                  className="team__member swiper-slide"
                                                  data-swiper-slide-index="6"
                                                  style={{ width: "325.25px" }}
                                                  role="group"
                                                  aria-label="7 / 11"
                                                >
                                                  <div className="member__wrapper">
                                                    <div className="member__media">
                                                      <a
                                                        href="https://deepcave.io/team/aiden-omally/"
                                                        className="member__thumbnail"
                                                      >
                                                        <img
                                                          decoding="async"
                                                          src="https://deepcave.io/wp-content/uploads/2023/10/IMG_8100-580x540.jpg"
                                                          className="thumbnail__featured"
                                                          alt=""
                                                        />
                                                      </a>
                                                    </div>
                                                    <div className="member__info">
                                                      <h2 className="member__name">
                                                        <a href="https://deepcave.io/team/aiden-omally/">
                                                          Aiden O’Mally
                                                        </a>
                                                      </h2>
                                                      <div className="info__wrapper">
                                                        <div className="info__highlighted">
                                                          CSO
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </article>
                                                <article
                                                  className="team__member swiper-slide"
                                                  data-swiper-slide-index="7"
                                                  style={{ width: "325.25px" }}
                                                  role="group"
                                                  aria-label="8 / 11"
                                                >
                                                  <div className="member__wrapper">
                                                    <div className="member__media">
                                                      <a
                                                        href="https://deepcave.io/team/liam-mccallister/"
                                                        className="member__thumbnail"
                                                      >
                                                        <img
                                                          decoding="async"
                                                          src="https://deepcave.io/wp-content/uploads/2023/10/IMG_8109-580x540.jpg"
                                                          className="thumbnail__featured"
                                                          alt=""
                                                        />
                                                      </a>
                                                    </div>
                                                    <div className="member__info">
                                                      <h2 className="member__name">
                                                        <a href="https://deepcave.io/team/liam-mccallister/">
                                                          Liam McCallister
                                                        </a>
                                                      </h2>
                                                      <div className="info__wrapper">
                                                        <div className="info__highlighted">
                                                          CFO
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </article>
                                                <article
                                                  className="team__member swiper-slide"
                                                  data-swiper-slide-index="8"
                                                  style={{ width: "325.25px" }}
                                                  role="group"
                                                  aria-label="9 / 11"
                                                >
                                                  <div className="member__wrapper">
                                                    <div className="member__media">
                                                      <a
                                                        href="https://deepcave.io/team/camille-dubois/"
                                                        className="member__thumbnail"
                                                      >
                                                        <img
                                                          decoding="async"
                                                          src="https://deepcave.io/wp-content/uploads/2023/10/IMG_8106-580x540.jpg"
                                                          className="thumbnail__featured"
                                                          alt=""
                                                        />
                                                      </a>
                                                    </div>
                                                    <div className="member__info">
                                                      <h2 className="member__name">
                                                        <a href="https://deepcave.io/team/camille-dubois/">
                                                          Camille Dubois
                                                        </a>
                                                      </h2>
                                                      <div className="info__wrapper">
                                                        <div className="info__highlighted">
                                                          Visual Storytelling
                                                          Officer
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </article>
                                                <article
                                                  className="team__member swiper-slide"
                                                  data-swiper-slide-index="9"
                                                  style={{ width: "325.25px" }}
                                                  role="group"
                                                  aria-label="10 / 11"
                                                >
                                                  <div className="member__wrapper">
                                                    <div className="member__media">
                                                      <a
                                                        href="https://deepcave.io/team/siobhan-oneill/"
                                                        className="member__thumbnail"
                                                      >
                                                        <img
                                                          decoding="async"
                                                          src="https://deepcave.io/wp-content/uploads/2023/10/IMG_8107-580x540.jpg"
                                                          className="thumbnail__featured"
                                                          alt=""
                                                        />
                                                      </a>
                                                    </div>
                                                    <div className="member__info">
                                                      <h2 className="member__name">
                                                        <a href="https://deepcave.io/team/siobhan-oneill/">
                                                          Siobhan O’Neill
                                                        </a>
                                                      </h2>
                                                      <div className="info__wrapper">
                                                        <div className="info__highlighted">
                                                          Chief Design
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </article>
                                                <article
                                                  className="team__member swiper-slide swiper-slide-duplicate-prev"
                                                  data-swiper-slide-index="10"
                                                  style={{ width: "325.25px" }}
                                                  role="group"
                                                  aria-label="11 / 11"
                                                >
                                                  <div className="member__wrapper">
                                                    <div className="member__media">
                                                      <a
                                                        href="https://deepcave.io/team/elenore-fournier-lacroix/"
                                                        className="member__thumbnail"
                                                      >
                                                        <img
                                                          decoding="async"
                                                          src="https://deepcave.io/wp-content/uploads/2023/10/IMG_8108-580x540.jpg"
                                                          className="thumbnail__featured"
                                                          alt=""
                                                        />
                                                      </a>
                                                    </div>
                                                    <div className="member__info">
                                                      <h2 className="member__name">
                                                        <a href="https://deepcave.io/team/elenore-fournier-lacroix/">
                                                          Elénore
                                                          Fournier-Lacroix
                                                        </a>
                                                      </h2>
                                                      <div className="info__wrapper">
                                                        <div className="info__highlighted">
                                                          Chief VR Animator
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </article>
                                                <article
                                                  className="team__member swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                                                  data-swiper-slide-index="0"
                                                  style={{ width: "325.25px" }}
                                                  role="group"
                                                  aria-label="1 / 11"
                                                >
                                                  <div className="member__wrapper">
                                                    <div className="member__media">
                                                      <a
                                                        href="https://deepcave.io/team/gabriel-kalifi/"
                                                        className="member__thumbnail"
                                                      >
                                                        <img
                                                          decoding="async"
                                                          src="https://deepcave.io/wp-content/uploads/2023/10/IMG_8098-580x540.jpg"
                                                          className="thumbnail__featured"
                                                          alt=""
                                                        />
                                                      </a>
                                                    </div>
                                                    <div className="member__info">
                                                      <h2 className="member__name">
                                                        <a href="https://deepcave.io/team/gabriel-kalifi/">
                                                          Gabriel Kalifi
                                                        </a>
                                                      </h2>
                                                      <div className="info__wrapper">
                                                        <div className="info__highlighted">
                                                          CCO &amp; Board
                                                          Advisor
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </article>
                                                <article
                                                  className="team__member swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                                                  data-swiper-slide-index="1"
                                                  style={{ width: "325.25px" }}
                                                  role="group"
                                                  aria-label="2 / 11"
                                                >
                                                  <div className="member__wrapper">
                                                    <div className="member__media">
                                                      <a
                                                        href="https://deepcave.io/team/balthazar-saint-pierre/"
                                                        className="member__thumbnail"
                                                      >
                                                        <img
                                                          decoding="async"
                                                          src="https://deepcave.io/wp-content/uploads/2023/10/IMG_8103-580x540.jpg"
                                                          className="thumbnail__featured"
                                                          alt=""
                                                        />
                                                      </a>
                                                    </div>
                                                    <div className="member__info">
                                                      <h2 className="member__name">
                                                        <a href="https://deepcave.io/team/balthazar-saint-pierre/">
                                                          Balthazar Saint-Pierre
                                                        </a>
                                                      </h2>
                                                      <div className="info__wrapper">
                                                        <div className="info__highlighted">
                                                          CEO &amp; Lead
                                                          Blockchain
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </article>
                                                <article
                                                  className="team__member swiper-slide swiper-slide-duplicate"
                                                  data-swiper-slide-index="2"
                                                  style={{ width: "325.25px" }}
                                                  role="group"
                                                  aria-label="3 / 11"
                                                >
                                                  <div className="member__wrapper">
                                                    <div className="member__media">
                                                      <a
                                                        href="https://deepcave.io/team/niamh-mc-farland/"
                                                        className="member__thumbnail"
                                                      >
                                                        <img
                                                          decoding="async"
                                                          src="https://deepcave.io/wp-content/uploads/2023/10/IMG_8105-580x540.jpg"
                                                          className="thumbnail__featured"
                                                          alt=""
                                                        />
                                                      </a>
                                                    </div>
                                                    <div className="member__info">
                                                      <h2 className="member__name">
                                                        <a href="https://deepcave.io/team/niamh-mc-farland/">
                                                          Niamh Mc Farland
                                                        </a>
                                                      </h2>
                                                      <div className="info__wrapper">
                                                        <div className="info__highlighted">
                                                          CRO
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </article>
                                                <article
                                                  className="team__member swiper-slide swiper-slide-duplicate"
                                                  data-swiper-slide-index="3"
                                                  role="group"
                                                  aria-label="4 / 11"
                                                  style={{ width: "325.25px" }}
                                                >
                                                  <div className="member__wrapper">
                                                    <div className="member__media">
                                                      <a
                                                        href="https://deepcave.io/team/niels-de-ruiter/"
                                                        className="member__thumbnail"
                                                      >
                                                        <img
                                                          decoding="async"
                                                          src="https://deepcave.io/wp-content/uploads/2023/10/IMG_8104-580x540.jpg"
                                                          className="thumbnail__featured"
                                                          alt=""
                                                        />
                                                      </a>
                                                    </div>
                                                    <div className="member__info">
                                                      <h2 className="member__name">
                                                        <a href="https://deepcave.io/team/niels-de-ruiter/">
                                                          Niels de Ruiter
                                                        </a>
                                                      </h2>
                                                      <div className="info__wrapper">
                                                        <div className="info__highlighted">
                                                          CMO
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </article>
                                              </div>
                                              <span
                                                className="swiper-notification"
                                                aria-live="assertive"
                                                aria-atomic="true"
                                              ></span>
                                            </div>
                                            <div className="wgl-navigation_wrapper">
                                              <button
                                                className="elementor-swiper-button elementor-swiper-button-prev"
                                                data-carousel="wgl_carousel_6566af77be41e"
                                                tabIndex={0}
                                                aria-label="Previous slide"
                                                aria-controls="swiper-wrapper-9f0c104fdd5a7b8b3"
                                              >
                                                <i className="flaticon flaticon-left-arrow"></i>
                                              </button>
                                              <button
                                                className="elementor-swiper-button elementor-swiper-button-next"
                                                data-carousel="wgl_carousel_6566af77be41e"
                                                tabIndex={0}
                                                aria-label="Next slide"
                                                aria-controls="swiper-wrapper-9f0c104fdd5a7b8b3"
                                              >
                                                <i className="flaticon flaticon-left-arrow"></i>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </section>{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <div
                            className="elementor-element elementor-element-2f5231f elementor-widget elementor-widget-spacer"
                            data-id="2f5231f"
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
                            className="elementor-element elementor-element-5289fd7 elementor-widget elementor-widget-wgl-clients e-widget-swiper"
                            data-id="5289fd7"
                            data-element_type="widget"
                            id="partners"
                            data-widget_type="wgl-clients.default"
                          >
                            <div className="elementor-widget-container">
                              <div
                                className="wgl-clients clearfix anim-ex_images items-5"
                                data-carousel="yes"
                              >
                                <div className="wgl-carousel_wrapper">
                                  <div
                                    className="wgl-carousel swiper wgl-carousel_swiper swiper-container swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"
                                    data-swiper='{"animationDuration":300,"watchOverflow":true,"infinite":false,"variableWidth":false,"autoplay":false,"autoplaySpeed":null,"autoplayPause":true,"autoplayReverse":false,"arrows":false,"dots":false,"adaptiveHeight":false,"responsive":[{"breakpoint":1601,"slidesToShow":"5","slidesToScroll":"5"},{"breakpoint":1201,"slidesToShow":"6","slidesToScroll":"6"},{"breakpoint":768,"slidesToShow":"4","slidesToScroll":"4"},{"breakpoint":280,"slidesToShow":"2","slidesToScroll":"2"}]}'
                                    data-item-carousel="wgl_carousel_6566af77c0882"
                                  >
                                    <div
                                      className="swiper-wrapper"
                                      id="swiper-wrapper-c7adb7645d587ccc"
                                      aria-live="off"
                                      style={{
                                        transform: "translate3d(0px, 0px, 0px)",
                                      }}
                                    >
                                      <div
                                        className="clients_image elementor-repeater-item-22034c1 swiper-slide swiper-slide-active"
                                        style={{ width: "190.5px" }}
                                        role="group"
                                        aria-label="1 / 7"
                                      >
                                        <a
                                          className="image_link image_wrapper"
                                          href="https://www.dexview.com/eth/0x63f3795f332be0b27580EDB6b33613CF4E5a7C30"
                                        >
                                          <img
                                            decoding="async"
                                            className="hover_image"
                                            alt="Laag 2"
                                            src="https://deepcave.io/wp-content/uploads/2023/11/Laag-2-1.png"
                                          />
                                          <img
                                            decoding="async"
                                            className="main_image"
                                            alt="Laag 2 kopie"
                                            src="https://deepcave.io/wp-content/uploads/2023/11/Laag-2-kopie.png"
                                          />
                                        </a>
                                      </div>
                                      <div
                                        className="clients_image elementor-repeater-item-a096703 swiper-slide swiper-slide-next"
                                        style={{ width: "190.5px" }}
                                        role="group"
                                        aria-label="2 / 7"
                                      >
                                        <a
                                          className="image_link image_wrapper"
                                          href="https://www.pinksale.finance/launchpad/0x4b010864E55DF415d6f3d8F7f47a3E35143c8C78?chain=ETH"
                                        >
                                          <img
                                            decoding="async"
                                            className="hover_image"
                                            alt="Laag 3 kopie"
                                            src="https://deepcave.io/wp-content/uploads/2023/11/Laag-3-kopie.png"
                                          />
                                          <img
                                            decoding="async"
                                            className="main_image"
                                            alt="Laag 3 kopie 3"
                                            src="https://deepcave.io/wp-content/uploads/2023/11/Laag-3-kopie-3.png"
                                          />
                                        </a>
                                      </div>
                                      <div
                                        className="clients_image elementor-repeater-item-755e332 swiper-slide"
                                        style={{ width: "190.5px" }}
                                        role="group"
                                        aria-label="3 / 7"
                                      >
                                        <div className="image_wrapper">
                                          <img
                                            decoding="async"
                                            className="hover_image"
                                            alt="l1-2"
                                            src="https://deepcave.io/wp-content/uploads/2023/10/l1-2-2.png"
                                          />
                                          <img
                                            decoding="async"
                                            className="main_image"
                                            alt="l1-2"
                                            src="https://deepcave.io/wp-content/uploads/2023/10/l1-2.png"
                                          />
                                        </div>
                                      </div>
                                      <div
                                        className="clients_image elementor-repeater-item-49f8a9e swiper-slide"
                                        style={{ width: "190.5px" }}
                                        role="group"
                                        aria-label="4 / 7"
                                      >
                                        <div className="image_wrapper">
                                          <img
                                            decoding="async"
                                            className="hover_image"
                                            alt="l1"
                                            src="https://deepcave.io/wp-content/uploads/2023/10/l1-9.png"
                                          />
                                          <img
                                            decoding="async"
                                            className="main_image"
                                            alt="l1"
                                            src="https://deepcave.io/wp-content/uploads/2023/10/l1.png"
                                          />
                                        </div>
                                      </div>
                                      <div
                                        className="clients_image elementor-repeater-item-ec6811a swiper-slide"
                                        style={{ width: "190.5px" }}
                                        role="group"
                                        aria-label="5 / 7"
                                      >
                                        <div className="image_wrapper">
                                          <img
                                            decoding="async"
                                            className="hover_image"
                                            alt="1_dUnZZzFB-_csrzhehx82iQ@2x"
                                            src="https://deepcave.io/wp-content/uploads/2023/10/1_dUnZZzFB-_csrzhehx82iQ@2x-1.png"
                                          />
                                          <img
                                            decoding="async"
                                            className="main_image"
                                            alt="1_dUnZZzFB-_csrzhehx82iQ@2x"
                                            src="https://deepcave.io/wp-content/uploads/2023/10/1_dUnZZzFB-_csrzhehx82iQ@2x.png"
                                          />
                                        </div>
                                      </div>
                                      <div
                                        className="clients_image elementor-repeater-item-55acae9 swiper-slide"
                                        style={{ width: "190.5px" }}
                                        role="group"
                                        aria-label="6 / 7"
                                      >
                                        <div className="image_wrapper">
                                          <img
                                            decoding="async"
                                            className="hover_image"
                                            alt="clients_5-4"
                                            src="https://deepcave.io/wp-content/uploads/2022/04/clients_5-4.png"
                                          />
                                          <img
                                            decoding="async"
                                            className="main_image"
                                            alt="clients_5-3"
                                            src="https://deepcave.io/wp-content/uploads/2022/04/clients_5-3.png"
                                          />
                                        </div>
                                      </div>
                                      <div
                                        className="clients_image elementor-repeater-item-6dc7763 swiper-slide"
                                        role="group"
                                        aria-label="7 / 7"
                                        style={{ width: "190.5px" }}
                                      >
                                        <div className="image_wrapper">
                                          <img
                                            decoding="async"
                                            className="hover_image"
                                            alt="clients_6-4"
                                            src="https://deepcave.io/wp-content/uploads/2022/04/clients_6-4.png"
                                          />
                                          <img
                                            decoding="async"
                                            className="main_image"
                                            alt="clients_6-3"
                                            src="https://deepcave.io/wp-content/uploads/2022/04/clients_6-3.png"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <span
                                      className="swiper-notification"
                                      aria-live="assertive"
                                      aria-atomic="true"
                                    ></span>
                                  </div>
                                </div>
                              </div>{" "}
                            </div>
                          </div>
                          <div
                            className="elementor-element elementor-element-4b6e464 elementor-widget elementor-widget-wgl-clients e-widget-swiper"
                            data-id="4b6e464"
                            data-element_type="widget"
                            data-widget_type="wgl-clients.default"
                          >
                            <div className="elementor-widget-container">
                              <div
                                className="wgl-clients clearfix anim-ex_images items-5"
                                data-carousel="yes"
                              >
                                <div className="wgl-carousel_wrapper">
                                  <div
                                    className="wgl-carousel swiper wgl-carousel_swiper swiper-container swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"
                                    data-swiper='{"animationDuration":300,"watchOverflow":true,"infinite":false,"variableWidth":false,"autoplay":false,"autoplaySpeed":null,"autoplayPause":true,"autoplayReverse":false,"arrows":false,"dots":false,"adaptiveHeight":false,"responsive":[{"breakpoint":1601,"slidesToShow":"5","slidesToScroll":"5"},{"breakpoint":1201,"slidesToShow":"6","slidesToScroll":"6"},{"breakpoint":768,"slidesToShow":"4","slidesToScroll":"4"},{"breakpoint":280,"slidesToShow":"2","slidesToScroll":"2"}]}'
                                    data-item-carousel="wgl_carousel_6566af77c193a"
                                  >
                                    <div
                                      className="swiper-wrapper"
                                      id="swiper-wrapper-7fe932f3f3d66de5"
                                      aria-live="off"
                                      style={{
                                        transform: "translate3d(0px, 0px, 0px)",
                                      }}
                                    >
                                      <div
                                        className="clients_image elementor-repeater-item-22034c1 swiper-slide swiper-slide-active"
                                        style={{ width: "190.5px" }}
                                        role="group"
                                        aria-label="1 / 5"
                                      >
                                        <div className="image_wrapper">
                                          <img
                                            decoding="async"
                                            className="hover_image"
                                            alt="l1-1"
                                            src="https://deepcave.io/wp-content/uploads/2023/10/l1-1-2.png"
                                          />
                                          <img
                                            decoding="async"
                                            className="main_image"
                                            alt="l1-1"
                                            src="https://deepcave.io/wp-content/uploads/2023/10/l1-1.png"
                                          />
                                        </div>
                                      </div>
                                      <div
                                        className="clients_image elementor-repeater-item-49f8a9e swiper-slide swiper-slide-next"
                                        style={{ width: "190.5px" }}
                                        role="group"
                                        aria-label="2 / 5"
                                      >
                                        <div className="image_wrapper">
                                          <img
                                            decoding="async"
                                            className="hover_image"
                                            alt="l1-1 (1)"
                                            src="https://deepcave.io/wp-content/uploads/2023/10/l1-1-1-2.png"
                                          />
                                          <img
                                            decoding="async"
                                            className="main_image"
                                            alt="l1-1 (1)"
                                            src="https://deepcave.io/wp-content/uploads/2023/10/l1-1-1.png"
                                          />
                                        </div>
                                      </div>
                                      <div
                                        className="clients_image elementor-repeater-item-ec6811a swiper-slide"
                                        style={{ width: "190.5px" }}
                                        role="group"
                                        aria-label="3 / 5"
                                      >
                                        <div className="image_wrapper">
                                          <img
                                            decoding="async"
                                            className="hover_image"
                                            alt="l1-3 (1)"
                                            src="https://deepcave.io/wp-content/uploads/2023/10/l1-3-1-2.png"
                                          />
                                          <img
                                            decoding="async"
                                            className="main_image"
                                            alt="l1-3 (1)"
                                            src="https://deepcave.io/wp-content/uploads/2023/10/l1-3-1.png"
                                          />
                                        </div>
                                      </div>
                                      <div
                                        className="clients_image elementor-repeater-item-55acae9 swiper-slide"
                                        style={{ width: "190.5px" }}
                                        role="group"
                                        aria-label="4 / 5"
                                      >
                                        <div className="image_wrapper">
                                          <img
                                            decoding="async"
                                            className="hover_image"
                                            alt="l1-4"
                                            src="https://deepcave.io/wp-content/uploads/2023/10/l1-4-2.png"
                                          />
                                          <img
                                            decoding="async"
                                            className="main_image"
                                            alt="l1-4"
                                            src="https://deepcave.io/wp-content/uploads/2023/10/l1-4.png"
                                          />
                                        </div>
                                      </div>
                                      <div
                                        className="clients_image elementor-repeater-item-6dc7763 swiper-slide"
                                        role="group"
                                        aria-label="5 / 5"
                                        style={{ width: "190.5px" }}
                                      >
                                        <div className="image_wrapper">
                                          <img
                                            decoding="async"
                                            className="hover_image"
                                            alt="l1-5-1"
                                            src="https://deepcave.io/wp-content/uploads/2023/10/l1-5-1-1.png"
                                          />
                                          <img
                                            decoding="async"
                                            className="main_image"
                                            alt="l1-5-1"
                                            src="https://deepcave.io/wp-content/uploads/2023/10/l1-5-1.png"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <span
                                      className="swiper-notification"
                                      aria-live="assertive"
                                      aria-atomic="true"
                                    ></span>
                                  </div>
                                </div>
                              </div>{" "}
                            </div>
                          </div>
                          <div
                            className="elementor-element elementor-element-9f0552a elementor-widget elementor-widget-wgl-clients e-widget-swiper"
                            data-id="9f0552a"
                            data-element_type="widget"
                            data-widget_type="wgl-clients.default"
                          >
                            <div className="elementor-widget-container">
                              <div
                                className="wgl-clients clearfix anim-ex_images items-5"
                                data-carousel="yes"
                              >
                                <div className="wgl-carousel_wrapper">
                                  <div
                                    className="wgl-carousel swiper wgl-carousel_swiper swiper-container swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"
                                    data-swiper='{"animationDuration":300,"watchOverflow":true,"infinite":false,"variableWidth":false,"autoplay":false,"autoplaySpeed":null,"autoplayPause":true,"autoplayReverse":false,"arrows":false,"dots":false,"adaptiveHeight":false,"responsive":[{"breakpoint":1601,"slidesToShow":"5","slidesToScroll":"5"},{"breakpoint":1201,"slidesToShow":"6","slidesToScroll":"6"},{"breakpoint":768,"slidesToShow":"4","slidesToScroll":"4"},{"breakpoint":280,"slidesToShow":"2","slidesToScroll":"2"}]}'
                                    data-item-carousel="wgl_carousel_6566af77c2bcc"
                                  >
                                    <div
                                      className="swiper-wrapper"
                                      id="swiper-wrapper-bd14482c6d288b28"
                                      aria-live="off"
                                      style={{
                                        transform: "translate3d(0px, 0px, 0px)",
                                      }}
                                    >
                                      <div
                                        className="clients_image elementor-repeater-item-22034c1 swiper-slide swiper-slide-active"
                                        style={{ width: "190.5px" }}
                                        role="group"
                                        aria-label="1 / 6"
                                      >
                                        <div className="image_wrapper">
                                          <img
                                            decoding="async"
                                            className="hover_image"
                                            alt="l1-6"
                                            src="https://deepcave.io/wp-content/uploads/2023/10/l1-6-1.png"
                                          />
                                          <img
                                            decoding="async"
                                            className="main_image"
                                            alt="l1-6"
                                            src="https://deepcave.io/wp-content/uploads/2023/10/l1-6.png"
                                          />
                                        </div>
                                      </div>
                                      <div
                                        className="clients_image elementor-repeater-item-755e332 swiper-slide swiper-slide-next"
                                        style={{ width: "190.5px" }}
                                        role="group"
                                        aria-label="2 / 6"
                                      >
                                        <div className="image_wrapper">
                                          <img
                                            decoding="async"
                                            className="hover_image"
                                            alt="l1-5"
                                            src="https://deepcave.io/wp-content/uploads/2023/10/l1-5-2.png"
                                          />
                                          <img
                                            decoding="async"
                                            className="main_image"
                                            alt="l1-5"
                                            src="https://deepcave.io/wp-content/uploads/2023/10/l1-5.png"
                                          />
                                        </div>
                                      </div>
                                      <div
                                        className="clients_image elementor-repeater-item-49f8a9e swiper-slide"
                                        style={{ width: "190.5px" }}
                                        role="group"
                                        aria-label="3 / 6"
                                      >
                                        <div className="image_wrapper">
                                          <img
                                            decoding="async"
                                            className="hover_image"
                                            alt="clients_3-4"
                                            src="https://deepcave.io/wp-content/uploads/2022/04/clients_3-4.png"
                                          />
                                          <img
                                            decoding="async"
                                            className="main_image"
                                            alt="clients_3-3"
                                            src="https://deepcave.io/wp-content/uploads/2022/04/clients_3-3.png"
                                          />
                                        </div>
                                      </div>
                                      <div
                                        className="clients_image elementor-repeater-item-ec6811a swiper-slide"
                                        style={{ width: "190.5px" }}
                                        role="group"
                                        aria-label="4 / 6"
                                      >
                                        <div className="image_wrapper">
                                          <img
                                            decoding="async"
                                            className="hover_image"
                                            alt="Mina (MINA)"
                                            src="https://deepcave.io/wp-content/uploads/2023/10/Mina-MINA-1.png"
                                          />
                                          <img
                                            decoding="async"
                                            className="main_image"
                                            alt="Mina (MINA)"
                                            src="https://deepcave.io/wp-content/uploads/2023/10/Mina-MINA.png"
                                          />
                                        </div>
                                      </div>
                                      <div
                                        className="clients_image elementor-repeater-item-55acae9 swiper-slide"
                                        style={{ width: "190.5px" }}
                                        role="group"
                                        aria-label="5 / 6"
                                      >
                                        <div className="image_wrapper">
                                          <img
                                            decoding="async"
                                            className="hover_image"
                                            alt="clients_4-4"
                                            src="https://deepcave.io/wp-content/uploads/2022/04/clients_4-4.png"
                                          />
                                          <img
                                            decoding="async"
                                            className="main_image"
                                            alt="clients_4-3"
                                            src="https://deepcave.io/wp-content/uploads/2022/04/clients_4-3.png"
                                          />
                                        </div>
                                      </div>
                                      <div
                                        className="clients_image elementor-repeater-item-6dc7763 swiper-slide"
                                        role="group"
                                        aria-label="6 / 6"
                                        style={{ width: "190.5px" }}
                                      >
                                        <div className="image_wrapper">
                                          <img
                                            decoding="async"
                                            className="hover_image"
                                            alt="cardano (1)"
                                            src="https://deepcave.io/wp-content/uploads/2023/10/cardano-1-1.png"
                                          />
                                          <img
                                            decoding="async"
                                            className="main_image"
                                            alt="cardano"
                                            src="https://deepcave.io/wp-content/uploads/2023/10/cardano-2.png"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <span
                                      className="swiper-notification"
                                      aria-live="assertive"
                                      aria-atomic="true"
                                    ></span>
                                  </div>
                                </div>
                              </div>{" "}
                            </div>
                          </div>
                          <section
                            className="elementor-section elementor-inner-section elementor-element elementor-element-c14c3f6 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="c14c3f6"
                            data-element_type="section"
                          >
                            <div className="elementor-container elementor-column-gap-default">
                              <div
                                className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-a8b3061"
                                data-id="a8b3061"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-04409a2 elementor-widget elementor-widget-spacer"
                                    data-id="04409a2"
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
                                    className="elementor-element elementor-element-c2a4738 aleft elementor-widget elementor-widget-wgl-double-heading"
                                    data-id="c2a4738"
                                    data-element_type="widget"
                                    id="community"
                                    data-widget_type="wgl-double-heading.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="wgl-double-heading">
                                        <div className="dblh__subtitle">
                                          <span>OUR COMMUNITY</span>
                                        </div>
                                        <h2 className="dblh__title-wrapper">
                                          <span className="dblh__title dblh__title-1">
                                            Join Our Thriving Community
                                          </span>
                                        </h2>
                                      </div>{" "}
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-0b5ddbb aleft elementor-widget elementor-widget-wgl-button"
                                    data-id="0b5ddbb"
                                    data-element_type="widget"
                                    data-widget_type="wgl-button.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <a
                                        className="wgl-button btn-size-lg "
                                        role="button"
                                        href="https://t.me/deepcaveglobalgroup"
                                      >
                                        <div className="button__content ">
                                          <span className="button__text">
                                            Join Community
                                          </span>
                                        </div>
                                      </a>{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-e7c0f91"
                                data-id="e7c0f91"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-bee6d49 elementor-widget elementor-widget-wgl-image-layers"
                                    data-id="bee6d49"
                                    data-element_type="widget"
                                    data-widget_type="wgl-image-layers.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="wgl-image-layers">
                                        <div
                                          className="img-layer_image-wrapper"
                                          style={{ zIndex: "1" }}
                                        >
                                          <div
                                            className="img-layer_item"
                                            style={{
                                              transform: "translate(0px, 0%)",
                                            }}
                                          >
                                            <div
                                              className="img-layer_image"
                                              style={{
                                                transition: "all 800ms",
                                                transitionDelay: "600ms",
                                              }}
                                            >
                                              <img
                                                decoding="async"
                                                src="https://deepcave.io/wp-content/uploads/2022/06/home5-il-2-1.png"
                                                alt="home5-il-2-1"
                                              />
                                            </div>
                                          </div>
                                        </div>{" "}
                                        <div
                                          className="img-layer_image-wrapper"
                                          style={{ zIndex: "1" }}
                                        >
                                          <div
                                            className="img-layer_item"
                                            style={{
                                              transform: "translate(0px, 0%)",
                                            }}
                                          >
                                            <div
                                              className="img-layer_image"
                                              style={{
                                                transition: "all 800ms",
                                                transitionDelay: "1200ms",
                                              }}
                                            >
                                              <img
                                                decoding="async"
                                                src="https://deepcave.io/wp-content/uploads/2023/10/deepcave-2-2.png"
                                                alt="deepcave (2)"
                                              />
                                            </div>
                                          </div>
                                        </div>{" "}
                                        <div
                                          className="img-layer_image-wrapper"
                                          style={{ zIndex: "1" }}
                                        >
                                          <div
                                            className="img-layer_item"
                                            style={{
                                              transform: "translate(0px, 0%)",
                                            }}
                                          >
                                            <div
                                              className="img-layer_image"
                                              style={{
                                                transition: "all 800ms",
                                                transitionDelay: "1800ms",
                                              }}
                                            >
                                              <img
                                                decoding="async"
                                                src="https://deepcave.io/wp-content/uploads/2023/10/deepcave-2-1.png"
                                                alt="deepcave (2)"
                                              />
                                            </div>
                                          </div>
                                        </div>{" "}
                                        <div
                                          className="img-layer_image-wrapper"
                                          style={{ zIndex: "1" }}
                                        >
                                          <div
                                            className="img-layer_item"
                                            style={{
                                              transform: "translate(0px, 0%)",
                                            }}
                                          >
                                            <div
                                              className="img-layer_image"
                                              style={{
                                                transition: "all 800ms",
                                                transitionDelay: "2400ms",
                                              }}
                                            >
                                              <img
                                                decoding="async"
                                                src="https://deepcave.io/wp-content/uploads/2023/10/deepcave-3-1.png"
                                                alt="deepcave (3)"
                                              />
                                            </div>
                                          </div>
                                        </div>{" "}
                                      </div>{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <div
                            className="elementor-element elementor-element-4556a30 elementor-widget elementor-widget-spacer"
                            data-id="4556a30"
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
                    className="elementor-element elementor-element-d35ffb9 e-flex e-con-boxed e-con e-parent"
                    data-id="d35ffb9"
                    data-element_type="container"
                    data-settings='{"content_width":"boxed"}'
                    data-core-v316-plus="true"
                  >
                    <div className="e-con-inner">
                      <div
                        className="elementor-element elementor-element-58892fa e-con-full e-flex e-con e-child"
                        data-id="58892fa"
                        data-element_type="container"
                        data-settings='{"content_width":"full"}'
                      >
                        <div
                          className="elementor-element elementor-element-16ce645 elementor-widget elementor-widget-video"
                          data-id="16ce645"
                          data-element_type="widget"
                          data-settings='{"youtube_url":"https:\/\/www.youtube.com\/watch?v=nxlk6BdacRA","video_type":"youtube","controls":"yes"}'
                          data-widget_type="video.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-wrapper elementor-open-inline">
                              <iframe
                                className="elementor-video"
                                allowFullScreen={true}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                title="COMO CREAR UN NFT EN UN CLICK con IA | Deepcave"
                                width="640"
                                height="360"
                                src="https://www.youtube.com/embed/nxlk6BdacRA?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fdeepcave.io&amp;widgetid=1"
                                id="widget2"
                                data-gtm-yt-inspected-6="true"
                              ></iframe>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-9a87242 e-con-full e-flex e-con e-child"
                        data-id="9a87242"
                        data-element_type="container"
                        data-settings='{"content_width":"full"}'
                      >
                        <div
                          className="elementor-element elementor-element-3d7ace5 elementor-widget elementor-widget-video"
                          data-id="3d7ace5"
                          data-element_type="widget"
                          data-settings='{"youtube_url":"https:\/\/www.youtube.com\/watch?v=gBgUo-X_Yy8","video_type":"youtube","controls":"yes"}'
                          data-widget_type="video.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-wrapper elementor-open-inline">
                              <iframe
                                className="elementor-video"
                                allowFullScreen={true}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                title="ESSA CRIPTOMOEDA NÃO PARA DE SUBIR - 200% EM 24 HORAS - EU AVISEI E VOCÊ NÃO ESCUTOU!"
                                width="640"
                                height="360"
                                src="https://www.youtube.com/embed/gBgUo-X_Yy8?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fdeepcave.io&amp;widgetid=3"
                                id="widget4"
                                data-gtm-yt-inspected-6="true"
                              ></iframe>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-1b6d3bb e-con-full e-flex e-con e-child"
                        data-id="1b6d3bb"
                        data-element_type="container"
                        data-settings='{"content_width":"full"}'
                      >
                        <div
                          className="elementor-element elementor-element-3599f08 elementor-widget elementor-widget-video"
                          data-id="3599f08"
                          data-element_type="widget"
                          data-settings='{"youtube_url":"https:\/\/www.youtube.com\/watch?v=zzmScxkhmr8","video_type":"youtube","controls":"yes"}'
                          data-widget_type="video.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-wrapper elementor-open-inline">
                              <iframe
                                className="elementor-video"
                                allowFullScreen={true}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                title="LET AI BRING YOUR WORD INTO LIFE! ! 🔥 Deep Cave 🔥 TURNS YOUR WORD INTO ART! 🔥"
                                width="640"
                                height="360"
                                src="https://www.youtube.com/embed/zzmScxkhmr8?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fdeepcave.io&amp;widgetid=5"
                                id="widget6"
                                data-gtm-yt-inspected-6="true"
                              ></iframe>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-878ec40 e-con-full e-flex e-con e-child"
                        data-id="878ec40"
                        data-element_type="container"
                        data-settings='{"content_width":"full"}'
                      ></div>
                      <div
                        className="elementor-element elementor-element-d6a1989 e-con-full e-flex e-con e-child"
                        data-id="d6a1989"
                        data-element_type="container"
                        data-settings='{"content_width":"full"}'
                      ></div>
                      <div
                        className="elementor-element elementor-element-845f3ba e-con-full e-flex e-con e-child"
                        data-id="845f3ba"
                        data-element_type="container"
                        data-settings='{"content_width":"full"}'
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="footer clearfix" id="footer">
          <div className="footer_top-area">
            <div className="wgl-container">
              <div className="row-footer">
                {" "}
                <div
                  data-elementor-type="wp-post"
                  data-elementor-id="216"
                  className="elementor elementor-216"
                  data-elementor-post-type="footer"
                >
                  <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-3fc5bcf wgl-add-background-text elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="3fc5bcf"
                    data-element_type="section"
                    data-settings='{"background_background":"gradient"}'
                  >
                    <div className="elementor-container elementor-column-gap-default">
                      <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-9a99fef"
                        data-id="9a99fef"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-08e62ac elementor-widget elementor-widget-spacer"
                            data-id="08e62ac"
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
                            className="elementor-section elementor-inner-section elementor-element elementor-element-cc7e72e hover_links elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="cc7e72e"
                            data-element_type="section"
                          >
                            <div className="elementor-container elementor-column-gap-default">
                              <div
                                className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-ce87a90"
                                data-id="ce87a90"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-95d85c5 elementor-view-stacked acenter elementor-widget-icon-box wgl-icon-box elementor-shape-circle elementor-widget elementor-widget-wgl-info-box"
                                    data-id="95d85c5"
                                    data-element_type="widget"
                                    data-widget_type="wgl-info-box.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="wgl-infobox">
                                        <div className="wgl-infobox_wrapper wgl-layout-top">
                                          <div className="media-wrapper icon-wrapper">
                                            <span className="wgl-icon">
                                              <i
                                                className="icon elementor-icon flaticon flaticon-email"
                                                aria-hidden="true"
                                              ></i>
                                            </span>
                                          </div>
                                          <div className="content_wrapper">
                                            <div className="wgl-infobox-title_wrapper"></div>
                                            <div className="wgl-infobox_content">
                                              <p>contact@deepcave.io</p>
                                              <p>marketing@deepcave.io</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-3a30ef6"
                                data-id="3a30ef6"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-a20a5a6 elementor-view-stacked acenter elementor-widget-icon-box wgl-icon-box elementor-shape-circle elementor-widget elementor-widget-wgl-info-box"
                                    data-id="a20a5a6"
                                    data-element_type="widget"
                                    data-widget_type="wgl-info-box.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="wgl-infobox">
                                        <a
                                          className="wgl-infobox__link"
                                          href="https://t.me/deepcaveglobalgroup"
                                        ></a>
                                        <div className="wgl-infobox_wrapper wgl-layout-top">
                                          <div className="media-wrapper icon-wrapper">
                                            <span className="wgl-icon">
                                              <i
                                                className="icon elementor-icon flaticon flaticon-telegram"
                                                aria-hidden="true"
                                              ></i>
                                            </span>
                                          </div>
                                          <div className="content_wrapper">
                                            <div className="wgl-infobox-title_wrapper"></div>
                                            <div className="wgl-infobox_content">
                                              <p>
                                                We are on Telegram
                                                <br />
                                                @deepcaveglobalgroup
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-0679ae0"
                                data-id="0679ae0"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-217151e acenter elementor-widget-image-box wgl-image-box elementor-widget elementor-widget-wgl-info-box"
                                    data-id="217151e"
                                    data-element_type="widget"
                                    data-widget_type="wgl-info-box.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="wgl-infobox">
                                        <a
                                          className="wgl-infobox__link"
                                          href="https://twitter.com/DeepCaveAI"
                                        ></a>
                                        <div className="wgl-infobox_wrapper wgl-layout-top">
                                          <div className="media-wrapper img-wrapper">
                                            <figure className="wgl-image-box_img">
                                              <span>
                                                <img
                                                  src="https://deepcave.io/wp-content/uploads/elementor/thumbs/x-1-qen236seeelks0mmj97eye6c8eb9e0rnxfs7z6objo.png"
                                                  title="x (1)"
                                                  alt="x (1)"
                                                  loading="lazy"
                                                />
                                              </span>
                                            </figure>
                                          </div>
                                          <div className="content_wrapper">
                                            <div className="wgl-infobox-title_wrapper"></div>
                                            <div className="wgl-infobox_content">
                                              <p>
                                                <br />
                                                Follow us on Twitter
                                              </p>
                                              <p>@DeepCaveAI</p>
                                            </div>
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
                            className="elementor-element elementor-element-aa839f4 elementor-widget elementor-widget-spacer"
                            data-id="aa839f4"
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
                            className="elementor-element elementor-element-e99e823 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                            data-id="e99e823"
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
                            className="elementor-element elementor-element-c8e8c3f elementor-widget elementor-widget-spacer"
                            data-id="c8e8c3f"
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
                            className="elementor-element elementor-element-0b6fe4d elementor-widget__width-auto hover_links aleft elementor-widget elementor-widget-wgl-double-heading"
                            data-id="0b6fe4d"
                            data-element_type="widget"
                            data-widget_type="wgl-double-heading.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="wgl-double-heading">
                                <a
                                  className="dbl__link"
                                  href="https://deepcave.io/"
                                >
                                  <h2 className="dblh__title-wrapper">
                                    <span className="dblh__title dblh__title-1">
                                      Home
                                    </span>
                                  </h2>
                                </a>
                              </div>{" "}
                            </div>
                          </div>
                          <div
                            className="elementor-element elementor-element-7f9e7ef elementor-widget__width-auto hover_links aleft elementor-widget elementor-widget-wgl-double-heading"
                            data-id="7f9e7ef"
                            data-element_type="widget"
                            data-widget_type="wgl-double-heading.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="wgl-double-heading">
                                <a
                                  className="dbl__link"
                                  href="https://deepcave.io/dc-tool/"
                                >
                                  <h2 className="dblh__title-wrapper">
                                    <span className="dblh__title dblh__title-1">
                                      DC Tool
                                    </span>
                                  </h2>
                                </a>
                              </div>{" "}
                            </div>
                          </div>
                          <div
                            className="elementor-element elementor-element-1127cd4 elementor-widget__width-auto hover_links aleft elementor-widget elementor-widget-wgl-double-heading"
                            data-id="1127cd4"
                            data-element_type="widget"
                            data-widget_type="wgl-double-heading.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="wgl-double-heading">
                                <a
                                  className="dbl__link"
                                  href="https://deepcave.io/shop/"
                                >
                                  <h2 className="dblh__title-wrapper">
                                    <span className="dblh__title dblh__title-1">
                                      NFT Shop
                                    </span>
                                  </h2>
                                </a>
                              </div>{" "}
                            </div>
                          </div>
                          <div
                            className="elementor-element elementor-element-7cf528e elementor-widget__width-auto hover_links aleft elementor-widget elementor-widget-wgl-double-heading"
                            data-id="7cf528e"
                            data-element_type="widget"
                            data-widget_type="wgl-double-heading.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="wgl-double-heading">
                                <a
                                  className="dbl__link"
                                  href="https://deepcave.io/whitepaper/"
                                >
                                  <h2 className="dblh__title-wrapper">
                                    <span className="dblh__title dblh__title-1">
                                      Whitepaper
                                    </span>
                                  </h2>
                                </a>
                              </div>{" "}
                            </div>
                          </div>
                          <div
                            className="elementor-element elementor-element-6287c7e elementor-widget__width-auto hover_links aleft elementor-widget elementor-widget-wgl-double-heading"
                            data-id="6287c7e"
                            data-element_type="widget"
                            data-widget_type="wgl-double-heading.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="wgl-double-heading">
                                <a
                                  className="dbl__link"
                                  href="https://deepcave.io/docs"
                                >
                                  <h2 className="dblh__title-wrapper">
                                    <span className="dblh__title dblh__title-1">
                                      Docs
                                    </span>
                                  </h2>
                                </a>
                              </div>{" "}
                            </div>
                          </div>
                          <div
                            className="elementor-element elementor-element-f51d5b9 elementor-widget__width-auto hover_links aleft elementor-widget elementor-widget-wgl-double-heading"
                            data-id="f51d5b9"
                            data-element_type="widget"
                            data-widget_type="wgl-double-heading.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="wgl-double-heading">
                                <a
                                  className="dbl__link"
                                  href="https://deepcave.io/utility/"
                                >
                                  <h2 className="dblh__title-wrapper">
                                    <span className="dblh__title dblh__title-1">
                                      Utility
                                    </span>
                                  </h2>
                                </a>
                              </div>{" "}
                            </div>
                          </div>
                          <div
                            className="elementor-element elementor-element-57576a7 elementor-widget__width-auto hover_links aleft elementor-widget elementor-widget-wgl-double-heading"
                            data-id="57576a7"
                            data-element_type="widget"
                            data-widget_type="wgl-double-heading.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="wgl-double-heading">
                                <a
                                  className="dbl__link"
                                  href="https://deepcave.io/contacts/"
                                >
                                  <h2 className="dblh__title-wrapper">
                                    <span className="dblh__title dblh__title-1">
                                      Contact
                                    </span>
                                  </h2>
                                </a>
                              </div>{" "}
                            </div>
                          </div>
                          <div
                            className="elementor-element elementor-element-02d0e5a elementor-widget elementor-widget-spacer"
                            data-id="02d0e5a"
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
                            className="elementor-element elementor-element-e91ff57 elementor-widget elementor-widget-text-editor"
                            data-id="e91ff57"
                            data-element_type="widget"
                            data-widget_type="text-editor.default"
                          >
                            <div className="elementor-widget-container">
                              <p>
                                Copyright © 2023 by DeepCave Inc. All Rights
                                Reserved |&nbsp; &nbsp;
                                <a href="https://deepcave.io/disclaimer/">
                                  Disclaimer
                                </a>
                                &nbsp; &nbsp;|&nbsp; &nbsp;
                                <a href="https://deepcave.io/privacy-policy/">
                                  Privacy Policy
                                </a>
                                &nbsp; &nbsp;|&nbsp; &nbsp;
                                <a href="https://deepcave.io/terms-of-use/">
                                  Terms of Use
                                </a>
                              </p>{" "}
                            </div>
                          </div>
                          <div
                            className="elementor-element elementor-element-9354eeb elementor-widget elementor-widget-spacer"
                            data-id="9354eeb"
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
                            className="elementor-element elementor-element-ff66273 elementor-shape-circle elementor-widget elementor-widget-wgl-social-icons"
                            data-id="ff66273"
                            data-element_type="widget"
                            data-widget_type="wgl-social-icons.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="wgl-social-icons elementor-social-icons-wrapper">
                                <a
                                  className="elementor-icon elementor-social-icon elementor-social-icon-telegram-plane elementor-repeater-item-61ca096"
                                  href="https://t.me/deepcaveglobalgroup"
                                  title="Telegram"
                                >
                                  <span className="elementor-screen-only">
                                    Telegram-plane
                                  </span>
                                  <i className="fab fa-telegram-plane"></i>
                                </a>
                                <a
                                  className="elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-repeater-item-9efb64d"
                                  href="https://www.youtube.com/@DeepCaveInc."
                                  title="Youtube"
                                >
                                  <span className="elementor-screen-only">
                                    Youtube
                                  </span>
                                  <i className="fab fa-youtube"></i>
                                </a>
                                <a
                                  className="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-repeater-item-2a3628f"
                                  href="https://twitter.com/DeepCaveAI"
                                  title="Twitter"
                                >
                                  <span className="elementor-screen-only">
                                    Twitter
                                  </span>
                                  <i className="fab fa-twitter"></i>
                                </a>
                                <a
                                  className="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-62a93a5"
                                  href="https://www.instagram.com/"
                                  title="Instagram"
                                >
                                  <span className="elementor-screen-only">
                                    Instagram
                                  </span>
                                  <i className="fab fa-instagram"></i>
                                </a>
                              </div>{" "}
                            </div>
                          </div>
                          <div
                            className="elementor-element elementor-element-75e7cd7 elementor-widget elementor-widget-spacer"
                            data-id="75e7cd7"
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
          </div>
        </footer>
        <div id="scroll_up" className="scroll_up-icon">
          <i className="flaticon flaticon-left-arrow"></i>
        </div>
        <div className="wgl-canvas-outer">
          <canvas id="wgl-webgl-fluid" width="1349" height="629"></canvas>
        </div>
        <script id="tmpl-rwmb-media-item" type="text/html">
          <input
            type="hidden"
            name="{{{ data.controller.fieldName }}}"
            value="{{{ data.id }}}"
            className="rwmb-media-input"
          />
          <div className="rwmb-media-preview attachment-preview">
            <div className="rwmb-media-content thumbnail">
              <div className="centered"></div>
            </div>
          </div>
          <div className="rwmb-media-info">
            <a href="{{{ data.url }}}" className="rwmb-media-title"></a>
            <p className="rwmb-media-name"></p>
            <p className="rwmb-media-actions">
              <a
                className="rwmb-edit-media"
                title="{{{ i18nRwmbMedia.edit }}}"
                href="{{{ data.editLink }}}"
              >
                <span className="dashicons dashicons-edit"></span>
              </a>
              <a
                href="#"
                className="rwmb-remove-media"
                title="{{{ i18nRwmbMedia.remove }}}"
              >
                <span className="dashicons dashicons-no-alt"></span>
              </a>
            </p>
          </div>
        </script>
        <script id="tmpl-rwmb-media-button" type="text/html"></script>
        <script id="tmpl-rwmb-image-item" type="text/html">
          <input
            type="hidden"
            name="{{{ data.controller.fieldName }}}"
            value="{{{ data.id }}}"
            className="rwmb-media-input"
          />
          <div className="attachment-preview">
            <div className="thumbnail">
              <div className="centered"></div>
            </div>
          </div>
          <div className="rwmb-image-overlay"></div>
          <div className="rwmb-image-actions">
            <a
              className="rwmb-image-edit rwmb-edit-media"
              title="{{{ i18nRwmbMedia.edit }}}"
              href="{{{ data.editLink }}}"
            >
              <span className="dashicons dashicons-edit"></span>
            </a>
            <a
              href="#"
              className="rwmb-image-delete rwmb-remove-media"
              title="{{{ i18nRwmbMedia.remove }}}"
            >
              <span className="dashicons dashicons-no-alt"></span>
            </a>
          </div>
        </script>
        <link
          rel="stylesheet"
          id="rs-plugin-settings-css"
          href="https://deepcave.io/wp-content/plugins/revslider/public/assets/css/rs6.css?ver=6.6.16"
          type="text/css"
          media="all"
        />
        <script
          async={true}
          type="text/javascript"
          src="https://deepcave.io/wp-content/plugins/copy-the-code/assets/js/copy-the-code.js?ver=3.2.0"
          id="copy-the-code-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://deepcave.io/wp-content/plugins/copy-the-code/assets/js/clipboard.js?ver=3.2.0"
          id="ctc-clipboard-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://deepcave.io/wp-content/plugins/copy-the-code/assets/js/copy-inline.js?ver=3.2.0"
          id="ctc-copy-inline-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://deepcave.io/wp-content/plugins/contact-form-7/includes/swv/js/index.js?ver=5.8.1"
          id="swv-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://deepcave.io/wp-content/plugins/contact-form-7/includes/js/index.js?ver=5.8.1"
          id="contact-form-7-js"
        ></script>
        <script
          type="text/javascript"
          src="https://deepcave.io/wp-content/plugins/revslider/public/assets/js/rbtools.min.js?ver=6.6.16"
          defer={true}
          async={true}
          id="tp-tools-js"
        ></script>
        <script
          type="text/javascript"
          src="https://deepcave.io/wp-content/plugins/revslider/public/assets/js/rs6.min.js?ver=6.6.16"
          defer={true}
          async={true}
          id="revmin-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://deepcave.io/wp-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.min.js?ver=2.7.0-wc.8.2.1"
          id="jquery-blockui-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://deepcave.io/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.min.js?ver=8.2.1"
          id="wc-add-to-cart-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://deepcave.io/wp-content/plugins/woocommerce/assets/js/js-cookie/js.cookie.min.js?ver=2.1.4-wc.8.2.1"
          id="js-cookie-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://deepcave.io/wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.min.js?ver=8.2.1"
          id="woocommerce-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://deepcave.io/wp-content/themes/nico/js/theme-addons.js?ver=1.0"
          id="nico-theme-addons-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://deepcave.io/wp-content/themes/nico/js/theme.js?ver=1.0"
          id="nico-theme-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://deepcave.io/wp-content/plugins/copy-the-code/classes/blocks/assets/js/core.js?ver=3.2.0"
          id="ctc-blocks-core-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://deepcave.io/wp-content/plugins/copy-the-code/classes/elementor/widgets/deal/script.js?ver=3.2.0"
          id="ctc-el-deal-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://deepcave.io/wp-content/plugins/copy-the-code/classes/elementor/widgets/coupon/script.js?ver=3.2.0"
          id="ctc-el-coupon-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://deepcave.io/wp-content/plugins/copy-the-code/classes/elementor/widgets/ai-prompt-generator/script.js?ver=3.2.0"
          id="ctc-el-ai-prompt-generator-js"
        ></script>
        <script
          type="text/javascript"
          async={true}
          src="https://deepcave.io/wp-content/plugins/nico-core/includes/elementor//assets/js/wgl_elementor_widgets.js?ver=1.0.0"
          id="wgl-widgets-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://deepcave.io/wp-content/themes/nico/js/theia-sticky-sidebar.min.js?ver=6.4.1"
          id="theia-sticky-sidebar-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://deepcave.io/wp-content/themes/nico/js/jquery.appear.js?ver=1.0.0"
          id="jquery-appear-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://deepcave.io/wp-content/themes/nico/js/anime.min.js?ver=6.4.1"
          id="anime-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://deepcave.io/wp-content/plugins/elementor-pro/assets/js/webpack-pro.runtime.min.js?ver=3.16.2"
          id="elementor-pro-webpack-runtime-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://deepcave.io/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js?ver=3.16.6"
          id="elementor-webpack-runtime-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://deepcave.io/wp-content/plugins/elementor/assets/js/frontend-modules.min.js?ver=3.16.6"
          id="elementor-frontend-modules-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://deepcave.io/wp-includes/js/dist/vendor/wp-polyfill-inert.min.js?ver=3.1.2"
          id="wp-polyfill-inert-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://deepcave.io/wp-includes/js/dist/vendor/regenerator-runtime.min.js?ver=0.14.0"
          id="regenerator-runtime-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://deepcave.io/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=3.15.0"
          id="wp-polyfill-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://deepcave.io/wp-includes/js/dist/hooks.min.js?ver=c6aec9a8d4e5a5d543a1"
          id="wp-hooks-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://deepcave.io/wp-includes/js/dist/i18n.min.js?ver=7701b0c3857f914212ef"
          id="wp-i18n-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://deepcave.io/wp-content/plugins/elementor-pro/assets/js/frontend.min.js?ver=3.16.2"
          id="elementor-pro-frontend-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://deepcave.io/wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min.js?ver=4.0.2"
          id="elementor-waypoints-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://deepcave.io/wp-includes/js/jquery/ui/core.min.js?ver=1.13.2"
          id="jquery-ui-core-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://deepcave.io/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=3.16.6"
          id="elementor-frontend-js"
        ></script>
        <span
          id="elementor-device-mode"
          className="elementor-screen-only"
        ></span>
        <script
          async={true}
          type="text/javascript"
          src="https://deepcave.io/wp-content/plugins/elementor-pro/assets/js/elements-handlers.min.js?ver=3.16.2"
          id="pro-elements-handlers-js"
        ></script>
        <svg
          style={{ display: "none" }}
          className="e-font-icon-svg-symbols"
        ></svg>
        <script
          async={true}
          type="text/javascript"
          src="https://deepcave.io/wp-content/plugins/nico-core/includes/elementor/assets/js/wgl_webgl_fluid.js?ver=6.4.1"
          id="wgl-webgl-fluid-js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src="https://deepcave.io/wp-content/plugins/wgl-extensions/includes/elementor/assets/js/wgl_elementor_sections.js?ver=6.4.1"
          id="wgl-parallax-js"
        ></script>
        <script
          async={true}
          src="https://deepcave.io/wp-content/plugins/elementor/assets/lib/swiper/v8/swiper.min.js?ver=8.4.5"
        ></script>
        <div id="loom-companion-mv3" ext-id="liecbddmkiiihnedobmlmillhodjkdmb">
          <section id="shadow-host-companion"></section>
        </div>
      </body>
    </div>
  );
};

export default Home;

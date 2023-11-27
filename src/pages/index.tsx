import { BasciConnect, CustomConnect } from "components/ConnectWallet";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>xAI - $xAI For Crypto</title>
        <meta httpEquiv="x-ua-compatible" content="ie=edge"></meta>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="shortcut icon"
          href="https://xai.gd/assets/img/logo_32px.png"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        ></link>
        <link rel="stylesheet" href="https://xai.gd/assets/css/animate.css" />
        <link
          rel="stylesheet"
          href="https://xai.gd/assets/css/owl.carousel.min.css"
        />
        <link
          rel="stylesheet"
          href="https://xai.gd/assets/css/owl.theme.default.min.css"
        />
        <link
          rel="stylesheet"
          href="https://xai.gd/assets/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="https://xai.gd/assets/css/normalize.css" />
        <link rel="stylesheet" href="https://xai.gd/assets/css/style.css" />
        <link
          rel="stylesheet"
          href="https://xai.gd/assets/css/responsive.css"
        />
        <script
          async={true}
          src="https://xai.gd/assets//js/vendor/modernizr-3.11.2.min.js"
        ></script>
        <script
          async={true}
          src="https://platform.twitter.com/js/tweet.2d13d9c81f3c2ba95ef78654d9a09632.js"
        ></script>
      </Head>
      <body>
        <div className="header-top-area">
          <div className="header-data">
            <div className="marquee">
              <div className="marquee-inner">
                <ul className="header-data-scroll">
                  <li>
                    xAI AI Draw Beta is live now
                    <a href="https://xai.gd/draw">
                      <img
                        src="https://xai.gd/assets/img/arrow-top-right.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    Read about xAI on Gitbook
                    <a href="https://doc.xai.gd">
                      <img
                        src="https://xai.gd/assets/img/arrow-top-right.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    xAI Grok GPT v1 is live now
                    <a href="https://xai.gd/gpt">
                      <img
                        src="https://xai.gd/assets/img/arrow-top-right.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    xAI Scanner v1 is live now
                    <a href="https://xai.gd/scanner">
                      <img
                        src="https://xai.gd/assets/img/arrow-top-right.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    Join xAI on Telegram!
                    <a href="https://t.me/xai_international">
                      <img
                        src="https://xai.gd/assets/img/arrow-top-right.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    Follow xAI on Twitter!
                    <a href="https://twitter.com/xai_gd">
                      <img
                        src="https://xai.gd/assets/img/arrow-top-right.svg"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header-area navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="https://xai.gd/assets/img/logo_64px.png" alt="" />
            </a>
            <div
              className="collapse navbar-collapse"
              id="navbar"
              style={{ backgroundColor: "black" }}
            >
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a href="https://doc.xai.gd" className="nav-link">
                    Doc
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    xAI Tools
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="https://xai.gd/draw" className="dropdown-item">
                        xAI Draw
                      </a>
                    </li>
                    <li>
                      <a href="https://xai.gd/gpt" className="dropdown-item">
                        xAI Grok GPT
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://xai.gd/scanner"
                        className="dropdown-item"
                      >
                        xAI Scanner
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    XAI
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        href="https://doc.xai.gd/safety/ownership-renounced"
                        className="dropdown-item"
                      >
                        Ownership Renounced
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://doc.xai.gd/safety/liquidity-pool-lock"
                        className="dropdown-item"
                      >
                        Liquidity Lock
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://app.solidproof.io/projects/xai-gd?audit_id=756"
                        className="dropdown-item"
                      >
                        SolidProof Audit
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://bscscan.com/token/0x8ea43e15b1a616a19903f6a87498f7dca1efae0f"
                        className="dropdown-item"
                      >
                        BscScan
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Community
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        href="https://t.me/xai_international"
                        className="dropdown-item"
                      >
                        Telegram
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/xai_gd"
                        className="dropdown-item"
                      >
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://medium.com/@xai_gd"
                        className="dropdown-item"
                      >
                        Medium
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://coinmarketcap.com/currencies/xai-token/"
                        className="dropdown-item"
                      >
                        Coinmarketcap
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.coingecko.com/en/coins/xai-3"
                        className="dropdown-item"
                      >
                        Coingecko
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.dextools.io/app/en/bnb/pair-explorer/0x8dcfd1a9e938dd3e146704a37f4cc2ce8ca0a0ea"
                    className="nav-link"
                  >
                    Chart
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://doc.xai.gd/x-ai-overview/join-our-team"
                    className="nav-link"
                  >
                    Career
                  </a>
                </li>
                <li className="nav-item">
                  <CustomConnect />
                </li>
              </ul>
            </div>
            <div className="header-contact"></div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar"
              aria-controls="navbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
        <div className="hero-area">
          <div className="heroBackground">
            <div className="topRadius"></div>
            <div className="topInnerRadius"></div>
            <div className="bottomRadius"></div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="hero-text">
                  <h2>
                    xAI <br /> the science of making machines that can{" "}
                    <span className="text-blue">think like humans</span>.{" "}
                    <img
                      src="https://xai.gd/assets/img/type-cursor.svg"
                      alt=""
                    />
                  </h2>
                  <p>
                    xAI Draw, xAI Grok GPT, xAI Contract Scanner, xAI Trading
                  </p>
                  <div className="hero-button">
                    <CustomConnect />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-area bg-dark">
          <div className="container">
            <div className="row">
              <div className="token-box-wrapper">
                <h2
                  className="wow fadeInUp"
                  data-wow-delay="1s"
                  style={{
                    visibility: "visible",
                    animationDelay: "1s",
                    animationName: "fadeInUp",
                  }}
                >
                  Turbo-charged engine that helps us <br />
                  take on the most pressing <br />
                  and complicated problems.
                </h2>
                <div
                  className="token-box-list wow fadeInUp"
                  data-wow-delay="2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "2s",
                    animationName: "none",
                  }}
                >
                  <div className="token-box-left">
                    <div className="token-box">
                      <h2>
                        AI <br />
                        Draw <br />
                        Technology
                      </h2>
                    </div>
                    <div className="token-box">
                      <h2>
                        GPT-4 <br />
                        Language <br />
                        Model
                      </h2>
                    </div>
                    <div className="token-box">
                      <h2>
                        Advanced <br />
                        AI <br />
                        Trading
                      </h2>
                    </div>
                    <div className="token-box">
                      <h2>
                        Machine <br />
                        Learning
                      </h2>
                    </div>
                    <div className="token-box">
                      <h2>
                        Generative <br />
                        AI
                      </h2>
                    </div>
                    <div className="token-box">
                      <h2>
                        Transformer <br />
                        Self-Attention
                      </h2>
                    </div>
                    <div className="token-box">
                      <h2>
                        Blockchain <br />
                        Analytics
                      </h2>
                    </div>
                    <div className="token-box">
                      <h2>Blockchain AI</h2>
                    </div>
                    <div className="token-box">
                      <h2>
                        Risk <br />
                        Management
                      </h2>
                    </div>
                  </div>
                  <div className="token-box-right">
                    <img src="https://xai.gd/assets/img/q-vector.svg" alt="" />
                    <h4>
                      AI may not have the capacity to love, but it has the power
                      to turn dreams into reality.
                    </h4>
                    <div className="author-box">
                      <div className="text">
                        <h2>Olan Baker</h2>
                        <p>Engineer at xAI</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div
                className="twitter-tweet twitter-tweet-rendered"
                style={{
                  display: "flex",
                  maxWidth: "550px",
                  width: "100%",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                <iframe
                  id="twitter-widget-0"
                  scrolling="no"
                  frameBorder="0"
                  allowTransparency={true}
                  allowFullScreen={true}
                  className=""
                  style={{
                    position: "static",
                    visibility: "visible",
                    width: "526px",
                    height: "515px",
                    display: "block",
                    flexGrow: "1",
                  }}
                  title="Twitter Tweet"
                  src="https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1720635518289908042&amp;lang=en&amp;origin=https%3A%2F%2Fxai.gd%2F&amp;sessionId=6665dac8259d3c3359fced910703e0580f95119f&amp;theme=light&amp;widgetsVersion=01917f4d1d4cb%3A1696883169554&amp;width=550px"
                  data-tweet-id="1720635518289908042"
                ></iframe>
              </div>{" "}
              <script
                async={true}
                src="https://platform.twitter.com/widgets.js"
              ></script>
              <div
                className="twitter-tweet twitter-tweet-rendered"
                style={{
                  display: "flex",
                  maxWidth: "550px",
                  width: "100%",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                <iframe
                  id="twitter-widget-1"
                  scrolling="no"
                  frameBorder="0"
                  allowTransparency={true}
                  allowFullScreen={true}
                  className=""
                  style={{
                    position: "static",
                    visibility: "visible",
                    width: "526px",
                    height: "321px",
                    display: "block",
                    flexGrow: "1",
                  }}
                  title="Twitter Tweet"
                  src="https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-1&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1720372289378590892&amp;lang=en&amp;origin=https%3A%2F%2Fxai.gd%2F&amp;sessionId=6665dac8259d3c3359fced910703e0580f95119f&amp;theme=light&amp;widgetsVersion=01917f4d1d4cb%3A1696883169554&amp;width=550px"
                  data-tweet-id="1720372289378590892"
                ></iframe>
              </div>{" "}
              <script
                async={true}
                src="https://platform.twitter.com/widgets.js"
              ></script>
            </div>
          </div>
        </div>
        <div className="section-area bg-gray pt-140">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="promo-box wow fadeInUp"
                  data-wow-delay="1s"
                  style={{
                    visibility: "visible",
                    animationDelay: "1s",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="promo-box-top">
                    <div className="promo-box-top-image">
                      <img src="https://xai.gd/assets/img/1111.jpg" alt="" />
                    </div>
                    <div className="promo-box-top-text">
                      <h2>The next big thing in AI.</h2>
                      <hr />
                      <h3>BNB Chain: </h3>
                      <span style={{ fontSize: "13px" }}>
                        0x8ea43e15b1a616a19903f6a87498f7dca1efae0f
                      </span>
                    </div>
                  </div>
                  <div className="promo-box-bottom">
                    <div className="promo-box-bottom-image">
                      <img src="https://xai.gd/assets/img/222.jpg" alt="" />
                    </div>
                    <div className="promo-box-bottom-text">
                      <p>
                        Navigating the complex world of crypto and blockchain
                        can be a daunting task, but with X AI, you can rest
                        assured that you will receive the most reliable
                        information and valuable insights available. By
                        utilizing the power of AI, you can unlock a true
                        superpower in the crypto and blockchain space.
                      </p>
                      <p>
                        Our AI model is continuously learning and adapting,
                        allowing you to stay one step ahead and achieve maximum
                        success. Trust in X AI to provide you with the
                        cutting-edge tools and resources you need to thrive in
                        the dynamic world of blockchain and cryptocurrency.
                      </p>
                      <a href="https://doc.xai.gd">
                        TRAILBLAZING THE FUTURE{" "}
                        <img
                          src="https://xai.gd/assets/img/arrow-right.svg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-area pt-140">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title">
                  <h2
                    className="wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    X AI Solutions
                  </h2>
                </div>
                <div
                  className="solution-box wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="solution-image">
                    <img src="https://xai.gd/assets/img/333.jpg" alt="" />
                  </div>
                  <div className="solution-text">
                    <ul className="tag">
                      <li>NFT</li>
                      <li>AI</li>
                      <li>Dataset</li>
                    </ul>
                    <h2>xAI AI Draw</h2>
                    <p>
                      xAI AI Draw inherits the best practices from Dall-E 2 and
                      Latent Diffusion while introducing some new ideas. It uses
                      the CLIP model as the text and image encoder and employs a
                      diffusion image prior (mapping) between the CLIP
                      modalities&apos; latent spaces.
                      <br />
                      This approach enhances the visual performance of the model
                      and opens up new possibilities for blending images and
                      manipulating images through text. To diffuse the latent
                      spaces, we use a transformer with 20 layers, 32 heads, and
                      a hidden size of 2048.
                    </p>
                  </div>
                </div>
                <div className="solution-box green">
                  <div className="solution-image">
                    <img src="https://xai.gd/assets/img/444.jpg" alt="" />
                  </div>
                  <div className="solution-text">
                    <ul className="tag">
                      <li>GPT</li>
                      <li>NLP</li>
                      <li>Gaussian Model</li>
                      <li>Generative AI</li>
                    </ul>
                    <h2>xAI Grok GPT</h2>
                    <p>
                      The X AI is powered by GPT-4 language models that can be
                      triggered to execute natural language processes with the
                      assistance of accurately constructed text prompts.
                      However, these models can create outcomes that are false,
                      toxic, or reflect bad sentiments. This is due to the fact
                      that GPT-4 is trained to guess the subsequent word in a
                      vast collection of online text rather than to secure the
                      language task that the user wishes. In other words, these
                      models have not been designed to meet the needs of their
                      users.{" "}
                    </p>
                  </div>
                </div>
                <div
                  className="solution-box"
                  style={{ backgroundColor: "#52ff8a" }}
                >
                  <div className="solution-image">
                    <img src="https://xai.gd/assets/img/5555.jpg" alt="" />
                  </div>
                  <div className="solution-text">
                    <ul className="tag">
                      <li>Contract</li>
                      <li>Security</li>
                      <li>Detection</li>
                      <li>WEB3</li>
                    </ul>
                    <h2>xAI Scanner</h2>
                    <p>
                      xAI Scanner assists users in detecting two of the most
                      prevalent token scams: rug pulls and honeypots. As
                      scammers develop more complex plans to commit fraud on
                      DeFi, it has become harder to recognize scam tokens. All
                      you have to do is take the token contract address and
                      paste it into X Scanner search bar, and X Scanner provides
                      you with data on potential risks, a brief audit of the
                      contract, and more. Our priority is to identify and expose
                      as many scams as possible. This assessment of the contract
                      is put forward as an informational reference rather than a
                      definite ruling on the trustworthiness of the contract.
                    </p>
                  </div>
                </div>
                <div className="solution-box pink">
                  <div className="solution-image">
                    <img src="https://xai.gd/assets/img/6666.jpg" alt="" />
                  </div>
                  <div className="solution-text">
                    <ul className="tag">
                      <li>Trading Bot</li>
                      <li>Algo</li>
                      <li>Patterns Trading</li>
                      <li>Automated</li>
                    </ul>
                    <h2>X Trading</h2>
                    <p>
                      AI is becoming increasingly present in stock trading,
                      providing a convenient, automated solution referred to as
                      “lazy trading”.
                      <br />
                      The rapidly growing use of Artificial Intelligence in
                      trading is evidence of its effectiveness, as it enables
                      firms to use vast stores of data to detect stock market
                      trends and patterns quickly and make decisions reliably.
                      <br />
                      Its capabilities to rapidly process and assess big masses
                      of data, as well as identify complex trading patterns,
                      allow firms to make informed buying and selling decisions
                      in real-time and significantly increase their profits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-area bg-dark pt-140">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2
                  className="f-2xl mb-120 wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  X AI <br /> Tokenomics
                </h2>
              </div>
            </div>
            <div className="row g-5">
              <div className="col-lg-4">
                <div
                  className="promotion wow fadeInUp"
                  data-wow-delay="1s"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <h2>Supply Information</h2>
                  <div className="promotion-text">
                    <p>
                      Max Supply: 100 Trillion
                      <br />
                      Burn: 50 Trillion
                      <br />
                      Circulating: 50 Trillion
                    </p>
                  </div>
                  <img src="https://xai.gd/assets/img/icon-1.svg" alt="" />
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="promotion wow fadeInUp"
                  data-wow-delay="1.5s"
                  style={{
                    visibility: "visible",
                    animationDelay: "1.5s",
                    animationName: "fadeInUp",
                  }}
                >
                  <h2>Buy/Sell Tax</h2>
                  <div className="promotion-text">
                    <p>
                      Contract Tax: 0%.
                      <br />
                      Pancake Tax: 0.25%
                      <br />
                      Total Tax: 0.25%
                    </p>
                  </div>
                  <img src="https://xai.gd/assets/img/icon-2.svg" alt="" />
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="promotion wow fadeInUp"
                  data-wow-delay="2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "2s",
                    animationName: "fadeInUp",
                  }}
                >
                  <h2>Zero Tax</h2>
                  <div className="promotion-text">
                    <p>
                      X AI token does not involve any taxation, allowing
                      investors to take advantage of not having to pay any tax
                      when buying or selling the token. This is because the
                      token&apos;s ecosystem functions independently from taxes,
                      and has its own AI utility to generate revenue and
                      facilitate buyback and burning operations.
                    </p>
                  </div>
                  <img src="https://xai.gd/assets/img/icon-3.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-area">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2
                  className="text-center f-2xl text-black mb-5 wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  Roadmap
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="faq-title">
                  <div
                    className="nav nav-pills flex-column wow fadeInUp"
                    data-wow-delay="0.7s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.7s",
                      animationName: "fadeInUp",
                    }}
                    role="tablist"
                  >
                    <button
                      className="nav-link active"
                      data-bs-toggle="pill"
                      data-bs-target="#faq-box-1"
                      type="button"
                      style={{ color: "black" }}
                      aria-selected="true"
                      role="tab"
                    >
                      Phase 1
                    </button>
                    <button
                      className="nav-link"
                      data-bs-toggle="pill"
                      data-bs-target="#faq-box-2"
                      type="button"
                      style={{ color: "black" }}
                      aria-selected="false"
                      role="tab"
                      tabIndex={-1}
                    >
                      Phase 2
                    </button>
                    <button
                      className="nav-link"
                      data-bs-toggle="pill"
                      data-bs-target="#faq-box-3"
                      type="button"
                      style={{ color: "black" }}
                      aria-selected="false"
                      role="tab"
                      tabIndex={-1}
                    >
                      Phase 3
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 ms-auto">
                <div
                  className="tab-content wow fadeInUp"
                  data-wow-delay="1s"
                  style={{
                    visibility: "visible",
                    animationDelay: "1s",
                    animationName: "fadeInUp",
                  }}
                >
                  <div
                    className="tab-pane fade active show"
                    id="faq-box-1"
                    role="tabpanel"
                  >
                    <div className="faq-box">
                      <div className="single-faq">
                        <h2
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-1"
                          className=""
                          aria-expanded="true"
                        >
                          About Phase 1
                        </h2>
                        <div
                          className="single-faq-body collapse show"
                          id="faq-1"
                        >
                          <p>
                            At launch, phase 1 will feature a beta version of
                            xAI AI Draw and xAI Grok GPT, and is estimated to
                            last between 1 to 3 months, depending on the speed
                            of our team&apos;s development. This phase focus on
                            building the fundamental and adoption.
                          </p>
                          <br />
                          <ul>
                            <li>25,000 $xAI holders </li>
                            <li>xAI Draw version 1</li>
                            <li>Grok GPT version 1</li>
                            <li>xAI Scanner - BSC</li>
                            <li>
                              xAI Trading Bot - Internal Testing &amp; Beta
                            </li>
                            <li>CoinGecko Listing</li>
                            <li>CoinMarketCap Listing</li>
                            <li>Trust Wallet Dapp Inclusion</li>
                            <li>Token Pocket Dapp Inclusion</li>
                            <li>Media Releases on News Editorial Site</li>
                            <li>CEX Listing &amp; Adoption</li>
                            <li>Billboard Marketing</li>
                            <li>
                              CoinZilla and Crypto Platform Banner Marketing
                            </li>
                            <li>Offline Roadshow</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="faq-box-2" role="tabpanel">
                    <div className="faq-box">
                      <div className="single-faq">
                        <h2 data-bs-toggle="collapse" data-bs-target="#faq-8">
                          About Phase 2
                        </h2>
                        <div className="single-faq-body collapse" id="faq-8">
                          <p>
                            Phase 2 will begin in the second quarter following
                            the token launch. In Phase 2, the focus will be on
                            driving token adoption, laying the groundwork for
                            commercial usage, and establishing an ecosystem with
                            automated buyback and burning of $X tokens to
                            encourage businesses to utilize AI technology and to
                            provide API documentation for developers.
                          </p>
                          <br />
                          <ul>
                            <li>80,000 $xAI holders </li>
                            <li>xAI Payment Processor MVP and Beta</li>
                            <li>xAI Draw Premium Version</li>
                            <li>xAI GPT Premium Version</li>
                            <li>
                              xAI AI Trading Bot - Cloud Connect &amp; Seed Env
                            </li>
                            <li>xAI Scanner - ETH, ARB, OKX</li>
                            <li>xAI Trading Analytics Beta</li>
                            <li>More CEX Listing on Top Exchanges</li>
                            <li>
                              Cross Bridge / Worm Hole for Arb Layer 2 Chain
                            </li>
                            <li>Cryptocurrency conventions and sponsorship</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="faq-box-3" role="tabpanel">
                    <div className="faq-box">
                      <div className="single-faq">
                        <h2 data-bs-toggle="collapse" data-bs-target="#faq-9">
                          About Phase 3
                        </h2>
                        <div className="single-faq-body collapse" id="faq-9">
                          <p>
                            Phase 3 will begin in the 3rd Quarter following the
                            token launch. The focus of this phase is to develop
                            a self-deployable NFT platform, a premium version,
                            and to generate revenue for the token team. This
                            revenue will be used to bolster the growth of the
                            token by listing it on more centralized exchanges,
                            conducting repurchases and burning them.
                            Furthermore, the team will recruit on a global scale
                            and create new use cases, integrating AI technology
                            to enhance the utility and value of the token.
                          </p>
                          <br />
                          <ul>
                            <li>200,000 $xAI holders </li>
                            <li>xAI Trading Premium Version</li>
                            <li>xAI Draw NFT Platform</li>
                            <li>xAI Scanner - TRON, Harmony, Cronos, FON</li>
                            <li>
                              xAI Payment Processor Platform for Commerical
                            </li>
                            <li>xAI Grok GPT further upgrades</li>
                            <li>
                              Cross Bridge / Worm Hole for ETH, Polygon Chain
                            </li>
                            <li>
                              CEX Listing &amp; Adoption on Top 5 Exchange.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-area">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="hire">
                  <h3>Careers</h3>
                  <h2>Join the team</h2>
                  <p>
                    At our core, we believe in a straightforward approach to
                    building our team. We strive to assemble a group of skilled
                    and enthusiastic individuals from diverse backgrounds and
                    cultivate a work environment that enables each team member
                    to perform at their best. By working collaboratively, we
                    bring the power of AI to the world of blockchain technology.
                  </p>
                  <a
                    href="https://doc.xai.gd/x-ai-overview/join-our-team"
                    className="btn btn-purpel"
                  >
                    Jobs Posting
                  </a>
                </div>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-md-6 col-lg-3">
                <div className="team">
                  <div className="team-image">
                    <img src="https://xai.gd/assets//img/leroy.jpg" alt="" />
                  </div>
                  <div className="team-text">
                    <h2>Leroy Cowell</h2>
                    <h3>Founder, CEO, &amp; CMO </h3>
                    <p>
                      Incredible potential and impact AI technology can have on
                      the world. Passionate about harnessing this technology to
                      create products and services that can improve the lives of
                      people around the world. Strive to expand the boundaries
                      of AI technology,{" "}
                    </p>
                    <div className="bookmarks">
                      <ul>
                        <li>
                          <a href="https://t.me/leroycowell">
                            <img
                              src="https://xai.gd/assets//img/telegram-gray.svg"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/leroycowell">
                            <img
                              src="https://xai.gd/assets//img/twitter-gray.svg"
                              alt=""
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="team">
                  <div className="team-image">
                    <img src="https://xai.gd/assets//img/olan.jpg" alt="" />
                  </div>
                  <div className="team-text">
                    <h2>Olan Baker</h2>
                    <h3>AI/ML Engineer</h3>
                    <p>
                      Develop AI algorithms and models for a wide variety of
                      applications. Implement AI techniques such as computer
                      vision, natural language processing, machine learning, and
                      deep learning. TensorFlow and Scikit-learn for AI
                      development.
                    </p>
                    <div className="bookmarks">
                      <ul>
                        <li>
                          <a href="https://t.me/olan_baker">
                            <img
                              src="https://xai.gd/assets//img/telegram-gray.svg"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/olan_baker">
                            <img
                              src="https://xai.gd/assets//img/twitter-gray.svg"
                              alt=""
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="team">
                  <div className="team-image">
                    <img src="https://xai.gd/assets//img/enrique.png" alt="" />
                  </div>
                  <div className="team-text">
                    <h2>Enrique Somchai สมชาย</h2>
                    <h3>Senior DevOps Engineer</h3>
                    <p>
                      Maintain Infrastructure-as-Code (IAC) solutions using
                      tools such as Terraform, CloudFormation, and Ansible for
                      configuration management. Well versed with Python, Bash,
                      Ansible, Chef, Prometheus, Nodejs.
                    </p>
                    <div className="bookmarks">
                      <ul>
                        <li>
                          <a href="https://t.me/enrique_somchai">
                            <img
                              src="https://xai.gd/assets//img/telegram-gray.svg"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/enrique_somchai">
                            <img
                              src="https://xai.gd/assets//img/twitter-gray.svg"
                              alt=""
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="team">
                  <div className="team-image">
                    <img
                      src="https://xai.gd/assets//img/chris_ryan.jpg"
                      alt=""
                    />
                  </div>
                  <div className="team-text">
                    <h2>Chris Ryan</h2>
                    <h3>Data Engineer</h3>
                    <p>
                      Managing data architecture, developing data pipelines, and
                      building models to support data-driven decision-making.
                      Creating databases, developing ETL processes, and
                      developing data models to support different use cases.
                    </p>
                    <div className="bookmarks">
                      <ul>
                        <li>
                          <a href="https://t.me/chris_ryan_bnb">
                            <img
                              src="https://xai.gd/assets//img/telegram-gray.svg"
                              alt=""
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="team">
                  <div className="team-image">
                    <img src="https://xai.gd/assets//img/matthewg.png" alt="" />
                  </div>
                  <div className="team-text">
                    <h2>Matthew</h2>
                    <h3>Python Engineer</h3>
                    <p>
                      Develop automated testing suites for Python systems and
                      services, test and debug Python software development
                      project. Christian also develop custom software components
                      and libraries for Python-based AI application, ensure
                      software and code standards.
                    </p>
                    <div className="bookmarks">
                      <ul>
                        <li>
                          <a href="https://t.me/matthewgreat">
                            <img
                              src="https://xai.gd/assets//img/telegram-gray.svg"
                              alt=""
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="team">
                  <div className="team-image">
                    <img
                      src="https://xai.gd/assets//img/javier_hawkins.png"
                      alt=""
                    />
                  </div>
                  <div className="team-text">
                    <h2>Javier Hawkins</h2>
                    <h3>DevRel</h3>
                    <p>
                      To create relationships with developers to better
                      understand their needs, increase user engagement, and
                      support more efficient continuous delivery processes.
                      Initiating and implementing protocols, regulations, and
                      documentation that support successful adoption by
                      developers
                    </p>
                    <div className="bookmarks">
                      <ul>
                        <li>
                          <a href="https://twitter.com/javierXhawkins">
                            <img
                              src="https://xai.gd/assets//img/twitter-gray.svg"
                              alt=""
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-area integration">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="integration-title wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <h2>News &amp; Media</h2>
                </div>

                <div
                  className="integration-list wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="single-integration">
                    <a href="https://coinmarketcap.com/currencies/xai-token/">
                      <img
                        src="https://xai.gd/assets//img/coinmarketcap-1.svg"
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <span>CoinMarketCap</span>
                    </a>
                  </div>

                  <div className="single-integration">
                    <a href="https://www.coingecko.com/en/coins/xai-3">
                      <img
                        src="https://xai.gd/assets//img/CoinGecko_logo.png"
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <span>Coingecko</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <div className="row">
              <div className="col-md-12">
                <div
                  className="integration-title wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <h2>Tech Stacks</h2>
                  <p>
                    Deep learning, data processing tools, components we are
                    using.
                  </p>
                </div>
                <div
                  className="integration-list wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="single-integration">
                    <a href="https://keras.io/">
                      <img src="https://xai.gd/assets//img/keras.png" alt="" />
                      <span>Keras</span>
                    </a>
                  </div>

                  <div className="single-integration">
                    <a href="https://numpy.org/">
                      <img src="https://xai.gd/assets//img/numpy.svg" alt="" />
                      <span>NumPy</span>
                    </a>
                  </div>

                  <div className="single-integration">
                    <a href="https://www.tensorflow.org/">
                      <img
                        src="https://xai.gd/assets//img/tensorflow-icon.svg"
                        alt=""
                      />
                      <span>TensorFlow</span>
                    </a>
                  </div>

                  <div className="single-integration">
                    <a href="https://scikit-learn.org/">
                      <img
                        src="https://xai.gd/assets//img/Scikit_learn_logo_small.svg"
                        alt=""
                      />
                      <span>Scikit-learn</span>
                    </a>
                  </div>

                  <div className="single-integration">
                    <a href="https://www.mongodb.com">
                      <img
                        src="https://xai.gd/assets//img/MongoDB.png"
                        alt=""
                      />
                      <span>MongoDB</span>
                    </a>
                  </div>

                  <div className="single-integration">
                    <a href="https://www.nltk.org/">
                      <img src="https://xai.gd/assets//img/nltk.webp" alt="" />
                      <span>Natural Language ToolKit</span>
                    </a>
                  </div>

                  <div className="single-integration">
                    <a href="https://matplotlib.org/">
                      <img
                        src="https://xai.gd/assets//img/matplotlib.png"
                        alt=""
                      />
                      <span>Matplotlib</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <hr />
          </div>
        </div>
        <div className="footer-area bg-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-lg-3">
                <div
                  className="single-widget wow fadeInUp"
                  data-wow-delay=".2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInUp",
                  }}
                >
                  <img
                    className="mb-5"
                    src="https://xai.gd/assets/img/logo_top.png"
                    alt=""
                  />
                  <h2>
                    xAI - The science of making machines that can think like
                    humans.
                  </h2>
                </div>
              </div>
              <div className="col-md-4 col-lg-2">
                <div
                  className="single-widget wow fadeInUp"
                  data-wow-delay=".5s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.5s",
                    animationName: "fadeInUp",
                  }}
                >
                  <h2>Quick Links</h2>
                  <ul>
                    <li>
                      <a href="https://xai.gd">Home</a>
                    </li>
                    <li>
                      <a href="https://doc.xai.gd">Documentation</a>
                    </li>
                    <li>
                      <a href="https://doc.xai.gd/x-ai-overview/the-concept">
                        About xAI
                      </a>
                    </li>
                    <li>
                      <a href="https://doc.xai.gd/x-ai-overview/x-ai-utilities">
                        Tech
                      </a>
                    </li>
                    <li>
                      <a href="https://doc.xai.gd/x-ai-overview/roadmap">
                        Roadmap
                      </a>
                    </li>
                    <li>
                      <a href="https://doc.xai.gd/x-ai-overview/join-our-team">
                        Career
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-lg-2">
                <div
                  className="single-widget wow fadeInUp"
                  data-wow-delay=".7s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.7s",
                    animationName: "fadeInUp",
                  }}
                >
                  <h2>Legal</h2>
                  <ul>
                    <li>
                      <a href="https://doc.xai.gd/legal/disclaimer">
                        Disclaimer
                      </a>
                    </li>
                    <li>
                      <a href="https://doc.xai.gd/legal/privacy-policy">
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-12 col-lg-5">
                <div
                  className="single-widget wow fadeInUp"
                  data-wow-delay="1s"
                  style={{
                    visibility: "visible",
                    animationDelay: "1s",
                    animationName: "fadeInUp",
                  }}
                >
                  <h2>
                    <strong>Contact us</strong>
                  </h2>
                  <p>hello@xai.gd</p>

                  <div className="social-box">
                    <ul>
                      <li>
                        <a href="https://t.me/xai_international">
                          <img
                            src="https://xai.gd/assets/img/telegram.svg"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/xai_gd">
                          <img
                            src="https://xai.gd/assets/img/twitter.svg"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://medium.com/@xai_gd">
                          <img
                            src="https://xai.gd/assets/img/medium.svg"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/xaigd">
                          <img
                            src="https://xai.gd/assets/img/github.svg"
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div
                  className="copyright wow fadeInUp"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInUp",
                  }}
                >
                  © All rights reserved by XAI.GD
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Home;

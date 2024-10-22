import Link from "next/link"

export default function blogGrid() {
  return (
    <section className="section home-blog">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-between mb-12">
            <div className="text-6xl lg:text-5xl h2 mb-0">
              Blog
            </div>
            <Link href="/blog/" className=" text-5xl lg:text-4xl link link-middle m-0">
              All news +
            </Link>
          </div>
        </div>
        <div className="row g-4" data-wow-delay=".5s" data-wow-duration="2.5s">
          <div className="col-12 col-sm-6 col-md-4">
            <div className="home-blog__card d-flex flex-column">
              <div className="home-blog__img-wrapper">
                {/* <picture>
                  <source
                    data-srcset="https://logitydispatch.com/wp-content/uploads/2024/10/667deadd-fd26-4ff6-925a-950f162602bd.webp"
                    type="image/webp"
                  />
                  <source
                    data-srcset="https://logitydispatch.com/wp-content/uploads/2024/10/667deadd-fd26-4ff6-925a-950f162602bd.webp"
                    type="image/jpeg"
                  />
                  <img
                    class="home-blog__img lazyload"
                    data-src="https://logitydispatch.com/wp-content/uploads/2024/10/667deadd-fd26-4ff6-925a-950f162602bd.webp"
                    alt
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    style="
                      --smush-placeholder-width: 1792px;
                      --smush-placeholder-aspect-ratio: 1792/1024;
                    "
                  /><noscript
                    ><img
                      class="home-blog__img"
                      src="../wp-content/uploads/2024/10/667deadd-fd26-4ff6-925a-950f162602bd.webp"
                      alt=""
                  /></noscript>
                </picture> */}
                <div className="home-blog__img-overlay">&nbsp;</div>
              </div>
              <div className="home-blog__card-top">
                <div className="home-blog__card-title h4">
                  A Guide to Owner-operator Lease Agreements
                </div>
                <div className="home-blog__date">10/02/2024</div>
              </div>
              <button
                aria-label="read-more-button"
                className="btn d-flex justify-content-between home-blog__btn"
              >
                <span>Read more</span>
                <svg>
                  <use xlinkHref="#arrow-right" />
                </svg>
              </button>
              <a href="../blog/a-guide-to-owner-operator-lease-agreements/index.html">
                &nbsp;
              </a>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="home-blog__card d-flex flex-column">
              <div className="home-blog__img-wrapper">
                {/* <picture>
                  <source
                    data-srcset="https://logitydispatch.com/wp-content/uploads/2024/09/34-hour-reset.webp"
                    type="image/webp"
                  />
                  <source
                    data-srcset="https://logitydispatch.com/wp-content/uploads/2024/09/34-hour-reset.webp"
                    type="image/jpeg"
                  />
                  <img
                    class="home-blog__img lazyload"
                    data-src="https://logitydispatch.com/wp-content/uploads/2024/09/34-hour-reset.webp"
                    alt
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    style="
                      --smush-placeholder-width: 1792px;
                      --smush-placeholder-aspect-ratio: 1792/1024;
                    "
                  /><noscript
                    ><img
                      class="home-blog__img"
                      src="../wp-content/uploads/2024/09/34-hour-reset.webp"
                      alt=""
                  /></noscript>
                </picture> */}
                <div className="home-blog__img-overlay">&nbsp;</div>
              </div>
              <div className="home-blog__card-top">
                <div className="home-blog__card-title h4">
                  34-Hour Reset: Rules, Benefits, and Common Misconceptions
                </div>
                <div className="home-blog__date">09/25/2024</div>
              </div>
              <button
                aria-label="read-more-button"
                className="btn d-flex justify-content-between home-blog__btn"
              >
                <span>Read more</span>
                <svg>
                  <use xlinkHref="#arrow-right" />
                </svg>
              </button>
              <a href="../blog/34-hour-reset-rules-benefits-and-common-misconceptions/index.html">
                &nbsp;
              </a>
            </div>
          </div>
        </div>
        <div
          className="row d-lg-none"
          style={{ textAlign: "center", marginTop: "4rem" }}
        >
          <a href="../blog/index.html" className="link link-middle">
            All news
          </a>
        </div>
      </div>
    </section>
  )
}

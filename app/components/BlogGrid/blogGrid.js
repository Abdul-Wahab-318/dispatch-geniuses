import Link from "next/link"

export default function BlogGrid() {
  return (
    <section className="section-lg home-blog">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-between">
            <div className="h2 wow animate__animated animate__fadeInLeft">
              Blog <Link href="blog/index.html" />
            </div>
            <Link
              href="blog/index.html"
              className="link link-middle wow animate__animated animate__fadeInRight"
            >
              All news {"  "} +
            </Link>
          </div>
        </div>
        <div
          className="row g-4 wow animate__animated animate__fadeIn"
          data-wow-delay=".5s"
          data-wow-duration="2.5s"
        >
          <div className="col-12 col-sm-6 col-md-4">
            <div className="home-blog__card d-flex flex-column">
              <div className="home-blog__img-wrapper">
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
              <Link href="blog/a-guide-to-owner-operator-lease-agreements/index.html">
                &nbsp;
              </Link>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="home-blog__card d-flex flex-column">
              <div className="home-blog__img-wrapper">
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
              <Link href="blog/34-hour-reset-rules-benefits-and-common-misconceptions/index.html">
                &nbsp;
              </Link>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="home-blog__card d-flex flex-column">
              <div className="home-blog__img-wrapper">
                <div className="home-blog__img-overlay">&nbsp;</div>
              </div>
              <div className="home-blog__card-top">
                <div className="home-blog__card-title h4">
                  What is Personal Conveyance in Trucking? A Complete Guide
                </div>
                <div className="home-blog__date">09/20/2024</div>
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
              <Link href="blog/what-is-personal-conveyance/index.html">&nbsp;</Link>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="home-blog__card d-flex flex-column">
              <div className="home-blog__img-wrapper">
                <div className="home-blog__img-overlay">&nbsp;</div>
              </div>
              <div className="home-blog__card-top">
                <div className="home-blog__card-title h4">
                  Complete CSA Points Guide: What You Need to Know
                </div>
                <div className="home-blog__date">09/17/2024</div>
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
              <Link href="blog/complete-csa-points-guide-what-you-need-to-know/index.html">
                &nbsp;
              </Link>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="home-blog__card d-flex flex-column">
              <div className="home-blog__img-wrapper">
                <div className="home-blog__img-overlay">&nbsp;</div>
              </div>
              <div className="home-blog__card-top">
                <div className="home-blog__card-title h4">
                  DOT Tire Tread Depth Regulations
                </div>
                <div className="home-blog__date">09/12/2024</div>
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
              <Link href="blog/dot-tire-tread-depth-regulations/index.html">
                &nbsp;
              </Link>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="home-blog__card d-flex flex-column">
              <div className="home-blog__img-wrapper">
                <div className="home-blog__img-overlay">&nbsp;</div>
              </div>
              <div className="home-blog__card-top">
                <div className="home-blog__card-title h4">
                  What Is a DAC Report and How Can It Affect Your Driving
                  Record?
                </div>
                <div className="home-blog__date">09/09/2024</div>
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
              <Link href="blog/what-is-a-dac-report-and-how-can-it-affect-your-driving-record/index.html">
                &nbsp;
              </Link>
            </div>
          </div>
        </div>
        <div
          className="row d-lg-none"
          style={{ textAlign: "center", marginTop: "4rem" }}
        >
          <Link
            href="blog/index.html"
            className="link link-middle wow animate__animated animate__fadeInRight"
          >
            All news
          </Link>
        </div>
      </div>
    </section>
  )
}

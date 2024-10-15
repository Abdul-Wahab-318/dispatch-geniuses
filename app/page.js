import Image from "next/image"

export default function Home() {
  return (
    <div className="home page-template page-template-index page-template-index-php page page-id-40">
      <div className="main-wrapper">
        <nav className="navbar navbar-expand-xl fixed-top">
          <div className="container-fluid container-xl p-0 navbar__inner">
            <div className="navbar-brand">
              <a href="index.html">
                <Image
                  src={"/images/logos/logo-white.png"}
                  width={80}
                  height={80}
                />
              </a>
            </div>
            <div className="d-xl-none navbar__phone-onmobile">
              <a href="tel:3024259299"> (302) 425 92 99</a>
            </div>
            <button
              className="navbar-toggler menu-toggle"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <svg width={100} height={100} viewBox="0 0 100 100">
                <path
                  className="menu-toggle__line menu-toggle__line--line1"
                  d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                />
                <path
                  className="menu-toggle__line menu-toggle__line--line2"
                  d="M 20,50 H 80"
                />
                <path
                  className="menu-toggle__line menu-toggle__line--line3"
                  d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                />
              </svg>
            </button>
            <div className=" navbar-collapse" id="navbarSupportedContent">
              <ul
                id="menu-header-menu"
                className="navbar-nav mb-2 mb-lg-0 justify-content-between"
                itemScope=""
                itemType="http://www.schema.org/SiteNavigationElement"
              >
                <li
                  id="menu-item-314"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown menu-item-314 nav-item"
                >
                  <a
                    href="about/index.html"
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="dropdown-toggle nav-link"
                    id="menu-item-dropdown-314"
                    data-target="#menu-item-dropdown-314"
                  >
                    <span itemProp="name">About</span>
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="menu-item-dropdown-314"
                  >
                    <li
                      id="menu-item-443"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-443 nav-item"
                    >
                      <a
                        itemProp="url"
                        href="careers/index.html"
                        className="dropdown-item"
                      >
                        <span itemProp="name">Careers</span>
                      </a>
                    </li>
                    <li
                      id="menu-item-442"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-442 nav-item"
                    >
                      <a
                        itemProp="url"
                        href="projects/index.html"
                        className="dropdown-item"
                      >
                        <span itemProp="name">Success Stories</span>
                      </a>
                    </li>
                    <li
                      id="menu-item-312"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-312 nav-item"
                    >
                      <a
                        itemProp="url"
                        href="testimonials/index.html"
                        className="dropdown-item"
                      >
                        <span itemProp="name">Testimonials</span>
                      </a>
                    </li>
                    <li
                      id="menu-item-1676"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1676 nav-item"
                    >
                      <a
                        itemProp="url"
                        href="referral-program/index.html"
                        className="dropdown-item"
                      >
                        <span itemProp="name">
                          Earn Rewards with Our Referral Program
                        </span>
                      </a>
                    </li>
                    <li
                      id="menu-item-444"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-444 nav-item"
                    >
                      <a
                        itemProp="url"
                        href="blog/index.html"
                        className="dropdown-item"
                      >
                        <span itemProp="name">Blog</span>
                      </a>
                    </li>
                    <li
                      id="menu-item-1786"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1786 nav-item"
                    >
                      <a
                        itemProp="url"
                        href="videos/index.html"
                        className="dropdown-item"
                      >
                        <span itemProp="name">Videos</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  id="menu-item-313"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown menu-item-313 nav-item"
                >
                  <a
                    href="services/index.html"
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="dropdown-toggle nav-link"
                    id="menu-item-dropdown-313"
                    data-target="#menu-item-dropdown-313"
                  >
                    <span itemProp="name">Services</span>
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="menu-item-dropdown-313"
                  >
                    <li
                      id="menu-item-435"
                      className="menu-item menu-item-type-post_type menu-item-object-services menu-item-435 nav-item"
                    >
                      <a
                        itemProp="url"
                        href="services/dispatching/index.html"
                        className="dropdown-item"
                      >
                        <span itemProp="name">Truck Dispatching</span>
                      </a>
                    </li>
                    <li
                      id="menu-item-434"
                      className="menu-item menu-item-type-post_type menu-item-object-services menu-item-434 nav-item"
                    >
                      <a
                        itemProp="url"
                        href="services/billing/index.html"
                        className="dropdown-item"
                      >
                        <span itemProp="name">Billing</span>
                      </a>
                    </li>
                    <li
                      id="menu-item-432"
                      className="menu-item menu-item-type-post_type menu-item-object-services menu-item-432 nav-item"
                    >
                      <a
                        itemProp="url"
                        href="services/document-management-paperwork/index.html"
                        className="dropdown-item"
                      >
                        <span itemProp="name">Document Management</span>
                      </a>
                    </li>
                    <li
                      id="menu-item-398"
                      className="menu-item menu-item-type-post_type menu-item-object-services menu-item-398 nav-item"
                    >
                      <a
                        itemProp="url"
                        href="services/factoring-service/index.html"
                        className="dropdown-item"
                      >
                        <span itemProp="name">Factoring Service</span>
                      </a>
                    </li>
                    <li
                      id="menu-item-397"
                      className="menu-item menu-item-type-post_type menu-item-object-services menu-item-397 nav-item"
                    >
                      <a
                        itemProp="url"
                        href="services/rate-negotiation/index.html"
                        className="dropdown-item"
                      >
                        <span itemProp="name">Rate Negotiation</span>
                      </a>
                    </li>
                    <li
                      id="menu-item-399"
                      className="menu-item menu-item-type-post_type menu-item-object-services menu-item-399 nav-item"
                    >
                      <a
                        itemProp="url"
                        href="services/safety-dot-compliance/index.html"
                        className="dropdown-item"
                      >
                        <span itemProp="name">SAFETY &amp; DOT compliance</span>
                      </a>
                    </li>
                    <li
                      id="menu-item-433"
                      className="menu-item menu-item-type-post_type menu-item-object-services menu-item-433 nav-item"
                    >
                      <a
                        itemProp="url"
                        href="services/ifta/index.html"
                        className="dropdown-item"
                      >
                        <span itemProp="name">IFTA Reporting</span>
                      </a>
                    </li>
                    <li
                      id="menu-item-534"
                      className="menu-item menu-item-type-post_type menu-item-object-services menu-item-534 nav-item"
                    >
                      <a
                        itemProp="url"
                        href="services/company-formation/index.html"
                        className="dropdown-item"
                      >
                        <span itemProp="name">Company Formation</span>
                      </a>
                    </li>
                    <li
                      id="menu-item-1201"
                      className="menu-item menu-item-type-post_type menu-item-object-services menu-item-1201 nav-item"
                    >
                      <a
                        itemProp="url"
                        href="services/trucking-invoice-service/index.html"
                        className="dropdown-item"
                      >
                        <span itemProp="name">Trucking Invoice Service</span>
                      </a>
                    </li>
                    <li
                      id="menu-item-1200"
                      className="menu-item menu-item-type-post_type menu-item-object-services menu-item-1200 nav-item"
                    >
                      <a
                        itemProp="url"
                        href="services/truck-document-management/index.html"
                        className="dropdown-item"
                      >
                        <span itemProp="name">Truck Document Management</span>
                      </a>
                    </li>
                    <li
                      id="menu-item-1199"
                      className="menu-item menu-item-type-post_type menu-item-object-services menu-item-1199 nav-item"
                    >
                      <a
                        itemProp="url"
                        href="services/trucking-document-dispatch-service/index.html"
                        className="dropdown-item"
                      >
                        <span itemProp="name">
                          Trucking Document Dispatch Service
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  id="menu-item-310"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown menu-item-310 nav-item"
                >
                  <a
                    href="trucks/index.html"
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="dropdown-toggle nav-link"
                    id="menu-item-dropdown-310"
                    data-target="#menu-item-dropdown-310"
                  >
                    <span itemProp="name">Truck types</span>
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="menu-item-dropdown-310"
                  >
                    <li
                      id="menu-item-441"
                      className="menu-item menu-item-type-post_type menu-item-object-trucks menu-item-441 nav-item"
                    >
                      <a
                        itemProp="url"
                        href="trucks/dry-van/index.html"
                        className="dropdown-item"
                      >
                        <span itemProp="name">Dry Van</span>
                      </a>
                    </li>
                    <li
                      id="menu-item-440"
                      className="menu-item menu-item-type-post_type menu-item-object-trucks menu-item-440 nav-item"
                    >
                      <a
                        itemProp="url"
                        href="trucks/step-deck/index.html"
                        className="dropdown-item"
                      >
                        <span itemProp="name">Step Deck</span>
                      </a>
                    </li>
                    <li
                      id="menu-item-439"
                      className="menu-item menu-item-type-post_type menu-item-object-trucks menu-item-439 nav-item"
                    >
                      <a
                        itemProp="url"
                        href="trucks/reefer/index.html"
                        className="dropdown-item"
                      >
                        <span itemProp="name">Reefer</span>
                      </a>
                    </li>
                    <li
                      id="menu-item-438"
                      className="menu-item menu-item-type-post_type menu-item-object-trucks menu-item-438 nav-item"
                    >
                      <a
                        itemProp="url"
                        href="trucks/flatbed/index.html"
                        className="dropdown-item"
                      >
                        <span itemProp="name">Flatbed</span>
                      </a>
                    </li>
                    <li
                      id="menu-item-825"
                      className="menu-item menu-item-type-post_type menu-item-object-trucks menu-item-825 nav-item"
                    >
                      <a
                        itemProp="url"
                        href="trucks/power-only-dispatch/index.html"
                        className="dropdown-item"
                      >
                        <span itemProp="name">Power Only</span>
                      </a>
                    </li>
                    <li
                      id="menu-item-1063"
                      className="menu-item menu-item-type-post_type menu-item-object-trucks menu-item-1063 nav-item"
                    >
                      <a
                        itemProp="url"
                        href="trucks/hotshot/index.html"
                        className="dropdown-item"
                      >
                        <span itemProp="name">Hotshot</span>
                      </a>
                    </li>
                    <li
                      id="menu-item-1204"
                      className="menu-item menu-item-type-post_type menu-item-object-trucks menu-item-1204 nav-item"
                    >
                      <a
                        itemProp="url"
                        href="trucks/boxtruck/index.html"
                        className="dropdown-item"
                      >
                        <span itemProp="name">Boxtruck</span>
                      </a>
                    </li>
                    <li
                      id="menu-item-1871"
                      className="menu-item menu-item-type-post_type menu-item-object-trucks menu-item-1871 nav-item"
                    >
                      <a
                        itemProp="url"
                        href="trucks/straight-truck/index.html"
                        className="dropdown-item"
                      >
                        <span itemProp="name">Straight Truck</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  id="menu-item-311"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-311 nav-item"
                >
                  <a
                    itemProp="url"
                    href="how-to-start/index.html"
                    className="nav-link"
                  >
                    <span itemProp="name">How to start</span>
                  </a>
                </li>
                <li
                  id="menu-item-1603"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1603 nav-item"
                >
                  <a
                    itemProp="url"
                    href="for-shippers-and-brokers/index.html"
                    className="nav-link"
                  >
                    <span itemProp="name">Shippers</span>
                  </a>
                </li>
                <li
                  id="menu-item-309"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-309 nav-item"
                >
                  <a itemProp="url" href="faq/index.html" className="nav-link">
                    <span itemProp="name">FAQ</span>
                  </a>
                </li>
                <li
                  id="menu-item-308"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-308 nav-item"
                >
                  <a
                    itemProp="url"
                    href="contact-us/index.html"
                    className="nav-link"
                  >
                    <span itemProp="name">Contact us</span>
                  </a>
                </li>
              </ul>
              <div className="nav-item__wrapper">
                <div className="nav-item">
                  <a
                    className="nav-link btn-danger navbar__btn rounded-lg text-3xl"
                    href="tel:3024259299"
                  >
                    (302) 425 92 99
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="home">
          <section className="home-header">
            {/* <picture>
              <source
                srcset="
                  https://logitydispatch.com/wp-content/uploads/2020/10/home-header-bg.webp
                "
                type="image/webp"
              />
              <source
                srcset="
                  https://logitydispatch.com/wp-content/uploads/2020/10/home-header-bg.jpg
                "
                type="image/jpeg"
              />
              <img
                fetchpriority="high"
                class="bg"
                src="wp-content/uploads/2020/10/home-header-bg.jpg"
                alt="Logity dispatch"
              />
            </picture> */}
            <Image src={'/images/home-header-bg.jpg'} className="bg" width={1800} height={1800} />
            <div className="container home-header__inner">
              <div className="row align-center">
                <div className="col-12 col-md-6">
                  <div className="row">
                    <h1 className="h1 home-header__title archivo">
                      <span className="archivo font-bold text-[95px] tracking-wide">Freight</span>
                      <span className="archivo font-bold text-[95px] tracking-wide">Dispatch</span>
                      <span className="archivo font-bold text-[95px] tracking-wide">Service</span>
                    </h1>
                  </div>
                  <div className="row home-header__bottom">
                    <div className="col-12 d-sm-flex">
                      <a
                        href="tel:3024259299"
                        className="btn btn-lg btn-danger rounded-lg flex gap-3 items-center"
                      >
                      <Image src={'/images/icons/phone.png'} width={24} height={24} />
                        (302) 425 92 99
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form rounded-lg">
                    <div className="form__title h4 text-5xl">
                      Contact us for free setup
                    </div>
                    <div
                      className="wpcf7 no-js"
                      id="wpcf7-f88-o1"
                      lang="en-US"
                      dir="ltr"
                    >
                      <div className="screen-reader-response">
                        <p
                          role="status"
                          aria-live="polite"
                          aria-atomic="true"
                        />
                        <ul />
                      </div>
                      <form
                        action="https://logitydispatch.com/#wpcf7-f88-o1"
                        method="post"
                        className="wpcf7-form init"
                        aria-label="Contact form"
                        noValidate="novalidate"
                        data-status="init"
                      >
                        <div style={{ display: "none" }}>
                          <input
                            type="hidden"
                            name="_wpcf7"
                            defaultValue={88}
                          />
                          <input
                            type="hidden"
                            name="_wpcf7_version"
                            defaultValue="5.9.8"
                          />
                          <input
                            type="hidden"
                            name="_wpcf7_locale"
                            defaultValue="en_US"
                          />
                          <input
                            type="hidden"
                            name="_wpcf7_unit_tag"
                            defaultValue="wpcf7-f88-o1"
                          />
                          <input
                            type="hidden"
                            name="_wpcf7_container_post"
                            defaultValue={0}
                          />
                          <input
                            type="hidden"
                            name="_wpcf7_posted_data_hash"
                            defaultValue=""
                          />
                          <input
                            type="hidden"
                            name="_wpcf7_recaptcha_response"
                            defaultValue=""
                          />
                        </div>
                        <input
                          className="wpcf7-form-control wpcf7-hidden"
                          defaultValue="main form"
                          type="hidden"
                          name="form"
                        />
                        <input
                          className="wpcf7-form-control wpcf7-hidden"
                          defaultValue="logitydispatch"
                          type="hidden"
                          name="mode"
                        />
                        <input
                          className="wpcf7-form-control wpcf7-hidden"
                          defaultValue=""
                          type="hidden"
                          name="utm"
                        />
                        <span
                          id="wpcf7-66ffeb08e1f43-wrapper"
                          className="wpcf7-form-control-wrap honeypot-966-wrap"
                          style={{
                            display: "none !important",
                            visibility: "hidden !important",
                          }}
                        >
                          <input
                            type="hidden"
                            name="honeypot-966-time-start"
                            defaultValue={1728047880}
                          />
                          <input
                            type="hidden"
                            name="honeypot-966-time-check"
                            defaultValue={2}
                          />
                          <label
                            htmlFor="wpcf7-66ffeb08e1f43-field"
                            className="hp-message"
                          >
                            Please leave this field empty.
                          </label>
                          <input
                            id="wpcf7-66ffeb08e1f43-field"
                            className="wpcf7-form-control wpcf7-text"
                            type="text"
                            name="honeypot-966"
                            defaultValue=""
                            size={40}
                            tabIndex={-1}
                            autoComplete="off"
                          />
                        </span>
                        <input
                          className="wpcf7-form-control wpcf7-hidden"
                          defaultValue=""
                          type="hidden"
                          name="url"
                        />
                        <input
                          className="wpcf7-form-control wpcf7-hidden"
                          defaultValue=""
                          type="hidden"
                          name="googleclientid"
                        />
                        <div className="form__row">
                          <label htmlFor="name" className="form-label p2">
                            Full name
                          </label>
                          <span
                            className="wpcf7-form-control-wrap"
                            data-name="fullname"
                          >
                            <input
                              size={40}
                              maxLength={400}
                              className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control p2"
                              id="name"
                              aria-required="true"
                              aria-invalid="false"
                              defaultValue=""
                              type="text"
                              name="fullname"
                            />
                          </span>
                        </div>
                        <div className="form__row">
                          <label htmlFor="phone" className="form-label p2">
                            Phone number
                          </label>
                          <span
                            className="wpcf7-form-control-wrap"
                            data-name="phone"
                          >
                            <input
                              size={40}
                              maxLength={400}
                              className="wpcf7-form-control wpcf7-tel wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-tel phone form-control p2"
                              id="phone"
                              aria-required="true"
                              aria-invalid="false"
                              placeholder="+1 (___) ___-__-__"
                              defaultValue=""
                              type="tel"
                              name="phone"
                            />
                          </span>
                        </div>
                        <div className="form__row">
                          <label htmlFor="email" className="form-label p2">
                            Email
                          </label>
                          <span
                            className="wpcf7-form-control-wrap"
                            data-name="email"
                          >
                            <input
                              size={40}
                              maxLength={400}
                              className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email form-control p2"
                              id="email"
                              aria-required="true"
                              aria-invalid="false"
                              defaultValue=""
                              type="email"
                              name="email"
                            />
                          </span>
                        </div>
                        <div className="form-check">
                          <span
                            className="wpcf7-form-control-wrap"
                            data-name="consent"
                          >
                            <span className="wpcf7-form-control wpcf7-acceptance">
                              <span className="wpcf7-list-item">
                                <input
                                  type="checkbox"
                                  name="consent"
                                  defaultValue={1}
                                  aria-invalid="false"
                                />
                              </span>
                            </span>
                          </span>
                          <span className="form-check-label p2 mt-[-3px] ">
                            I have read and agree to{"  "}
                            <a href="terms-of-service/index.html">
                              Terms of Service
                            </a>
                          </span>
                        </div>
                        <div className="form-check subscribing">
                          <span
                            className="wpcf7-form-control-wrap"
                            data-name="consent-subscribe"
                          >
                            <span className="wpcf7-form-control wpcf7-acceptance optional ">
                              <span className="wpcf7-list-item">
                                <input
                                  type="checkbox"
                                  name="consent-subscribe"
                                  defaultValue={1}
                                  defaultChecked="checked"
                                  aria-invalid="false"
                                />
                              </span>
                            </span>
                          </span>
                          <span className="form-check-label p2 mt-[-3px] ">
                            I want to receive the most useful tips and news
                          </span>
                        </div>
                        <button className="btn btn-lg btn-danger" type="submit">
                          Send Request
                        </button>
                        <div
                          className="wpcf7-response-output"
                          aria-hidden="true"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div
            id="breadcumbs-hidden"
            className="container breadcrumbs-container"
          >
            <div className="row">
              <div className="col-12">
                <div className="breadcrumbs">
                  <span>
                    <span className="breadcrumb_last" aria-current="page">
                      Home
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <section className="section-lg">
            <div className="container">
              <div className="home-include" />
            </div>
          </section>
          <section className="section-lg home-services">
            <div className="container">
              <div className="row">
                <div className="d-flex justify-content-between">
                  <h2 className="home-services__title wow animate__animated animate__fadeInLeft">
                    Services
                    <br />
                    and pricing <a href="services/index.html" />
                  </h2>
                  <a
                    href="contact-us/index.html"
                    className="home-services__link link link-middle home-get-started__link wow animate__animated animate__fadeInRight shadow-transparent"
                  >
                    From 5%
                    <br />
                    of gross
                  </a>
                </div>
              </div>
              <div
                className="row wow animate__animated animate__fadeIn"
                data-wow-delay=".5s"
                data-wow-duration="2.5s"
              >
                <div className="col-12 col-md-6 home-services__item-wrap">
                  <div className="home-services__item d-flex flex-column justify-content-center">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="home-services__item-left">
                        <div className="home-services__left-txt">
                          <div className="home-services__item-num">01</div>
                          <div className="h4 home-services__item-name">
                            Truck
                            <br />
                            dispatching
                          </div>
                        </div>
                      </div>
                      <div className="home-services__item-right d-flex flex-column justify-content-center align-items-center">
                        <svg className="home-services__icon1">
                          <use xlinkHref="#plus" />
                        </svg>
                      </div>
                    </div>
                    <div className="home-services__item-shape">
                      <svg className="home-services__icon2">
                        <use xlinkHref="#arrow-right" />
                      </svg>
                    </div>
                    <a href="services/dispatching/index.html" />
                  </div>
                </div>
                <div className="col-12 col-md-6 home-services__item-wrap">
                  <div className="home-services__item d-flex flex-column justify-content-center">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="home-services__item-left">
                        <div className="home-services__left-txt">
                          <div className="home-services__item-num">02</div>
                          <div className="h4 home-services__item-name">
                            Billing
                          </div>
                        </div>
                      </div>
                      <div className="home-services__item-right d-flex flex-column justify-content-center align-items-center">
                        <svg className="home-services__icon1">
                          <use xlinkHref="#plus" />
                        </svg>
                      </div>
                    </div>
                    <div className="home-services__item-shape">
                      <svg className="home-services__icon2">
                        <use xlinkHref="#arrow-right" />
                      </svg>
                    </div>
                    <a href="services/billing/index.html" />
                  </div>
                </div>
                <div className="col-12 col-md-6 home-services__item-wrap">
                  <div className="home-services__item d-flex flex-column justify-content-center">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="home-services__item-left">
                        <div className="home-services__left-txt">
                          <div className="home-services__item-num">03</div>
                          <div className="h4 home-services__item-name">
                            Document Management
                            <br />
                            &amp; Paperwork
                          </div>
                        </div>
                      </div>
                      <div className="home-services__item-right d-flex flex-column justify-content-center align-items-center">
                        <svg className="home-services__icon1">
                          <use xlinkHref="#plus" />
                        </svg>
                      </div>
                    </div>
                    <div className="home-services__item-shape">
                      <svg className="home-services__icon2">
                        <use xlinkHref="#arrow-right" />
                      </svg>
                    </div>
                    <a href="services/document-management-paperwork/index.html" />
                  </div>
                </div>
                <div className="col-12 col-md-6 home-services__item-wrap">
                  <div className="home-services__item d-flex flex-column justify-content-center">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="home-services__item-left">
                        <div className="home-services__left-txt">
                          <div className="home-services__item-num">04</div>
                          <div className="h4 home-services__item-name">
                            Factoring service
                          </div>
                        </div>
                      </div>
                      <div className="home-services__item-right d-flex flex-column justify-content-center align-items-center">
                        <svg className="home-services__icon1">
                          <use xlinkHref="#plus" />
                        </svg>
                      </div>
                    </div>
                    <div className="home-services__item-shape">
                      <svg className="home-services__icon2">
                        <use xlinkHref="#arrow-right" />
                      </svg>
                    </div>
                    <a href="services/factoring-service/index.html" />
                  </div>
                </div>
                <div className="col-12 col-md-6 home-services__item-wrap">
                  <div className="home-services__item d-flex flex-column justify-content-center">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="home-services__item-left">
                        <div className="home-services__left-txt">
                          <div className="home-services__item-num">05</div>
                          <div className="h4 home-services__item-name">
                            Rate negotiation
                          </div>
                        </div>
                      </div>
                      <div className="home-services__item-right d-flex flex-column justify-content-center align-items-center">
                        <svg className="home-services__icon1">
                          <use xlinkHref="#plus" />
                        </svg>
                      </div>
                    </div>
                    <div className="home-services__item-shape">
                      <svg className="home-services__icon2">
                        <use xlinkHref="#arrow-right" />
                      </svg>
                    </div>
                    <a href="services/rate-negotiation/index.html" />
                  </div>
                </div>
                <div className="col-12 col-md-6 home-services__item-wrap">
                  <div className="home-services__item d-flex flex-column justify-content-center">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="home-services__item-left">
                        <div className="home-services__left-txt">
                          <div className="home-services__item-num">06</div>
                          <div className="h4 home-services__item-name">
                            SAFETY / DOT compliance
                          </div>
                        </div>
                      </div>
                      <div className="home-services__item-right d-flex flex-column justify-content-center align-items-center">
                        <svg className="home-services__icon1">
                          <use xlinkHref="#plus" />
                        </svg>
                      </div>
                    </div>
                    <div className="home-services__item-shape">
                      <svg className="home-services__icon2">
                        <use xlinkHref="#arrow-right" />
                      </svg>
                    </div>
                    <a href="services/safety-dot-compliance/index.html" />
                  </div>
                </div>
                <div className="col-12 col-md-6 home-services__item-wrap">
                  <div className="home-services__item d-flex flex-column justify-content-center">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="home-services__item-left">
                        <div className="home-services__left-txt">
                          <div className="home-services__item-num">07</div>
                          <div className="h4 home-services__item-name">
                            IFTA
                          </div>
                        </div>
                      </div>
                      <div className="home-services__item-right d-flex flex-column justify-content-center align-items-center">
                        <svg className="home-services__icon1">
                          <use xlinkHref="#plus" />
                        </svg>
                      </div>
                    </div>
                    <div className="home-services__item-shape">
                      <svg className="home-services__icon2">
                        <use xlinkHref="#arrow-right" />
                      </svg>
                    </div>
                    <a href="services/ifta/index.html" />
                  </div>
                </div>
                <div className="col-12 col-md-6 home-services__item-wrap">
                  <div className="home-services__item d-flex flex-column justify-content-center">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="home-services__item-left">
                        <div className="home-services__left-txt">
                          <div className="home-services__item-num">08</div>
                          <div className="h4 home-services__item-name">
                            Company Formation
                          </div>
                        </div>
                      </div>
                      <div className="home-services__item-right d-flex flex-column justify-content-center align-items-center">
                        <svg className="home-services__icon1">
                          <use xlinkHref="#plus" />
                        </svg>
                      </div>
                    </div>
                    <div className="home-services__item-shape">
                      <svg className="home-services__icon2">
                        <use xlinkHref="#arrow-right" />
                      </svg>
                    </div>
                    <a href="services/company-formation/index.html" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <div className="section-lgy section-lg youtube">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="youtube-section__head wow animate__ animate__fadeInLeft h2">
                    What is Dispatch Geniuses?
                  </div>
                </div>
                <div className="col-12">
                  <iframe
                    data-src="https://www.youtube.com/embed/_1liE33WYUY"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen=""
                    style={{ width: "100%" }}
                    width={854}
                    height={480}
                    frameBorder={0}
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    className="lazyload"
                    data-load-mode={1}
                  ></iframe>
                </div>
              </div>
            </div>
          </div> */}
          <section  className="section-lg home-stats">

            <div className="container home-stats__inner">
              <div className="row">
                <div className="col-12">
                  <h2 className="home-stats__title wow animate__animated animate__fadeInLeft text-white">
                    To work
                    <br />
                    not talk <a href="services/index.html" />
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-4 home-stats__item-wrap">
                  <div className="home-stats__item">
                    <div className="home-stats__icon">
                      <Image src={'/images/icons/forklift.png'} width={50} height={50} />
                    </div>
                    <div className="h3 home-stats__num text-white font-extrabold" id="home-stats-num-1">
                      <span className="font-bold text-7xl text-white">1,000 +</span>
                    </div>
                    <div className="h4 home-stats__name text-white font-bold">Loads Booked</div>
                  </div>
                </div>
                <div className="col-12 col-md-4 home-stats__item-wrap">
                  <div className="home-stats__item">
                    <div className="home-stats__icon">
                      <Image src={'/images/icons/money.png'} width={50} height={50} />
                    </div>
                    <div className="h3 home-stats__num" id="home-stats-num-2">
                      <span className="font-bold text-7xl text-white">$7,000 +</span>
                    </div>
                    <div className="h4 home-stats__name font-bold text-white">
                      Average Gross Revenue
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 home-stats__item-wrap">
                  <div className="home-stats__item">
                    <div className="home-stats__icon">
                      <Image src={'/images/icons/cargo.png'} width={50} height={50} />
                    </div>
                    <div className="h3 home-stats__num" id="home-stats-num-3">
                      <span className="text-white font-bold text-7xl">$34,000</span>
                    </div>
                    <div className="h4 home-stats__name text-white font-bold ">
                      Best Month For Box Truck
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            data-wpr-lazyrender={1}
            className="section-lg home-get-started"
          >
            <div className="container">
              <div className="row">
                <div className="d-flex justify-content-between">
                  <h2 className="home-get-started__title wow animate__animated animate__fadeInLeft">
                    How To Get Started <a href="how-to-start/index.html" />
                  </h2>
                  <a
                    href="how-to-start/index.html"
                    className="d-none d-lg-block link link-middle home-get-started__link wow animate__animated animate__fadeInRight"
                  >
                    Read more
                  </a>
                </div>
              </div>
              <div className="row home-get-started__body">
                <div
                  className="col-12 col-lg-6 home-get-started__left wow animate__animated animate__fadeInLeft"
                  data-wow-delay=".5s"
                >
                  <div className="home-get-started__txt">
                    <p>
                      Logity Dispatch's job is to provide the best loads in the
                      market for every driver. Our expert team ensures that
                      drivers from any region and state get high-quality and
                      best-paying loads.
                    </p>
                  </div>
                  <ol className="home-get-started__list">
                    <li>
                      <a href="contact-us/index.html">
                        Fill out the form or call us: (302) 425 92 99
                        <span>
                          <svg className="home-get-started__img1">
                            <use xlinkHref="#plus" />
                          </svg>
                          <svg
                            className="home-get-started__img2"
                            width={10}
                            height={17}
                            viewBox="0 0 10 17"
                            fill="inherit"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.67456 2.00461L6.02371 8.5L0.67456 14.9954L2.32536 17L9.32536 8.5L2.32536 -7.21586e-08L0.67456 2.00461Z"
                              fill="inherit"
                            />
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="how-to-start/index.html">
                        Upload your MC Authority, W9 Form, and Certificate of
                        Insurance
                        <span>
                          <svg className="home-get-started__img1">
                            <use xlinkHref="#plus" />
                          </svg>
                          <svg
                            className="home-get-started__img2"
                            width={10}
                            height={17}
                            viewBox="0 0 10 17"
                            fill="inherit"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.67456 2.00461L6.02371 8.5L0.67456 14.9954L2.32536 17L9.32536 8.5L2.32536 -7.21586e-08L0.67456 2.00461Z"
                              fill="inherit"
                            />
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="how-to-start/index.html">
                        Sign the Dispatch Agreement completed by our team
                        <span>
                          <svg className="home-get-started__img1">
                            <use xlinkHref="#plus" />
                          </svg>
                          <svg
                            className="home-get-started__img2"
                            width={10}
                            height={17}
                            viewBox="0 0 10 17"
                            fill="inherit"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.67456 2.00461L6.02371 8.5L0.67456 14.9954L2.32536 17L9.32536 8.5L2.32536 -7.21586e-08L0.67456 2.00461Z"
                              fill="inherit"
                            />
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="how-to-start/index.html">
                        We are all set. Let’s get to work
                        <span>
                          <svg className="home-get-started__img1">
                            <use xlinkHref="#plus" />
                          </svg>
                          <svg
                            className="home-get-started__img2"
                            width={10}
                            height={17}
                            viewBox="0 0 10 17"
                            fill="inherit"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.67456 2.00461L6.02371 8.5L0.67456 14.9954L2.32536 17L9.32536 8.5L2.32536 -7.21586e-08L0.67456 2.00461Z"
                              fill="inherit"
                            />
                          </svg>
                        </span>
                      </a>
                    </li>
                  </ol>
                  <div className="text-center mb-5 d-lg-none">
                    <a
                      href="how-to-start/index.html"
                      className="link home-get-started__link"
                    >
                      Read more
                    </a>
                  </div>
                </div>
                <div
                  className="col-12 col-lg-6 home-get-started__right wow animate__animated animate__fadeInRight"
                  data-wow-delay=".5s"
                >
                  <div className="form">
                    <div className="form__title h4 text-5xl">
                      Contact us for free setup
                    </div>
                    <div
                      className="wpcf7 no-js"
                      id="wpcf7-f88-o2"
                      lang="en-US"
                      dir="ltr"
                    >
                      <div className="screen-reader-response">
                        <p
                          role="status"
                          aria-live="polite"
                          aria-atomic="true"
                        />
                        <ul />
                      </div>
                      <form
                        action="https://logitydispatch.com/#wpcf7-f88-o2"
                        method="post"
                        className="wpcf7-form init"
                        aria-label="Contact form"
                        noValidate="novalidate"
                        data-status="init"
                      >
                        <div style={{ display: "none" }}>
                          <input
                            type="hidden"
                            name="_wpcf7"
                            defaultValue={88}
                          />
                          <input
                            type="hidden"
                            name="_wpcf7_version"
                            defaultValue="5.9.8"
                          />
                          <input
                            type="hidden"
                            name="_wpcf7_locale"
                            defaultValue="en_US"
                          />
                          <input
                            type="hidden"
                            name="_wpcf7_unit_tag"
                            defaultValue="wpcf7-f88-o2"
                          />
                          <input
                            type="hidden"
                            name="_wpcf7_container_post"
                            defaultValue={0}
                          />
                          <input
                            type="hidden"
                            name="_wpcf7_posted_data_hash"
                            defaultValue=""
                          />
                          <input
                            type="hidden"
                            name="_wpcf7_recaptcha_response"
                            defaultValue=""
                          />
                        </div>
                        <input
                          className="wpcf7-form-control wpcf7-hidden"
                          defaultValue="main form"
                          type="hidden"
                          name="form"
                        />
                        <input
                          className="wpcf7-form-control wpcf7-hidden"
                          defaultValue="logitydispatch"
                          type="hidden"
                          name="mode"
                        />
                        <input
                          className="wpcf7-form-control wpcf7-hidden"
                          defaultValue=""
                          type="hidden"
                          name="utm"
                        />
                        <span
                          id="wpcf7-66ffeb08eec8a-wrapper"
                          className="wpcf7-form-control-wrap honeypot-966-wrap"
                          style={{
                            display: "none !important",
                            visibility: "hidden !important",
                          }}
                        >
                          <input
                            type="hidden"
                            name="honeypot-966-time-start"
                            defaultValue={1728047880}
                          />
                          <input
                            type="hidden"
                            name="honeypot-966-time-check"
                            defaultValue={2}
                          />
                          <label
                            htmlFor="wpcf7-66ffeb08eec8a-field"
                            className="hp-message"
                          >
                            Please leave this field empty.
                          </label>
                          <input
                            id="wpcf7-66ffeb08eec8a-field"
                            className="wpcf7-form-control wpcf7-text"
                            type="text"
                            name="honeypot-966"
                            defaultValue=""
                            size={40}
                            tabIndex={-1}
                            autoComplete="off"
                          />
                        </span>
                        <input
                          className="wpcf7-form-control wpcf7-hidden"
                          defaultValue=""
                          type="hidden"
                          name="url"
                        />
                        <input
                          className="wpcf7-form-control wpcf7-hidden"
                          defaultValue=""
                          type="hidden"
                          name="googleclientid"
                        />
                        <div className="form__row">
                          <label htmlFor="name" className="form-label p2">
                            Full name
                          </label>
                          <span
                            className="wpcf7-form-control-wrap"
                            data-name="fullname"
                          >
                            <input
                              size={40}
                              maxLength={400}
                              className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control p2"
                              aria-required="true"
                              aria-invalid="false"
                              defaultValue=""
                              type="text"
                              name="fullname"
                            />
                          </span>
                        </div>
                        <div className="form__row">
                          <label htmlFor="phone" className="form-label p2">
                            Phone number
                          </label>
                          <span
                            className="wpcf7-form-control-wrap"
                            data-name="phone"
                          >
                            <input
                              size={40}
                              maxLength={400}
                              className="wpcf7-form-control wpcf7-tel wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-tel phone form-control p2"
                              aria-required="true"
                              aria-invalid="false"
                              placeholder="+1 (___) ___-__-__"
                              defaultValue=""
                              type="tel"
                              name="phone"
                            />
                          </span>
                        </div>
                        <div className="form__row">
                          <label htmlFor="email" className="form-label p2">
                            Email
                          </label>
                          <span
                            className="wpcf7-form-control-wrap"
                            data-name="email"
                          >
                            <input
                              size={40}
                              maxLength={400}
                              className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email form-control p2"
                              aria-required="true"
                              aria-invalid="false"
                              defaultValue=""
                              type="email"
                              name="email"
                            />
                          </span>
                        </div>
                        <div className="form-check">
                          <span
                            className="wpcf7-form-control-wrap"
                            data-name="consent"
                          >
                            <span className="wpcf7-form-control wpcf7-acceptance">
                              <span className="wpcf7-list-item">
                                <input
                                  type="checkbox"
                                  name="consent"
                                  defaultValue={1}
                                  aria-invalid="false"
                                />
                              </span>
                            </span>
                          </span>
                          <span className="form-check-label p2">
                            I have read and agree to
                            <a href="terms-of-service/index.html">
                              Terms of Service
                            </a>
                          </span>
                        </div>
                        <div className="form-check subscribing">
                          <span
                            className="wpcf7-form-control-wrap"
                            data-name="consent-subscribe"
                          >
                            <span className="wpcf7-form-control wpcf7-acceptance optional">
                              <span className="wpcf7-list-item">
                                <input
                                  type="checkbox"
                                  name="consent-subscribe"
                                  defaultValue={1}
                                  defaultChecked="checked"
                                  aria-invalid="false"
                                />
                              </span>
                            </span>
                          </span>
                          <span className="form-check-label p2">
                            I want to receive the most useful tips and news
                          </span>
                        </div>
                        <button className="btn btn-lg btn-danger" type="submit">
                          Send Request
                        </button>
                        <div
                          className="wpcf7-response-output"
                          aria-hidden="true"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section data-wpr-lazyrender={1} className="section-lg home-trucks bg-black">
            <div className="container home-trucks__inner">
              <div className="row">
                <div className="col-12">
                  <h2 className="home-trucks__title wow animate__animated animate__fadeInLeft">
                    Who can
                    <br />
                    work with us <a href="trucks/index.html" />
                  </h2>
                </div>
              </div>
              <div
                className="row g-5 wow animate__animated animate__fadeIn"
                data-wow-delay=".5s"
                data-wow-duration="2.5s"
              >
                <div className="col-12 col-sm-2 col-sm-6 col-md-4 home-trucks__card">
                  <div className="home-trucks__card-inner">
                    <div className="home-trucks__card-overlay">&nbsp;</div>
                    <button
                      aria-label="button"
                      className="btn home-trucks__btn"
                    >
                      <span>Dry Van</span>
                      <svg>
                        <use xlinkHref="#arrow-right" />
                      </svg>
                    </button>
                    <a href="trucks/dry-van/index.html">&nbsp;</a>
                  </div>
                </div>
                <div className="col-12 col-sm-2 col-sm-6 col-md-4 home-trucks__card">
                  <div className="home-trucks__card-inner">
                    <div className="home-trucks__card-overlay">&nbsp;</div>
                    <button
                      aria-label="button"
                      className="btn home-trucks__btn"
                    >
                      <span>Step Deck</span>
                      <svg>
                        <use xlinkHref="#arrow-right" />
                      </svg>
                    </button>
                    <a href="trucks/step-deck/index.html">&nbsp;</a>
                  </div>
                </div>
                <div className="col-12 col-sm-2 col-sm-6 col-md-4 home-trucks__card">
                  <div className="home-trucks__card-inner">
                    <div className="home-trucks__card-overlay">&nbsp;</div>
                    <button
                      aria-label="button"
                      className="btn home-trucks__btn"
                    >
                      <span>Reefer</span>
                      <svg>
                        <use xlinkHref="#arrow-right" />
                      </svg>
                    </button>
                    <a href="trucks/reefer/index.html">&nbsp;</a>
                  </div>
                </div>
                <div className="col-12 col-sm-2 col-sm-6 col-md-4 home-trucks__card">
                  <div className="home-trucks__card-inner">
                    <div className="home-trucks__card-overlay">&nbsp;</div>
                    <button
                      aria-label="button"
                      className="btn home-trucks__btn"
                    >
                      <span>Flatbed</span>
                      <svg>
                        <use xlinkHref="#arrow-right" />
                      </svg>
                    </button>
                    <a href="trucks/flatbed/index.html">&nbsp;</a>
                  </div>
                </div>
                <div className="col-12 col-sm-2 col-sm-6 col-md-4 home-trucks__card">
                  <div className="home-trucks__card-inner">
                    <div className="home-trucks__card-overlay">&nbsp;</div>
                    <button
                      aria-label="button"
                      className="btn home-trucks__btn"
                    >
                      <span>Power Only</span>
                      <svg>
                        <use xlinkHref="#arrow-right" />
                      </svg>
                    </button>
                    <a href="trucks/power-only-dispatch/index.html">&nbsp;</a>
                  </div>
                </div>
                <div className="col-12 col-sm-2 col-sm-6 col-md-4 home-trucks__card">
                  <div className="home-trucks__card-inner">
                    <div className="home-trucks__card-overlay">&nbsp;</div>
                    <button
                      aria-label="button"
                      className="btn home-trucks__btn"
                    >
                      <span>Hotshot</span>
                      <svg>
                        <use xlinkHref="#arrow-right" />
                      </svg>
                    </button>
                    <a href="trucks/hotshot/index.html">&nbsp;</a>
                  </div>
                </div>
                <div className="col-12 col-sm-2 col-sm-6 col-md-4 home-trucks__card">
                  <div className="home-trucks__card-inner">
                    <div className="home-trucks__card-overlay">&nbsp;</div>
                    <button
                      aria-label="button"
                      className="btn home-trucks__btn"
                    >
                      <span>Boxtruck</span>
                      <svg>
                        <use xlinkHref="#arrow-right" />
                      </svg>
                    </button>
                    <a href="trucks/boxtruck/index.html">&nbsp;</a>
                  </div>
                </div>
                <div className="col-12 col-sm-2 col-sm-6 col-md-4 home-trucks__card">
                  <div className="home-trucks__card-inner">
                    <div className="home-trucks__card-overlay">&nbsp;</div>
                    <button
                      aria-label="button"
                      className="btn home-trucks__btn"
                    >
                      <span>Straight Truck</span>
                      <svg>
                        <use xlinkHref="#arrow-right" />
                      </svg>
                    </button>
                    <a href="trucks/straight-truck/index.html">&nbsp;</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section data-wpr-lazyrender={1} className="section-lg">
            <div className="container">
              <div className="home-advantages" />
            </div>
          </section>
          <section
            data-wpr-lazyrender={1}
            className="section-lg home-testimonials"
          >
            <div className="container">
              <div className="row">
                <div className="d-flex justify-content-between">
                  <div className="h2 wow animate__animated animate__fadeInLeft">
                    Testimonials <a href="testimonials/index.html" />
                  </div>
                  <a
                    className="link link-middle d-none d-lg-block wow animate__animated animate__fadeInRight"
                    href="testimonials/index.html"
                  >
                    All testimonials
                  </a>
                </div>
              </div>
              <div
                className="row wow animate__animated animate__fadeIn"
                data-wow-delay=".7s"
                data-wow-duration="2.5s"
              >
                <div className="col-12">
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div
                        className="carousel-item active"
                        data-interval={3000}
                      >
                        <div className="home-testimonials__slide d-md-flex">
                          <div className="home-testimonials__left"></div>
                          <div className="home-testimonials__right">
                            <div className="h3 home-testimonials__title">
                              Mike Sountris
                            </div>
                            <div className="p2 home-testimonials__subtitle">
                              M&amp;L Transport LLC, MC # 25167
                            </div>
                            <p>
                              Logity Dispatch is Awesome-
                              <br />
                              This company is everything a truck driver should
                              expect from a dispatch company. They negotiate
                              with the brokers to get great rates, they call you
                              to offer loads for the next day and they handle
                              getting revised rate confirmation for detention
                              pay &amp; lay overs. I'm glad to have them working
                              for our company!
                            </p>
                            <div className="home-testimonials__decor">
                              <svg>
                                <use xlinkHref="#home-testimonials-decor" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item" data-interval={3000}>
                        <div className="home-testimonials__slide d-md-flex">
                          <div className="home-testimonials__left"></div>
                          <div className="home-testimonials__right">
                            <div className="h3 home-testimonials__title">
                              Jay Sanders
                            </div>
                            <div className="p2 home-testimonials__subtitle">
                              Drive Logistics, MC # 1106770
                            </div>
                            <p>
                              Place my trucking business in Logity Dispatch's
                              hands and haven't needed another dispatcher since.
                              Outstanding Communication, very knowledgeable of
                              the business, and they don't break the bank on
                              percentage. Worth way more than other companies
                              charging 10+ percent. Thank you, guys.
                            </p>
                            <div className="home-testimonials__decor">
                              <svg>
                                <use xlinkHref="#home-testimonials-decor" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item" data-interval={3000}>
                        <div className="home-testimonials__slide d-md-flex">
                          <div className="home-testimonials__left"></div>
                          <div className="home-testimonials__right">
                            <div className="h3 home-testimonials__title">
                              Eric Freeman
                            </div>
                            <div className="p2 home-testimonials__subtitle">
                              MC # 104970
                            </div>
                            <p>
                              Logity has been very good for my trucking company,
                              very strong negotiators.
                            </p>
                            <div className="home-testimonials__decor">
                              <svg>
                                <use xlinkHref="#home-testimonials-decor" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item" data-interval={3000}>
                        <div className="home-testimonials__slide d-md-flex">
                          <div className="home-testimonials__left"></div>
                          <div className="home-testimonials__right">
                            <div className="h3 home-testimonials__title">
                              Andrei Chirkov
                            </div>
                            <div className="p2 home-testimonials__subtitle">
                              Trucking Alliance LLC, MC # 125359
                            </div>
                            <p>
                              We have been working with Logity Dispatch for a
                              year now and I have nothing but good things to
                              say. The service these guys provide is awesome and
                              I don't need to waste my time searching for loads,
                              billing and all that stuff. Communication,
                              support, market knowledge are on high level and
                              these guys worth the percentage they charge.
                            </p>
                            <div className="home-testimonials__decor">
                              <svg>
                                <use xlinkHref="#home-testimonials-decor" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="home-testimonials__carousel-bottom">
                      <div className="d-none d-lg-block home-testimonials__l">
                        &nbsp;
                      </div>
                      <div className="home-testimonials__r">
                        <ol className="carousel-indicators">
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to={0}
                            className="active"
                          />
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to={1}
                            className=""
                          />
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to={2}
                            className=""
                          />
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to={3}
                            className=""
                          />
                        </ol>
                        <div className="home-testimonials__carousel-controls">
                          <a
                            className="carousel-control-prev"
                            href="#carouselExampleIndicators"
                            role="button"
                            data-slide="prev"
                          >
                            <svg
                              width={51}
                              height={8}
                              viewBox="0 0 51 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0.646446 3.64644C0.451183 3.8417 0.451183 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.73079 4.34027 7.73079 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82842L1.70711 4L4.53553 1.17157C4.7308 0.976307 4.7308 0.659724 4.53553 0.464462C4.34027 0.2692 4.02369 0.2692 3.82843 0.464462L0.646446 3.64644ZM51 3.5L1 3.5L1 4.5L51 4.5L51 3.5Z"
                                fill="inherit"
                              />
                            </svg>
                          </a>
                          <a
                            className="carousel-control-next"
                            href="#carouselExampleIndicators"
                            role="button"
                            data-slide="next"
                          >
                            <svg
                              width={51}
                              height={8}
                              viewBox="0 0 51 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M50.3536 4.35355C50.5488 4.15829 50.5488 3.8417 50.3536 3.64644L47.1716 0.464462C46.9763 0.2692 46.6597 0.2692 46.4645 0.464462C46.2692 0.659724 46.2692 0.976307 46.4645 1.17157L49.2929 4L46.4645 6.82842C46.2692 7.02369 46.2692 7.34027 46.4645 7.53553C46.6597 7.73079 46.9763 7.73079 47.1716 7.53553L50.3536 4.35355ZM4.37114e-08 4.5L50 4.5L50 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z"
                                fill="inherit"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <a
                  className="link d-block d-lg-none mt-5 text-center"
                  href="testimonials/index.html"
                >
                  All testimonials
                </a>
              </div>
            </div>
          </section>
          <section data-wpr-lazyrender={1} className="section-lg home-blog">
            <div className="container">
              <div className="row">
                <div className="col-12 d-flex justify-content-between">
                  <div className="h2 wow animate__animated animate__fadeInLeft">
                    Blog <a href="blog/index.html" />
                  </div>
                  <a
                    href="blog/index.html"
                    className="link link-middle wow animate__animated animate__fadeInRight"
                  >
                    All news
                  </a>
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
                    <a href="blog/a-guide-to-owner-operator-lease-agreements/index.html">
                      &nbsp;
                    </a>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                  <div className="home-blog__card d-flex flex-column">
                    <div className="home-blog__img-wrapper">
                      <div className="home-blog__img-overlay">&nbsp;</div>
                    </div>
                    <div className="home-blog__card-top">
                      <div className="home-blog__card-title h4">
                        34-Hour Reset: Rules, Benefits, and Common
                        Misconceptions
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
                    <a href="blog/34-hour-reset-rules-benefits-and-common-misconceptions/index.html">
                      &nbsp;
                    </a>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                  <div className="home-blog__card d-flex flex-column">
                    <div className="home-blog__img-wrapper">
                      <div className="home-blog__img-overlay">&nbsp;</div>
                    </div>
                    <div className="home-blog__card-top">
                      <div className="home-blog__card-title h4">
                        What is Personal Conveyance in Trucking? A Complete
                        Guide
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
                    <a href="blog/what-is-personal-conveyance/index.html">
                      &nbsp;
                    </a>
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
                    <a href="blog/complete-csa-points-guide-what-you-need-to-know/index.html">
                      &nbsp;
                    </a>
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
                    <a href="blog/dot-tire-tread-depth-regulations/index.html">
                      &nbsp;
                    </a>
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
                    <a href="blog/what-is-a-dac-report-and-how-can-it-affect-your-driving-record/index.html">
                      &nbsp;
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="row d-lg-none"
                style={{ textAlign: "center", marginTop: "4rem" }}
              >
                <a
                  href="blog/index.html"
                  className="link link-middle wow animate__animated animate__fadeInRight"
                >
                  All news
                </a>
              </div>
            </div>
          </section>
          <section data-wpr-lazyrender={1} className="section-lg">
            <div className="container">
              <p>
                <i>
                  Dear users, our Terms of Service and Privacy Policy (and
                  Privacy Statements incorporated therein, if any) were updated
                  today, on December 12th, 2023. Key changes include, among
                  others, detailed clarification of your rights,
                  responsibilities, and information about how we collect, use,
                  and protect your personal data, and about the cookies we use.
                  Please review the updated versions accessible in the legal
                  documentation links at the bottom of the Site or as otherwise
                  may be available on the Site. Your further use of the Site
                  constitutes your agreement to follow and be bound by the Terms
                  of Service and Privacy Policy, as changed, and to their
                  application to all information gathered before and after their
                  effective date.
                </i>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

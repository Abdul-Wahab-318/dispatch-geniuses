import Image from "next/image"
import { Faq } from "./components/faq"
import Footer from "./components/footer"
import Navbar from "./components/navbar"
import Link from "next/link"

export default function Home() {
  return (
    <div className="home page-template page-template-index page-template-index-php page page-id-40">
      <div className="main-wrapper">
        <div className="home">
          <section className="home-header">
          <video
            src="/images/video-high.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto" // This enables eager loading
            style={{ width: '100%' , position : 'absolute' , top : 0 , left : 0 , objectFit : 'cover' , height : '100%' }} // Make the video responsive
          />
            {/* <Image src={'/images/home-header-bg.jpg'} className="bg" width={1800} height={1800} /> */}
            <div className="container home-header__inner">
              <div className="row align-center">
                <div className="col-12 col-md-6">
                  <div className="row">
                    <h1 className="h1 home-header__title archivo">
                      <span className="archivo font-bold text-[65px] lg:text-[85px] xl:text-[95px] tracking-wide">Freight</span>
                      <span className="archivo font-bold text-[65px] lg:text-[85px] xl:text-[95px] tracking-wide">Dispatch</span>
                      <span className="archivo font-bold text-[65px] lg:text-[85px] xl:text-[95px] tracking-wide">Service</span>
                    </h1>
                  </div>
                  <div className="row home-header__bottom">
                    <div className="col-12 d-sm-flex">
                      <a
                        href="tel:3024259299"
                        className="btn btn-lg btn-danger rounded-lg inline-flex gap-3 items-center"
                      >
                      <Image src={'/images/icons/phone.png'} width={24} height={24} />
                        (302) 425 92 99
                      </a>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex col-12 col-md-6 ">
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
          <section className="section-lg home-get-started"
          >
            <div className="container">
              <div className="row">
                <div className="d-flex justify-content-between">
                  <h2 className="home-get-started__title wow animate__animated animate__fadeInLeft mb-5">
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
                      <a href="contact-us/index.html" className="font-bold text-5xl lg:text-3xl">
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
                      <a href="how-to-start/index.html" className="font-bold text-5xl lg:text-3xl">
                        Upload your MC Authority, W9 Form, and Certificate <br /> of
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
                      <a href="how-to-start/index.html" className="font-bold text-5xl lg:text-3xl">
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
                      <a href="how-to-start/index.html" className="font-bold text-5xl lg:text-3xl">
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
          <section  className="section-lg home-trucks bg-black">
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
                    <Image src={'/images/dry-van-2.png'} layout="fill" />
                    <div className="home-trucks__card-overlay">&nbsp;</div>
                    <button
                      aria-label="button"
                      className="btn home-trucks__btn"
                    >
                      <span>Dry Van</span>
                    </button>
                    <a href="trucks/dry-van/index.html">&nbsp;</a>
                  </div>
                </div>
                <div className="col-12 col-sm-2 col-sm-6 col-md-4 home-trucks__card">
                  <div className="home-trucks__card-inner">
                  <Image src={'/images/dry-van-2.png'} layout="fill" />
                    <div className="home-trucks__card-overlay">&nbsp;</div>
                    <button
                      aria-label="button"
                      className="btn home-trucks__btn"
                    >
                      <span>Step Deck</span>
                    </button>
                    <a href="trucks/step-deck/index.html">&nbsp;</a>
                  </div>
                </div>
                <div className="col-12 col-sm-2 col-sm-6 col-md-4 home-trucks__card">
                  <div className="home-trucks__card-inner">
                    <Image src={'/images/dry-van-2.png'} layout="fill" />
                    <div className="home-trucks__card-overlay">&nbsp;</div>
                    <button
                      aria-label="button"
                      className="btn home-trucks__btn"
                    >
                      <span>Reefer</span>
                    </button>
                    <a href="trucks/reefer/index.html">&nbsp;</a>
                  </div>
                </div>
                <div className="col-12 col-sm-2 col-sm-6 col-md-4 home-trucks__card">
                  <div className="home-trucks__card-inner">
                    <Image src={'/images/dry-van-2.png'} layout="fill" />
                    <div className="home-trucks__card-overlay">&nbsp;</div>
                    <button
                      aria-label="button"
                      className="btn home-trucks__btn"
                    >
                      <span>Flatbed</span>
                    </button>
                    <a href="trucks/flatbed/index.html">&nbsp;</a>
                  </div>
                </div>
                <div className="col-12 col-sm-2 col-sm-6 col-md-4 home-trucks__card">
                  <div className="home-trucks__card-inner">
                  <Image src={'/images/dry-van-2.png'} layout="fill" />
                    <div className="home-trucks__card-overlay">&nbsp;</div>
                    <button
                      aria-label="button"
                      className="btn home-trucks__btn"
                    >
                      <span>Power Only</span>
                    </button>
                    <a href="trucks/power-only-dispatch/index.html">&nbsp;</a>
                  </div>
                </div>
                <div className="col-12 col-sm-2 col-sm-6 col-md-4 home-trucks__card">
                  <div className="home-trucks__card-inner">
                  <Image src={'/images/dry-van-2.png'} layout="fill" />
                    <div className="home-trucks__card-overlay">&nbsp;</div>
                    <button
                      aria-label="button"
                      className="btn home-trucks__btn"
                    >
                      <span>Hotshot</span>
                    </button>
                    <a href="trucks/hotshot/index.html">&nbsp;</a>
                  </div>
                </div>
                <div className="col-12 col-sm-2 col-sm-6 col-md-4 home-trucks__card">
                  <div className="home-trucks__card-inner">
                  <Image src={'/images/dry-van-2.png'} layout="fill" />
                    <div className="home-trucks__card-overlay">&nbsp;</div>
                    <button
                      aria-label="button"
                      className="btn home-trucks__btn"
                    >
                      <span>Boxtruck</span>
                    </button>
                    <a href="trucks/boxtruck/index.html">&nbsp;</a>
                  </div>
                </div>
                <div className="col-12 col-sm-2 col-sm-6 col-md-4 home-trucks__card">
                  <div className="home-trucks__card-inner">
                  <Image src={'/images/dry-van-2.png'} layout="fill" />
                    <div className="home-trucks__card-overlay">&nbsp;</div>
                    <button
                      aria-label="button"
                      className="btn home-trucks__btn"
                    >
                      <span>Straight Truck</span>
                    </button>
                    <a href="trucks/straight-truck/index.html">&nbsp;</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section  className="section-lg home-blog">
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
                    All news {"  "} + 
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
          <section  className="section-lg">
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
          <Faq/>     
        </div>
      </div>
    </div>
  )
}

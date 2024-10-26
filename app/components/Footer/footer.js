import Image from "next/image"
import Link from "next/link"
const Footer = () => {
  return (
    <footer className="footer bg-black" >
      <div className="container footer__inner">
        <div className="subscribe-form">
          <div
            className="wpcf7 no-js"
            id="wpcf7-f1677-o3"
            lang="en-US"
            dir="ltr"
          >
            <div className="screen-reader-response">
              <p role="status" aria-live="polite" aria-atomic="true" />
              <ul />
            </div>
            <form
              action="https://logitydispatch.com/#wpcf7-f1677-o3"
              method="post"
              className="wpcf7-form init"
              aria-label="Contact form"
              noValidate="novalidate"
              data-status="init"
            >

              <div className="form__line">
                <div className="form__headline text-3xl">
                  The most useful articles, tips, and analysis for truckers.
                  Twice a month.
                </div>
              </div>
              <div className="form__line">
                <span className="wpcf7-form-control-wrap" data-name="email">
                  <input
                    size={40}
                    maxLength={400}
                    className="text-3xl"
                    aria-required="true"
                    aria-invalid="false"
                    placeholder="Email address"
                    defaultValue=""
                    type="email"
                    name="email"
                  />
                </span>
                <button className="btn btn-danger" type="submit">
                  Subscribe
                </button>
              </div>
              <div className="wpcf7-response-output" aria-hidden="true" />
            </form>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: "" }} />
      </div>
      <div className="container footer__inner">
        <div className="row footer__middle">
          <div className="col-12 col-md-6 col-lg-3">
            <a className="footer__logo" href="index.html">
                <Image src={'/images/logos/logo-header.svg'} width={320} height={320} />
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="footer__middle-col footer__middle-col--1">
              <div className="footer__list-title h6">Links</div>
              <ul
                id="menu-footer-menu"
                className="menu"
                itemScope=""
                itemType="http://www.schema.org/SiteNavigationElement"
              >
                <li
                  id="menu-item-377"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-377"
                >
                  <a href="about/index.html">About us</a>
                </li>
                <li
                  id="menu-item-378"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-378"
                >
                  <a href="contact-us/index.html">Contact us</a>
                </li>
                <li
                  id="menu-item-379"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-379"
                >
                  <a href="services/index.html">Services &amp; Pricing</a>
                </li>
                <li
                  id="menu-item-380"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-380"
                >
                  <a href="trucks/index.html">Truck types</a>
                </li>
                <li
                  id="menu-item-393"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-393"
                >
                  <a href="terms-of-service/index.html">Terms of service</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-2">
            <div className="footer__middle-col footer__middle-col--2">
              <div className="footer__list-title">&nbsp;</div>
              <ul
                id="menu-footer-menu-2"
                className="menu"
                itemScope=""
                itemType="http://www.schema.org/SiteNavigationElement"
              >
                <li
                  id="menu-item-381"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-381"
                >
                  <a href="faq/index.html">FAQ</a>
                </li>
                <li
                  id="menu-item-382"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-382"
                >
                  <a href="how-to-start/index.html">How to start</a>
                </li>
                <li
                  id="menu-item-383"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-383"
                >
                  <a href="testimonials/index.html">Testimonials</a>
                </li>
                <li
                  id="menu-item-384"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-384"
                >
                  <a href="blog/index.html">Blog</a>
                </li>
                <li
                  id="menu-item-392"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-392"
                >
                  <Link rel="privacy-policy" href="/privacy-policy">
                    Privacy policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="footer__middle-col footer__middle-col--3">
              <div className="footer__list-title h6">Contacts</div>
              <ul>
                <li className="d-flex mb-[24px]">
                  <Image src={'/images/icons/phone.png'} width={20} height={2} />
                  <a href="tel:6822972200" className="p2 ps-2">
                        (682) 297 2200{" "}
                  </a>
                </li>
                <li className="d-flex">
                    <Image src={'/images/icons/email.png'} width={20} height={2} className="mr-3" />

                  <a
                    className="p2"
                    href="mailto:info@dispatchgeniuses.com"
                  >
                    <span
                      className="__cf_email__"
                    >
                      info@dispatchgeniuses.com
                    </span>
                  </a>
                </li>
                <li className="d-flex align-items-center">
                <Image src={'/images/icons/location.png'} width={20} height={2} className="mr-3" />
                  <div className="p2">
                  661 St Andrew Ln Prosper TX, 75078
                  </div>
                </li>
                <li className="d-flex align-items-center">
                    <Image src={'/images/icons/time.png'} width={20} height={2} className="mr-3" />
                  <div className="p2">
                    Mon - Fri (EST) : 9 AM - 6 PM
                    <br />
                    Sat - Sun: Closed
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row justify-content-center justify-content-md-between footer__bottom">
          <div className="col-6 col-md-4">
            <div className="footer__copyright p2">
              Copyright © 2024 Dispatch Geniuses. All Rights Reserved.
            </div>
          </div>
          <div className="col-6 col-md-2 d-flex justify-content-end align-items-center footer__socials">
            <a href="https://www.facebook.com/logity.dispatch" target="_blank">
                <Image src={'/images/icons/fb.png'} width={20} height={2} className="mr-3" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCy-13G7jkP013j88dF1ngAg"
              target="_blank"
            >
                <Image src={'/images/icons/youtube.png'} width={25} height={2} className="mr-3" />
            </a>
            <a
              href="https://www.instagram.com/logity_dispatch/?igshid=MzRlODBiNWFlZA%3D%3D"
              target="_blank"
            >
                <Image src={'/images/icons/instagram.png'} width={20} height={2} className="mr-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

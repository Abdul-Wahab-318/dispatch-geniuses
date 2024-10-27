import Image from "next/image"
import Link from "next/link"
const Footer = () => {
  return (
    <footer className="footer bg-black" >
      <div className="container footer__inner">
        <div className="row footer__middle">
          <div className="col-12 col-md-6 col-lg-3">
            <Link className="footer__logo bg-black" href="index.html" >
                <Image src={'/images/logos/logo-header.svg'} width={320} height={320} />
            </Link>
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
                  <Link href="/about">About us</Link>
                </li>
                <li
                  id="menu-item-378"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-378"
                >
                  <Link href="/contact-us">Contact us</Link>
                </li>
                <li
                  id="menu-item-379"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-379"
                >
                  <Link href="/services">Services</Link>
                </li>
                <li
                  id="menu-item-380"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-380"
                >
                  <Link href="/trucks">Truck types</Link>
                </li>
                <li
                  id="menu-item-393"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-393"
                >
                  <Link href="/terms-of-service/">Terms of service</Link>
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
                  <Link href="/faq/">FAQ</Link>
                </li>
                <li
                  id="menu-item-382"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-382"
                >
                  <Link href="/how-to-start/">How to start</Link>
                </li>
                <li
                  id="menu-item-384"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-384"
                >
                  <Link href="/blog/">Blog</Link>
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
                  <Link href="tel:6822972200" className="p2 ps-2">
                        (682) 297 2200{" "}
                  </Link>
                </li>
                <li className="d-flex">
                    <Image src={'/images/icons/email.png'} width={20} height={2} className="mr-3" />

                  <Link
                    className="p2"
                    href="mailto:info@dispatchgeniuses.com"
                  >
                    <span
                      className="__cf_email__"
                    >
                      info@dispatchgeniuses.com
                    </span>
                  </Link>
                </li>
                <li className="d-flex align-items-center">
                <Image src={'/images/icons/location.png'} width={20} height={2} className="mr-3" />
                  <div className="p2">
                  Prosper TX
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
            <Link href="https://www.facebook.com/logity.dispatch" target="_blank">
                <Image src={'/images/icons/fb.png'} width={20} height={2} className="mr-3" />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCy-13G7jkP013j88dF1ngAg"
              target="_blank"
            >
                <Image src={'/images/icons/youtube.png'} width={25} height={2} className="mr-3" />
            </Link>
            <Link
              href="https://www.instagram.com/logity_dispatch/?igshid=MzRlODBiNWFlZA%3D%3D"
              target="_blank"
            >
                <Image src={'/images/icons/instagram.png'} width={20} height={2} className="mr-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

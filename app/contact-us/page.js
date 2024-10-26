import PageHeader from "../components/PageHeader/pageHeader"
import "./style.css"
import Link from "next/link"
import ContactForm from "../components/ContactForm/contactForm"

export default function Contact() {
  return (
    <div className="main-wrapper shipper-broker-page">
      <PageHeader />
      <div className="container breadcrumbs-container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumbs">
              <span>
                <span>
                  <Link href="/" className="text-3xl">
                    Home
                  </Link>
                </span>
                <span className="text-3xl mx-3">»</span>
                <span className="breadcrumb_last text-3xl" aria-current="page">
                  Contact Us
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <section className="section contact-us">
        <div className="container">
          <div className="row">
            <h1 className="h2 contact-us__title">Contact us</h1>
            <p className="text-[18px] lg:text-[20px]">
              Whether you need a consultation about our
              <Link href="/services"> services</Link> or want to get a free
              quote, our logistics experts are always happy to help.
            </p>
          </div>
          <ul className="list-questions">
            <li>
              Ask your question: Our specialists will dispel any doubts and
              provide all the necessary information for the best solution to
              your needs.
            </li>
            <li>
              Fill out the short form below, and we will prepare a personalized
              load plan tailored to your specific requirements.
            </li>
            <li>
              Quick response: Expect a call from our logistician soon. We will
              ensure clear communication at all stages of cooperation.
            </li>
          </ul>
          <div className="contacts-block-items text-5xl xl:text-4xl">
            <div className="contacts-block-item my-16">
              <h4 className="contacts-main-title mb-8 font-bold  text-5xl xl:text-4xl">
                Operational hours (EST Time):
              </h4>
              <ul className="contacts-days">
                <li>Monday: 9AM - 6PM</li>
                <li>Tuesday: 9AM - 6PM</li>
                <li>Wednesday: 9AM - 6PM</li>
                <li>Thursday: 9AM - 6PM</li>
                <li>Friday: 9AM - 6PM</li>
                <li>Saturday: Closed</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
            <div className="contacts-block-item">
              <h4 className="contacts-main-title font-bold  text-5xl xl:text-4xl">
                Follow us on our social media channels to stay updated
              </h4>
              <div className="social__icons" bis_skin_checked={1}>
                <a
                  href="https://www.tiktok.com/@logity_dispatch?_t=8eV0KMO1KOj&_r=1"
                  className="social__icon"
                >
                  <svg
                    fill="#fff"
                    width="40px"
                    height="40px"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#fff"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      <title>tiktok</title>
                      <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z" />
                    </g>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/logity_dispatch?igshid=MzRlODBiNWFlZA=="
                  className="social__icon"
                >
                  <svg
                    fill="#fff"
                    height="40px"
                    width="40px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="-271 273 256 256"
                    xmlSpace="preserve"
                    stroke="#fff"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      <path d="M-64.5,273h-157c-27.3,0-49.5,22.2-49.5,49.5v52.3v104.8c0,27.3,22.2,49.5,49.5,49.5h157c27.3,0,49.5-22.2,49.5-49.5V374.7 v-52.3C-15.1,295.2-37.3,273-64.5,273z M-50.3,302.5h5.7v5.6v37.8l-43.3,0.1l-0.1-43.4L-50.3,302.5z M-179.6,374.7 c8.2-11.3,21.5-18.8,36.5-18.8s28.3,7.4,36.5,18.8c5.4,7.4,8.5,16.5,8.5,26.3c0,24.8-20.2,45.1-45.1,45.1s-44.9-20.3-44.9-45.1 C-188.1,391.2-184.9,382.1-179.6,374.7z M-40,479.5C-40,493-51,504-64.5,504h-157c-13.5,0-24.5-11-24.5-24.5V374.7h38.2 c-3.3,8.1-5.2,17-5.2,26.3c0,38.6,31.4,70,70,70c38.6,0,70-31.4,70-70c0-9.3-1.9-18.2-5.2-26.3H-40V479.5z" />
                    </g>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/logity.dispatch"
                  className="social__icon"
                >
                  <svg
                    width="40px"
                    height="40px"
                    viewBox="-5 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      <title>facebook [X]</title>
                      <desc>Created with Sketch.</desc>
                      <defs />
                      <g
                        id="Page-1"
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="Dribbble-Light-Preview"
                          transform="translate(-385.000000, -7399.000000)"
                          fill="#ffffff"
                        >
                          <g
                            id="icons"
                            transform="translate(56.000000, 160.000000)"
                          >
                            <path
                              d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z"
                              id="facebook-[X]"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="row my-12 py-8">
              <div className="d-lg-flex row" >
                <div className="col-12 col-lg-6">
                    <ContactForm/>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="contact-us__left order-lg-1 h-full">
                    <h2 className="contact-us__left-title h4">
                        YOUR CONVENIENCE
                        <br />
                        IS OUR #1 PRIORITY
                    </h2>
                    <div className="contact-us__row">
                        <p>Head Office</p>
                        <h2 className="font-bold text-4xl">
                        661 St Andrew Ln Prosper TX, 75078
                        </h2>
                    </div>
                    <div className="contact-us__row">
                        <p>Phone</p>
                        <h2 className="h4">
                        <a href="tel:6822972200" className="font-bold text-4xl"> 682 297 2200 </a>
                        </h2>
                    </div>
                    <div className="contact-us__row">
                        <p>E-mail</p>
                        <h2 className="h4">
                        <a href="mailto:info@dispatchgeniuses.com" >
                            <span className="font-bold text-4xl"
                            >
                            info@dispatchgeniuses.com
                            </span>
                        </a>
                        </h2>
                    </div>
                    </div>
                </div>
              </div>
          </div>

          <div className="contacts-block-map">
            <div className="contacts-block-item">
              <h4 className="contacts-main-title font-bold  text-5xl xl:text-4xl mt-12 pt-8 mb-8">
                Find Us on the Map
              </h4>
            </div>
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106783.4961979332!2d-96.97112559293434!3d33.24071586531425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3f677146866f%3A0x19e803820966f487!2sProsper%2C%20TX%2C%20USA!5e0!3m2!1sen!2s!4v1729441195154!5m2!1sen!2s"
                width={'100%'}
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                />

          </div>
        </div>
      </section>
    </div>
  )
}

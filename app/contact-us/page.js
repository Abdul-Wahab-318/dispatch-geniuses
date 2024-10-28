import PageHeader from "../components/PageHeader/pageHeader"
import "./style.css"
import Link from "next/link"
import Image from "next/image"
import ContactForm from "../components/ContactForm/contactForm"

export default function Contact() {
  return (
    <div className="main-wrapper shipper-broker-page">
      <PageHeader img_url="/images/contact-header.webp" />
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
            Are you ready to optimize your trucking business? Whether you are searching for a free quote or high quality advice – we have you covered.
            </p>
          </div>
          <ul className="list-questions">
            <li>
              <strong>Let’s Chat:</strong>  We are available to answer any questions, to clear any doubt and to propose the best dispatch solution to your needs.
            </li>
            <li>
              <strong>Get Started:</strong>
             Just fill out the box below and we’ll create custom load plan just for you.
            </li>
            <li>
              <strong>Fast Response:</strong>
             You can expect a quick response from our dispatch team.
            </li>
          </ul>
          <div className="contacts-block-items text-5xl xl:text-4xl">
            <div className="contacts-block-item my-16">
              <h4 className="contacts-main-title mb-8 font-bold  text-5xl xl:text-4xl">
                Business hours (EST Time):
              </h4>
              <ul className="contacts-days">
                <li>Monday - Friday : 9AM - 5PM</li>
                <li>Saturday - Sunday: Closed</li>
              </ul>
            </div>
            <strong>We’re here to keep your wheels turning!</strong>
            <div className="contacts-block-item">
              <h4 className="contacts-main-title font-bold  text-5xl xl:text-4xl">
                Follow us on our social media channels to stay updated
              </h4>
              <div className="social__icons  " bis_skin_checked={1}>
              <Link href="https://www.facebook.com/profile.php?id=61567740634532" className="bg-black p-2 items-center flex rounded-md" target="_blank">
                <Image src={'/images/icons/fb.png'} width={20} height={2}  />
            </Link>
            <Link
              href="https://www.youtube.com/@DispatchGeniuses"
              target="_blank" className="bg-black p-2 rounded-md"
            >
                <Image src={'/images/icons/youtube.png'} width={25} height={2}  />
            </Link>
            <Link
              href="https://www.instagram.com/dispatchgeniuses/"
              target="_blank" className="bg-black p-2 rounded-md flex items-center"
            >
                <Image src={'/images/icons/instagram.png'} width={20} height={2}  />
            </Link>
            <Link
              href="https://www.linkedin.com/company/dispatch-geniuses/"
              target="_blank" className="bg-black p-2 rounded-md"
            >
                <Image src={'/images/icons/linkedin.svg'} width={25} height={2}  />
            </Link>
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
                        Prosper , TX
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

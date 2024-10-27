import Image from "next/image"
import Link from "next/link"
import "./style.css"
import YoutubeVideo from "../components/YoutubeVideo/youtubeVideo"
import ContactBtn from "../components/contactBtn"
import PhoneBtn from "../components/phoneBtn"
import EmailBtn from "../components/emailBtn"
import PageHeader from "../components/PageHeader/pageHeader"

export default function About() {
  return (
    <div className="main-wrapper">
      <PageHeader img_url="/images/about-header.avif" />
      <div className="container breadcrumbs-container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumbs">
              <span>
                <span>
                  <Link href="/" className="text-3xl me-2">
                    Home
                  </Link>
                </span>{" "}
                <span className="text-4xl">»</span>
                <span
                  className="breadcrumb_last ms-2 text-3xl"
                  aria-current="page"
                >
                  About the company
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <section className="section about article">
        <div className="container">
          <div className="row">
            <h1>
              About
              <br />
              the company
            </h1>
          </div>
          <div className="row">
            <p>
              At Dispatch Geniuses, we take care of details so that you can
              concentrate on expansion. Our area of expertise revolves around
              simplifying the daily operational activities of truck drivers,
              owner operators as well as companies of different sizes. We book
              your loads, handle paperwork/invoices and take all your inbound
              calls. <br /> <br />
              Our mission? To keep you on the road while we take care of
              the rest. From optimizing your fleet to providing call support, we
              have solutions that work and allow you to grow your business. Do
              you want to bolster your operations and move to the next level?
              Make us a call and let’s discuss how we can crank up your
              business.
            </p>
          </div>
          <div className=" w-[65%] min-w-[200px] mx-auto my-10 md:my-0  md:w-full md:flex about__buttons">
            <ContactBtn />
            <PhoneBtn />
            <EmailBtn />
          </div>
          <div className="row">
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

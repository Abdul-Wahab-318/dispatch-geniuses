import Image from "next/image"
import Footer from "@/app/components/Footer/footer"
import Link from "next/link"
import Navbar from "@/app/components/navbar/Navbar"
import "./style.css"
import YoutubeVideo from "../components/YoutubeVideo/YoutubeVideo"
import ContactBtn  from "../components/contactBtn"
import PhoneBtn from "../components/phoneBtn"
import EmailBtn from "../components/emailBtn"
import PageHeader from "../components/PageHeader/PageHeader"

export default function About() {
  return (
    <div className="main-wrapper">
      <PageHeader img_url="/images/about-header.png" />
      <div className="container breadcrumbs-container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumbs">
              <span>
                <span>
                  <Link href="../index.html" className="text-3xl me-2">
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
              At Dispatch Geniuses, we handle the details so you can focus on
              growth. We specialize in helping truck drivers, owner-operators,
              and businesses of all sizes streamline their daily operations.
              From booking loads and managing paperwork to handling invoicing
              and inbound calls, we’ve got you covered. Our mission? To keep you
              on the road while we take care of the rest. Whether you're looking
              to optimize your fleet or need reliable call support, we offer
              tailored solutions that drive results and let you focus on
              expanding your business. <br /> <br />
              Ready to simplify your operations and scale up? Give us a call,
              and let's talk about how we can take your business to the next
              level.
            </p>
            <hr className="wp-block-separator has-css-opacity is-style-wide" />
            <YoutubeVideo />
            <hr className="wp-block-separator has-css-opacity is-style-wide" />
            <p>
              We give special attention and priority to all the drivers we are
              working with. To ensure that you get the highest paying loads, we
              provide every customer with a dedicated dispatcher and 24 / 7
              support. You have the right to change your dispatcher and choose
              another specialist if you’re not satisfied with them.
              <br />
              <br />
              Logity Dispatch services include rate negotiation and all the
              conversation with the brokers and shippers. We make every effort
              to get the best freight by the highest price for our clients.
              Though, there is no forced dispatch: drivers may decline any loads
              if they want to.
              <br />
              <br />
              Our head office is located in Wilmington, DE, although we dispatch
              drivers from all across the US.
              <br />
              <br />
              If you need any additional information about our business,
              services, or privileges, feel free to contact us:
            </p>
          </div>
          <div className=" w-[65%] min-w-[200px] mx-auto my-10 md:my-0  md:w-full md:flex about__buttons">
            <ContactBtn/>
            <PhoneBtn/>
            <EmailBtn/>
          </div>
          <div className="row">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26621.811925232705!2d73.09109019999998!3d33.482471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfecfd54c44f8b%3A0xcbe168614ce38d55!2sPhase%208%20Bahria%20Town%2C%20Rawalpindi%2C%20Punjab!5e0!3m2!1sen!2s!4v1729249749865!5m2!1sen!2s"
              width={600}
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

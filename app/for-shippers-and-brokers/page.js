import Image from "next/image"
import PageHeader from "../components/PageHeader/pageHeader"
import "./style.css"
import Link from "next/link"
import ContactForm from "../components/ContactForm/contactForm"
import ContactBtn from "../components/contactBtn"
import PhoneBtn from "../components/phoneBtn"
import EmailBtn from "../components/emailBtn"

export default function Shippers() {
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
                  For Shippers and Brokers
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="single-page">
        <section className="section article" id="post-1589">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-5">
              <div className="mt-5">
                <h1 className="text-8xl">For Shippers and Brokers</h1>
                <ul className="article-bullets text-4xl ">
                  <li>
                    {" "}
                    <span>
                      <img
                        src="/images/icons/blue-tick.png"
                        width={25}
                        alt=""
                      />
                    </span>{" "}
                    Thousands of trucks to move your loads
                  </li>
                  <li>
                    <span>
                      <img
                        src="/images/icons/blue-tick.png"
                        width={25}
                        alt=""
                      />
                    </span>{" "}
                    24/7 updates and load tracking
                  </li>
                  <li>
                    <span>
                      <img
                        src="/images/icons/blue-tick.png"
                        width={25}
                        alt=""
                      />
                    </span>{" "}
                    No double brokering and hidden fees
                  </li>
                </ul>
              </div>
              <div className="px-5">
                <ContactForm />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <h2
                className="wp-block-heading mt-5 mb-12"
                id="dispatch-solutions-for-shippers-and-brokers"
              >
                <strong>
                  Your Reliable Partner for Fleet and Freight Solutions
                </strong>
              </h2>
              <p>
                At Dispatch Geniuses, we understand the logistics challenges you
                face—tight deadlines, complex routing, and the need for trusted
                trucking partners. We offer a transparent, efficient, and
                reliable dispatch service that connects you with top-notch
                truckers, while eliminating the risk of double brokering.
              </p>
              <p>
                Our team believes it takes both freight brokers and shippers to
                successfully transport loads. We can help make the process
                smoother for both parties. Here’s how.
              </p>
              <h2
                className="wp-block-heading mt-5 mb-12"
                id="how-we-can-help-freight-brokers-and-shippers"
              >
                <strong>How We Make Your Life Easier</strong>
              </h2>
              <ul className="wp-block-list text-[18px] md:text-4xl xl:text-3xl">
                <li>
                  <img
                    src="/images/icons/blue-tick.png"
                    className="inline me-2"
                    width={22}
                    alt=""
                  />
                  <strong>Consistent Capacity: </strong>Whether it’s a one-time
                  shipment or long-term freight needs, we guarantee reliable
                  capacity, so you never have to worry about finding a carrier.
                </li>
                <br />
                <li>
                  <img
                    src="/images/icons/blue-tick.png"
                    className="inline me-2"
                    width={22}
                    alt=""
                  />
                  <strong>Streamlined Documentation: </strong> Leave the
                  paperwork to us! From BOLs to proof of delivery, we handle it
                  all so you can focus on growing your business.
                </li>
                <br />
                <li>
                  <img src="/images/icons/blue-tick.png" className="inline me-2" width={22} alt="" />
                  <strong>No Double Brokering: </strong>We pride ourselves on
                  transparency. Every load is tracked, and we ensure you're
                  working directly with vetted carriers, eliminating any risk of
                  double brokering.
                </li>
              </ul>
              <h2
                className="wp-block-heading mt-5 mb-12"
                id="our-truck-dispatcher-service-benefits"
              >
                <strong>Why Choose Dispatch Geniuses?</strong>
              </h2>
              <ul className="wp-block-list text-[18px] md:text-4xl xl:text-3xl shippers-list">
                <li>
                  <img
                    src="/images/icons/blue-tick.png"
                    className="inline me-2"
                    width={22}
                    alt=""
                  />
                  <strong>Complete Transparency: </strong>
                  <span>
                    From start to finish, you'll know exactly where your freight
                    is and who’s handling it. Our commitment to eliminating
                    double brokering ensures that you're always dealing with the
                    original carrier.
                  </span>
                </li>

                <li>
                  <img
                    src="/images/icons/blue-tick.png"
                    className="inline me-2"
                    width={22}
                    alt=""
                  />
                  <strong>Real-Time Communication: </strong>
                  <span>
                    Stay informed with up-to-the-minute updates on load status,
                    pickup, and delivery. No more guesswork—we keep you in the
                    loop every step of the way.
                  </span>
                </li>

                <li>
                  <img
                    src="/images/icons/blue-tick.png"
                    className="inline me-2"
                    width={22}
                    alt=""
                  />
                  <strong>Expert Load Matching: </strong>
                  <span>
                    We find the right truck for the right load, optimizing your
                    freight management for efficiency and safety.
                  </span>
                </li>
                <li>
                  <img
                    src="/images/icons/blue-tick.png"
                    className="inline me-2"
                    width={22}
                    alt=""
                  />
                  <strong>24/7 Dispatch Support: </strong>
                  <span>
                    Our round-the-clock dispatch team ensures smooth operations,
                    providing consistent communication and handling any issues
                    as they arise.
                  </span>
                </li>
                <li>
                  <img
                    src="/images/icons/blue-tick.png"
                    className="inline me-2"
                    width={22}
                    alt=""
                  />
                  <strong>Compliance-Driven Service: </strong>
                  <span>
                    Every driver and fleet we work with meets all industry
                    regulations, giving you peace of mind and ensuring smooth
                    transactions.
                  </span>
                </li>
              </ul>
              <h2 className="wp-block-heading mt-5 mb-12" id="why-rely-on-logity-dispatch">
                <strong>Partner with Dispatch Geniuses Today</strong>
              </h2>
              <p>
              Working with us means more than just getting your freight from point A to point B. It’s about having a reliable partner who understands the demands of the logistics industry and provides solutions that help you grow. <br /> <br />
              Contact us today to discover how Dispatch Geniuses can make your operations smoother and more efficient.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="pt-2">
                <div className=" flex max-w-[300px] mt-5 mx-auto  flex-col sm:flex-row sm:max-w-full gap-8">
                  <ContactBtn/>
                  <PhoneBtn/>
                  <EmailBtn/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

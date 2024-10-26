import ContactBtn from "../components/contactBtn"
import EmailBtn from "../components/emailBtn"
import PageHeader from "../components/PageHeader/pageHeader"
import PhoneBtn from "../components/phoneBtn"
import BlogGrid from "@/app/components/BlogGrid/blogGrid"
import "./styles.css"
import Link from "next/link"

export default function Layout({ children }) {
  return (
    <div className="main-wrapper">
      <PageHeader />
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
                    <Link href="/trucks" className="text-3xl me-2">
                        Trucks
                    </Link>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      {children}
      <div className="single-page">
        <section className="section article pt-12 " id="post-261">
          <div className="container">
            <div className="row">
              <div className="pt-2">
                <div className="d-lg-flex about__buttons mx-auto max-w-[350px] md:max-w-[500px] lg:max-w-full">

                  <ContactBtn/>
                  <PhoneBtn/>
                  <EmailBtn/>

                </div>
              </div>
            </div>
          </div>
          <div className="choose-your-service my-5 pt-3">
            <div className="container">
              <div className="row">
                <div className="choose-your-service__headline h2 text-center text-6xl lg:text-5xl">
                  Choose The Service You Need
                </div>
              </div>
              <div className="row">
                <div className="d-flex flex-wrap justify-content-center mt-2">
                  <a
                    className="btn choose-your-service__item"
                    href="/service-type/dispatching/"
                    title="Truckbr/> dispatching"
                  >
                    Truck Dispatching
                  </a>
                  <a
                    className="btn choose-your-service__item"
                    href="/service-type/paperwork-management/"
                    title="Billing"
                  >
                    Paperwork Management
                  </a>
                  <a
                    className="btn choose-your-service__item"
                    href="/service-type/factoring-service/"
                    title="Factoring service"
                  >
                    Factoring Service
                  </a>
                  <a
                    className="btn choose-your-service__item"
                    href="/service-type/document-management-paperwork/"
                    title="Document Management<br> & Paperwork"
                  >
                    Document Management
                  </a>
                  <a
                    className="btn choose-your-service__item"
                    href="/service-type/safety-dot-compliance/"
                    title="SAFETY / DOT compliance"
                  >
                    SAFETY &amp; DOT Compliance
                  </a>
                  <a
                    className="btn choose-your-service__item"
                    href="/service-type/rate-negotiation/"
                    title="Rate negotiation"
                  >
                    Rate Negotiation
                  </a>
                  <a
                    className="btn choose-your-service__item"
                    href="/service-type/ifta/"
                    title="IFTA"
                  >
                    IFTA Reporting
                  </a>
                  <a
                    className="btn choose-your-service__item"
                    href="/service-type/company-formation/"
                    title="Company Formation"
                  >
                    Company Formation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className=" mb-8 pb-8">
            <BlogGrid/>
        </div>
      </div>
    </div>
  )
}

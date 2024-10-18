import Image from "next/image"
import PageHeader from "../components/pageHeader"
import "./style.css"
import Link from "next/link"

export default function Services() {
  return (
    <div className="main-wrapper">
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
                  Services
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="section services">
        <div className="container">
          <div className="row">
            <h1 className="h2 not-home">
              Our
              <br />
              services
            </h1>
          </div>
          <div className="row services__row section pt-0">
            <div className="col-12 col-md-6 services__col">
              <Image
                src={"/images/truck-dispatch-1.png"}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="col-12 col-md-6 services__col-right">
              <div className="services__txt">
                <div className="services__pre-title">01</div>
                <h2 className="h3">
                  Truck
                  <br />
                  dispatching
                </h2>
                <p>
                  Stay on the Road, We'll Handle the Rest
                  <br />
                  Our expert dispatch team works around the clock to secure the
                  best loads and keep your trucks moving. We manage everything
                  from negotiations to check calls, so you can focus on driving
                  and growing your business.
                </p>
                <Link href="dispatching/index.html" className="link">
                  Read more
                </Link>
              </div>
            </div>
          </div>
          <div className="row services__row section pt-0">
            <div className="col-12 col-md-6 services__col">
              <Image
                src={"/images/paperwork-1.png"}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="col-12 col-md-6 services__col-right">
              <div className="services__txt">
                <div className="services__pre-title">02</div>
                <h2 className="h3">Paperwork Management</h2>
                <p>
                  Simplify Your Back Office <br />
                  Let us handle the mountains of paperwork, so you don't have
                  to. From managing rate confirmations to BOLs and invoices,
                  we’ll streamline your administrative tasks, giving you more
                  time to focus on the road.
                </p>
                <Link href="billing/index.html" className="link">
                  Read more
                </Link>
              </div>
            </div>
          </div>
          <div className="row services__row section pt-0">
            <div className="col-12 col-md-6 services__col">
              <Image
                src={"/images/invoice-1.png"}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="col-12 col-md-6 services__col-right">
              <div className="services__txt">
                <div className="services__pre-title">03</div>
                <h2 className="h3">Accounting & Invoicing</h2>
                <p>
                  Get Paid, Stress-Free <br />
                  We handle your invoicing and accounting with precision. Stay
                  on top of your finances with our expert team, ensuring timely
                  payments and clear record-keeping so you can focus on what
                  matters most—your business.
                </p>
                <Link
                  href="document-management-paperwork/index.html"
                  className="link"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
          <div className="row services__row section pt-0">
            <div className="col-12 col-md-6 services__col">
              <Image
                src={"/images/business-expansion-1.png"}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="col-12 col-md-6 services__col-right">
              <div className="services__txt">
                <div className="services__pre-title">04</div>
                <h2 className="h3">Guide to Business Expansion</h2>
                <p>
                  Drive Your Growth <br />
                  Ready to take your trucking business to the next level? Our
                  personalized growth strategies will help you expand your
                  fleet, increase profits, and dominate the market with
                  confidence.
                </p>
                <Link href="factoring-service/index.html" className="link">
                  Read more
                </Link>
              </div>
            </div>
          </div>
          <div className="row services__row section py-0">
            <div className="col-12 col-md-6 services__col">
              <Image
                src={"/images/compliance-1.png"}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="col-12 col-md-6 services__col-right">
              <div className="services__txt">
                <div className="services__pre-title">05</div>
                <h2 className="h3">Safety DOT Compliance</h2>
                <p>
                  Keep Your Fleet Safe and Legal <br />
                  We ensure your fleet is fully DOT-compliant, keeping your
                  drivers and business safe from costly penalties and ensuring
                  smooth operations on the road.
                </p>
                <Link href="rate-negotiation/index.html" className="link">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section article page-bottom-form pt-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-card border-2 border-blue rounded-xl px-6">
                <div className="contact-card__top">
                  <div className="contact-card__top-inner">
                    <div className="contact-card__title">
                      Starting from 5% of gross <span />
                    </div>
                    <Link
                      href="../contact-us/index.html"
                      className="btn btn-lg btn-danger"
                    >
                      Contact us
                    </Link>
                  </div>
                </div>
                <ul className="contact-card__list">
                  <li className="checked">
                    <span>
                        <img
                        src="/images/icons/tick-black.png"
                        width={"18px"}
                        className="me-4"
                        alt=""
                        />
                    </span>
                    <span> Dispatching </span>
                  </li>
                  <li className="checked">
                  <span>
                        <img
                        src="/images/icons/tick-black.png"
                        width={"18px"}
                        className="me-4"
                        alt=""
                        />
                    </span>
                    <span> Billing </span>
                  </li>
                  <li className="checked">
                  <span>
                        <img
                        src="/images/icons/tick-black.png"
                        width={"18px"}
                        className="me-4"
                        alt=""
                        />
                    </span>
                    <span> Document Management &amp; Paperwork </span>
                  </li>
                  <li className="checked">
                  <span>
                        <img
                        src="/images/icons/tick-black.png"
                        width={"18px"}
                        className="me-4"
                        alt=""
                        />
                    </span>
                    <span> Factoring service </span>
                  </li>
                  <li className="checked">
                  <span>
                        <img
                        src="/images/icons/tick-black.png"
                        width={"18px"}
                        className="me-4"
                        alt=""
                        />
                    </span>
                    <span> Rate negotiation </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="section services pt-0">
        <div className="container">
          <div className="row services__row flex-col-reverse md:flex-row">
            <div className="col-12 col-md-6 services__col">
              <div className="services__txt ps-3">
                <div className="services__pre-title">06</div>
                <h2 className="h3">Company Formation Guide</h2>
                <p>
                  Start Your Business Right <br /> Thinking about launching your
                  trucking company? We guide you step by step through the
                  process, from LLC formation to licensing, so you can hit the
                  road with confidence
                </p>
                <Link href="safety-dot-compliance/index.html" className="link">
                  Read more
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-6 services__col-right" >
                <Image
                src={"/images/company-formation-1.png"}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section services pt-0">
        <div className="container">
          <div className="row services__row ">
            <div className="col-12 col-md-6 services__col ">
                <Image
                src={"/images/ifta-1.png"}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="col-12 col-md-6  services__col-right pe-8">
              <div className="services__txt">
                <div className="services__pre-title">07</div>
                <h2 className="h3">International Fuel Tax Agreement (IFTA)</h2>
                <p>
                  Hassle-Free Tax Compliance <br />
                  We simplify IFTA reporting for you, ensuring you stay
                  compliant with fuel tax regulations while saving time and
                  reducing errors.
                </p>
                <Link href="ifta/index.html" className="link">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section services pt-0">
        <div className="container">
          <div className="row services__row flex-col-reverse md:flex-row" >
            <div className="col-12 col-md-6 services__col ps-8">
              <div className="services__txt">
                <div className="services__pre-title">08</div>
                <h2 className="h3">Factoring, ELDs, and Insurance</h2>
                <p>
                  The Best Options for Your Fleet <br />
                  We’ll help you shortlist the best factoring companies, ELDs,
                  and insurance providers tailored to your business needs,
                  ensuring you get the best value and service.
                </p>
                <Link href="company-formation/index.html" className="link">
                  Read more
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-6 services__col-right">
                <Image
                src={"/images/elds-1.png"}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="section article page-bottom-form">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-card  border-2 border-blue rounded-xl px-6">
                <div className="contact-card__top">
                  <div className="contact-card__top-inner">
                    <div className="contact-card__title">
                      Contact for details <span />
                    </div>
                    <Link
                      href="../contact-us/index.html"
                      className="btn btn-lg btn-danger"
                    >
                      Contact us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

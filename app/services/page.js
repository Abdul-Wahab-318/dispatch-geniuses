import Image from "next/image"
import PageHeader from "../components/PageHeader/pageHeader"
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
                src={"/images/truck-dispatch-1.avif"}
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
                  Our dedicated dispatchers work around the clock to beat the competition and keeping you on the road with best loads possible. Our dispatch will take care of frequent check calls, invoicing, paperwork and negotiations, So you can focus on the road.
                </p>
                <Link href="/service-type/dispatching/" className="link">
                  Read more
                </Link>
              </div>
            </div>
          </div>
          <div className="row services__row section pt-0">
            <div className="col-12 col-md-6 services__col">
              <Image
                src={"/images/paperwork-1.avif"}
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
                  Let’s get rid of the unnecessary burden of paperwork that’s piled up. We’ll take care of rate confirmation sheets, BOLs as well as invoices; thus, allowing you to concentrate on driving instead of administrative work. 
                </p>
                <Link href="/service-type/paperwork-management/" className="link">
                  Read more
                </Link>
              </div>
            </div>
          </div>
          <div className="row services__row section pt-0">
            <div className="col-12 col-md-6 services__col">
              <Image
                src={"/images/invoice-1.avif"}
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
                  Invoicing and accounts management done right. With expert hands managing your finances, timely payments and maintaining proper records so that the only thing you need to worry about is growing your business.
                </p>
                <Link
                  href="/service-type/accounting-invoicing/"
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
                src={"/images/business-expansion-1.webp"}
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
                  Are you prepared to advance your trucking business to the next stage? With our unique growth tactics, you will be able to enhance your fleet, raise your profitability, and confidently rule the market.
                </p>
                <Link href="/service-type/business-expansion/" className="link">
                  Read more
                </Link>
              </div>
            </div>
          </div>
          <div className="row services__row section py-0">
            <div className="col-12 col-md-6 services__col">
              <Image
                src={"/images/compliance-1.avif"}
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
                  We make sure all your fleets are fully DOT compliant which shields your drivers and businesses from expensive penalty and makes operations on the road seamless.
                </p>
                <Link href="/service-type/dot-compliance/" className="link">
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
                      href="/contact-us"
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
                  Start Your Business Right <br />
                  You’re looking to start your own trucking business? Don’t worry, we are ready to assist you in the whole process starting from the formation of the LLC until you get the license and hit the road.
                </p>
                <Link href="/service-type/company-formation/" className="link">
                  Read more
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-6 services__col-right" >
                <Image
                src={"/images/company-formation-1.avif"}
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
                src={"/images/ifta-1.avif"}
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
                  Fuel tax has been an exceptional compliance headache for most commercial vehicle operators, fuel tax compliance in reporting the taxes has always been time troublesome, We make IFTA reporting hassles out of your equation, reporting and complying with fuel tax regulations in the shortest duration and in minimal errors possible.
                </p>
                <Link href="/service-type/ifta/" className="link">
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
                  Choose the best factoring companies, ELDs, and insurance that best suit your business, we’ll make sure they are the best in service and value for your business.
                </p>
                <Link href="/service-type/factoring-service/" className="link">
                  Read more
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-6 services__col-right">
                <Image
                src={"/images/elds-1.avif"}
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
                      href="/contact-us"
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

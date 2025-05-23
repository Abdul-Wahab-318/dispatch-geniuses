import Image from "next/image"
import { Faq } from "./components/Faq/faq"
import Link from "next/link"
import Head from "next/head";
import Testimonials from "@/app/components/testimonials/testimonials"
import BlogGrid from "./components/BlogGrid/blogGrid"
import StepperComponent from "./components/Stepper/stepper"
import ContactForm from "./components/ContactForm/contactForm"


export const metadata = {
  title: "All-in-One Dispatching Services | Truck Dispatch Partner",
  description:
    "Reliable dispatching, paperwork management, and compliance solutions for truckers and carriers. Partner with us for efficient trucking services tailored to your business needs.",
  keywords: [
    "dispatching services",
    "truck dispatching",
    "paperwork management",
    "DOT compliance",
    "IFTA",
    "accounting",
    "invoicing",
    "trucking services",
    "business expansion",
    "trucking company setup",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "All-in-One Dispatching Services | Truck Dispatch Partner",
    description:
      "Reliable dispatching, paperwork management, and compliance solutions for truckers and carriers. Partner with us for efficient trucking services tailored to your business needs.",
    url: "https://dispatchgeniuses.com/",
    images: [
      {
        url: "https://dispatchgeniuses.com/images/about-header.webp",
        width: 1200,
        height: 630,
        alt: "All-in-One Dispatching Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All-in-One Dispatching Services | Truck Dispatch Partner",
    description:
      "Reliable dispatching, paperwork management, and compliance solutions for truckers and carriers. Partner with us for efficient trucking services tailored to your business needs.",
    images: ["https://dispatchgeniuses.com/images/about-header.webp"],
  },
};

export default function Home() {


  const services = [
    {
      name: "Truck Dispatching",
      href: "/service-type/dispatching",
      icon: "/images/icons/dispatch-service-icon.png",
    },
    {
      name: "Paperwork Management",
      href: "/service-type/paperwork-management",
      icon: "/images/icons/billing-service-icon.png",
    },
    {
      name: "Accounting & Invoicing",
      href: "/service-type/accounting-invoicing",
      icon: "/images/icons/document-service-icon.png",
    },
    {
      name: "Business Expansion",
      href: "/service-type/business-expansion",
      icon: "/images/icons/business-service-icon.png",
    },
    {
      name: "DOT Compliance",
      href: "/service-type/dot-compliance",
      icon: "/images/icons/dot-service-icon.png",
    },
    {
      name: "IFTA",
      href: "/service-type/ifta",
      icon: "/images/icons/ifta-service-icon.png",
    },
    {
      name: "Factoring , ELD Insurance",
      href: "/service-type/factoring-service",
      icon: "/images/icons/eld-service-icon.png",
    },
    {
      name: "Company Formation",
      href: "/service-type/company-formation",
      icon: "/images/icons/company-service-icon.png",
    },
  ]

  const trucks = [
    {
      name: "Dry Van",
      href: "/truck-type/dry-van",
      icon: "/images/dry-van-2.png",
    },
    {
      name: "Step Deck",
      href: "/truck-type/step-deck",
      icon: "/images/step-deck-1.avif",
    },
    {
      name: "Reefer",
      href: "/truck-type/reefer",
      icon: "/images/reefer-1.avif",
    },
    {
      name: "Flatbed",
      href: "/truck-type/flatbed",
      icon: "/images/flatbed-1.avif",
    },
    {
      name: "Power Only",
      href: "/truck-type/power-only",
      icon: "/images/power-only-1.avif",
    },
    {
      name: "Hotshot",
      href: "/truck-type/hotshot",
      icon: "/images/hot-shot-1.avif",
    },
    {
      name: "Boxtruck",
      href: "/truck-type/boxtruck",
      icon: "/images/box-truck-2.avif",
    }
  ];
  

  return (
    <div className="home page-template page-template-index page-template-index-php page page-id-40">
      <div className="main-wrapper">
        <div className="home">
          <section className="home-header">
            <video
              src="/images/video-loop.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto" // This enables eager loading
              style={{
                width: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                objectFit: "cover",
                height: "100%",
              }} // Make the video responsive
            />
            {/* <Image src={'/images/home-header-bg.jpg'} className="bg" width={1800} height={1800} /> */}
            <div className="container home-header__inner">
              <div className="row align-center">
                <div className="col-12 col-md-6">
                  <div className="row">
                    <h1 className="h1 home-header__title archivo">
                      <span className="archivo font-bold text-[65px] lg:text-[85px] xl:text-[95px] tracking-wide">
                        All-in-one
                      </span>
                      <span className="archivo font-bold text-[65px] lg:text-[85px] xl:text-[95px] tracking-wide">
                        Dispatch
                      </span>
                      <span className="archivo font-bold text-[65px] lg:text-[85px] xl:text-[95px] tracking-wide">
                        Partner
                      </span>
                    </h1>
                  </div>
                  <div className="row home-header__bottom">
                    <div className="col-12 d-sm-flex">
                      <Link
                        href="mailto:info@dispatchgeniuses.com"
                        className="btn btn-lg btn-danger rounded-lg inline-flex gap-5 items-center"
                      >
                        <Image
                          src={"/images/icons/email.png"}
                          width={24}
                          height={24}
                        />
                        Email Us
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex col-12 col-md-6 ">
                  <ContactForm/>
                </div>
              </div>
            </div>
          </section>
          <div
            id="breadcumbs-hidden"
            className="container breadcrumbs-container"
          >
            <div className="row">
              <div className="col-12">
                <div className="breadcrumbs">
                  <span>
                    <span className="breadcrumb_last" aria-current="page">
                      Home
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <section className="section-lg home-services">
            <div className="container">
              <div className="row">
                <div className="d-flex justify-content-between">
                  <h2 className="home-services__title wow animate__animated animate__fadeInLeft">
                    Services
                  </h2>
                  <Link
                    href="contact-us/"
                    className="home-services__link link link-middle mt-0 home-get-started__link wow animate__animated animate__fadeInRight shadow-transparent"
                  >
                    From 5%
                    <br />
                    of gross
                  </Link>
                </div>
              </div>
              <div
                className="row wow animate__animated animate__fadeIn"
                data-wow-delay=".5s"
                data-wow-duration="2.5s"
              >
                {services.map((service, ind) => {
                  return (
                    <div
                      className="col-md-6 col-lg-3 home-services__item-wrap"
                      key={service.href}
                    >
                      <div className="home-services__item d-flex flex-column justify-content-center items-center">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="home-services__item-left ">
                            <div className="home-services__left-txt">
                              <div className="home-services__item-num text-center flex justify-content-center">
                                <Image
                                  src={service.icon}
                                  width={140}
                                  height={140}
                                />
                              </div>
                              <div className="h4 home-services__item-name text-center text-5xl md:text-5xl lg:text-4xl">
                                {service.name}
                              </div>
                            </div>
                          </div>
                        </div>
                        <Link href={service.href} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
          <section className="section-lg home-stats">
            <div className="container home-stats__inner">
              <div className="row">
                <div className="col-12">
                  <h4 className="home-stats__title text-7xl font-bold text-white text-center block mb-12" style={{'letterSpacing':'3px'}}>
                    Unreal Achievements
                  </h4>
                </div>
              </div>
              <div className="row mt-12">
                <div className="col-12 home-stats__item-wrap">
                  <div className="home-stats__item">
                    <div
                      className="h3 home-stats__num text-white font-extrabold"
                      id="home-stats-num-1"
                    >
                      <span className="font-bold text-8xl text-white">
                        $34K+
                      </span>
                    </div>
                    <div className="h4 home-stats__name text-white text-[26px]  font-normal ">
                      In a month , on a Box Truck
                    </div>
                  </div>
                </div>
                <div className="col-12 home-stats__item-wrap">
                  <div className="home-stats__item">
                    <div className="h3 home-stats__num" id="home-stats-num-2">
                      <span className="font-bold text-8xl text-white">
                        $10K+
                      </span>
                    </div>
                    <div className="h4 home-stats__name text-[26px]  font-normal  text-white">
                      In a week , on a Box Truck
                    </div>
                  </div>
                </div>
                <div className="col-12 home-stats__item-wrap">
                  <div className="home-stats__item mb-0">  
                    <div className="h3 home-stats__num" id="home-stats-num-3">
                      <span className="text-white font-bold text-8xl">
                        $7K+
                      </span>
                    </div>
                    <div className="h4 home-stats__name text-[26px]  font-normal text-white ">
                      Average Revenue
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-lg home-get-started">
            <div className="container">
            <div className="row">
                <div className="col-12">
                  <h2 className="home-services__title mb-12">
                    Get Started
                  </h2>
                </div>
              </div>
              <StepperComponent/>
            </div>
          </section>
          <section className="section-lg home-trucks bg-black">
            <div className="container home-trucks__inner">
              <div className="row">
                <div className="col-12">
                  <h2 className="home-trucks__title wow animate__animated animate__fadeInLeft">
                    Who can
                    <br />
                    work with us <Link href="/trucks" />
                  </h2>
                </div>
              </div>
              <div
                className="row g-5 wow animate__animated animate__fadeIn"
                data-wow-delay=".5s"
                data-wow-duration="2.5s"
              >
                {
                  trucks.map((truck , ind) => {
                    return(
                      <div className="col-12 col-sm-2 col-sm-6 col-md-4 home-trucks__card" key={ind}>
                        <div className="home-trucks__card-inner">
                          <Image src={truck.icon} layout="fill" objectFit="cover" style={{'backgroundSize':'100%'}} />
                          <div className="home-trucks__card-overlay">&nbsp;</div>
                          <button
                            aria-label="button"
                            className="btn home-trucks__btn"
                          >
                            <span>{truck.name}</span>
                          </button>
                          <Link href={truck.href}>&nbsp;</Link>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </section>
          <BlogGrid />
          <Testimonials />
          <Faq />
        </div>
      </div>
    </div>
  )
}

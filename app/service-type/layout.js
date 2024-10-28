import ContactBtn from "../components/contactBtn"
import EmailBtn from "../components/emailBtn"
import PageHeader from "../components/PageHeader/pageHeader"
import PhoneBtn from "../components/phoneBtn"
import BlogGrid from "@/app/components/BlogGrid/blogGrid"
import "./styles.css"
import Link from "next/link"

export default function Layout({ children }) {
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
    },
  ]

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
                  <Link href="/services" className="text-3xl me-2">
                    Services
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
                <div className="lg:flex about__buttons mx-auto max-w-[350px] md:max-w-[500px] lg:max-w-full">
                  <ContactBtn />
                  <PhoneBtn />
                  <EmailBtn />
                </div>
              </div>
            </div>
          </div>
          <div className="choose-your-service my-5 pt-3">
            <div className="container">
              <div className="row">
                <div className="choose-your-service__headline h2 text-center text-6xl lg:text-5xl">
                  Choose The Truck You Need
                </div>
              </div>
              <div className="row">
                <div className="d-flex flex-wrap justify-content-center mt-2">
                    {
                        trucks.map((truck , ind) => (
                            <Link
                                className="btn choose-your-service__item"
                                href={truck.href}
                                title={truck.name}
                            >
                                {truck.name}
                            </Link>
                        ))
                    }
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className=" mb-8 pb-8">
          <BlogGrid />
        </div>
      </div>
    </div>
  )
}

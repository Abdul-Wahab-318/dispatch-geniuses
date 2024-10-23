import ContactForm from "@/app/components/ContactForm/contactForm"
import Image from "next/image"

export default function Page() {
  return (
    <section className="section article pb-0" id="post-261">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-md-7">
            <h1 className="mb-4">Step Deck</h1>
            <ul className="article-bullets">
              <li>Obtaining permits for oversized loads</li>
              <li>Load balance and securement</li>
              <li>Limited specialized freight</li>
              <li>We charge only 5% of Gross, No contracts</li>
            </ul>
          </div>
          <div className="col-12 col-md-5">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="container mt-[40px] sm:mt-0">
        <div className="row">
          <div className="col-12 col-md-6">
            <h2 className="text-6xl lg:text-5xl" id="reefer-dispatch">
              <strong>Our Step Deck Dispatch Service</strong>
            </h2>
            <p>
              When it comes to hauling with step deck (or "drop deck") trailers,
              it’s all about going big or going home. Transporting oversized and
              over-height freight is a major responsibility that involves
              navigating complex organizational and logistical challenges to
              keep your business profitable. <br /> If you're spending too much time
              searching for step deck loads, negotiating freight rates, handling
              paperwork, and ensuring compliance with regulations and industry
              guidelines, you may not have the time to focus on delivering large
              step-deck or flatbed loads safely and on time. That’s where
              Dispatch Geniuses steps in.
            </p>
          </div>
          <div
            className="col-12 col-md-6 flex items-center min-h-[300px]"
            style={{ position: "relative" }}
          >
            <Image
              src={"/images/step-deck-1.avif"}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

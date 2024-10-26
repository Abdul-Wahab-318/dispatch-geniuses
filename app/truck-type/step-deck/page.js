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
              <li>A reliable source of high-paying loads</li>
              <li>Assistance with securing the proper permits</li>
              <li>Safety and efficiency through expert load planning</li>
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
            Step deck or drop deck trailers are the trailer types which are designed for maximum loading capacity without compromise. Transporting oversized or over-height freight is no joke, with challenging logistics that can often be the difference between success and failure. If you find yourself obsessing over the details of the logistics operations always looking for step deck loads or negotiating rates, printing documents and ensuring that you are compliant with regulations, you are probably missing on the most important task of delivering those large loads. That is where Dispatch Geniuses come in to make your life easier and your business much more efficient.
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

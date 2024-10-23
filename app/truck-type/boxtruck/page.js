import ContactForm from "@/app/components/ContactForm/contactForm"
import Image from "next/image"

export default function Page() {
  return (
    <section className="section article pb-0" id="post-261">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-md-7">
            <h1 className="mb-4">Boxtruck</h1>
            <ul className="article-bullets">
              <li>Consistent load opportunities for short-haul routes</li>
              <li>Efficient scheduling to meet tight delivery windows</li>
              <li>Support navigating urban areas and avoiding delays</li>
              <li>We charge only 7% of Gross, No contracts</li>
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
              <strong>Our Boxtruck Dispatch Service</strong>
            </h2>
            <p>
            A box trucking business offers the flexibility to run loads efficiently without the need for a commercial driver’s license, minimizing downtime. Success in this industry depends on finding the most profitable loads, coordinating trips seamlessly, and managing the constant stream of paperwork. For many small and medium-sized box truck businesses, balancing these tasks can feel overwhelming and may limit profitability. That’s where our box truck dispatch service comes in, offering a streamlined solution that can significantly boost your business's bottom line.
            </p>
          </div>
          <div
            className="col-12 col-md-6 flex items-center min-h-[300px]"
            style={{ position: "relative" }}
          >
            <Image
              src={"/images/hot-shot-1.avif"}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

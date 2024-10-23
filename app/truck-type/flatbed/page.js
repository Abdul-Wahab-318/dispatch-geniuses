import ContactForm from "@/app/components/ContactForm/contactForm"
import Image from "next/image"

export default function Page() {
  return (
    <section className="section article pb-0" id="post-261">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-md-7">
            <h1 className="mb-4">Flatbed</h1>
            <ul className="article-bullets">
              <li>Expert load matching for high-paying flatbed freight</li>
              <li>Compliance assistance with permits for oversized loads</li>
              <li>Support with load securement and tarping logistics</li>
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
              Your flatbed truck is a powerhouse in heavy-duty transportation,
              supporting industries in ways that other vehicles can't match.
              <br />
              Whether it’s delivering essential materials like piping, beams,
              and frames for construction projects, supplying landscaping sites
              with large quantities of materials and ballast, or transporting
              oversized equipment, flatbed trucks are key to heavy-duty
              logistics. These vehicles play a vital role in ensuring that
              bulky, irregularly shaped items get where they’re needed
              efficiently and safely, keeping critical projects on track.
            </p>
          </div>
          <div
            className="col-12 col-md-6 flex items-center min-h-[300px]"
            style={{ position: "relative" }}
          >
            <Image
              src={"/images/flatbed-1.avif"}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

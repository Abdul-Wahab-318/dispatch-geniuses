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
              <li>We provide you with high-paying flatbed freight</li>
              <li>We take care of the permits</li>
              <li>Assistance with load securement and tarping</li>
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
              <strong>Our Flatbed Dispatch Service</strong>
            </h2>
            <p>
            At Dispatch Geniuses, we have the necessary support services where we have grown to take flatbed trucking to the top. Our day-to-day activities enable our customers to focus on other essential areas of their businesses. Flatbed truckers work as the backbone in handling construction materials and oversized equipment that keeps the economy afloat. Our specialists connect you with high paying loads ensuring the wellbeing of your investments and generation of steady income. Thanks to our efficient operational processes, trusted clients, and clear communication – doing business with us is comfortable. Whether you have to deal with paperwork or deal with the rate negotiation – we will do it for you and you can concentrate on driving. Reach out to us today for a quote and allow us at Dispatch Geniuses to do the rest!
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

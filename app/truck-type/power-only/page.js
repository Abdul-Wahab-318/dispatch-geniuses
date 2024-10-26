import ContactForm from "@/app/components/ContactForm/contactForm"
import Image from "next/image"

export default function Page() {
  return (
    <section className="section article pb-0" id="post-261">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-md-7">
            <h1 className="mb-4">Power Only</h1>
            <ul className="article-bullets">
              <li>Constant flow of power only freight</li>
              <li>Increasing your earning potential</li>
              <li>Route planning to reduce the deadhead miles</li>
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
              <strong>Our Power Only Dispatch Service</strong>
            </h2>
            <p>
            At Dispatch Geniuses we work hand in hand with owner operators and fleets by providing them with power only loads, getting you the highest paying loads. From a normal perspective, power only trucking focuses only on the independent driver or a tractor to bear the burden of the trailers. This results in increased flexibility for the driver while also saving time / resources of the shippers. You don’t have to manage match loads, speak to the customers, take care of billing and papers as everything is taken care of, which lets you drive. With our services, cash flow, job satisfaction and the ability to accept preferred loads / routes is all guaranteed. Let us at Dispatch Geniuses help you streamline all your processes as a result increasing your effectiveness. Talk to us now to get more insights on power only dispatch solutions!
            </p>
          </div>
          <div
            className="col-12 col-md-6 flex items-center min-h-[300px]"
            style={{ position: "relative" }}
          >
            <Image
              src={"/images/power-only-1.avif"}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

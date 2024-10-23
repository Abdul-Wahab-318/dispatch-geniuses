import ContactForm from "@/app/components/ContactForm/contactForm"
import Image from "next/image"

export default function Page() {
  return (
    <section className="section article pb-0" id="post-261">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-md-7">
            <h1 className="mb-4">Hotshot</h1>
            <ul className="article-bullets">
              <li>Access to urgent, high-paying hot shot loads</li>
              <li>Quick dispatch for time-sensitive freight</li>
              <li>Help managing equipment maintenance and repairs</li>
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
              <strong>Our Hotshot Dispatch Service</strong>
            </h2>
            <p>
            Many people outside the trucking industry are unaware of the effort involved in getting their equipment, appliances, and materials delivered. At Dispatch Geniuses, we recognize that hotshot drivers are the "minutemen" of trucking, ensuring timely deliveries with precision. That’s why we provide premium hotshot dispatch services designed to boost the efficiency and profitability of your hotshot trucking business, helping you keep everything on track and on time.
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

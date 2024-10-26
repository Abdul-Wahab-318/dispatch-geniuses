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
              <li>Access to instant high-paying hot shot loads</li>
              <li>Instant dispatch of time-sensitive freight.</li>
              <li>Assistance in equipment maintenance and repairs</li>
              <li>We only charge 6% Gross, No long term agreements</li>
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
            With economic pressure and a highly competitive market, finding the right loads can be a daunting task for hotshot drivers. We help solve this with our hotshot dispatch services by providing dedicated professionals who actively find top paying loads for you. We access multiple load platforms, streamline paperwork, and save you the hassle of searching, so you can focus on delivering. Working with us has also been cost effective. In fact, we’ve been saving our clients time and money. So if you’re looking for a reliable partner who can help elevate your hotshot trucking business, Dispatch Geniuses has you covered. Don't hesitate to contact us, we're here to help!
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

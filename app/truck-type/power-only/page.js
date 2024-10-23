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
              <li>Steady stream of power-only freight to maximize earnings</li>
              <li>Trailer availability and maintenance support</li>
              <li>Route optimization to minimize deadhead miles</li>
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
            Dispatch Genuises offers top-notch power-only dispatch services to owner-operators and truck fleets, making it simple to match power-only loads with independent drivers and fleets. Whether you need to move equipment on a flatbed trailer, dry van, refrigerated van, shipping container, or tanker, our team specializes in finding the ideal power-only truck solution for any transport need. With our service, you can ensure smooth and efficient transportation every time.
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

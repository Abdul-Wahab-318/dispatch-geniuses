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
              <li>New ideas to grow revenue multiple times</li>
              <li>A better time management system for planned deliveries</li>
              <li>The most accurate and time efficient travel route that meets targets.</li>
              <li>We only charge 7% Gross, No long term agreements</li>
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
            Welcome to the world of Dispatch Geniuses, the top rated box truck dispatch services that aims in saving you time and money. Box truck owners are faced with the challenging task of having to look for loads and manage many other things but these tasks are made simple using our services. We make it simple for you by providing you with honest and reliable dispatch services. <br /> <br /> We use strategies which you don’t even know exist to make you better revenue than Dry Vans. Our complete services include the non-transport side of freight, such as navigation, regulatory compliance and paperwork. Whether you require complete assistance, or just a single service, we assist in increasing your productivity while also making yourself more profitable. Reach out to us today to improve your operations!
            </p>
          </div>
          <div
            className="col-12 col-md-6 flex items-center min-h-[300px]"
            style={{ position: "relative" }}
          >
            <Image
              src={"/images/box-truck-2.avif"}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

import ContactForm from "@/app/components/ContactForm/contactForm"
import Image from "next/image"

export default function Page() {
  return (
    <section
      className="section article pb-0"
      id="post-261"
    >
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-md-7">
            <h1 className="mb-4">Reefer</h1>
            <ul className="article-bullets">
              <li>Consistent temperature-controlled loads</li>
              <li>24/7 dispatch support for time-sensitive deliveries</li>
              <li>Comprehensive scheduling of reefer maintenance</li>
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
              <strong>Our Reefer Dispatch Service</strong>
            </h2>
            <p>
            Dispatch Geniuses has a dedicated Reefer Dispatch department that provides efficient and effective dispatch services for your reefer truck that meets your needs. Embracing the concept of cold chain management, our professionals take care of everything except the driving so that you remain focused on the most important activity – driving. This includes finding the best paid loads, handling the needed docs, speaking to customers, and complying with the regulations. With everything catered for, your business is poised for growth. <br /> <br /> We maintain active focus on your operations so that, with our tailored services, communication throughout our partnership and experience, everything runs as it should be without issues. Aim for the very top with Dispatch Geniuses – we are the ultimate facilitators of the customer’s growth so that we can reap smooth and dependable profits all the time. Call us today to get a quote!
            </p>
          </div>
          <div className="col-12 col-md-6 flex items-center min-h-[300px]" style={{'position':'relative'}} >
            <Image src={"/images/reefer-1.avif"}  layout="fill" objectFit="contain" />
          </div>

        </div>
      </div>
    </section>
  )
}

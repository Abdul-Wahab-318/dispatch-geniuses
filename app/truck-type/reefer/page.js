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
              <li>Steady flow of temperature-controlled loads</li>
              <li>24/7 dispatch support for time-sensitive deliveries</li>
              <li>Expert handling of reefer maintenance scheduling</li>
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
              <strong>Reefer Dispatch</strong>
            </h2>
            <p>
              Dispatch Genuises for Reefer Trucks — Comprehensive Dispatching
              Services
            </p>
            <p>
              Flatbed trucks are essential heavy-duty vehicles that play a vital
              role in supporting our economy. Their unique design makes them
              ideal for transporting oversized or unusually shaped items that
              other vehicles can’t handle. Whether it’s a construction project
              requiring pipes, beams, and frames, or landscaping sites that need
              to move large quantities of materials and ballast, flatbed trucks
              are the perfect solution. They excel in any situation where heavy
              equipment transport is necessary, showcasing their unmatched
              logistics capabilities.
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

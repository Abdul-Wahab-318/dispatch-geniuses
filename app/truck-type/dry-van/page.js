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
            <h1 className="mb-4">Dry Van</h1>
            <ul className="article-bullets">
              <li>Reliable load sourcing to minimize downtime</li>
              <li>Optimized route planning to reduce empty miles</li>
              <li>Strong relationships with brokers for better backhauls</li>
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
              <strong>Our Dry Van Dispatch Service</strong>
            </h2>
            <p>
                In the competitive world of transportation and logistics, dry van carriers and shippers are essential to ensuring the safe and efficient delivery of goods. At Dispatch Geniuses, we specialize in providing top-tier dry van dispatch services to streamline logistics and improve delivery efficiency. Our expert team is dedicated to supporting both dry van carriers and shippers, helping to optimize routes, reduce delays, and simplify the job for truck drivers. With our dispatch service, you can trust that your goods will reach their destinations reliably and on time.
            </p>
          </div>
          <div className="col-12 col-md-6 flex items-center min-h-[300px]" style={{'position':'relative'}} >
            <Image src={"/images/dry-van-2.png"}  layout="fill" objectFit="contain" />
          </div>

        </div>
      </div>
    </section>
  )
}

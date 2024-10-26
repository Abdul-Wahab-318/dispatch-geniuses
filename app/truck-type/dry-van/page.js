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
              <li>load sourcing which is reliable to minimize downtime</li>
              <li>Executing adequate route planning to the last mile</li>
              <li>Great rapport with brokers for backhauls</li>
              <li>We only charge 5% Gross, No long term agreements</li>
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
            At Dispatch Geniuses, we understand that dry van carriers and shippers form the primary structure of the transportation and logistics industry where time is money and competition is stiff. It is for this reason that we provide intelligent dispatch services that are aimed at making your life more comfortable. Our team of routing specialists has a unique optimization for the routes and the waiting times, bringing greater simplicity to the process for truck operators. You are assured of an effective dispatch with regards to the time of delivery of your goods with us. Make sure that Dispatch Geniuses helps you win the competition – every mile – every load – every time!
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

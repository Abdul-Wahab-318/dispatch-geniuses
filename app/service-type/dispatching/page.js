import ContactForm from "@/app/components/ContactForm/contactForm"
import Image from "next/image"

export default function Page() {
  return (
    <section className="section article pb-0" id="post-261">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-md-7">
            <h1 className="mb-4">Truck Dispatching</h1>
            <ul className="article-bullets">
              <li>Effective booking and routing of loads</li>
              <li>A dedicated driver helpline available 24/7</li>
              <li>Keeping the brokers updated</li>
            </ul>
          </div>
          <div className="col-12 col-md-5">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

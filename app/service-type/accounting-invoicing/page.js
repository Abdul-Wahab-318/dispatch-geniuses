import ContactForm from "@/app/components/ContactForm/contactForm"

export default function Page() {
  return (
    <section className="section article pb-0" id="post-261">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-md-7">
            <h1 className="mb-4">Accounting & Invoicing</h1>
            <ul className="article-bullets">
              <li>Invoice creation and submission</li>
              <li>Well-organized bookkeeping </li>
              <li>Follow-ups on payments and collections</li>
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


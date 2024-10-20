import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const Faq = () => {

    let content = [
        {
            'question': 'What services do you offer?',
            'answer': 'At Dispatch Geniuses, we provide a range of services specifically designed for the trucking industry, including:\n• Truck Dispatching: Connecting you with reliable carriers.\n• Paperwork Management: Streamlining all your essential documentation.\n• Accounting and Invoicing: Keeping your finances in check.\n• Safety & DOT Compliance: Ensuring you meet all regulatory requirements.\n• Business Expansion Guides: Helping you grow your trucking business.\n• IFTA Management: Simplifying your tax reporting.\n• Advisory Services: Assisting you with selecting factoring companies, ELDs, and insurance providers.'
        },
        {
            'question': 'How can I sign up with Dispatch Geniuses?',
            'answer': 'Getting started is easy! Simply visit our “Get Started” page, where you can review our requirements, fill out an application form, and upload the necessary documents. We\'ll guide you through each step to ensure a smooth onboarding process.'
        },
        {
            'question': 'What are the minimum requirements to work with you?',
            'answer': 'To partner with us, you need:\n• An MC number active for at least three months\n• Appropriate equipment that meets our specifications\n• Necessary documents including a W9 form, Certificate of Insurance, MC Authority, and Notice of Assignment for Factoring.'
        },
        {
            'question': 'Do I have to enter a long-term contract with Dispatch Geniuses?',
            'answer': 'No, our contract is primarily to give us the authority to book your loads. You can end the contract whenever you want, no questions asked.'
        },
        {
            'question': 'Do I have to be working under my own authority to use Dispatch Geniuses?',
            'answer': 'Yes, we work with owner-operators who have their own MC authorities, as well as carriers with company drivers.'
        },
        {
            'question': 'Will you work with me if I\'m new to the trucking business?',
            'answer': 'Absolutely! We are passionate about supporting truck drivers and carriers at every stage of their journey. While new carriers may face some challenges in securing the best loads—since many shippers and brokers prefer carriers with MC authorities that have been active for six months or more—we are dedicated to helping you succeed. Our team will work tirelessly to find you profitable opportunities in your first year. Once you reach that one-year milestone, accessing better rates and loads will become much easier.'
        },
        {
            'question': 'How do you eliminate double brokering?',
            'answer': 'At Dispatch Geniuses, transparency is key. We directly connect you with vetted carriers and ensure that all transactions are documented, eliminating the risk of double brokering. You can trust that you\'re always working with the original carrier.'
        },
        {
            'question': 'Can you handle my paperwork?',
            'answer': 'Absolutely! Our paperwork management service ensures all your essential documents are organized and processed efficiently, allowing you to focus on your core business activities.'
        },
        {
            'question': 'What types of trucks do you dispatch?',
            'answer': 'We work with various truck types, including:\n• Dry Vans\n• Reefers\n• Box Trucks/Straight Trucks\n• Flatbeds\n• Step Decks\n• Hot Shots\n• Power Only.'
        },
        {
            'question': 'How can I contact you for more information?',
            'answer': 'For any additional questions or to discuss your specific needs, feel free to contact us via email, phone, or through our website contact form. Our team is ready to assist you!'
        }
    ];
    

  return (
    <section data-wpr-lazyrender={1} className="section faq">
      <div
        className="container"
        itemScope=""
        itemType="http://schema.org/FAQPage"
      >
        <div className="row">
          <div className="col-12">
            <div className="h2 mb-5">FAQ</div>
          </div>
        </div>
        <div className="row">
          <Accordion type="single" collapsible>
            {
                content.map((content , idx) => {
                    return(
                        <AccordionItem value={`item-${idx+1}`} key={content.question} >
                            <AccordionTrigger className="text-5xl my-6 text-left">{idx+1}. { " " } {content.question} </AccordionTrigger>
                            <AccordionContent className="text-3xl py-3 mb-3">
                                <pre className="answer">{content.answer}</pre>
                            </AccordionContent>
                      </AccordionItem>
                    )
                })
            }
          </Accordion>
        </div>
      </div>
    </section>
  )
}

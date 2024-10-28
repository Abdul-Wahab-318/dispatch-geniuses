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
        'answer': 'Dispatch Geniuses offer several services tailored for the trucking sector, which include the following:\n\t• Truck Dispatching: Finding trustworthy brokers and linking them to the carriers.\n\t• Paperwork Management: Organizing all your important papers.\n\t• Accounting and Invoicing: Managing your accounts receivables.\n\t• Safety & DOT Compliance: Making sure you fulfill all obligations imposed by law.\n\t• Business Expansion Guides: Assisting you in the growth of your trucking company.\n\t• IFTA Management: Making tax reporting less cumbersome.\n\t• Advisory Services: Helping you with factoring companies, ELDs and insurance providers.'
    },
    {
        'question': 'What is the procedure of signing up with Dispatch Geniuses?',
        'answer': 'There’s nothing complicated in the process of joining us. You simply go to our “Get Started” page, review the requirements, fill in the information and we’ll reach out to you.'
    },
    {
        'question': 'What are the minimum requirements to work with you?',
        'answer': 'The requirements are as follows:\n\t• An MC number active for at least three months\n\t• Appropriate equipment that meets our specifications\n\t• Necessary documents including a W9 form, Certificate of Insurance, MC Authority, and Notice of Assignment for Factoring.'
    },
    {
        'question': 'Do I have to enter a long-term contract with Dispatch Geniuses?',
        'answer': 'No, our contract is primarily to give us the authority to book your loads. You can end the contract whenever you want, no questions asked.'
    },
    {
        'question': 'Do I have to be working under my own authority for Dispatch Geniuses to be effective for me?',
        'answer': 'In order to partner with us, yes, because we deal with owner operators with their own MC authorities as well as companies with their own drivers.'
    },
    {
        'question': 'Will you work with me if I\'m new to the trucking business?',
        'answer': 'Absolutely! We are passionate about supporting truck drivers and carriers at every stage of their journey. Yes, it may be harder for new carriers to find the best available loads for them as many shippers and brokers prefer working with carriers who have at least six month MC authority. But we do believe in you and our team will be looking for such available opportunities during your first year. After the first year has been completed, it will be easier to find better loads and rates out there.'
    },
    {
        'question': 'How do you eliminate double brokering?',
        'answer': 'At Dispatch Geniuses, transparency is of utmost importance. We put you in touch with carriers and brokers vetted by us and we write down every transaction made, thus eradicating the risk of double brokering. You can trust that you\'re always working with the original carrier.'
    },
    {
        'question': 'Can you handle my paperwork?',
        'answer': 'Most definitely! We have a document management system that delivers the required documentation as well as the other necessary documents that accompany the original so that you can concentrate on your business.'
    },
    {
        'question': 'What types of trucks do you dispatch?',
        'answer': 'We work with various truck types, including:\n\t• Dry Vans\n\t• Reefers\n\t• Box Trucks/Straight Trucks\n\t• Flatbeds\n\t• Step Decks\n\t• Hot Shots\n\t• Power Only.'
    },
    {
        'question': 'How can I contact you for more information?',
        'answer': 'If you have any further questions, or if you would like to elaborate your specific requirements, please reach us by email, or phone, or by our website contact form. You can reach our personnel and be assisted as well!'
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
                                <pre className="answer text-4xl xl:text-3xl">{content.answer}</pre>
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

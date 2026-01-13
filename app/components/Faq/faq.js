import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const Faq = () => {

let content = [
  {
    question: 'What services does Dispatch Geniuses offer?',
    answer: 'Dispatch Geniuses provides dedicated box truck dispatching and back-office support. We handle load sourcing, rate negotiation, booking, route planning, broker communication, and ongoing dispatch management so box truck owners can focus on driving and scaling.'
  },
  {
    question: 'What type of trucks do you work with?',
    answer: 'We only dispatch box trucks.\nThis includes straight trucks typically ranging from 16ft to 26ft.\nWe do not work with:\n\t• Semi trucks\n\t• Dry vans\n\t• Reefers\n\t• Flatbeds\n\t• Hotshots\nSpecialization is how we consistently deliver results.'
  },
  {
    question: 'Why do you only dispatch box trucks?',
    answer: 'Because box trucks behave differently than other equipment. Different lanes, different brokers, different rates, different strategies.\nBy focusing exclusively on box trucks, we have refined our process to help qualified operators consistently reach strong monthly gross revenue, with many clients crossing $20,000+ per month depending on effort, market conditions, and equipment.\nWe do not believe in being everything to everyone.'
  },
  {
    question: 'What is the process to get started with Dispatch Geniuses?',
    answer: 'The process is simple:\n\t1. Initial consultation to confirm fit\n\t2. Review of your authority and equipment\n\t3. Setup and onboarding\n\t4. Dispatch begins immediately after approval\nIf you are not a good fit, we will tell you upfront.'
  },
  {
    question: 'What are the minimum requirements to work with you?',
    answer: 'To work with Dispatch Geniuses, you must have:\n\t• A 1 year old active MC authority\n\t• A box truck in good operating condition\n\t• Insurance meeting broker requirements\n\t• Willingness to run consistently and communicate\nWe do not work with inactive authorities or part-time hobby setups.'
  },
  {
    question: 'Do I need my own authority?',
    answer: 'Yes. You must be operating under your own active authority.'
  },
  {
    question: 'Do you require a long-term contract?',
    answer: 'No contracts.\nWe believe results keep clients, not paperwork. Terms are discussed clearly before onboarding.'
  },
  {
    question: 'How much can I expect to make with Dispatch Geniuses?',
    answer: 'With a 26ft box truck running over the road, our dispatch strategy is designed to push operators toward $20,000+ in monthly gross revenue.\nIf we are unable to help you reach that level despite you running consistently and following our dispatch plan, you do not pay us.'
  },
  {
    question: 'How can I contact Dispatch Geniuses?',
    answer: 'You can contact Dispatch Geniuses by submitting the Contact Us form on our website.\nOur team will review your information and reach out if you are a good fit.'
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
                            <AccordionTrigger className="text-5xl my-5 text-left">{idx+1}. { " " } {content.question} </AccordionTrigger>
                            <AccordionContent className="text-3xl mb-3">
                                <pre className="answer text-[18px] ps-12  leading-[23px]">{content.answer}</pre>
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

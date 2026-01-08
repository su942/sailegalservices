import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What documents are required for a rent agreement?",
    answer:
      "You'll need identity proof (Aadhaar/PAN) and address proof for both landlord and tenant, property ownership documents, passport-size photographs, and details about the property including address and area.",
  },
  {
    question: "How long does it take to prepare a rent agreement?",
    answer:
      "We typically prepare and deliver rent agreements within 24-48 hours. For urgent requirements, we also offer same-day service. Registration at the Sub-Registrar office may take an additional 1-2 working days.",
  },
  {
    question: "Is registration of rent agreement mandatory?",
    answer:
      "In Maharashtra, registration is mandatory for agreements exceeding 11 months under the Maharashtra Rent Control Act. Unregistered agreements may not be admissible as evidence in court. We recommend registration for all agreements.",
  },
  {
    question: "What is the validity of a rent agreement?",
    answer:
      "Rent agreements are typically made for 11 months to avoid mandatory registration fees (though registration is still recommended). You can create agreements for longer durations like 2, 3, or 5 years with proper registration.",
  },
  {
    question: "Do you provide doorstep service?",
    answer:
      "Yes, we offer convenient doorstep service across Mumbai for document collection, signing, and delivery. Our representative will visit your location at a time that suits you.",
  },
  {
    question: "What are the stamp duty charges for rent agreements?",
    answer:
      "Stamp duty in Maharashtra is typically 0.25% of the total rent for the agreement period plus deposit amount, subject to a minimum of ₹100. Registration charges are ₹1,000. We'll provide you with the exact calculation based on your agreement terms.",
  },
  {
    question: "Can you help with police verification for tenants?",
    answer:
      "Absolutely! We provide complete assistance with police verification including filling out the required forms, document preparation, and guidance on the submission process at your local police station.",
  },
  {
    question: "What if there are disputes between landlord and tenant later?",
    answer:
      "A well-drafted and registered agreement provides legal protection to both parties. Our agreements include comprehensive clauses covering rent escalation, maintenance, notice period, and dispute resolution to minimize future conflicts.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Frequently Asked
              <span className="text-secondary"> Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Find answers to common questions about rent agreements and our services.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border-none shadow-trust px-6 data-[state=open]:shadow-trust-xl transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:text-secondary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

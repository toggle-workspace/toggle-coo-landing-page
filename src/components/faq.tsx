import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "Who will work on my project?",
    answer:
      "A senior team of strategists, designers, and marketers who work on your account directly, not junior staff routed through account managers.",
  },
  {
    question: "What makes your approach different?",
    answer:
      "We tie every deliverable back to a business outcome, and the same team that plans the strategy executes it, so nothing gets lost in handoff.",
  },
  {
    question: "Do you use AI in your work?",
    answer:
      "Yes, where it speeds up research, reporting, and iteration. Strategy and creative decisions stay with our team.",
  },
  {
    question: "When can I expect to see results?",
    answer:
      "Most clients see measurable movement within 90 days, with SEO and organic channels typically taking longer to compound.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We track revenue, pipeline, and retention alongside channel-level metrics, so reporting always ties back to business impact.",
  },
  {
    question: "Will I have visibility into what's being done?",
    answer:
      "You'll get clear, easy-to-read reporting and a direct line to the team working on your account.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work across SaaS, e-commerce, and B2B brands, adapting our playbooks to what drives growth in each.",
  },
];

export function FAQ() {
  return (
    <section className="w-full">
      <div className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-semibold tracking-tight md:text-4xl">
            Frequently Asked Questions
          </h2>
          <Accordion>
            {FAQS.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

const FAQSection = ({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) => {
  return (
    <div className="FAQ px-4 my-3">
      <h2 className="text-2xl font-bold my-4 text-center">
        Frequently Asked Questions
      </h2>
      <div>
        {faqs.map((faq, index) => (
          <div key={index} className="py-1">
            <p className="question text-xl font-semibold py-1">
              {faq.question}
            </p>
            <p className="answer text-md italic">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;

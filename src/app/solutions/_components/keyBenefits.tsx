interface Benefit {
  icon: any;
  heading: string;
  description: string;
}
const BenefitsSection = ({ benefits }: { benefits: Benefit[] }) => {
  return (
    <section>
      <h1 className="text-4xl font-bold text-center my-6">Key Benefits</h1>
      <div className="key-benefits grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:grid-rows-2 gap-6 items-center p-4">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="benefit grid grid-cols-1 place-items-center gap-2 border-4 p-2 lg:py-12 rounded-2xl bg-indigo-100 hover:scale-95"
          >
            <span className="icon ">{benefit.icon}</span>
            <p className="heading font-bold text-xl underline">
              {benefit.heading}
            </p>
            <p className="description text-lg text-center">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;

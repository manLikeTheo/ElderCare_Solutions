import { FaCheckDouble } from "react-icons/fa";
import { FaCheckToSlot } from "react-icons/fa6";

interface HowItWorksProps {
  heading: string;
  steps: { title: string; description: string }[];
}
const HowItWorks: React.FC<HowItWorksProps> = ({ heading, steps }) => {
  return (
    <section className="my-5 md:my-10 how-it-works bg-indigo-800">
      <h2 className="text-3xl text-indigo-50 font-bold capitalize text-center mb-2">
        {heading}
      </h2>
      <p className="text-xl my-3 text-center text-indigo-50 capitalize">
        Access Care and Support easily
      </p>
      <div className="steps space-y-3  p-10 ring-4 *:bg-indigo-50 *:p-6 ring-indigo-200 rounded-3xl text-[1.3rem] grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 place-items-center items-center">
        {steps.map((step, index) => (
          <div className="flex-col flex gap-2 ring-4 py-8 px-4 ring-indigo-200 rounded-3xl">
            <span>
              <FaCheckToSlot size={48} />
            </span>
            <p key={index}>
              <b>{step.title}:</b> {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;

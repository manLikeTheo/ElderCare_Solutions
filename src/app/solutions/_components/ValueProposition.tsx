import React from "react";
import { motion } from "framer-motion";

interface ValueProp {
  icon: React.ReactNode;
  heading: string;
  description: string;
}
const ValueProposition = ({
  valuePropositions,
}: {
  valuePropositions: ValueProp[];
}) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
          Why Choose WellAged?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valuePropositions.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="p-10 bg-stone-200 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{item.heading}</h3>
              <p className="text-[18px]  text-slate-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;

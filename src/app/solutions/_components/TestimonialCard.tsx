import React from "react";
import { Testimonial } from "./SolutionTestimonial";
import Image from "next/image";

interface TestimonialCardProps {
  testimonial: Testimonial;
}
const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-10 rounded-2xl shadow-lg">
      <p className="text-slate-600 mb-4 text-lg">{testimonial.text}</p>
      <div className="flex items-center gap-4">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={50}
          height={50}
          className=" w-12 h-12 rounded-full object-cover"
        />
        <div>
          <div className="font-bold text-lg">{testimonial.name}</div>
          <div className="text-[15px] text-slate-500">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

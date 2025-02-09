import React from "react";
import TestimonialCard from "./TestimonialCard";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  image: any;
}

const SolutionTestimonial = ({
  testimonials,
}: {
  testimonials: Testimonial[];
}) => {
  return (
    <section className="py-20 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
          Loved by Families Nationwide
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionTestimonial;

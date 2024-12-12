import ProgramCard from "./ProgramCard";
import { productOfferings } from "@/app/_data/product_offering";
function Programs() {
  return (
    <section className="flex flex-col px-6 py-6 gap-4 bg-sky-700">
      <div className="container mx-auto text-center">
        <h1
          className="text-5xl font-bold mb-6 uppercase stroke-text shadow-sm"
          style={{ textShadow: "6px 3px 16px rgba(0, 0, 0, 0.6)" }}
        >
          What We Offer
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-6 py-6">
          {productOfferings.map((productOffering, index) => (
            <ProgramCard key={index} productOffering={productOffering} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;

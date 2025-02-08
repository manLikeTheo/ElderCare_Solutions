import ProgramCard from "./ProgramCard";
import { productOfferings } from "@/app/_data/product_offering";

function Programs() {
  return (
    <section className="py-16 bg-sky-700 ">
      <div className="container px-10 mx-auto  py-4 md:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Products and Services
          </h1>
          <p className="text-xl text-slate-100 max-w-2xl mx-auto">
            Comprehensive solutions designed to empower seniors and bring peace
            of mind to families
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-container md:mx-auto lg:mx-0">
          {productOfferings.map((productOffering, index) => (
            <div
              key={index}
              className={`
                ${
                  index === productOfferings.length - 1 &&
                  productOfferings.length % 2 !== 0
                    ? "md:col-span-2 lg:col-span-1 lg:col-start-2"
                    : ""
                }
              `}
            >
              <ProgramCard productOffering={productOffering} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;

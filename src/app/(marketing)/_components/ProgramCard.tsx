import Image from "next/image";
import { ProductOffering } from "@/app/_data/product_offering";
import IconRenderer from "./IconRenderer";

interface ProgramCardProps {
  productOffering: ProductOffering;
}
const ProgramCard: React.FC<ProgramCardProps> = ({ productOffering }) => {
  return (
    <div className=" bg-sky-200 rounded-xl shadow-md flex-col flex justify-center items-center py-16 px-10">
      <IconRenderer icon={productOffering.icon} className="mb-4" />
      <h3 className="text-2xl  font-bold tracking-wide text-left">
        {productOffering.heading}
      </h3>
      <p className="text-left mt-2 italic text-xl">{productOffering.details}</p>
    </div>
  );
};

export default ProgramCard;

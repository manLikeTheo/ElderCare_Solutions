import Image from "next/image";
import { ProductOffering } from "@/app/_data/product_offering";
import IconRenderer from "./IconRenderer";

interface ProgramCardProps {
  productOffering: ProductOffering;
}
const ProgramCard: React.FC<ProgramCardProps> = ({ productOffering }) => {
  return (
    <div className="px-8 py-3 bg-amber-400 rounded-xl shadow-md flex-col flex justify-center items-center *:p-1">
      <IconRenderer icon={productOffering.icon} className="mb-4" />
      <h3 className="text-2xl  font-bold tracking-wide text-left">
        {productOffering.heading}
      </h3>
      <p className="text-left mt-2 italic text-xl">{productOffering.details}</p>
    </div>
  );
};

export default ProgramCard;

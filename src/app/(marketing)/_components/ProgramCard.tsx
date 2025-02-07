import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface ProgramCardProps {
  productOffering: {
    icon: IconDefinition | any;
    heading: string;
    details: string;
  };
}

export default function ProgramCard({ productOffering }: ProgramCardProps) {
  return (
    <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8">
      <div className="text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-sky-50 rounded-full">
          <FontAwesomeIcon
            icon={productOffering.icon}
            className="w-32 h-32 text-sky-600"
          />
        </div>

        {/* Heading */}
        <h3 className="text-2xl font-bold text-slate-800 mb-4">
          {productOffering.heading}
        </h3>

        {/* Details */}
        <p className="text-slate-600 leading-relaxed">
          {productOffering.details}
        </p>
      </div>
    </div>
  );
}

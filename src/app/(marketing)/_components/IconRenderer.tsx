import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";

interface IconRendererProps {
  icon: IconDefinition | string;
  className?: string;
}
const IconRenderer: React.FC<IconRendererProps> = ({ icon, className }) => {
  if (typeof icon === "string") {
    return (
      <Image
        src={icon}
        alt="icon"
        width={24}
        height={24}
        className={className}
      />
    );
  }
  return (
    <FontAwesomeIcon icon={icon} className={className} width={48} height={48} />
  );
};
export default IconRenderer;

import { Rocket, Phone, RotateCcw, Gift } from "lucide-react";
import { serviceGuarantees } from "@/constants";
import { ServiceGuaranteesProps } from "@/types";

const iconMap = {
  Rocket,
  Phone,
  RotateCcw,
  Gift,
};

export default function ServiceGuarantees({
  services = [...serviceGuarantees],
}: ServiceGuaranteesProps) {
  return (
    <div className="max-w-7xl mx-auto pt-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-12 ">
        {services.map((service, index) => {
          const IconComponent = iconMap[service.icon as keyof typeof iconMap];
          return (
            <div key={index} className="flex items-center justify-center">
              <div className="w-12 h-12 rounded-lg flex items-center ">
                <IconComponent className="h-6 w-6 text-black" />
                 
              </div>

              <div>
                <h3 className="text-md font-normal text-black ">
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)]">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}



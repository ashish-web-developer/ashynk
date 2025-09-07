// types
import type { FC, ReactNode } from "react";

// icons
import { Laptop } from "lucide-react";

const WorkDetailCard: FC<{
  label: string;
  description: string;
  children: ReactNode;
}> = ({ label, description, children }) => {
  return (
    <div className="inline-flex items-center gap-4 rounded-lg border-2 border-gray-100 px-8 py-6">
      {children}

      <div className="flex flex-col">
        <h5 className="text-2xl font-bold text-black">{label}</h5>
        <span className="text-sm font-semibold text-gray-600">
          {description}
        </span>
      </div>
    </div>
  );
};

export default WorkDetailCard;

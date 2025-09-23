import Image from "next/image";
// types
import type { FC } from "react";
import type { IProjectData } from "@/components/projects-list/projects-list.component";

const ProjectsCard: FC<IProjectData> = ({ src, heading, label }) => {
  return (
    <div className="relative h-[300px] w-[300px] min-w-[300px] overflow-hidden rounded-xl shadow-xl md:h-[400px] md:w-[400px] md:min-w-[400px]">
      <Image src={src} fill={true} alt={label} />
      <div className="absolute top-[1.5rem] left-[1.5rem] z-2">
        <h1 className="text-2xl font-semibold text-white">{heading}</h1>
        <p className="text-base font-medium text-white">{label}</p>
      </div>
    </div>
  );
};
export default ProjectsCard;

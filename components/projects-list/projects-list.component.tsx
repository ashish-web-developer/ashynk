// types
import type { FC } from "react";

// component
import ProjectsCard from "@/components/projects-list/projects-card.component";

const projects_data = [
  {
    heading: "Fortune Realm",
    label: "Login Page",
    src: "/projects-list/1.png",
  },
  {
    heading: "Fortune Realm",
    label: "Chat Page (Light Theme)",
    src: "/projects-list/2.png",
  },
  {
    heading: "Fortune Realm",
    label: "Chat Page (Dark Theme)",
    src: "/projects-list/3.png",
  },
  {
    heading: "Fortune Realm",
    label: "Poker",
    src: "/projects-list/4.png",
  },
];

export type IProjectData = (typeof projects_data)[number];
const ProjectsList: FC<{}> = ({}) => {
  return (
    <section className="flex w-full justify-center bg-white py-8 md:py-16">
      <div className="relative flex w-7xl flex-col overflow-hidden px-8">
        <h2 className="text-3xl font-bold text-gray-800 md:text-5xl">
          My Latest Works
        </h2>
        <p className="mt-2 font-medium text-gray-600">
          Perfect Solution for digital experience
        </p>
        <div
          id="project-container"
          className="md:mt-16 mt-8 flex w-full space-x-4 overflow-x-auto"
        >
          
          {projects_data.map((data, index) => {
            return <ProjectsCard {...data} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsList;

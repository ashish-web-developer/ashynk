// types
import type { FC } from "react";

// component
import WorkDetailCard from "@/components/introduction/work-detail-card.component";

// icons
import { Laptop, TabletSmartphone, Hexagon } from "lucide-react";

const work_type_details = [
  {
    label: "Website Design",
    description: "76 Projects",
    icon: (
      <span className="inline-block rounded-full bg-teal-700 p-6">
        <Laptop size={40} className="text-white" />
      </span>
    ),
  },
  {
    label: "Mobile App Design",
    description: "63 Projects",
    icon: (
      <span className="inline-block rounded-full bg-orange-300 p-6">
        <TabletSmartphone size={40} className="text-white" />
      </span>
    ),
  },
  {
    label: "Brand Identity",
    description: "47 Projects",
    icon: (
      <span className="inline-block rounded-full bg-red-500 p-6">
        <Hexagon size={40} className="text-white" />
      </span>
    ),
  },
];

const Introduction: FC = () => {
  return (
    <section className="flex w-full justify-center bg-white py-32">
      <div className="relative w-7xl px-8">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
          <div className="order-2 flex flex-col gap-4 md:order-1">
            {work_type_details.map(({ icon, ...detail }) => (
              <WorkDetailCard {...detail}>{icon}</WorkDetailCard>
            ))}
          </div>
          <div className="order-1 space-y-8 md:order-2">
            <h4 className="text-5xl font-semibold text-black">
              What Do I Help?
            </h4>
            <div className="space-y-8 font-semibold text-gray-500">
              <p>
                I help businesses craft scalable, user-friendly digital products
                by building modern web applications with React.js, Next.js, and
                JavaScript. I focus on reusable UI, performance optimization,
                and mobile-first design to ensure smooth user experiences.
              </p>
              <p>
                From creating real-time gaming platforms to developing scalable
                CRM dashboards, I bring both creativity and clean code to solve
                problems and deliver results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Introduction;

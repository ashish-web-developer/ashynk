// types
import type { FC } from "react";

// component
import VerticalTimeLineItem from "./vertical-timeline-item.component";

const work_experience_details = [
  {
    company: "MiM-Essay",
    location: "Hauz Khas, Delhi",
    start_date: "Nov 2021",
    end_date: "Jun 2023",
    designation: "Frontend Developer",
    description:
      "Worked on multiple internal tools to improve sales and content operations. Designed an admin view for the Blogs page at MiM-Essay for better content visibility. Enhanced the Sales CRM with features like Sales Notes, Call Tracking, Lead Stage History, and Follow-Up tracking. Developed the Focus 5 dashboard to prioritize key clients daily and built an Analytics-CRM to monitor lead sources across the sales funnel.",
    circle_color: "#94FBAB",
  },
  {
    company: "MMSA",
    location: "Bhopal, MP",
    start_date: "Jun 2020",
    end_date: "Oct 2021",
    designation: "Full Stack Developer",
    description:
      "Worked on both front-end and back-end projects, gaining strong experience in React.js, Node.js, and Laravel. Built reusable UI components, optimized APIs, and improved application performance. Collaborated with cross-functional teams to deliver end-to-end web solutions.",

    circle_color: "#8F250C",
  },
  {
    company: "Freelance Projects",
    location: "Remote",
    start_date: "Jul 2019",
    end_date: "May 2020",
    designation: "Frontend Developer",
    description:
      "Developed responsive websites for small businesses and startups using HTML, CSS, and JavaScript. Implemented SEO best practices, improved website accessibility, and created reusable components for faster development.",

    circle_color: "#094074",
  },
  {
    company: "Tech Vision",
    location: "Indore, MP",
    start_date: "Jan 2018",
    end_date: "Jun 2019",
    designation: "Junior Web Developer",
    description:
      "Started career by assisting in building static websites and basic CMS-based projects. Learned to work with version control (Git), collaborated in a small development team, and contributed to frontend bug fixes and UI enhancements.",

    circle_color: "#FF1654",
  },
];

export type IWorkExpericeDetail = (typeof work_experience_details)[number];

const WorkExperience: FC = () => {
  return (
    <section className="flex w-full justify-center py-8 md:py-16">
      <div className="relative w-7xl px-8">
        <h2 className="text-center text-3xl font-bold text-gray-800 md:text-5xl">
          My Work Experience
        </h2>
        <div className="mt-8">
          <ol>
            {work_experience_details.map((detail,index) => {
              return <VerticalTimeLineItem {...detail} key= {index} />;
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};
export default WorkExperience;

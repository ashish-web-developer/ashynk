// types
import type { FC } from "react";
import type { IWorkExpericeDetail } from "./work-experience.component";

// styled
import styled from "styled-components";

const StyledDot = styled.span<{
  $dot_background_color: string;
}>`
  &::after {
    background-color: ${(prop) => prop.$dot_background_color};
  }
`;

const VerticalTimeLineItem: FC<IWorkExpericeDetail> = ({
  company,
  location,
  start_date,
  end_date,
  description,
  designation,
  circle_color,
}) => {
  const color = "red";
  return (
    <li className="grid grid-cols-1 md:grid-cols-10">
      {/** Company details */}
      <div className="relative flex flex-col justify-start gap-2 border-l-2 border-dotted border-gray-500 pl-8 md:col-span-4 md:border-l-0 md:pl-0">
        <span className="text-lg font-semibold text-gray-800">
          {company}, {location}
        </span>
        <div className="font-semibold text-gray-500">
          <time>{start_date}</time> - <time>{end_date}</time>
        </div>
        <StyledDot
          $dot_background_color={circle_color}
          className={`absolute top-0 left-0 inline-block h-8 w-8 -translate-x-1/2 rounded-full border-2 border-dotted border-gray-500 bg-orange-50 after:absolute after:top-1/2 after:left-1/2 after:h-1/2 after:w-1/2 after:-translate-1/2 after:rounded-full md:hidden`}
        ></StyledDot>
      </div>
      <div className="relative flex flex-col justify-start gap-2 border-l-2 border-dotted border-gray-500 pb-6 pl-8 md:col-span-6">
        <StyledDot
          $dot_background_color={circle_color}
          className={`absolute top-0 left-0 hidden h-8 w-8 -translate-x-1/2 rounded-full border-2 border-dotted border-gray-500 bg-orange-50 after:absolute after:top-1/2 after:left-1/2 after:h-1/2 after:w-1/2 after:-translate-1/2 after:rounded-full md:inline-block`}
        ></StyledDot>
        <span className="text-lg font-semibold text-gray-800">
          {designation}
        </span>
        <p className="font-semibold text-gray-500">{description}</p>
      </div>
    </li>
  );
};
export default VerticalTimeLineItem;

// types
import { FC } from "react";

const nav_links = [
  { label: "Services" },
  { label: "Works" },
  { label: "Notes" },
  { label: "Experiences" },
];

const Footer: FC = () => {
  return (
    <section className="flex w-full justify-center py-8 md:py-16">
      <div className="relative w-7xl px-8">
        <div className="flex w-full flex-col justify-between gap-12 md:flex-row md:gap-0">
          <div className="space-y-8 text-gray-800 md:space-y-16">
            <h2 className="hidden text-5xl leading-[1.2] font-bold md:block">
              Let&apos;s make something
              <br /> amazing together.
            </h2>
            <h2 className="block text-4xl leading-[1.4] font-bold md:hidden">
              Let&apos;s make <br />
              something
              <br /> amazing together.
            </h2>
            <h4 className="text-3xl font-semibold md:text-4xl">
              Start by{" "}
              <span className="text-orange-500 underline underline-offset-4">
                saying Hi
              </span>
            </h4>
          </div>

          <div className="space-y-4 text-gray-800 md:space-y-6">
            <div>
              <h3 className="text-2xl font-bold">Information</h3>
              <address className="text-base font-semibold text-gray-500">
                New Vikas Nagar Loni G.Z.B UP 201102{" "}
              </address>
            </div>
            <ul className="list-none font-semibold text-gray-500">
              {nav_links.map(({ label }, index) => {
                return (
                  <li key={index} className="leading-8 md:leading-12">
                    {label}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="my-6 border-t-2 border-gray-300"></div>
        <div className="hidden md:block">
          {/* Left - Logo */}
          <div className="font-marck-script inline text-4xl font-bold">
            Ashish
          </div>{" "}
          &nbsp; &nbsp; | &nbsp; &nbsp;{" "}
          <span className="font-semibold text-gray-500">
            {" "}
            @2025. All Rights Reserved
          </span>
        </div>
        <div className="flex flex-col text-center gap-4 md:hidden">
          {/* Left - Logo */}
          <div className="font-marck-script inline text-3xl font-bold">
            Ashish
          </div>{" "}
          <div className="font-semibold text-gray-500">
            @2025. All Rights Reserved
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;

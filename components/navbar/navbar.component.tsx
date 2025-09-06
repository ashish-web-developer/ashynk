// types
import type { FC } from "react";

// icons
import { PhoneCall, MenuIcon } from "lucide-react";

const nav_links = [
  { label: "Services" },
  { label: "Works" },
  { label: "Notes" },
  { label: "Experiences" },
];

const NavBar: FC = () => {
  return (
    <nav className="flex w-full justify-center bg-orange-50 py-8 text-black">
      <div className="flex w-7xl items-center justify-between px-8">
        {/* Left - Logo */}
        <div className="font-marck-script text-4xl font-bold">Ashish</div>

        {/* Center - Navigation Links */}
        <div className="hidden gap-8 text-lg font-medium text-gray-600 sm:flex">
          {nav_links.map((link, idx) => (
            <button
              key={idx}
              className="rounded-2xl px-4 transition-colors duration-200 hover:border-x-2 hover:font-bold hover:text-teal-700"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right - Contact */}
        <div className="hidden space-x-4 sm:block">
          <span className="font-semibold">+91 9310 566 574</span>
          <button className="rounded-full bg-white p-3 font-semibold text-amber-800 shadow-md transition hover:bg-amber-300 hover:text-white">
            <PhoneCall size={20} className="text-teal-700" />
          </button>
        </div>

        {/* Mobile Action Icon  */}
        <button className="inline-block rounded-full bg-white p-3 shadow-md sm:hidden">
          <MenuIcon size={20} className="text-black" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

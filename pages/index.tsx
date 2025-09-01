// font
import { Dancing_Script, Poppins, Marck_Script } from "next/font/google";

// components
import NavBar from "@/components/navbar/navbar.component";

const dancing_script = Dancing_Script({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--dancing-script",
});

const mark_script = Marck_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--mark-script",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "800"],
  subsets: ["latin"],
  variable: "--poppins",
});

export default function Home() {
  return (
    <div
      data-theme={"light"}
      className={`${dancing_script.variable} ${poppins.variable} ${poppins.className} ${mark_script.variable} relative`}
    >
      <NavBar />
      <div className="relative">
        <div className="introduction-profile-background">
          <div className="content">{/* <Introduction/> */}</div>
        </div>
        <div className="bg-soft-white pt-30"></div>
        <div className="bg-gray-900"></div>
        <div className="blog-background"></div>
        <div className="bg-soft-white"></div>
      </div>
    </div>
  );
}

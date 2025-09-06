// font
import { Poppins, Marck_Script, Montserrat } from "next/font/google";

// components
import NavBar from "@/components/navbar/navbar.component";
import Hero from "@/components/hero/hero.component";

const mark_script = Marck_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--mark-script",
});

const montserrat = Montserrat({
  weight: ["400", "500", "600", "800"],
  subsets: ["latin"],
  variable: "--montserrat",
});

export default function Home() {
  return (
    <main
      data-theme={"light"}
      className={`${montserrat.variable} ${mark_script.variable} ${montserrat.className} relative min-h-screen w-screen bg-orange-50`}
    >
      <NavBar />
      <Hero />
    </main>
  );
}

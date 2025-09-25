// font
import { Marck_Script, Montserrat } from "next/font/google";

// components
import NavBar from "@/components/navbar/navbar.component";
import Hero from "@/components/hero/hero.component";
import Introduction from "@/components/introduction/introduction.component";
import WorkExperience from "@/components/work-experience/work-experience.component";
import ProjectsList from "@/components/projects-list/projects-list.component";
import Footer from "@/components/footer/footer.component";

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
      <Introduction />
      <WorkExperience />
      <ProjectsList />
      <Footer />
    </main>
  );
}

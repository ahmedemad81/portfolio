import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import { FaHome , FaIdBadge , FaMobile , FaDesktop } from "react-icons/fa";
import RecentProjects from "@/components/RecentProjects";

export const navItems = [
  { name: "Home", link: "./", icon: <FaHome />},
  { name: "About", link: "#about" , icon : <FaIdBadge /> },
  { name: "Projects", link: "#projects" , icon:<FaDesktop/ > },
  { name: "Testimonials", link: "#testimonials" , icon: <FaMobile /> },
  { name: "Contact", link: "#contact" ,icon: <FaMobile /> },
];

export default function Home() {
  return (
    <main className = "relative bg-black-100 w-full flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="max-w-7xl w-full">
        <FloatingNav  navItems = {navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
      </div>
    </main>
  );
}

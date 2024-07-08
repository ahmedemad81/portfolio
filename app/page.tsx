import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import { FaHome , FaIdBadge , FaMobile , FaDesktop } from "react-icons/fa";
import RecentProjects from "@/components/RecentProjects";
import { ReactElement } from "react";
import { navItems } from "@/data/navitems";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className = "relative bg-black-100 w-full flex justify-center items-center flex-col mx-auto overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav  navItems = {navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
}

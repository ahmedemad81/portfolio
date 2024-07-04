import { ReactElement } from 'react';
import { FaHome, FaIdBadge, FaDesktop, FaMobile } from 'react-icons/fa';

interface NavItem {
  name: string;
  link: string;
  icon: ReactElement;
}

export const navItems: NavItem[] = [
  { name: "Home", link: "./", icon: <FaHome /> },
  { name: "About", link: "#about", icon: <FaIdBadge /> },
  { name: "Projects", link: "#projects", icon: <FaDesktop /> },
  { name: "Testimonials", link: "#testimonials", icon: <FaMobile /> },
  { name: "Contact", link: "#contact", icon: <FaMobile /> },
];
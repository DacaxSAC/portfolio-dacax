import React from "react";
import { NavBarItem } from "../atoms/NavbarItem";

type NavItem = {
  label: string;
  href: string;
};

type NavBarProps = {
  items: NavItem[];
};

export const NavBar: React.FC<NavBarProps> = ({ items }) => {
  return (
    <nav className="flex items-center h-[58px] w-auto gap-[44px] px-[32px] py-[16px] border border-white/10 rounded-full shadow-md shadow-white/25">
      {items.map((item, index) => (
        <NavBarItem key={index} label={item.label} href={item.href} className=""/>
      ))}
    </nav>
  );
};
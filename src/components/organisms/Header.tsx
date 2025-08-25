import React from 'react';
import { NavBar } from '../molecules/Navbar';
import { Button } from '../atoms/Button';

export const Header: React.FC = () => {
    const navItems = [
    { label: "Inicio", href: "#home" },
    { label: "Sobre nosotros", href: "#" },
    { label: "Servicios", href: "#services" },
    { label: "Proyectos", href: "#projects" },
  ];

  return (
    <header className="fixed top-4 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4 relative">
        <Button onClick={() => console.log("Click")}>Dacax</Button>

        
        <div className="absolute left-1/2 -translate-x-1/2">
          <NavBar items={navItems} />
        </div>

        <Button onClick={() => console.log("Click")}>Contáctanos</Button>
      </div>
    </header>
  );
}
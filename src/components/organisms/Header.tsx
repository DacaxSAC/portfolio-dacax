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
    <header className="fixed top-[116px] left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto flex justify-center items-center gap-[56px] px-8 py-4 relative">
        <Button onClick={() => console.log("Click")} className='px-[40px]' >
          <img 
            src="/images/Dacax-Banner.png" 
            alt="Dacax-Banner" 
            style={{
              width: "104.76px",
              height: "26px",
              opacity: 1
            }} 
          />
        </Button>

        
        <div>
          <NavBar items={navItems} />
        </div>

        <Button onClick={() => console.log("Click")} className='px-[26px] bg-[#1292A929]'>Contáctanos</Button>
      </div>
    </header>
  );
}
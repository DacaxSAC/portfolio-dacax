import React from 'react';
import { NavBarItem } from '../atoms/NavBarItem';


export const NavBar: React.FC = () => {
    return (
        <nav className="flex items-center gap-6 px-6 py-2 bg-[#1292A933] border border-white/10 rounded-full shadow-md shadow-white/25">
            <NavBarItem label="Inicio" href="#" />
            <NavBarItem label="Servicios" href="#" />
            <NavBarItem label="Proyectos" href="#" />
        </nav>
    )
}

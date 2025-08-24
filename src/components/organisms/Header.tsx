import React from 'react';
import { NavBar } from '../molecules/Navbar';
import { Button } from '../atoms/Button';

export const Header: React.FC = () => {
    return (
        <header className="w-full">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
                <Button onClick={() => console.log("Click")}>Dacax</Button>
                <NavBar />
                <Button onClick={() => console.log("Click")}>Contáctanos</Button>
            </div>
        </header>
    )
}
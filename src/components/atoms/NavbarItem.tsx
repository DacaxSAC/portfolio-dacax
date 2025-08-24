import React from 'react';

interface NavBarItemProps {
    label: string;
    href: string;
    className?: string;
}

export const NavBarItem: React.FC<NavBarItemProps> = ({ label, href, className }) => {
    return (
        <a href={href} className={`text-white hover:text-gray-300 transition-colors ${className}`}>
            {label}
        </a>
    )
}

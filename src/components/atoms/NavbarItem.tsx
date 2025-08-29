import React from 'react';

interface NavBarItemProps {
    label: string;
    href: string;
    className?: string;
}

export const NavBarItem: React.FC<NavBarItemProps> = ({ label, href, className }) => {
    return (
        <a href={href} className={`text-[#FFFFFF] hover:text-gray-300 transition-colors font-['Roboto_Mono'] font-normal text-[20px] leading-[100%] tracking-[0%] text-center align-middle w-auto ${className}`}>
            {label}
        </a>
    )
}

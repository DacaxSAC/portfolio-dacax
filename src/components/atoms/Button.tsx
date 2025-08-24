import React, { ReactNode } from 'react'

interface ButtonProps {
    children: ReactNode,
    onClick: () => void,
    className?: string,
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
    return (
        <button onClick={() => console.log('Click')} className={`px-6 py-2 rounded-full border border-white/10 
                       bg-[#1292A933] shadow-md shadow-white/25 
                       text-white text-sm hover:bg-[#1292A955] transition-colors
                       ${className}`}>
            {children}
        </button>
    )
}
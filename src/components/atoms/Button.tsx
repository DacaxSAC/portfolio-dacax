import React, { ReactNode } from 'react'

interface ButtonProps {
    children: ReactNode,
    onClick: () => void,
    className?: string,
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
    return (
        <button onClick={() => console.log('Click')} className={`w-[185px] h-[58px] py-[16px] rounded-full border border-white/10 
                       shadow-md shadow-white/25 
                       text-[#FFFFFF] font-['Roboto_Mono'] font-normal text-[20px] leading-[100%] tracking-[0%]
                       hover:bg-[#1292A955] transition-colors 
                       ${className}`}>
            {children}
        </button>
    )
}
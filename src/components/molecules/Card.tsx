import { ReactNode } from "react";

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

export function Card({ icon, title, description }: CardProps) {
  return (
    <div className="flex flex-col items-start justify-center 
                rounded-2xl px-6 py-[27px] border border-cyan-200/40 
                bg-black/30 backdrop-blur-md
                shadow-md shadow-cyan-200/10 
                transition hover:shadow-cyan-200/30">

      <img src={icon} alt={title} className="w-[32px] h-[32px]"/>

      <h3 className="mt-[30px] font-[Roboto Mono] font-bold text-[20px] text-[#FFFFFF]">{title}</h3>
      <p className="mt-4 font-[Roboto Mono] font-normal text-[16px] text-[#FFFFFF] text-left">{description}</p>
    </div>
  )
}

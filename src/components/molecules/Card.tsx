// components/molecules/Card.tsx
import { ReactNode } from "react";

interface CardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function Card({ icon, title, description }: CardProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center 
                    rounded-2xl border border-cyan-200/40 bg-black/30 
                    shadow-md shadow-cyan-200/10 
                    p-6 transition hover:shadow-cyan-200/30">
      <div className="text-cyan-400 text-3xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  )
}

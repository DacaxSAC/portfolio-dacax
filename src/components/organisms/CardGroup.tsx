import { Card } from "../molecules/Card";
import { ReactNode } from "react";

interface CardData {
  icon: string;
  title: string;
  description: string;
}

interface CardGroupProps {
  cards: CardData[];
}

export const CardGroup: React.FC<CardGroupProps> = ({ cards }) => {
  return (
    <section className="mt-[76px] w-[1232px] h-[504px] grid grid-cols-3 gap-4">
      {cards.map((card, index) => (
        <Card
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </section>
  )
}

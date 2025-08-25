import { Card } from "../molecules/Card";
import { ReactNode } from "react";

interface CardData {
  icon: ReactNode;
  title: string;
  description: string;
}

interface CardGroupProps {
  cards: CardData[];
}

export const CardGroup: React.FC<CardGroupProps> = ({ cards }) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

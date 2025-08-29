import  React  from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, features }) => {
  return (
    <div className="flex items-center justify-center ">
    
    <div className="flex flex-col ">
      <h2 className="h-[63px] text-[48px] text-left font-[Roboto Mono] font-medium leading-normal tracking-[0%] text-[#FFFFFF]">{title}</h2>
      <p className="mt-[18px] h-[63px] w-[470px] text-[16px] text-left font-[Roboto Mono] font-normal leading-normal tracking-[0%] text-[#C4E4E9]">{description}</p>
      
      <ul className="mt-[68px] h-[78px] text-[20px] text-left font-[Roboto Mono] font-normal leading-normal tracking-[0%] text-[#FFFFFF] list-disc list-inside ">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
    <div className="">
      <img 
        src={image} 
        alt={title} 
        className="w-[606px] h-[394px] object-cover rounded-3xl border-[0.4px]" 
      />
    </div>
  </div>
  );
};

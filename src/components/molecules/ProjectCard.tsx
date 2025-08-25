import  React  from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, features }) => {
  return (
    <div className="flex flex-col md:flex-row p-6 gap-6 rounded-2xl shadow-lg max-w-4xl mx-auto">
    
    <div className="flex-1">
      <h2 className="text-2xl font-bold text-white text-left mb-4">{title}</h2>
      <p className="text-gray-300 text-left mb-4">{description}</p>
      
      <ul className="text-gray-300 text-left list-disc list-inside space-y-1">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>

    
    <div className="flex-1">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-auto object-cover rounded-xl" 
      />
    </div>
  </div>
  );
};

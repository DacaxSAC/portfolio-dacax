import { ProjectCard } from "../molecules/ProjectCard";
import { useState } from "react";

const projects = [
    {
        title: "AuditAI",
        description:
            "Proyecto impulsado por inteligencia artificial que analiza documentos y genera reportes de auditoría detallados con total precisión",
        image: "/images/auditai.png",
        features: [
            "Auditorías rápidas con IA",
            "Exportación de reportes en un clic",
            "Ahorro de tiempo en revisiones",
        ],

    },
    {
        title: "AuditAI",
        description:
            "Proyecto impulsado por inteligencia artificial que analiza documentos y genera reportes de auditoría detallados con total precisión",
        image: "/images/auditai.png",
        features: [
            "Auditorías rápidas con IA",
            "Exportación de reportes en un clic",
            "Ahorro de tiempo en revisiones",
        ],

    },
    {
        title: "AuditAI",
        description:
            "Proyecto impulsado por inteligencia artificial que analiza documentos y genera reportes de auditoría detallados con total precisión",
        image: "/images/auditai.png",
        features: [
            "Auditorías rápidas con IA",
            "Exportación de reportes en un clic",
            "Ahorro de tiempo en revisiones",
        ],

    },
];

export const Slider = () => {
    const [current, setCurrent] = useState(0);

    return (
        <section className="overflow-hidden relative w-full">
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {projects.map((p, i) => (
                    <div key={i} className="w-full flex-shrink-0">
                        <ProjectCard {...p} />
                    </div>
                ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center items-center gap-3 mt-6">
                {projects.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`p-0 transition-all duration-500 ${i === current
                                ? "w-14 h-3 bg-white rounded-full"
                                : "w-2 h-2 bg-gray-500 rounded-full"
                            }`}
                    />
                ))}
            </div>



        </section>
    );
};

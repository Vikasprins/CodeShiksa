// app/projects/[id]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";

const projects = [
    {
      id: 1,
      title: "Weather Dashboard App",
      category: "Web Development",
      level: "Beginner",
      image: "/weatherapp.jpeg",
      description: "A responsive weather application with real-time updates and 5-day forecast visualization.",
    },
    {
      id: 2,
      title: "Advanced Calculator",
      category: "Web Development",
      level: "Intermediate",
      image: "/calculator.avif",
      description: "A scientific calculator with memory functions, unit conversions, and graphing capabilities.",
    },
    {
      id: 3,
      title: "E-Commerce Store Clone",
      category: "Full Stack",
      level: "Advanced",
      image: "/commerce.avif",
      description: "A fully functional e-commerce platform with product filtering, cart management, and checkout process.",
    },
    {
      id: 4,
      image: "/task.webp",
      title: "Task Management System",
      category: "Productivity",
      level: "Intermediate",
      description: "A Kanban-style task manager with drag-and-drop interface, deadlines, and priority settings.",
    },
    {
      id: 5,
      image: "/socialmedia.jpg",
      title: "Social Media Dashboard",
      category: "Analytics",
      level: "Advanced",
      description: "A comprehensive analytics platform for tracking engagement across social media accounts.",
    },
    {
      id: 6,
      image: "/fitness.png",
      title: "Fitness Tracking App",
      category: "Health & Wellness",
      level: "Intermediate",
      description: "A personal fitness companion with workout plans, progress tracking, and nutritional guidance.",
    },
  ];

  export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const projectId = parseInt(id);
    const project = projects.find((p) => p.id === projectId);
  
    if (!project) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Image src={project.image} alt={project.title} width={800} height={400} className="w-full rounded-lg mb-6" />
      <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
      <p className="text-gray-600 mb-6">{project.description}</p>
      <p className="mb-2"><strong>Category:</strong> {project.category}</p>
      <p className="mb-4"><strong>Level:</strong> {project.level}</p>

      <div className="mt-8 p-4 bg-yellow-100 rounded-lg">
        <p className="font-semibold mb-2">Download Source Code</p>
        <p className="text-sm mb-4">{`Pay ₹49 to access this project's source code.`}</p>
        <button className="bg-[#045e52] text-white px-4 py-2 rounded hover:bg-[#033e38]">Pay & Download</button>
      </div>
    </div>
  );
}

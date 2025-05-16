//if you need code without 3d effect 
// "use client"
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// interface Project {
//   id: number;
//   image: string;
//   title: string;
//   category: string;
//   difficulty: string;
//   description: string;
// }

// const projects: Project[] = [
//   {
//     id: 1,
//     image: "/weatherapp.jpeg",
//     title: "Weather Dashboard App",
//     category: "Web Development",
//     difficulty: "Beginner",
//     description: "A responsive weather application with real-time updates and 5-day forecast visualization.",
//   },
//   {
//     id: 2,
//     image: "/calculator.avif",
//     title: "Advanced Calculator",
//     category: "Web Development",
//     difficulty: "Intermediate",
//     description: "A scientific calculator with memory functions, unit conversions, and graphing capabilities.",
//   },
//   {
//     id: 3,
//     image: "/commerce.avif",
//     title: "E-Commerce Store Clone",
//     category: "Full Stack",
//     difficulty: "Advanced",
//     description: "A fully functional e-commerce platform with product filtering, cart management, and checkout process.",
//   },
//   // {
//   //   id: 4,
//   //   image: "/task.webp",
//   //   title: "Task Management System",
//   //   category: "Productivity",
//   //   difficulty: "Intermediate",
//   //   description: "A Kanban-style task manager with drag-and-drop interface, deadlines, and priority settings.",
//   // },
//   // {
//   //   id: 5,
//   //   image: "/socialmedia.jpg",
//   //   title: "Social Media Dashboard",
//   //   category: "Analytics",
//   //   difficulty: "Advanced",
//   //   description: "A comprehensive analytics platform for tracking engagement across social media accounts.",
//   // },
//   // {
//   //   id: 6,
//   //   image: "/fitness.png",
//   //   title: "Fitness Tracking App",
//   //   category: "Health & Wellness",
//   //   difficulty: "Intermediate",
//   //   description: "A personal fitness companion with workout plans, progress tracking, and nutritional guidance.",
//   // },
// ];

// const PopularProjects: React.FC = () => {
//   const router = useRouter();
//   return (
//     <section className="py-12 px-4 bg-[#045e52]">
//       <h2 className="text-3xl font-bold text-center mb-14 text-white">Our Popular Projects</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
//         {projects.map((project) => (
//           <div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden ">
//             <div className="relative w-full h-48">
//               <Image src={project.image} alt={project.title} fill style={{ objectFit: "cover" }} />
//               <span
//                 className={`absolute top-2 right-2 text-white text-xs font-semibold px-3 py-1 rounded-full ${
//                   project.difficulty === "Beginner" ? "bg-green-500" :
//                   project.difficulty === "Intermediate" ? "bg-blue-500" :
//                   "bg-red-500"
//                 }`}
//               >
//                 {project.difficulty}
//               </span>
//             </div>
//             <Link href={`/projects/${project.id}`}>
//             <div className="p-4">
//               <span className="text-xs font-semibold uppercase bg-gray-200 px-2 py-1 rounded">{project.category}</span>
//               <h3 className="text-lg font-semibold mt-2">{project.title}</h3>
//               <p className="text-gray-500 text-sm mt-1">{project.description}</p>
//               <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
//                 <span>🔗 Source code available</span>
//                 <p className="text-blue-500 hover:underline">View details →</p>
//               </div>
//             </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//       <div className="text-center mt-8">
//         <button 
//         onClick={() => router.push("/projects")}
//         className="bg-white text-black px-8 py-2 rounded-lg font-semibold hover:bg-green-950 hover:text-white transition cursor-pointer">
//           Explore All Projects
//         </button>
//       </div>
//     </section>
//   );
// };

// export default PopularProjects;

"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface Project {
  id: number;
  image: string;
  title: string;
  category: string;
  difficulty: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    image: "/weatherapp.jpeg",
    title: "Weather Dashboard App",
    category: "Web Development",
    difficulty: "Beginner",
    description: "A responsive weather application with real-time updates and 5-day forecast visualization.",
  },
  {
    id: 2,
    image: "/calculator.avif",
    title: "Advanced Calculator",
    category: "Web Development",
    difficulty: "Intermediate",
    description: "A scientific calculator with memory functions, unit conversions, and graphing capabilities.",
  },
  {
    id: 3,
    image: "/commerce.avif",
    title: "E-Commerce Store Clone",
    category: "Full Stack",
    difficulty: "Advanced",
    description: "A fully functional e-commerce platform with product filtering, cart management, and checkout process.",
  },
];

const PopularProjects: React.FC = () => {
  const router = useRouter();

  return (
    <section className="py-12 px-4 bg-[#045e52]">
      <h2 className="text-3xl font-bold text-center mb-4 text-white">Our Popular Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  max-w-7xl mx-auto">
        {projects.map((project) => (
          <CardContainer key={project.id} className="inter-var h-full">
            <CardBody className="p-4 flex flex-col justify-between h-full bg-white dark:bg-black border border-black/10 dark:border-white/20 rounded-xl shadow-md dark:hover:shadow-emerald-500/10 hover:shadow-xl transition duration-200">
              <CardItem translateZ="100" className="w-full relative h-40">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-t-xl"
                />
                <span
                  className={`absolute top-2 right-2 text-white text-xs font-semibold px-3 py-1 rounded-full ${
                    project.difficulty === "Beginner"
                      ? "bg-green-500"
                      : project.difficulty === "Intermediate"
                      ? "bg-blue-500"
                      : "bg-red-500"
                  }`}
                >
                  {project.difficulty}
                </span>
              </CardItem>

              <Link href={`/projects/${project.id}`} className="flex flex-col justify-between flex-1">
                <div className="p-4 flex flex-col justify-between h-full">
                  <CardItem>
                    <span className="text-xs font-semibold uppercase bg-gray-200 px-2 py-1 rounded">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-semibold mt-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm mt-1 flex-grow">{project.description}</p>
                    <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
                      <span>🔗 Source code available</span>
                      <p className="text-blue-500 hover:underline">View details →</p>
                    </div>
                  </CardItem>
                </div>
              </Link>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => router.push("/projects")}
          className="bg-white text-black px-8 py-2 rounded-lg font-semibold hover:bg-green-950 hover:text-white transition cursor-pointer"
        >
          Explore All Projects
        </button>
      </div>
    </section>
  );
};

export default PopularProjects;


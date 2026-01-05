// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { FaSearch, FaGithub } from "react-icons/fa";
// import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

// const categories = ["All", "Web Development", "Full Stack", "Productivity", "Analytics", "Health & Wellness"];

// const projects = [
//   {
//     id: 1,
//     title: "Weather Dashboard App",
//     category: "Web Development",
//     level: "Beginner",
//     image: "/weatherapp.jpeg",
//     description: "A responsive weather application with real-time updates and 5-day forecast visualization.",
//   },
//   {
//     id: 2,
//     title: "Advanced Calculator",
//     category: "Web Development",
//     level: "Intermediate",
//     image: "/calculator.avif",
//     description: "A scientific calculator with memory functions, unit conversions, and graphing capabilities.",
//   },
//   {
//     id: 3,
//     title: "E-Commerce Store Clone",
//     category: "Full Stack",
//     level: "Advanced",
//     image: "/commerce.avif",
//     description: "A fully functional e-commerce platform with product filtering, cart management, and checkout process.",
//   },
//   {
//     id: 4,
//     image: "/task.webp",
//     title: "Task Management System",
//     category: "Productivity",
//     level: "Intermediate",
//     description: "A Kanban-style task manager with drag-and-drop interface, deadlines, and priority settings.",
//   },
//   {
//     id: 5,
//     image: "/socialmedia.jpg",
//     title: "Social Media Dashboard",
//     category: "Analytics",
//     level: "Advanced",
//     description: "A comprehensive analytics platform for tracking engagement across social media accounts.",
//   },
//   {
//     id: 6,
//     image: "/fitness.png",
//     title: "Fitness Tracking App",
//     category: "Health & Wellness",
//     level: "Intermediate",
//     description: "A personal fitness companion with workout plans, progress tracking, and nutritional guidance.",
//   },
// ];

// export default function ProjectLibraryPage() {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [search, setSearch] = useState("");

//   const filteredProjects = projects.filter((project) =>
//     (selectedCategory === "All" || project.category === selectedCategory) &&
//     project.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-10  ">
//       <h1 className="text-4xl font-bold mb-2 text-center">Project Library</h1>
//       <p className="text-gray-600 mb-8 text-center">Explore our collection of student-friendly coding projects</p>

//       {/* Filter & Search */}
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4  ">
//         <div className="flex gap-3 flex-wrap">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setSelectedCategory(cat)}
//               className={`px-3 py-1 rounded-full border text-sm cursor-pointer hover:bg-white hover:text-black ${selectedCategory === cat ? "bg-[#045e52] text-white" : "bg-[#045e52] text-white"
//                 }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Search projects..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="pl-10 pr-4 py-2 rounded-lg border border-[#045e52] w-full md:w-80"
//           />
//           <FaSearch className="absolute left-3 top-3 text-gray-400" />
//         </div>
//       </div>

//       {/* Project Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredProjects.map((project, index) => (
//           <CardContainer className="inter-var">
//             <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[22rem] h-auto rounded-xl p-6 border  ">
//               <Link href={`/projects/${project.id}`} key={project.id}>
//                 <div key={index} className="bg-white rounded-xl shadow-sm border overflow-hidden cursor-pointer">
//                   <CardItem translateZ="100" className="w-full mt-4">
//                     <Image
//                       src={project.image}
//                       alt={project.title}
//                       width={500}
//                       height={300}
//                       className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
//                     />
//                   </CardItem>
//                   <div className="p-4">
//                     <CardItem
//                       translateZ="50"
//                       className="text-xl font-bold text-neutral-600 dark:text-white"
//                     >
//                       <span className="text-xs px-2 py-1 bg-[#045e52] rounded-full text-white">{project.category}</span>
//                       <h3 className="font-semibold mt-2">{project.title}</h3>
//                       <p className="text-sm text-gray-600 mt-1">{project.description}</p>
//                       <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
//                         <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">{project.level}</span>
//                         <span className="flex items-center gap-1 hover:underline">
//                           <FaGithub /> Source code
//                         </span>
//                       </div>
//                     </CardItem>
//                   </div>
//                 </div>
//               </Link>
//             </CardBody>
//           </CardContainer>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaSearch, FaGithub } from "react-icons/fa";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const categories = [
  "All",
  "Web Development",
  "Full Stack",
  "Productivity",
  "Analytics",
  "Health & Wellness",
];

const projects = [
  {
    id: 1,
    title: "Weather Dashboard App",
    category: "Web Development",
    level: "Beginner",
    image: "/weatherapp.jpeg",
    description:
      "A responsive weather application with real-time updates and 5-day forecast visualization.",
  },
  {
    id: 2,
    title: "Advanced Calculator",
    category: "Web Development",
    level: "Intermediate",
    image: "/cal.jpg",
    description:
      "A scientific calculator with memory functions, unit conversions, and graphing capabilities.",
  },
  {
    id: 3,
    title: "E-Commerce Store Clone",
    category: "Full Stack",
    level: "Advanced",
    image: "/commerce.avif",
    description:
      "A fully functional e-commerce platform with product filtering, cart management, and checkout process.",
  },
  {
    id: 4,
    title: "Task Management System",
    category: "Productivity",
    level: "Intermediate",
    image: "/task.webp",
    description:
      "A Kanban-style task manager with drag-and-drop interface, deadlines, and priority settings.",
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    category: "Analytics",
    level: "Advanced",
    image: "/socialmedia.jpg",
    description:
      "A comprehensive analytics platform for tracking engagement across social media accounts.",
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    category: "Health & Wellness",
    level: "Intermediate",
    image: "/fitnessApp.webp",
    description:
      "A personal fitness companion with workout plans, progress tracking, and nutritional guidance.",
  },
];

function ProjectCard({ project }: { project: typeof projects[number] }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-white group/card dark:bg-black border border-black/[0.1] dark:border-white/[0.2] w-auto sm:w-[22rem] rounded-xl p-0 transition hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] overflow-hidden">
        <div>
          <Link href={`/projects/${project.id}`}>
            <CardItem translateZ="100">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="h-[200px] w-full object-cover rounded-t-xl group-hover/card:shadow-xl transition"
              />
            </CardItem>
            <CardItem translateZ="50" className="p-4 space-y-2 text-neutral-600 dark:text-white">
              <span className="inline-block text-xs px-2 py-1 bg-[#008dc0] text-white rounded-full">
                {project.category}
              </span>
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
            </CardItem>
          </Link>
          <div className="flex items-center justify-between text-xs text-gray-500 mt-3 px-4 pb-4">
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
              {project.level}
            </span>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:underline"
            >
              <FaGithub /> Source Code
            </a>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}


export default function ProjectLibraryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter(
    (project) =>
      (selectedCategory === "All" || project.category === selectedCategory) &&
      project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="max-w-6xl mx-auto px-4 py-16 space-y-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Project Library</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Explore our collection of student-friendly coding projects
        </p>
      </div>

      {/* Filters */}
      <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm border font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                selectedCategory === cat
                  ? "bg-[#008dc0] text-white border-[#045e52]"
                  : "bg-white text-black border-[#045e52] hover:bg-[#045e52]/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 pr-4 py-2 rounded-lg border border-[#045e52] w-full dark:bg-black dark:text-white dark:border-white focus:outline-none focus:ring-2 focus:ring-[#045e52]"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </section>

      {/* Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </main>
  );
}

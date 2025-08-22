import { Book, Briefcase, Code, Palette, Music, DollarSign, FileText, Calculator } from "lucide-react";
import Link from "next/link";
import { JSX } from "react";

interface Topic {
  icon: JSX.Element;
  title: string;
}

const topics: Topic[] = [
  { icon: <Code size={40} className="text-red-500" />, title: "MERN Stack" },
  { icon: <Palette size={40} className="text-purple-500" />, title: "Cloud Computing" },
  { icon: <Briefcase size={40} className="text-blue-500" />, title: "DevOps" },
  { icon: <Book size={40} className="text-green-500" />, title: "Digital Markting" },
  { icon: <Music size={40} className="text-indigo-500" />, title: "Graphic Deginer" },
  { icon: <DollarSign size={40} className="text-yellow-500" />, title: "Programming" },
  { icon: <Calculator size={40} className="text-cyan-500" />, title: "SEO Expert" },
  { icon: <FileText size={40} className="text-orange-500" />, title: "Video Editor" },
];

const PopularTopics: React.FC = () => {
  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl font-bold mb-12">Our Internship Program  </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto ">
      {topics.map((topic, index) => (
  <Link
    key={index}
    href={"/internships"}
  >
    <div className="p-6 bg-white text-[#045e52] border-4 border-[#045e52] shadow-md rounded-lg flex flex-col items-center hover:bg-white hover:text-black cursor-pointer">
      {topic.icon}
      <h3 className="mt-4 text-lg font-medium">{topic.title}</h3>
      <p className="text-gray-500 text-sm">Job Ready</p>
    </div>
  </Link>
))}

      </div>
    </section>
  );
};

export default PopularTopics;

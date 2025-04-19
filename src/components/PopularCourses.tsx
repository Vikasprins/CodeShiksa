"use client"
import Image from "next/image";
// import fullStack from "public/fullStack.webp"
import { useRouter } from "next/navigation";

interface Course {
  id: number;
  image: string;
  title: string;
  instructor: string;
  price: string;
  rating: number;
  students: number;
}

const courses: Course[] = [
  {
    id: 1,
    image: "/fullStack.webp",
    title: "Full Stack development Course",
    instructor: "Vikas Prins",
    price: "$49.99",
    rating: 4.8,
    students: 1200,
  },
  {
    id: 2,
    image: "/digitalMarketing.png",
    title: "Digital Marketing - Unleash Your Creativity",
    instructor: "Vikas Prins",
    price: "$39.99",
    rating: 4.6,
    students: 900,
  },
  {
    id: 3,
    image: "/graphic.jpg",
    title: "Graphic Deginer, From Beginner to Expert",
    instructor: "Vikas Prins",
    price: "$59.99",
    rating: 4.9,
    students: 1500,
  },
  // {
  //   id: 4,
  //   image: "/python.jpg",
  //   title: "Python Programming! Complete Course",
  //   instructor: "Rajesh",
  //   price: "$29.99",
  //   rating: 4.7,
  //   students: 750,
  // },
  // {
  //   id: 5,
  //   image: "/Ai.jpeg",
  //   title: "Artificial Intelligence",
  //   instructor: "Vikas Prins",
  //   price: "$44.99",
  //   rating: 4.8,
  //   students: 1100,
  // },
  // {
  //   id: 6,
  //   image: "/Cyber.jpeg",
  //   title: "Cyber Security Course",
  //   instructor: "Vikas Prins",
  //   price: "$34.99",
  //   rating: 4.6,
  //   students: 950,
  // },
];

const PopularCourses: React.FC = () => {
  const router = useRouter();
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Our Popular Courses</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {courses.map((course) => (
          <div key={course.id} className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer">
            {/* <div className="relative w-full h-48">
              <Image src={course.image} alt={course.title} layout="fill" objectFit="cover" />
            </div> */}
            <div className="relative w-full h-48">
              <Image
                src={course.image}
                alt={course.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-t-lg"
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold">{course.title}</h3>
              <p className="text-gray-500 text-sm">By {course.instructor}</p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-yellow-500 font-bold">{course.rating} ⭐</span>
                {/* <span className="text-gray-500 text-sm">{course.students} students</span> */}
              </div>
              {/* <p className="text-blue-500 font-bold mt-2">{course.price}</p> */}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => router.push("/courses")}
          className="bg-[#045e52] text-white px-6 py-2 rounded-lg font-medium hover:bg-white hover:text-[#045e52] transition cursor-pointer">
          Explore All Courses
        </button>
      </div>
    </section>
  );
};

export default PopularCourses;

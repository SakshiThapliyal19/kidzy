import Image from "next/image";

const courses = [
  {
    id: 1,
    title: "Creative Coding for Kids",
    description: "Learn to code with fun games and interactive lessons!",
    image: "/code.png",
  },
  {
    id: 2,
    title: "Art & Craft Workshop",
    description: "Unleash creativity with hands-on art and craft activities.",
    image: "/anc.png",
  },
  {
    id: 3,
    title: "Math Adventures",
    description: "Master math through exciting puzzles and challenges.",
    image: "/maths.png",
  },
  {
    id: 4,
    title: "Science Explorers",
    description: "Discover the wonders of science with fun experiments.",
    image: "/science.png",
  },
];

const Courses: React.FC = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-600 font-trap mb-6">
          Explore Our <span className="text-pink-500">Courses</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-10 font-trap">
          Fun and engaging courses designed for young learners!
        </p>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
              <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                <Image src={course.image} alt={course.title} layout="fill" objectFit="cover" />
              </div>
              <h3 className="text-2xl font-semibold text-indigo-600 font-trap mb-2">{course.title}</h3>
              <p className="text-gray-700 font-trap mb-4">{course.description}</p>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-trap font-medium px-5 py-2 rounded-full transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;

import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Aarav Mehta",
    role: "Parent",
    feedback: "Kidzy has transformed the way my child learns. The courses are fun, interactive, and educational!",
  },
  {
    id: 2,
    name: "Neha Sharma",
    role: "Teacher",
    feedback: "The platform is excellent for young learners. It keeps them engaged while teaching important skills!",
  },
  {
    id: 3,
    name: "Rohan Gupta",
    role: "Student",
    feedback: "I love playing and learning at the same time! My favorite is the coding course. It's amazing!",
  },
  {
    id: 4,
    name: "Ananya Patel",
    role: "Parent",
    feedback: "A safe and interactive learning environment for kids. Highly recommended for parents!",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-600 font-trap mb-6">
          What Our <span className="text-pink-500">Users Say</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-10 font-trap">
          Real stories from parents, teachers, and students!
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-2xl shadow-lg relative transform hover:scale-105 transition duration-300">
              <Quote className="absolute top-4 left-4 text-indigo-500 w-10 h-10 opacity-50" />
              <p className="text-gray-700 text-lg font-trap italic mb-4">"{testimonial.feedback}"</p>
              <h4 className="text-indigo-600 font-semibold text-xl font-trap">{testimonial.name}</h4>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

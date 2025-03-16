import { UserPlus, FileText, LayoutDashboard } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Register",
    description: "Sign up quickly with your email and create a secure password.",
    icon: <UserPlus className="w-12 h-12 text-indigo-600" />,
  },
  {
    id: 2,
    title: "Fill Your Details",
    description: "Provide your name, age, and learning preferences for a personalized experience.",
    icon: <FileText className="w-12 h-12 text-indigo-600" />,
  },
  {
    id: 3,
    title: "Access Your Dashboard",
    description: "Get access to personalized courses, progress tracking, and fun learning activities.",
    icon: <LayoutDashboard className="w-12 h-12 text-indigo-600" />,
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-600 font-trap mb-6">
          How <span className="text-pink-500">Kidzy</span> Works
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-10 font-trap">
          Get started in just three simple steps!
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="bg-white p-6 rounded-2xl shadow-lg text-center transform hover:scale-105 transition duration-300">
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold text-indigo-600 font-trap mb-2">{step.title}</h3>
              <p className="text-gray-700 text-lg">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

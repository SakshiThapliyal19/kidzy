import { Lightbulb, Users, BookOpenText, Heart, Star, Globe, Target, UserPlus } from "lucide-react";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 text-gray-800">
      {/* Hero Section */}
      <section className="w-full py-20 text-center">
        <h1 className="text-5xl font-bold text-indigo-600">About Kidzy</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Empowering young minds with fun, interactive, and engaging learning experiences.
        </p>
      </section>

      {/* Our Mission */}
      <section className="py-16 flex flex-col items-center">
        <Lightbulb className="w-16 h-16 text-indigo-600" />
        <h2 className="text-3xl font-semibold text-gray-800 mt-4">Our Mission</h2>
        <p className="text-lg text-gray-600 text-center max-w-lg mt-2">
          To create an innovative and inclusive learning space where kids explore, grow, and develop essential life skills.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 grid grid-cols-1 md:grid-cols-2 gap-10 text-center">
        <div className="flex flex-col items-center">
          <Users className="w-16 h-16 text-indigo-600" />
          <h3 className="text-2xl font-semibold mt-4">Community Driven</h3>
          <p className="text-gray-600 max-w-sm">
            A platform that fosters collaboration, teamwork, and friendships among young learners.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <BookOpenText className="w-16 h-16 text-indigo-600" />
          <h3 className="text-2xl font-semibold mt-4">Interactive Learning</h3>
          <p className="text-gray-600 max-w-sm">
            Engaging and gamified lessons that make learning enjoyable and effective.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <div className="flex flex-col items-center">
          <Heart className="w-16 h-16 text-pink-500" />
          <h3 className="text-2xl font-semibold mt-4">Passion</h3>
          <p className="text-gray-600 max-w-sm">We believe in nurturing curiosity and creativity in every child.</p>
        </div>
        <div className="flex flex-col items-center">
          <Star className="w-16 h-16 text-yellow-500" />
          <h3 className="text-2xl font-semibold mt-4">Excellence</h3>
          <p className="text-gray-600 max-w-sm">Striving for the highest quality in education and experiences.</p>
        </div>
        <div className="flex flex-col items-center">
          <Globe className="w-16 h-16 text-green-500" />
          <h3 className="text-2xl font-semibold mt-4">Diversity</h3>
          <p className="text-gray-600 max-w-sm">A safe and inclusive platform for children from all backgrounds.</p>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16 flex flex-col items-center">
        <UserPlus className="w-16 h-16 text-indigo-600" />
        <h2 className="text-3xl font-semibold text-gray-800 mt-4">Join Us</h2>
        <p className="text-lg text-gray-600 text-center max-w-lg mt-2">
          Become a part of our vibrant learning community and shape the future of education.
        </p>
      </section>
    </div>
  );
};

export default About;

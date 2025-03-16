import HeroSection from "@/app/Home/Hero";
import FeaturesSection from "@/app/Home/Feaures";
import CoursesSection from "@/app/Home/Courses";
import TestimonialsSection from "@/app/Home/Testimonials";
import HowItWorksSection from "@/app/Home/Howitworks";


const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <CoursesSection />
        <TestimonialsSection />
        <HowItWorksSection />
      </main>
    </div>
  );
};

export default Homepage;

import Image from 'next/image';

const Hero = () => {
  return (
    <section className="w-full md:-mt-15 min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center">
        {/* Left side text content */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 pr-0 lg:pr-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-indigo-600 font-trap">
            Discover <span className="text-pink-500">Fun</span> and <span className="text-yellow-500">Learning</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 font-trap leading-relaxed">
            Join thousands of kids on an amazing adventure of creativity, games, and knowledge that sparks imagination!
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-trap font-medium px-8 py-3 rounded-full text-lg transition duration-300">
              Start Playing
            </button>
            <button className="bg-transparent border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-trap font-medium px-8 py-3 rounded-full text-lg transition duration-300">
              For Parents
            </button>
          </div>
        </div>
        
        {/* Right side image grid */}
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden transform hover:scale-105 transition duration-300">
              <Image
                src="/kids1.png"
                alt="Kid learning"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
                priority
              />
            </div>
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden transform hover:scale-105 transition duration-300">
              <Image
                src="/kids2.png"
                alt="Kid playing"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
                priority
              />
            </div>
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden transform hover:scale-105 transition duration-300">
              <Image
                src="/kids3.png"
                alt="Kid reading"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden transform hover:scale-105 transition duration-300">
              <Image
                src="/kids4.png"
                alt="Kid creating"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
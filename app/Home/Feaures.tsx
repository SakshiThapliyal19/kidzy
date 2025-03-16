const FeaturesSection = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-600 font-trap">
            What Makes Us <span className="text-pink-500">Special</span>
          </h2>
          <p className="text-xl text-gray-600 font-trap max-w-2xl mx-auto">
            Discover all the amazing features designed to make learning fun and engaging for children of all ages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-blue-50 rounded-2xl p-6 hover:shadow-lg transition duration-300 border-2 border-blue-100">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-indigo-600 font-trap">Interactive Learning</h3>
            <p className="text-gray-600 font-trap leading-relaxed">
              Engaging lessons that combine fun activities with educational content to keep kids motivated and excited.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-pink-50 rounded-2xl p-6 hover:shadow-lg transition duration-300 border-2 border-pink-100">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-pink-500 font-trap">Fun Games</h3>
            <p className="text-gray-600 font-trap leading-relaxed">
              Educational games that make learning enjoyable and help children develop important cognitive skills.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-yellow-50 rounded-2xl p-6 hover:shadow-lg transition duration-300 border-2 border-yellow-100">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-yellow-500 font-trap">Safe Environment</h3>
            <p className="text-gray-600 font-trap leading-relaxed">
              A secure platform where parents can feel confident about their childrens online experience.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-green-50 rounded-2xl p-6 hover:shadow-lg transition duration-300 border-2 border-green-100">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-green-600 font-trap">Progress Tracking</h3>
            <p className="text-gray-600 font-trap leading-relaxed">
              Monitor your childs advancement with detailed progress reports and personalized recommendations.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-purple-50 rounded-2xl p-6 hover:shadow-lg transition duration-300 border-2 border-purple-100">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-purple-600 font-trap">Community Learning</h3>
            <p className="text-gray-600 font-trap leading-relaxed">
              Connect with other kids in a moderated environment to share ideas and learn together.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-indigo-50 rounded-2xl p-6 hover:shadow-lg transition duration-300 border-2 border-indigo-100">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-indigo-600 font-trap">Creative Tools</h3>
            <p className="text-gray-600 font-trap leading-relaxed">
              Unleash creativity with our drawing, storytelling, and music-making tools designed for young minds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
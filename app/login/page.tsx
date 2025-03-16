import Image from 'next/image';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Left side - decorative illustration */}
            <div className="md:w-1/2 bg-indigo-100 p-8 flex flex-col justify-center items-center">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-indigo-600 font-trap mb-6">Welcome Back!</h2>
                <div className="relative w-64 h-64 mx-auto">
                  <Image 
                    src="/register.png" 
                    alt="Kids playing" 
                    layout="fill" 
                    className="rounded-2xl"
                  />
                </div>
                
                <div className="mt-8">
                  <p className="text-indigo-700 font-trap text-lg mb-4">Your adventure continues with:</p>
                  <ul className="space-y-3 text-left pl-4">
                    <li className="flex items-center">
                      <span className="bg-yellow-200 p-1 rounded-full mr-2">🎨</span>
                      <span className="font-trap text-gray-700">New Creative Activities</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-pink-200 p-1 rounded-full mr-2">🏆</span>
                      <span className="font-trap text-gray-700">Progress Tracking</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-green-200 p-1 rounded-full mr-2">🧩</span>
                      <span className="font-trap text-gray-700">Weekly Challenges</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right side - login form */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-indigo-600 font-trap">Log In</h3>
                <p className="text-gray-600 font-trap">Welcome back! We have missed you!</p>
              </div>

              <form className="space-y-6">
                {/* Email field */}
                <div>
                  <label className="block text-gray-700 font-trap font-medium mb-2" htmlFor="email">
                    Parent Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                    </div>
                    <input
                      id="email"
                      type="email"
                      className="w-full pl-10 pr-4 py-3 text-black rounded-full border-2 border-indigo-100 focus:border-indigo-500 focus:outline-none font-trap"
                      placeholder="parent@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Password field */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-gray-700 font-trap font-medium" htmlFor="password">
                      Password
                    </label>
                    <a href="/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-800 font-trap">
                      Forgot Password?
                    </a>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <input
                      id="password"
                      type="password"
                      className="w-full pl-10 pr-4 py-3 text-black rounded-full border-2 border-indigo-100 focus:border-indigo-500 focus:outline-none font-trap"
                      placeholder="Your password"
                      required
                    />
                  </div>
                </div>

                {/* Remember me checkbox */}
                <div className="flex items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 font-trap">
                    Stay signed in
                  </label>
                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-trap font-medium py-3 px-4 rounded-full hover:opacity-90 transition duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-center justify-center">
                      <span>Continue the Adventure</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </button>
                </div>
              </form>

              {/* Register link */}
              <div className="text-center mt-6">
                <p className="font-trap text-gray-600">
                  Do not have an account yet?{" "}
                  <Link href="/register" className="text-indigo-600 hover:underline font-medium">
                    Sign up here!
                  </Link>
                </p>
              </div>
              
              {/* Fun graphic element */}
              <div className="mt-8 flex justify-center">
                <div className="flex space-x-3">
                  {['bg-red-400', 'bg-yellow-400', 'bg-green-400', 'bg-blue-400', 'bg-purple-400'].map((color, index) => (
                    <div 
                      key={index} 
                      className={`${color} w-3 h-3 rounded-full animate-bounce`} 
                      style={{ animationDelay: `${index * 0.1}s` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
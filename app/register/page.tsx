'use client'
import { useState } from 'react';
import Image from 'next/image';

const RegisterPage = () => {
  const [preview, setPreview] = useState<string | null>(null);
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Left side - decorative illustration */}
            <div className="md:w-1/2 bg-indigo-100 p-8 flex flex-col justify-center items-center">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-indigo-600 font-trap mb-6">Join Our Fun Adventure!</h2>
                <div className="relative w-64 h-64 mx-auto">
                  <Image 
                    src="/register.png" 
                    alt="Kids playing" 
                    layout="fill" 
                    className="rounded-2xl"
                  />
                </div>
                <div className="mt-8">
                  <p className="text-indigo-700 font-trap text-lg mb-4">Ready for a world of:</p>
                  <ul className="space-y-2 text-left pl-4">
                    <li className="flex items-center">
                      <span className="bg-yellow-200 p-1 rounded-full mr-2">🌟</span>
                      <span className="font-trap text-gray-700">Exciting Adventures</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-pink-200 p-1 rounded-full mr-2">🎮</span>
                      <span className="font-trap text-gray-700">Fun Games</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-blue-200 p-1 rounded-full mr-2">🧠</span>
                      <span className="font-trap text-gray-700">Learning Journeys</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-green-200 p-1 rounded-full mr-2">👨‍👩‍👧‍👦</span>
                      <span className="font-trap text-gray-700">New Friends</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right side - registration form */}
            <div className="md:w-1/2 p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-indigo-600 font-trap">Create Your Account</h3>
                <p className="text-black font-trap">Let us get you started on this amazing journey!</p>
              </div>

              <form className="space-y-6">
                {/* Parent's username field */}
                <div>
                  <label className="block text-black font-trap font-medium mb-2" htmlFor="parentName">
                    Parent Name <span className="text-pink-500">*</span>
                  </label>
                  <input
                    id="parentName"
                    type="text"
                    className="w-full px-4 py-3 text-black rounded-full border-2 border-indigo-100 focus:border-indigo-500 focus:outline-none font-trap"
                    placeholder="Your name"
                    required
                  />
                </div>

                {/* Email field */}
                <div>
                  <label className="block text-gray-700 font-trap font-medium mb-2" htmlFor="email">
                    Email Address <span className="text-pink-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-3 text-black rounded-full border-2 border-indigo-100 focus:border-indigo-500 focus:outline-none font-trap"
                    placeholder="parent@example.com"
                    required
                  />
                </div>

                {/* Kid's name field */}
                <div>
                  <label className="block text-gray-700 font-trap font-medium mb-2" htmlFor="kidName">
                    Child Name <span className="text-pink-500">*</span>
                  </label>
                  <input
                    id="kidName"
                    type="text"
                    className="w-full px-4 py-3 text-black rounded-full border-2 border-indigo-100 focus:border-indigo-500 focus:outline-none font-trap"
                    placeholder="Your child's name"
                    required
                  />
                </div>

                {/* Kid's age field */}
                <div>
                  <label className="block text-gray-700 font-trap font-medium mb-2" htmlFor="kidAge">
                    Child Age <span className="text-pink-500">*</span>
                  </label>
                  <select
                    id="kidAge"
                    className="w-full px-4 py-3 text-black rounded-full border-2 border-indigo-100 focus:border-indigo-500 focus:outline-none font-trap"
                    required
                  >
                    <option value="">Select age</option>
                    {[...Array(13)].map((_, i) => (
                      <option key={i} value={i + 3}>
                        {i + 3} years old
                      </option>
                    ))}
                  </select>
                </div>

                {/* Password field */}
                <div>
                  <label className="block text-gray-700 font-trap font-medium mb-2" htmlFor="password">
                    Password <span className="text-pink-500">*</span>
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="w-full px-4 py-3 text-black rounded-full border-2 border-indigo-100 focus:border-indigo-500 focus:outline-none font-trap"
                    placeholder="Create a password"
                    required
                  />
                </div>

                {/* Photo upload */}
                <div>
                  <label className="block text-gray-700 font-trap font-medium mb-2">
                    Child Photo (Optional)
                  </label>
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden border-2 border-dashed border-indigo-300">
                      {preview ? (
                        <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <label className="bg-indigo-500 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-indigo-600 transition duration-300 font-trap inline-block">
                        <span>Choose Photo</span>
                        <input 
                          type="file" 
                          className="hidden" 
                          accept="image/*" 
                          onChange={handleImageChange}
                        />
                      </label>
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-trap font-medium py-3 px-4 rounded-full hover:opacity-90 transition duration-300 transform hover:scale-105"
                  >
                    Let us Begin The Adventure!
                  </button>
                </div>
              </form>

              {/* Login link */}
              <div className="text-center mt-6">
                <p className="font-trap text-gray-600">
                  Already have an account?{" "}
                  <a href="/login" className="text-indigo-600 hover:underline font-medium">
                    Log in here!
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
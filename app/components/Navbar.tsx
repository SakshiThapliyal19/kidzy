'use client'
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-br sticky from-blue-100 to-purple-100 shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-3xl font-bold text-indigo-600 font-trap cursor-pointer">Kidzy</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/about" className="text-lg mt-2 text-gray-700 hover:text-indigo-600 font-trap">About</Link>
          <Link href="/contact" className="text-lg mt-2 text-gray-700 hover:text-indigo-600 font-trap">Contact</Link>
          <Link href="/register" className="text-lg text-indigo-600 font-trap font-medium border-2 border-indigo-600 py-2 px-2 rounded-full hover:bg-indigo-600 hover:text-white transition">Register</Link>
          <Link href="/login" className="text-lg bg-indigo-600 text-white font-trap font-medium py-2 px-4 rounded-full hover:bg-indigo-700 transition">Login</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-4 space-y-3 text-center">
          <Link href="/about" className="block text-lg text-gray-700 hover:text-indigo-600 font-trap">About</Link>
          <Link href="/contact" className="block text-lg text-gray-700 hover:text-indigo-600 font-trap">Contact</Link>
          <Link href="/register" className="block text-lg text-indigo-600 font-trap font-medium border-2 border-indigo-600 px-5 py-2 rounded-full hover:bg-indigo-600 hover:text-white transition mx-6">Register</Link>
          <Link href="/login" className="block text-lg bg-indigo-600 text-white font-trap font-medium px-5 py-2 rounded-full hover:bg-indigo-700 transition mx-6">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

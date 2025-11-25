import React from 'react';
import { FaGithub } from 'react-icons/fa';
import logo from "../../assets/App development-amico.png"

const FooterSection = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 mt-10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        <div className="flex items-center space-x-3">
          <img
            src={logo} 
            alt="AI ModelHub Logo"
            className="w-10 h-10"
          />
          <p className="text-xl font-bold">AI <br/> 
             
             <span className='text-purple-800'> ModelHub</span>

             </p>
        </div>

        {/* Center: Copyright */}
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} AI ModelHub. All rights reserved.
        </p>

        {/* Right: GitHub Links */}
        <div className="flex gap-4">
          <a
            href="https://github.com/afsara-afrose?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 flex items-center space-x-1"
          >
            <FaGithub />
            <span className='text-white font-semibold text-l'>Github</span>
            
          </a>
          
        </div>
      </div>
        </footer>
        
    );
};

export default FooterSection;
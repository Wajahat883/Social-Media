import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Users, Heart } from "lucide-react";
import Socialxlogos from "../../Pages/logos/Socialxlogos";
import './authform.css'
import xLogo from '../../assets/Pics/logo.png'

const Authform = ({ children, title, subtitle, linkText, linkTo }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br animated-gradient flex items-center justify-center px-4 py-8 ">
      <span className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></span>
      <span className="absolute bottom-20 right-10 w-32 h-32 border border-white rounded-full"></span>
      <span className="absolute top-1/25 right-100 w-16 h-16 border border-white rounded-full"></span>
      <span className="absolute bottom-1/3 left-15 w-16 h-16 border border-white rounded-full"></span>
      <span className="absolute bottom-1/3 right-15 w-16 h-16 border border-white rounded-full"></span>
        
      <div className="w-full max-w-5xl rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
        
        
        <div className="md:w-1/2 animated-gradient p-8 md:p-12 flex flex-col justify-center items-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 border border-white rounded-full"></div>
            <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-white rounded-full"></div>
          </div>

          <div className="relative z-10 text-center">
            <Socialxlogos />
              <div className="flex items-center space-x-3 mb-2">
        <img src={xLogo} alt="Logo" className="w-12 h-12 rounded-xl shadow-lg" />
        <span className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 text-transparent bg-clip-text tracking-wide">
          SocialX
        </span>
      </div>
              
            <p className="text-xl mb-6 opacity-90">Connect • Share • Discover</p>
            <p className="text-lg opacity-80 max-w-sm leading-relaxed">
              Join millions of people sharing their stories and connecting with friends around the world.
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-center justify-center space-x-2 text-sm">
                <MessageCircle className="w-4 h-4" />
                <span>Real-time messaging</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm">
                <Users className="w-4 h-4" />
                <span>Connect with friends</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm">
                <Heart className="w-4 h-4" />
                <span>Share your moments</span>
              </div>
            </div>
          </div>
        </div>

       
        <div className="w-full md:w-1/2 p-10 space-y-6 bg-white">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">{title}</h2>

          {children}

          <div className="flex justify-between text-sm text-gray-500">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-blue-500" />
              <span>Remember me</span>
            </label>
            <button className="hover:underline text-blue-600">Forgot password?</button>
          </div>

          <p className="text-center text-sm text-gray-600">
            {subtitle}{" "}
            <Link to={linkTo} className="text-blue-600 hover:underline">
              {linkText}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Authform;

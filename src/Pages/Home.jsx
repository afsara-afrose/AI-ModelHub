import React from "react";
import Slider from "../Components/slider";
import { Link, useLoaderData } from "react-router";
import ModelCard from "../Components/ModelCard";
import backgroundImg from "../assets/Bg-description.jpg";
import BgIMG from "../assets/BG-IMG.jpg";
import logo from "../assets/App development-amico.png";
import MyContainer from "../Components/MyContainer";

const Home = () => {
  const data = useLoaderData();

  return (
    <MyContainer className="min-h-screen px-4 md:px-6 lg:px-0">
      {/* Hero / Slider */}
      <header className="mb-12 mt-10">
        <Slider />
      </header>

      {/* Latest Models */}
      <section className="bg-fuchsia-300 rounded-2xl p-6 md:p-10 mb-16">
        <h1 className="text-center text-3xl md:text-4xl font-bold text-purple-700 mb-8">
          <span className="text-black">Latest </span> Models
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {data.map((model) => (
            <ModelCard key={model._id} model={model} />
          ))}
        </div>
      </section>

      {/* About AI Models */}
      <section className="bg-gray-800 rounded-xl p-6 md:p-10 shadow-md mb-16 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 flex justify-center">
          <img
            className="w-full max-w-sm md:max-w-md rounded-3xl transition-transform duration-300 hover:-translate-y-4"
            src={backgroundImg}
            alt="About AI Models"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">
            About <span className="text-blue-400">AI</span> Models
          </h2>
          <p className="text-white text-base md:text-lg leading-relaxed">
            AI models are algorithms trained to perform tasks that usually
            require human intelligence. They include neural networks, decision
            trees, and other machine learning methods. AI models are widely
            used in applications like chatbots, image recognition,
            recommendation systems, and natural language processing. By
            leveraging AI models, businesses and developers can automate
            processes, gain insights from data, and create intelligent
            applications that improve user experiences.
          </p>
        </div>
      </section>

      
      <section className="flex flex-col md:flex-row gap-6 bg-gradient-to-r from-blue-200 to-indigo-300 rounded-xl p-6 md:p-10 shadow-md mb-16 items-center">
        {/* Left Image */}
        <div className="md:w-1/3 flex justify-center md:justify-start">
          <img
            className="w-full max-w-xs md:max-w-sm rounded-2xl transition-transform duration-300 hover:-translate-x-3"
            src={BgIMG}
            alt="Get Started"
          />
        </div>

        {/* Center Text + Button */}
        <div className="md:w-1/3 flex flex-col justify-center text-center md:text-left px-2 md:px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            Get <span className="text-blue-700">Started</span>
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6 max-w-md mx-auto md:mx-0">
            Ready to manage your AI models? Sign up or log in to start
            creating, exploring, and deploying AI models with ease.
          </p>
          <Link
            to="/register"
            className="btn px-6 sm:px-8 py-2 sm:py-3 my-btn mx-auto md:mx-0"
          >
            Register Now
          </Link>
        </div>

        {/* Right Logo */}
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <img
            className="w-24 sm:w-28 md:w-40 rounded-2xl transition-transform duration-300 hover:-translate-y-4"
            src={logo}
            alt="App Logo"
          />
        </div>
      </section>
    </MyContainer>
  );
};

export default Home;

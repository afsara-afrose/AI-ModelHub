import React from "react";
import Slider from "../Components/slider";
import { Link, useLoaderData } from "react-router";
import ModelCard from "../Components/ModelCard";
import backgroundImg from "../assets/Bg-description.jpg";
import BgIMG from "../assets/BG-IMG.jpg";
import logo from "../assets/App development-amico.png";

const Home = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="min-h-screen ">
      {/* Hero / Slider */}
      <header className="mb-12 mt-10">
        <Slider />
      </header>

      {/* Latest Models */}
      <section className="px-4 md:px-16 mb-16">
        <h1 className="text-center text-3xl font-bold text-purple-700 mb-8">
          <span className="text-black">Latest </span> Models
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {data.map((model) => (
            <ModelCard key={model._id} model={model} />
          ))}
        </div>
      </section>

      {/* About AI Models */}
      <section className="bg-gray-800 rounded-xl p-10 shadow-md mx-4 md:mx-16 mb-16">
        <div>
          <img
            className="w-[400px] rounded-3xl items-center mx-auto transition-transform duration-300 hover:-translate-y-4"
            src={backgroundImg}
            alt=""
          />
        </div>
        <h2 className="text-3xl text-center font-bold text-purple-700 mb-6">
          About <span className="text-blue-400 text-4xl"> AI </span>Models
        </h2>
        <p className="text-white text-lg leading-relaxed">
          AI models are algorithms trained to perform tasks that usually require
          human intelligence. They include neural networks, decision trees, and
          other machine learning methods. AI models are widely used in
          applications like chatbots, image recognition, recommendation systems,
          and natural language processing. By leveraging AI models, businesses
          and developers can automate processes, gain insights from data, and
          create intelligent applications that improve user experiences.
        </p>
      </section>

      {/* Get Started / Call-to-Action */}
      <section className="flex flex-col md:flex-row gap-4 bg-gradient-to-r from-blue-200 to-indigo-300 rounded-xl p-6 md:p-10 text-center shadow-md mx-4 md:mx-16">
        {/* Left Image */}
        <div className="flex justify-center md:justify-start mb-6 md:mb-0">
          <img
            className="w-full max-w-sm md:max-w-[350px] rounded-2xl transition-transform duration-300 hover:-translate-x-3"
            src={BgIMG}
            alt=""
          />
        </div>

        {/* Center Text + Button */}
        <div className="flex flex-col justify-center items-center mb-10 md:items-start text-center md:text-left px-4 md:px-0 mb-6 md:mb-0">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            Get <span className="text-blue-700">Started</span>
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6 max-w-md">
            Ready to manage your AI models? Sign up or log in to start creating,
            exploring, and deploying AI models with ease.
          </p>
          <Link to="/register" className="btn px-6 sm:px-8 py-2 sm:py-3 my-btn">
            Register Now
          </Link>
        </div>

        {/* Right Logo */}
        <div className="flex justify-center md:justify-end">
          <img
            className="w-20 sm:w-28 md:w-[200px] rounded-2xl transition-transform duration-300 hover:-translate-y-4"
            src={logo}
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default Home;

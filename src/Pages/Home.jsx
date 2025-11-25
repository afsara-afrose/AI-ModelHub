import React from "react";
import Slider from "../Components/slider";
import { Link, useLoaderData } from "react-router";
import ModelCard from "../Components/ModelCard";
import backgroundImg from "../assets/Bg-description.jpg";
import BgIMG from "../assets/BG-IMG.jpg";

const Home = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="bg-red-100">
       <div className="bg-white min-h-screen">
      {/* Hero / Slider */}
      <header className="mb-12">
        <Slider />
      </header>

      {/* Latest Models */}
      <section className="px-4 md:px-16 mb-16">
        <h1 className="text-center text-3xl font-bold text-purple-700 mb-8">
          Latest Models
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {data.map((model) => (
            <ModelCard key={model._id} model={model} />
          ))}
        </div>
      </section>

      {/* About AI Models */}
      <section
        className="bg-gray-800 rounded-xl p-10 shadow-md mx-4 md:mx-16 mb-16"
        
      >
        <h2 className="text-3xl text-center font-bold text-purple-700 mb-6">
          About <span className='text-Blue-400 text-4xl'> AI </span>Models
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
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
      <section className=" flex gap-4 bg-gradient-to-r from-blue-200 to-indigo-300 rounded-xl p-10 text-center shadow-md mx-4 md:mx-16 mb-16">
        <div>
          <img  className='w-[350px] rounded-2xl' src={BgIMG} alt="" />

        </div>
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">Get Started</h2>
        <p className="text-white text-lg mb-6">
          Ready to manage your AI models? Sign up or log in to start creating,
          exploring, and deploying AI models with ease.
        </p>
        <Link
          to="/register"
          className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition duration-300"
        >
          Register Now
        </Link>
        </div>
      </section>
    </div>

    </div>

   
  );
};

export default Home;

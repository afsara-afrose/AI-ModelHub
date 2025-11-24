import React from "react";
import { Link } from "react-router";

const ModelCard = ({ model }) => {
  const { _id, name, framework, useCase, image } = model;

  return (
    <div className="bg-purple-100  shadow-lg rounded-2xl p-5 border border-purple-500 hover:shadow-2xl  hover:-translate-y-2 transition duration-300 cursor-pointer ">
      <img
        src={image}
        alt={name}
        className="h-40 w-full p-3 bg-cyan-50 border  object-cover rounded-lg mb-4"
      />

      <h2 className="text-xl font-semibold mb-2">{name}</h2>

      <p className="text-gray-600">
        <span className="font-medium">Framework:</span> {framework}
      </p>

      <p className="text-gray-600 mb-3">
        <span className="font-medium">Use Case:</span> {useCase}
      </p>

      <Link
        to={`/models/${_id}`}
        className="inline-block card-btn text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-700"
      >
        View Details
      </Link>
    </div>
  );
};

export default ModelCard;

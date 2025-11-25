import React from 'react';
import { Link } from 'react-router';


const MyModelCard = ({ model }) => {
  if (!model) return null; // safeguard

  const { _id, name, framework, useCase, createdBy, image } = model;

  return (
    <div className="border border-gray-200 rounded-2xl shadow-lg p-5 bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

      {/* IMAGE */}
      <img
        src={image}
        alt={name}
        className="w-full h-52 object-cover rounded-xl mb-4 border"
      />

      {/* NAME */}
      <h2 className="text-xl font-bold text-gray-900">{name}</h2>

      {/* INFO */}
      <p className="text-gray-600 mt-2">
        <span className="font-semibold">Framework:</span> {framework}
      </p>

      <p className="text-gray-600">
        <span className="font-semibold">Use Case:</span> {useCase}
      </p>

      <p className="text-gray-600 mb-3">
        <span className="font-semibold">Created By:</span> {createdBy}
      </p>

      {/* VIEW DETAILS BUTTON */}
      <Link
        to={`/model-details/${_id}`}
        className="card-btn inline-block text-center w-full mt-3"
      >
        View Details
      </Link>
    </div>
  );
};

export default MyModelCard;

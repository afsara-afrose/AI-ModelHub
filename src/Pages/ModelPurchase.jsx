import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router";


const   ModelPurchase = () => {
  const { user } = useContext(AuthContext);
  const [purchasedModels, setPurchasedModels] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/my-purchases?email=${user.email}`)
      .then(res => res.json())
      .then(data => setPurchasedModels(data.result || []));
  }, [user?.email]);

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-10">
        My <span className="text-purple-700">Purchased Models</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {purchasedModels.map(model => (
          <div
            key={model._id}
            className="border border-gray-200 rounded-2xl shadow-lg p-5 bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <img
              src={model.image}
              alt={model.name}
              className="w-full h-52 object-cover rounded-xl mb-4 border"
            />
            <h2 className="text-xl font-bold text-gray-900">{model.name}</h2>
            <p className="text-gray-600">
              <span className="font-semibold">Framework:</span> {model.framework}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Use Case:</span> {model.useCase}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Created By:</span> {model.createdBy}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Purchased By:</span> {model.purchasedBy}
            </p>
            <Link
              to={`/model-details/${model._id}`}
              className="card-btn inline-block text-center w-full mt-3"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelPurchase;

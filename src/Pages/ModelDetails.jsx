import React, { useContext, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import MyContainer from "../Components/MyContainer";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const ModelDetails = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const [model, setModel] = useState(data.result);
  const navigate = useNavigate();

  const handlePurchase = () => {
    if (!user?.email) return toast.error("Please login first");

    const finalModel = {
      name: model.name,
      image: model.image,
      framework: model.framework,
      useCase: model.useCase,
      createdBy: model.createdBy,
      purchasedBy: user.email,
    };

    fetch(
      `https://ai-model-hub-server.vercel.app/model-purchase/${model._id}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalModel),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Successfully Purchased");

        // Realtime UI update
        setModel((prev) => ({ ...prev, purchased: prev.purchased + 1 }));
      })
      .catch((err) => {
        console.log(err);
        toast.error("Purchase Failed!");
      });
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://ai-model-hub-server.vercel.app/models/${model._id}`, {
          method: "Delete",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            navigate("/all-model");
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <MyContainer>
      <h1 className="text-center font-bold mt-10 text-3xl ">
        MODEL <span className="text-purple-700">DETAILS</span>{" "}
      </h1>
      <div className="max-w-4xl mx-auto mt-10 p-8 bg-purple-50 shadow-xl rounded-2xl border border-gray-200">
        {/* TITLE */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          {model.name}
        </h1>

        {/* IMAGE */}
        <div className="flex justify-center mb-8">
          <img
            src={model.image}
            alt={model.name}
            className="rounded-xl  bg-emerald-50 p-4 shadow-lg w-80 h-80 object-cover border border-gray-400 "
          />
        </div>

        {/* DETAILS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-5 rounded-xl border shadow-sm">
            <p className="text-gray-600 font-semibold">Framework:</p>
            <p className="text-l font-bold text-blue-700">{model.framework}</p>
          </div>

          <div className="bg-gray-50 p-5 rounded-xl border shadow-sm">
            <p className="text-gray-600 font-semibold">Use Case:</p>
            <p className="text-l font-bold text-green-700">{model.useCase}</p>
          </div>

          <div className="bg-gray-50 p-5 rounded-xl border shadow-sm">
            <p className="text-gray-600 font-semibold">Dataset:</p>
            <p className="text-l font-bold text-purple-700">{model.dataset}</p>
          </div>

          <div className="bg-gray-50 p-5 rounded-xl border shadow-sm">
            <p className="text-gray-600 font-semibold">Purchased Count:</p>
            <p className="text-l font-bold text-rose-700">
              Purchased {model.purchased}{" "}
              {model.purchased > 1 ? "times" : "time"}
            </p>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="bg-gray-50 p-6 rounded-xl border shadow-sm mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Description
          </h2>
          <p className="text-gray-700 leading-relaxed">{model.description}</p>
        </div>

        {/* BOTTOM INFO */}
        <div className="mt-6 flex flex-col md:flex-row justify-between text-gray-600 text-sm">
          <p>
            <span className="font-semibold">Created At:</span>{" "}
            {new Date(model.createdAt).toLocaleDateString()}
          </p>

          <p>
            <span className="font-semibold">Created By:</span> {model.createdBy}
          </p>
        </div>
        {/* Button */}
        {user?.email === model.createdBy && (
          <div className="flex justify-between gap-4 mt-8">
            <Link to={`/update-model/${model._id}`} className="card-btn">
              Edit Model Details
            </Link>
            <button onClick={handlePurchase} className="card-btn">
              Purchase Model
            </button>

            <button onClick={handleDelete} className="card-btn">
              Delete
            </button>
          </div>
        )}
      </div>
    </MyContainer>
  );
};

export default ModelDetails;

import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import Loader from "../Components/Loader";

const AddModel = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please login first!");
      return;
    }

    const formData = {
      name: e.target.name.value,
      framework: e.target.framework.value,
      useCase: e.target.useCase.value,
      dataset: e.target.dataset.value,
      description: e.target.description.value,
      image: e.target.image.value,
      createdBy: user.email,
      createdAt: new Date().toISOString(),
      purchased: 0,
    };

    setLoading(true);

    fetch("http://localhost:3000/add-model", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        toast.success("Model added successfully!");
        navigate("/all-model");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong!");
      })
      .finally(() => setLoading(false));
  };

  
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="card bg-purple-50 border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
      <div className="mt-10">
        <div className="card-body p-5 mt-10 relative">
          <h2 className="text-2xl font-bold text-center mb-6">Add New Model</h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="label font-medium">Model Name</label>
              <input
                type="text"
                name="name"
                placeholder="Model Name"
                required
                className="input w-full rounded-full focus:outline-gray-200"
              />
            </div>

            <div>
              <label className="label font-medium">Framework</label>
              <input
                type="text"
                name="framework"
                placeholder="Model FrameWork"
                required
                className="input w-full rounded-full focus:outline-gray-200"
              />
            </div>

            <div>
              <label className="label font-medium">Use Case</label>
              <input
                type="text"
                name="useCase"
                placeholder="Use-Case"
                required
                className="input w-full rounded-full focus:outline-gray-200"
              />
            </div>

            <div>
              <label className="label font-medium">Dataset</label>
              <input
                type="text"
                name="dataset"
                placeholder="Dataset"
                required
                className="input w-full rounded-full focus:outline-gray-200"
              />
            </div>

            <div>
              <label className="label font-medium">Description</label>
              <textarea
                name="description"
                placeholder="description ..."
                required
                rows="3"
                className="textarea w-full rounded-2xl focus:outline-gray-200 h-[200px]"
              ></textarea>
            </div>

            <div>
              <label className="label font-medium">Image URL</label>
              <input
                type="url"
                name="image"
                placeholder="https://ibb.co/sample-image-bert-diagram"
                required
                className="input w-full rounded-full focus:outline-gray-200"
              />
            </div>

            <button
              type="submit"
              className="btn w-full my-btn"
            >
              ADD MODEL
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AddModel;

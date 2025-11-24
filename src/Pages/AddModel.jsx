import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const AddModel = () => {
  const { user } = useContext(AuthContext);
  const navigate=useNavigate();

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
      purchased: 0, // default to 0
    };

    console.log(formData);

    fetch("http://localhost:3000/add-model", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) =>
         res.json())
      .then((data) => {
         console.log(data)
      toast.success('Model added successfully!')
      navigate('/all-model')

      })
       
      .catch((err) =>{
         console.log(err);
      toast.error('Something went wrong!')
  })
  };

  return (
    <div className="card mt-10 bg-purple-50 border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
      <div className="card-body p-6 relative">
        <h2 className="text-2xl font-bold text-center mb-6">Add New Model</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="label font-medium">Model Name</label>
            <input
              type="text"
              name="name"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter model name"
            />
          </div>

          {/* Framework */}
          <div>
            <label className="label font-medium">Framework</label>
            <input
              type="text"
              name="framework"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="e.g. TensorFlow, PyTorch"
            />
          </div>

          {/* Use Case */}
          <div>
            <label className="label font-medium">Use Case</label>
            <input
              type="text"
              name="useCase"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="e.g. NLP, Computer Vision"
            />
          </div>

          {/* Dataset */}
          <div>
            <label className="label font-medium">Dataset</label>
            <input
              type="text"
              name="dataset"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="e.g. Wikipedia, ImageNet"
            />
          </div>

          {/* Description */}
          <div>
            <label className="label font-medium">Description</label>
            <textarea
              name="description"
              required
              rows="3"
              className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[200px]"
              placeholder="Enter model description"
            ></textarea>
          </div>

          {/* Image URL */}
          <div>
            <label className="label font-medium">Image URL</label>
            <input
              type="url"
              name="image"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="https://ibb.co/sample-image-bert-diagram"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn w-full  block my-btn">
            Add Model
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddModel;

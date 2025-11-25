import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import MyContainer from "../Components/MyContainer";
import { toast } from "react-toastify";

const UpdateModel = () => {
  const data = useLoaderData();
  const model = data.result;
  console.log(model);
  const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      image: e.target.image.value,
      framework: e.target.framework.value,
      useCase:e.target.useCase.value,
      dataset:e.target.dataset.value,
      description: e.target.description.value,
      created_at: new Date(),
    };
    console.log(formData);
    fetch(`http://localhost:3000/update-model/${model._id}`,{
        method:'PUT',
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(formData)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        toast.success('Model Updated Successfully')
        navigate(`/model-details/${model._id}`)
    })
    .catch(err=>{
        console.log(err)
        toast.error('something is wrong! Check your update model page ')
    })
  };
  return (
    <MyContainer>
      <h1 className="text-center font-bold mt-10 text-3xl ">
        UPDATE <span className="text-purple-700">MODEL</span>
      </h1>

      <form
        onSubmit={handleSubmit} 
        className="max-w-4xl mx-auto mt-10 p-8 bg-red-50 shadow-xl rounded-2xl border border-gray-200 space-y-6" 
         >
        {/* TITLE */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">
            Model Name
          </label>
          <input
            type="text"
            name="name"
            defaultValue={model.name}
            className="w-full p-2 rounded-lg border"
            required
          />
        </div>

        {/* IMAGE */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            defaultValue={model.image}
            className="w-full p-2 rounded-lg border mb-4"
            required
          />
         
        </div>

        {/* DETAILS GRID */}
        
          <div >
            <label className="block text-gray-600 font-semibold mb-1">
              Framework
            </label>
            <select
              type="text"
              name="framework"
              defaultValue={model.framework}
              className="w-full p-2 rounded-lg border"
              required
            >
              <option value="" disabled>
                Select Framework
              </option>
              <option>Vision Transformer</option>
              <option>PyTorch</option>
              <option>Keras</option>
              <option>Scikit-Learn</option>
              <option>GPT-3</option>
              <option>BIRD</option>
              <option>Gemini 1</option>
              <option>XLNet</option>
              <option>Other</option>
            </select>
          </div>
          {/* use case */}

          <div >
            <label className="block text-gray-600 font-semibold mb-1">
              Use Case
            </label>
            <input
              type="text"
              name="useCase"
              defaultValue={model.useCase}
              className="w-full p-2 rounded-lg border"
              required
            />
          </div>

          {/* DataSet */}

          <div>
            <label className="block text-gray-600 font-semibold mb-1">
              Dataset
            </label>
            <input
              type="text"
              name="dataset"
              defaultValue={model.dataset}
              className="w-full p-2 rounded-lg border"
              required
            />
          </div>
        

        {/* DESCRIPTION */}
        <div>
          <label className="block text-xl font-semibold text-gray-800 mb-2">
            Description
          </label>
          <textarea
            name="description"
            defaultValue={model.description}
            rows={5}
            className="w-full p-2 rounded-lg border"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 my-btn mt-6"
        >
          Update Model
        </button>
      </form>
    </MyContainer>
  );
};

export default UpdateModel;

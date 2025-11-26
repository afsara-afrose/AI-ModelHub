import React, { useState } from "react";
import { useLoaderData } from "react-router";
import ModelCard from "../Components/ModelCard";
import MyContainer from "../Components/MyContainer";

const AllModel = () => {
  const data = useLoaderData();
  const [models, setModels] = useState(data);
  const [loading, setLoading] = useState(false);
  const [framework, setFramework] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;
    console.log(search_text);
    setLoading(true);

    let query = `?search=${search_text}`;
    if (framework) query += `&framework=${framework}`;

    fetch(`http://localhost:3000/search${query}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setModels(data);
        setLoading(false);
      });
  };

  const handleFrameworkChange = (e) => {
    setFramework(e.target.value);
  };

  return (
    <MyContainer
      className="grid 
     grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-4"
    >
      

        <h1 className="text-4xl mt-5 mx-auto font-bold ">All <span className="text-purple-700">Models</span></h1>
      

      <form
        onSubmit={handleSearch}
        className="mt-5 mb-10 flex flex-col md:flex-row gap-2 justify-center w-full col-span-full"
      >
        {/* Search */}
        <label className="input rounded-full flex items-center w-full md:w-auto">
          <svg
            className="h-[1em] opacity-50 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            name="search"
            type="search"
            placeholder="Search by name"
            className="flex-1 p-3"
          />
        </label>

        {/* Framework Filter */}
        <select
          value={framework}
          onChange={handleFrameworkChange}
          className="input rounded-full w-full md:w-auto "
        >
          <option value="">All Frameworks</option>
          <option value="TensorFlow">TensorFlow</option>
          <option value="PyTorch">PyTorch</option>
          <option value="Keras">Keras</option>
          <option value="Scikit-learn">Scikit-learn</option>
          <option value="others">others</option>
        </select>

        <button className="btn my-btn rounded-full">
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {models.map((model) => (
        <ModelCard key={model._id} model={model} />
      ))}
    </MyContainer>
  );
};

export default AllModel;

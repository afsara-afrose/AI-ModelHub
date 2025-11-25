import React, { useState } from "react";
import { useLoaderData } from "react-router";
import ModelCard from "../Components/ModelCard";
import MyContainer from "../Components/MyContainer";

const AllModel = () => {
  const data = useLoaderData();

  const [models, setModels] = useState(data);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value.trim();

    if (!search_text) return;

    setLoading(true);

    fetch(`http://localhost:3000/search?search=${search_text}`)
      .then((res) => res.json())
      .then((data) => {
        setModels(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  return (
    <MyContainer className="mt-10">

      {/* TITLE */}
      <h1 className="text-center text-3xl font-bold mb-6">
        All <span className="text-purple-700">Models</span>
      </h1>

      {/* SEARCH BAR */}
      <form
        onSubmit={handleSearch}
        className="flex justify-center mb-10"
      >
        <div className="flex items-center w-full max-w-xl bg-white shadow-md rounded-full px-5 py-3 border border-gray-200">
          <svg
            className="h-6 w-6 text-gray-500 mr-3"
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
            placeholder="Search models..."
            className="flex-grow bg-transparent outline-none text-gray-700 text-lg"
          />

          <button
            className="bg-purple-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-purple-700 transition"
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </div>
      </form>

      {/* GRID LIST */}
      <div
        className="grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          xl:grid-cols-5 
          gap-6"
      >
        {models.map((model) => (
          <ModelCard key={model._id} model={model} />
        ))}
      </div>
    </MyContainer>
  );
};

export default AllModel;

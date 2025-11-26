import React, { useState } from "react";
import { useLoaderData } from "react-router";
import ModelCard from "../Components/ModelCard";
import MyContainer from "../Components/MyContainer";
import Loader from "../Components/Loader";

const AllModel = () => {
  const data = useLoaderData();
  const [models, setModels] = useState(data);
  const [loading, setLoading] = useState(false);
  const [framework, setFramework] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;

    setLoading(true);

    let query = `?search=${search_text}`;
    if (framework) query += `&framework=${framework}`;

    fetch(`http://localhost:3000/search${query}`)
      .then((res) => res.json())
      .then((data) => {
        setModels(data);
        setLoading(false);
      });
  };

  const handleFrameworkChange = (e) => {
    setFramework(e.target.value);
  };

  if (loading) {
    return (
      <MyContainer>
        <Loader></Loader>
      </MyContainer>
    );
  }

  return (
    <MyContainer className="p-4">
      <h1 className="text-4xl mt-5 mx-auto font-bold text-center">
        All <span className="text-purple-700">Models</span>
      </h1>

      <form
        onSubmit={handleSearch}
        className="mt-5 mb-10 flex flex-col md:flex-row gap-2 justify-center w-full"
      >
        <label className="input rounded-full flex items-center w-full md:w-auto">
          <input
            name="search"
            type="search"
            placeholder="Search by name"
            className="flex-1 p-3"
          />
        </label>

        <select
          value={framework}
          onChange={handleFrameworkChange}
          className="input rounded-full w-full md:w-auto"
        >
          <option value="">All Frameworks</option>
          <option value="TensorFlow">TensorFlow</option>
          <option value="PyTorch">PyTorch</option>
          <option value="Keras">Keras</option>
          <option value="Scikit-learn">Scikit-learn</option>
          <option value="others">Others</option>
        </select>

        <button className="btn my-btn rounded-full">
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {models.map((model) => (
          <ModelCard key={model._id} model={model} />
        ))}
      </div>
    </MyContainer>
  );
};

export default AllModel;

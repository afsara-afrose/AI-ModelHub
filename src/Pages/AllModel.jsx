import React from "react";
import { useLoaderData } from "react-router";
import ModelCard from "../Components/ModelCard";
import MyContainer from "../Components/MyContainer";

const AllModel = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <MyContainer
      className=" mt-10 grid 
     grid-cols-1       /* mobile (default) */
     sm:grid-cols-2    /* small devices */
     md:grid-cols-3    /* tablets */
     lg:grid-cols-4    /* laptops */
     xl:grid-cols-5    /* large desktop */
     gap-5 p-4"
    >
      {data.map((model) => (
        <ModelCard key={model._id} model={model} />
      ))}
    </MyContainer>
  );
};

export default AllModel;

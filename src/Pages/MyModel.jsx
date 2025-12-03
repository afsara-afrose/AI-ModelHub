import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import MyModelCard from "../Components/MyModelCard";

const MyModel = () => {
  const { user } = useContext(AuthContext);
  const [models, setModels] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(
      `https://ai-model-hub-server.vercel.app/my-models?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setModels(data.result || []));
  }, [user?.email]);

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">
        My <span className="text-purple-700">Models</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {models.map((model) => (
          <MyModelCard key={model._id} model={model} />
        ))}
      </div>
    </div>
  );
};

export default MyModel;

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import MyModelCard from "../Components/MyModelCard";


const MyModel = () => {
  const { user } = useContext(AuthContext);
  const [models, setModels] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/my-models?email=${user.email}`)
      .then(res => res.json())
      .then(data => setModels(data.result || [])); // use data.result from backend
  }, [user?.email]);

  return (
    <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {models.map(model => (
        <MyModelCard key={model._id} model={model} />
      ))}
    </div>
  );
};

export default MyModel;

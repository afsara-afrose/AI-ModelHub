import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if (loading) {
    return <p className="text-center mt-10">
        Loading...</p>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  else return children;
  
};

export default PrivateRoute;
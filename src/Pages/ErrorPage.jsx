import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-2xl mt-4">Oops! This AI model doesn’t exist.</p>

      <Link to="/">
        <button className="btn my-btn mt-6">Go Home</button>
      </Link>
    </div>
    );
};

export default ErrorPage;
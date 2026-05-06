import React from 'react';
import { Link } from "react-router-dom";

const NotFound = ()=> {
  return (
    <section className="min-h-[60vh] grid place-items-center text-center">
      <div className=''>
        <h1 className="text-7xl font-bold text-red-700">404</h1>
        <h2 className="text-3xl font-bold mt-4"> PAGE NOT FOUND :) </h2>
        <Link
          to="/"
          className="inline-block mt-6 bg-[#244D3F] text-white px-6 py-3 rounded-sm font-semibold"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;

import React from 'react';
import CarGallery from '../components/CarGallery';

const Garage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Your Garage</h1>
      <CarGallery />
    </div>
  );
};

export default Garage;

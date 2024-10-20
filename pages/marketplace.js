
import React from 'react';

const Marketplace = () => {
  const items = [
    { id: 1, name: 'Toyota Supra Street', price: '100 SKALE' },
    { id: 2, name: 'Toyota Supra Stock', price: '80 SKALE' },
    { id: 3, name: 'Wheel Upgrade', price: '20 SKALE' },
    { id: 4, name: 'Body Kit', price: '30 SKALE' },
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Marketplace</h1>
      <div className="grid grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.id} className="border p-4 rounded">
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p>Price: {item.price}</p>
            <button className="btn btn-primary mt-2">Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;

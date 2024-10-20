
import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">About Race and Stake</h1>
      <p className="mb-4">
        Race and Stake is an exciting NFT racing game built on the SKALE Network.
        Race your Toyota Supra cars, upgrade them, and stake them for rewards!
      </p>
      <h2 className="text-2xl font-bold mb-2">Features</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Gas-free racing on SKALE Network</li>
        <li>NFT cars with unique attributes</li>
        <li>Staking mechanism for passive rewards</li>
        <li>Marketplace for buying and selling cars and upgrades</li>
      </ul>
      <p>Join us in the fast lane of blockchain gaming!</p>
    </div>
  );
};

export default About;

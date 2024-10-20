
import React from 'react';

const Profile = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-2xl font-bold">Stats</h2>
          <p>Races: 20</p>
          <p>Wins: 5</p>
          <p>Earnings: 500 SKALE</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Your Cars</h2>
          <ul>
            <li>Toyota Supra Street</li>
            <li>Toyota Supra Stock</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;

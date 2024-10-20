
import React from 'react';

const Leaderboard = () => {
  const leaders = [
    { id: 1, name: 'Player1', wins: 10, earnings: '1000 SKALE' },
    { id: 2, name: 'Player2', wins: 8, earnings: '800 SKALE' },
    { id: 3, name: 'Player3', wins: 6, earnings: '600 SKALE' },
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Leaderboard</h1>
      <table className="w-full">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Wins</th>
            <th>Earnings</th>
          </tr>
        </thead>
        <tbody>
          {leaders.map((leader, index) => (
            <tr key={leader.id}>
              <td>{index + 1}</td>
              <td>{leader.name}</td>
              <td>{leader.wins}</td>
              <td>{leader.earnings}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;


import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to Race and Stake</h1>
      <p className="mb-4">Race your Toyota Supra and stake for rewards!</p>
      <div className="grid grid-cols-2 gap-4">
        <Link href="/race">
          <a className="btn btn-primary">Race Now</a>
        </Link>
        <Link href="/stake">
          <a className="btn btn-secondary">Stake Cars</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;

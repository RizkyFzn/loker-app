import React from 'react';
import Form from './Form';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-dark-blue to-light-blue min-h-screen h-full mx-auto px-14">
      <Navbar />
      <div className="flex flex-wrap w-full justify-between">
        <div className="w-128">
          <Form />
        </div>

        <div className="">
          <h1 className="font-bold text-4xl text-white text-right leading-loose">
            Daftarkan Dirimu Sekarang
            <br /> Dan Dapatkan <br />
            <span className="font-black text-5xl text-transparent bg-clip-text bg-gradient-to-br from-text-color-1 to-text-color-2">Pekerjaan Impianmu</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';

const Twit = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <blockquote className="twitter-tweet">
        <p className="text-lg font-medium mb-2">Hola bienvenidos</p>
        <span className="text-gray-600">@WanderWagons</span>
        <a href="https://twitter.com/WanderWagons/status/1758312598448075066?ref_src=twsrc%5Etfw" className="text-blue-500 block hover:underline">February 16, 2024</a>
      </blockquote>
    </div>
  );
}

export default Twit;


import React from 'react';
import ComplaintBox from '@/components/ComplaintBox';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex justify-between items-center bg-gray-100 p-6">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full ml-4">
          <ComplaintBox />
        </div>
        <div className="relative w-4/5 h-auto ml-0 mr-20">
          <Image
            src="/back-logo-rail-Photoroom.png" // Ensure this path is correct
            alt="Description of the image"
            layout="responsive"
            width={500}  // Set the appropriate width
            height={300} // Set the appropriate height
            className="h-auto w-full"
          />
        </div>
      </main>
    </div>
  );
};

export default HomePage;

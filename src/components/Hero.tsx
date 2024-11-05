import React from 'react';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-50"
          src="https://images.unsplash.com/photo-1516541196182-6bdb0516ed27"
          alt="Video production"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Discover Amazing Videos
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Watch the latest trending videos from creators around the world. Start exploring now and find your next favorite content.
        </p>
        <div className="mt-10">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            <Play className="h-5 w-5 mr-2" />
            Start Watching
          </button>
        </div>
      </div>
    </div>
  );
}
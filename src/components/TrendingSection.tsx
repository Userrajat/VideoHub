import React from 'react';
import { TrendingUp } from 'lucide-react';

const trendingVideos = [
  {
    id: 1,
    title: "Ultimate Guide to Web Development",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    views: "234K",
    duration: "12:34"
  },
  {
    id: 2,
    title: "Morning Routine 2024",
    thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    views: "186K",
    duration: "08:45"
  },
  {
    id: 3,
    title: "Travel Vlog: Hidden Gems",
    thumbnail: "https://images.unsplash.com/photo-1488646953014-85cb44e25828",
    views: "542K",
    duration: "15:20"
  },
  {
    id: 4,
    title: "Tech Review: Latest Gadgets",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    views: "321K",
    duration: "10:15"
  }
];

export default function TrendingSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <TrendingUp className="h-6 w-6 text-indigo-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900">Trending Now</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingVideos.map((video) => (
            <div key={video.id} className="group relative">
              <div className="relative w-full h-48 rounded-lg overflow-hidden group-hover:opacity-75 transition-opacity">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-sm px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{video.title}</h3>
              <p className="text-sm text-gray-500">{video.views} views</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
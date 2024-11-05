import React from 'react';
import { Layout, Music, Code, Camera, Heart, Gamepad } from 'lucide-react';

const categories = [
  { id: 1, name: 'Technology', icon: Layout, color: 'bg-blue-500' },
  { id: 2, name: 'Music', icon: Music, color: 'bg-purple-500' },
  { id: 3, name: 'Programming', icon: Code, color: 'bg-green-500' },
  { id: 4, name: 'Photography', icon: Camera, color: 'bg-yellow-500' },
  { id: 5, name: 'Lifestyle', icon: Heart, color: 'bg-pink-500' },
  { id: 6, name: 'Gaming', icon: Gamepad, color: 'bg-red-500' },
];

export default function CategorySection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Browse Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className={`${category.color} inline-flex p-3 rounded-lg text-white shadow-sm`}>
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-sm font-medium text-gray-900">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
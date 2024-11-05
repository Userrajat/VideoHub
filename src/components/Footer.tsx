import React from 'react';
import { Play, Github, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <Play className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">VideoHub</span>
            </div>
            <p className="mt-4 text-gray-500 text-sm">
              Your ultimate destination for amazing videos from creators worldwide.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li><a className="text-base text-gray-500 hover:text-gray-900">About</a></li>
              <li><a className="text-base text-gray-500 hover:text-gray-900">Careers</a></li>
              <li><a className="text-base text-gray-500 hover:text-gray-900">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li><a className="text-base text-gray-500 hover:text-gray-900">Privacy</a></li>
              <li><a className="text-base text-gray-500 hover:text-gray-900">Terms</a></li>
              <li><a className="text-base text-gray-500 hover:text-gray-900">Copyright</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Social</h3>
            <div className="flex space-x-6 mt-4">
              <a className="text-gray-400 hover:text-gray-500">
                <Github className="h-6 w-6" />
              </a>
              <a className="text-gray-400 hover:text-gray-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a className="text-gray-400 hover:text-gray-500">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            © 2024 VideoHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
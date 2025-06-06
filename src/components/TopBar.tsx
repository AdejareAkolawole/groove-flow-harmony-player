
import { ChevronLeft, ChevronRight, Search, User, Menu } from 'lucide-react';
import { useState } from 'react';

const TopBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="flex items-center justify-between p-4 bg-spotify-dark-gray/50 backdrop-blur-md">
      {/* Mobile Menu & Navigation */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Mobile menu button */}
        <button className="md:hidden w-8 h-8 rounded-full bg-spotify-black/70 flex items-center justify-center text-spotify-text-gray hover:text-white transition-colors">
          <Menu size={20} />
        </button>

        {/* Navigation arrows - hidden on mobile */}
        <div className="hidden md:flex gap-2">
          <button className="w-8 h-8 rounded-full bg-spotify-black/70 flex items-center justify-center text-spotify-text-gray hover:text-white transition-colors">
            <ChevronLeft size={20} />
          </button>
          <button className="w-8 h-8 rounded-full bg-spotify-black/70 flex items-center justify-center text-spotify-text-gray hover:text-white transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Search Bar - Desktop */}
        <div className="relative hidden md:block">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Search size={16} className="text-spotify-text-gray" />
          </div>
          <input
            type="text"
            placeholder="What do you want to listen to?"
            className="w-96 h-10 pl-10 pr-4 bg-white rounded-full text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-spotify-green"
          />
        </div>
      </div>

      {/* Mobile Search & User Controls */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Mobile search button */}
        <button 
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          className="md:hidden w-8 h-8 rounded-full bg-spotify-black/70 flex items-center justify-center text-spotify-text-gray hover:text-white transition-colors"
        >
          <Search size={20} />
        </button>

        {/* Desktop buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-1 text-sm font-medium text-spotify-text-gray border border-spotify-text-gray rounded-full hover:border-white hover:text-white transition-colors">
            Explore Premium
          </button>
          
          <button className="px-4 py-1 text-sm font-medium text-black bg-white rounded-full hover:scale-105 transition-transform">
            Install App
          </button>
        </div>

        {/* User button */}
        <button className="w-8 h-8 rounded-full bg-spotify-light-gray flex items-center justify-center hover:scale-105 transition-transform">
          <User size={16} className="text-white" />
        </button>
      </div>

      {/* Mobile Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 p-4 bg-spotify-dark-gray md:hidden">
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <Search size={16} className="text-spotify-text-gray" />
            </div>
            <input
              type="text"
              placeholder="What do you want to listen to?"
              className="w-full h-10 pl-10 pr-4 bg-white rounded-full text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-spotify-green"
              autoFocus
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TopBar;

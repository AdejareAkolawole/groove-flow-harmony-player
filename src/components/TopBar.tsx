
import { ChevronLeft, ChevronRight, Search, User } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-spotify-dark-gray/50 backdrop-blur-md">
      {/* Navigation */}
      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          <button className="w-8 h-8 rounded-full bg-spotify-black/70 flex items-center justify-center text-spotify-text-gray hover:text-white transition-colors">
            <ChevronLeft size={20} />
          </button>
          <button className="w-8 h-8 rounded-full bg-spotify-black/70 flex items-center justify-center text-spotify-text-gray hover:text-white transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
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

      {/* User Profile */}
      <div className="flex items-center gap-4">
        <button className="px-4 py-1 text-sm font-medium text-spotify-text-gray border border-spotify-text-gray rounded-full hover:border-white hover:text-white transition-colors">
          Explore Premium
        </button>
        
        <button className="px-4 py-1 text-sm font-medium text-black bg-white rounded-full hover:scale-105 transition-transform">
          Install App
        </button>

        <button className="w-8 h-8 rounded-full bg-spotify-light-gray flex items-center justify-center hover:scale-105 transition-transform">
          <User size={16} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default TopBar;

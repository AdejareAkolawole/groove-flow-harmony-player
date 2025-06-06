
import { Home, Search, Library, Plus, Heart } from 'lucide-react';
import { useState } from 'react';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('home');

  const mainMenuItems = [
    { id: 'home', icon: Home, label: 'Home', active: true },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'library', icon: Library, label: 'Your Library' },
  ];

  const playlists = [
    'Liked Songs',
    'My Playlist #1',
    'Chill Vibes',
    'Workout Mix',
    'Road Trip',
    'Focus Music',
    'Party Hits',
  ];

  return (
    <div className="w-64 bg-spotify-black h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-spotify-green rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-lg">♪</span>
          </div>
          <span className="text-white font-bold text-xl">Spotify</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="px-6 space-y-2">
        {mainMenuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            className={`flex items-center gap-4 w-full p-3 rounded-md transition-colors duration-200 ${
              activeItem === item.id
                ? 'bg-spotify-light-gray text-white'
                : 'text-spotify-text-gray hover:text-white'
            }`}
          >
            <item.icon size={24} />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Create Playlist */}
      <div className="px-6 mt-8">
        <button className="flex items-center gap-4 text-spotify-text-gray hover:text-white transition-colors duration-200">
          <div className="w-6 h-6 bg-spotify-text-gray flex items-center justify-center rounded-sm">
            <Plus size={16} className="text-black" />
          </div>
          <span>Create Playlist</span>
        </button>
        
        <button className="flex items-center gap-4 mt-4 text-spotify-text-gray hover:text-white transition-colors duration-200">
          <div className="w-6 h-6 bg-gradient-to-br from-purple-700 to-blue-300 flex items-center justify-center rounded-sm">
            <Heart size={14} className="text-white" />
          </div>
          <span>Liked Songs</span>
        </button>
      </div>

      {/* Separator */}
      <div className="mx-6 my-4 border-t border-spotify-light-gray"></div>

      {/* Playlists */}
      <div className="flex-1 px-6 overflow-y-auto scrollbar-hide">
        <div className="space-y-3">
          {playlists.map((playlist, index) => (
            <button
              key={index}
              className="block text-left text-spotify-text-gray hover:text-white transition-colors duration-200 text-sm"
            >
              {playlist}
            </button>
          ))}
        </div>
      </div>

      {/* Install App */}
      <div className="p-6 border-t border-spotify-light-gray">
        <button className="flex items-center gap-2 text-spotify-text-gray hover:text-white transition-colors duration-200">
          <div className="w-5 h-5 border border-current rounded-sm flex items-center justify-center">
            <span className="text-xs">↓</span>
          </div>
          <span className="text-sm">Install App</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

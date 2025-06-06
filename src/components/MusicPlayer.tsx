import { Heart, Shuffle, SkipBack, Play, Pause, SkipForward, Repeat, Mic2, ListMusic, Speaker, Volume2 } from 'lucide-react';
import { useState } from 'react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(45);
  const [duration] = useState(180);
  const [volume, setVolume] = useState(75);
  const [isLiked, setIsLiked] = useState(false);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercentage = (currentTime / duration) * 100;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-spotify-medium-gray border-t border-spotify-light-gray h-20 flex items-center px-4">
      {/* Currently Playing */}
      <div className="flex items-center gap-3 w-1/4 min-w-0">
        <img
          src="/placeholder.svg"
          alt="Album art"
          className="w-14 h-14 rounded object-cover"
        />
        <div className="min-w-0 flex-1">
          <h4 className="text-white text-sm font-medium truncate">Blinding Lights</h4>
          <p className="text-spotify-text-gray text-xs truncate hover:text-white hover:underline cursor-pointer">
            The Weeknd
          </p>
        </div>
        <button
          onClick={() => setIsLiked(!isLiked)}
          className={`p-2 transition-colors ${
            isLiked ? 'text-spotify-green' : 'text-spotify-text-gray hover:text-white'
          }`}
        >
          <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
        </button>
      </div>

      {/* Player Controls */}
      <div className="flex flex-col items-center w-2/4 max-w-2xl">
        {/* Control Buttons */}
        <div className="flex items-center gap-4 mb-2">
          <button className="text-spotify-text-gray hover:text-white transition-colors">
            <Shuffle size={16} />
          </button>
          <button className="text-spotify-text-gray hover:text-white transition-colors">
            <SkipBack size={20} />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform"
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
          </button>
          <button className="text-spotify-text-gray hover:text-white transition-colors">
            <SkipForward size={20} />
          </button>
          <button className="text-spotify-text-gray hover:text-white transition-colors">
            <Repeat size={16} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-2 w-full">
          <span className="text-xs text-spotify-text-gray min-w-0">
            {formatTime(currentTime)}
          </span>
          <div className="flex-1 group">
            <div className="h-1 bg-spotify-light-gray rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all duration-150 group-hover:bg-spotify-green"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
          <span className="text-xs text-spotify-text-gray min-w-0">
            {formatTime(duration)}
          </span>
        </div>
      </div>

      {/* Volume and Additional Controls */}
      <div className="flex items-center gap-3 w-1/4 justify-end">
        <button className="text-spotify-text-gray hover:text-white transition-colors">
          <Mic2 size={16} />
        </button>
        <button className="text-spotify-text-gray hover:text-white transition-colors">
          <ListMusic size={16} />
        </button>
        <button className="text-spotify-text-gray hover:text-white transition-colors">
          <Speaker size={16} />
        </button>
        <div className="flex items-center gap-2">
          <button className="text-spotify-text-gray hover:text-white transition-colors">
            <Volume2 size={16} />
          </button>
          <div className="w-20 group">
            <div className="h-1 bg-spotify-light-gray rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full group-hover:bg-spotify-green transition-colors"
                style={{ width: `${volume}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;

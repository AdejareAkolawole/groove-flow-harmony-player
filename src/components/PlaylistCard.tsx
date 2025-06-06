
interface PlaylistCardProps {
  title: string;
  description: string;
  imageUrl: string;
  size?: 'small' | 'medium' | 'large';
}

const PlaylistCard = ({ title, description, imageUrl, size = 'medium' }: PlaylistCardProps) => {
  const sizeClasses = {
    small: 'w-32 md:w-36',
    medium: 'w-40 md:w-48',
    large: 'w-48 md:w-56'
  };

  return (
    <div className={`playlist-card group ${sizeClasses[size]} animate-fade-in flex-shrink-0`}>
      <div className="relative mb-3 md:mb-4 overflow-hidden rounded-md">
        <img
          src={imageUrl}
          alt={title}
          className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="music-controls">
            <span className="text-lg">▶</span>
          </button>
        </div>
      </div>
      
      <div>
        <h3 className="font-semibold text-white text-sm mb-1 truncate">{title}</h3>
        <p className="text-spotify-text-gray text-xs line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default PlaylistCard;

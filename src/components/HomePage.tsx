
import PlaylistCard from './PlaylistCard';

const HomePage = () => {
  const quickPicks = [
    { title: 'Liked Songs', description: '27 songs', imageUrl: '/placeholder.svg' },
    { title: 'Recently Played', description: 'Your recent tracks', imageUrl: '/placeholder.svg' },
    { title: 'Discover Weekly', description: 'Your weekly mixtape of fresh music', imageUrl: '/placeholder.svg' },
    { title: 'Release Radar', description: 'Catch all the latest music', imageUrl: '/placeholder.svg' },
    { title: 'Daily Mix 1', description: 'Made for you', imageUrl: '/placeholder.svg' },
    { title: 'Daily Mix 2', description: 'Made for you', imageUrl: '/placeholder.svg' },
  ];

  const recentlyPlayed = [
    { title: 'Chill Hits', description: 'Kick back to the best new and recent chill hits.', imageUrl: '/placeholder.svg' },
    { title: 'Mood Booster', description: 'Get happy with today\'s dose of feel-good songs!', imageUrl: '/placeholder.svg' },
    { title: 'Acoustic Hits', description: 'Stripped back versions of popular songs.', imageUrl: '/placeholder.svg' },
    { title: 'Pop Rising', description: 'Rising pop stars and new songs to know.', imageUrl: '/placeholder.svg' },
    { title: 'All Out 2010s', description: 'The biggest songs of the 2010s.', imageUrl: '/placeholder.svg' },
  ];

  const madeForYou = [
    { title: 'Discover Weekly', description: 'Your weekly mixtape of fresh music. Enjoy new music and deep cuts picked for you. Updates every Monday.', imageUrl: '/placeholder.svg' },
    { title: 'Daily Mix 1', description: 'Post Malone, The Weeknd, Juice WRLD and more', imageUrl: '/placeholder.svg' },
    { title: 'Daily Mix 2', description: 'Billie Eilish, Lorde, Halsey and more', imageUrl: '/placeholder.svg' },
    { title: 'Release Radar', description: 'Catch all the latest music from artists you follow. Updates every Friday.', imageUrl: '/placeholder.svg' },
    { title: 'On Repeat', description: 'Songs you can\'t get enough of. Updated frequently.', imageUrl: '/placeholder.svg' },
  ];

  const getCurrentTimeGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="flex-1 bg-gradient-to-b from-spotify-medium-gray to-spotify-dark-gray p-6 overflow-y-auto scrollbar-hide">
      {/* Greeting */}
      <h1 className="text-3xl font-bold text-white mb-6">{getCurrentTimeGreeting()}</h1>

      {/* Quick Picks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {quickPicks.map((item, index) => (
          <div
            key={index}
            className="flex items-center bg-spotify-light-gray/50 rounded-md hover:bg-spotify-light-gray group cursor-pointer transition-colors duration-200"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-16 h-16 rounded-l-md object-cover"
            />
            <div className="flex-1 px-4">
              <h3 className="font-semibold text-white text-sm">{item.title}</h3>
            </div>
            <div className="p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <button className="music-controls">
                <span className="text-lg">▶</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Recently Played */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white">Recently played</h2>
          <button className="text-spotify-text-gray hover:text-white text-sm font-medium transition-colors">
            Show all
          </button>
        </div>
        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
          {recentlyPlayed.map((playlist, index) => (
            <PlaylistCard
              key={index}
              title={playlist.title}
              description={playlist.description}
              imageUrl={playlist.imageUrl}
            />
          ))}
        </div>
      </section>

      {/* Made For You */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white">Made for you</h2>
          <button className="text-spotify-text-gray hover:text-white text-sm font-medium transition-colors">
            Show all
          </button>
        </div>
        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
          {madeForYou.map((playlist, index) => (
            <PlaylistCard
              key={index}
              title={playlist.title}
              description={playlist.description}
              imageUrl={playlist.imageUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;

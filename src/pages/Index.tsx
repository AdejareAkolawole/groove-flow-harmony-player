
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import HomePage from '../components/HomePage';
import MusicPlayer from '../components/MusicPlayer';

const Index = () => {
  return (
    <div className="h-screen bg-spotify-black flex flex-col overflow-hidden">
      <div className="flex flex-1 min-h-0">
        {/* Sidebar - Hidden on mobile, shown on desktop */}
        <div className="hidden md:block">
          <Sidebar />
        </div>
        
        {/* Main Content */}
        <div className="flex flex-col flex-1 min-h-0">
          {/* Top Bar */}
          <TopBar />
          
          {/* Main Content Area */}
          <HomePage />
        </div>
      </div>
      
      {/* Music Player */}
      <MusicPlayer />
    </div>
  );
};

export default Index;

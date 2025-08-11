import Navbar from "@/components/Navbar";
import { useAuth } from "@/hooks/useAuth";

const Journey = () => {
  const { signOut } = useAuth();
  
  return (
    <div className="min-h-screen bg-gradient-ethereal">
      <Navbar showLogout onLogout={signOut} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-gradient-cosmic">
              Your Mind Upgrade Starts Here
            </h1>
            <p className="text-lg text-muted-foreground">
              Connect with your AI spiritual guide for personalized wisdom and guidance
            </p>
          </div>
          
          {/* Chatbot Container */}
          <div className="card-mystical rounded-2xl overflow-hidden shadow-cosmic">
            <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border/50">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-mystical rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-sm">✦</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gradient-cosmic">genZ Spiritual Guide</h3>
                  <p className="text-sm text-muted-foreground">Your personal AI pandit</p>
                </div>
                <div className="ml-auto flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                  <span className="text-xs text-muted-foreground">Online</span>
                </div>
              </div>
            </div>
            
            {/* Embedded Chatbot - Enhanced Security */}
            <div className="relative" style={{ height: '700px' }}>
              <iframe
                src="https://www.chatbase.co/chatbot-iframe/J1brsJAro53hG6YCh2KqW"
                width="100%"
                style={{ height: '100%', minHeight: '700px' }}
                frameBorder="0"
              ></iframe>
            </div>
          </div>
          
          {/* Footer Note */}
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Your conversations are private and secure. Experience the wisdom of ancient traditions 
              enhanced by modern AI technology.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Journey;
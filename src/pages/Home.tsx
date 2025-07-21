import Navbar from "@/components/Navbar";
import AuthForm from "@/components/AuthForm";
import cosmicHero from "@/assets/cosmic-hero.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-ethereal">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient-cosmic">AstroAI</span>
                <br />
                <span className="text-foreground">Spiritual Awakening</span>
                <br />
                <span className="text-gradient-celestial">Through AI</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Experience the fusion of ancient wisdom and cutting-edge AI. 
                Your 24/7 digital pandit for astrology, mantras, and spiritual guidance.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">AI-Powered Spiritual Guidance</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">24/7 Available</span>
              </div>
            </div>
          </div>
          
          {/* Auth Form */}
          <div className="flex items-center justify-center">
            <AuthForm />
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="mt-16 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-cosmic">
            <img
              src={cosmicHero}
              alt="Cosmic spiritual visualization"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
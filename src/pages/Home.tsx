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
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient-cosmic animate-shimmer bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] bg-clip-text">Modern Mind Care</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg animate-fade-in-up [animation-delay:0.6s] opacity-0 [animation-fill-mode:forwards]">
                genZ Modern Mind Care Through AI Experience AI-powered guidance for mental wellness, academic stress, and student life challenges.
                Your 24/7 digital mentor for managing anxiety, improving focus, and finding balance in a fast-paced world.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:0.8s] opacity-0 [animation-fill-mode:forwards]">
              <div className="flex items-center space-x-3 group">
                <div className="w-3 h-3 bg-secondary rounded-full animate-cosmic-pulse group-hover:scale-125 transition-transform"></div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">AI-Powered Spiritual Guidance</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-3 h-3 bg-accent rounded-full animate-cosmic-pulse [animation-delay:1s] group-hover:scale-125 transition-transform"></div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">24/7 Available</span>
              </div>
            </div>
          </div>
          
          {/* Auth Form */}
          <div className="flex items-center justify-center animate-scale-in [animation-delay:1s] opacity-0 [animation-fill-mode:forwards]">
            <AuthForm />
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="mt-16 relative animate-fade-in-up [animation-delay:1.2s] opacity-0 [animation-fill-mode:forwards]">
          <div className="relative rounded-2xl overflow-hidden shadow-cosmic hover:shadow-[var(--glow-mystical)] transition-all duration-700 group">
            <img
              src={cosmicHero}
              alt="Cosmic spiritual visualization"
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent group-hover:from-background/30 transition-all duration-700"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
import Navbar from "@/components/Navbar";
import AuthForm from "@/components/AuthForm";
import AdSense from "@/components/AdSense";
import BlurText from "@/components/BlurText";
import heroImage from "@/assets/cosmic-hero.jpg";

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-cosmic">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <BlurText
              text="Modern Mind Care"
              className="text-4xl md:text-6xl font-bold text-gradient-cosmic"
              delay={150}
            />
            
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              Experience AI-powered mental wellness guidance designed for your journey.
              Get personalized support, track your progress, and build lasting habits
              for better mental health.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-foreground/80">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span>AI-Powered Guidance</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/80">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>24/7 Available</span>
              </div>
            </div>

            <AuthForm />
            
            <AdSense adSlot="1234567890" />
          </div>

          {/* Hero Image */}
          <div className="relative lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--glow-mystical)] transition-transform hover:scale-[1.02] duration-300">
              <img
                src={heroImage}
                alt="Modern Mind Care - AI-powered mental wellness platform"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;

import Navbar from "@/components/Navbar";
import { Sparkles, Target, Lightbulb, Users, Rocket, Shield, Zap, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-ethereal">
      <Navbar />
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="space-y-8">
          {/* Hero Section */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-elegant">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-10 h-10 text-primary animate-pulse" />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                About GenZ0
              </h1>
            </div>
            
            <p className="text-xl text-foreground leading-relaxed mb-4">
              Welcome to <strong>GenZ0</strong> — where the future of AI meets the mindset of Gen Z ⚡
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're not just another AI platform; we're building a new space for creativity, automation, and exploration.
              At GenZ0, our goal is to make advanced AI tools feel human, fun, and futuristic — something that empowers you, not just impresses you.
            </p>
          </div>

          {/* Vision Section */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-elegant">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Our Vision</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To make AI simple, powerful, and accessible to everyone — creators, developers, students, entrepreneurs, and dreamers who dare to imagine a better future.
            </p>
          </div>

          {/* What Makes Us Different */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-elegant">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">What Makes Us Different</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Clean, Next-Gen Interface</h3>
                  <p className="text-muted-foreground">Designed for speed, clarity, and a delightful user experience that feels effortless.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Smart AI Assistants</h3>
                  <p className="text-muted-foreground">AI that talks like humans, understands context, and actually helps you get things done.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Rocket className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Constant Innovation</h3>
                  <p className="text-muted-foreground">User-first design with regular updates, new features, and cutting-edge AI capabilities.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Transparency & Privacy</h3>
                  <p className="text-muted-foreground">Performance and security at the core, with full respect for your data and privacy.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Story */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-elegant">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Our Story</h2>
            </div>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                GenZ0 was born from a simple idea: <strong>AI shouldn't feel complicated</strong>. It should feel natural, intuitive, and genuinely helpful.
              </p>
              <p>
                Built by young minds who grew up in the digital age, we understand what Gen Z needs — speed, simplicity, and substance. We're not interested in flashy features that don't work. We care about real solutions that make your life easier.
              </p>
              <p>
                Whether you're a student looking for study help, a creator seeking inspiration, a developer building the next big thing, or someone just curious about AI — GenZ0 is your space to explore, learn, and grow.
              </p>
              <p>
                We're still evolving, still experimenting, but our direction is clear: <strong>AI for everyone. Future for all.</strong>
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-primary/20 to-primary-glow/20 backdrop-blur-sm rounded-2xl p-8 border border-primary/30">
            <h2 className="text-3xl font-bold mb-4 text-center">Our Mission</h2>
            <p className="text-xl text-center leading-relaxed">
              To democratize AI technology and make it accessible to the next generation of innovators, thinkers, and changemakers.
              We believe AI should amplify human potential, not replace it.
            </p>
          </div>

          {/* Join Us Section */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-elegant text-center">
            <h2 className="text-3xl font-bold mb-4">Join the Journey</h2>
            <p className="text-lg text-muted-foreground mb-6">
              GenZ0 is more than a platform — it's a movement. We're building the future of AI, and we want you to be part of it.
            </p>
            <p className="text-muted-foreground">
              Follow our progress, share your feedback, and help us shape the next generation of AI tools.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;

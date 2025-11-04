import Navbar from "@/components/Navbar";
import { Mail, Globe, MapPin, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-ethereal">
      <Navbar />
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-elegant">
          <div className="flex items-center gap-3 mb-6">
            <Send className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold">Get in Touch</h1>
          </div>
          
          <p className="text-xl text-muted-foreground mb-12">
            We'd love to hear from you 💬<br />
            Whether it's feedback, collab ideas, or bug reports — we're always open.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-primary/5 border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="pt-6 text-center">
                <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <a 
                  href="mailto:Genzmindcare@gmail.com" 
                  className="text-primary hover:underline break-all"
                >
                  Genzmindcare@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="pt-6 text-center">
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Website</h3>
                <a 
                  href="https://genz0.tech" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  genz0.tech
                </a>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="pt-6 text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">
                  Jaipur, Rajasthan<br />India
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-xl p-6 border border-primary/20">
            <h2 className="text-2xl font-bold mb-4">What can we help you with?</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Feedback:</strong> Share your thoughts on how we can improve GenZ0</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Collaborations:</strong> Interested in partnering with us? Let's talk!</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Bug Reports:</strong> Found an issue? Help us fix it by reporting it</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>General Inquiries:</strong> Any questions? We're here to help</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 text-center text-muted-foreground">
            <p>
              You can also reach out via our social handles (coming soon) for updates, community chats, and future projects.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;

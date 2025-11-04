import Navbar from "@/components/Navbar";
import { Shield } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-ethereal">
      <Navbar />
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-elegant">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
          </div>
          
          <p className="text-muted-foreground mb-8">Last updated: November 2025</p>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <p>
              Welcome to GenZ0 ("we", "our", or "us").
              Your privacy matters to us — seriously. This page explains how we collect, use, and protect the data you share while using our AI-powered platform.
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                🔹 What We Collect
              </h2>
              <div className="space-y-3">
                <p><strong>Basic Info:</strong> If you sign up or contact us, we may collect your name, email, or other details you choose to share.</p>
                <p><strong>Usage Data:</strong> Includes browser type, device info, IP address, and general site activity.</p>
                <p><strong>AI Interaction Data:</strong> Any prompts or messages you enter in our AI tools. These are used only to improve user experience and not shared with third parties.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                🔹 How We Use It
              </h2>
              <p>We use your data to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Improve our AI and website experience</li>
                <li>Fix bugs and enhance features</li>
                <li>Communicate with you for support or updates</li>
                <li>Show relevant ads (e.g., through Google AdSense or similar networks)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                🔹 Ads & Third-Party Services
              </h2>
              <p>
                GenZ0 uses trusted ad networks and analytics tools (like Google AdSense) that may collect non-personal data for performance and personalization.
                These services follow their own strict privacy standards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                🔹 Cookies
              </h2>
              <p>
                We use cookies to make your experience smoother — for things like saving preferences and improving recommendations.
                You can disable cookies anytime in your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                🔹 Data Security
              </h2>
              <p>
                We use secure encrypted connections (HTTPS) and modern safety measures to protect your data.
                We never sell or rent your personal info — period.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                🔹 Your Rights
              </h2>
              <p>
                You can ask us anytime to access, edit, or delete your stored data by emailing us at{" "}
                <a href="mailto:Genzmindcare@gmail.com" className="text-primary hover:underline">
                  Genzmindcare@gmail.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                🔹 Contact
              </h2>
              <p>If you have any questions about this Privacy Policy, contact us:</p>
              <p>
                📩 <a href="mailto:Genzmindcare@gmail.com" className="text-primary hover:underline">Genzmindcare@gmail.com</a>
              </p>
              <p>
                🌐 <a href="https://genz0.tech" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://genz0.tech</a>
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;

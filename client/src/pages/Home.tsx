import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Camera, Mic, Image as ImageIcon, Zap, Settings, Share2 } from "lucide-react";
import { useAuth } from "@/_core/hooks/useAuth";

type Page = "home" | "privacy" | "terms";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    scrollToTop();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663407580698/PEXjfzbBj2h8wBtzwBPhxV/app-logo_cd593c88.png"
              alt="My Script"
              className="w-10 h-10"
            />
            <span className="font-bold text-lg text-primary hidden sm:inline">My Script</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="https://testflight.apple.com/join/Fzm4kQQ6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="bg-accent hover:bg-accent/90 text-white">Download Free App</Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {currentPage === "home" && <HomePage />}
        {currentPage === "privacy" && <PrivacyPage />}
        {currentPage === "terms" && <TermsPage />}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white mt-20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">My Script</h3>
              <p className="text-sm text-white/80">
                The teleprompter camera app for creating professional videos on iPhone. Free forever.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => handleNavClick("privacy")}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("terms")}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-sm text-white/80">
                Email: <a href="mailto:hello@inizia.agency" className="hover:text-white transition-colors">hello@inizia.agency</a>
              </p>
              <p className="text-sm text-white/80 mt-2">Gold Coast, Australia</p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8">
            <p className="text-sm text-white/60 text-center">
              &copy; 2026 My Script. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomePage() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
              Record Smoother Scripted Videos
            </h1>
            <p className="text-lg text-foreground/80 leading-relaxed">
              My Script is an innovative iPhone teleprompter camera app designed to help creators record professional-quality videos while reading a script seamlessly. Say goodbye to memorizing lines or fumbling with separate devices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://testflight.apple.com/join/Fzm4kQQ6" target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white text-base py-6">
                  Download Free App
                </Button>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-64 h-auto">
              {/* iPhone Frame */}
              <div className="relative bg-black rounded-3xl p-3 shadow-2xl" style={{
                aspectRatio: '9/19.5',
                backgroundImage: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
              }}>
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-3xl z-10"></div>
                {/* Screen */}
                <div className="w-full h-full bg-black rounded-2xl overflow-hidden">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663407580698/PEXjfzbBj2h8wBtzwBPhxV/resized_1_e171c9c3.webp"
                    alt="My Script App"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-20 bg-muted rounded-2xl px-8 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: "1", title: "Add Your Script", desc: "Create or paste your script into the app" },
            { step: "2", title: "Adjust Settings", desc: "Configure camera settings, script scroll speed, and text size" },
            { step: "3", title: "Save to Camera Roll", desc: "Record and save your video directly to Photos" },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-6">
                {item.step}
              </div>
              <h3 className="font-semibold text-primary mb-2 text-lg">{item.title}</h3>
              <p className="text-foreground/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Camera,
              title: "Flexible Camera",
              desc: "Use front or back camera for recording",
            },
            {
              icon: Mic,
              title: "Integrated Teleprompter",
              desc: "Seamless text overlay during recording",
            },
            {
              icon: Zap,
              title: "Auto-Scrolling Script",
              desc: "Script scrolls at your chosen speed",
            },
            {
              icon: Settings,
              title: "Customizable Display",
              desc: "Adjust font size, speed, and opacity",
            },
            {
              icon: ImageIcon,
              title: "High-Quality Recording",
              desc: "Configure resolution and frame rate",
            },
            {
              icon: Share2,
              title: "Direct to Photos",
              desc: "Recordings saved to your Photos app",
            },
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="p-6 border border-border rounded-xl hover:shadow-lg hover:border-primary/50 transition-all duration-300"
              >
                <Icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-primary text-white rounded-2xl px-8 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Better Videos?</h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Download My Script today and start recording professional-quality videos with ease.
        </p>
        <a href="https://testflight.apple.com/join/Fzm4kQQ6" target="_blank" rel="noopener noreferrer">
          <Button className="bg-white text-primary hover:bg-white/90 text-base py-6 px-8">
            Download Free Now
          </Button>
        </a>
      </section>
    </div>
  );
}

function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 md:py-20 space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-primary mb-4">Privacy Policy</h1>
        <p className="text-foreground/70">Last Updated: April 8, 2026</p>
      </div>

      <div className="prose prose-lg max-w-none space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">1. Data Collection and Use</h2>
          <p className="text-foreground/80">
            My Script is designed with user privacy in mind. The app operates primarily locally on your device and does not collect personal data from its users.
          </p>
          <ul className="space-y-3 text-foreground/80 ml-6">
            <li><strong>Script Content:</strong> All script text created or pasted into the app is stored locally on your iPhone. It is not transmitted to any external servers or third parties.</li>
            <li><strong>Recorded Videos:</strong> Videos recorded using My Script are saved directly to your iPhone's Photos library. These recordings remain on-device and are not uploaded or shared by the app.</li>
            <li><strong>Camera and Microphone Access:</strong> The app requests access to your device's camera and microphone solely for the purpose of recording videos. This access is only active while you are actively recording within the app.</li>
            <li><strong>Photo Library Access:</strong> The app requests access to your Photo Library to save the finished video recordings. This access is used only for saving content to your device.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">2. No Personal Data Collection</h2>
          <p className="text-foreground/80">
            My Script does not collect, transmit, or retain any personal data from its users. Specifically:
          </p>
          <ul className="space-y-2 text-foreground/80 ml-6">
            <li>There is no account system within the app.</li>
            <li>There is no cloud synchronization of user data.</li>
            <li>There are no analytics or advertising SDKs integrated into the app.</li>
            <li>No user data is intentionally sent to our servers, as the app does not currently utilize any backend servers for data storage or processing.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">3. Third-Party Services</h2>
          <p className="text-foreground/80">
            My Script does not integrate with any third-party services that collect user data. However, please note that Apple or TestFlight may process some data independently under Apple's own policies (e.g., app usage data, crash logs). This processing is governed by Apple's privacy policies and is not controlled by My Script.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">4. Contacting Us</h2>
          <p className="text-foreground/80">
            If you contact us by email at hello@inizia.agency, we may receive your email address and any information you choose to send us. This information will be used solely to respond to your inquiry.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">5. Changes to This Privacy Policy</h2>
          <p className="text-foreground/80">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section className="space-y-4 border-t border-border pt-8">
          <h2 className="text-2xl font-bold text-primary">Contact Information</h2>
          <div className="bg-muted p-6 rounded-lg space-y-2">
            <p><strong>App Name:</strong> My Script</p>
            <p><strong>Developer:</strong> Micaela Piacenza</p>
            <p><strong>Email:</strong> <a href="mailto:hello@inizia.agency" className="text-accent hover:underline">hello@inizia.agency</a></p>
            <p><strong>Location:</strong> Gold Coast, Australia</p>
            <p><strong>ABN:</strong> 33 489 646 982</p>
          </div>
        </section>
      </div>
    </div>
  );
}

function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 md:py-20 space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-primary mb-4">Terms & Conditions</h1>
        <p className="text-foreground/70">Last Updated: April 8, 2026</p>
      </div>

      <div className="prose prose-lg max-w-none space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">1. License to Use the App</h2>
          <p className="text-foreground/80">
            My Script is licensed, not sold, to you for use strictly in accordance with these Terms. Micaela Piacenza grants you a non-transferable, non-exclusive, revocable, limited license to use the App on any iPhone device that you own or control, as permitted by the Apple App Store Terms of Service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">2. User Responsibilities for Content</h2>
          <p className="text-foreground/80">
            You are solely responsible for any content (including scripts, audio, and video) that you create, store, or record using the App. You represent and warrant that you have all necessary rights, licenses, consents, and permissions to use any script, music, or media that you incorporate into your content.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">3. Disclaimer of Responsibility for User-Generated Content</h2>
          <p className="text-foreground/80">
            Micaela Piacenza is not responsible for any content generated by users of the App. We do not monitor, edit, or endorse user-generated content and disclaim all liability for such content.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">4. "As Is" Provision</h2>
          <p className="text-foreground/80">
            The App is provided to you "as is" and "as available," with all faults and without warranty of any kind. To the maximum extent permitted by applicable law, Micaela Piacenza, on its own behalf and on behalf of its affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory, or otherwise, with respect to the App, including all implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">5. Limitation of Liability</h2>
          <p className="text-foreground/80">
            To the maximum extent permitted by applicable law, in no event shall Micaela Piacenza or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the App), even if Micaela Piacenza has been advised of the possibility of such damages.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">6. Modifications to the App</h2>
          <p className="text-foreground/80">
            Micaela Piacenza reserves the right to modify, suspend, or discontinue, temporarily or permanently, the App or any service to which it connects, with or without notice and without liability to you.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">7. Apple App Store Terms</h2>
          <p className="text-foreground/80">
            You acknowledge that these Terms are between you and Micaela Piacenza only, not with Apple, Inc. ("Apple"). Apple is not responsible for the App or the content thereof. Your use of the App must comply with the App Store Terms of Service. Apple has no obligation whatsoever to furnish any maintenance and support services with respect to the App.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">8. Governing Law and Jurisdiction</h2>
          <p className="text-foreground/80">
            These Terms shall be governed by and construed in accordance with the laws of Queensland, Australia, without regard to its conflict of law principles. You agree to submit to the personal and exclusive jurisdiction of the courts located in Gold Coast, Australia, to resolve any dispute or claim arising from these Terms.
          </p>
        </section>

        <section className="space-y-4 border-t border-border pt-8">
          <h2 className="text-2xl font-bold text-primary">Contact Information</h2>
          <div className="bg-muted p-6 rounded-lg space-y-2">
            <p><strong>App Name:</strong> My Script</p>
            <p><strong>Developer:</strong> Micaela Piacenza</p>
            <p><strong>Email:</strong> <a href="mailto:hello@inizia.agency" className="text-accent hover:underline">hello@inizia.agency</a></p>
            <p><strong>Location:</strong> Gold Coast, Australia</p>
            <p><strong>ABN:</strong> 33 489 646 982</p>
          </div>
        </section>
      </div>
    </div>
  );
}

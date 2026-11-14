import {
  ArrowDown,
  ArrowUpRight,
  Camera,
  Check,
  CirclePause,
  FileText,
  Focus,
  LockKeyhole,
  SlidersHorizontal,
  Smartphone,
} from "lucide-react";
import "./home.css";

const APP_STORE_URL = "https://apps.apple.com/us/app/my-script/id6761744852";
const shots = [
  {
    file: "01-library",
    title: "A home for your ideas",
    text: "Keep your scripts together, ready for your next take.",
  },
  {
    file: "02-editor",
    title: "Make every word yours",
    text: "Write or paste a script, then polish it before you record.",
  },
  {
    file: "03-script-controls",
    title: "Find your natural pace",
    text: "Change scrolling and text size without ending your take.",
  },
  {
    file: "04-inline-edit",
    title: "A quick change, right there",
    text: "Edit your words directly from the recording screen.",
  },
  {
    file: "05-camera-settings",
    title: "A little more control",
    text: "Choose camera settings supported by your phone.",
  },
];

export default function Home() {
  const showTerms =
    new URLSearchParams(window.location.search).get("page") === "terms";
  return (
    <div className="ms-site">
      <a className="ms-skip" href="#main">
        Skip to content
      </a>
      <header className="ms-header">
        <div className="ms-wrap ms-nav">
          <a href="/" className="ms-brand">
            <img src="/images/app-icon.png" alt="" width="40" height="40" />
            <span>My Script</span>
          </a>
          <nav aria-label="Main navigation">
            <a className="ms-nav-link" href="/#features">
              Features
            </a>
            <a className="ms-nav-link" href="/#pricing">
              Pricing
            </a>
            <a className="ms-button ms-small" href={APP_STORE_URL}>
              Get for iOS <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </nav>
        </div>
      </header>
      <main id="main">
        {showTerms ? (
          <div className="ms-wrap ms-terms">
            <TermsPage />
          </div>
        ) : (
          <HomePage />
        )}
      </main>
      <footer className="ms-footer ms-wrap">
        <div>
          <a href="/" className="ms-brand">
            <img src="/images/app-icon.png" alt="" width="36" height="36" />
            <span>My Script</span>
          </a>
          <p>Your words. Your pace. Your best take.</p>
        </div>
        <div className="ms-footer-links">
          <a href="/privacy.html">Privacy policy</a>
          <a href="/?page=terms">Terms & conditions</a>
          <a href="mailto:hello@inizia.agency">
            Get in touch <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
        <small>
          © {new Date().getFullYear()} Micaela Piacenza · Gold Coast, Australia
        </small>
      </footer>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <section className="ms-hero ms-wrap">
        <div className="ms-hero-copy">
          <p className="ms-eyebrow">
            <span className="ms-dot" /> THE TELEPROMPTER CAMERA FOR YOUR NEXT
            GREAT TAKE
          </p>
          <h1>
            Your words.
            <br />
            Your pace.
            <br />
            <span>Your best take.</span>
          </h1>
          <p className="ms-lead">
            Read your script while you record. Speak naturally, stay on track
            and make videos that sound like you.
          </p>
          <div className="ms-actions">
            <a className="ms-button" href={APP_STORE_URL}>
              Get My Script for iOS{" "}
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>
            <a className="ms-text-link" href="#how-it-works">
              See how it works <ArrowDown size={17} aria-hidden="true" />
            </a>
          </div>
          <p className="ms-price-note">
            US$1.49 once. No subscriptions. No ads.
            <br />
            <span>Local prices vary by store and country.</span>
          </p>
          <p className="ms-availability">
            For iPhone & iPad · Android coming soon
            <br />
            Creator update 1.1 is awaiting App Store review.
          </p>
        </div>
        <div
          className="ms-hero-art"
          aria-label="My Script library and editor screenshots"
        >
          <div className="ms-art-label">
            <span className="ms-dot" /> READY WHEN YOU ARE
          </div>
          <img
            className="ms-phone ms-phone-back"
            src="/images/02-editor.png"
            alt="My Script editor with the new starter script"
            width="1206"
            height="2622"
          />
          <img
            className="ms-phone ms-phone-front"
            src="/images/01-library.png"
            alt="My Script library showing saved scripts"
            width="1206"
            height="2622"
          />
          <div className="ms-art-caption">
            <FileText size={22} aria-hidden="true" />
            <div>
              A little preparation.
              <br />
              <strong>A lot more confidence.</strong>
            </div>
          </div>
        </div>
      </section>
      <div className="ms-benefit-strip">
        <div className="ms-wrap">
          <span>
            <Check size={18} aria-hidden="true" /> Pay once
          </span>
          <span>
            <Check size={18} aria-hidden="true" /> Record at your pace
          </span>
          <span>
            <Check size={18} aria-hidden="true" /> Keep your content locally
          </span>
        </div>
      </div>
      <section id="features" className="ms-section ms-wrap">
        <div className="ms-section-heading">
          <p className="ms-eyebrow">MADE FOR THE MOMENT YOU HIT RECORD</p>
          <h2>
            Less memorising.
            <br />
            More being yourself.
          </h2>
          <p>
            From a quick update to your next big idea, keep your words and your
            camera in one place.
          </p>
        </div>
        <div className="ms-features">
          {[
            {
              icon: SlidersHorizontal,
              title: "A script that keeps up with you",
              text: "Adjust scroll speed and font size as you record. Set the script panel height and opacity to keep your framing clear.",
            },
            {
              icon: CirclePause,
              title: "Pause. Breathe. Keep going.",
              text: "Pause and resume a take, switch front and back cameras, then Stop & Save. Your script returns to the start for the next take.",
            },
            {
              icon: FileText,
              title: "Your words, within reach",
              text: "Create and edit scripts locally. Need a last-minute change? Open the editor right from the script overlay.",
            },
            {
              icon: Focus,
              title: "Make the camera work for you",
              text: "Choose supported resolution and frame rate, focus/exposure lock, white-balance lock and stabilization. Pinch the preview to zoom.",
            },
            {
              icon: Smartphone,
              title: "Turn your phone. Keep your flow.",
              text: "Drag the controls up in portrait or sideways in landscape. Keep recording buttons close while your script stays visible.",
            },
            {
              icon: LockKeyhole,
              title: "Your content stays with you",
              text: "No account, no developer cloud uploads and no ads. Scripts stay on your device; finished videos save to Photos or your gallery.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <article className="ms-feature" key={title}>
              <span className="ms-feature-icon">
                <Icon size={24} strokeWidth={1.7} aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <p className="ms-capability-note">
          Camera options vary by phone, operating system and recording mode.
          Cinematic is available only on supported iPhones and compatible
          formats; Android shows its own supported options.
        </p>
      </section>
      <section className="ms-showcase">
        <div className="ms-wrap">
          <div className="ms-section-heading">
            <p className="ms-eyebrow">A LOOK INSIDE THE CREATOR UPDATE</p>
            <h2>
              Everything you need.
              <br />
              Right where you need it.
            </h2>
            <p>
              Explore the updated app, from your first script to your camera
              settings.
            </p>
          </div>
          <div className="ms-shot-grid">
            {shots.map(shot => (
              <figure key={shot.file}>
                <a
                  href={`/images/${shot.file}.jpg`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Enlarge: ${shot.title}`}
                >
                  <img
                    loading="lazy"
                    src={`/images/${shot.file}.jpg`}
                    alt={shot.title}
                    width="1206"
                    height="2622"
                  />
                </a>
                <figcaption>
                  <h3>{shot.title}</h3>
                  <p>{shot.text}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <section id="how-it-works" className="ms-section ms-wrap">
        <div className="ms-section-heading">
          <p className="ms-eyebrow">FROM IDEA TO CAMERA ROLL</p>
          <h2>Three steps. One good take.</h2>
        </div>
        <div className="ms-steps">
          {[
            [
              "01",
              "Add your words",
              "Write or paste a script. Keep it short, make it sound like you, and you're ready.",
            ],
            [
              "02",
              "Find your rhythm",
              "Choose your camera, set a comfortable text size and scroll speed, then frame your shot.",
            ],
            [
              "03",
              "Record and save",
              "Hit Record, pause when you need to, and Stop & Save when you're happy. Your video goes to your device's gallery.",
            ],
          ].map(([step, title, text]) => (
            <article key={step}>
              <span>{step}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section id="pricing" className="ms-wrap ms-pricing">
        <div>
          <p className="ms-eyebrow">ONE SMALL PURCHASE. YOUR NEXT BIG IDEA.</p>
          <h2>
            Pay once.
            <br />
            Keep creating.
          </h2>
          <p>
            No subscription. No ads. No in-app upgrades.
            <br />
            All the tools in My Script, in one purchase.
          </p>
        </div>
        <div className="ms-price-card">
          <p className="ms-price">
            <span>US$</span>1.49
          </p>
          <p>One-time purchase</p>
          <a className="ms-button" href={APP_STORE_URL}>
            Get on the App Store <ArrowUpRight size={20} aria-hidden="true" />
          </a>
          <p className="ms-fine">
            Prices vary by country; your store shows the final local price. iOS
            and Android purchases are separate.
          </p>
          <div className="ms-android">
            <Camera size={19} aria-hidden="true" />
            <span>
              Android is coming soon.
              <br />
              Google Play release is in preparation.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 md:py-20 space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-primary mb-4">
          Terms & Conditions
        </h1>
        <p className="text-foreground/70">Last Updated: November 14, 2026</p>
      </div>

      <div className="prose prose-lg max-w-none space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">
            1. License to Use the App
          </h2>
          <p className="text-foreground/80">
            My Script is licensed, not sold, to you for use strictly in
            accordance with these Terms. Micaela Piacenza grants you a
            non-transferable, non-exclusive, revocable, limited license to use
            the App on a compatible iOS or Android device that you own or
            control, as permitted by the applicable app store terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">
            2. User Responsibilities for Content
          </h2>
          <p className="text-foreground/80">
            You are solely responsible for any content (including scripts,
            audio, and video) that you create, store, or record using the App.
            You represent and warrant that you have all necessary rights,
            licenses, consents, and permissions to use any script, music, or
            media that you incorporate into your content.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">
            3. Disclaimer of Responsibility for User-Generated Content
          </h2>
          <p className="text-foreground/80">
            Micaela Piacenza is not responsible for any content generated by
            users of the App. We do not monitor, edit, or endorse user-generated
            content and disclaim all liability for such content.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">
            4. "As Is" Provision
          </h2>
          <p className="text-foreground/80">
            The App is provided to you "as is" and "as available," with all
            faults and without warranty of any kind. To the maximum extent
            permitted by applicable law, Micaela Piacenza, on its own behalf and
            on behalf of its affiliates and its and their respective licensors
            and service providers, expressly disclaims all warranties, whether
            express, implied, statutory, or otherwise, with respect to the App,
            including all implied warranties of merchantability, fitness for a
            particular purpose, title, and non-infringement.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">
            5. Limitation of Liability
          </h2>
          <p className="text-foreground/80">
            To the maximum extent permitted by applicable law, in no event shall
            Micaela Piacenza or its suppliers be liable for any special,
            incidental, indirect, or consequential damages whatsoever
            (including, but not limited to, damages for loss of profits, loss of
            data or other information, for business interruption, for personal
            injury, loss of privacy arising out of or in any way related to the
            use of or inability to use the App), even if Micaela Piacenza has
            been advised of the possibility of such damages.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">
            6. Modifications to the App
          </h2>
          <p className="text-foreground/80">
            Micaela Piacenza reserves the right to modify, suspend, or
            discontinue, temporarily or permanently, the App or any service to
            which it connects, with or without notice and without liability to
            you.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">
            7. App Store Terms
          </h2>
          <p className="text-foreground/80">
            You acknowledge that these Terms are between you and Micaela
            Piacenza only, not with Apple, Inc. ("Apple"). Apple is not
            responsible for the App or the content thereof. Your use of the iOS
            App must comply with the App Store Terms of Service. Apple has no
            obligation whatsoever to furnish any maintenance and support
            services with respect to the App. Android downloads and purchases
            are handled separately by Google Play under its applicable terms.
            Purchases are platform-specific.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">
            8. Governing Law and Jurisdiction
          </h2>
          <p className="text-foreground/80">
            These Terms shall be governed by and construed in accordance with
            the laws of Queensland, Australia, without regard to its conflict of
            law principles. You agree to submit to the personal and exclusive
            jurisdiction of the courts located in Gold Coast, Australia, to
            resolve any dispute or claim arising from these Terms.
          </p>
        </section>

        <section className="space-y-4 border-t border-border pt-8">
          <h2 className="text-2xl font-bold text-primary">
            Contact Information
          </h2>
          <div className="bg-muted p-6 rounded-lg space-y-2">
            <p>
              <strong>App Name:</strong> My Script
            </p>
            <p>
              <strong>Developer:</strong> Micaela Piacenza
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:hello@inizia.agency"
                className="text-accent hover:underline"
              >
                hello@inizia.agency
              </a>
            </p>
            <p>
              <strong>Location:</strong> Gold Coast, Australia
            </p>
            <p>
              <strong>ABN:</strong> 33 489 646 982
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

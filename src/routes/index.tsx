import { createFileRoute } from "@tanstack/react-router";

const CDN = "https://cdn.prod.website-files.com/65ce2c16ea79bf893acd1ded/";
const HERO = CDN + "65ce2fa282de5710ad02c2aa_home-hero.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NOWW Advisory — Independent Tenant Representation" },
      { name: "description", content: "Trusted independent tenant representation and commercial property advisory in New Zealand." },
      { property: "og:title", content: "NOWW Advisory — Independent Tenant Representation" },
      { property: "og:description", content: "Your end-to-end partner for commercial and workplace success." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: HERO },
      { name: "twitter:image", content: HERO },
    ],
  }),
  component: Index,
});

const steps = [
  ["Connect", "We meet with you, the client, to understand your workplace requirements and needs."],
  ["Engage", "Our tailored services align with your property and business strategies."],
  ["Deliver", "We engage in fair and reasonable discussion, negotiating on your behalf to ensure a successful outcome."],
  ["Support", "Long-term support and advice so your workplace environment remains conducive to your needs."],
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <header className="flex items-center justify-between px-6 md:px-12 py-6">
        <a href="/" className="font-display text-2xl tracking-tight">NOWW<span className="text-primary">.</span></a>
        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#about" className="hover:text-primary">About Us</a>
          <a href="#services" className="hover:text-primary">Services</a>
          <a href="#approach" className="hover:text-primary">Our Approach</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </nav>
      </header>

      <section className="px-6 md:px-12 pt-10 pb-16">
        <p className="uppercase tracking-[0.3em] text-xs text-primary mb-6">Advisory</p>
        <h1 className="font-display text-5xl md:text-8xl leading-[0.95] max-w-5xl">Trusted independent tenant representation</h1>
      </section>
      <img src={HERO} alt="Modern office interior" className="w-full h-[70vh] object-cover" />

      <section id="services" className="px-6 md:px-12 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display text-4xl md:text-5xl mb-6">Your end-to-end partner for commercial and workplace success</h2>
          <a href="#contact" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full">Explore our services</a>
        </div>
        <div>
          <p className="uppercase tracking-[0.3em] text-xs text-primary mb-4">Building relationships</p>
          <h3 className="font-display text-3xl mb-4">Facilitate your property and workplace strategy</h3>
          <p className="text-muted-foreground">At NOWW Advisory, we take a pragmatic approach to commercial property negotiations.</p>
        </div>
      </section>

      <section className="px-6 md:px-12 grid grid-cols-3 gap-4">
        {["65ce3c5520e92c674d3e9e24_relationship2.webp","65ce3c55ebd9aff1e071656a_relationship1.webp","65ce3a0d49a3114c85c8b9e1_home-relationship.webp"].map((f) => (
          <img key={f} src={CDN + f} alt="" className="w-full h-72 object-cover rounded-2xl" />
        ))}
      </section>

      <section id="about" className="px-6 md:px-12 py-24 grid md:grid-cols-2 gap-12 items-center">
        <img src={CDN + "65ce49543b067095c62b9350_home-advice.webp"} alt="Advisors meeting" className="w-full rounded-2xl" />
        <div>
          <h2 className="font-display text-4xl md:text-5xl mb-4">Expert advice, with end-to-end solutions.</h2>
          <p className="text-muted-foreground mb-8">Bespoke, tailored, and commercial property negotiation.</p>
          <p className="text-xl mb-10">We work alongside you on all aspects of your workplace project to ensure a successful outcome for your business and people.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-secondary p-6 rounded-2xl"><h4 className="font-display text-xl mb-2">Client and stakeholder consideration.</h4><p className="text-sm text-muted-foreground">Experienced business leadership that's driven by fair outcomes.</p></div>
            <div className="bg-secondary p-6 rounded-2xl"><h4 className="font-display text-xl mb-2">People are your greatest business asset.</h4><p className="text-sm text-muted-foreground">Invest in your people, work with us to create an environment for them to thrive.</p></div>
          </div>
        </div>
      </section>

      <section id="approach" className="bg-primary text-primary-foreground px-6 md:px-12 py-24">
        <h2 className="font-display text-4xl md:text-6xl mb-16">Powering your workplace journey</h2>
        <div className="grid md:grid-cols-4 gap-10">
          {steps.map(([t, d], i) => (
            <div key={t} className="border-t border-primary-foreground/30 pt-6">
              <span className="text-sm opacity-70">0{i + 1}</span>
              <h3 className="font-display text-2xl my-3">{t}</h3>
              <p className="opacity-80 text-sm">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="grid md:grid-cols-2">
        <div className="relative">
          <img src={CDN + "65d5e28058ca2a11f5d2a8c2_cta-left-image.webp"} alt="" className="w-full h-full min-h-80 object-cover" />
          <div className="absolute inset-0 bg-foreground/50 flex flex-col justify-end p-10">
            <h2 className="font-display text-4xl text-background mb-4">Want to join our experienced team?</h2>
            <a href="mailto:hello@nowwadvisory.co.nz" className="self-start border border-background text-background px-6 py-3 rounded-full">Join the team</a>
          </div>
        </div>
        <div className="bg-secondary p-10 md:p-16 flex flex-col justify-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">Ready to chat? Start your journey.</h2>
          <a href="mailto:hello@nowwadvisory.co.nz" className="self-start bg-primary text-primary-foreground px-6 py-3 rounded-full">Contact us today</a>
        </div>
      </section>

      <footer className="px-6 md:px-12 py-10 text-sm text-muted-foreground flex justify-between">
        <span>© {new Date().getFullYear()} NOWW Advisory</span><span>Aotearoa New Zealand</span>
      </footer>
    </div>
  );
}

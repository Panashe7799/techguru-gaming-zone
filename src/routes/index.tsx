import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, benefits, ExperienceLink, FinalCta, ImageNotice, MapPin, MessageCircle, SectionHeading, images } from "@/components/techguru";
import { business, messages, whatsappUrl } from "@/lib/techguru-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TECHGURU | Gaming Centre in Marondera" },
      { name: "description", content: "Level up at TECHGURU, a premium VR and PlayStation gaming centre at 14 Nzou Street, Marondera, Zimbabwe." },
      { property: "og:title", content: "TECHGURU | Gaming Centre in Marondera" },
      { property: "og:description", content: "VR, PlayStation, competition and pure gaming in Marondera." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "EntertainmentBusiness", name: "TECHGURU", description: "Gaming shop and gaming entertainment centre offering VR and PlayStation gaming.", address: { "@type": "PostalAddress", streetAddress: "14 Nzou Street", addressLocality: "Marondera", addressCountry: "ZW" }, telephone: business.phones }) }],
  }), component: HomePage,
});

const experiences = [
  { title: "VR GAMING", copy: "Step into another world.", image: images.vr, to: "/vr" as const, cta: "Explore VR" },
  { title: "PLAYSTATION", copy: "Challenge your friends.", image: images.console, to: "/playstation" as const, cta: "Explore PlayStation" },
  { title: "EVENTS", copy: "Make your next event unforgettable.", image: images.events, to: "/events" as const, cta: "Plan an Event" },
];

function HomePage() { return <>
  <section className="relative min-h-[92vh] overflow-hidden pt-18">
    <img src={images.hero} alt="Illustrative premium gaming lounge with VR and console players" width={1920} height={1088} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-center" />
    <div className="absolute inset-0 bg-hero-overlay" /><div className="hero-grid absolute inset-0 opacity-30" />
    <div className="relative mx-auto flex min-h-[calc(92vh-4.5rem)] max-w-7xl items-end px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20"><div className="max-w-5xl animate-rise"><div className="mb-5 inline-flex items-center gap-2 border border-foreground/15 bg-background/25 px-3 py-2 text-xs font-bold text-foreground/80 backdrop-blur"><MapPin size={14} className="text-primary" />14 Nzou Street, Marondera, Zimbabwe</div><h1 className="max-w-5xl font-display text-6xl font-black uppercase leading-[.86] text-foreground sm:text-8xl lg:text-[7.5rem]">LEVEL UP YOUR <span className="text-gradient">EXPERIENCE.</span></h1><p className="mt-6 text-lg font-semibold text-foreground/75 sm:text-xl">VR. PlayStation. Competition. Pure gaming.</p><div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg"><Link to="/contact" hash="booking">BOOK YOUR SESSION <ArrowRight /></Link></Button><Button asChild variant="outline" size="lg" className="border-foreground/30 bg-background/20 text-foreground backdrop-blur hover:bg-foreground hover:text-background"><Link to="/vr">EXPLORE THE EXPERIENCE</Link></Button></div></div></div>
  </section>
  <section className="border-b border-border bg-background py-5"><div className="mx-auto flex max-w-7xl items-center gap-4 overflow-hidden px-4 text-xs font-black uppercase text-muted-foreground sm:px-6 lg:px-8"><span className="text-primary">MARONDERA</span><span>•</span><span>VIRTUAL REALITY</span><span>•</span><span>PLAYSTATION</span><span>•</span><span>GROUP EXPERIENCES</span><span>•</span><span>EVENTS</span></div></section>
  <section className="section-shell"><SectionHeading eyebrow="CHOOSE YOUR EXPERIENCE" title="ENTER THE ARENA." copy="Whether you want to step inside a new world, challenge your crew or plan an unforgettable group experience, your next game starts here." /><div className="mt-12 grid gap-5 lg:grid-cols-3">{experiences.map((item) => <article key={item.title} className="experience-card"><div className="relative aspect-[4/5] overflow-hidden"><img src={item.image} alt={`Illustrative ${item.title.toLowerCase()} experience`} width={1600} height={1200} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><ImageNotice /><div className="absolute inset-0 bg-card-overlay" /><div className="absolute inset-x-0 bottom-0 p-6"><h3 className="font-display text-3xl font-black">{item.title}</h3><p className="mt-2 text-foreground/70">{item.copy}</p><ExperienceLink to={item.to}>{item.cta}</ExperienceLink></div></div></article>)}</div></section>
  <section className="section-shell bg-surface"><SectionHeading eyebrow="WHY TECHGURU?" title="THIS IS HOW MARONDERA PLAYS." /><div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">{benefits.map(([Icon, title]) => <div key={title} className="group bg-surface p-7 transition-colors hover:bg-card"><Icon className="size-6 text-primary" /><p className="mt-10 max-w-48 font-display text-xl font-black uppercase">{title}</p></div>)}</div></section>
  <section className="section-shell"><div className="grid items-center gap-12 lg:grid-cols-2"><div className="relative overflow-hidden"><img src={images.vr} alt="Illustrative player immersed in VR" width={1600} height={1200} loading="lazy" className="aspect-[4/3] w-full object-cover" /><ImageNotice /></div><div><SectionHeading eyebrow="VIRTUAL REALITY" title="ENTER ANOTHER REALITY." copy="Put on the headset, step into the game and experience gaming from a completely different perspective." /><Button asChild className="mt-8"><a href={whatsappUrl(messages.vr)} target="_blank" rel="noreferrer"><MessageCircle /> ENQUIRE ABOUT VR</a></Button></div></div></section>
  <section className="section-shell bg-surface-deep"><div className="grid items-center gap-12 lg:grid-cols-2"><div className="lg:order-2 relative overflow-hidden"><img src={images.console} alt="Illustrative group enjoying console multiplayer gaming" width={1600} height={1200} loading="lazy" className="aspect-[4/3] w-full object-cover" /><ImageNotice /></div><div><SectionHeading eyebrow="PLAYSTATION" title="YOUR CONSOLE. YOUR CREW. YOUR GAME." copy="Challenge your friends, settle the rivalry and make every round count with PlayStation gaming at TECHGURU." /><Button asChild variant="outline" className="mt-8"><Link to="/playstation">EXPLORE PLAYSTATION <ArrowRight /></Link></Button></div></div></section>
  <section className="section-shell"><div className="grid gap-10 lg:grid-cols-[1fr_.8fr]"><div><SectionHeading eyebrow="VISIT TECHGURU" title="THE GAME IS CLOSER THAN YOU THINK." copy="Find TECHGURU at 14 Nzou Street, Marondera — a local destination for VR gaming, PlayStation competition, friends, groups and future gaming events." /><div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg"><a href={business.directionsUrl} target="_blank" rel="noreferrer"><MapPin /> GET DIRECTIONS</a></Button><Button asChild size="lg" variant="outline"><Link to="/contact">CONTACT US</Link></Button></div></div><div className="map-grid grid min-h-72 place-items-center border border-border"><span className="grid size-20 place-items-center rounded-full border border-primary/40 bg-primary/15 text-primary shadow-glow"><MapPin className="size-8" /></span></div></div></section>
  <FinalCta />
  </>; }
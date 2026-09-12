import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, ImageNotice, PageHero, SectionHeading, Tick, images } from "@/components/techguru";
import { games, messages, whatsappUrl } from "@/lib/techguru-content";

export const Route = createFileRoute("/vr")({
  head: () => ({ meta: [{ title: "VR Gaming Marondera | TECHGURU" }, { name: "description", content: "Step into immersive VR gaming at TECHGURU, a gaming centre at 14 Nzou Street, Marondera." }, { property: "og:title", content: "VR Gaming Marondera | TECHGURU" }, { property: "og:description", content: "Enter another reality with immersive VR gaming in Marondera." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: VrPage,
});

function VrPage() { const vrGames = games.filter((game) => game.platform === "VR"); return <>
  <PageHero eyebrow="VR AT TECHGURU" title="ENTER ANOTHER REALITY." copy="Put on the headset, step into the game and experience gaming from a completely different perspective." image={images.vr} imageAlt="Illustrative VR gaming experience">
    <Button asChild size="lg"><a href={whatsappUrl(messages.vr)} target="_blank" rel="noreferrer">ENQUIRE ABOUT VR <ArrowRight /></a></Button>
  </PageHero>
  <section className="section-shell"><SectionHeading eyebrow="HOW IT WORKS" title="THREE STEPS. ANOTHER WORLD." /><div className="mt-12 grid gap-px bg-border md:grid-cols-3">{[["01", "Choose your experience."], ["02", "Gear up."], ["03", "Enter the game."]].map(([n, text]) => <div key={n} className="bg-background p-8 sm:p-10"><span className="font-display text-5xl font-black text-primary">{n}</span><h3 className="mt-16 font-display text-2xl font-black uppercase">{text}</h3></div>)}</div></section>
  <section className="section-shell pt-0"><SectionHeading eyebrow="EXPERIENCE LIBRARY" title="VR EXPERIENCES" copy="Specific titles and availability will be added once confirmed by TECHGURU." /><div className="mt-10 grid gap-5 md:grid-cols-2">{vrGames.map((game) => <article key={game.id} className="game-card"><div className="relative"><img src={game.image} alt="Illustrative VR game placeholder" width={1600} height={1200} loading="lazy" /><ImageNotice /></div><div className="p-6"><span className="status">{game.availability}</span><h3 className="mt-4 font-display text-2xl font-black uppercase">{game.title}</h3><p className="mt-2 text-sm text-muted-foreground">{game.genre} · {game.description}</p></div></article>)}</div><Button asChild className="mt-8" variant="outline"><Link to="/games">EXPLORE GAME LIBRARY</Link></Button></section>
  <section className="section-shell bg-surface"><div className="grid gap-10 lg:grid-cols-2"><SectionHeading eyebrow="IMMERSIVE BY DESIGN" title="PLAY BEYOND THE SCREEN." copy="VR places you inside the experience. Move, react and discover gaming from a new perspective at our Marondera gaming centre." /><ul className="grid content-center gap-4"><Tick>Immersive headset gaming</Tick><Tick>Experiences for individuals and groups</Tick><Tick>Simple WhatsApp booking</Tick></ul></div></section>
  </>; }
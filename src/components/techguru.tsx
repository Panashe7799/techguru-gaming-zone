import { useState, type FormEvent, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight, CalendarDays, Check, ChevronRight, Gamepad2, Headphones,
  MapPin, Menu, MessageCircle, Phone, Sparkles, Users, X, Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { business, images, messages, navItems, whatsappUrl } from "@/lib/techguru-content";
import { cn } from "@/lib/utils";

export function Logo() {
  return <Link to="/" className="group flex items-center gap-2.5" aria-label="TECHGURU home">
    <span className="grid size-9 place-items-center border border-primary/40 bg-primary/10 text-primary shadow-glow transition-transform group-hover:-rotate-3"><Gamepad2 size={20} /></span>
    <span className="font-display text-lg font-black tracking-normal text-foreground">TECH<span className="text-primary">GURU</span></span>
  </Link>;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
    <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <Logo />
      <nav className="hidden items-center gap-5 lg:flex" aria-label="Main navigation">
        {navItems.map((item) => <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }} className="nav-link" activeProps={{ className: "nav-link text-primary" }}>{item.label}</Link>)}
      </nav>
      <div className="hidden lg:block"><Button asChild size="lg"><Link to="/contact" hash="booking">BOOK NOW <ArrowRight /></Link></Button></div>
      <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav className="border-t border-border bg-background px-4 py-4 lg:hidden" aria-label="Mobile navigation">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-1">{navItems.map((item) => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="rounded-sm px-3 py-3 text-sm font-bold text-muted-foreground hover:bg-accent hover:text-foreground">{item.label}</Link>)}</div>
    </nav>}
  </header>;
}

export function SiteFooter() {
  return <footer className="border-t border-border bg-surface-deep pb-24 pt-16 md:pb-10">
    <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
      <div><Logo /><p className="mt-5 max-w-xs font-display text-2xl font-black text-foreground">LEVEL UP YOUR EXPERIENCE.</p><p className="mt-3 text-sm text-muted-foreground">A physical gaming destination in Marondera, Zimbabwe.</p></div>
      <div><p className="eyebrow">VISIT</p><address className="mt-4 not-italic text-sm leading-7 text-muted-foreground">14 Nzou Street<br />Marondera, Zimbabwe</address><div className="mt-3 space-y-1">{business.phones.map((phone) => <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="block text-sm text-foreground hover:text-primary">{phone}</a>)}</div></div>
      <div><p className="eyebrow">EXPLORE</p><div className="mt-4 grid grid-cols-2 gap-2">{navItems.map((item) => <Link key={item.to} to={item.to} className="text-sm text-muted-foreground hover:text-primary">{item.label}</Link>)}</div><p className="mt-6 text-xs text-muted-foreground">Social media links coming soon.</p></div>
    </div><div className="mx-auto mt-12 max-w-7xl border-t border-border px-4 pt-6 text-xs text-muted-foreground sm:px-6 lg:px-8">© 2026 Techguru. All rights reserved.</div>
  </footer>;
}

export function MobileActions() {
  return <div className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-2 gap-2 rounded-md border border-border bg-background/95 p-2 shadow-2xl backdrop-blur-xl md:hidden">
    <Button asChild variant="outline"><a href={whatsappUrl(messages.general)} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp</a></Button>
    <Button asChild><Link to="/contact" hash="booking"><CalendarDays /> Book now</Link></Button>
  </div>;
}

export function FloatingWhatsApp() {
  return <Button asChild size="icon" className="fixed bottom-7 right-7 z-40 hidden size-14 rounded-full shadow-glow md:inline-flex"><a href={whatsappUrl(messages.general)} target="_blank" rel="noreferrer" aria-label="Chat with TECHGURU on WhatsApp"><MessageCircle className="size-6" /></a></Button>;
}

export function SiteLayout({ children }: { children: ReactNode }) { return <><SiteHeader /><main>{children}</main><SiteFooter /><FloatingWhatsApp /><MobileActions /></>; }

export function SectionHeading({ eyebrow, title, copy, align = "left" }: { eyebrow: string; title: string; copy?: string; align?: "left" | "center" }) {
  return <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}><p className="eyebrow">{eyebrow}</p><h2 className="mt-4 font-display text-4xl font-black uppercase leading-none text-foreground sm:text-5xl lg:text-6xl">{title}</h2>{copy && <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">{copy}</p>}</div>;
}

export function PageHero({ eyebrow, title, copy, image, imageAlt, children }: { eyebrow: string; title: string; copy: string; image: string; imageAlt: string; children?: ReactNode }) {
  return <section className="relative min-h-[72vh] overflow-hidden pt-18"><img src={image} alt={imageAlt} width={1600} height={1200} className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-hero-overlay" /><div className="relative mx-auto flex min-h-[72vh] max-w-7xl items-end px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24"><div className="max-w-4xl animate-rise"><p className="eyebrow">{eyebrow}</p><h1 className="mt-5 font-display text-5xl font-black uppercase leading-[.9] text-foreground sm:text-7xl lg:text-8xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/75">{copy}</p>{children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}</div></div></section>;
}

export function ImageNotice() { return <span className="absolute bottom-3 left-3 z-10 rounded-sm border border-border bg-background/80 px-2 py-1 text-[10px] font-bold uppercase text-muted-foreground backdrop-blur">Illustrative placeholder</span>; }

export function BookingForm() {
  const [type, setType] = useState("");
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = `Hi Techguru, I'd like to book a gaming session.\n\nGaming type: ${type}\nPreferred date: ${data.get("date")}\nPreferred time: ${data.get("time")}\nPlayers: ${data.get("players")}\nName: ${data.get("name")}\nPhone: ${data.get("phone")}`;
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
  };
  return <form onSubmit={submit} className="grid gap-5 rounded-md border border-border bg-card p-5 shadow-panel sm:p-8">
    <div className="grid gap-5 sm:grid-cols-2">
      <div className="space-y-2"><Label htmlFor="gaming-type">Gaming type</Label><Select required value={type} onValueChange={setType}><SelectTrigger id="gaming-type"><SelectValue placeholder="Choose an experience" /></SelectTrigger><SelectContent><SelectItem value="VR gaming">VR gaming</SelectItem><SelectItem value="PlayStation gaming">PlayStation gaming</SelectItem><SelectItem value="Group session">Group session</SelectItem><SelectItem value="Event package">Event package</SelectItem></SelectContent></Select></div>
      <div className="space-y-2"><Label htmlFor="players">Number of players</Label><Input id="players" name="players" type="number" min="1" placeholder="e.g. 4" required /></div>
      <div className="space-y-2"><Label htmlFor="date">Preferred date</Label><Input id="date" name="date" type="date" required /></div>
      <div className="space-y-2"><Label htmlFor="time">Preferred time</Label><Input id="time" name="time" type="time" required /></div>
      <div className="space-y-2"><Label htmlFor="name">Name</Label><Input id="name" name="name" autoComplete="name" placeholder="Your name" required /></div>
      <div className="space-y-2"><Label htmlFor="phone">Phone number</Label><Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" required /></div>
    </div><Button type="submit" size="lg" disabled={!type} className="mt-2 h-12"><MessageCircle /> CONFIRM VIA WHATSAPP</Button>
  </form>;
}

export const benefits = [
  [Headphones, "Immersive VR experiences"], [Gamepad2, "PlayStation gaming"], [Zap, "Competitive multiplayer fun"],
  [Users, "Great for friends"], [Users, "Great for groups"], [Sparkles, "Great for events"], [MapPin, "Convenient Marondera location"],
] as const;

export function FinalCta() {
  return <section className="border-y border-border bg-primary py-16 text-primary-foreground"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8"><div><p className="text-xs font-black uppercase tracking-widest opacity-75">Your next gaming experience starts here.</p><h2 className="mt-3 font-display text-4xl font-black uppercase sm:text-6xl">READY TO PLAY?</h2></div><div className="flex flex-wrap gap-3"><Button asChild variant="secondary" size="lg"><a href={whatsappUrl(messages.booking)} target="_blank" rel="noreferrer"><MessageCircle /> WHATSAPP US</a></Button><Button asChild variant="outline" size="lg" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"><a href="tel:+263771714058"><Phone /> CALL TECHGURU</a></Button></div></div></section>;
}

export function ExperienceLink({ to, children }: { to: "/vr" | "/playstation" | "/events"; children: ReactNode }) { return <Link to={to} className="mt-5 inline-flex items-center gap-2 text-sm font-black uppercase text-primary hover:text-cyan">{children}<ChevronRight size={16} /></Link>; }

export function Tick({ children }: { children: ReactNode }) { return <li className="flex items-start gap-3 text-muted-foreground"><span className="mt-0.5 grid size-5 shrink-0 place-items-center bg-primary/15 text-primary"><Check size={13} /></span>{children}</li>; }

export { ArrowRight, CalendarDays, Gamepad2, MapPin, MessageCircle, Phone, Users, images };
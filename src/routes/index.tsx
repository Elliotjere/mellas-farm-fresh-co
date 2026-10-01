import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Menu, X, Clock } from "lucide-react";
import logo from "@/assets/logo.png";
import logoWhite from "@/assets/logo-white.svg";
import farmHero from "@/assets/farm_2.jpg";
import farmFlock from "@/assets/farm.jpg";
import farmMixed from "@/assets/farm_1.jpg";
import farmEggs from "@/assets/farm_3.jpg";
import farmRoosters from "@/assets/farm_4.jpg";
import process2 from "@/assets/process-2.jpg";
import process3 from "@/assets/process-3.jpg";
import kienyejiAsset from "@/assets/kienyeji.jpeg.asset.json";
import broilerAsset from "@/assets/broiler.jpeg.asset.json";
import eggsAsset from "@/assets/mayai.jpeg.asset.json";
import heroAsset from "@/assets/hero-farm.jpeg.asset.json";
const pKienyeji = kienyejiAsset.url;
const pBroiler = broilerAsset.url;
const pEggs = eggsAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mella's Farm | Kuku wa Kienyeji, Broilers & Eggs – Dar es Salaam" },
      {
        name: "description",
        content:
          "Mella's Farm supplies indigenous chicken (kuku wa kienyeji), broiler chicken and fresh poultry eggs from Mwenge Lufungira, Dar es Salaam.",
      },
      { property: "og:title", content: "Mella's Farm | Poultry Supplier in Dar es Salaam" },
      {
        property: "og:description",
        content: "Indigenous chicken, broilers and fresh eggs supplied from Mwenge Lufungira, Dar es Salaam.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PHONE = "+255 745 615 159";
const TEL = "tel:+255745615159";
const EMAIL = "info@mellasfarm.co.tz";

const nav = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Our Process", href: "#process" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const products = [
  {
    img: pKienyeji,
    title: "Kuku wa Kienyeji",
    text: "Indigenous free-range chicken, raised on natural feed. Available live or dressed and packed.",
  },
  {
    img: pBroiler,
    title: "Broiler Chicken",
    text: "Well-fed broilers supplied whole, dressed and chilled for homes, hotels and restaurants.",
  },
  {
    img: pEggs,
    title: "Poultry Eggs",
    text: "Fresh eggs collected daily and supplied by the tray to households, shops and bakeries.",
  },
];

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="font-sans text-[15px] leading-relaxed">
      {/* Top bar */}
      <div className="hidden bg-secondary text-secondary-foreground md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-xs">
          <div className="flex gap-6">
            <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-primary" /> Mwenge Lufungira, Dar es Salaam</span>
            <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-primary" /> Mon – Sat: 7:00 – 18:00</span>
          </div>
          <div className="flex gap-6">
            <a href={TEL} className="flex items-center gap-1.5 hover:text-primary"><Phone className="h-3.5 w-3.5 text-primary" /> {PHONE}</a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-1.5 hover:text-primary"><Mail className="h-3.5 w-3.5 text-primary" /> {EMAIL}</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#home"><img src={logo} alt="Mella's Farm" className="h-12 w-auto" /></a>
          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="font-heading text-[13px] font-semibold uppercase tracking-wide text-foreground hover:text-primary">
                {n.label}
              </a>
            ))}
            <a href="#contact" className="bg-primary px-5 py-2.5 font-heading text-[13px] font-semibold uppercase tracking-wide text-primary-foreground hover:bg-accent">
              Order Now
            </a>
          </nav>
          <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav className="border-t border-border bg-background lg:hidden">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-border px-4 py-3 font-heading text-sm font-semibold uppercase">
                {n.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <img src={heroAsset.url} alt="Mella's Farm poultry house" fetchPriority="high" decoding="async" className="h-[560px] w-full object-cover" />
        <div className="absolute inset-0 bg-secondary/65" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-4 text-secondary-foreground">
            <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">Mella's Farm – Dar es Salaam</p>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
              Supplying healthy chicken and fresh eggs to Tanzanian families
            </h1>
            <p className="mt-5 max-w-xl text-base opacity-90">
              We raise and supply indigenous chicken (kuku wa kienyeji), broiler chicken and poultry eggs to homes, hotels, restaurants and retailers across Dar es Salaam.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#products" className="bg-primary px-7 py-3 font-heading text-sm font-semibold uppercase text-primary-foreground hover:bg-accent">Our Products</a>
              <a href={TEL} className="border-2 border-secondary-foreground px-7 py-3 font-heading text-sm font-semibold uppercase hover:bg-secondary-foreground hover:text-secondary">Call Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission strip */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-10 text-center">
          <h2 className="text-2xl font-bold">Shambani mpaka Mezani</h2>
          <p className="mx-auto mt-2 max-w-2xl opacity-90">From our farm to your table – raised with care, processed hygienically and delivered fresh.</p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
          <img src={farmEggs} alt="Hen with fresh eggs" loading="lazy" className="w-full object-cover shadow-md" />
          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">About Us</p>
            <h2 className="mt-2 text-3xl font-bold">Who We Are</h2>
            <div className="mt-3 h-1 w-14 bg-primary" />
            <p className="mt-6 text-muted-foreground">
              Mella's Farm is a poultry farm based at Mwenge Lufungira, Dar es Salaam. We specialise in rearing and supplying indigenous chicken, broiler chicken and poultry eggs.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our birds are kept in clean, well-ventilated houses with access to clean water and quality feed. We supply both live and dressed chicken, and we deliver to customers within Dar es Salaam.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm font-semibold">
              {["Indigenous chicken", "Broiler chicken", "Fresh eggs", "Delivery in Dar es Salaam"].map((i) => (
                <li key={i} className="flex items-center gap-2"><span className="h-2 w-2 bg-primary" />{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="bg-muted py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <p className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">What We Supply</p>
            <h2 className="mt-2 text-3xl font-bold">Our Products</h2>
            <div className="mx-auto mt-3 h-1 w-14 bg-primary" />
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {products.map((p) => (
              <article key={p.title} className="border border-border bg-card">
                <img src={p.img} alt={p.title} loading="lazy" className="aspect-square w-full bg-background object-contain p-4" />
                <div className="border-t-4 border-primary p-6">
                  <h3 className="text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                  <a href="#contact" className="mt-4 inline-block font-heading text-xs font-bold uppercase tracking-wide text-primary hover:text-accent">Place an order »</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <p className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">The Mella's Way</p>
            <h2 className="mt-2 text-3xl font-bold">How We Process Our Chicken</h2>
            <div className="mx-auto mt-3 h-1 w-14 bg-primary" />
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Every bird is handled hygienically from the poultry house to the package.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <img src={process2} alt="Packing dressed chicken" loading="lazy" className="h-80 w-full object-cover" />
            <img src={process3} alt="Dressed chickens ready for chilling" loading="lazy" className="h-80 w-full object-cover" />
          </div>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-4">
            {[
              ["01", "Rearing", "Birds are raised in clean houses with quality feed and water."],
              ["02", "Inspection", "Only healthy birds are selected for processing."],
              ["03", "Dressing", "Slaughtered, cleaned and dressed by trained staff in protective gear."],
              ["04", "Packing", "Chilled, wrapped and labelled before delivery."],
            ].map(([n, t, d]) => (
              <div key={n} className="bg-background p-6">
                <span className="font-heading text-3xl font-extrabold text-primary">{n}</span>
                <h3 className="mt-2 font-bold">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-secondary py-20 text-secondary-foreground">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <p className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">Gallery</p>
            <h2 className="mt-2 text-3xl font-bold">On The Farm</h2>
            <div className="mx-auto mt-3 h-1 w-14 bg-primary" />
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
            {[farmHero, farmFlock, farmRoosters, farmMixed].map((src, i) => (
              <img key={i} src={src} alt="Mella's Farm chicken" loading="lazy" className="aspect-square w-full object-cover" />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2">
          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">Contact Us</p>
            <h2 className="mt-2 text-3xl font-bold">Place Your Order</h2>
            <div className="mt-3 h-1 w-14 bg-primary" />
            <p className="mt-6 text-muted-foreground">Call, WhatsApp or email us for orders, prices and delivery.</p>
            <ul className="mt-8 space-y-5">
              <li className="flex gap-4"><MapPin className="mt-1 h-5 w-5 text-primary" /><div><strong>Our Location</strong><br /><span className="text-muted-foreground">Mwenge Lufungira, Dar es Salaam, Tanzania</span></div></li>
              <li className="flex gap-4"><Phone className="mt-1 h-5 w-5 text-primary" /><div><strong>Phone / WhatsApp</strong><br /><a href={TEL} className="text-muted-foreground hover:text-primary">{PHONE}</a></div></li>
              <li className="flex gap-4"><Mail className="mt-1 h-5 w-5 text-primary" /><div><strong>Email</strong><br /><a href={`mailto:${EMAIL}`} className="text-muted-foreground hover:text-primary">{EMAIL}</a></div></li>
            </ul>
          </div>
          <form
            className="border border-border bg-muted p-8"
            onSubmit={(e) => {
              e.preventDefault();
              const f = new FormData(e.currentTarget);
              const body = `Name: ${f.get("name")}\nPhone: ${f.get("phone")}\n\n${f.get("message")}`;
              window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Order enquiry – " + f.get("product"))}&body=${encodeURIComponent(body)}`;
            }}
          >
            <div className="grid gap-4">
              <input name="name" required placeholder="Your Name" className="border border-input bg-background px-4 py-3 outline-none focus:border-primary" />
              <input name="phone" required placeholder="Phone Number" className="border border-input bg-background px-4 py-3 outline-none focus:border-primary" />
              <select name="product" className="border border-input bg-background px-4 py-3 outline-none focus:border-primary">
                <option>Kuku wa Kienyeji</option>
                <option>Broiler Chicken</option>
                <option>Poultry Eggs</option>
              </select>
              <textarea name="message" rows={4} placeholder="Quantity and delivery details" className="border border-input bg-background px-4 py-3 outline-none focus:border-primary" />
              <button className="bg-primary px-6 py-3 font-heading text-sm font-semibold uppercase text-primary-foreground hover:bg-accent">Send Enquiry</button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
          <div>
            <img src={logoWhite} alt="Mella's Farm" className="h-14 w-auto" />
            <p className="mt-4 text-sm opacity-75">Supplier of indigenous chicken, broiler chicken and poultry eggs in Dar es Salaam.</p>
          </div>
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wide">Our Location</h4>
            <div className="mt-2 h-0.5 w-10 bg-primary" />
            <p className="mt-4 text-sm opacity-75">Mwenge Lufungira,<br />Dar es Salaam, Tanzania</p>
          </div>
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wide">Customer Support</h4>
            <div className="mt-2 h-0.5 w-10 bg-primary" />
            <p className="mt-4 text-sm opacity-75">
              <a href={TEL} className="hover:text-primary">{PHONE}</a><br />
              Email: <a href={`mailto:${EMAIL}`} className="hover:text-primary">{EMAIL}</a>
            </p>
          </div>
        </div>
        <div className="border-t border-secondary-foreground/10 py-5 text-center text-xs opacity-60">
          © {new Date().getFullYear()} Mella's Farm. All rights reserved. | mellasfarm.co.tz
        </div>
      </footer>
    </div>
  );
}

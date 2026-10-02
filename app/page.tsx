"use client";

import {
  FormEvent,
  PointerEvent as ReactPointerEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { marketContent } from "./copy";

type MarketKey = "SN" | "FR" | "UK";

const markets: Record<MarketKey, {
  label: string;
  shortLabel: string;
  price: string;
  upfront: string;
  firstPayment: string;
  finalPayment: string;
}> = {
  SN: {
    label: "Sénégal",
    shortLabel: "SN",
    price: "350 000 FCFA",
    upfront: "332 500 FCFA",
    firstPayment: "210 000 FCFA",
    finalPayment: "140 000 FCFA",
  },
  FR: {
    label: "France",
    shortLabel: "FR",
    price: "1 500 €",
    upfront: "1 425 €",
    firstPayment: "900 €",
    finalPayment: "600 €",
  },
  UK: {
    label: "Royaume-Uni",
    shortLabel: "UK",
    price: "£1,300",
    upfront: "£1,235",
    firstPayment: "£780",
    finalPayment: "£520",
  },
};

function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <svg
      className="brand-mark"
      viewBox="0 0 100 138"
      role="img"
      aria-label="Monogramme STATURE"
    >
      <circle cx="21" cy="51" r="6" fill={inverse ? "#F7F4EE" : "#2356DB"} />
      <circle cx="44" cy="34" r="7" fill={inverse ? "#F7F4EE" : "#2356DB"} />
      <circle cx="73" cy="14" r="8" fill={inverse ? "#F7F4EE" : "#2356DB"} />
      <path d="M12 63 29 53v34L12 97Z" fill={inverse ? "#F7F4EE" : "#2356DB"} />
      <path d="m33 48 21-15v49L33 95Z" fill={inverse ? "#F7F4EE" : "#2356DB"} />
      <path d="m58 31 24-20v67L58 94Z" fill={inverse ? "#F7F4EE" : "#2356DB"} />
      <path d="M12 94c20-11 31-2 36 11 4 11-1 22-8 30H12Z" fill={inverse ? "#F7F4EE" : "#0B1F3A"} />
      <path d="M84 77v58H54c8-12 12-24 5-34-7-9-22-9-39 1" fill="none" stroke={inverse ? "#0B1F3A" : "#F7F4EE"} strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

function Wordmark({ inverse = false, english = false }: { inverse?: boolean; english?: boolean }) {
  return (
    <span className={`wordmark ${inverse ? "wordmark-inverse" : ""}`}>
      <strong>STATURE</strong>
      <small>{english ? "Digital consulting & solutions" : "Conseil & solutions digitales"}</small>
    </span>
  );
}

function MonumentScene({ english = false }: { english?: boolean }) {
  const sceneRef = useRef<HTMLDivElement>(null);

  function moveScene(event: ReactPointerEvent<HTMLDivElement>) {
    const node = sceneRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    node.style.setProperty("--scene-x", `${x * 12}deg`);
    node.style.setProperty("--scene-y", `${y * -10}deg`);
  }

  function resetScene() {
    sceneRef.current?.style.setProperty("--scene-x", "0deg");
    sceneRef.current?.style.setProperty("--scene-y", "0deg");
  }

  return (
    <div
      className="monument-scene"
      ref={sceneRef}
      onPointerMove={moveScene}
      onPointerLeave={resetScene}
      aria-hidden="true"
    >
      <div className="scene-grid" />
      <div className="scene-label scene-label-top"><span>{english ? "Digital asset" : "Objet digital"}</span><b>ST / 01</b></div>
      <div className="scene-label scene-label-side"><span>{english ? "Presence" : "Présence"}</span><b>{english ? "Elevated" : "Élevée"}</b></div>
      <div className="signal-ring"><i /></div>
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="scene-glow" />
      <div className="monument-object">
        <div className="monument-shadow" />
        <div className="riser riser-one"><i /><span /></div>
        <div className="riser riser-two"><i /><span /></div>
        <div className="riser riser-three"><i /><span /></div>
        <div className="monument-base" />
        <div className="monument-s">S</div>
        <div className="coral-pin" />
      </div>
      <div className="scene-chip chip-one"><b>{english ? "Clarity" : "Clarté"}</b><span>{english ? "An offer understood" : "Une offre comprise"}</span></div>
      <div className="scene-chip chip-two"><b>Impact</b><span>{english ? "Expertise noticed" : "Une expertise remarquée"}</span></div>
      <div className="scene-caption"><span>{english ? "Built in Dakar" : "Conçu à Dakar"}</span><i /><span>{english ? "Delivered worldwide" : "Déployé partout"}</span></div>
      <div className="scene-floor" />
    </div>
  );
}

type ShowcaseTheme = "legal" | "migaki" | "checkpoint";
type ShowcaseProjectCopy = {
  kind: string;
  subtitle: string;
  description: string;
  tags: string[];
};

const showcaseProjects: Array<{
  number: string;
  kind: string;
  title: string;
  fr: ShowcaseProjectCopy;
  en: ShowcaseProjectCopy;
  url: string;
  urlLabel: string;
  theme: ShowcaseTheme;
  previewImage?: string;
}> = [
  {
    number: "01",
    title: "Mind Business Consulting",
    fr: {
      kind: "Projet client — conseil",
      subtitle: "La crédibilité comme première impression.",
      description: "Une présence éditoriale et structurée pour rendre l’expertise juridique plus lisible et plus facile à contacter.",
      tags: ["Conseil", "Éditorial", "Confiance"],
    },
    en: {
      kind: "Client project — consulting",
      subtitle: "Credibility as a first impression.",
      description: "An editorial, structured presence that makes legal expertise easier to understand and easier to contact.",
      tags: ["Consulting", "Editorial", "Trust"],
    },
    url: "https://www.mindbusinessconsulting.com",
    urlLabel: "www.mindbusinessconsulting.com",
    theme: "legal",
  },
  {
    number: "02",
    title: "Migaki Nail Studio",
    fr: {
      kind: "Projet client — service",
      subtitle: "Le soin premium, directement à domicile.",
      description: "Une expérience douce et éditoriale qui transforme un service de beauté mobile en marque désirable et mémorable.",
      tags: ["Beauty", "Mobile-first", "Conversion"],
    },
    en: {
      kind: "Client project — service",
      subtitle: "Premium care, delivered at home.",
      description: "A soft editorial experience that turns a mobile beauty service into a desirable and memorable brand.",
      tags: ["Beauty", "Mobile-first", "Conversion"],
    },
    url: "https://www.migakinail.com",
    urlLabel: "www.migakinail.com",
    theme: "migaki",
  },
  {
    number: "03",
    title: "Checkpoint",
    fr: {
      kind: "Projet de marque — MANSA VENTURES",
      subtitle: "Faire comprendre une opportunité en quelques secondes.",
      description: "Une landing page directe et énergique pour donner de la forme à une offre de partenariat et orienter vers l’action.",
      tags: ["Partenariat", "Impact", "Parcours"],
    },
    en: {
      kind: "Brand project — MANSA VENTURES",
      subtitle: "Make an opportunity clear in seconds.",
      description: "A direct, energetic landing page that gives a partnership offer shape and guides visitors towards action.",
      tags: ["Partnership", "Impact", "Journey"],
    },
    url: "https://www.vendingcheckpoint.com",
    urlLabel: "www.vendingcheckpoint.com",
    theme: "checkpoint",
    previewImage: "/checkpoint-homepage-preview.jpg",
  },
];

function ShowcaseLivePreview({ project, english = false }: { project: (typeof showcaseProjects)[number]; english?: boolean }) {
  return (
    <div className="showcase-preview-link showcase-live-preview" role="group" aria-label={`${english ? "Live preview of" : "Aperçu en direct de"} ${project.title}`}>
      <div className={`showcase-browser showcase-browser-${project.theme}`}>
        <div className="showcase-browser-bar" aria-hidden="true">
          <i /><i /><i /><span>{project.urlLabel}</span>
        </div>
        <div className="showcase-browser-viewport">
          {project.previewImage ? (
            <img
              className="showcase-browser-image"
              src={project.previewImage}
              alt={english ? `Homepage preview from ${project.title}` : `Aperçu de la page d’accueil de ${project.title}`}
              loading="lazy"
            />
          ) : (
            <iframe
              src={project.url}
              title={`${english ? "Live preview of" : "Aperçu en direct de"} ${project.title}`}
              loading="lazy"
              referrerPolicy="no-referrer"
              tabIndex={-1}
            />
          )}
        </div>
        <div className="showcase-browser-corner" aria-hidden="true">{project.number} / live</div>
      </div>
      <a className="showcase-preview-hitarea" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`${english ? "Open" : "Ouvrir"} ${project.title}`} />
      <span className="showcase-preview-badge" aria-hidden="true">{english ? "Open website ↗" : "Ouvrir le site ↗"}</span>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedMarket, setSelectedMarket] = useState<MarketKey>("SN");
  const [selectedPayment, setSelectedPayment] = useState("Paiement échelonné — 60 % / 40 %");
  const [showMarketPicker, setShowMarketPicker] = useState(false);
  const market = markets[selectedMarket];
  const copy = marketContent[selectedMarket];

  function chooseMarket(key: MarketKey) {
    setSelectedMarket(key);
    setSelectedPayment(key === "UK" ? "Split payment — 60% / 40%" : "Paiement échelonné — 60 % / 40 %");
    setShowMarketPicker(false);
    window.localStorage.setItem("stature-market", key);
  }

  useEffect(() => {
    const savedMarket = window.localStorage.getItem("stature-market");
    if (savedMarket === "SN" || savedMarket === "FR" || savedMarket === "UK") {
      setSelectedMarket(savedMarket);
      if (savedMarket === "UK") setSelectedPayment("Split payment — 60% / 40%");
    } else {
      setShowMarketPicker(true);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = copy.lang;
    document.title = selectedMarket === "UK"
      ? "SOCLE by STATURE — A website you fully own"
      : `SOCLE par STATURE — Site en pleine propriété · ${copy.marketLabel}`;
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute(
      "content",
      selectedMarket === "UK"
        ? "A professional website built for UK businesses, delivered with full ownership and no compulsory subscription."
        : `Un site professionnel adapté aux entreprises en ${copy.marketLabel}, livré en pleine propriété et sans abonnement obligatoire.`,
    );
  }, [copy.lang, copy.marketLabel, selectedMarket]);

  useEffect(() => {
    document.body.style.overflow = showMarketPicker ? "hidden" : "";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowMarketPicker(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [showMarketPicker]);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    nodes.forEach((node) => observer.observe(node));

    const progress = document.querySelector<HTMLElement>(".scroll-progress");
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = total > 0 ? window.scrollY / total : 0;
      progress?.style.setProperty("--progress", `${ratio * 100}%`);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [selectedMarket]);

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`${selectedMarket === "UK" ? "SOCLE project" : "Projet SOCLE"} - ${data.get("company") || data.get("name")}`);
    const body = encodeURIComponent(
      selectedMarket === "UK"
        ? `Hello STATURE,\n\nI would like a tailored preview for a fully owned SOCLE website.\n\nName: ${data.get("name")}\nBusiness: ${data.get("company")}\nPhone: ${data.get("phone")}\nMarket: United Kingdom\nPayment option: ${selectedPayment}\nMessage: ${data.get("message")}\n`
        : `Bonjour STATURE,\n\nJe souhaite recevoir un aperçu pour un site SOCLE en pleine propriété.\n\nNom : ${data.get("name")}\nOrganisation : ${data.get("company")}\nTéléphone : ${data.get("phone")}\nMarché : ${market.label}\nModalité de paiement : ${selectedPayment}\nMessage : ${data.get("message")}\n`,
    );
    setSubmitted(true);
    window.location.href = `mailto:staturesn@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <main>
      <div className="scroll-progress" aria-hidden="true" />

      {showMarketPicker && (
        <div className="market-overlay" role="dialog" aria-modal="true" aria-labelledby="market-picker-title">
          <div className="market-dialog">
            <button className="market-dialog-close" type="button" onClick={() => setShowMarketPicker(false)} aria-label={selectedMarket === "UK" ? "Close" : "Fermer"}>×</button>
            <div className="market-dialog-brand"><BrandMark /><Wordmark english={selectedMarket === "UK"} /></div>
            <p className="eyebrow"><span /> SN · FR · UK</p>
            <h2 id="market-picker-title">{copy.pickerTitle}</h2>
            <p>{copy.pickerCopy}</p>
            <div className="market-dialog-grid">
              {(Object.keys(markets) as MarketKey[]).map((key) => (
                <button key={key} type="button" onClick={() => chooseMarket(key)}>
                  <span>{markets[key].shortLabel}</span>
                  <b>{marketContent[key].marketLabel}</b>
                  <small>{marketContent[key].pickerAction} ↗</small>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <header className="site-header">
        <a className="brand-lockup" href="#accueil" aria-label="STATURE">
          <BrandMark inverse />
          <Wordmark inverse english={selectedMarket === "UK"} />
        </a>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label={selectedMarket === "UK" ? "Main navigation" : "Navigation principale"}>
          <a href="#socle" onClick={() => setMenuOpen(false)}>{copy.nav[0]}</a>
          <a href="#tarifs" onClick={() => setMenuOpen(false)}>{copy.nav[1]}</a>
          <a href="#methode" onClick={() => setMenuOpen(false)}>{copy.nav[2]}</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>{copy.nav[3]}</a>
          <a href="#realisations" onClick={() => setMenuOpen(false)}>{selectedMarket === "UK" ? "Selected work" : "Réalisations"}</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>{copy.navCta} <span>↗</span></a>
        </nav>
        <button className="header-market" type="button" onClick={() => setShowMarketPicker(true)} aria-label={selectedMarket === "UK" ? "Change market" : "Changer de marché"}>
          <span>{market.shortLabel}</span><b>{copy.marketLabel}</b><i>⌄</i>
        </button>
        <button
          className={`menu-button ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? (selectedMarket === "UK" ? "Close menu" : "Fermer le menu") : (selectedMarket === "UK" ? "Open menu" : "Ouvrir le menu")}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        ><span /><span /></button>
      </header>

      <section className="hero" id="accueil">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-rail" aria-hidden="true"><span>01</span><i /><small>STATURE / {market.shortLabel}</small></div>
        <div className="hero-copy" data-reveal>
          <p className="eyebrow eyebrow-light"><span /> {copy.heroEyebrow}</p>
          <h1>{copy.heroTitle}</h1>
          <p className="hero-lead">{copy.heroLead}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">{copy.heroPrimary} <span>↗</span></a>
            <a className="text-link" href="#tarifs">{copy.heroSecondary} <span>↓</span></a>
          </div>
          <div className="hero-metadata">
            {copy.heroMeta.map(([label, value]) => <div key={label}><small>{label}</small><b>{value}</b></div>)}
          </div>
        </div>
        <MonumentScene english={selectedMarket === "UK"} />
        <a className="hero-scroll" href="#socle"><span>{selectedMarket === "UK" ? "Discover" : "Découvrir"}</span><i>↓</i></a>
      </section>

      <section className="sector-strip" aria-label={selectedMarket === "UK" ? "Included features" : "Fonctionnalités incluses"}>
        <p>{copy.stripTitle}</p>
        <div>{copy.stripItems.map((item, index) => <span className="strip-item" key={item}>{item}{index < copy.stripItems.length - 1 && <i />}</span>)}</div>
      </section>

      <section className="manifesto section-shell" id="socle">
        <div className="section-index" data-reveal><span>01</span><p>{copy.nav[0]} SOCLE</p></div>
        <div className="manifesto-copy" data-reveal>
          <p className="eyebrow"><span /> {copy.modelEyebrow}</p>
          <h2>{copy.modelTitle}</h2>
          <div className="manifesto-grid">
            {copy.modelCopy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section className="services section-shell" id="tarifs">
        <div className="section-heading" data-reveal>
          <div><p className="eyebrow"><span /> {copy.pricingEyebrow}</p><h2>{copy.pricingTitle}</h2></div>
          <p>{copy.pricingIntro}</p>
        </div>
        <article className={`ownership-offer market-${selectedMarket.toLowerCase()}`} data-reveal>
          <div className="ownership-summary">
            <div className="offer-kicker"><span>{selectedMarket === "UK" ? "ONE OFFER" : "OFFRE UNIQUE"}</span><b>SOCLE — {selectedMarket === "UK" ? "Full ownership" : "Pleine propriété"}</b></div>
            <p className="ownership-badge">{copy.offerBadge}</p>
            <h3>{copy.offerTitle}</h3>
            <p className="ownership-copy">{copy.offerCopy}</p>
            <ul>
              {copy.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
            <div className="ownership-total"><span>{copy.referencePrice}</span><b>{market.price}</b></div>
          </div>

          <div className="payment-choices">
            <div className="payment-heading"><span>{copy.paymentHeading}</span><p>{copy.paymentSubheading}</p></div>
            <article className="payment-card payment-card-featured">
              <div className="payment-number">01</div>
              <div className="payment-title"><span>{copy.upfrontLabel}</span><h4>{copy.upfrontTitle}</h4></div>
              <div className="payment-amount"><b>{market.upfront}</b></div>
              <p>{copy.upfrontCopy}</p>
              <a href="#contact" onClick={() => setSelectedPayment(selectedMarket === "UK" ? "Full payment — 5% discount" : "Paiement intégral — remise de 5 %")}>{copy.upfrontCta} <span>↗</span></a>
            </article>
            <article className="payment-card">
              <div className="payment-number">02</div>
              <div className="payment-title"><span>{copy.splitLabel}</span><h4>{copy.splitTitle}</h4></div>
              <div className="split-amounts">
                <div><small>{copy.splitFirst}</small><b>{market.firstPayment}</b></div>
                <i>+</i>
                <div><small>{copy.splitFinal}</small><b>{market.finalPayment}</b></div>
              </div>
              <p>{copy.splitCopy}</p>
              <a href="#contact" onClick={() => setSelectedPayment(selectedMarket === "UK" ? "Split payment — 60% / 40%" : "Paiement échelonné — 60 % / 40 %")}>{copy.splitCta} <span>↗</span></a>
            </article>
          </div>
          <div className="ownership-orbit" aria-hidden="true" />
        </article>

        <div className="same-product" data-reveal>
          <span>{copy.noSubscription}</span>
          <p>{copy.noSubscriptionCopy}</p>
        </div>
      </section>

      <section className="experience section-shell">
        <div className="experience-copy" data-reveal>
          <p className="eyebrow"><span /> {copy.experienceEyebrow}</p>
          <h2>{copy.experienceTitle}</h2>
          <p>{copy.experienceCopy}</p>
          <ul className="check-list">
            {copy.experienceItems.map((item, index) => <li key={item}><span>0{index + 1}</span> {item}</li>)}
          </ul>
          <a className="text-link dark-link" href="#methode">{copy.experienceCta} <span>→</span></a>
        </div>
        <div className="browser-stage" data-reveal aria-label={selectedMarket === "UK" ? "Conceptual STATURE website preview" : "Aperçu conceptuel d’un site STATURE"}>
          <div className="browser-window">
            <div className="browser-bar"><i /><i /><i /><span>{selectedMarket === "SN" ? "presence.stature.sn" : selectedMarket === "FR" ? "votre-entreprise.fr" : "your-business.co.uk"}</span></div>
            <div className="browser-content">
              <div className="mini-nav"><b>STATURE</b><span>{selectedMarket === "UK" ? "Expertise   Process   Contact" : "Expertise   Méthode   Contact"}</span><i>MENU</i></div>
              <div className="mini-hero">
                <div className="mini-grid" aria-hidden="true" />
                <div className="mini-signal" aria-hidden="true"><BrandMark inverse /></div>
                <small>{selectedMarket === "UK" ? "EXPERTISE • CLARITY • TRUST" : "EXPERTISE • CLARTÉ • CONFIANCE"}</small>
                <h3>{selectedMarket === "UK" ? <>Your expertise,<br />made visible.</> : <>Votre expertise,<br />rendue visible.</>}</h3>
                <p>{selectedMarket === "UK" ? "A digital experience that turns real business value into a presence people can trust." : "Une expérience digitale qui transforme la valeur réelle de votre entreprise en présence perçue."}</p>
                <button>{selectedMarket === "UK" ? "Discover" : "Découvrir"} <span>↗</span></button>
                <div className="mini-index"><span>01</span><i /><span>03</span></div>
              </div>
              <div className="mini-cards"><span>{selectedMarket === "UK" ? "Strategy" : "Stratégie"}</span><span>Design</span><span>{selectedMarket === "UK" ? "Technology" : "Technologie"}</span></div>
            </div>
          </div>
          <div className="floating-panel panel-performance"><b>{selectedMarket === "UK" ? "Fast" : "Rapide"}</b><span>{selectedMarket === "UK" ? "Responsive by design" : "Conçu pour le mobile"}</span></div>
          <div className="floating-panel panel-contact"><b>{selectedMarket === "UK" ? "Clear" : "Direct"}</b><span>{selectedMarket === "UK" ? "A path to enquiry" : "Un parcours vers l’action"}</span></div>
        </div>
      </section>

      <section className="portfolio-showcase portfolio-projects section-shell" id="realisations" aria-labelledby="realisations-title">
        <div className="portfolio-projects-heading">
          <div><p className="eyebrow"><span /> {selectedMarket === "UK" ? "Selected work" : "Réalisations"}</p><h2 id="realisations-title">{selectedMarket === "UK" ? <>Websites that give<br /><em>value a clear shape.</em></> : <>Des sites qui donnent<br /><em>forme à la valeur.</em></>}</h2></div>
          <p>{selectedMarket === "UK" ? "Three selected STATURE projects, presented directly inside the main website: different worlds, one shared standard of clarity." : "Trois projets choisis, présentés directement dans le site STATURE : des univers différents, une même exigence de clarté."}</p>
        </div>
        <div className="portfolio-grid">
          {showcaseProjects.map((project) => {
            const projectCopy = selectedMarket === "UK" ? project.en : project.fr;
            return (
            <article className={`portfolio-card portfolio-card-${project.theme}`} key={project.title}>
              <div className="portfolio-card-top"><span>{project.number}</span><small>{projectCopy.kind}</small></div>
              <ShowcaseLivePreview project={project} english={selectedMarket === "UK"} />
              <div className="portfolio-card-copy">
                <div><p>{projectCopy.subtitle}</p><h3>{project.title}</h3></div>
                <p className="portfolio-card-description">{projectCopy.description}</p>
                <div className="portfolio-card-bottom">
                  <div className="portfolio-tags">{projectCopy.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <a className="project-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`${selectedMarket === "UK" ? "Open" : "Ouvrir"} ${project.title}`}>{selectedMarket === "UK" ? "Open website" : "Ouvrir le site"} <span>↗</span></a>
                </div>
                <small className="portfolio-url">{project.urlLabel}</small>
              </div>
            </article>
            );
          })}
        </div>
        <p className="portfolio-disclaimer"><span>Note</span> {selectedMarket === "UK" ? "These selected projects are presented on STATURE’s main website, with a clear distinction between client work and the STATURE brand." : "Les réalisations sont présentées ici sur le site principal de STATURE et distinguent clairement les projets clients et la marque accompagnée."}</p>
      </section>

      <section className="method" id="methode">
        <div className="method-glow" aria-hidden="true" />
        <div className="section-shell method-inner">
          <div className="method-heading" data-reveal>
            <p className="eyebrow eyebrow-light"><span /> {copy.processEyebrow}</p>
            <h2>{copy.processTitle}</h2>
          </div>
          <div className="method-list">
            {copy.process.map(([number, title, description]) => (
              <article key={number} data-reveal>
                <span>{number}</span><h3>{title}</h3><p>{description}</p><i>↗</i>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dakar section-shell">
        <div className="dakar-mark" data-reveal aria-hidden="true"><BrandMark /></div>
        <div className="dakar-copy" data-reveal>
          <p className="eyebrow"><span /> {copy.originEyebrow}</p>
          <h2>{copy.originTitle}</h2>
          <p>{copy.originCopy}</p>
          <div className="brand-values">{copy.values.map((value) => <span key={value}>{value}</span>)}</div>
        </div>
      </section>

      <section className="faq section-shell" id="faq">
        <div className="faq-heading" data-reveal>
          <p className="eyebrow"><span /> {copy.faqEyebrow}</p>
          <h2>{copy.faqTitle}</h2>
          <p>{copy.faqIntro}</p>
        </div>
        <div className="faq-list">
          {copy.faqs.map(([question, answer], index) => (
            <details key={question} data-reveal>
              <summary><span>0{index + 1}</span><b>{question}</b><i>+</i></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-intro" data-reveal>
          <p className="eyebrow eyebrow-light"><span /> {copy.contactEyebrow}</p>
          <h2>{copy.contactTitle}</h2>
          <p>{copy.contactCopy}</p>
          <a href="mailto:staturesn@gmail.com">staturesn@gmail.com <span>↗</span></a>
        </div>
        <form className="contact-form" onSubmit={submitContact} data-reveal>
          <div className="field-row field-row--three">
            <label>{copy.fields.name}<input name="name" type="text" autoComplete="name" placeholder={copy.fields.placeholderName} required /></label>
            <label>{copy.fields.company}<input name="company" type="text" autoComplete="organization" placeholder={copy.fields.placeholderCompany} required /></label>
            <label>{copy.fields.phone}<input name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder={copy.fields.placeholderPhone} required /></label>
          </div>
          <div className="field-row">
            <label>{copy.fields.market}
              <input name="market" type="hidden" value={selectedMarket} />
              <span className="market-static"><i>{market.shortLabel}</i>{copy.marketLabel}</span>
            </label>
            <label>{copy.fields.payment}
              <select name="payment" value={selectedPayment} onChange={(event) => setSelectedPayment(event.target.value)}>
                {selectedMarket === "UK" ? <>
                  <option>Full payment — 5% discount</option><option>Split payment — 60% / 40%</option><option>I would like guidance</option>
                </> : <>
                  <option>Paiement intégral — remise de 5 %</option><option>Paiement échelonné — 60 % / 40 %</option><option>Je souhaite être conseillé</option>
                </>}
              </select>
            </label>
          </div>
          <label>{copy.fields.message}<textarea name="message" placeholder={copy.fields.placeholderMessage} rows={4} required /></label>
          <button className="button button-coral" type="submit">{copy.fields.submit} <span>↗</span></button>
          <p className={`form-note ${submitted ? "is-visible" : ""}`}>{copy.fields.note}</p>
        </form>
      </section>

      <footer>
        <div className="footer-brand"><BrandMark inverse /><Wordmark inverse english={selectedMarket === "UK"} /></div>
        <p>{copy.footerTagline}</p>
        <div className="footer-links"><a href="#socle">{copy.nav[0]}</a><a href="#tarifs">{copy.nav[1]}</a><a href="#methode">{copy.nav[2]}</a><a href="#faq">{copy.nav[3]}</a><a href="#realisations">{selectedMarket === "UK" ? "Selected work" : "Réalisations"}</a><a href="#contact">Contact</a><a href="#accueil">{copy.footerTop} ↑</a></div>
        <div className="footer-bottom"><span>© 2026 STATURE. {copy.footerLocation}.</span><span>{selectedMarket === "UK" ? "Digital consulting & solutions" : "Conseil & solutions digitales"}</span></div>
      </footer>
    </main>
  );
}

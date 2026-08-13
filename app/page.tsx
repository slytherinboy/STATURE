"use client";

import {
  FormEvent,
  PointerEvent as ReactPointerEvent,
  useEffect,
  useRef,
  useState,
} from "react";

const plans = [
  {
    number: "OPTION 01",
    name: "SOCLE — Abonnement",
    title: "Lancez-vous sans immobiliser votre budget.",
    setup: "50 000",
    setupLabel: "FCFA à la conception",
    price: "29 900",
    cadence: "FCFA / mois",
    copy: "STATURE conçoit, héberge et maintient votre site pendant toute la durée de votre abonnement.",
    items: [
      "Engagement initial de 12 mois",
      "Hébergement, domaine, SSL et sécurité",
      "Sauvegardes et surveillance technique",
      "Une modification mineure par mois",
      "Support continu sous 48 à 72 h",
    ],
    cta: "Choisir l’abonnement",
    value: "Recommandé pour préserver votre trésorerie",
    featured: true,
  },
  {
    number: "OPTION 02",
    name: "SOCLE — Propriété",
    title: "Investissez une fois. Le site est à vous.",
    setup: "350 000",
    setupLabel: "FCFA en paiement unique",
    price: "90 000",
    cadence: "FCFA / an après la 1re année",
    copy: "Vous devenez propriétaire du site et bénéficiez de douze mois de maintenance essentielle inclus.",
    items: [
      "Première année de maintenance incluse",
      "Domaine, hébergement, SSL et sécurité",
      "Site livré dans vos propres comptes",
      "Courte session de prise en main",
      "Puis 90 000/an ou 9 900/mois",
    ],
    cta: "Choisir la propriété",
    value: "Recommandé pour un actif digital durable",
  },
];

const method = [
  ["01", "Comprendre", "Votre activité, vos clients et ce qui doit réellement changer."],
  ["02", "Structurer", "L'offre, les messages et le parcours qui rendent votre valeur évidente."],
  ["03", "Concevoir", "Une expérience rapide, distinctive et pensée pour la conversion."],
  ["04", "Maintenir", "Sécuriser, surveiller et garder votre présence fiable dans le temps."],
];

const faqs = [
  {
    question: "Le site est-il différent selon l’option choisie ?",
    answer: "Non. Vous recevez le même niveau de design, de performance mobile et de fonctionnalités. L’abonnement réduit l’investissement initial et inclut un accompagnement continu ; avec la formule Propriété, le site est installé dans des comptes appartenant au client.",
  },
  {
    question: "À qui appartiennent le domaine et les contenus ?",
    answer: "Le nom de domaine est enregistré au nom du client et les textes, photos et éléments qu’il fournit restent sa propriété. Dans l’abonnement, la structure technique STATURE est mise à disposition pendant le contrat. Dans la formule Propriété, le client reçoit également le code source et les fichiers de son site.",
  },
  {
    question: "Pourquoi un engagement de 12 mois pour l’abonnement ?",
    answer: "Les 50 000 FCFA initiaux ne couvrent qu’une partie du travail de conception. Les mensualités financent la création, l’hébergement, la sécurité et l’accompagnement. Les modalités d’une sortie anticipée sont indiquées clairement dans le contrat avant signature.",
  },
  {
    question: "Que couvre la maintenance après la première année ?",
    answer: "Elle couvre l’hébergement, le SSL, la surveillance, les sauvegardes et les corrections techniques. Les nouvelles pages, refontes, fonctionnalités ou modifications de contenu importantes font l’objet d’un devis distinct.",
  },
  {
    question: "Comment se déroule la remise du site au client ?",
    answer: "Pour la formule Propriété, le client crée ses comptes GitHub et Cloudflare avec son adresse professionnelle. STATURE y installe le site, connecte le domaine, remet une archive complète du code et un guide de déploiement, puis effectue une session de prise en main. Aucun mot de passe n’est partagé : STATURE conserve uniquement un accès autorisé si le client choisit la maintenance.",
  },
];

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

function Wordmark({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className={`wordmark ${inverse ? "wordmark-inverse" : ""}`}>
      <strong>STATURE</strong>
      <small>Conseil & solutions digitales</small>
    </span>
  );
}

function MonumentScene() {
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
      <div className="scene-label scene-label-top"><span>Objet digital</span><b>ST / 01</b></div>
      <div className="scene-label scene-label-side"><span>Présence</span><b>Élevée</b></div>
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
      <div className="scene-chip chip-one"><b>Clarté</b><span>Une offre comprise</span></div>
      <div className="scene-chip chip-two"><b>Impact</b><span>Une expertise remarquée</span></div>
      <div className="scene-caption"><span>Conçu à Dakar</span><i /><span>Déployé partout</span></div>
      <div className="scene-floor" />
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("SOCLE — Abonnement");

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
  }, []);

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Projet SOCLE - ${data.get("company") || data.get("name")}`);
    const body = encodeURIComponent(
      `Bonjour STATURE,\n\nJe souhaite recevoir un aperçu pour un site SOCLE.\n\nNom : ${data.get("name")}\nOrganisation : ${data.get("company")}\nOption envisagée : ${data.get("need")}\nMessage : ${data.get("message")}\n`,
    );
    setSubmitted(true);
    window.location.href = `mailto:staturesn@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <main>
      <div className="scroll-progress" aria-hidden="true" />

      <header className="site-header">
        <a className="brand-lockup" href="#accueil" aria-label="STATURE - Accueil">
          <BrandMark inverse />
          <Wordmark inverse />
        </a>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navigation principale">
          <a href="#socle" onClick={() => setMenuOpen(false)}>Le modèle</a>
          <a href="#tarifs" onClick={() => setMenuOpen(false)}>Tarifs</a>
          <a href="#methode" onClick={() => setMenuOpen(false)}>Méthode</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Obtenir mon aperçu <span>↗</span></a>
        </nav>
        <button
          className={`menu-button ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        ><span /><span /></button>
      </header>

      <section className="hero" id="accueil">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-rail" aria-hidden="true"><span>01</span><i /><small>STATURE / DAKAR</small></div>
        <div className="hero-copy" data-reveal>
          <p className="eyebrow eyebrow-light"><span /> SOCLE — Site professionnel par STATURE</p>
          <h1>Un site qui donne du <em>poids</em> à votre expertise.</h1>
          <p className="hero-lead">
            Une offre claire, un site professionnel conçu pour le mobile et deux façons de l&apos;obtenir :
            par abonnement ou en pleine propriété.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Recevoir mon aperçu <span>↗</span></a>
            <a className="text-link" href="#tarifs">Comparer les deux options <span>↓</span></a>
          </div>
          <div className="hero-metadata">
            <div><small>01 / Format</small><b>Jusqu&apos;à 5 pages</b></div>
            <div><small>02 / Aperçu</small><b>Personnalisé sous 72 h</b></div>
            <div><small>03 / Lancement</small><b>En 7 à 10 jours ouvrés</b></div>
          </div>
        </div>
        <MonumentScene />
        <a className="hero-scroll" href="#stature"><span>Découvrir</span><i>↓</i></a>
      </section>

      <section className="sector-strip" aria-label="Fonctionnalités incluses">
        <p>Tout ce qu&apos;il faut pour être crédible en ligne</p>
        <div><span>Mobile</span><i /> <span>WhatsApp</span><i /> <span>Google Maps</span><i /> <span>SEO essentiel</span></div>
      </section>

      <section className="manifesto section-shell" id="socle">
        <div className="section-index" data-reveal><span>01</span><p>Le modèle SOCLE</p></div>
        <div className="manifesto-copy" data-reveal>
          <p className="eyebrow"><span /> Un produit. Deux façons de l&apos;obtenir.</p>
          <h2>La même qualité de site.<br /><em>Le choix du financement vous appartient.</em></h2>
          <div className="manifesto-grid">
            <p>
              SOCLE est un site professionnel, rapide et pensé d&apos;abord pour le mobile. Il présente votre activité,
              clarifie votre offre et facilite le contact par WhatsApp, téléphone, formulaire ou Google Maps.
            </p>
            <p>
              Vous choisissez simplement entre un investissement initial léger avec accompagnement continu,
              ou un paiement unique qui vous donne la pleine propriété du site.
            </p>
          </div>
        </div>
      </section>

      <section className="services section-shell" id="tarifs">
        <div className="section-heading" data-reveal>
          <div><p className="eyebrow"><span /> Tarifs simples et transparents</p><h2>Un seul SOCLE.<br />Deux chemins possibles.</h2></div>
          <p>Le site livré est de même qualité dans les deux cas. Seuls la propriété, le financement et le niveau d&apos;accompagnement diffèrent.</p>
        </div>
        <div className="service-grid">
          {plans.map((plan) => (
            <article className={`service-card ${plan.featured ? "featured" : ""}`} key={plan.name} data-reveal>
              <div className="service-top"><span>{plan.number}</span><b>{plan.name}</b></div>
              <p className="plan-value">{plan.value}</p>
              <h3>{plan.title}</h3>
              <div className="plan-prices">
                <div className="plan-price plan-price-main"><b>{plan.setup}</b><span>{plan.setupLabel}</span></div>
                <i>+</i>
                <div className="plan-price"><b>{plan.price}</b><span>{plan.cadence}</span></div>
              </div>
              <p>{plan.copy}</p>
              <ul>{plan.items.map((item) => <li key={item}>{item}</li>)}</ul>
              <a href="#contact" onClick={() => setSelectedPlan(plan.name)}>{plan.cta} <span>↗</span></a>
              <div className="card-orbit" aria-hidden="true" />
            </article>
          ))}
        </div>
        <div className="same-product" data-reveal>
          <span>Même produit</span>
          <p><b>Dans les deux options :</b> jusqu&apos;à 5 pages, design personnalisé, version mobile, formulaire, WhatsApp, appels, Maps, SEO essentiel, statistiques, domaine et SSL.</p>
        </div>
      </section>

      <section className="experience section-shell">
        <div className="experience-copy" data-reveal>
          <p className="eyebrow"><span /> Une expérience qui travaille</p>
          <h2>Beau, oui.<br /><em>Mais surtout utile.</em></h2>
          <p>
            Un site STATURE guide naturellement le visiteur: il comprend votre valeur, trouve la bonne information
            et sait exactement quelle prochaine étape prendre.
          </p>
          <ul className="check-list">
            <li><span>01</span> Jusqu&apos;à 5 pages structurées autour de votre offre</li>
            <li><span>02</span> Mobile, WhatsApp, appels, Maps et formulaire</li>
            <li><span>03</span> SEO essentiel, statistiques, domaine et SSL</li>
          </ul>
          <a className="text-link dark-link" href="#methode">Voir notre méthode <span>→</span></a>
        </div>
        <div className="browser-stage" data-reveal aria-label="Aperçu conceptuel d'un site STATURE">
          <div className="browser-window">
            <div className="browser-bar"><i /><i /><i /><span>présence.stature.sn</span></div>
            <div className="browser-content">
              <div className="mini-nav"><b>STATURE</b><span>Expertise &nbsp;&nbsp; Méthode &nbsp;&nbsp; Contact</span><i>MENU</i></div>
              <div className="mini-hero">
                <div className="mini-grid" aria-hidden="true" />
                <div className="mini-signal" aria-hidden="true"><BrandMark inverse /></div>
                <small>EXPERTISE • CLARTÉ • CONFIANCE</small>
                <h3>Votre expertise,<br />rendue visible.</h3>
                <p>Une expérience digitale qui transforme la valeur réelle de votre entreprise en présence perçue.</p>
                <button>Découvrir <span>↗</span></button>
                <div className="mini-index"><span>01</span><i /><span>03</span></div>
              </div>
              <div className="mini-cards"><span>Stratégie</span><span>Design</span><span>Technologie</span></div>
            </div>
          </div>
          <div className="floating-panel panel-performance"><b>Rapide</b><span>Conçu pour le mobile</span></div>
          <div className="floating-panel panel-contact"><b>Direct</b><span>Un parcours vers l&apos;action</span></div>
        </div>
      </section>

      <section className="method" id="methode">
        <div className="method-glow" aria-hidden="true" />
        <div className="section-shell method-inner">
          <div className="method-heading" data-reveal>
            <p className="eyebrow eyebrow-light"><span /> La méthode STATURE</p>
            <h2>Une démarche structurée.<br /><em>Un résultat qui vous ressemble.</em></h2>
          </div>
          <div className="method-list">
            {method.map(([number, title, copy]) => (
              <article key={number} data-reveal>
                <span>{number}</span><h3>{title}</h3><p>{copy}</p><i>↗</i>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dakar section-shell">
        <div className="dakar-mark" data-reveal aria-hidden="true"><BrandMark /></div>
        <div className="dakar-copy" data-reveal>
          <p className="eyebrow"><span /> Dakar comme point de départ</p>
          <h2>Une identité locale.<br /><em>Une exigence internationale.</em></h2>
          <p>
            Le monogramme STATURE s&apos;inspire du mouvement ascendant du Monument de la Renaissance:
            une référence discrète à Dakar, tournée vers l&apos;avenir plutôt que vers le cliché.
          </p>
          <div className="brand-values"><span>Autorité</span><span>Clarté</span><span>Utilité</span></div>
        </div>
      </section>

      <section className="faq section-shell" id="faq">
        <div className="faq-heading" data-reveal>
          <p className="eyebrow"><span /> Questions fréquentes</p>
          <h2>Tout comprendre<br /><em>avant de choisir.</em></h2>
          <p>Deux options simples, des responsabilités claires et aucun coût essentiel dissimulé.</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.question} data-reveal>
              <summary><span>0{index + 1}</span><b>{faq.question}</b><i>+</i></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-intro" data-reveal>
          <p className="eyebrow eyebrow-light"><span /> Votre aperçu personnalisé</p>
          <h2>Voyez votre futur site<br /><em>avant de décider.</em></h2>
          <p>Présentez-nous votre activité. Nous préparons une première direction personnalisée sous 72 heures, sans engagement.</p>
          <a href="mailto:staturesn@gmail.com">staturesn@gmail.com <span>↗</span></a>
        </div>
        <form className="contact-form" onSubmit={submitContact} data-reveal>
          <div className="field-row">
            <label>Votre nom<input name="name" type="text" placeholder="Aïssatou Ndiaye" required /></label>
            <label>Organisation<input name="company" type="text" placeholder="Nom de l'entreprise" required /></label>
          </div>
          <label>Option envisagée
            <select name="need" value={selectedPlan} onChange={(event) => setSelectedPlan(event.target.value)}>
              <option>SOCLE — Abonnement</option><option>SOCLE — Propriété</option><option>Je souhaite être conseillé</option>
            </select>
          </label>
          <label>Parlez-nous du projet<textarea name="message" placeholder="Votre contexte, vos objectifs, votre délai..." rows={4} required /></label>
          <button className="button button-coral" type="submit">Préparer ma demande <span>↗</span></button>
          <p className={`form-note ${submitted ? "is-visible" : ""}`}>Votre application e-mail va s&apos;ouvrir avec la demande préremplie.</p>
        </form>
      </section>

      <footer>
        <div className="footer-brand"><BrandMark inverse /><Wordmark inverse /></div>
        <p>Donnez à votre expertise la présence qu&apos;elle mérite.</p>
        <div className="footer-links"><a href="#socle">Le modèle</a><a href="#tarifs">Tarifs</a><a href="#methode">Méthode</a><a href="#faq">FAQ</a><a href="#contact">Contact</a><a href="#accueil">Haut de page ↑</a></div>
        <div className="footer-bottom"><span>© 2026 STATURE. Dakar, Sénégal.</span><span>Conseil & solutions digitales</span></div>
      </footer>
    </main>
  );
}

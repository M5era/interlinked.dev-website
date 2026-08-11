export type Lang = "en" | "de";

const en = {
  meta: {
    title: "Interlinked | Custom AI Automation Studio",
    description:
      "Less AI talk, more shipped: we build the automations that pay for themselves — voice agents, workflow automation and custom AI tools, engineered into how you already work. Hosted in Germany.",
  },
  nav: {
    solutions: "Solutions",
    cases: "Work",
    process: "How we work",
    faq: "FAQ",
    contact: "Submit a project",
  },
  hero: {
    badge: "Consulting & Engineering",
    open: "Open for new projects",
    h1a: "Less AI talk.",
    h1b: "More shipped.",
    sub: "Interlinked is a custom AI automation studio. We find the automations that actually pay for themselves, build them into the way you already work, and hand them over running — voice agents, workflow automation, custom AI tools.",
    ctaPrimary: "Submit a project",
    ctaSecondary: "How we work",
    stats: [
      { value: "30+", label: "Custom systems shipped" },
      { value: "2–6 wks", label: "Idea to production" },
      { value: "8+ yrs", label: "Engineering production software" },
    ],
    canvas: {
      webhook: "Webhook",
      scheduler: "Scheduler",
      workflowTitle: "Workflow",
      workflowSub: "Read invoices, match, post to accounting",
      erp: "ERP & Database",
      slack: "Slack & Teams",
      dashboard: "Your dashboard",
      aiModel: "AI model",
      postgres: "PostgreSQL",
      statusBadge: "Hosted in Germany · predictable costs",
    },
  },
  pain: {
    badge: "Sound familiar?",
    intro: "You've bought AI tools, watched the demos, maybe even run a pilot.",
    after: "Months later they're gathering dust, the pilot stayed a pilot, and no one can say what any of it returned.",
    reassure: "That doesn't mean you're behind. It means you've hit the wall everyone hits.",
    brand: "Interlinked",
    resolution: "is what gets you past it.",
    highlights: [
      {
        title: "AI that pays its way",
        desc: "We figure out what's worth building, build it into the way you work, and make sure it actually gets used. Stop funding experiments. Start buying outcomes.",
      },
    ],
  },
  cases: {
    badge: "Selected work",
    title: "Real systems, running in production.",
    sub: "Not demos. Platforms that businesses depend on every day.",
    items: [
      {
        tag: "Integration platform",
        stat: "100k",
        statLabel: "webhooks processed per month",
        title: "INCONconnect: insurance claims without re-keying",
        desc: "Property managers report claims straight from their CRM — synced in real time, zero re-keying.",
        image: "/case-incon.jpg",
      },
      {
        tag: "Payments platform",
        stat: "30+",
        statLabel: "businesses processing daily transactions",
        title: "Domopay: payments on autopilot",
        desc: "A Stripe-based payments platform for a German proptech company — from feature list to production.",
        image: "/case-domopay.jpg",
      },
    ],
    testimonial: {
      quote:
        "Thanks to the API interface we developed together, our clients now submit claims directly from their CRM into our system — in real time, with no media breaks. It reduces manual entry, minimizes errors and noticeably improves process quality.",
      name: "Ariane Fischer",
      role: "Head of Digital Transformation",
      company: "INCON Versicherungsmakler GmbH",
      logo: "/incon-logo.png",
    },
  },
  solutions: {
    title: "Automation for every team.",
    sub: "Sales, finance, HR or IT — we automate the processes where your time disappears.",
    canWord: "can",
    teams: [
      {
        key: "sales",
        team: "Sales",
        claim: "qualify leads automatically and write them to the CRM",
        nodes: [
          { title: "New lead", sub: "web form or email" },
          { title: "AI agent", sub: "qualifies & enriches" },
          { title: "CRM updated", sub: "incl. follow-up task" },
        ],
        attachmentLabel: "AI model",
      },
      {
        key: "finance",
        team: "Finance",
        claim: "read invoices and post them automatically",
        nodes: [
          { title: "Invoice in inbox", sub: "PDF attachment detected" },
          { title: "AI text extraction", sub: "line items & amounts" },
          { title: "Posted", sub: "in your accounting tool" },
        ],
        attachmentLabel: "AI model",
      },
      {
        key: "hr",
        team: "HR",
        claim: "onboard new employees in minutes",
        nodes: [
          { title: "Contract signed", sub: "e-signature received" },
          { title: "Onboarding workflow", sub: "accounts, hardware, permissions" },
          { title: "Ready on day one", sub: "team notified automatically" },
        ],
        attachmentLabel: "Microsoft 365",
      },
      {
        key: "it",
        team: "IT & Ops",
        claim: "resolve incidents before customers notice",
        nodes: [
          { title: "Monitoring alert", sub: "servers & services" },
          { title: "Triage", sub: "rule-based: categorizes & prioritizes" },
          { title: "Escalated", sub: "ticket + Slack alert" },
        ],
        attachmentLabel: "Rule engine",
      },
      {
        key: "support",
        team: "Support",
        claim: "answer requests around the clock",
        nodes: [
          { title: "Customer request", sub: "email or chat" },
          { title: "AI agent", sub: "drafts the answer" },
          { title: "Ready to send", sub: "reviewed by your team" },
        ],
        attachmentLabel: "Your knowledge base",
      },
    ],
  },
  beyond: {
    badge: "More than automation",
    title: "Everything automation platforms can do.",
    titleAccent: "And everything they can't.",
    sub: "Platforms like n8n or Make are a strong starting point — and we happily use them. But when it matters, we build your automation as real software: robust, extensible and free of platform limits.",
    cards: [
      {
        title: "Our own servers",
        desc: "Your workflows run as real software on our infrastructure in Germany — no vendor lock-in, no execution limits, no platform ceilings.",
      },
      {
        title: "Predictable costs",
        desc: "No billing per workflow run or webhook traffic. Your costs stay controlled and predictable — even as your volume grows.",
      },
      {
        title: "Custom UIs & tools",
        desc: "Where platforms stop, we start: dashboards, internal tools and interfaces that let your team steer the automations themselves.",
      },
    ],
  },
  process: {
    title: "How we work",
    sub: "The same three steps, every project.",
    steps: [
      {
        num: "01",
        title: "Identify",
        desc: "We start by understanding how your team actually operates: where hours disappear, what gets done twice, what everyone quietly works around. From that, a short list of automations that will earn their place.",
      },
      {
        num: "02",
        title: "Build",
        desc: "Then we build. Everything ships into the systems and tools you already use — no rip-and-replace, no parallel universe. Engineered to run properly from day one, not after three rounds of fixes.",
      },
      {
        num: "03",
        title: "Adopt",
        desc: "Then we make it stick. We work alongside your team — training, tuning, adjusting — until the system isn't “the new AI thing” but simply how the work gets done. Only then do we step back.",
      },
    ],
  },
  founder: {
    title: "Senior people,",
    titleAccent: "working systems.",
    p1: "A small, senior team that ships. No juniors learning on your project, no handoff halfway through.",
    p2: "",
    name: "Marc Serafin",
    role: "Founder",
    imageAlt: "Engineers building software together",
    trustedLabel: "Built with and for",
  },
  bento: {
    gdprTitle: "Your data stays in Germany.",
    gdprAccent: "Guaranteed.",
    gdprDesc: "No transfers abroad, no training of models on your information. Full GDPR compliance and absolute transparency.",
    poweredBy: "Powered by",
    systemsTitle1: "Your systems finally",
    systemsTitle2: "talk to each other.",
    systemsDesc: "CRM, ERP, accounting, email, databases — we connect your tools via APIs into end-to-end workflows. Even when there is no off-the-shelf integration.",
    winTitle1: "Be part of the 5%",
    winTitle2: "that win.",
    winDesc: "Most companies fail at the complexity of internal AI infrastructure. Do it better: Interlinked delivers measurable results within weeks.",
    ctaTitle: "Which tasks are slowing your team down?",
    ctaDesc: "Let's find your automation potential together. Tell us what you want to build — we reply within three business days.",
    ctaButton: "Submit a project",
  },
  faq: {
    badge: "FAQ",
    title: "You have questions. Fair enough.",
    items: [
      {
        q: "What does Interlinked build?",
        a: "Custom AI systems: voice agents, workflow automation in n8n and Make, custom AI apps and internal tools — plus the integrations that wire it all into the software you already run on.",
      },
      {
        q: "How do we start working together?",
        a: "Send your project through the form on this page, or just email us. We read every submission and reply by email.",
      },
      {
        q: "Custom or off-the-shelf?",
        a: "Custom, always — engineered around your workflows, your data, your existing stack. We're tool-agnostic and industry-agnostic: we care about what works, not about selling you a platform.",
      },
      {
        q: "How fast do you move?",
        a: "You'll see a working pilot in weeks, not months. We test early, prove it delivers, and only then scale it up.",
      },
      {
        q: "What do you need from my team?",
        a: "Enough time with your people to understand how the work really happens. After that, we carry the technical lift — your team stays on their actual job.",
      },
      {
        q: "What kinds of projects are a fit?",
        a: "Clear pain points: repetitive manual work, processes held together by copy-paste, data nobody's using. Include your budget and timeline in the form and we'll tell you quickly — and honestly — whether it's a fit.",
      },
    ],
    seoItems: [
      {
        q: "What does Interlinked build?",
        a: "Interlinked is a custom automation studio based in Germany. It builds AI voice agents, n8n and Make workflow automation, custom AI apps and internal tools, and the integrations that wire automation into the systems a business already runs on.",
      },
      {
        q: "How do I work with Interlinked?",
        a: "Submit your project through the form on interlinked.dev or email contact@interlinked.dev. Every submission is read and answered by email within three business days.",
      },
      {
        q: "Are Interlinked's builds custom or template-based?",
        a: "Every build is custom, engineered around each client's workflows, data and existing stack. Interlinked is tool-agnostic and industry-agnostic, hosted on its own infrastructure in Germany and fully GDPR-compliant.",
      },
      {
        q: "What kinds of projects does Interlinked take on?",
        a: "Projects with clear pain points: repetitive manual work, processes held together by copy-paste, or unused data. A working pilot typically ships within weeks.",
      },
    ],
  },
  closing: {
    line1: "Manual work doesn't scale.",
    line2: "Engineered automation does.",
    line3: "Let's build yours.",
  },
  contact: {
    title: "Tell us what you want to build.",
    sub: "We review every submission and reply within three business days — usually with a first idea of how we'd approach it.",
    form: {
      name: "Full name",
      namePlaceholder: "Jane Doe",
      email: "Work email",
      emailPlaceholder: "jane@company.com",
      company: "Company",
      companyPlaceholder: "Acme GmbH",
      message: "What do you want to build?",
      messagePlaceholder: "The process, the problem it causes, the tools involved — and any timeline...",
      budget: "Budget (EUR)",
      budgetSelect: "Select a range",
      budgetOptions: ["Under €2,500", "€2,500 – €5,000", "€5,000 – €10,000", "€10,000 – €25,000", "€25,000+", "Not sure yet"],
      submit: "Submit project",
      sending: "Sending...",
      success: "Thanks! Your project landed in our inbox — we'll reply within three business days.",
      error: "Something went wrong. Please try again or email us directly at contact@interlinked.dev.",
      privacyNote: "No spam, no newsletter. Your data stays in Germany.",
    },
    altTitle: "Prefer to talk first?",
    altCalendly: "Book a free 30-minute intro call",
    altOr: "or email",
  },
  footer: {
    tagline: "We build the digital infrastructure for tomorrow's market leaders. Automation that works.",
    exploreHeading: "Explore",
    legalHeading: "Legal",
    imprint: "Imprint",
    privacy: "Privacy",
    contactHeading: "Contact",
    socialHeading: "Social",
  },
};

const de: typeof en = {
  meta: {
    title: "Interlinked | Studio für maßgeschneiderte KI-Automatisierung",
    description:
      "Weniger KI-Gerede, mehr geliefert: Wir bauen Automatisierungen, die sich rechnen – Voice Agents, Workflow-Automatisierung und eigene KI-Tools. Gehostet in Deutschland.",
  },
  nav: {
    solutions: "Lösungen",
    cases: "Projekte",
    process: "Arbeitsweise",
    faq: "FAQ",
    contact: "Projekt einreichen",
  },
  hero: {
    badge: "Beratung & Engineering",
    open: "Offen für neue Projekte",
    h1a: "Weniger KI-Gerede.",
    h1b: "Mehr geliefert.",
    sub: "Interlinked ist ein Studio für maßgeschneiderte KI-Automatisierung. Wir finden heraus, welche Automatisierungen sich wirklich lohnen, bauen sie passgenau in Ihre Abläufe ein – und übergeben erst, wenn alles läuft. Voice Agents, Workflow-Automatisierung, eigene KI-Tools.",
    ctaPrimary: "Projekt einreichen",
    ctaSecondary: "Wie wir arbeiten",
    stats: [
      { value: "30+", label: "Individuelle Systeme geliefert" },
      { value: "2–6 Wo.", label: "Von der Idee in die Produktion" },
      { value: "8+ Jahre", label: "Erfahrung mit Produktivsystemen" },
    ],
    canvas: {
      webhook: "Webhook",
      scheduler: "Scheduler",
      workflowTitle: "Workflow",
      workflowSub: "Rechnungen auslesen, abgleichen, verbuchen",
      erp: "ERP & Datenbank",
      slack: "Slack & Teams",
      dashboard: "Ihr Dashboard",
      aiModel: "KI-Modell",
      postgres: "PostgreSQL",
      statusBadge: "Hosted in Germany · planbare Kosten",
    },
  },
  pain: {
    badge: "Kommt Ihnen das bekannt vor?",
    intro: "Sie haben KI-Tools gekauft, sich die Demos angeschaut, vielleicht sogar einen Piloten gestartet.",
    after: "Monate später verstauben sie, der Pilot blieb ein Pilot, und niemand kann sagen, was das alles gebracht hat.",
    reassure: "Das heißt nicht, dass Sie zu spät dran sind. Sie stecken nur da fest, wo alle irgendwann feststecken.",
    brand: "Interlinked",
    resolution: "bringt Sie weiter.",
    highlights: [
      {
        title: "KI, die sich rechnet",
        desc: "Wir finden heraus, was sich zu bauen lohnt, integrieren es in Ihren Arbeitsalltag und sorgen dafür, dass es auch wirklich genutzt wird. Schluss mit bezahlten Experimenten – zahlen Sie für Ergebnisse.",
      },
    ],
  },
  cases: {
    badge: "Ausgewählte Projekte",
    title: "Echte Systeme, produktiv im Einsatz.",
    sub: "Keine Demos. Plattformen, auf die sich Unternehmen jeden Tag verlassen.",
    items: [
      {
        tag: "Integrationsplattform",
        stat: "100k",
        statLabel: "Webhooks pro Monat verarbeitet",
        title: "INCONconnect: Schadenmeldungen ohne Doppeleingabe",
        desc: "Hausverwaltungen melden Schäden direkt aus ihrem CRM – in Echtzeit synchronisiert, ohne Doppeleingabe.",
        image: "/case-incon.jpg",
      },
      {
        tag: "Payments-Plattform",
        stat: "30+",
        statLabel: "Unternehmen mit täglichen Transaktionen",
        title: "Domopay: Zahlungen auf Autopilot",
        desc: "Payments-Plattform auf Stripe-Basis für einen deutschen Proptech-Anbieter – von der Feature-Liste bis in die Produktion.",
        image: "/case-domopay.jpg",
      },
    ],
    testimonial: {
      quote:
        "Durch die gemeinsam entwickelte API-Schnittstelle können unsere Kunden Schadenmeldungen direkt aus ihrem CRM an unser System übermitteln – medienbruchfrei und in Echtzeit. Das reduziert manuelle Eingaben, minimiert Fehler und verbessert die Prozessqualität spürbar.",
      name: "Ariane Fischer",
      role: "Head of Digital Transformation",
      company: "INCON Versicherungsmakler GmbH",
      logo: "/incon-logo.png",
    },
  },
  solutions: {
    title: "Automatisierung für jedes Team.",
    sub: "Ob Vertrieb, Finance, HR oder IT – wir automatisieren die Prozesse, in denen Ihre Zeit verloren geht.",
    canWord: "kann",
    teams: [
      {
        key: "sales",
        team: "Vertrieb",
        claim: "Leads automatisch qualifizieren und ins CRM schreiben",
        nodes: [
          { title: "Neuer Lead", sub: "Webformular oder E-Mail" },
          { title: "KI-Agent", sub: "qualifiziert & reichert an" },
          { title: "CRM aktualisiert", sub: "inkl. Follow-up-Task" },
        ],
        attachmentLabel: "KI-Modell",
      },
      {
        key: "finance",
        team: "Finance",
        claim: "Rechnungen auslesen und automatisch verbuchen",
        nodes: [
          { title: "Rechnung im Postfach", sub: "PDF-Anhang erkannt" },
          { title: "KI-Texterkennung", sub: "Positionen & Beträge" },
          { title: "Verbucht", sub: "im Buchhaltungstool" },
        ],
        attachmentLabel: "KI-Modell",
      },
      {
        key: "hr",
        team: "HR",
        claim: "neue Mitarbeiter in Minuten onboarden",
        nodes: [
          { title: "Vertrag unterschrieben", sub: "E-Signatur eingegangen" },
          { title: "Onboarding-Workflow", sub: "Accounts, Hardware, Rechte" },
          { title: "Startklar an Tag 1", sub: "Team automatisch informiert" },
        ],
        attachmentLabel: "Microsoft 365",
      },
      {
        key: "it",
        team: "IT & Ops",
        claim: "Störungen lösen, bevor Kunden sie bemerken",
        nodes: [
          { title: "Monitoring-Alert", sub: "Server & Services" },
          { title: "Triage", sub: "regelbasiert: kategorisiert & priorisiert" },
          { title: "Eskaliert", sub: "Ticket + Slack-Alert" },
        ],
        attachmentLabel: "Regelwerk",
      },
      {
        key: "support",
        team: "Support",
        claim: "Anfragen rund um die Uhr beantworten",
        nodes: [
          { title: "Kundenanfrage", sub: "E-Mail oder Chat" },
          { title: "KI-Agent", sub: "entwirft die Antwort" },
          { title: "Versandfertig", sub: "geprüft von Ihrem Team" },
        ],
        attachmentLabel: "Ihre Wissensdatenbank",
      },
    ],
  },
  beyond: {
    badge: "Mehr als Automatisierung",
    title: "Alles, was Automatisierungs-Plattformen können.",
    titleAccent: "Und alles, was sie nicht können.",
    sub: "Plattformen wie n8n oder Make sind ein starker Startpunkt – und wir setzen sie gerne ein. Wenn es darauf ankommt, bauen wir Ihre Automatisierung aber als richtige Software: robust, erweiterbar und ohne Plattform-Grenzen.",
    cards: [
      {
        title: "Unsere eigenen Server",
        desc: "Ihre Workflows laufen als richtige Software auf unserer Infrastruktur in Deutschland – ohne Vendor-Lock-in, Ausführungslimits oder Plattform-Grenzen.",
      },
      {
        title: "Planbare Kosten",
        desc: "Keine Abrechnung pro Workflow-Ausführung oder Webhook-Traffic. Ihre Kosten bleiben kontrollierbar und vorhersehbar – auch wenn Ihr Volumen wächst.",
      },
      {
        title: "Eigene UIs & Tools",
        desc: "Wo Plattformen aufhören, fangen wir an: Dashboards, interne Tools und Oberflächen, mit denen Ihr Team die Automationen selbst steuert.",
      },
    ],
  },
  process: {
    title: "Wie wir arbeiten",
    sub: "Dieselben drei Schritte, in jedem Projekt.",
    steps: [
      {
        num: "01",
        title: "Identify",
        desc: "Zuerst verstehen wir, wie Ihr Team wirklich arbeitet: wo Stunden versickern, was doppelt erledigt wird, wo sich alle längst einen Workaround gebaut haben. Daraus entsteht eine kurze Liste von Automatisierungen, die sich wirklich lohnen.",
      },
      {
        num: "02",
        title: "Build",
        desc: "Dann wird gebaut. Alles fügt sich in die Systeme und Tools ein, die Sie bereits nutzen – kein Rip-and-Replace, kein Paralleluniversum. Und zwar so, dass es ab Tag eins sauber läuft, nicht erst nach drei Korrekturrunden.",
      },
      {
        num: "03",
        title: "Adopt",
        desc: "Zum Schluss sorgen wir dafür, dass es bleibt. Seite an Seite mit Ihrem Team – schulen, justieren, nachschärfen – bis das System nicht mehr „das neue KI-Ding“ ist, sondern einfach die Art, wie gearbeitet wird. Erst dann ziehen wir uns zurück.",
      },
    ],
  },
  founder: {
    title: "Echte Entwickler,",
    titleAccent: "echte Systeme.",
    p1: "Ein kleines, erfahrenes Team, das liefert. Keine Übergaben, keine Juniors, die an Ihrem Projekt lernen.",
    p2: "",
    name: "Marc Serafin",
    role: "Gründer",
    imageAlt: "Engineers bei der gemeinsamen Arbeit",
    trustedLabel: "Gebaut mit und für",
  },
  bento: {
    gdprTitle: "Ihre Daten bleiben in Deutschland.",
    gdprAccent: "Garantiert.",
    gdprDesc: "Keine Übermittlung ins Ausland, kein Training von Modellen mit Ihren Informationen. Volle DSGVO-Konformität und absolute Transparenz.",
    poweredBy: "Powered by",
    systemsTitle1: "Ihre Systeme sprechen",
    systemsTitle2: "endlich miteinander.",
    systemsDesc: "CRM, ERP, Buchhaltung, E-Mail, Datenbanken – wir verbinden Ihre Tools über APIs zu durchgängigen Workflows. Auch dann, wenn es keine fertige Schnittstelle gibt.",
    winTitle1: "Gehören Sie zu den 5 %,",
    winTitle2: "die gewinnen.",
    winDesc: "Die Mehrheit der Unternehmen scheitert an der Komplexität interner KI-Infrastrukturen. Machen Sie es besser: Interlinked liefert messbare Erfolge innerhalb weniger Wochen.",
    ctaTitle: "Welche Aufgaben halten Ihr Team unnötig auf?",
    ctaDesc: "Lassen Sie uns gemeinsam Ihr Automatisierungspotenzial entdecken. Beschreiben Sie Ihr Vorhaben – wir antworten innerhalb von drei Werktagen.",
    ctaButton: "Projekt einreichen",
  },
  faq: {
    badge: "FAQ",
    title: "Sie haben Fragen. Verständlich.",
    items: [
      {
        q: "Was baut Interlinked?",
        a: "Maßgeschneiderte KI-Systeme: Voice Agents, Workflow-Automatisierung in n8n und Make, eigene KI-Apps und interne Tools – plus die Integrationen, die alles mit der Software verbinden, mit der Sie bereits arbeiten.",
      },
      {
        q: "Wie starten wir die Zusammenarbeit?",
        a: "Schicken Sie Ihr Projekt über das Formular auf dieser Seite – oder einfach per E-Mail. Wir lesen jede Anfrage und antworten per E-Mail.",
      },
      {
        q: "Individuell oder von der Stange?",
        a: "Immer individuell – entwickelt um Ihre Workflows, Ihre Daten, Ihren bestehenden Stack. Wir sind tool-agnostisch und branchen-agnostisch: Uns interessiert, was funktioniert – nicht, Ihnen eine Plattform zu verkaufen.",
      },
      {
        q: "Wie schnell geht das?",
        a: "Ein funktionierender Pilot steht in Wochen, nicht Monaten. Wir testen früh, beweisen den Nutzen – und skalieren erst dann.",
      },
      {
        q: "Was brauchen Sie von meinem Team?",
        a: "Genug Zeit mit Ihren Leuten, um zu verstehen, wie die Arbeit wirklich abläuft. Danach übernehmen wir den technischen Teil – Ihr Team bleibt bei seiner eigentlichen Arbeit.",
      },
      {
        q: "Welche Projekte passen?",
        a: "Klare Schmerzpunkte: repetitive Handarbeit, Prozesse, die mit Copy-Paste zusammengehalten werden, Daten, die niemand nutzt. Nennen Sie Budget und Zeitrahmen im Formular – wir sagen Ihnen schnell und ehrlich, ob es passt.",
      },
    ],
    seoItems: [
      {
        q: "Was baut Interlinked?",
        a: "Interlinked ist ein Automatisierungs-Studio aus Deutschland. Es baut KI-Voice-Agents, Workflow-Automatisierung mit n8n und Make, eigene KI-Apps und interne Tools sowie die Integrationen, die Automatisierung mit den bestehenden Systemen eines Unternehmens verbinden.",
      },
      {
        q: "Wie arbeite ich mit Interlinked?",
        a: "Projekt über das Formular auf interlinked.dev einreichen oder eine E-Mail an contact@interlinked.dev senden. Jede Anfrage wird gelesen und innerhalb von drei Werktagen per E-Mail beantwortet.",
      },
      {
        q: "Sind die Lösungen von Interlinked individuell oder vorgefertigt?",
        a: "Jede Lösung ist individuell und um Workflows, Daten und den bestehenden Stack des Kunden herum entwickelt. Interlinked ist tool- und branchenagnostisch, gehostet auf eigener Infrastruktur in Deutschland und DSGVO-konform.",
      },
      {
        q: "Welche Projekte übernimmt Interlinked?",
        a: "Projekte mit klaren Schmerzpunkten: repetitive Handarbeit, Copy-Paste-Prozesse, ungenutzte Daten. Ein funktionierender Pilot steht typischerweise innerhalb weniger Wochen.",
      },
    ],
  },
  closing: {
    line1: "Manuelle Arbeit skaliert nicht.",
    line2: "Gute Automatisierung schon.",
    line3: "Bauen wir Ihre.",
  },
  contact: {
    title: "Erzählen Sie uns, was Sie bauen wollen.",
    sub: "Wir prüfen jede Anfrage und antworten innerhalb von drei Werktagen – meist schon mit einer ersten Idee, wie wir es angehen würden.",
    form: {
      name: "Name",
      namePlaceholder: "Max Mustermann",
      email: "Geschäftliche E-Mail",
      emailPlaceholder: "max@firma.de",
      company: "Unternehmen",
      companyPlaceholder: "Acme GmbH",
      message: "Was wollen Sie bauen?",
      messagePlaceholder: "Der Prozess, das Problem, die beteiligten Tools – und Ihr Zeitrahmen...",
      budget: "Budget (EUR)",
      budgetSelect: "Spanne auswählen",
      budgetOptions: ["Unter 2.500 €", "2.500 – 5.000 €", "5.000 – 10.000 €", "10.000 – 25.000 €", "25.000 €+", "Noch unklar"],
      submit: "Projekt absenden",
      sending: "Wird gesendet...",
      success: "Danke! Ihre Anfrage ist angekommen – wir antworten innerhalb von drei Werktagen.",
      error: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt: contact@interlinked.dev.",
      privacyNote: "Kein Spam, kein Newsletter. Ihre Daten bleiben in Deutschland.",
    },
    altTitle: "Lieber zuerst sprechen?",
    altCalendly: "Kostenloses 30-Minuten-Erstgespräch buchen",
    altOr: "oder E-Mail an",
  },
  footer: {
    tagline: "Wir bauen die digitale Infrastruktur für die Marktführer von morgen. Automatisierung, die funktioniert.",
    exploreHeading: "Entdecken",
    legalHeading: "Rechtliches",
    imprint: "Impressum",
    privacy: "Datenschutz",
    contactHeading: "Kontakt",
    socialHeading: "Social",
  },
};

export const dictionaries = { en, de };
export type Dict = typeof en;

export function getDict(lang: Lang): Dict {
  return dictionaries[lang];
}

export function langHref(lang: Lang): string {
  return lang === "en" ? "/" : "/de";
}

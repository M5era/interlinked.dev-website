import React from 'react';
import { FileText, MessageSquare, UserPlus, ArrowRight, CheckCircle2, ShieldCheck, Cpu, Database, Server } from 'lucide-react';
import type { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Interlinked.dev | Beratung & Engineering für KI-Prozess-Automatisierung',
  description: 'Ihr Experte für KI-Prozess-Automatisierung. Von der ersten Analyse bis zum vollautomatisierten Workflow.',
};

export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* 1. STICKY NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-50/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="text-xl font-monda tracking-tight text-slate-900 group hover:opacity-80 transition-opacity">
            interlinked.dev
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#solutions" className="hover:text-blue-600 transition-colors">Lösungen</a>
            <a href="#work" className="hover:text-blue-600 transition-colors">Arbeitsweise</a>
            <a href="#founder" className="hover:text-blue-600 transition-colors">Über uns</a>
          </div>

          <a
            href="https://calendly.com/marc-interlinked-sxdh/30min"
            target="_blank"
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white transition-all bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 active:scale-95"
          >
            Kostenlose Erstberatung
          </a>
        </div>
      </nav>

      <main className="pt-20">
        {/* 2. HERO SECTION */}
        <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              {/* Left Column: Text */}
              <div className="max-w-2xl">
                <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
                  Beratung & Engineering
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1] break-words">
                  Ihr Experte für <br className="hidden lg:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                    KI-Prozess-Automatisierung.
                  </span>
                </h1>

                <p className="text-xl text-slate-600 leading-relaxed max-w-lg mb-10">
                  Automatisierung nimmt Ihnen Routineaufgaben ab: Studien zeigen, dass Unternehmen bis zu 75 % der Zeit einsparen, die bisher für manuelle Tätigkeiten aufgewendet wurde.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-16">
                  <a href="https://calendly.com/marc-interlinked-sxdh/30min" target="_blank" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20 active:scale-[0.98]">
                    Kostenlose Erstberatung
                  </a>
                  <a href="#solutions" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 transition-all bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 active:scale-[0.98]">
                    So funktioniert's
                  </a>
                </div>

                {/* Trust Stats */}
                <div className="grid grid-cols-3 gap-8 border-t border-slate-200 pt-8">
                  <div>
                    <div className="text-3xl font-bold text-slate-900 mb-1">10+ Jahre</div>
                    <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Engineering</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900 mb-1">50+</div>
                    <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Systeme</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900 mb-1">100%</div>
                    <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">DSGVO</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Abstract Graphic */}
              <div className="relative hidden lg:block ml-auto translate-x-8">
                {/* Abstract Workflow Visualization */}
                <div className="relative z-10 p-8">
                  <div className="relative flex flex-col gap-8 items-center">

                    {/* Connecting Line - Central Axis */}
                    <div className="absolute top-10 bottom-10 left-1/2 w-px border-l-2 border-dashed border-blue-200 -translate-x-1/2 -z-10"></div>

                    {/* Card 1: Input (Left) */}
                    <div className="flex items-center gap-4 p-4 bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-sm w-64 -translate-x-12 hover:scale-105 transition-transform duration-300">
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shadow-sm">
                        <FileText size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 w-16 bg-slate-200 rounded mb-2"></div>
                        <div className="h-2 w-24 bg-slate-100 rounded"></div>
                      </div>
                    </div>

                    {/* Card 2: AI Processing (Right - Active) */}
                    <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-blue-100 shadow-xl shadow-blue-900/5 w-72 translate-x-12 z-20 hover:scale-105 transition-transform duration-300">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                        <Cpu size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-slate-900 mb-1">AI Processing</div>
                        <div className="flex gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse delay-75"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-200 animate-pulse delay-150"></div>
                        </div>
                      </div>
                    </div>

                    {/* Card 3: Output (Left) */}
                    <div className="flex items-center gap-4 p-4 bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-sm w-64 -translate-x-12 hover:scale-105 transition-transform duration-300">
                      <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-green-600 shadow-sm">
                        <Database size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-slate-700">Data Synced</div>
                        <div className="text-[10px] text-slate-400">Just now</div>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle2 size={12} className="text-green-600" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Background Elements behind diagram */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-100/30 to-purple-100/30 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* NEW TESTIMONIAL SECTION */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
                Testimonial
              </div>
              <div className="text-3xl md:text-4xl font-medium text-slate-400 leading-tight mb-8">
                &bdquo;Durch die gemeinsam entwickelte <span className="text-slate-900 font-bold">API-Schnittstelle</span> können unsere Kunden Schadenmeldungen direkt aus ihrem CRM an unser System übermitteln – <span className="text-slate-900 font-bold">medienbruchfrei und in Echtzeit</span>.&ldquo;
              </div>
              <p className="text-lg text-slate-500 mb-12 font-medium">
                Das reduziert manuelle Eingaben, minimiert Fehler und verbessert die Prozessqualität spürbar.
              </p>

              <div className="flex items-center justify-center gap-6 mb-16">
                <div className="w-32 h-32 relative flex items-center justify-center">
                  <img src="/incon-logo.png" alt="INCON Logo" className="object-contain w-full h-full opacity-90" />
                </div>
                <div className="text-left border-l border-slate-200 pl-6">
                  <div className="font-bold text-slate-900 text-lg leading-none mb-1">Ariane Fischer</div>
                  <div className="text-sm font-medium text-slate-500">Head of Digital Transformation</div>
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">INCON Versicherungsmakler GmbH</div>
                </div>
              </div>

              {/* Partner Logos inside Testimonial */}
              <div className="pt-12 border-t border-slate-100">
                <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
                  <img src="/locoia.png" alt="Locoia" className="h-6 md:h-7 object-contain" />
                  <img src="/agentenwerk.png" alt="Agentenwerk" className="h-12 md:h-14 object-contain" />
                  <img src="/voiceline.jpg" alt="VoiceLine" className="h-9 md:h-11 object-contain mix-blend-multiply" />
                  <img src="/adabay.png" alt="Adabay" className="h-8 md:h-9 object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SOLUTIONS GRID (ID: #solutions) */}
        <section id="solutions" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Lösungen für Ihr Wachstum</h2>

            <div className="flex flex-col gap-6">
              {/* Top Row: Finance & HR Combined */}
              <div className="p-8 lg:p-12 rounded-[2.5rem] bg-slate-50 border border-slate-100 group">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                  {/* Finance Section */}
                  <div className="flex flex-col h-full">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <FileText className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">Finance:<br />Cashflow auf Autopilot.</h3>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-lg mt-auto">
                      Schluss mit manueller Rechnungsablage. Wir implementieren KI-gestützte Lösungen, die Dokumente auslesen, mit Bestellungen abgleichen und direkt mit Ihrem Rechnungstool synchronisieren.
                    </p>
                  </div>

                  {/* HR Section */}
                  <div className="flex flex-col h-full md:border-l md:border-slate-200 md:pl-12 lg:pl-16">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300 delay-100">
                      <UserPlus className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">HR:<br />Onboarding in Sekunden.</h3>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-lg mt-auto">
                      Startklar an Tag 1. 1-Click Onboarding. Arbeitsvertrag unterschrieben? Das System erstellt automatisch Microsoft 365-Accounts, bestellt Hardware und vergibt Zugriffsrechte.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Row: Support - Full Width */}
              <div className="p-8 lg:p-12 rounded-[2.5rem] bg-slate-900 text-white hover:shadow-2xl hover:shadow-slate-900/20 transition-all duration-300 group">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-8 border border-slate-700 group-hover:scale-110 transition-transform duration-300">
                      <MessageSquare className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-6">Support & Kundenservice</h3>
                    <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                      Smarte Chatbots für 24/7 Support. KI kategorisiert Tickets, leitet sie an den richtigen Spezialisten weiter oder erstellt sofort versandfertige Antwortentwürfe für Ihr Team.
                    </p>
                  </div>

                  <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 relative overflow-hidden hidden md:block">
                    <div className="absolute top-0 right-0 p-24 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="space-y-4 relative z-10">
                      <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-xl border border-slate-700">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="text-slate-200 font-medium">Ticket #4290 analysiert</span>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-xl border border-slate-700 opacity-60">
                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                        <span className="text-slate-200 font-medium">Antwort erstellt</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-slate-800 flex flex-wrap gap-8">
                  <div className="flex items-center gap-3 text-base font-medium text-blue-400">
                    <CheckCircle2 className="w-6 h-6" />
                    <span>24/7 Verfügbarkeit</span>
                  </div>
                  <div className="flex items-center gap-3 text-base font-medium text-blue-400">
                    <CheckCircle2 className="w-6 h-6" />
                    <span>Multi-Language</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. FOUNDER SECTION (ID: #founder) */}
        <section id="founder" className="py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                Automatisieren Sie die Routine. <br />
                <span className="text-blue-600">Fokussieren Sie sich auf die Vision.</span>
              </h2>

              <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed mx-auto">
                <p className="mb-6">
                  Hi, ich bin Marc Serafin. Ich entwickle seit über einem Jahrzehnt Software für Startups und Agenturen. Während meiner Zeit als Engineer bei Locoia (iPaaS) wurde mir eines klar: Low-Code-Plattformen sind mächtig, stoßen aber irgendwann an ihre Grenzen.
                </p>
                <p>
                  Wachsende Unternehmen erreichen den Punkt, an dem Standard-Tools zur Bremse werden. Genau hier komme ich ins Spiel. Mit Interlinked entwickle ich robuste, maßgeschneiderte Integrationen, dort wo Standard-Plattformen aufhören.
                </p>
              </div>

              <div className="mt-10 flex flex-col items-center">
                <img src="/signature.svg" alt="" className="h-12 opacity-50" />
                {/* Fallback signature representation if image missing */}
                <div className="text-xl font-handwriting text-slate-400 italic">Marc Serafin</div>
              </div>

              <div className="mt-8 flex items-center justify-center gap-10">
                <img src="/tum.png" alt="TUM Logo" className="h-10 object-contain" />
                <img src="/nova.png" alt="Nova SBE Logo" className="h-14 object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* 5. ENGAGEMENT MODELS */}
        <section id="work" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Wie wir arbeiten.</h2>
              <p className="text-lg text-slate-600">Transparente Modelle für jede Phase Ihrer Automatisierung.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Card A: Das Audit */}
              <div className="p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all duration-300">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-slate-900">Das Audit</h3>
                </div>
                <p className="text-lg font-medium text-slate-900 mb-4">Analyse & Roadmap</p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Wir durchleuchten Ihre Datenflüsse, identifizieren Flaschenhälse und erstellen einen technischen Fahrplan. Klar definiert, ohne versteckte Kosten.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Ist-Zustand Analyse</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Potential-Ermittlung</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Konkreter Maßnahmenplan</span>
                  </li>
                </ul>
              </div>

              {/* Card B: Der Build */}
              <div className="p-10 rounded-3xl bg-white border-2 border-slate-900 shadow-xl relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-[radial-gradient(#0F172A_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03] [mask-image:radial-gradient(circle_at_top_right,white,transparent_70%)] pointer-events-none" />
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <h3 className="text-2xl font-bold text-slate-900">Der Build</h3>
                </div>
                <p className="text-lg font-medium text-slate-900 mb-4">Implementierung</p>
                <p className="text-slate-600 leading-relaxed mb-8 relative z-10">
                  Wir entwickeln die Lösung, verbinden die APIs und deployen auf Ihrer Infrastruktur. Inklusive Testing und Error-Handling.
                </p>
                <ul className="space-y-3 relative z-10">
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0" />
                    <span>Custom Development</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0" />
                    <span>End-to-End Testing</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0" />
                    <span>Deployment & Doku</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 6. TECH STACK & SECURITY (Bento Style) */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Box 1: Security & Tech Stack - Dark */}
              <div className="bg-slate-900 rounded-3xl p-10 flex flex-col justify-between text-white shadow-xl overflow-hidden relative group min-h-[400px]">
                <div className="absolute top-0 right-0 p-32 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-600/20 transition-all duration-1000" />

                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 leading-tight">
                    Ihre Daten bleiben in Deutschland. <span className="text-blue-500">Garantiert.</span>
                  </h2>
                  <p className="text-slate-400 text-lg leading-relaxed mb-8">
                    Keine Übermittlung ins Ausland, kein Training unserer Modelle mit Ihren Informationen. Wir setzen auf volle DSGVO-Konformität und absolute Transparenz.
                  </p>
                </div>

                <div className="relative z-10">
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Powered by</p>
                  <div className="flex flex-wrap gap-2">
                    {['n8n', 'Azure', 'Hetzner', 'Google Gemini', 'PostgreSQL'].map((tech) => (
                      <span key={tech} className="px-3 py-1.5 bg-slate-800 rounded-lg text-sm font-mono text-slate-300 border border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-indigo-50 rounded-3xl p-10 flex flex-col justify-center text-slate-900 shadow-sm border border-indigo-100 min-h-[400px]">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm text-indigo-600">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" /></svg>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 leading-tight">
                  Unendliche Kapazität für <br />Ihren Kundendialog.
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Keine Warteschleifen mehr, 24/7-Verfügbarkeit ohne Personalaufwand. Die KI als "elastischer" Mitarbeiter, der bei 100 gleichzeitigen Nachrichten nicht nervös wird.
                </p>
              </div>

              {/* Box 3: Failure Rate - White */}
              <div className="bg-white rounded-3xl p-10 flex flex-col justify-center text-slate-900 shadow-sm border border-slate-200 min-h-[360px]">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 leading-tight">
                  Gehören Sie zu den 5 %<br /> die gewinnen.
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  Die Mehrheit der Unternehmen scheitert an der Komplexität interner KI-Infrastrukturen. Machen Sie es besser! Interlinked bietet Ihnen messbare Erfolge innerhalb weniger Wochen.
                </p>
                <div>
                  <a href="#" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors">
                    Report ansehen <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>

              {/* Box 4: Meeting CTA - Dark Blue/Slate */}
              <div className="bg-slate-800 rounded-3xl p-10 flex flex-col justify-center text-white shadow-xl overflow-hidden relative group min-h-[360px]">
                <div className="absolute bottom-0 left-0 p-24 bg-blue-500/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 group-hover:bg-blue-500/20 transition-all duration-1000" />

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 leading-tight">
                      Welche Aufgaben halten Sie unnötig auf?
                    </h2>
                    <p className="text-slate-300 text-lg leading-relaxed mb-8">
                      Lassen Sie uns gemeinsam Ihr KI- und Automationspotenzial entdecken. Buchen Sie jetzt Ihr kostenloses, unverbindliches 30-Minuten-Erstgespräch und finden Sie heraus, wie Sie wertvolle Zeit zurückgewinnen.
                    </p>
                  </div>
                  <div>
                    <a href="https://calendly.com/marc-interlinked-sxdh/30min" target="_blank" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-900/20">
                      Kostenlose Erstberatung
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. PROCESS TIMELINE (ID: #process) */}
        <section id="process" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Von Chaos zu Autopilot.</h2>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10 -translate-y-1/2" />

                <div className="grid md:grid-cols-3 gap-12">
                  {/* Step 1 */}
                  <div className="relative bg-white p-8 rounded-2xl border border-slate-100 shadow-lg text-center group hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-12 h-12 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl mb-4 border-4 border-white shadow-sm relative z-10 group-hover:scale-110 transition-transform">
                      1
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Analyse</h3>
                    <p className="text-slate-600">Wir prüfen Ihre manuellen Prozesse und definieren Anforderungen.</p>
                  </div>

                  {/* Step 2 */}
                  <div className="relative bg-white p-8 rounded-2xl border border-slate-100 shadow-lg text-center group hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-12 h-12 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 border-4 border-white shadow-sm relative z-10 group-hover:scale-110 transition-transform">
                      2
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Connect</h3>
                    <p className="text-slate-600">Wir bauen die Daten-Pipelines und automatisieren die Workflows.</p>
                  </div>

                  {/* Step 3 */}
                  <div className="relative bg-white p-8 rounded-2xl border border-slate-100 shadow-lg text-center group hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-12 h-12 mx-auto bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 border-4 border-white shadow-sm relative z-10 group-hover:scale-110 transition-transform">
                      3
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Handover</h3>
                    <p className="text-slate-600">Übergabe des laufenden Systems inklusive Schulung und Doku.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 8. FOOTER */}
      <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="text-xl font-bold font-monda tracking-tight text-slate-900 mb-6">
                interlinked.dev
              </div>
              <p className="text-slate-500 max-w-sm">
                Wir bauen die digitale Infrastruktur für die Marktführer von morgen. Automatisierung, die funktioniert.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4">Rechtliches</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li><a href="/legal" className="hover:text-blue-600 transition-colors">Impressum</a></li>
                <li><a href="/legal" className="hover:text-blue-600 transition-colors">Datenschutz</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4">Kontakt</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li><a href="mailto:contact@interlinked.dev" className="hover:text-blue-600 transition-colors">contact@interlinked.dev</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-slate-400">
              © 2026 Interlinked.dev.
            </div>
            <div className="text-sm text-slate-400 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              Systems Operational
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

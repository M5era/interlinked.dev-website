import React from 'react';
import { MessageSquare, ArrowRight, CheckCircle2, Database, Server, Webhook, Clock, LayoutDashboard, Wallet, Workflow, Sparkles, Bot } from 'lucide-react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import SolutionsShowcase from '@/components/SolutionsShowcase';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Interlinked.dev | Automatisierung & Custom Software',
  description: 'Prozess-Automatisierung ist erst der Anfang: robuste Backends, eigene UIs und maßgeschneiderte Software – mit planbaren Kosten.',
};

export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* 1. STICKY NAVBAR */}
      <Navbar />

      <main className="pt-20">
        {/* 2. HERO SECTION */}
        <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              {/* Left Column: Text */}
              <div className="max-w-2xl">
                <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100 animate-fade-in-up">
                  Beratung & Engineering
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1] break-words animate-fade-in-up delay-100">
                  Ihr Experte für <br className="hidden lg:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                    Automatisierung & Custom Software.
                  </span>
                </h1>

                <p className="text-xl text-slate-600 leading-relaxed max-w-lg mb-10 animate-fade-in-up delay-200">
                  Automatisierung nimmt Ihnen Routineaufgaben ab – Studien zeigen bis zu 75 % Zeitersparnis. Und wir gehen weiter: mit robusten Backends, eigenen Tools und Oberflächen, die exakt zu Ihrem Team passen.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up delay-300">
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
                    <div className="text-3xl font-bold text-slate-900 mb-1">8+</div>
                    <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Jahre Engineering</div>
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

              {/* Right Column: Workflow Canvas (n8n style) */}
              <div className="relative hidden lg:block ml-auto">
                <div className="relative z-10 w-[520px] h-[420px] bg-white rounded-3xl border border-slate-200 shadow-2xl shadow-slate-200/60 overflow-hidden">
                  {/* Dotted canvas grid */}
                  <div className="absolute inset-0 bg-[radial-gradient(rgba(100,116,139,0.18)_1px,transparent_1px)] [background-size:18px_18px]"></div>
                  {/* Soft glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-100/60 rounded-full blur-3xl"></div>

                  {/* Edges */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 520 420" fill="none">
                    {/* Triggers -> Backend */}
                    <path d="M174 107 C 192 107 188 168 205 168" stroke="#cbd5e1" strokeWidth="1.5" />
                    <path d="M174 227 C 192 227 188 196 205 196" stroke="#cbd5e1" strokeWidth="1.5" />
                    {/* Backend -> Systems */}
                    <path d="M375 160 C 392 160 386 76 400 76" stroke="#cbd5e1" strokeWidth="1.5" />
                    <path d="M375 182 C 392 182 388 211 400 211" stroke="#cbd5e1" strokeWidth="1.5" />
                    <path d="M375 204 C 392 204 386 346 400 346" stroke="#cbd5e1" strokeWidth="1.5" />
                    {/* Dashed attachments below backend */}
                    <path d="M255 224 C 255 265 195 280 195 315" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
                    <path d="M325 224 C 325 265 320 280 320 315" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
                    {/* Connection dots */}
                    {[[174, 107], [205, 168], [174, 227], [205, 196], [375, 160], [400, 76], [375, 182], [400, 211], [375, 204], [400, 346]].map(([cx, cy]) => (
                      <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.5" fill="#94a3b8" />
                    ))}
                  </svg>

                  {/* Trigger: Webhook */}
                  <div className="absolute left-6 top-[80px] w-[150px] flex items-center gap-2.5 px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 shadow-sm">
                    <Webhook size={16} className="text-blue-600 flex-shrink-0" /> Webhook
                  </div>

                  {/* Trigger: Scheduler */}
                  <div className="absolute left-6 top-[200px] w-[150px] flex items-center gap-2.5 px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 shadow-sm">
                    <Clock size={16} className="text-amber-500 flex-shrink-0" /> Scheduler
                  </div>

                  {/* Central Node: KI-Agent */}
                  <div className="absolute left-[205px] top-[140px] w-[170px] h-[84px] flex items-center gap-3 p-3 bg-white border border-blue-200 rounded-2xl shadow-lg shadow-blue-600/10">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0 shadow-md shadow-blue-600/30">
                      <Bot size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold text-slate-900 leading-tight mb-0.5">KI-Agent</div>
                      <div className="text-[10px] text-slate-500 leading-tight">entscheidet & führt aus</div>
                    </div>
                  </div>

                  {/* System: ERP & Datenbank */}
                  <div className="absolute left-[400px] top-[40px] w-[96px] h-[72px] flex flex-col items-center justify-center gap-1.5 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <Database size={18} className="text-emerald-500" />
                    <div className="text-[10px] font-semibold text-slate-700 text-center leading-tight px-1">ERP & Datenbank</div>
                  </div>

                  {/* System: Slack & Teams */}
                  <div className="absolute left-[400px] top-[175px] w-[96px] h-[72px] flex flex-col items-center justify-center gap-1.5 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <MessageSquare size={18} className="text-violet-500" />
                    <div className="text-[10px] font-semibold text-slate-700 text-center leading-tight px-1">Slack & Teams</div>
                  </div>

                  {/* System: Dashboard */}
                  <div className="absolute left-[400px] top-[310px] w-[96px] h-[72px] flex flex-col items-center justify-center gap-1.5 bg-white border border-blue-200 rounded-xl shadow-sm shadow-blue-600/10">
                    <LayoutDashboard size={18} className="text-blue-600" />
                    <div className="text-[10px] font-semibold text-slate-700 text-center leading-tight px-1">Ihr Dashboard</div>
                  </div>

                  {/* Attachment: KI-Modell */}
                  <div className="absolute left-[140px] top-[315px] flex items-center gap-1.5 px-3 py-2 bg-white/90 border border-dashed border-slate-300 rounded-full text-[11px] font-medium text-slate-600">
                    <Sparkles size={12} className="text-blue-600" /> KI-Modell
                  </div>

                  {/* Attachment: PostgreSQL */}
                  <div className="absolute left-[268px] top-[315px] flex items-center gap-1.5 px-3 py-2 bg-white/90 border border-dashed border-slate-300 rounded-full text-[11px] font-medium text-slate-600">
                    <Database size={12} className="text-emerald-500" /> PostgreSQL
                  </div>

                </div>

                {/* Status Badge below the canvas */}
                <div className="relative z-10 mt-5 flex justify-center">
                  <div className="flex items-center gap-2.5 px-4 py-2 bg-slate-900 rounded-full text-xs font-medium text-slate-200 shadow-lg whitespace-nowrap">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    Hosted in Germany · planbare Kosten
                  </div>
                </div>

                {/* Decorative Background Elements behind diagram */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-100/40 to-purple-100/40 rounded-full blur-3xl -z-10"></div>
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
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Automatisierung für jedes Team.</h2>
              <p className="text-lg text-slate-600">Ob Vertrieb, Finance, HR oder IT – wir automatisieren die Prozesse, in denen Ihre Zeit verloren geht.</p>
            </div>

            <SolutionsShowcase />
          </div>
        </section>

        {/* 3b. BEYOND PLATFORMS SECTION */}
        <section className="py-24 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
                Mehr als Automatisierung
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Alles, was Automatisierungs-Plattformen können. <span className="text-blue-600">Und mehr.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Plattformen wie n8n oder Zapier sind ein starker Startpunkt – und wir setzen sie gerne ein. Wenn es darauf ankommt, bauen wir Ihre Automatisierung aber als richtige Software: robust, erweiterbar und ohne Plattform-Grenzen.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                  <Server className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Eigenes Backend</h3>
                <p className="text-slate-600 leading-relaxed">
                  Ihre Workflows laufen als richtige Software auf unserer Infrastruktur in Deutschland – ohne Vendor-Lock-in, Ausführungslimits oder Plattform-Grenzen.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                  <Wallet className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Planbare Kosten</h3>
                <p className="text-slate-600 leading-relaxed">
                  Keine Abrechnung pro Workflow-Ausführung oder Webhook-Traffic. Ihre Kosten bleiben kontrollierbar und vorhersehbar – auch wenn Ihr Volumen wächst.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                  <LayoutDashboard className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Eigene UIs & Tools</h3>
                <p className="text-slate-600 leading-relaxed">
                  Wo Plattformen aufhören, fangen wir an: Dashboards, interne Tools und Oberflächen, mit denen Ihr Team die Automationen selbst steuert.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. FOUNDER SECTION (ID: #founder) */}
        <section id="founder" className="py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                Wir kennen die Grenzen der Plattformen. <br />
                <span className="text-blue-600">Weil wir sie selbst gebaut haben.</span>
              </h2>

              <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed mx-auto">
                <p className="mb-6">
                  Interlinked wurde von Marc Serafin gegründet – Softwareentwickler mit über acht Jahren Erfahrung bei Startups und Agenturen, unter anderem als Engineer bei Locoia, einer deutschen iPaaS-Plattform. Wer Automatisierungs-Plattformen von innen gebaut hat, weiß: Plattformen sind mächtig, stoßen aber irgendwann an Grenzen.
                </p>
                <p>
                  Genau an diesem Punkt setzen wir an: robuste, maßgeschneiderte Automatisierungen und die Software drumherum – Backends, Schnittstellen und Oberflächen, die mit Ihrem Unternehmen wachsen, statt es auszubremsen.
                </p>
              </div>

              <div className="mt-10 flex flex-col items-center">
                <div className="text-xl font-handwriting text-slate-400 italic">Marc Serafin</div>
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Gründer</div>
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
                  Wir entwickeln die Lösung, verbinden die APIs und betreiben sie zuverlässig auf unserer Infrastruktur in Deutschland. Inklusive Testing und Error-Handling.
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
                    <Workflow className="w-6 h-6" />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 leading-tight">
                  Ihre Systeme sprechen <br />endlich miteinander.
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  CRM, ERP, Buchhaltung, E-Mail, Datenbanken – wir verbinden Ihre Tools über APIs zu durchgängigen Workflows. Auch dann, wenn es keine fertige Schnittstelle gibt.
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

        {/* 8. CONTACT SECTION */}
        <ContactSection />

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
          </div>
        </div>
      </footer>
    </div>
  );
}

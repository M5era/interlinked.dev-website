import React from "react";
import {
    ArrowRight,
    MessageSquare,
    Database,
    Server,
    Webhook,
    Clock,
    LayoutDashboard,
    Wallet,
    Workflow,
    Sparkles,
    XCircle,
    Hammer,
    Users,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import SolutionsShowcase from "@/components/SolutionsShowcase";
import Faq from "@/components/Faq";
import Reveal from "@/components/Reveal";
import { getDict, type Lang } from "@/i18n/dictionaries";

const SITE_URL = "https://interlinked.dev";

function JsonLd({ lang }: { lang: Lang }) {
    const t = getDict(lang);
    const organization = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Interlinked",
        url: SITE_URL,
        email: "contact@interlinked.dev",
        description: t.meta.description,
        founder: { "@type": "Person", name: "Marc Serafin" },
        areaServed: ["DE", "AT", "CH", "EU"],
    };
    const faq = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: t.faq.items.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
    };
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
        </>
    );
}

export default function Landing({ lang }: { lang: Lang }) {
    const t = getDict(lang);
    const isStaging = process.env.SITE_ENV === "staging";

    return (
        <div lang={lang} className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
            <JsonLd lang={lang} />

            {/* 1. STICKY NAVBAR */}
            <Navbar lang={lang} />

            <main className="pt-20">
                {/* 2. HERO SECTION */}
                <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                            {/* Left Column: Text */}
                            <div className="max-w-2xl">
                                <div className="flex flex-wrap items-center gap-3 mb-6 animate-fade-in-up">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-slate-600 bg-white rounded-full border border-slate-200">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                        {t.hero.open}
                                    </div>
                                </div>

                                {/* Capped at text-6xl: the column is ~616px wide and longer
                                    headline words (EN "no-code.", DE "Automatisierung") clip
                                    under the canvas at text-7xl. */}
                                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1] break-words hyphens-auto lg:pr-10 animate-fade-in-up delay-100">
                                    {t.hero.h1a} <br className="hidden lg:block" />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                                        {t.hero.h1b}
                                    </span>
                                </h1>

                                <p className="text-xl text-slate-600 leading-relaxed max-w-lg mb-10 animate-fade-in-up delay-200">
                                    {t.hero.sub}
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up delay-300">
                                    <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20 active:scale-[0.98]">
                                        {t.hero.ctaPrimary} <ArrowRight className="ml-2 w-5 h-5" />
                                    </a>
                                    <a href="#process" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 transition-all bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 active:scale-[0.98]">
                                        {t.hero.ctaSecondary}
                                    </a>
                                </div>
                            </div>

                            {/* Right Column: Workflow Canvas (n8n style) */}
                            <div className="relative mt-4 lg:mt-0 lg:ml-auto h-[300px] sm:h-[400px] md:h-[480px] lg:h-[450px] xl:h-[590px]">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0 origin-top lg:origin-top-right scale-[0.48] sm:scale-[0.65] md:scale-[0.8] lg:scale-[0.75] xl:scale-100 w-[680px]">
                                <div className="relative z-10 w-[680px] h-[520px] bg-white rounded-3xl border border-slate-200 shadow-2xl shadow-slate-200/60 overflow-hidden">
                                    {/* Dotted canvas grid */}
                                    <div className="absolute inset-0 bg-[radial-gradient(rgba(100,116,139,0.18)_1px,transparent_1px)] [background-size:20px_20px]"></div>
                                    {/* Soft glow */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl"></div>

                                    {/* Edges */}
                                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 680 520" fill="none">
                                        {/* Triggers -> Workflow */}
                                        <path d="M192 160 C 216 160 214 215 235 215" stroke="#cbd5e1" strokeWidth="1.5" />
                                        <path d="M192 310 C 216 310 214 255 235 255" stroke="#cbd5e1" strokeWidth="1.5" />
                                        {/* Workflow -> Systems */}
                                        <path d="M445 215 C 462 215 460 100 478 100" stroke="#cbd5e1" strokeWidth="1.5" />
                                        <path d="M445 235 L 478 235" stroke="#cbd5e1" strokeWidth="1.5" />
                                        <path d="M445 255 C 462 255 460 370 478 370" stroke="#cbd5e1" strokeWidth="1.5" />
                                        {/* Dashed attachments below the workflow */}
                                        <path d="M305 283 C 305 350 245 370 245 430" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
                                        <path d="M375 283 C 375 350 435 370 435 430" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
                                        {/* Connection dots */}
                                        {[[192, 160], [235, 215], [192, 310], [235, 255], [445, 215], [478, 100], [445, 235], [478, 235], [445, 255], [478, 370]].map(([cx, cy]) => (
                                            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.5" fill="#94a3b8" />
                                        ))}
                                    </svg>

                                    {/* Trigger: Webhook */}
                                    <div className="absolute left-8 top-[133px] w-[160px] flex items-center gap-3 px-4 py-4 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 shadow-sm">
                                        <Webhook size={18} className="text-blue-600 flex-shrink-0" /> {t.hero.canvas.webhook}
                                    </div>

                                    {/* Trigger: Scheduler */}
                                    <div className="absolute left-8 top-[283px] w-[160px] flex items-center gap-3 px-4 py-4 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 shadow-sm">
                                        <Clock size={18} className="text-amber-500 flex-shrink-0" /> {t.hero.canvas.scheduler}
                                    </div>

                                    {/* Central Node: Workflow */}
                                    <div className="absolute left-[235px] top-[187px] w-[210px] h-[96px] flex items-center gap-4 p-4 bg-white border border-blue-200 rounded-2xl shadow-lg shadow-blue-600/10">
                                        <div className="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-md shadow-blue-600/30">
                                            <Workflow size={22} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-base font-bold text-slate-900 leading-tight mb-1">{t.hero.canvas.workflowTitle}</div>
                                            <div className="text-[11px] text-slate-500 leading-snug">{t.hero.canvas.workflowSub}</div>
                                        </div>
                                    </div>

                                    {/* System: ERP & Database */}
                                    <div className="absolute left-[478px] top-[73px] w-[170px] flex items-center gap-2.5 px-4 py-4 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 shadow-sm whitespace-nowrap">
                                        <Database size={18} className="text-emerald-500 flex-shrink-0" /> {t.hero.canvas.erp}
                                    </div>

                                    {/* System: Slack & Teams */}
                                    <div className="absolute left-[478px] top-[208px] w-[170px] flex items-center gap-2.5 px-4 py-4 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 shadow-sm whitespace-nowrap">
                                        <MessageSquare size={18} className="text-violet-500 flex-shrink-0" /> {t.hero.canvas.slack}
                                    </div>

                                    {/* System: Dashboard */}
                                    <div className="absolute left-[478px] top-[343px] w-[170px] flex items-center gap-2.5 px-4 py-4 bg-white border border-blue-200 rounded-xl text-xs font-semibold text-slate-700 shadow-sm shadow-blue-600/10 whitespace-nowrap">
                                        <LayoutDashboard size={18} className="text-blue-600 flex-shrink-0" /> {t.hero.canvas.dashboard}
                                    </div>

                                    {/* Attachment: AI model */}
                                    <div className="absolute left-[189px] top-[430px] flex items-center gap-2 px-3.5 py-2 bg-white/90 border border-dashed border-slate-300 rounded-full text-xs font-medium text-slate-600">
                                        <Sparkles size={14} className="text-blue-600" /> {t.hero.canvas.aiModel}
                                    </div>

                                    {/* Attachment: PostgreSQL */}
                                    <div className="absolute left-[374px] top-[430px] flex items-center gap-2 px-3.5 py-2 bg-white/90 border border-dashed border-slate-300 rounded-full text-xs font-medium text-slate-600">
                                        <Database size={14} className="text-emerald-500" /> {t.hero.canvas.postgres}
                                    </div>

                                </div>

                                </div>

                                {/* Decorative Background Elements behind diagram */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-100/40 to-purple-100/40 rounded-full blur-3xl -z-10"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. PAIN NARRATIVE */}
                <section className="py-24 bg-white border-y border-slate-100">
                    <div className="max-w-7xl mx-auto px-6">
                        <Reveal>
                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                                <div>
                                    <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
                                        {t.pain.badge}
                                    </div>
                                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">{t.pain.title}</h2>
                                    <p className="text-lg text-slate-600 leading-relaxed mb-8">{t.pain.p1}</p>
                                    <ul className="space-y-4 mb-8">
                                        {t.pain.symptoms.map((symptom) => (
                                            <li key={symptom} className="flex items-start gap-3 text-slate-600">
                                                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                                <span>{symptom}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-lg text-slate-600 leading-relaxed">
                                        {t.pain.p2} <span className="font-bold text-slate-900">{t.pain.p3}</span>
                                    </p>
                                </div>

                                <div className="grid gap-6 lg:pt-16">
                                    {t.pain.highlights.map((h, i) => (
                                        <div key={h.title} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-5 shadow-sm text-blue-600">
                                                {i === 0 ? <Hammer className="w-6 h-6" /> : <Users className="w-6 h-6" />}
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-3">{h.title}</h3>
                                            <p className="text-slate-600 leading-relaxed">{h.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* 4. CASE STUDIES (ID: #cases) */}
                <section id="cases" className="py-24 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <Reveal>
                            <div className="max-w-3xl mb-12">
                                <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
                                    {t.cases.badge}
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{t.cases.title}</h2>
                                <p className="text-lg text-slate-600">{t.cases.sub}</p>
                            </div>
                        </Reveal>

                        <div className="grid md:grid-cols-3 gap-6">
                            {t.cases.items.map((item, i) => (
                                <Reveal key={item.title} delay={i * 120} className="h-full">
                                    <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                                        <div className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-6">{item.tag}</div>
                                        <div className="mb-6">
                                            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mb-2">{item.stat}</div>
                                            <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">{item.statLabel}</div>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>

                        {/* Client testimonial band */}
                        <Reveal delay={240}>
                            <div className="mt-10 p-8 md:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm md:flex items-center gap-10">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={t.cases.testimonial.logo}
                                    alt={t.cases.testimonial.company}
                                    className="w-24 h-24 object-contain opacity-90 flex-shrink-0 mb-6 md:mb-0"
                                />
                                <div>
                                    <p className="text-lg text-slate-600 italic leading-relaxed mb-5">
                                        &bdquo;{t.cases.testimonial.quote}&ldquo;
                                    </p>
                                    <div className="font-bold text-slate-900 text-sm leading-none mb-1">{t.cases.testimonial.name}</div>
                                    <div className="text-xs font-medium text-slate-500">
                                        {t.cases.testimonial.role} · {t.cases.testimonial.company}
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* 5. SOLUTIONS GRID (ID: #solutions) */}
                <section id="solutions" className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <Reveal>
                            <div className="max-w-3xl mb-12">
                                <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.solutions.title}</h2>
                                <p className="text-lg text-slate-600">{t.solutions.sub}</p>
                            </div>
                        </Reveal>

                        <Reveal delay={120}>
                            <SolutionsShowcase lang={lang} />
                        </Reveal>
                    </div>
                </section>

                {/* 6. BEYOND PLATFORMS SECTION */}
                <section className="py-24 bg-slate-50 border-y border-slate-100">
                    <div className="max-w-7xl mx-auto px-6">
                        <Reveal>
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
                                {t.beyond.badge}
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                {t.beyond.title} <span className="text-blue-600">{t.beyond.titleAccent}</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">{t.beyond.sub}</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {t.beyond.cards.map((card, i) => (
                                <div key={card.title} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                                        {i === 0 ? <Server className="w-7 h-7" /> : i === 1 ? <Wallet className="w-7 h-7" /> : <LayoutDashboard className="w-7 h-7" />}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{card.desc}</p>
                                </div>
                            ))}
                        </div>
                        </Reveal>
                    </div>
                </section>

                {/* 7. PROCESS (ID: #process) */}
                <section id="process" className="py-28 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <Reveal>
                            <div className="text-center max-w-3xl mx-auto mb-16">
                                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-5 tracking-tight">{t.process.title}</h2>
                                <p className="text-xl text-slate-600">{t.process.sub}</p>
                            </div>
                        </Reveal>

                        <div className="grid md:grid-cols-3 gap-6">
                            {t.process.steps.map((step, i) => (
                                <Reveal key={step.num} delay={i * 140} className="h-full">
                                    <div className="relative h-full p-10 pt-14 rounded-3xl bg-slate-50 border border-slate-100 overflow-hidden hover:border-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                        <div className="absolute -top-10 -right-2 text-[160px] leading-none font-bold text-slate-200/70 select-none pointer-events-none group-hover:text-blue-100 transition-colors duration-500">
                                            {step.num}
                                        </div>
                                        <div className="relative z-10">
                                            <span className="font-mono text-sm font-bold text-blue-600 tracking-widest">{step.num}</span>
                                            <h3 className="text-2xl font-bold text-slate-900 mt-4 mb-4 group-hover:text-blue-600 transition-colors duration-300">{step.title}</h3>
                                            <p className="text-lg text-slate-600 leading-relaxed">{step.desc}</p>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 7b. STATS BAND */}
                <section className="py-16 bg-slate-50 border-t border-slate-100">
                    <div className="max-w-7xl mx-auto px-6">
                        <Reveal>
                            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
                                {t.hero.stats.map((stat) => (
                                    <div key={stat.label} className="py-6 sm:py-2 sm:px-12 sm:first:pl-0">
                                        <div className="text-5xl md:text-6xl font-bold text-slate-900 mb-3">{stat.value}</div>
                                        <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* 8. FOUNDER / TEAM SECTION (ID: #founder) */}
                <section id="founder" className="py-24 bg-slate-50 border-y border-slate-100">
                    <div className="max-w-7xl mx-auto px-6">
                        <Reveal>
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <div className="relative">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/team.jpg"
                                    alt={t.founder.imageAlt}
                                    className="rounded-3xl shadow-2xl shadow-slate-300/50 object-cover w-full aspect-[4/3]"
                                />
                            </div>

                            <div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                                    {t.founder.title} <br />
                                    <span className="text-blue-600">{t.founder.titleAccent}</span>
                                </h2>

                                <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed">
                                    <p className={t.founder.p2 ? "mb-6" : ""}>{t.founder.p1}</p>
                                    {t.founder.p2 && <p>{t.founder.p2}</p>}
                                </div>

                            </div>
                        </div>
                        </Reveal>
                    </div>
                </section>

                {/* 9. TECH STACK & SECURITY (Bento Style) */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <Reveal>
                        <div className="grid lg:grid-cols-2 gap-6">
                            {/* Box 1: Security & Tech Stack - Dark */}
                            <div className="bg-slate-900 rounded-3xl p-10 flex flex-col justify-between text-white shadow-xl overflow-hidden relative group min-h-[400px] hover:-translate-y-1 transition-transform duration-300">
                                <div className="absolute top-0 right-0 p-32 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-600/20 transition-all duration-1000" />

                                <div className="relative z-10">
                                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 leading-tight">
                                        {t.bento.gdprTitle} <span className="text-blue-500">{t.bento.gdprAccent}</span>
                                    </h2>
                                    <p className="text-slate-400 text-lg leading-relaxed mb-8">{t.bento.gdprDesc}</p>
                                </div>

                                <div className="relative z-10">
                                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">{t.bento.poweredBy}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {['TypeScript', 'Node.js', 'n8n', 'PostgreSQL', 'Azure', 'Hetzner'].map((tech) => (
                                            <span key={tech} className="px-3 py-1.5 bg-slate-800 rounded-lg text-sm font-mono text-slate-300 border border-slate-700">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-indigo-50 rounded-3xl p-10 flex flex-col justify-center text-slate-900 shadow-sm border border-indigo-100 min-h-[400px] hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm text-indigo-600">
                                    <Workflow className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 leading-tight">
                                    {t.bento.systemsTitle1} <br />{t.bento.systemsTitle2}
                                </h2>
                                <p className="text-slate-600 text-lg leading-relaxed">{t.bento.systemsDesc}</p>
                            </div>

                            {/* Box 3: Failure Rate - White */}
                            <div className="bg-white rounded-3xl p-10 flex flex-col justify-center text-slate-900 shadow-sm border border-slate-200 min-h-[360px] hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 leading-tight">
                                    {t.bento.winTitle1}<br />{t.bento.winTitle2}
                                </h2>
                                <p className="text-slate-600 text-lg leading-relaxed">{t.bento.winDesc}</p>
                            </div>

                            {/* Box 4: CTA - Dark Blue/Slate */}
                            <div className="bg-slate-800 rounded-3xl p-10 flex flex-col justify-center text-white shadow-xl overflow-hidden relative group min-h-[360px] hover:-translate-y-1 transition-transform duration-300">
                                <div className="absolute bottom-0 left-0 p-24 bg-blue-500/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 group-hover:bg-blue-500/20 transition-all duration-1000" />

                                <div className="relative z-10 h-full flex flex-col justify-between">
                                    <div>
                                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 leading-tight">{t.bento.ctaTitle}</h2>
                                        <p className="text-slate-300 text-lg leading-relaxed mb-8">{t.bento.ctaDesc}</p>
                                    </div>
                                    <div>
                                        <a href="#contact" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-900/20">
                                            {t.bento.ctaButton}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Reveal>
                    </div>
                </section>

                {/* 10. FAQ (ID: #faq) */}
                <section id="faq" className="py-24 bg-slate-50 border-t border-slate-100">
                    <div className="max-w-4xl mx-auto px-6">
                        <Reveal>
                            <div className="max-w-3xl mb-12">
                                <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
                                    {t.faq.badge}
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">{t.faq.title}</h2>
                            </div>
                            <Faq lang={lang} />
                        </Reveal>
                    </div>
                </section>

                {/* 11. CLOSING + CONTACT FORM */}
                <ContactSection lang={lang} />

            </main>

            {/* 12. FOOTER */}
            <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-2">
                            <div className="text-xl font-bold font-monda tracking-tight text-slate-900 mb-6">
                                interlinked.dev
                            </div>
                            <p className="text-slate-500 max-w-sm">{t.footer.tagline}</p>
                        </div>

                        <div>
                            <h4 className="font-bold text-slate-900 mb-4">{t.footer.legalHeading}</h4>
                            <ul className="space-y-3 text-sm text-slate-600">
                                <li><a href="/legal" className="hover:text-blue-600 transition-colors">{t.footer.imprint}</a></li>
                                <li><a href="/legal" className="hover:text-blue-600 transition-colors">{t.footer.privacy}</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-slate-900 mb-4">{t.footer.contactHeading}</h4>
                            <ul className="space-y-3 text-sm text-slate-600">
                                <li><a href="mailto:contact@interlinked.dev" className="hover:text-blue-600 transition-colors">contact@interlinked.dev</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-sm text-slate-400">
                            © 2026 Interlinked.dev.{isStaging && <span className="text-slate-300"> · staging</span>}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

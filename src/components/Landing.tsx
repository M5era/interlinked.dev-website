import React from "react";
import {
    ArrowRight,
    Server,
    LayoutDashboard,
    Wallet,
    Workflow,
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
        mainEntity: t.faq.seoItems.map((item) => ({
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
                {/* 2. HERO SECTION — centered; the old workflow-canvas visual
                    is archived in components/WorkflowCanvas.tsx */}
                <section className="relative pt-28 pb-24 lg:pt-40 lg:pb-36 overflow-hidden">
                    {/* Soft top glow */}
                    <div className="absolute inset-x-0 -top-24 h-[480px] bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.10),transparent_65%)] pointer-events-none"></div>

                    <div className="relative max-w-4xl mx-auto px-6 text-center">
                        <div className="flex justify-center mb-8 animate-fade-in-up">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-slate-600 bg-white rounded-full border border-slate-200 shadow-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                {t.hero.open}
                            </div>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.08] animate-fade-in-up delay-100">
                            {t.hero.h1a}
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                                {t.hero.h1b}
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
                            {t.hero.sub}
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-300">
                            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20 active:scale-[0.98]">
                                {t.hero.ctaPrimary} <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                            <a href="#process" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 transition-all bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 active:scale-[0.98]">
                                {t.hero.ctaSecondary}
                            </a>
                        </div>
                    </div>
                </section>

                {/* 3. PAIN NARRATIVE */}
                <section className="py-28 bg-white border-y border-slate-100">
                    <div className="max-w-4xl mx-auto px-6">
                        <Reveal>
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-12 text-xs font-medium text-slate-600 bg-white rounded-full border border-slate-200 shadow-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                {t.pain.badge}
                            </div>

                            <div className="space-y-7 tracking-tight">
                                <p className="text-3xl md:text-4xl font-semibold text-slate-900 leading-snug">{t.pain.intro}</p>
                                <p className="text-3xl md:text-4xl font-semibold text-slate-400 leading-snug">{t.pain.after}</p>
                                <p className="text-3xl md:text-4xl font-semibold text-slate-400 leading-snug">{t.pain.reassure}</p>
                                <p className="text-3xl md:text-4xl font-semibold text-slate-900 leading-snug">
                                    <span className="text-blue-600">{t.pain.brand}</span> {t.pain.resolution}
                                </p>
                            </div>

                            <hr className="my-16 border-slate-200" />

                            <div>
                                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-5">{t.pain.highlights[0].title}.</h3>
                                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">{t.pain.highlights[0].desc}</p>
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

                        <div className="grid md:grid-cols-2 gap-6">
                            {t.cases.items.map((item, i) => (
                                <Reveal key={item.title} delay={i * 120} className="h-full">
                                    <div className="rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col overflow-hidden">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={item.image} alt={item.title} className="w-full aspect-[16/9] object-cover grayscale" />
                                        <div className="p-8 flex flex-col flex-1">
                                            <div className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-6">{item.tag}</div>
                                            <div className="mb-6">
                                                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mb-2">{item.stat}</div>
                                                <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">{item.statLabel}</div>
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                        </div>
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
                <section id="process" className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <Reveal>
                            <div className="max-w-3xl mb-16">
                                <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.process.title}</h2>
                                <p className="text-lg text-slate-600">{t.process.sub}</p>
                            </div>
                        </Reveal>

                        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
                            {t.process.steps.map((step, i) => (
                                <Reveal key={step.num} delay={i * 120}>
                                    <div className="group h-full">
                                        <div className="flex items-center gap-4 mb-8">
                                            <span className="font-mono text-sm font-bold text-blue-600 tracking-widest">{step.num}</span>
                                            <div className="h-px flex-1 bg-gradient-to-r from-blue-300 via-slate-200 to-transparent"></div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{step.title}</h3>
                                        <p className="text-lg text-slate-600 leading-relaxed">{step.desc}</p>
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

                {/* 8. TEAM BANNER (ID: #founder) */}
                <section id="founder" className="py-24 bg-slate-50 border-y border-slate-100">
                    <div className="max-w-7xl mx-auto px-6">
                        <Reveal>
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/60">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/team.jpg"
                                    alt={t.founder.imageAlt}
                                    className="w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] object-cover object-bottom grayscale"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/25 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-2xl">
                                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-5 text-xs font-medium text-slate-200 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                        {t.founder.title} {t.founder.titleAccent}
                                    </div>
                                    <p className="text-2xl md:text-3xl font-semibold text-white leading-snug tracking-tight">
                                        {t.founder.p1}
                                        {t.founder.p2 && (
                                            <>
                                                <br />
                                                {t.founder.p2}
                                            </>
                                        )}
                                    </p>
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
                                    {t.bento.systemsTitle1} <br className="hidden lg:block" />{t.bento.systemsTitle2}
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
                    <div className="grid md:grid-cols-6 gap-12 mb-12">
                        <div className="md:col-span-2">
                            <div className="text-xl font-bold font-monda tracking-tight text-slate-900 mb-6">
                                interlinked.dev
                            </div>
                            <p className="text-slate-500 max-w-sm">{t.footer.tagline}</p>
                            <p className="text-sm text-slate-400 mt-4">{t.footer.location}</p>
                        </div>

                        <div>
                            <h4 className="font-bold text-slate-900 mb-4">{t.footer.exploreHeading}</h4>
                            <ul className="space-y-3 text-sm text-slate-600">
                                <li><a href="#process" className="hover:text-blue-600 transition-colors">{t.nav.process}</a></li>
                                <li><a href="#cases" className="hover:text-blue-600 transition-colors">{t.nav.cases}</a></li>
                                <li><a href="#faq" className="hover:text-blue-600 transition-colors">{t.nav.faq}</a></li>
                                <li><a href="#contact" className="hover:text-blue-600 transition-colors">{t.nav.contact}</a></li>
                            </ul>
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

                        <div>
                            <h4 className="font-bold text-slate-900 mb-4">{t.footer.socialHeading}</h4>
                            <ul className="space-y-3 text-sm text-slate-600">
                                <li>
                                    <a href="https://www.linkedin.com/in/marcserafin/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                                        LinkedIn
                                    </a>
                                </li>
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

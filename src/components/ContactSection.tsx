import React from "react";
import { Phone } from "lucide-react";
import ProjectForm from "@/components/ProjectForm";
import { getDict, type Lang } from "@/i18n/dictionaries";

export default function ContactSection({ lang }: { lang: Lang }) {
    const t = getDict(lang);

    return (
        <section id="contact" className="py-24 bg-slate-50 border-t border-slate-200 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Manifesto closer */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                        <span className="text-slate-400">{t.closing.line1}</span>
                        <br />
                        <span className="text-slate-900">{t.closing.line2}</span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">{t.closing.line3}</span>
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 p-6 sm:p-8 md:p-12 relative">
                        <div className="mb-8 md:mb-10">
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">{t.contact.title}</h3>
                            <p className="text-sm md:text-base text-slate-600 leading-relaxed">{t.contact.sub}</p>
                        </div>
                        <ProjectForm lang={lang} />
                    </div>

                    {/* Alternative contact paths */}
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-sm text-slate-500">
                        <span className="font-semibold text-slate-600">{t.contact.altTitle}</span>
                        <a
                            href="https://calendly.com/marc-interlinked-sxdh/30min"
                            target="_blank"
                            className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                        >
                            <Phone className="w-4 h-4" /> {t.contact.altCalendly}
                        </a>
                        <span className="hidden sm:inline text-slate-300">·</span>
                        <span>
                            {t.contact.altOr}{" "}
                            <a href="mailto:contact@interlinked.dev" className="font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                                contact@interlinked.dev
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

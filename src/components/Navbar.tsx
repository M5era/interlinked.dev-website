"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { getDict, type Lang } from "@/i18n/dictionaries";

function LangToggle({ lang, className = "" }: { lang: Lang; className?: string }) {
    return (
        <div className={`flex items-center gap-1 text-sm font-semibold ${className}`}>
            <Link
                href="/"
                className={`px-2 py-1 rounded-md transition-colors ${lang === "en" ? "text-slate-900 bg-slate-200/70" : "text-slate-400 hover:text-slate-600"}`}
                aria-current={lang === "en" ? "page" : undefined}
            >
                EN
            </Link>
            <Link
                href="/de"
                className={`px-2 py-1 rounded-md transition-colors ${lang === "de" ? "text-slate-900 bg-slate-200/70" : "text-slate-400 hover:text-slate-600"}`}
                aria-current={lang === "de" ? "page" : undefined}
            >
                DE
            </Link>
        </div>
    );
}

export default function Navbar({ lang }: { lang: Lang }) {
    const t = getDict(lang).nav;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const elem = document.getElementById(targetId);
        if (elem) {
            elem.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    const links = [
        { href: "#solutions", label: t.solutions },
        { href: "#cases", label: t.cases },
        { href: "#process", label: t.process },
        { href: "#faq", label: t.faq },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-50/80 backdrop-blur-md border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                    {/* Logo */}
                    <Link href={lang === "en" ? "/" : "/de"} className="text-xl font-monda tracking-tight text-slate-900 group hover:opacity-80 transition-opacity">
                        interlinked.dev
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                        {links.map((l) => (
                            <a key={l.href} href={l.href} onClick={(e) => handleScroll(e, l.href)} className="hover:text-blue-600 transition-colors">
                                {l.label}
                            </a>
                        ))}
                        <LangToggle lang={lang} />
                        <a
                            href="#contact"
                            onClick={(e) => handleScroll(e, "#contact")}
                            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white transition-all bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 active:scale-95"
                        >
                            {t.contact}
                        </a>
                    </div>

                    {/* Mobile Navigation Controls */}
                    <div className="flex md:hidden items-center gap-3">
                        <LangToggle lang={lang} />
                        <a
                            href="#contact"
                            onClick={(e) => handleScroll(e, "#contact")}
                            className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-blue-700 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
                        >
                            {t.contact}
                        </a>

                        {/* Hamburger Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="md:hidden border-t border-slate-200 bg-white shadow-xl">
                        <div className="px-6 py-8 flex flex-col gap-6 text-lg font-medium text-slate-900">
                            {links.map((l) => (
                                <a key={l.href} href={l.href} onClick={(e) => handleScroll(e, l.href)}>
                                    {l.label}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={(e) => handleScroll(e, "#contact")}
                                className="text-blue-600 font-bold"
                            >
                                {t.contact}
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}

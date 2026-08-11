"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ChevronDown, Menu, X } from "lucide-react";
import { getDict, type Lang } from "@/i18n/dictionaries";

const LANGUAGES: { code: Lang; label: string; href: string }[] = [
    { code: "en", label: "English", href: "/" },
    { code: "de", label: "Deutsch", href: "/de" },
];

function LangDropdown({ lang }: { lang: Lang }) {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="relative"
            onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
            }}
        >
            <button
                onClick={() => setOpen(!open)}
                aria-haspopup="menu"
                aria-expanded={open}
                className="flex items-center gap-1 px-2 py-1.5 text-sm font-medium text-slate-500 hover:text-slate-900 rounded-md transition-colors"
            >
                {lang.toUpperCase()}
                <ChevronDown size={14} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
            </button>

            {open && (
                <div className="absolute right-0 top-full mt-2 w-36 py-1.5 bg-white border border-slate-200 rounded-xl shadow-xl shadow-slate-200/60 z-50">
                    {LANGUAGES.map((l) => (
                        <Link
                            key={l.code}
                            href={l.href}
                            aria-current={l.code === lang ? "page" : undefined}
                            className={`flex items-center justify-between px-3.5 py-2 text-sm transition-colors ${
                                l.code === lang ? "font-semibold text-slate-900" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                            }`}
                        >
                            {l.label}
                            {l.code === lang && <Check size={14} className="text-blue-600" />}
                        </Link>
                    ))}
                </div>
            )}
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
                        <LangDropdown lang={lang} />
                        <a
                            href="#contact"
                            onClick={(e) => handleScroll(e, "#contact")}
                            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white transition-all bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 active:scale-95"
                        >
                            {t.contact}
                        </a>
                    </div>

                    {/* Mobile Navigation Controls */}
                    <div className="flex md:hidden items-center">
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
                            <div className="flex items-center gap-6 pt-5 border-t border-slate-100 text-base">
                                {LANGUAGES.map((l) => (
                                    <Link
                                        key={l.code}
                                        href={l.href}
                                        aria-current={l.code === lang ? "page" : undefined}
                                        className={l.code === lang ? "font-bold text-slate-900" : "text-slate-400"}
                                    >
                                        {l.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}

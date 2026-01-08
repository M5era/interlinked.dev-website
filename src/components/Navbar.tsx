"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-50/80 backdrop-blur-md border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                    {/* Logo */}
                    <a href="/" className="text-xl font-monda tracking-tight text-slate-900 group hover:opacity-80 transition-opacity">
                        interlinked.dev
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                        <a href="#solutions" className="hover:text-blue-600 transition-colors">Lösungen</a>
                        <a href="#work" className="hover:text-blue-600 transition-colors">Arbeitsweise</a>
                        <a href="#founder" className="hover:text-blue-600 transition-colors">Über uns</a>
                        <a
                            href="https://calendly.com/marc-interlinked-sxdh/30min"
                            target="_blank"
                            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white transition-all bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 active:scale-95"
                        >
                            Kostenlose Erstberatung
                        </a>
                    </div>

                    {/* Mobile Navigation Controls */}
                    <div className="flex md:hidden items-center gap-4">
                        {/* "Kontakt" Button for Mobile - Pale Blue Style */}
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-blue-700 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
                        >
                            Kontakt
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
                            <a href="#solutions" onClick={() => setIsMobileMenuOpen(false)}>Lösungen</a>
                            <a href="#work" onClick={() => setIsMobileMenuOpen(false)}>Arbeitsweise</a>
                            <a href="#founder" onClick={() => setIsMobileMenuOpen(false)}>Über uns</a>
                            <a
                                href="https://calendly.com/marc-interlinked-sxdh/30min"
                                target="_blank"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-blue-600 font-bold"
                            >
                                Kostenlose Erstberatung
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}

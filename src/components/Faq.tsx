"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { getDict, type Lang } from "@/i18n/dictionaries";

export default function Faq({ lang }: { lang: Lang }) {
    const t = getDict(lang).faq;
    const [open, setOpen] = useState<number | null>(0);

    return (
        <div className="divide-y divide-slate-200 border-y border-slate-200">
            {t.items.map((item, i) => {
                const isOpen = open === i;
                return (
                    <div key={item.q}>
                        <button
                            onClick={() => setOpen(isOpen ? null : i)}
                            aria-expanded={isOpen}
                            className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                        >
                            <span className={`text-lg font-bold transition-colors ${isOpen ? "text-blue-600" : "text-slate-900 group-hover:text-blue-600"}`}>
                                {item.q}
                            </span>
                            <Plus
                                className={`w-5 h-5 flex-shrink-0 text-blue-600 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                            />
                        </button>
                        <div
                            className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"}`}
                        >
                            <div className="overflow-hidden">
                                <p className="text-slate-600 leading-relaxed max-w-3xl">{item.a}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

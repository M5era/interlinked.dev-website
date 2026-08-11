"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { getDict, type Lang } from "@/i18n/dictionaries";

type Status = "idle" | "sending" | "success" | "error";

export default function ProjectForm({ lang }: { lang: Lang }) {
    const t = getDict(lang).contact.form;
    const [status, setStatus] = useState<Status>("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (status === "sending") return;

        const form = e.currentTarget;
        const data = new FormData(form);
        const payload = {
            name: String(data.get("name") ?? ""),
            email: String(data.get("email") ?? ""),
            company: String(data.get("company") ?? ""),
            message: String(data.get("message") ?? ""),
            budget: String(data.get("budget") ?? ""),
            // Honeypot: real users never fill this hidden field
            website: String(data.get("website") ?? ""),
            lang,
        };

        setStatus("sending");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            setStatus("success");
            form.reset();
        } catch {
            setStatus("error");
        }
    }

    if (status === "success") {
        return (
            <div className="flex flex-col items-center text-center gap-4 py-16">
                <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                <p className="text-lg font-medium text-slate-900 max-w-md">{t.success}</p>
            </div>
        );
    }

    const inputClass =
        "w-full px-4 py-3 text-base bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-600/10 transition-all";

    return (
        <form onSubmit={handleSubmit} className="text-left">
            {/* Honeypot field, invisible to humans */}
            <div className="absolute -left-[9999px] top-auto" aria-hidden="true">
                <label>
                    Website
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                </label>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                    <label htmlFor="pf-name" className="block text-sm font-semibold text-slate-700 mb-2">
                        {t.name} *
                    </label>
                    <input id="pf-name" name="name" type="text" required maxLength={200} placeholder={t.namePlaceholder} className={inputClass} />
                </div>
                <div>
                    <label htmlFor="pf-email" className="block text-sm font-semibold text-slate-700 mb-2">
                        {t.email} *
                    </label>
                    <input id="pf-email" name="email" type="email" required maxLength={200} placeholder={t.emailPlaceholder} className={inputClass} />
                </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                    <label htmlFor="pf-company" className="block text-sm font-semibold text-slate-700 mb-2">
                        {t.company}
                    </label>
                    <input id="pf-company" name="company" type="text" maxLength={200} placeholder={t.companyPlaceholder} className={inputClass} />
                </div>
                <div>
                    <label htmlFor="pf-budget" className="block text-sm font-semibold text-slate-700 mb-2">
                        {t.budget}
                    </label>
                    <select id="pf-budget" name="budget" defaultValue="" className={`${inputClass} appearance-none`}>
                        <option value="" disabled>
                            {t.budgetSelect}
                        </option>
                        {t.budgetOptions.map((opt) => (
                            <option key={opt} value={opt}>
                                {opt}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="mb-8">
                <label htmlFor="pf-message" className="block text-sm font-semibold text-slate-700 mb-2">
                    {t.message} *
                </label>
                <textarea
                    id="pf-message"
                    name="message"
                    required
                    maxLength={5000}
                    rows={5}
                    placeholder={t.messagePlaceholder}
                    className={`${inputClass} resize-y min-h-[120px]`}
                />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20 active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none"
                >
                    {status === "sending" ? (
                        <>
                            <Loader2 className="mr-2 w-5 h-5 animate-spin" /> {t.sending}
                        </>
                    ) : (
                        <>
                            {t.submit} <ArrowRight className="ml-2 w-5 h-5" />
                        </>
                    )}
                </button>
                <p className="text-sm text-slate-400">{t.privacyNote}</p>
            </div>

            {status === "error" && <p className="mt-4 text-sm font-medium text-red-600">{t.error}</p>}
        </form>
    );
}

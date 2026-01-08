"use client";

import React, { useActionState } from "react";
import { ArrowRight, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { sendContactEmail } from "@/app/actions";

const initialState = {
    success: false,
    message: "",
};

export default function ContactSection() {
    const [state, formAction, isPending] = useActionState(sendContactEmail, initialState);

    return (
        <section id="contact" className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">
                            Wollen Sie mehr über Automationen erfahren?
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Melden Sie sich unverbindlich bei uns, falls Sie weitere Fragen haben, oder besser verstehen wollen, wie KI/Automationen Ihr Unternehmen erfolgreicher machen können.
                        </p>
                    </div>

                    <form action={formAction} className="space-y-6 bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">

                        {/* Success Message */}
                        {state.success && (
                            <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 flex items-center gap-3 animate-fade-in-up">
                                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                <p className="font-medium">{state.message}</p>
                            </div>
                        )}

                        {/* Error Message */}
                        {!state.success && state.message && (
                            <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 flex items-center gap-3 animate-fade-in-up">
                                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                <p className="font-medium">{state.message}</p>
                            </div>
                        )}

                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                                Name<span className="text-blue-600">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                disabled={isPending}
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all placeholder:text-slate-400 disabled:opacity-50"
                                placeholder="Ihr Name"
                            />
                            {state.errors?.name && <p className="mt-1 text-sm text-red-600">{state.errors.name[0]}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                                Email Adresse<span className="text-blue-600">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                disabled={isPending}
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all placeholder:text-slate-400 disabled:opacity-50"
                                placeholder="ihre.email@firma.de"
                            />
                            {state.errors?.email && <p className="mt-1 text-sm text-red-600">{state.errors.email[0]}</p>}
                        </div>

                        {/* Phone */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                                Telefonnummer
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                disabled={isPending}
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all placeholder:text-slate-400 disabled:opacity-50"
                                placeholder="+49 123 456789"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                                Nachricht<span className="text-blue-600">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                disabled={isPending}
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all placeholder:text-slate-400 resize-none disabled:opacity-50"
                                placeholder="Wie können wir Ihnen helfen?"
                            />
                            {state.errors?.message && <p className="mt-1 text-sm text-red-600">{state.errors.message[0]}</p>}
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isPending}
                                className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all bg-blue-600 rounded-xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isPending ? (
                                    <>
                                        <Loader2 className="mr-2 w-5 h-5 animate-spin" /> Wird gesendet...
                                    </>
                                ) : (
                                    <>
                                        Senden <ArrowRight className="ml-2 w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

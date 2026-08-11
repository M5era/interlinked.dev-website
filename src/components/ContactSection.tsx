import React from "react";
import { Mail } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">
                        Wollen Sie mehr über Automationen erfahren?
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-10">
                        Melden Sie sich unverbindlich bei uns, falls Sie weitere Fragen haben, oder besser verstehen wollen, wie KI/Automationen Ihr Unternehmen erfolgreicher machen können.
                    </p>

                    <a
                        href="mailto:marc@interlinked.dev"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20 active:scale-[0.98]"
                    >
                        <Mail className="mr-2 w-5 h-5" /> E-Mail schreiben
                    </a>
                </div>
            </div>
        </section>
    );
}

import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Rechtliche Hinweise | Interlinked.dev',
    description: 'Impressum und Datenschutzerklärung von Interlinked.dev',
};

export default function LegalPage() {
    return (
        <div className="min-h-screen font-sans bg-white selection:bg-blue-100 selection:text-blue-900">
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
                <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/" className="text-xl font-bold font-monda tracking-tight text-slate-900">
                        interlinked.dev
                    </Link>
                    <Link href="/" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                        Zurück zur Startseite
                    </Link>
                </div>
            </nav>

            <main className="pt-32 pb-24">
                <div className="max-w-3xl mx-auto px-6">
                    <h1 className="text-4xl font-bold text-slate-900 mb-16">Legal / Rechtliches</h1>

                    {/* 1. SHARED CONTACT INFO (Top) */}
                    <div className="mb-16">
                        <h2 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-wider pb-4 border-b border-slate-100">Provider Information / Anbieterkennzeichnung</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="font-bold text-lg mb-1">Marc Serafin</p>
                                <p className="text-slate-600">
                                    Rua do Olival 144, 2 andar<br />
                                    1200-743 Lisbon<br />
                                    Portugal
                                </p>
                            </div>
                            <div className="text-slate-600">
                                <p className="mb-2">
                                    <span className="font-semibold text-slate-900">Contact:</span><br />
                                    <a href="mailto:marc@interlinked.dev" className="text-blue-600 hover:underline">marc@interlinked.dev</a>
                                </p>
                                <p>
                                    <span className="font-semibold text-slate-900">VAT ID / USt-IdNr.:</span><br />
                                    PT 313 500 690
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 2. ENGLISH SECTION */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                            <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded text-sm font-medium">EN</span>
                            Legal Notice & Privacy
                        </h2>

                        <div className="space-y-12">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Disclaimer & Liability</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents' accuracy, completeness, or topicality. According to statutory provisions, we are explicitly responsible for our own content on these web pages. In this context, please note that we are accordingly not obliged to monitor merely the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Privacy Policy Summary</h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    <strong>Hosting:</strong> This website is hosted by Hetzner Online GmbH in Germany. Standard server logs (IP addresses) are processed for security purposes.<br />
                                    <strong>Data:</strong> When you contact us (email/calendar), your data is stored solely for communication purposes. We do not sell your data.<br />
                                    <strong>Rights:</strong> You have the right to request information about your stored data, its origin, its recipients, and the purpose of its collection at no charge. You also have the right to request that it be corrected, blocked, or deleted.
                                </p>
                            </div>
                        </div>
                    </div>

                    <hr className="border-slate-100 mb-16" />

                    {/* 3. GERMAN SECTION */}
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                            <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded text-sm font-medium">DE</span>
                            Impressum & Datenschutz
                        </h2>

                        <div className="space-y-12">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Rechtliche Hinweise</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    <strong>Haftung für Inhalte:</strong> Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                                </p>
                                <p className="text-slate-600 leading-relaxed mt-4">
                                    <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br />
                                    Marc Serafin<br />
                                    Rua do Olival 144, 2 andar, 1200-743 Lissabon, Portugal
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Datenschutzerklärung (Kurzfassung)</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    <strong>Hosting:</strong> Wir hosten diese Website bei Hetzner Online GmbH (Deutschland/EU).<br />
                                    <strong>Kontakt:</strong> Wenn Sie uns per E-Mail oder Kalender kontaktieren, werden Ihre Daten zwecks Bearbeitung der Anfrage gespeichert (Art. 6 Abs. 1 lit. b DSGVO).<br />
                                    <strong>Ihre Rechte:</strong> Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten sowie ein Recht auf Berichtigung oder Löschung.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
            <footer className="bg-white border-t border-slate-200 py-8 text-center text-sm text-slate-500">
                <div className="max-w-4xl mx-auto px-6">
                    © {new Date().getFullYear()} Interlinked.dev
                </div>
            </footer>
        </div>
    );
}

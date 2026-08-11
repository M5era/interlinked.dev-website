"use client";

import React, { useState } from "react";
import {
    Bot,
    Mail,
    MessageSquare,
    Activity,
    Sparkles,
    Database,
    UserPlus,
    CheckCircle2,
    BookOpen,
    FileSignature,
    Workflow,
    Server,
    type LucideIcon,
} from "lucide-react";

type WorkflowNode = {
    icon: LucideIcon;
    iconClass: string;
    title: string;
    sub: string;
};

type Team = {
    key: string;
    team: string;
    claim: string;
    nodes: [WorkflowNode, WorkflowNode, WorkflowNode];
    attachment: { icon: LucideIcon; iconClass: string; label: string };
};

const TEAMS: Team[] = [
    {
        key: "vertrieb",
        team: "Vertrieb",
        claim: "Leads automatisch qualifizieren und ins CRM schreiben",
        nodes: [
            { icon: UserPlus, iconClass: "bg-violet-50 text-violet-600", title: "Neuer Lead", sub: "Webformular oder E-Mail" },
            { icon: Bot, iconClass: "bg-blue-50 text-blue-600", title: "KI-Agent", sub: "qualifiziert & reichert an" },
            { icon: Database, iconClass: "bg-emerald-50 text-emerald-600", title: "CRM aktualisiert", sub: "inkl. Follow-up-Task" },
        ],
        attachment: { icon: Sparkles, iconClass: "text-blue-600", label: "KI-Modell" },
    },
    {
        key: "finance",
        team: "Finance",
        claim: "Rechnungen auslesen und automatisch verbuchen",
        nodes: [
            { icon: Mail, iconClass: "bg-amber-50 text-amber-600", title: "Rechnung im Postfach", sub: "PDF-Anhang erkannt" },
            { icon: Bot, iconClass: "bg-blue-50 text-blue-600", title: "KI-Texterkennung", sub: "Positionen & Beträge" },
            { icon: CheckCircle2, iconClass: "bg-emerald-50 text-emerald-600", title: "Verbucht", sub: "im Buchhaltungstool" },
        ],
        attachment: { icon: Sparkles, iconClass: "text-blue-600", label: "KI-Modell" },
    },
    {
        key: "hr",
        team: "HR",
        claim: "neue Mitarbeiter in Minuten onboarden",
        nodes: [
            { icon: FileSignature, iconClass: "bg-violet-50 text-violet-600", title: "Vertrag unterschrieben", sub: "E-Signatur eingegangen" },
            { icon: Workflow, iconClass: "bg-blue-50 text-blue-600", title: "Onboarding-Workflow", sub: "Accounts, Hardware, Rechte" },
            { icon: UserPlus, iconClass: "bg-emerald-50 text-emerald-600", title: "Startklar an Tag 1", sub: "Team automatisch informiert" },
        ],
        attachment: { icon: Server, iconClass: "text-slate-500", label: "Microsoft 365" },
    },
    {
        key: "it",
        team: "IT & Ops",
        claim: "Störungen lösen, bevor Kunden sie bemerken",
        nodes: [
            { icon: Activity, iconClass: "bg-red-50 text-red-500", title: "Monitoring-Alert", sub: "Server & Services" },
            { icon: Bot, iconClass: "bg-blue-50 text-blue-600", title: "KI-Triage", sub: "kategorisiert & priorisiert" },
            { icon: MessageSquare, iconClass: "bg-emerald-50 text-emerald-600", title: "Eskaliert", sub: "Ticket + Slack-Alert" },
        ],
        attachment: { icon: Sparkles, iconClass: "text-blue-600", label: "KI-Modell" },
    },
    {
        key: "support",
        team: "Support",
        claim: "Anfragen rund um die Uhr beantworten",
        nodes: [
            { icon: MessageSquare, iconClass: "bg-violet-50 text-violet-600", title: "Kundenanfrage", sub: "E-Mail oder Chat" },
            { icon: Bot, iconClass: "bg-blue-50 text-blue-600", title: "KI-Agent", sub: "entwirft die Antwort" },
            { icon: CheckCircle2, iconClass: "bg-emerald-50 text-emerald-600", title: "Versandfertig", sub: "geprüft von Ihrem Team" },
        ],
        attachment: { icon: BookOpen, iconClass: "text-slate-500", label: "Ihre Wissensdatenbank" },
    },
];

function Connector() {
    return (
        <div className="flex md:flex-row flex-col items-center flex-shrink-0">
            <span className="w-2 h-2 rounded-full bg-slate-300" />
            <span className="md:w-8 md:h-0.5 w-0.5 h-6 bg-slate-300" />
            <span className="w-2 h-2 rounded-full bg-slate-300" />
        </div>
    );
}

export default function SolutionsShowcase() {
    const [activeKey, setActiveKey] = useState(TEAMS[0].key);
    const active = TEAMS.find((t) => t.key === activeKey) ?? TEAMS[0];

    return (
        <div className="grid lg:grid-cols-[320px_1fr] gap-8 items-stretch">
            {/* Team Tabs */}
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0">
                {TEAMS.map((t) => {
                    const isActive = t.key === activeKey;
                    return (
                        <button
                            key={t.key}
                            onClick={() => setActiveKey(t.key)}
                            className={`text-left flex-shrink-0 lg:w-full p-4 lg:p-5 rounded-2xl border transition-all duration-200 ${
                                isActive
                                    ? "bg-white border-blue-200 shadow-lg shadow-blue-600/5"
                                    : "bg-slate-50 border-slate-100 hover:border-slate-200 hover:bg-white"
                            }`}
                        >
                            <div className="text-base">
                                <span className={`font-bold ${isActive ? "text-blue-600" : "text-slate-900"}`}>{t.team}</span>{" "}
                                <span className="text-slate-400 font-medium">kann</span>
                            </div>
                            <div className="text-sm text-slate-600 mt-1 hidden lg:block leading-snug">{t.claim}</div>
                        </button>
                    );
                })}
            </div>

            {/* Workflow Canvas */}
            <div className="relative rounded-[2rem] border border-slate-200 bg-white overflow-hidden min-h-[340px] flex flex-col items-center justify-center p-8 lg:p-12">
                {/* Dotted canvas grid */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(100,116,139,0.16)_1px,transparent_1px)] [background-size:18px_18px]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-64 bg-blue-100/50 rounded-full blur-3xl"></div>

                <div key={active.key} className="relative flex flex-col items-center animate-fade-in-up">
                    {/* Node Chain */}
                    <div className="flex md:flex-row flex-col items-center">
                        {active.nodes.map((node, i) => (
                            <React.Fragment key={node.title}>
                                {i > 0 && <Connector />}
                                <div className="w-52 p-4 bg-white rounded-2xl border border-slate-200 shadow-md flex items-start gap-3 flex-shrink-0">
                                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${node.iconClass}`}>
                                        <node.icon size={18} />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="text-sm font-bold text-slate-900 leading-tight mb-0.5">{node.title}</div>
                                        <div className="text-xs text-slate-500 leading-tight">{node.sub}</div>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Dashed Attachment below the chain */}
                    <div className="flex flex-col items-center">
                        <div className="h-8 border-l-2 border-dashed border-slate-300"></div>
                        <div className="flex items-center gap-1.5 px-3 py-2 bg-white/90 border border-dashed border-slate-300 rounded-full text-xs font-medium text-slate-600">
                            <active.attachment.icon size={13} className={active.attachment.iconClass} />
                            {active.attachment.label}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

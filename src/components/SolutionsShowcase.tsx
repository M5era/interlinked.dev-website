"use client";

import React, { useState } from "react";
import {
    Bot,
    Mail,
    MessageSquare,
    Activity,
    Sparkles,
    UserPlus,
    CheckCircle2,
    BookOpen,
    FileSignature,
    Workflow,
    Server,
    Database,
    type LucideIcon,
} from "lucide-react";
import { getDict, type Lang } from "@/i18n/dictionaries";

// Visual identity per team (icons + colors); copy comes from the dictionary.
const TEAM_VISUALS: Record<
    string,
    { nodes: { icon: LucideIcon; iconClass: string }[]; attachment: { icon: LucideIcon; iconClass: string } }
> = {
    sales: {
        nodes: [
            { icon: UserPlus, iconClass: "bg-violet-50 text-violet-600" },
            { icon: Bot, iconClass: "bg-blue-50 text-blue-600" },
            { icon: Database, iconClass: "bg-emerald-50 text-emerald-600" },
        ],
        attachment: { icon: Sparkles, iconClass: "text-blue-600" },
    },
    finance: {
        nodes: [
            { icon: Mail, iconClass: "bg-amber-50 text-amber-600" },
            { icon: Bot, iconClass: "bg-blue-50 text-blue-600" },
            { icon: CheckCircle2, iconClass: "bg-emerald-50 text-emerald-600" },
        ],
        attachment: { icon: Sparkles, iconClass: "text-blue-600" },
    },
    hr: {
        nodes: [
            { icon: FileSignature, iconClass: "bg-violet-50 text-violet-600" },
            { icon: Workflow, iconClass: "bg-blue-50 text-blue-600" },
            { icon: UserPlus, iconClass: "bg-emerald-50 text-emerald-600" },
        ],
        attachment: { icon: Server, iconClass: "text-slate-500" },
    },
    it: {
        nodes: [
            { icon: Activity, iconClass: "bg-red-50 text-red-500" },
            { icon: Bot, iconClass: "bg-blue-50 text-blue-600" },
            { icon: MessageSquare, iconClass: "bg-emerald-50 text-emerald-600" },
        ],
        attachment: { icon: Sparkles, iconClass: "text-blue-600" },
    },
    support: {
        nodes: [
            { icon: MessageSquare, iconClass: "bg-violet-50 text-violet-600" },
            { icon: Bot, iconClass: "bg-blue-50 text-blue-600" },
            { icon: CheckCircle2, iconClass: "bg-emerald-50 text-emerald-600" },
        ],
        attachment: { icon: BookOpen, iconClass: "text-slate-500" },
    },
};

function Connector() {
    return (
        <div className="flex md:flex-row flex-col items-center flex-shrink-0">
            <span className="w-2 h-2 rounded-full bg-slate-300" />
            <span className="md:w-8 md:h-0.5 w-0.5 h-6 bg-slate-300" />
            <span className="w-2 h-2 rounded-full bg-slate-300" />
        </div>
    );
}

export default function SolutionsShowcase({ lang }: { lang: Lang }) {
    const t = getDict(lang).solutions;
    const [activeKey, setActiveKey] = useState(t.teams[0].key);
    const active = t.teams.find((team) => team.key === activeKey) ?? t.teams[0];
    const visuals = TEAM_VISUALS[active.key] ?? TEAM_VISUALS.sales;

    return (
        <div className="grid lg:grid-cols-[320px_1fr] gap-8 items-stretch">
            {/* Team Tabs */}
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0">
                {t.teams.map((team) => {
                    const isActive = team.key === activeKey;
                    return (
                        <button
                            key={team.key}
                            onClick={() => setActiveKey(team.key)}
                            className={`text-left flex-shrink-0 lg:w-full p-4 lg:p-5 rounded-2xl border transition-all duration-200 ${
                                isActive
                                    ? "bg-white border-blue-200 shadow-lg shadow-blue-600/5"
                                    : "bg-slate-50 border-slate-100 hover:border-slate-200 hover:bg-white"
                            }`}
                        >
                            <div className="text-base">
                                <span className={`font-bold ${isActive ? "text-blue-600" : "text-slate-900"}`}>{team.team}</span>{" "}
                                <span className="text-slate-400 font-medium">{t.canWord}</span>
                            </div>
                            <div className="text-sm text-slate-600 mt-1 hidden lg:block leading-snug">{team.claim}</div>
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
                        {active.nodes.map((node, i) => {
                            const visual = visuals.nodes[i] ?? visuals.nodes[0];
                            return (
                                <React.Fragment key={node.title}>
                                    {i > 0 && <Connector />}
                                    <div className="w-52 p-4 bg-white rounded-2xl border border-slate-200 shadow-md flex items-start gap-3 flex-shrink-0">
                                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${visual.iconClass}`}>
                                            <visual.icon size={18} />
                                        </div>
                                        <div className="min-w-0">
                                            <div className="text-sm font-bold text-slate-900 leading-tight mb-0.5">{node.title}</div>
                                            <div className="text-xs text-slate-500 leading-tight">{node.sub}</div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            );
                        })}
                    </div>

                    {/* Dashed Attachment below the chain */}
                    <div className="flex flex-col items-center">
                        <div className="h-8 border-l-2 border-dashed border-slate-300"></div>
                        <div className="flex items-center gap-1.5 px-3 py-2 bg-white/90 border border-dashed border-slate-300 rounded-full text-xs font-medium text-slate-600">
                            <visuals.attachment.icon size={13} className={visuals.attachment.iconClass} />
                            {active.attachmentLabel}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

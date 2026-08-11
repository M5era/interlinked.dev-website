import React from "react";
import { MessageSquare, Database, Webhook, Clock, LayoutDashboard, Workflow, Sparkles } from "lucide-react";
import { getDict, type Lang } from "@/i18n/dictionaries";

// n8n-style workflow canvas, formerly the hero visual. Currently unused —
// kept for potential reuse (e.g. a solutions illustration or a 404 page).
export default function WorkflowCanvas({ lang }: { lang: Lang }) {
    const t = getDict(lang).hero.canvas;

    return (
        <div className="relative mt-4 lg:mt-0 lg:ml-auto h-[300px] sm:h-[400px] md:h-[480px] lg:h-[450px] xl:h-[590px]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0 origin-top lg:origin-top-right scale-[0.48] sm:scale-[0.65] md:scale-[0.8] lg:scale-[0.75] xl:scale-100 w-[680px]">
                <div className="relative z-10 w-[680px] h-[520px] bg-white rounded-3xl border border-slate-200 shadow-2xl shadow-slate-200/60 overflow-hidden">
                    {/* Dotted canvas grid */}
                    <div className="absolute inset-0 bg-[radial-gradient(rgba(100,116,139,0.18)_1px,transparent_1px)] [background-size:20px_20px]"></div>
                    {/* Soft glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl"></div>

                    {/* Edges */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 680 520" fill="none">
                        {/* Triggers -> Workflow */}
                        <path d="M192 160 C 216 160 214 215 235 215" stroke="#cbd5e1" strokeWidth="1.5" />
                        <path d="M192 310 C 216 310 214 255 235 255" stroke="#cbd5e1" strokeWidth="1.5" />
                        {/* Workflow -> Systems */}
                        <path d="M445 215 C 462 215 460 100 478 100" stroke="#cbd5e1" strokeWidth="1.5" />
                        <path d="M445 235 L 478 235" stroke="#cbd5e1" strokeWidth="1.5" />
                        <path d="M445 255 C 462 255 460 370 478 370" stroke="#cbd5e1" strokeWidth="1.5" />
                        {/* Dashed attachments below the workflow */}
                        <path d="M305 283 C 305 350 245 370 245 430" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
                        <path d="M375 283 C 375 350 435 370 435 430" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
                        {/* Connection dots */}
                        {[[192, 160], [235, 215], [192, 310], [235, 255], [445, 215], [478, 100], [445, 235], [478, 235], [445, 255], [478, 370]].map(([cx, cy]) => (
                            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.5" fill="#94a3b8" />
                        ))}
                    </svg>

                    {/* Trigger: Webhook */}
                    <div className="absolute left-8 top-[133px] w-[160px] flex items-center gap-3 px-4 py-4 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 shadow-sm">
                        <Webhook size={18} className="text-blue-600 flex-shrink-0" /> {t.webhook}
                    </div>

                    {/* Trigger: Scheduler */}
                    <div className="absolute left-8 top-[283px] w-[160px] flex items-center gap-3 px-4 py-4 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 shadow-sm">
                        <Clock size={18} className="text-amber-500 flex-shrink-0" /> {t.scheduler}
                    </div>

                    {/* Central Node: Workflow */}
                    <div className="absolute left-[235px] top-[187px] w-[210px] h-[96px] flex items-center gap-4 p-4 bg-white border border-blue-200 rounded-2xl shadow-lg shadow-blue-600/10">
                        <div className="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-md shadow-blue-600/30">
                            <Workflow size={22} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="text-base font-bold text-slate-900 leading-tight mb-1">{t.workflowTitle}</div>
                            <div className="text-[11px] text-slate-500 leading-snug">{t.workflowSub}</div>
                        </div>
                    </div>

                    {/* System: ERP & Database */}
                    <div className="absolute left-[478px] top-[73px] w-[170px] flex items-center gap-2.5 px-4 py-4 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 shadow-sm whitespace-nowrap">
                        <Database size={18} className="text-emerald-500 flex-shrink-0" /> {t.erp}
                    </div>

                    {/* System: Slack & Teams */}
                    <div className="absolute left-[478px] top-[208px] w-[170px] flex items-center gap-2.5 px-4 py-4 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 shadow-sm whitespace-nowrap">
                        <MessageSquare size={18} className="text-violet-500 flex-shrink-0" /> {t.slack}
                    </div>

                    {/* System: Dashboard */}
                    <div className="absolute left-[478px] top-[343px] w-[170px] flex items-center gap-2.5 px-4 py-4 bg-white border border-blue-200 rounded-xl text-xs font-semibold text-slate-700 shadow-sm shadow-blue-600/10 whitespace-nowrap">
                        <LayoutDashboard size={18} className="text-blue-600 flex-shrink-0" /> {t.dashboard}
                    </div>

                    {/* Attachment: AI model */}
                    <div className="absolute left-[189px] top-[430px] flex items-center gap-2 px-3.5 py-2 bg-white/90 border border-dashed border-slate-300 rounded-full text-xs font-medium text-slate-600">
                        <Sparkles size={14} className="text-blue-600" /> {t.aiModel}
                    </div>

                    {/* Attachment: PostgreSQL */}
                    <div className="absolute left-[374px] top-[430px] flex items-center gap-2 px-3.5 py-2 bg-white/90 border border-dashed border-slate-300 rounded-full text-xs font-medium text-slate-600">
                        <Database size={14} className="text-emerald-500" /> {t.postgres}
                    </div>
                </div>
            </div>

            {/* Decorative Background Elements behind diagram */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-100/40 to-purple-100/40 rounded-full blur-3xl -z-10"></div>
        </div>
    );
}

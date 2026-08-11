import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_LENGTHS: Record<string, number> = {
    name: 200,
    email: 200,
    company: 200,
    budget: 100,
    message: 5000,
};

function clean(value: unknown, field: string): string {
    if (typeof value !== "string") return "";
    return value.trim().slice(0, MAX_LENGTHS[field] ?? 200);
}

export async function POST(request: Request) {
    let body: Record<string, unknown>;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }

    // Honeypot: bots fill every field. Pretend success, send nothing.
    if (typeof body.website === "string" && body.website.trim() !== "") {
        return NextResponse.json({ ok: true });
    }

    const name = clean(body.name, "name");
    const email = clean(body.email, "email");
    const company = clean(body.company, "company");
    const budget = clean(body.budget, "budget");
    const message = clean(body.message, "message");
    const lang = body.lang === "de" ? "de" : "en";

    if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.error("RESEND_API_KEY is not set");
        return NextResponse.json({ error: "Mail service not configured" }, { status: 500 });
    }

    const to = process.env.CONTACT_TO_EMAIL || "marc@interlinked.dev";
    const from = process.env.CONTACT_FROM_EMAIL || "Interlinked Website <website@interlinked.dev>";

    const lines = [
        `New project inquiry (${lang.toUpperCase()})`,
        "",
        `Name:    ${name}`,
        `Email:   ${email}`,
        `Company: ${company || "—"}`,
        `Budget:  ${budget || "—"}`,
        "",
        "What do they want to build?",
        "---------------------------",
        message,
    ];

    const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            from,
            to: [to],
            reply_to: email,
            subject: `Project inquiry: ${name}${company ? ` (${company})` : ""}${budget ? ` · ${budget}` : ""}`,
            text: lines.join("\n"),
        }),
    });

    if (!res.ok) {
        const detail = await res.text().catch(() => "");
        console.error("Resend API error", res.status, detail);
        return NextResponse.json({ error: "Mail delivery failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
}

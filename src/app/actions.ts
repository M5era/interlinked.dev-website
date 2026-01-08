"use server";

import { z } from "zod";
import nodemailer from "nodemailer";

// Schema for validation
const contactFormSchema = z.object({
    name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein."),
    email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein."),
    phone: z.string().optional(),
    message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein."),
});

type ContactFormState = {
    success: boolean;
    message?: string;
    errors?: {
        name?: string[];
        email?: string[];
        phone?: string[];
        message?: string[];
    };
};

export async function sendContactEmail(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
    // 1. Validate Fields
    const validatedFields = contactFormSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
    });

    if (!validatedFields.success) {
        return {
            success: false,
            message: "Bitte überprüfen Sie Ihre Eingaben.",
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { name, email, phone, message } = validatedFields.data;

    // 2. Setup Transporter
    // NOTE: These environment variables must be set in your Vercel/Coolify project settings.
    const isDev = process.env.NODE_ENV === "development";
    const hasSmtp = !!process.env.SMTP_HOST;

    if (isDev && !hasSmtp) {
        console.log("----------------------------------------");
        console.log(" [DEV] Simulating Email Send (No SMTP_HOST set)");
        console.log(" To:", process.env.SMTP_TO || "contactform@interlinked.dev");
        console.log(" From:", process.env.SMTP_FROM || "noreply@interlinked.dev");
        console.log(" Subject:", `New Inquiry from ${name}`);
        console.log(" Message:", message);
        console.log("----------------------------------------");

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        return { success: true, message: "Entwicklung: Nachricht wurde simuliert (siehe Konsole)." };
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.example.com",
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER || "user",
            pass: process.env.SMTP_PASS || "pass",
        },
    });

    try {
        // 3. Send Email
        await transporter.sendMail({
            from: `"Interlinked Website" <${process.env.SMTP_FROM || "noreply@interlinked.dev"}>`,
            to: process.env.SMTP_TO || "contactform@interlinked.dev",
            subject: `New Inquiry from ${name}`,
            text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        
        Message:
        ${message}
      `,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
        });

        return { success: true, message: "Vielen Dank! Ihre Nachricht wurde gesendet." };
    } catch (error) {
        console.error("Email send error:", error);
        return { success: false, message: "Fehler beim Senden. Bitte versuchen Sie es später noch einmal." };
    }
}

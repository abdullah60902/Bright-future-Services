import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const { name, email, interest, message } = await request.json();

    // 🚀 Direct SMTP config (Gmail)
    const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'ns.global.ser@gmail.com',
    pass: 'tvndoeocunbpadyl', // ✅ No spaces here
  },
});

    await transporter.sendMail({
      from: `"${name}" <ns.global.sr@gmail.com>`, // User ka name + aapka Gmail
      to: "ns.global.sr@gmail.com", // Jahan form ka data receive karna hai
      subject: `📩 New Contact Form: ${interest}`,
      html: `
        <div style="font-family: Arial, sans-serif; background:#f9f9f9; padding:20px;">
          <div style="max-width:600px; margin:auto; background:#fff; border-radius:8px; overflow:hidden;">
            <div style="background:#155DFC; color:#fff; padding:15px; text-align:center;">
              <h2 style="margin:0;">New Contact Form Submission</h2>
            </div>
            <div style="padding:20px; color:#333;">
              <p><b style="color:#155DFC;">Name:</b> ${name}</p>
              <p><b style="color:#155DFC;">Email:</b> ${email}</p>
              <p><b style="color:#155DFC;">Interest:</b> ${interest}</p>
              <p><b style="color:#155DFC;">Message:</b></p>
              <div style="background:#f1f1f1; padding:10px; border-radius:6px;">
                ${message}
              </div>
            </div>
            <div style="background:#f4f4f4; padding:12px; text-align:center; font-size:12px; color:#666;">
              © ${new Date().getFullYear()} NS Global Services
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const { name, email, interest, message } = await request.json();

    // 🚀 Direct SMTP config (Gmail)
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
         user: "info.bright.future.ser@gmail.com",
        pass: "hjoqqbokbylfsgom", // ⚠️ .env me rakho
      },
    });

    await transporter.sendMail({
  from: `"${name}" <info.bright.future.ser@gmail.com>`, // ✅ sahi wala email
  to: "info.bright.future.ser@gmail.com", // ✅ apna hi Gmail rakho
  subject: `📩 New Contact Form: ${interest}`,
  html: `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; background:#f3f6fa; padding:30px;">
      <div style="max-width:650px; margin:auto; background:#fff; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.08); overflow:hidden;">
        
        <!-- Header -->
        <div style="background:linear-gradient(135deg, #155DFC, #003bbd); color:#fff; padding:25px; text-align:center;">
          <h1 style="margin:0; font-size:22px;">📨 New Contact Form Submission</h1>
        </div>

        <!-- Body -->
        <div style="padding:25px; color:#333; line-height:1.6;">
          <p style="font-size:16px; margin-bottom:15px;">Hello Team,</p>
          <p style="margin-bottom:25px;">You have received a new inquiry from the website. Details are below:</p>

          <table style="width:100%; border-collapse:collapse; font-size:15px;">
            <tr>
              <td style="padding:10px; font-weight:bold; color:#155DFC; width:120px;">Name:</td>
              <td style="padding:10px; background:#f9f9f9; border-radius:6px;">${name}</td>
            </tr>
            <tr>
              <td style="padding:10px; font-weight:bold; color:#155DFC;">Email:</td>
              <td style="padding:10px; background:#f9f9f9; border-radius:6px;">${email}</td>
            </tr>
            <tr>
              <td style="padding:10px; font-weight:bold; color:#155DFC;">Interest:</td>
              <td style="padding:10px; background:#f9f9f9; border-radius:6px;">${interest}</td>
            </tr>
            <tr>
              <td style="padding:10px; font-weight:bold; color:#155DFC; vertical-align:top;">Message:</td>
              <td style="padding:15px; background:#f9f9f9; border-radius:6px; white-space:pre-line;">
                ${message}
              </td>
            </tr>
          </table>
        </div>

        <!-- Footer -->
        <div style="background:#f4f4f4; padding:15px; text-align:center; font-size:13px; color:#666;">
          © ${new Date().getFullYear()} <b style="color:#155DFC;">NS Global Services</b> <br/>
          This is an automated email. Please do not reply directly.
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

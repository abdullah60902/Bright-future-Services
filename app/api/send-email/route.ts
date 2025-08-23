import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const orderDetails = await req.json();

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "info.bright.future.ser@gmail.com",
        pass: "hjoqqbokbylfsgom", // ⚠️ .env me rakho
      },
    });


    // Condition for consultation vs normal course
    const isConsultation =
      orderDetails.courseName?.toLowerCase().includes("consultation");

    const nextClassInfo = isConsultation
      ? `Within 24 hours (Your mentor will contact you by email/Zoom soon)`
      : `${orderDetails.nextClassDate} (Zoom classes start in 5 days)`;

    const zoomText = isConsultation
      ? "Join your 1:1 consultation using the button below:"
      : "Join the Zoom class using the button below:";

    const mailOptions = {
      from: `Bright Future Services <info.bright.future.ser@gmail.com>`,
      to: orderDetails.studentEmail,
      subject: isConsultation
        ? `Consultation Booking Confirmed - ${orderDetails.courseName}`
        : `Enrollment Confirmation - ${orderDetails.courseName}`,
      html: `
      <div style="font-family: 'Segoe UI', sans-serif; background-color:#f4f4f7; padding:20px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; margin:auto; background-color:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 6px rgba(0,0,0,0.1);">
        
        <!-- Greeting -->
        <tr>
          <td style="padding:30px; color:#333; text-align:center;">
            <h2 style="color:#1e40af; font-size:24px; margin-bottom:10px;">
              ${isConsultation ? "Your 1:1 Consultation is Confirmed!" : "Thank you for your enrollment!"}
            </h2>
            <p style="font-size:16px; color:#555; line-height:1.5;">
              ${isConsultation 
                ? `Your personal consultation for <strong>${orderDetails.courseName}</strong> is booked.` 
                : `Your enrollment for <strong>${orderDetails.courseName}</strong> is successfully confirmed.`}
            </p>

            <!-- Order Details -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:20px; border-collapse:collapse;">
              <tr>
                <td style="padding:10px; border-bottom:1px solid #eaeaea; color:#555;">Order ID</td>
                <td style="padding:10px; border-bottom:1px solid #eaeaea; font-weight:bold; color:#111;">
                  ${orderDetails.orderId}
                </td>
              </tr>
              <tr>
                <td style="padding:10px; border-bottom:1px solid #eaeaea; color:#555;">Amount Paid</td>
                <td style="padding:10px; border-bottom:1px solid #eaeaea; font-weight:bold; color:#111;">
                  $${orderDetails.amount}
                </td>
              </tr>
              <tr>
                <td style="padding:10px; border-bottom:1px solid #eaeaea; color:#555;">
                  ${isConsultation ? "Consultation Time" : "Next Class"}
                </td>
                <td style="padding:10px; border-bottom:1px solid #eaeaea; font-weight:bold; color:#111;">
                  ${nextClassInfo}
                </td>
              </tr>
            </table>

            <!-- Zoom Link Button -->
            <p style="margin-top:20px; font-size:16px; color:#555;">
              ${zoomText}
            </p>
            <a href="${orderDetails.zoomLink}" target="_blank" style="display:inline-block; background-color:#1e40af; color:#ffffff; padding:12px 24px; border-radius:6px; text-decoration:none; font-weight:bold; margin-bottom:20px;">
              Join Zoom ${isConsultation ? "Consultation" : "Class"}
            </a>

            <p style="margin-top:30px; font-size:14px; color:#888;">
              - Bright Future Services Team
            </p>
          </td>
        </tr>

        <!-- Footer -->
        <tr style="background-color:#f4f4f7; text-align:center;">
          <td style="padding:20px; font-size:12px; color:#888;">
            &copy; ${new Date().getFullYear()} Bright Future Services. All rights reserved.
          </td>
        </tr>
      </table>
    </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error: any) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json({ success: false, error: "Email not configured" }, { status: 500 });
    }
    const resend = new Resend(process.env.RESEND_API_KEY);

    const html = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1B3D2F;">
        <div style="background: #1B3D2F; padding: 24px 32px; border-radius: 8px 8px 0 0;">
          <h1 style="color: #F1EDE2; margin: 0; font-size: 22px; font-weight: 600;">
            New Quote Request — Ovaro Commercial
          </h1>
        </div>

        <div style="background: #F1EDE2; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid rgba(27,61,47,0.1);">

          <h2 style="color: #6996AD; font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase; margin: 0 0 20px;">
            Contact Information
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid rgba(27,61,47,0.1); width: 40%; font-size: 13px; opacity: 0.6;">Name</td>
              <td style="padding: 8px 0; border-bottom: 1px solid rgba(27,61,47,0.1); font-size: 14px; font-weight: 600;">${data.firstName} ${data.lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid rgba(27,61,47,0.1); font-size: 13px; opacity: 0.6;">Email</td>
              <td style="padding: 8px 0; border-bottom: 1px solid rgba(27,61,47,0.1); font-size: 14px;"><a href="mailto:${data.email}" style="color: #6996AD;">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid rgba(27,61,47,0.1); font-size: 13px; opacity: 0.6;">Phone</td>
              <td style="padding: 8px 0; border-bottom: 1px solid rgba(27,61,47,0.1); font-size: 14px;">${data.phone || "Not provided"}</td>
            </tr>
          </table>

          <h2 style="color: #6996AD; font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase; margin: 0 0 20px;">
            Business Details
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid rgba(27,61,47,0.1); width: 40%; font-size: 13px; opacity: 0.6;">Business Name</td>
              <td style="padding: 8px 0; border-bottom: 1px solid rgba(27,61,47,0.1); font-size: 14px; font-weight: 600;">${data.businessName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid rgba(27,61,47,0.1); font-size: 13px; opacity: 0.6;">Facility Type</td>
              <td style="padding: 8px 0; border-bottom: 1px solid rgba(27,61,47,0.1); font-size: 14px;">${data.facilityType || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid rgba(27,61,47,0.1); font-size: 13px; opacity: 0.6;">Address</td>
              <td style="padding: 8px 0; border-bottom: 1px solid rgba(27,61,47,0.1); font-size: 14px;">${data.address}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid rgba(27,61,47,0.1); font-size: 13px; opacity: 0.6;">City / Area</td>
              <td style="padding: 8px 0; border-bottom: 1px solid rgba(27,61,47,0.1); font-size: 14px;">${data.city || "Not provided"}</td>
            </tr>
          </table>

          <h2 style="color: #6996AD; font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase; margin: 0 0 20px;">
            Service Details
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid rgba(27,61,47,0.1); width: 40%; font-size: 13px; opacity: 0.6;">Service Requested</td>
              <td style="padding: 8px 0; border-bottom: 1px solid rgba(27,61,47,0.1); font-size: 14px; font-weight: 600;">${data.service || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid rgba(27,61,47,0.1); font-size: 13px; opacity: 0.6;">Frequency</td>
              <td style="padding: 8px 0; border-bottom: 1px solid rgba(27,61,47,0.1); font-size: 14px;">${data.frequency || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid rgba(27,61,47,0.1); font-size: 13px; opacity: 0.6;">Square Footage</td>
              <td style="padding: 8px 0; border-bottom: 1px solid rgba(27,61,47,0.1); font-size: 14px;">${data.sqft || "Not provided"}</td>
            </tr>
          </table>

          ${data.notes ? `
          <h2 style="color: #6996AD; font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase; margin: 0 0 12px;">
            Additional Notes
          </h2>
          <div style="background: white; border-radius: 6px; padding: 16px; font-size: 14px; line-height: 1.7; color: #1B3D2F; margin-bottom: 24px;">
            ${data.notes}
          </div>
          ` : ""}

          <div style="background: #6996AD; border-radius: 8px; padding: 16px 20px; text-align: center; margin-top: 8px;">
            <p style="color: white; margin: 0; font-size: 13px; opacity: 0.9;">
              Reply directly to this email to respond to ${data.firstName}.
            </p>
          </div>
        </div>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: process.env.QUOTE_FROM || "Ovaro Commercial <quotes@ovarocommercial.com>",
      to: process.env.QUOTE_TO || "terrell@ovarocommercial.com",
      replyTo: data.email,
      subject: `Quote Request — ${data.businessName} (${data.service || "General"})`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ success: false, error: "Failed to send" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Quote email error:", err);
    return NextResponse.json({ success: false, error: "Failed to send" }, { status: 500 });
  }
}

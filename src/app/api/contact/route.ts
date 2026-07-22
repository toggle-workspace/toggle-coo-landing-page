import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { fullName, email, phone, interest, message } = await request.json();

  if (!fullName || !email) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL!,
    to: process.env.CONTACT_TO_EMAIL!,
    replyTo: email,
    subject: `New contact form submission from ${fullName}`,
    text: [
      `Name: ${fullName}`,
      `Email: ${email}`,
      phone && `Phone: ${phone}`,
      interest && `Interested in: ${interest}`,
      message && `Message:\n${message}`,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    return Response.json({ error: "Failed to send message" }, { status: 500 });
  }

  return Response.json({ success: true });
}

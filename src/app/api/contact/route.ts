import * as React from "react";

import { Resend } from "resend";

import Contact from "@/components/Email/Contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, content } = await req.json();
    const { data, error } = await resend.emails.send({
      from: `${process.env.SENDER_NAME} <${process.env.SENDER_EMAIL}>`,
      to: [`${process.env.RECEIVER_EMAIL}`],
      subject: "Contact Us from Vernon Wee Hong KOH's Website",
      react: Contact({
        name,
        email,
        content,
      }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

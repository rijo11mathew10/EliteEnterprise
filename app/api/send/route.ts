import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET() {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data } = await resend.emails.send({
      from: "next@zenorocha.com",
      to: "rijo10mathew11@gmail.com",
      subject: "Hello from ",
      html: "<h1>Hello from Next.js</h1>",
    });
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}

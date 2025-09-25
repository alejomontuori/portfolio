import { Resend } from "resend";

const resend = new Resend(process.env.P_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const data = await resend.emails.send({
      from: "noreply@resend.dev",  
      to: "alejomontuori12@gmail.com",
      subject: `Nuevo mensaje de ${name}`,
      text: message,
      replyTo: email,
    });

    return new Response(JSON.stringify({ success: true, data }), {
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const resend = new Resend(RESEND_API_KEY);
    const { name, email, subject, message }: ContactRequest = await req.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      throw new Error("Missing required fields");
    }

    // Send email to portfolio owner
    const emailResponse = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["honeshwarthakur@gmail.com"],
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #0d9488; margin-bottom: 20px;">New Contact Form Submission</h2>
          
          <div style="background: #f8fafc; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <p style="margin: 0 0 10px 0;"><strong>From:</strong> ${name}</p>
            <p style="margin: 0 0 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 0;"><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px;">
            <h3 style="color: #334155; margin-top: 0;">Message:</h3>
            <p style="color: #475569; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #94a3b8; font-size: 12px; margin-top: 20px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
    });

    console.log("Contact email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: unknown) {
    console.error("Error in send-contact-email function:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);

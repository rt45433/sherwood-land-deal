import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  name: string;
  email: string;
  phone: string;
  location: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received request to send-contact-email");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, location, message }: ContactFormRequest = await req.json();
    
    console.log("Form data received:", { name, email, phone, location, message: message?.substring(0, 50) });

    // Basic validation
    if (!name || !email || !location) {
      console.error("Validation failed: missing required fields");
      return new Response(
        JSON.stringify({ error: "Name, email, and location are required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Input length validation for security
    if (name.length > 100 || email.length > 255 || phone?.length > 20 || location.length > 200 || message?.length > 2000) {
      console.error("Validation failed: input too long");
      return new Response(
        JSON.stringify({ error: "Input validation failed" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const timestamp = new Date().toLocaleString('en-GB', { 
      timeZone: 'Europe/London',
      dateStyle: 'full',
      timeStyle: 'short'
    });

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #6B9F3E; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">New Land Valuation Enquiry</h1>
        </div>
        
        <div style="background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd;">
          <h2 style="color: #5D4A3A; margin-top: 0;">Contact Details</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #5D4A3A; width: 120px;">Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #5D4A3A;">Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #6B9F3E;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #5D4A3A;">Phone:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #5D4A3A;">Land Location:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${location}</td>
            </tr>
          </table>

          ${message ? `
          <h3 style="color: #5D4A3A; margin-top: 20px;">Additional Information</h3>
          <p style="background-color: white; padding: 15px; border-radius: 5px; border: 1px solid #eee; white-space: pre-wrap;">${message}</p>
          ` : ''}

          <p style="color: #888; font-size: 12px; margin-top: 20px; border-top: 1px solid #eee; padding-top: 15px;">
            Submitted on ${timestamp}
          </p>
        </div>
        
        <div style="background-color: #5D4A3A; padding: 15px; text-align: center;">
          <p style="color: white; margin: 0; font-size: 12px;">Sherwood Property Solutions Limited</p>
        </div>
      </div>
    `;

    console.log("Sending email via Resend...");

    const emailResponse = await resend.emails.send({
      from: "Sherwood Property <onboarding@resend.dev>",
      to: ["info@sherwoodproperty.co.uk"],
      subject: `New Land Valuation Enquiry from ${name}`,
      html: emailHtml,
      reply_to: email,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, id: emailResponse.id }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);

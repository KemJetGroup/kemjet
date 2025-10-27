import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { createSupabaseClient } from "@/utils/supabase";
import { earlyAccessEmailTemplate } from "@/email_template/early_access";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Store in Supabase
    const supabase = await createSupabaseClient();
    const { error: dbError } = await supabase
      .from("early_access")
      .insert([{ email, created_at: new Date().toISOString() }]);

    if (dbError) {
      console.error("Database error:", dbError);
      return NextResponse.json(
        { error: "Failed to save email" },
        { status: 500 }
      );
    }

    // Send email
    const emailContent = earlyAccessEmailTemplate(email);
    const lines = emailContent.trim().split("\n");
    const subjectLine = lines.find((line) => line.startsWith("Subject: "));
    const subject = subjectLine
      ? subjectLine.replace("Subject: ", "")
      : "Welcome to Kemjet Early Access";
    const text = emailContent.replace(subjectLine + "\n\n", "").trim();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject,
      html: text,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export const earlyAccessEmailTemplate = (
  userEmail: string,
  userName?: string
) => `
Subject: Welcome to Kemjet Early Access.

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Kemjet Early Access</title>
  <style>
    body {
      font-family: 'Inter', sans-serif;
      background-color: #000000;
      color: #ffffff;
      margin: 0;
      padding: 20px;
      text-align: center;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #111111;
      padding: 12px;
      border-radius: 10px;
    }
    .logo {
      width: 100px;
      height: auto;
      margin-bottom: 20px;
    }
    h1 {
      font-size: 28px;
      font-weight: bold;
      color: #ffffff;
      margin-bottom: 20px;
      text-align: left;
    }
    p {
      font-size: 16px;
      line-height: 1.6;
      color: #DBDBDB;
      margin-bottom: 10px;
      text-align: left;
    }
    .highlight {
      color: #19FB9B;
    }
    .footer {
      margin-top: 10px;
      font-size: 14px;
      color: #888888;
    }
  </style>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Lora:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
  <div class="container">
    <div style="display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 20px;">
      <img src="https://kemjet.org/logo/kemjet_logo.svg" alt="Kemjet Logo" style="width: 56px; height: auto;">
      <h2 style="font-family: 'Lora', serif; font-weight: bold; font-size: 24px; color: #ffffff; margin: 0; text-transform: uppercase;">kemjet</h2>
    </div>
    <h1>Welcome to Kemjet Early Access!</h1>
    <p>Dear ${userName || "Valued User"},</p>
    <p>Thank you for your interest in Kemjet! We're thrilled to have you join our early access program for the next generation of AI-powered therapeutics.</p>
    <p><strong>What to Expect:</strong></p>
    <ul style="text-align: left; color: #DBDBDB;">
      <li><span class="highlight">Exclusive Access:</span> Be among the first to explore our platform that redefines molecular design.</li>
      <li><span class="highlight">Updates & Insights:</span> Receive regular updates on new features, breakthroughs, and how AI is transforming drug discovery.</li>
      <li><span class="highlight">Community:</span> Join a network of innovators pushing the boundaries of molecular science.</li>
    </ul>
    <p>Your early access invitation will be sent to <strong>${userEmail}</strong>. In the meantime, stay tuned for exciting developments!</p>
    <p>If you have any questions, feel free to reply to this email or visit our website.</p>
    <div class="footer">
      <p><strong>Best regards,<br>The Kemjet Team.<br/>kemjet.org<br>support@kemjet.org</strong></p>
      <p></p>
    </div>
  </div>
</body>
</html>
`;

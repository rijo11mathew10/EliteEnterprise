// app/api/contact/route.ts

import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    // Parse JSON body of the request
    const formData = await req.json();

    // Extract values from the form data
    const { firstName, lastName, phone, email, subject, message } = formData;

    // Check for required fields
    if (!firstName || !lastName || !phone || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ message: 'Missing required fields.' }),
        { status: 400 }
      );
    }

    // Set up email transporter (use your email provider here)
    const transporter = nodemailer.createTransport({
      service: 'gmail',  // Use your email service provider
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    // Set up the email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender email
      to: 'kuriansybu@gmail.com', // Your company email address
      subject: `Contact Form Submission: ${subject}`,
      html: `
        <p><strong>Name: ${firstName} ${lastName}</strong></p>
        <p><strong>Phone: ${phone}</strong></p>
        <p><strong>Email: ${email}</strong></p>
        <p><strong>Subject: ${subject}</strong></p>
        <p><strong>Message: ${message}</strong></p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with success
    return new Response(
      JSON.stringify({ message: 'Email sent successfully!' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ message: 'Error sending email.' }),
      { status: 500 }
    );
  }
}

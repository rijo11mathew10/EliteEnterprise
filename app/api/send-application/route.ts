import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // Parse the form data from the request body
    const formData = await request.formData();
    const fullName = formData.get('fullName');
    const email = formData.get('email');
    const contact = formData.get('contact');
    const nationality = formData.get('nationality');
    const gender = formData.get('gender');
    const country = formData.get('country');
    const city = formData.get('city');
    const category = formData.get('category');
    const experience = formData.get('experience');
    const skills = formData.get('skills');
    const basicEducation = formData.get('basicEducation');
    const masters = formData.get('masters');
    const cv = formData.get('cv'); // The uploaded CV file

    // Category mapping to specific emails
    const categoryEmails: { [key: string]: string } = {
      Administration: 'kuriansybu@gmail.com',
      Accounts: 'accounts@example.com',
      Audit: 'audit@example.com',
      InformationTechnology: 'it@example.com',
      Logistics: 'logistics@example.com',
      Production: 'production@example.com',
      Procurement: 'procurement@example.com',
      QualityControl: 'qualitycontrol@example.com',
      Maintenance: 'maintenance@example.com',
      Safety: 'safety@example.com',
      Stores: 'stores@example.com',
      Others: 'others@example.com',
    };

    // Get the email based on the selected category
    const categoryEmail = categoryEmails[category as string];

    // If the category email doesn't exist, return an error
    if (!categoryEmail) {
      return NextResponse.json(
        { error: 'No email address found for the selected category' },
        { status: 400 }
      );
    }

    // Check if CV (file) is uploaded
    if (!cv || !(cv instanceof File)) {
      return NextResponse.json(
        { error: 'CV file is required' },
        { status: 400 }
      );
    }

    // Read the file content as a buffer
    const fileBuffer = await cv.arrayBuffer();
    const fileContent = Buffer.from(fileBuffer);

    // Configure the email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Using Gmail as an example
      auth: {
        user: process.env.EMAIL_USER, // Replace with your email
        pass: process.env.EMAIL_PASS, // Replace with your email password or app password
      },
    });

    // Create the email message
    const mailOptions = {
      from: process.env.EMAIL_USER, // Your email address
      to: categoryEmail, // Send to the category email
      subject: `Job Application: ${fullName}`,
      html: `
        <h1>Job Application</h1>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Nationality:</strong> ${nationality}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>Skills:</strong> ${skills}</p>
        <p><strong>Basic Education:</strong> ${basicEducation}</p>
        <p><strong>Masters:</strong> ${masters}</p>
      `,
      attachments: [
        {
          filename: cv.name, // Use the file's name (e.g., "resume.pdf")
          content: fileContent, // Attach the file content
          encoding: 'base64', // Specify base64 encoding for file content
        },
      ],
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    // Respond to the request with a success message
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}

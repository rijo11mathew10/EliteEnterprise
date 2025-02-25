import nodemailer from 'nodemailer';

// Handle the POST request to send the quote request form data
export async function POST(req: Request) {
  try {
    const formData = await req.json();

    // Log the formData to verify it's being sent correctly
    console.log("Received form data:", formData);

    const { name, email, phone, description, category, productServiceOption } = formData;

    // Validate required fields
    if (!name || !email || !phone || !description || !category || !productServiceOption) {
      console.error("Error: Missing required fields");
      return new Response(
        JSON.stringify({ message: "Missing required fields." }),
        { status: 400 } // Bad Request
      );
    }

    // Send email using nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use your email provider (e.g., Gmail, SendGrid, etc.)
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password (or app password)
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'kuriansybu@gmail.com', // The email you want to send to
      subject: 'New Quote Request',
      html: `
        <h3>You have received a new quote request!</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>Option Selected:</strong> ${productServiceOption}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Send success response back as JSON
    return new Response(
      JSON.stringify({ message: 'Quote request submitted successfully!' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ message: 'Something went wrong. Please try again later.' }),
      { status: 500 }
    );
  }
}

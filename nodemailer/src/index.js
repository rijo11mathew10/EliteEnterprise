const express = require('express');
const nodemailer = require('nodemailer');
const { body, validationResult } = require('express-validator');
const multer = require('multer');
const cors = require('cors');  // Import the cors package
require('dotenv').config();

const app = express();

// Enable CORS for all origins
app.use(cors());

// Enable CORS for specific origins (optional)
// app.use(cors({
//   origin: 'https://your-frontend-domain.com',
// }));

app.use(express.json());

// Configure multer for file upload
const upload = multer({
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed'));
    }
  }
});

// Category to email mapping
const categoryEmails = {
  Administration: ["kuriansybu@gmail.com","kuriansybu@yahoo.com"],
  Accounts: "kuriansybu@gmail.com",
  Audit: "kuriansybu@gmail.com",
  InformationTechnology: "kuriansybu@gmail.com",
  Logistics: "kuriansybu@gmail.com",
  Production: "kuriansybu@gmail.com",
  Procurement: "kuriansybu@gmail.com",
  QualityControl: "kuriansybu@gmail.com",
  Maintenance: "kuriansybu@gmail.com",
  Safety: "kuriansybu@gmail.com",
  Stores: "kuriansybu@gmail.com",
  Others: "kuriansybu@gmail.com",
};

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Validation middleware
const validateForm = [
  body('fullName').trim().notEmpty().withMessage('Full Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('contact').trim().notEmpty().withMessage('Contact is required'),
  body('nationality').trim().notEmpty().withMessage('Nationality is required'),
  body('gender').isIn(['male', 'female', 'other']).withMessage('Valid gender is required'),
  body('country').trim().notEmpty().withMessage('Country is required'),
  body('city').trim().notEmpty().withMessage('City is required'),
  body('category').isIn(Object.keys(categoryEmails)).withMessage('Valid category is required'),
  body('experience').isNumeric().withMessage('Experience must be a number'),
  body('skills').trim().notEmpty().withMessage('Skills are required'),
  body('basicEducation').trim().notEmpty().withMessage('Basic Education is required'),
  body('masters').optional().trim(),
];

// Email sending endpoint
app.post('/api/send-application', upload.single('cv'), validateForm, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    if (!req.file) {
      return res.status(400).json({ error: 'CV (PDF) is required' });
    }

    const formData = req.body;
    const categoryEmail = categoryEmails[formData.category];

    if (!categoryEmail) {
      return res.status(400).json({ error: 'Invalid category' });
    }

    // Email options
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: categoryEmail,
      subject: `Careers - ${formData.category} - ${formData.fullName}`,
      html: `
        <h2>New Job Application</h2>
        <h3>Personal Details</h3>
        <p><strong>Full Name:</strong> ${formData.fullName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Contact:</strong> ${formData.contact}</p>
        <p><strong>Nationality:</strong> ${formData.nationality}</p>
        <p><strong>Gender:</strong> ${formData.gender}</p>
        <p><strong>Country:</strong> ${formData.country}</p>
        <p><strong>City:</strong> ${formData.city}</p>

        <h3>Employment Details</h3>
        <p><strong>Category:</strong> ${formData.category}</p>
        <p><strong>Experience:</strong> ${formData.experience} years</p>
        <p><strong>Skills:</strong> ${formData.skills}</p>

        <h3>Education Details</h3>
        <p><strong>Basic Education:</strong> ${formData.basicEducation}</p>
        ${formData.masters ? `<p><strong>Masters:</strong> ${formData.masters}</p>` : ''}
      `,
      attachments: [
        {
          filename: 'candidate-cv.pdf',
          content: req.file.buffer,
          contentType: 'application/pdf'
        }
      ]
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Application submitted successfully' });
  } catch (error) {
    console.error('Error processing application:', error);
    res.status(500).json({ error: 'Failed to process application' });
  }
});

// Error handling for uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  // Give the server a chance to finish pending requests
  setTimeout(() => {
    process.exit(1);
  }, 1000);
});

// Error handling for unhandled promise rejections
process.on('unhandledRejection', (error) => {
  console.error('Unhandled Rejection:', error);
  // Give the server a chance to finish pending requests
  setTimeout(() => {
    process.exit(1);
  }, 1000);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

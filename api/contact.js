import mongoose from "mongoose";

let isConnected = false;

async function connectDB() {
  if (isConnected) {
    return;
  }

  await mongoose.connect(process.env.MONGO_URI);
  isConnected = true;
}

const contactSchema =
  mongoose.models.Contact?.schema ||
  new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  try {
    const { name, email, message } = req.body;

    // Check empty fields
    if (!name || !email || !message) {
      return res.status(400).json({
        message: "Please fill all fields",
      });
    }

    // Clean input
    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanMessage = message.trim();

    // Check again after trimming
    if (!cleanName || !cleanEmail || !cleanMessage) {
      return res.status(400).json({
        message: "Please fill all fields",
      });
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(cleanEmail)) {
      return res.status(400).json({
        message: "Please enter a valid email address",
      });
    }

    // Connect to MongoDB
    await connectDB();

    // Save message to MongoDB
    await Contact.create({
      name: cleanName,
      email: cleanEmail,
      message: cleanMessage,
    });

    // Send email using Resend
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },

      body: JSON.stringify({
        from: "onboarding@resend.dev",

        to: ["ayishashalbap@gmail.com"],

        subject: `New Portfolio Message from ${cleanName}`,

        html: `
          <h2>New Portfolio Contact Message</h2>

          <p>
            <strong>Name:</strong> ${cleanName}
          </p>

          <p>
            <strong>Email:</strong>
            <a href="mailto:${cleanEmail}">
              ${cleanEmail}
            </a>
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <p>
            ${cleanMessage}
          </p>
        `,
      }),
    });

    const resendData = await resendResponse.json();

    // Check Resend response
    if (!resendResponse.ok) {
      console.error("Resend error:", resendData);

      return res.status(500).json({
        message: "Message saved, but email could not be sent",
      });
    }

    return res.status(200).json({
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return res.status(500).json({
      message: "Something went wrong",
    });
  }
}

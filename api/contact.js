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
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await connectDB();

    const { name, email, message } = req.body;

    // Save message to MongoDB
    await Contact.create({
      name,
      email,
      message,
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
        subject: `New Portfolio Message from ${name}`,
        html: `
          <h2>New Portfolio Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      }),
    });

    const resendData = await resendResponse.json();

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
    console.error(error);

    return res.status(500).json({
      message: "Error saving/sending message",
    });
  }
}

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
      default: Date.now
    }
  });

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await connectDB();

    const newContact = await Contact.create({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    });

    return res.status(200).json({
      message: "Saved successfully",
      data: newContact
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error saving data"
    });
  }
}
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");

const app = express();

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.get("/", (req, res) => {
  res.send("AMN Backend Running");
});

app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    await resend.emails.send({
      from: "AMN Website <hello@hypernusa.com>",
      to: "hello@hypernusa.com",
      replyTo: email,
      subject: "New Inquiry From Hypernusa Website",
      html: `
        <h2>New Lead Inquiry</h2>
        <p><strong>Name:</strong> ${name || "-"}</p>
        <p><strong>Email:</strong> ${email || "-"}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "-"}</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Inquiry sent successfully",
    });
  } catch (error) {
    console.error("RESEND ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send inquiry",
      error: error.message,
    });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
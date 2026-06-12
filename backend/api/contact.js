const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const {
      name,
      company,
      role,
      email,
      phone,
      website,
      solution,
      timeline,
      budget,
      message,
    } = req.body;

    await resend.emails.send({
      from: 'Hypernusa Website <hello@hypernusa.com>',
      to: ['hello@hypernusa.com'],
      reply_to: email,
      subject: `New Website Inquiry - ${company || name}`,
      html: `
        <h2>New Website Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || '-'}</p>
        <p><strong>Role:</strong> ${role || '-'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || '-'}</p>
        <p><strong>Website:</strong> ${website || '-'}</p>
        <p><strong>Solution:</strong> ${solution || '-'}</p>
        <p><strong>Timeline:</strong> ${timeline || '-'}</p>
        <p><strong>Budget:</strong> ${budget || '-'}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ message: 'Inquiry sent successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to send inquiry' });
  }
};
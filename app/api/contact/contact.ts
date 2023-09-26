import fs from 'fs/promises';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;
      
      // Create a timestamp for the file name (optional)
      const timestamp = new Date().toISOString().replace(/:/g, '-');
      const fileName = `contact-${timestamp}.txt`;

      // Prepare the data to be saved as text
      const dataToSave = `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`;

      // Write data to a text file
      await fs.writeFile(`./public/${fileName}`, dataToSave);

      // Send a success response
      res.status(200).json({ message: 'Message saved successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error saving message' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}


import { NextRequest, NextResponse } from 'next/server';
import { prisma } from "@/lib/prisma";
import nodemailer from 'nodemailer';
import ExcelJS from 'exceljs';
import fs from 'fs';
import path from 'path';

// Disable static generation for this route
export const dynamic = 'force-dynamic';

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER,
  port: Number(process.env.SMTP_PORT),
  secure: false, // false for non-SSL/TLS
  auth: {
    user: process.env.FROM_EMAIL_GMAIL,
    pass: process.env.FROM_EMAIL_PASSWORD,
  },
});

// Named export for POST method
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { nom, prenom, email, Tele, faculte , niveau , specialite , recherche, source } = body;

  try {
    // Create user in the database
    const registration = await prisma.registration.create({
      data: {
        nom,
        prenom,
        email,
        Tele,
        faculte,
        niveau,
        specialite,
        recherche,
        source,
      },
    });

    // Send verification email with user's ID
const mailOptions = {
  from: process.env.FROM_EMAIL_GMAIL,
  to: email,
  subject: "ESENET Job Fair 2024 - Confirmation de votre inscription",
  html: `
    <div style="font-family: 'Arial', sans-serif; padding: 20px; background-color: #f4f7fa; text-align: center; color: #333;">
      <h1 style="font-size: 30px; color: #004b6d;">Bienvenue à l'ESENET Job Fair 2024 !</h1>
      
      <div style="background-color: #fff; border-radius: 10px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); padding: 30px; max-width: 600px; margin: 0 auto;">
        <p style="font-size: 18px; line-height: 1.6; color: #444;">Bonjour <strong>${nom} ${prenom},</strong></p>
        
        <p style="font-size: 18px; color: #555;">Merci de vous être inscrit à l'<strong>ESENET Job Fair 2024</strong>. Nous sommes ravis de vous avoir parmi nous !</p>
        
        <p style="font-size: 16px; color: #777;">Votre code d'inscription est : <strong>${registration.id}</strong></p>
        
        <div style="margin-top: 30px; padding: 20px; background-color: #004b6d; color: white; border-radius: 5px;">
          <p style="font-size: 18px; margin-bottom: 10px;">Détails de l'événement :</p>
          <ul style="list-style: none; padding: 0;">
            <li><strong>Date de l'événement :</strong> 27 novembre 2024</li>
            <li><strong>Lieu :</strong> ESEN Manouba</li>
            <li><strong>Heure :</strong> 8h30</li>
          </ul>
        </div>

        <p style="margin-top: 20px; font-size: 16px;">Nous avons hâte de vous voir à l'événement et espérons que vous vivrez une expérience enrichissante en rencontrant des employeurs et des pairs !</p>
        
        <p style="margin-top: 20px; font-size: 16px;">Si vous avez des questions, n'hésitez pas à répondre à ce courriel. <br> Cordialement,<br> L'équipe ESENET</p>
      </div>
      
      <footer style="margin-top: 30px; font-size: 14px; color: #aaa;">
        <p>&copy; 2024 ESENET Job Fair. Tous droits réservés.</p>
      </footer>
    </div>
  `,
};



    await transporter.sendMail(mailOptions);

    // Fetch all registrations for the Excel report
    const allRegistrations = await prisma.registration.findMany();

    // Create Excel file with all registrations
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Registrations');

    worksheet.columns = [
      { header: 'ID', key: 'id', width: 10 },
      { header: 'First Name', key: 'nom', width: 15 },
      { header: 'Last Name', key: 'prenom', width: 15 },
      { header: 'Email', key: 'email', width: 25 },
      { header: 'Phone', key: 'Tele', width: 15 },
      { header: 'University', key: 'faculte', width: 20 },
      { header: 'Level', key: 'niveau', width: 20 },
      { header: 'Specialty', key:'specialite', width: 20 },
      { header: 'Seeking', key:'recherche', width: 20 },
      { header: 'Heard About Us', key: 'source', width: 20 },
    ];

    allRegistrations.forEach(registration => {
      worksheet.addRow(registration);
    });

    const filePath = path.join(process.cwd(), 'registrations.xlsx');
    await workbook.xlsx.writeFile(filePath);

    // Send the Excel file to the specified email
    const adminMailOptions = {
      from: process.env.FROM_EMAIL_GMAIL,
      to: 'hamzafallahi7@gmail.com',
      subject: 'All User Registrations',
      text: 'Please find attached the list of all registrations.',
      attachments: [
        {
          filename: 'registrations.xlsx',
          path: filePath,
        },
      ],
    };

    await transporter.sendMail(adminMailOptions);

    // Clean up the file after sending
    try {
      fs.unlinkSync(filePath);
    } catch (err) {
      console.error("Error cleaning up the file:", err);
    }

    return NextResponse.json({ message: 'User registered and emails sent successfully.' });
  } catch (error) {
    console.error('Error during registration:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

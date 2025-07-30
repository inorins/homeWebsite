// import { SMTPClient } from "emailjs";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     try {
//       const { email, name, message } = req.body;
      
//       const client = new SMTPClient({
//         user: "inorinsttechcbs@gmail.com",
//         password: "cbs2inorins@!",
//         host: "smtp.gmail.com",
//         ssl: true,
//       });

//       if (email && name && message) {
//         client.send({
//           text: message,
//           from: email,
//           to: email,
//           subject: "Inorins contact form",
//         });
//         return res.send({ status: true });
//       }
//       return res.status(400).json({ status: false, message: "Invalid Form Data" });
//     } catch (error) {
//       res.status(400).json({ message: "Something went wrong", error });
//     }
//   } else {
//     return res.status(400).json({
//       status: false,
//       message: "Resource not found",
//     });
//   }
// }

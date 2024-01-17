import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file

function createApp(app, isDev = false) {
  //CORS DON'T DELETE?
  if (isDev) {
    app.use(
      cors({
        origin: process.env.ORIGIN_URL, // Allow requests from this origin
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allow these HTTP methods
        credentials: true, // Allow credentials (e.g., cookies)
      })
    );
  }
  app.use(express.json({ limit: "25mb" }));
  app.use(express.urlencoded({ limit: "25mb" }));

  // app.use((req, res, next) => {
  //   res.setHeader("Access-Control-Allow-Origin", "*");
  //   next();
  // });

  function sendMail(formData) {
    return new Promise((resolve, reject) => {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;

      const mail_configs = {
        from: formData.email,
        to: process.env.EMAIL_USER,
        subject: `Message from ${formData.name}`,
        text: emailBody,
      };

      transporter.sendMail(mail_configs, function (error, info) {
        if (error) {
          console.log(error);
          reject({ message: "an error has occurred" });
        } else {
          resolve({ message: "message sent successfully" });
        }
      });
    });
  }

  // app.get("/", (req, res) => {
  //   sendMail()
  //     .then((response) => res.send(response.message))
  //     .catch((error) => res.status(500).send(error.message));
  // });

  app.post("/send-email", (req, res) => {
    sendMail(req.body)
      .then((response) => res.send(response.message))
      .catch((error) => res.status(500).send(error.message));
  });
}

export default createApp;

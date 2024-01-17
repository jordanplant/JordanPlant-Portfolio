import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import axios from "axios";

const serverURL = "http://localhost:5170";

function ContactForm() {
  // Removed unused state variables

  const initialState = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    sendMail(formData); // Call sendMail function
    setFormData(initialState); // Reset the form
  };

  function sendMail() {
    if (formData && formData.email && formData.message) {
      axios
        .post(`${serverURL}/send-email`, formData) // Adjust URL to your Express endpoint
        .then(() => alert("Message sent successfully"))
        .catch((error) => console.error("Error:", error));
      return;
    }
    return alert("Fill in all the fields to continue");
  }

  return (
    <>
      <div
        className={`section__container ${styles.section__container}`}
        id="contact"
      >
        <h2>Let's Talk</h2>
        <div className={styles["contact__container"]}>
          <p className={styles["contact__description"]}>
            Reach out using the form below. Whether you've got something cool to
            chat about, job opportunities to share, or just want to say I'm
            lookin' good, I'm all ears!
          </p>
          <form className={styles["contact__form"]} onSubmit={handleSubmit}>
            <label className={styles["contact__name"]}>
              Name:
              <div className={styles["name__inputArea"]}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </label>
            <label className={styles["contact__email"]}>
              Email:
              <div className={styles["email__inputArea"]}>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </label>
            <label className={styles["contact__message"]}>
              Message:
              <div className={styles["message__textArea"]}>
                <textarea
                  name="message"
                  value={formData.message}
                  placeholder="Hi Jordan, your portfolio is amazing!"
                  onChange={handleChange}
                  rows="5"
                />
              </div>
            </label>
            <div className={styles["contact__button"]}>
              <button onClick={() => sendMail()} type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactForm;

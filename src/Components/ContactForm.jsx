import React, { useState } from "react";
import styles from "./ContactForm.module.css";

function ContactForm() {
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
    // Additional submission logic goes here
    setFormData(initialState); // Reset the form
  };

  return (
    <>
      <div className={styles["section__container"]} id="contact">
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
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactForm;

import React, { useState } from "react";

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
      <div className="contact__container">
        <form className="contact__form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
            />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
}

export default ContactForm;

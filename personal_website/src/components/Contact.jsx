import React from "react";
import Swal from "sweetalert2";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9ffc0df9-044f-4349-8a6a-a38060591e47");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
        Swal.fire({
            title: "Message sent successfully!",
            icon: "success",
            draggable: false
          });
    } else {
        Swal.fire({
            title: "Error! Something is going wrong!",
            icon: "error",
            draggable: false,
          });
    }
  };

  

  return (
    <div className="contact-section" id="contact">
      <h1>Contact</h1>
      <div className="contact-content">
        <form onSubmit={onSubmit}>
          <div className="input-box">
            <label htmlFor="name">Full Name</label>
            <input
              autoComplete="on"
              type="text"
              name="name"
              id="name"
              className="input-field"
              placeholder="Your name"
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="email">Email Address</label>
            <input
            autoComplete="on"
              type="email"
              name="email"
              id="email"
              className="input-field"
              placeholder="Email address"
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              className="message-field"
              cols={30}
              rows={5}
              placeholder="Message..."
              required
            ></textarea>
          </div>
          <button type="submit" className="contact-submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

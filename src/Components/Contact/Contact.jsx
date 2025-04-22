import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { Element } from "react-scroll";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9z4sp8m",          // Service ID
        "template_jsj18vr",         // Template ID
        form.current,
        "BTLzLuZtEnJS7tdb0"         // ✅ Đã xoá dấu cách thừa ở đây
      )
      .then(
        (result) => {
          alert("🎉 Gửi thành công!");
          form.current.reset(); // Reset form sau khi gửi
        },
        (error) => {
          alert("😢 Gửi thất bại. Vui lòng thử lại.");
          console.log(error.text);
        }
      );
  };

  return (
    <Element name="Contact" className="contact">
    <div className="contact-container">
      <div className="contact-grid">
        {/* Left side - Contact Info */}
        <div className="contact-left">
          <h2>
            <span className="highlight-purple">Thông tin</span>{" "}
            <span className="highlight-orange">liên hệ</span>
          </h2>
          <div className="contact-detail">
            <span>📧</span>
            <p>dinhthihanh138@gmail.com</p>
          </div>
          <div className="contact-detail">
            <span>📞</span>
            <p>+855707768</p>
          </div>
          <div className="contact-detail">
            <span>📍</span>
            <p>Quận 12, TP. Hồ Chí Minh</p>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label htmlFor="name">Tên của bạn</label>
          <input name="name" type="text" placeholder="Nhập tên của bạn" required />

          <label htmlFor="email">Email của bạn</label>
          <input name="email" type="email" placeholder="Nhập email của bạn" required />

          <label htmlFor="message">Viết tin nhắn của bạn ở đây</label>
          <textarea
            name="message"
            placeholder="Nhập tin nhắn của bạn"
            rows="6"
            required
          ></textarea>
          <button className="submit-btn" type="submit">Gửi ngay</button>
        </form>
      </div>
    </div>
    </Element>
  );
};

export default Contact;

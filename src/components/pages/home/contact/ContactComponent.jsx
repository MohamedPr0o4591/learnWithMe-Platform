import React, { useRef, useState } from "react";
import "./ContactComponent.css";
import emailjs from "@emailjs/browser";

function ContactComponent() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  function sendEmail(e) {
    let flag;
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_vb5d7ut", "template_kdt464i", form.current, {
        publicKey: "D4Z9I3jewjCxeVQ1T",
      })
      .then(
        (_) => {
          alert("تم الارسال بنجاح");
        },
        (error) => {
          alert("حدث خطأ اثناء الارسال" + error.text);
        }
      );

    setLoading(false);
  }

  return (
    <div className="contact-component" id="contact">
      <form ref={form} onSubmit={sendEmail}>
        <h3>تواصل معنا</h3>

        <div className="input-box">
          <label htmlFor="name">الاسم</label>
          <input type="text" id="name" name="from_name" />
        </div>

        <div className="input-box">
          <label htmlFor="email" className="required">
            البريد الالكتروني
          </label>
          <input
            name="from_email"
            type="text"
            required
            id="email"
            className="input-ltr"
          />
        </div>

        <div className="input-box">
          <label htmlFor="content" className="required">
            الرسالة
          </label>
          <textarea id="content" name="message" required />
        </div>

        <input
          type="submit"
          value={`${loading ? "جاري الإرسال .." : "ارسال"}`}
          className={`${loading ? "btn-disabled" : ""}`}
        />
      </form>
    </div>
  );
}

export default ContactComponent;

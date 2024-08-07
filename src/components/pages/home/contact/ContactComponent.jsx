import React from "react";
import "./ContactComponent.css";

function ContactComponent() {
  return (
    <div className="contact-component" id="contact">
      <form>
        <h3>تواصل معنا</h3>

        <div className="input-box">
          <label htmlFor="name">الاسم</label>
          <input type="text" id="name" />
        </div>

        <div className="input-box">
          <label htmlFor="email" className="required">
            البريد الالكتروني
          </label>
          <input type="text" required id="email" className="input-ltr" />
        </div>

        <div className="input-box">
          <label htmlFor="content" className="required">
            الرسالة
          </label>
          <textarea id="content" required />
        </div>

        <input type="submit" value="ارسال" />
      </form>
    </div>
  );
}

export default ContactComponent;

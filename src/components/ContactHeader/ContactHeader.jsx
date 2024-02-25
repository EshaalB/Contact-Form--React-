import React from "react";
import styles from "./ContactHeader.module.css";
const ContactHeader = () => {
  return (
    <div className={`${styles.contact_section}`}>
      <h1>CONTACT US</h1>
      <p>
        You can connect with us through the contact form on this page, or by
        phone, email, or social media. We're here to help and would love to hear
        from you, whether you have a question, comment, or just want to chat.
        We'll respond to you as soon as possible.
      </p>
    </div>
  );
};

export default ContactHeader;

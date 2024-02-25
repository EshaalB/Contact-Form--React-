import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { BsFillSendFill } from "react-icons/bs";
import { useState } from "react";
var popUp = confirm("are you willing to work with us");
if (popUp == true) {
  alert("Great");
} else if (popUp == false) {
  alert("We understand,still check out our form");
}
const ContactForm = () => {
  const [name, setName] = useState("Eshaal");
  const [email, setEmail] = useState("eshaaldev@gmail.com");
  const [text, setText] = useState("Keep Grinding");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA CHAT"
            icon={<MdMessage fontSize="24px" />}
            linkUrl="https://www.whatsapp.com/"
          />
          <Button
            text="VIA CALL"
            icon={<FaPhoneAlt fontSize="24px" />}
            linkUrl="https://www.zoom.com/"
          />
        </div>
        <Button
          linkUrl="https://www.gmail.com/"
          isOutline={true}
          text="VIA EMAIL"
          icon={<HiMail fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button
              text="SUBMIT BUTTON"
              icon={<BsFillSendFill fontSize="24px" />}
            />
          </div>
          <div>
            <p>
              {" "}
              Your Name is: {name} <br></br>
              Your Email is: {email} <br></br>
              Your Message is: {text} <br></br>
            </p>
          </div>{" "}
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/contact.png" alt="contact image" className="image" />
      </div>
    </section>
  );
};

export default ContactForm;

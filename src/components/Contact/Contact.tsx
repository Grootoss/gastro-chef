import Faq from "../Faq/Faq";
import Order from "../Order/Order";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.band}>
      <Order />
      <Faq />
    </div>
  );
}

export default Contact;

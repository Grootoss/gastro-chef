import { Link } from "react-router-dom";
import { asset } from "../../utils/asset";
import styles from "./Footer.module.css";

const navLinks = [
  { id: "programs", label: "Программы питания", href: "#programs" },
  { id: "about", label: "О нас", href: "#about" },
  { id: "lunches", label: "Бизнес-ланчи", href: "#lunches" },
  { id: "shop", label: "Gastro Shop", href: "#shop" },
  { id: "blog", label: "Блог", href: "#blog" },
] as const;

const socials = [
  {
    id: "instagram",
    href: "https://instagram.com/",
    label: "Instagram",
    icon: asset("images/instagram.svg"),
  },
  {
    id: "facebook",
    href: "https://facebook.com/",
    label: "Facebook",
    icon: asset("images/facebook.svg"),
  },
  {
    id: "whatsapp",
    href: "#whatsapp",
    label: "WhatsApp",
    icon: asset("images/whatsup.svg"),
  },
  {
    id: "telegram",
    href: "https://t.me/",
    label: "Telegram",
    icon: asset("images/telegram.svg"),
  },
] as const;

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <nav className={styles.nav} aria-label="Навигация в подвале">
          {navLinks.map((item) => (
            <a key={item.id} className={styles.navLink} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.brandBlock}>
          <Link to="/" className={styles.brand} aria-label="GastroChef — на главную">
            <img
              className={styles.logo}
              src={asset("images/gastrochef-logo.svg")}
              alt=""
              width={360}
              height={150}
            />
          </Link>
          <p className={styles.tagline}>сервис здорового питания</p>
        </div>

        <div className={styles.meta}>
          <a className={styles.metaLink} href="#terms">
            Условия
            <br />
            сотрудничества
          </a>
          <a className={styles.metaLink} href="#faq">
            FAQ
          </a>

          <ul className={styles.socials}>
            {socials.map((item) => (
              <li key={item.id}>
                <a
                  className={styles.social}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={item.label}
                >
                  <img src={item.icon} alt="" width={20} height={20} />
                </a>
              </li>
            ))}
          </ul>

          <a className={styles.phone} href="tel:+779777723213">
            +7 797 777 23 213
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

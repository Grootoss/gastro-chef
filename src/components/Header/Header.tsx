import { useState } from "react";
import { Link } from "react-router-dom";
import { asset } from "../../utils/asset";
import styles from "./Header.module.css";

const navItems = [
  { id: "programs", label: "Программы питания", href: "#programs", accent: false },
  { id: "lunches", label: "Бизнес-ланчи", href: "#lunches", accent: false },
  { id: "shop", label: "Gastro Shop", href: "#shop", accent: true },
  { id: "about", label: "О нас", href: "#about", accent: false },
  { id: "blog", label: "Блог", href: "#blog", accent: false },
] as const;

const langs = [
  { id: "ru", label: "RU" },
  { id: "en", label: "EN" },
] as const;

function Header() {
  const [lang, setLang] = useState<(typeof langs)[number]["id"]>("ru");

  return (
    <header className={styles.header}>
      <div
        className={styles.elips}
        style={{ backgroundImage: `url(${asset("images/elips.jpg")})` }}
        aria-hidden="true"
      />

      <div className={styles.top}>
        <div className={styles.strip} aria-hidden="true" />

        <Link to="/" className={styles.logo} aria-label="GastroChef — на главную">
          <img
            className={styles.logoMark}
            src={asset("images/gastrochef-logo.svg")}
            alt=""
            width={165}
            height={69}
          />
          <span className={styles.tagline}>healthy ration</span>
        </Link>

        <nav className={styles.nav} aria-label="Основное меню">
          {navItems.map((item) => (
            <a
              key={item.id}
              className={item.accent ? styles.navLinkAccent : styles.navLink}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a
            className={styles.circleBtn}
            href="tel:+779777723213"
            aria-label="Позвонить"
          >
            <img src={asset("images/phone.svg")} alt="" width={27} height={31} />
          </a>

          <button
            type="button"
            className={styles.circleBtn}
            aria-label="Открыть меню"
          >
            <img src={asset("images/gamburger.svg")} alt="" width={25} height={20} />
          </button>
        </div>

        <a className={styles.phonePill} href="tel:+779777723213">
          +7 797 777 23 213
        </a>
      </div>

      <div className={styles.langs} role="group" aria-label="Язык">
        {langs.map((item) => (
          <button
            key={item.id}
            type="button"
            className={lang === item.id ? styles.langActive : styles.lang}
            aria-pressed={lang === item.id}
            onClick={() => setLang(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className={styles.product}>
        <img
          src={asset("images/header-product.jpg")}
          alt="Смузи GastroChef и авокадо"
          width={280}
          height={280}
        />
      </div>
    </header>
  );
}

export default Header;

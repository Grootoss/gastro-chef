import { useState } from "react";
import styles from "./Promo.module.css";

const slides = [
  {
    id: 1,
    titleBefore: "Detox программа – ",
    titleGreen: "вкусное очищение",
    titleAfter: " организма",
    textBefore: "8 бутылочек ",
    textGreen: "натуральных",
    textAfter: " смузи и фрешей.",
    priceLabel: "Пробный день всего:",
    price: "427 руб",
  },
  {
    id: 2,
    titleBefore: "Detox программа – ",
    titleGreen: "вкусное очищение",
    titleAfter: " организма",
    textBefore: "8 бутылочек ",
    textGreen: "натуральных",
    textAfter: " смузи и фрешей.",
    priceLabel: "Пробный день всего:",
    price: "427 руб",
  },
  {
    id: 3,
    titleBefore: "Detox программа – ",
    titleGreen: "вкусное очищение",
    titleAfter: " организма",
    textBefore: "8 бутылочек ",
    textGreen: "натуральных",
    textAfter: " смузи и фрешей.",
    priceLabel: "Пробный день всего:",
    price: "427 руб",
  },
  {
    id: 4,
    titleBefore: "Detox программа – ",
    titleGreen: "вкусное очищение",
    titleAfter: " организма",
    textBefore: "8 бутылочек ",
    textGreen: "натуральных",
    textAfter: " смузи и фрешей.",
    priceLabel: "Пробный день всего:",
    price: "427 руб",
  },
];

const rail = [
  { id: "kcal", label: "Ккал" },
  { id: "fish", label: "Рыба" },
  { id: "carrot", label: "Овощи" },
  { id: "water", label: "Вода" },
  { id: "meat", label: "Мясо" },
  { id: "scale", label: "Вес" },
] as const;

function Chevron({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg viewBox="0 0 12 20" aria-hidden="true" focusable="false">
      <path
        d={direction === "prev" ? "M10 2 2 10l8 8" : "M2 2l8 8-8 8"}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RailIcon({ id }: { id: (typeof rail)[number]["id"] }) {
  if (id === "kcal") {
    return <span className={styles.railKcal}>Ккал</span>;
  }

  const paths: Record<Exclude<(typeof rail)[number]["id"], "kcal">, string> = {
    fish: "M3 12c4-6 10-6 14 0-4 6-10 6-14 0zm14 0h3M8 10.5c.5 0 1 .4 1 1s-.5 1-1 1",
    carrot:
      "M12 3c1 2 1 3 0 5 3 1 5 4 5 7-3 0-6-1-8-3-2 2-5 3-8 3 0-3 2-6 5-7-1-2-1-3 0-5l3 1 3-1z",
    water: "M9 3h6v2l2 3v9a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4V8l2-3V3zm1 7h4",
    meat: "M5 10c0-3 3-5 7-5s7 2 7 5-3 7-7 7-7-4-7-7zm3.5-.5h1v1h-1zm5 0h1v1h-1z",
    scale:
      "M5 7h14v2l-2 1v7H7v-7L5 9V7zm7 0V4m-3 13h6M9 10h6",
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d={paths[id]}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Promo() {
  const [index, setIndex] = useState(1);
  const slide = slides[index];

  function go(direction: -1 | 1) {
    setIndex((current) => (current + direction + slides.length) % slides.length);
  }

  return (
    <section className={styles.section} aria-label="Промо">
      <div
        className={styles.visual}
        aria-hidden="true"
      />

      <ul className={styles.rail} aria-hidden="true">
        {rail.map((item) => (
          <li key={item.id} className={styles.railItem}>
            <RailIcon id={item.id} />
          </li>
        ))}
      </ul>

      <div className={styles.inner}>
        <h1 className={styles.title}>
          {slide.titleBefore}
          <span>{slide.titleGreen}</span>
          {slide.titleAfter}
        </h1>

        <p className={styles.text}>
          {slide.textBefore}
          <span>{slide.textGreen}</span>
          {slide.textAfter}
        </p>

        <div className={styles.cta}>
          <a className={styles.order} href="#order">
            Заказать
          </a>

          <p className={styles.priceRow}>
            <span className={styles.priceLabel}>{slide.priceLabel}</span>
            <strong className={styles.price}>{slide.price}</strong>
          </p>
        </div>

        <div className={styles.nav}>
          <button
            type="button"
            className={styles.arrow}
            aria-label="Предыдущий слайд"
            onClick={() => go(-1)}
          >
            <Chevron direction="prev" />
          </button>

          <div className={styles.dots} aria-hidden="true">
            {slides.map((item, i) => (
              <span
                key={item.id}
                className={i === index ? styles.dotActive : styles.dot}
              />
            ))}
          </div>

          <button
            type="button"
            className={styles.arrow}
            aria-label="Следующий слайд"
            onClick={() => go(1)}
          >
            <Chevron direction="next" />
          </button>
        </div>
      </div>

      <aside className={styles.tip}>
        Мы онлайн! Консультация и -30% в чате.{" "}
        <strong>Без звонка!</strong>
      </aside>

      <div className={styles.float}>
        <a className={styles.chat} href="#chat" aria-label="Открыть чат">
          <img src="/images/chat.svg" alt="" width={28} height={28} />
          <span className={styles.badge}>1</span>
        </a>
        <div className={styles.socials}>
          <a
            className={styles.social}
            href="https://t.me/"
            target="_blank"
            rel="noreferrer"
            aria-label="Telegram"
          >
            <img src="/images/telegram.svg" alt="" width={20} height={20} />
          </a>
          <a
            className={styles.social}
            href="#whatsapp"
            aria-label="WhatsApp"
          >
            <img src="/images/whatsup.svg" alt="" width={20} height={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Promo;

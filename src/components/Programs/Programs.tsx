import { useState } from "react";
import styles from "./Programs.module.css";

const tabs = [
  { id: "nutrition", label: "Программы питания" },
  { id: "special", label: "Специальные программы" },
] as const;

const plans = [
  { id: "express", name: "EXPRESS FIT", kcal: 800 },
  { id: "slim", name: "SLIM", kcal: 1000 },
  { id: "fitness", name: "FITNESS", kcal: 1300 },
  { id: "balance", name: "BALANCE", kcal: 1600 },
  { id: "balance-plus", name: "BALANCE +", kcal: 1800 },
  { id: "strong", name: "STRONG", kcal: 2000 },
  { id: "maxi", name: "MAXI FIT", kcal: 2400 },
];

const prices = [
  {
    id: 1,
    label: "Тестовый день",
    middle: "510 руб",
    current: "357 руб",
    middleStrike: true,
  },
  {
    id: 2,
    label: "1 день",
    middle: "",
    current: "510 руб",
    middleStrike: false,
  },
  {
    id: 3,
    label: "от 7 дней",
    middle: "510 руб",
    current: "490 руб",
    middleStrike: true,
  },
  {
    id: 4,
    label: "от 14 дней",
    middle: "510 руб",
    current: "470 руб",
    middleStrike: true,
  },
  {
    id: 5,
    label: "от 30 дней",
    middle: "510 руб",
    current: "445 руб",
    middleStrike: true,
  },
  {
    id: 6,
    label: "Завтрак и ужин",
    middle: "-15%",
    current: "433 руб",
    middleStrike: false,
  },
];

const days = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"] as const;

const meals = [
  {
    id: 1,
    title: "Завтрак",
    time: "7:00 - 9:00",
    items: [{ name: "Фриттата с сыром и цукини", weight: "170гр" }],
  },
  {
    id: 2,
    title: "2-й завтрак",
    time: "10:00 - 12:00",
    items: [
      { name: "Фермерский йогурт", weight: "200гр" },
      { name: "Полезное печенье из сухофруктов и орехов", weight: "2 шт" },
    ],
  },
  {
    id: 3,
    title: "Обед",
    time: "13:00 - 15:00",
    items: [
      { name: "Люля-кебаб из индейки", weight: "100гр" },
      { name: "Летний салат с оливками и сыром", weight: "100гр" },
    ],
  },
  {
    id: 4,
    title: "Полдник",
    time: "16:00 - 17:30",
    items: [{ name: "Творожный суфле с какао и вишней", weight: "100гр" }],
  },
  {
    id: 5,
    title: "Ужин",
    time: "19:00 - 20:00",
    items: [
      { name: "Рыбный террин", weight: "100гр" },
      { name: "Овощи гриль", weight: "150гр" },
    ],
  },
];

function Programs() {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("nutrition");
  const [activeId, setActiveId] = useState("fitness");
  const [day, setDay] = useState<(typeof days)[number]>("ПН");
  const active = plans.find((plan) => plan.id === activeId) ?? plans[2];

  return (
    <section className={styles.section} aria-label="Программы питания">
      <div className={styles.wrap}>
        <div className={styles.tabs}>
          {tabs.map((item) => (
            <button
              key={item.id}
              type="button"
              className={tab === item.id ? styles.tabActive : styles.tab}
              onClick={() => setTab(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <ul className={styles.plans}>
          {plans.map((plan) => {
            const isActive = plan.id === activeId;

            return (
              <li key={plan.id}>
                <button
                  type="button"
                  className={isActive ? styles.planActive : styles.plan}
                  onClick={() => setActiveId(plan.id)}
                >
                  <span className={styles.planName}>{plan.name}</span>
                  <span className={styles.planKcal}>{plan.kcal} ккал</span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className={styles.board}>
          <div className={styles.aside}>
            <article className={styles.card}>
              <h2 className={styles.cardTitle}>
                {active.name}
                <span>{active.kcal} ккал</span>
              </h2>
              <p className={styles.cardText}>
                Программа здорового питания Express Fit. Идеально для: похудения
                в кратчайшие сроки, повышения энергии и сил, снижения веса при
                сидячем образе жизни.
              </p>
            </article>

            <ul className={styles.prices}>
              {prices.map((row) => (
                <li key={row.id} className={styles.priceRow}>
                  <span className={styles.priceLabel}>{row.label}</span>
                  <span
                    className={
                      row.middleStrike ? styles.priceOld : styles.priceMiddle
                    }
                  >
                    {row.middle}
                  </span>
                  <span className={styles.priceCurrent}>{row.current}</span>
                </li>
              ))}
            </ul>

            <a className={styles.order} href="#order">
              Заказать
            </a>
          </div>

          <div className={styles.schedule}>
            <div className={styles.days} role="tablist" aria-label="Дни недели">
              {days.map((item) => (
                <button
                  key={item}
                  type="button"
                  role="tab"
                  aria-selected={day === item}
                  className={day === item ? styles.dayActive : styles.day}
                  onClick={() => setDay(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className={styles.menu}>
              {meals.map((meal) => (
                <div key={meal.id} className={styles.meal}>
                  <div className={styles.mealHead}>
                    <strong>{meal.title}</strong>
                    <span>{meal.time}</span>
                  </div>
                  <ul className={styles.mealList}>
                    {meal.items.map((item) => (
                      <li key={item.name}>
                        <span className={styles.mealName}>{item.name}</span>
                        <span className={styles.mealWeight}>{item.weight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Programs;

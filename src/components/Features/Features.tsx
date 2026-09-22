import styles from "./Features.module.css";

const features = [
  {
    id: 1,
    icon: "/images/features/feature-1.svg",
    text: "Бережём природу.\nЭко-тара и проборы.",
  },
  {
    id: 2,
    icon: "/images/features/feature-2.svg",
    text: "28 дней без повторения,\nболее 300 блюд!",
  },
  {
    id: 3,
    icon: "/images/features/feature-3.svg",
    text: "Бесплатно заменяем\nблюда и ингредиенты.",
  },
  {
    id: 4,
    icon: "/images/features/feature-4.svg",
    text: "Готовим ночью, упаковываем\nи отправляем Вам!",
  },
  {
    id: 5,
    icon: "/images/features/feature-5.svg",
    text: "Ежедневная удобная\nи бесплатная доставка\nс 6:00 до 10:00",
  },
  {
    id: 6,
    icon: "/images/features/feature-6.svg",
    text: "Сохраняем Вашу энергию\nи до 14 часов в неделю\nосвобождая от готовки!",
  },
];

function Features() {
  return (
    <section className={styles.section} aria-label="Преимущества">
      <ul className={styles.grid}>
        {features.map((item) => (
          <li key={item.id} className={styles.item}>
            <img
              className={styles.icon}
              src={item.icon}
              alt=""
              width={64}
              height={64}
            />
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Features;

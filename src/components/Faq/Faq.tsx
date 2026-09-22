import { useState } from "react";
import styles from "./Faq.module.css";

const items = [
  {
    id: 1,
    question: "Как осуществляется доставка правильного питания?",
    answer:
      "Доставляем ежедневно с 6:00 до 10:00 бесплатно. Курьер привезёт рацион в удобное для вас место по выбранному адресу.",
  },
  {
    id: 2,
    question: "Можно ли менять время доставки\\место?",
    answer:
      "Да. Время и адрес доставки можно изменить заранее в личном кабинете или через службу поддержки.",
  },
  {
    id: 3,
    question: "Как и в чем приезжает еда?",
    answer:
      "Блюда упакованы в эко-тару с приборами. Каждое блюдо подписано и готово к разогреву.",
  },
  {
    id: 4,
    question: "Когда Вы готовите?",
    answer:
      "Готовим ночью, сразу упаковываем и утром отправляем вам свежий рацион.",
  },
  {
    id: 5,
    question: "Какие продукты Вы используете?",
    answer:
      "Используем свежие качественные продукты проверенных поставщиков. Без усилителей вкуса и лишних добавок.",
  },
  {
    id: 6,
    question: "Я буду есть одно и то же?",
    answer:
      "Нет. Меню составлено так, чтобы 28 дней блюда не повторялись — более 300 позиций в ротации.",
  },
  {
    id: 7,
    question: "У меня аллергия и непереносимость определенных продуктов",
    answer:
      "Бесплатно заменяем блюда и ингредиенты с учётом ваших ограничений. Укажите их при оформлении заказа.",
  },
  {
    id: 8,
    question: "В какой очередности все есть?",
    answer:
      "Следуйте подписям на упаковке и рекомендованному времени приёма пищи — от завтрака до ужина.",
  },
  {
    id: 9,
    question: "Можно ли замораживать программу?",
    answer:
      "Да. Программу можно поставить на паузу — напишите в поддержку, и мы перенесём даты доставки.",
  },
];

function Faq() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className={styles.section} aria-label="Часто задаваемые вопросы">
      <h2 className={styles.heading}>Часто задаваемые вопросы</h2>

      <ul className={styles.list}>
        {items.map((item) => {
          const open = openId === item.id;

          return (
            <li key={item.id} className={styles.item}>
              <button
                type="button"
                className={styles.trigger}
                aria-expanded={open}
                onClick={() => setOpenId(open ? null : item.id)}
              >
                <span className={styles.question}>{item.question}</span>
                <span
                  className={open ? styles.chevronOpen : styles.chevron}
                  aria-hidden
                >
                  ›
                </span>
              </button>
              {open ? <p className={styles.answer}>{item.answer}</p> : null}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Faq;

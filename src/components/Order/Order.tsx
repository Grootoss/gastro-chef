import { useState } from "react";
import styles from "./Order.module.css";

function isNameValid(value: string) {
  return value.trim().length > 0;
}

function isPhoneValid(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 11;
}

function Order() {
  const [name, setName] = useState("Ольга");
  const [phone, setPhone] = useState("70000000000");
  const [testDay, setTestDay] = useState(true);
  const [agree, setAgree] = useState(true);

  const nameOk = isNameValid(name);
  const phoneOk = isPhoneValid(phone);

  return (
    <section className={styles.section} aria-label="Оформить заказ">
      <h2 className={styles.heading}>Оформить заказ</h2>
      <p className={styles.subtitle}>
        Обсудите все детали заказа по телефону или сами укажите все подробности
        онлайн
      </p>

      <form
        className={styles.form}
        onSubmit={(event) => event.preventDefault()}
      >
        <label className={styles.field}>
          <span className={nameOk ? styles.labelOk : styles.labelError}>
            Имя
          </span>
          <span className={styles.inputWrap}>
            <input
              className={styles.input}
              type="text"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <span
              className={nameOk ? styles.dotOk : styles.dotError}
              aria-hidden
            />
          </span>
        </label>

        <label className={styles.field}>
          <span className={phoneOk ? styles.labelOk : styles.labelError}>
            Номер телефона
          </span>
          <span className={styles.inputWrap}>
            <input
              className={styles.input}
              type="tel"
              name="phone"
              autoComplete="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
            <span
              className={phoneOk ? styles.dotOk : styles.dotError}
              aria-hidden
            />
          </span>
        </label>

        <label className={styles.check}>
          <input
            className={styles.checkInput}
            type="checkbox"
            checked={testDay}
            onChange={(event) => setTestDay(event.target.checked)}
          />
          <span className={styles.checkMark} aria-hidden />
          <span className={styles.checkText}>
            Тест-день! Получить скидку -30%?
          </span>
        </label>

        <label className={styles.check}>
          <input
            className={styles.checkInput}
            type="checkbox"
            checked={agree}
            onChange={(event) => setAgree(event.target.checked)}
          />
          <span className={styles.checkMark} aria-hidden />
          <span className={styles.checkText}>
            Согласен с{" "}
            <a className={styles.link} href="#terms">
              условиями сотрудничества
            </a>
          </span>
        </label>

        <button className={styles.btnOutline} type="button">
          Заказ по телефону
        </button>

        <p className={styles.or}>ИЛИ</p>

        <button className={styles.btnSolid} type="submit">
          Онлайн заказ
        </button>
      </form>
    </section>
  );
}

export default Order;

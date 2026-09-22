import { useEffect, useRef } from "react";
import styles from "./FoodPhotos.module.css";

const photos = [
  {
    id: 1,
    mobile: "/images/food.png",
    tablet: "/images/food/food-tablet-1.jpg",
    desktop: "/images/food/food-desktop-1.jpg",
    alt: "Готовые рационы в контейнерах",
  },
  {
    id: 2,
    mobile: "/images/food.png",
    tablet: "/images/food/food-tablet-2.jpg",
    desktop: "/images/food/food-desktop-2.jpg",
    alt: "Блюдо GastroChef с соусом",
  },
  {
    id: 3,
    mobile: "/images/food.png",
    tablet: "/images/food/food-tablet-3.jpg",
    desktop: "/images/food/food-desktop-3.jpg",
    alt: "Detox смузи и готовые рационы",
  },
  {
    id: 4,
    mobile: "/images/food.png",
    tablet: "/images/food/food-tablet-2.jpg",
    desktop: "/images/food/food-desktop-4.jpg",
    alt: "Лосось с брокколи и томатами",
  },
  {
    id: 5,
    mobile: "/images/food.png",
    tablet: "/images/food/food-tablet-3.jpg",
    desktop: "/images/food/food-desktop-5.jpg",
    alt: "Курица гриль и салаты",
  },
  {
    id: 6,
    mobile: "/images/food.png",
    tablet: "/images/food/food-tablet-1.jpg",
    desktop: "/images/food/food-desktop-6.jpg",
    alt: "Салат с томатами и фетой",
  },
];

function FoodPhotos() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector(`.${styles.card}`);
    if (!(card instanceof HTMLElement)) return;

    const stylesMap = getComputedStyle(track);
    const gap = Number.parseFloat(stylesMap.columnGap || stylesMap.gap) || 12;
    const index = 1;
    track.scrollLeft = index * (card.offsetWidth + gap);
  }, []);

  return (
    <section className={styles.section} aria-label="Фото блюд">
      <h2 className={styles.heading}>Фото блюд</h2>

      <div className={styles.track} role="list" ref={trackRef}>
        {photos.map((photo) => (
          <article key={photo.id} className={styles.card} role="listitem">
            <picture>
              <source media="(min-width: 1920px)" srcSet={photo.desktop} />
              <source media="(min-width: 768px)" srcSet={photo.tablet} />
              <img
                className={styles.image}
                src={photo.mobile}
                alt={photo.alt}
                width={240}
                height={346}
                draggable={false}
              />
            </picture>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FoodPhotos;

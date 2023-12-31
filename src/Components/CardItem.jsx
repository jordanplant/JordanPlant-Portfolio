import React from "react";
import styles from "./Projects.module.css";

function CardItem(props) {
  return (
    <li className={styles["cards__item"]}>
      <div
        className={styles["cards__item__pic-wrap"]}
        data-category={props.label}
      >
        <img
          src={props.src}
          alt={props.title}
          className={styles["cards__item__img"]}
        />
      </div>
      <div className={styles["cards__item__info"]}>
        <a
          className={styles["cards__item__link"]}
          href={props.path}
          // target="_blank"
          // rel="noopener noreferrer"
        >
          <h3 className={styles["cards__item__title"]}>{props.title}</h3>
        </a>
        <p className={styles["cards__item__text"]}>{props.text}</p>
        {props.githubLink && (
          <a
            className={styles["card__github"]}
            href={props.githubLink}
            // target="_blank"
            // rel="noopener noreferrer"
            aria-label="Github"
          >
            <i className="fa-brands fa-github fa-2xl"></i>
          </a>
        )}
      </div>
    </li>
  );
}

export default CardItem;

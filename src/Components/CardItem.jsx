import React from "react";
import styles from "../Sections/Projects.module.css";

function CardItem(props) {
  return (
    <li className={`${styles["cards__item"]} halo-effect`}>
      <a
        className={styles["cards__item__link"]}
        href={props.path}
        target="_blank"
        rel="noopener noreferrer"
      >
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
          <h3 className={styles["cards__item__title"]}>{props.title}</h3>

          <p className={styles["cards__item__text"]}>{props.text}</p>
          {props.githubLink && (
            <a
              className={styles["card__github"]}
              href={props.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <i className="fa-brands fa-github fa-2xl"></i>
            </a>
          )}
        </div>
      </a>
    </li>
  );
}

export default CardItem;

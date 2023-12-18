import React from "react";

function CardItem(props) {
  return (
    <li className="cards__item">
      <div className="cards__item__pic-wrap" data-category={props.label}>
        <img src={props.src} alt={props.title} className="cards__item__img" />
      </div>
      <div className="cards__item__info">
        <a
          className="cards__item__link"
          href={props.path}
          // target="_blank"
          // rel="noopener noreferrer"
        >
          <h2 className="cards__item__title">{props.title}</h2>
        </a>
        <p className="cards__item__text">{props.text}</p>
        {props.githubLink && (
          <a
            className="card__github {
"
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

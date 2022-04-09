import Heading from "./Heading";
import Pragraph from "./Pragraph";
import arrowRight from "../imgs/arrow-right.svg";

function FashionCard({
  imgCard,
  name,
  date,
  time,
  comments,
  headingText,
  pragraphText,
  linkText,
  userImg,
  dataFashion = "fashion",
}) {
  return (
    <div className="fashion-card">
      <div className="fashion-card__img-box" data-fashion={dataFashion}>
        <img
          src={imgCard}
          alt="fashion img"
          className="fashion-card__img img-fluid"
        />
      </div>

      <div className="fashion-card__user-comment">
        <ul className="fashion-card__user-comment--list">
          <li className="fashion-card__user-comment--item">
            <img
              src={userImg}
              alt="user img"
              className="fashion-card__user-comment-img"
            />
            <p className="fahion-card__user-comment--name">{name}</p>
          </li>
          <li className="fashion-card__user-comment--item  fashion-card__user-comment--item-date">
            {date}
          </li>
          <li className="fashion-card__user-comment--item  fashion-card__user-comment--item-time">
            {time}
          </li>
          <li className="fashion-card__user-comment--item  fashion-card__user-comment--item-comments">
            {comments}
          </li>
        </ul>
        <div className="fashion-card__comment">
          <Heading classes="mb-md" type="quaternary">
            {headingText}
          </Heading>
          <Pragraph classes="mb-lg" color="grey">
            {pragraphText}
          </Pragraph>
          <a href="/" className="fashion-card__link">
            {linkText} <img src={arrowRight} alt="arrow right" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FashionCard;

function UserComment({
  img,
  useName,
  date,
  time,
  commentsNumber,
  classes = "",
}) {
  return (
    <ul className={`user-comment ${classes}`}>
      <li className="user-comment__user">
        <img src={img} alt="img user" className="user-comment__img" />
        <p className="user-comment__name">{useName}</p>
      </li>
      <li className="user-comment__date">{date}</li>
      <li className="user-comment__time">{time}</li>
      <li className="user-comment__comments">{commentsNumber} comments</li>
    </ul>
  );
}

export default UserComment;

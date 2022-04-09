import { Link } from "react-router-dom";

function Button({
  children,
  type = "primary-white",
  href = "/",
  classes = "",
  tag = "link",
}) {
  switch (tag) {
    case "link":
      return (
        <Link to={href} className={`btn btn--${type} ${classes}`}>
          {children}
        </Link>
      );
    case "buttonSubmit-1":
      return (
        <Link
          type="submit"
          to={href}
          className={`btn btn--submit-1 ${classes}`}
        >
          {children}
        </Link>
      );
    case "buttonSubmit-2":
      return (
        <Link
          type="submit"
          to={href}
          className={`btn btn--submit-2 ${classes}`}
        >
          {children}
        </Link>
      );
    default:
      return null;
  }
}

export default Button;

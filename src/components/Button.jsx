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
        <a href={href} className={`btn btn--${type} ${classes}`}>
          {children}
        </a>
      );
    case "buttonSubmit-1":
      return (
        <button
          type="submit"
          href={href}
          className={`btn btn--submit-1 ${classes}`}
        >
          {children}
        </button>
      );
    case "buttonSubmit-2":
      return (
        <button
          type="submit"
          href={href}
          className={`btn btn--submit-2 ${classes}`}
        >
          {children}
        </button>
      );
    default:
      return null;
  }
}

export default Button;

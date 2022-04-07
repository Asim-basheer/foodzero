function Heading({ children, type = "primary", classes = "", dashed = true }) {
  switch (type) {
    case "primary":
      return (
        <h1 className={`heading heading--primary ${classes}`}>{children}</h1>
      );
    case "secondary":
      return (
        <h2 className={`heading heading--secondary ${classes}`}>{children}</h2>
      );
    case "tertiary":
      return (
        <h3 className={`heading heading--tertiary ${classes}`}>{children}</h3>
      );
    case "quaternary":
      return (
        <h4
          className={`heading heading--quaternary ${classes} ${
            dashed ? "heading--quaternary-dashed" : ""
          }`}
        >
          {children}
        </h4>
      );
    case "heading-des":
      return <h5 className={`heading heading--des ${classes}`}>{children}</h5>;

    default:
      return null;
  }
}

export default Heading;

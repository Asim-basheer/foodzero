function Pragraph({ children, classes = "", color = "white" }) {
  return <p className={`pragraph pragraph--${color} ${classes}`}>{children}</p>;
}

export default Pragraph;

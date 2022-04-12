import Container from "./Container";
import Heading from "./Heading";
import Pragraph from "./Pragraph";

function MenuSection({
  children,
  img,
  title,
  titleSub,
  contentLeft = false,
  lastSectionInPage = false,
  classes = "",
}) {
  return (
    <section
      className={`menu-section ${lastSectionInPage ? "last" : ""} ${classes}`}
    >
      <Container>
        <div className="main-heading mb-xl t-center">
          <Heading classes="dark t-cap mb-sm" type="tertiary">
            {title}
          </Heading>
          <Pragraph classes="t-first-upper " color="grey">
            {titleSub}
          </Pragraph>
        </div>

        <div className="menu-section__container">
          <div className="menu-section__img-box">
            <img
              src={img}
              alt="menu section img"
              className="menu-section__img img-fluid"
            />
          </div>

          <div className={`menu-section__content ${contentLeft ? "left" : ""}`}>
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default MenuSection;

import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import Container from "./Container";
import Heading from "./Heading";
import Pragraph from "./Pragraph";

function Navigation({ toggleState, handleToggleState }) {
  const links = [
    {
      herf: "/",
      name: "home",
    },
    {
      herf: "/menu",
      name: "menu",
    },
    {
      herf: "/blogs",
      name: "blogs",
    },
    {
      herf: "/about",
      name: "about",
    },
    {
      herf: "/contact",
      name: "contact",
    },
  ];

  return (
    <nav className={`${toggleState ? "navigation active" : "navigation"}`}>
      <div className="navigation__close">
        <AiOutlineClose onClick={() => handleToggleState(false)} />
      </div>
      <Container>
        <div className="navigation__container">
          <ul className="navigation__list">
            {links.map((link) => (
              <li className="navigation__item" key={link.name}>
                <NavLink
                  to={link.herf}
                  className="navigation__link"
                  onClick={() => handleToggleState(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="navigation__contact">
            <Heading classes="white t-cap mb-md dashed-white" type="quaternary">
              Contact
            </Heading>
            <Pragraph classes="mb-md">
              +1+86 852 346 000 <br /> info@foodzero.com
            </Pragraph>
            <Pragraph classes="mb-md">
              1959 Sepulveda Blvd. <br /> Culver City, CA, 90230
            </Pragraph>
            <div className="navigation__contact__icons">
              <img
                src="https://www4.0zz0.com/2022/04/04/23/242264347.png"
                alt="Icon_instagram"
              />
              <img
                src="https://www4.0zz0.com/2022/04/04/23/144673952.png"
                alt="Icon_twitter"
              />
              <img
                src="https://www4.0zz0.com/2022/04/04/23/543673937.png"
                alt="Icon_facebook"
              />
              <img
                src="https://www4.0zz0.com/2022/04/04/23/130368747.png"
                alt="Icon_youtube"
              />
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navigation;

import Container from "./Container";
import LogoWhite from "../imgs/logo-white.png";
import Toggle from "./Toggle";
import Button from "./Button";
import Pragraph from "./Pragraph";

function Navbar() {
  return (
    <nav className="navbar">
      <Container>
        <div className="navbar__container">
          <div className="navbar__logo-box">
            <img src={LogoWhite} alt="logo" className="navbar__logo" />
          </div>

          <Toggle />

          <div className="navbar__contact-us">
            <Pragraph>+86 852 346 000</Pragraph>
            <Button>reservations</Button>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;

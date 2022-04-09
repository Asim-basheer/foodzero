import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Container from "./Container";
import LogoWhite from "../imgs/logo-white.png";
import Toggle from "./Toggle";
import Button from "./Button";
import Pragraph from "./Pragraph";

function Navbar() {
  const { pathname } = useLocation();
  const [
    isScrollValueMoreThanHeaderHeight,
    setIsScrollValueMoreThanHeaderHeight,
  ] = useState(false);

  //here 96(px) - height of current header

  useEffect(() => {
    const handleScroll = () => {
      setIsScrollValueMoreThanHeaderHeight(window.scrollY > 90);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={
        isScrollValueMoreThanHeaderHeight
          ? `navbar scrolled ${pathname === "/" ? "bg-green" : ""}`
          : `navbar ${pathname === "/" ? "bg-green" : ""}`
      }
    >
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

import Button from "./Button";
import Container from "./Container";
import Heading from "./Heading";
import Pragraph from "./Pragraph";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__container">
          <div className="footer__logo">
            <Heading classes="t-cap white" type="secondary">
              food <br /> zero.
            </Heading>
          </div>
          <div className="footer__content">
            <Heading type="heading-des" classes="t-cap white mb-lg">
              contact
            </Heading>
            <Pragraph classes="mb-md">
              +1+86 852 346 000 <br /> info@foodzero.com
            </Pragraph>
            <Pragraph>
              1959 Sepulveda Blvd. <br /> Culver City, CA, 90230
            </Pragraph>
          </div>
          <div className="footer__form">
            <Heading type="heading-des" classes="t-cap white mb-lg">
              never miss a recipe
            </Heading>
            <div className="footer__form--box mb-md">
              <div>
                <input type="email" name="" id="" placeholder="Email Address" />
              </div>
              <Button tag="buttonSubmit-2">subscribe</Button>
            </div>
            <Pragraph classes="text-small t-first-upper">
              join our subscribers and get best recipe delivered each week!
            </Pragraph>
          </div>
        </div>
      </Container>
      <div className="footer__copyright">
        <Container>
          <div className="footer__copyright__container">
            <Pragraph classes="text-big">
              © 2020 Zero Inc. All rights Reserved
            </Pragraph>

            <div className="footer__copyright__icons">
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
        </Container>
      </div>
    </footer>
  );
}

export default Footer;

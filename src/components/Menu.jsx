import React from "react";
import BookNow from "./BookNow";
import Container from "./Container";
import Heading from "./Heading";
import MenuSection from "./MenuSection";
import Pragraph from "./Pragraph";

function Menu() {
  return (
    <div className="menu">
      <section className="menu__hero-section">
        <Container>
          <div className="menu__hero-section__container">
            <div className="menu__hero-section__content">
              <Heading classes={"mb-md t-cap white"}>
                view our <br /> new menu
              </Heading>
              <Pragraph>The freshest ingredients for you every day</Pragraph>
            </div>
          </div>
        </Container>
      </section>

      <MenuSection
        img="https://www4.0zz0.com/2022/04/08/21/966203206.png"
        title="Starters"
        titleSub="this is a section of your menu. Give your section a brief description"
      >
        <div className="heading-description">
          <Heading classes="dark mb-lg t-right" type="quaternary">
            <span>$</span>20
          </Heading>
          <Heading classes="dark t-cap mb-lg" type="secondary">
            Grilled Okra and <br /> Tomatoes
          </Heading>
          <Pragraph color="grey ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Pragraph>
        </div>
        <div className="heading-description">
          <Heading classes="dark mb-lg t-right" type="quaternary">
            <span>$</span>18
          </Heading>
          <Heading classes="dark t-cap mb-lg" type="secondary">
            Cucumber Salad
          </Heading>
          <Pragraph color="grey ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Pragraph>
        </div>
        <div className="heading-description">
          <Heading classes="dark mb-lg t-right" type="quaternary">
            <span>$</span>12
          </Heading>
          <Heading classes="dark t-cap mb-lg" type="secondary">
            Basil Pancakes
          </Heading>
          <Pragraph color="grey ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Pragraph>
        </div>
      </MenuSection>
      <MenuSection
        img="https://www4.0zz0.com/2022/04/08/21/823454805.png"
        title="Mains"
        titleSub="this is a section of your menu. Give your section a brief description"
        contentLeft={true}
      >
        <div className="heading-description">
          <Heading classes="dark mb-lg t-right" type="quaternary">
            <span>$</span>20
          </Heading>
          <Heading classes="dark t-cap mb-lg" type="secondary">
            Deep Sea Snow White <br /> Cod Fillet
          </Heading>
          <Pragraph color="grey ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Pragraph>
        </div>
        <div className="heading-description">
          <Heading classes="dark mb-lg t-right" type="quaternary">
            <span>$</span>22
          </Heading>
          <Heading classes="dark t-cap mb-lg" type="secondary">
            Steak With Rosemary <br /> Butter
          </Heading>
          <Pragraph color="grey ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Pragraph>
        </div>
        <div className="heading-description">
          <Heading classes="dark mb-lg t-right" type="quaternary">
            <span>$</span>20
          </Heading>
          <Heading classes="dark t-cap mb-lg" type="secondary">
            Basil Pancakes
          </Heading>
          <Pragraph color="grey ">
            Steaks with Grilled <br /> Kimchi
          </Pragraph>
        </div>
      </MenuSection>
      <MenuSection
        img="https://www4.0zz0.com/2022/04/08/21/759518162.png"
        title="Pastries & Drinks"
        titleSub="this is a section of your menu. Give your section a brief description"
        lastSectionInPage={true}
      >
        <div className="heading-description">
          <Heading classes="dark mb-lg t-right" type="quaternary">
            <span>$</span>158
          </Heading>
          <Heading classes="dark t-cap mb-lg" type="secondary">
            Wine Pairing
          </Heading>
          <Pragraph color="grey ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Pragraph>
        </div>
        <div className="heading-description">
          <Heading classes="dark mb-lg t-right" type="quaternary">
            <span>$</span>168
          </Heading>
          <Heading classes="dark t-cap mb-lg" type="secondary">
            Natural Wine Pairing
          </Heading>
          <Pragraph color="grey ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Pragraph>
        </div>
        <div className="heading-description">
          <Heading classes="dark mb-lg t-right" type="quaternary">
            <span>$</span>90
          </Heading>
          <Heading classes="dark t-cap mb-lg" type="secondary">
            Whisky Flyer
          </Heading>
          <Pragraph color="grey ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Pragraph>
        </div>
      </MenuSection>

      <BookNow />
    </div>
  );
}

export default Menu;

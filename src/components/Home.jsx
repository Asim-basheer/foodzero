import Heading from "./Heading";
import Container from "./Container";
import Pragraph from "./Pragraph";

import { IoFishOutline } from "react-icons/io5";
import { FaCarrot } from "react-icons/fa";
import { GiCutLemon } from "react-icons/gi";
import BookNow from "./BookNow";
import FashionCard from "./FashionCard";
import Row from "./Row";

function Home() {
  return (
    <div className="home">
      {/* start hero section part one */}
      <section className="home__hero-section-1">
        <Container>
          <div className="home__hero-section-1__container">
            <div className="home__hero-section-1__content">
              <Heading classes={"mb-lg t-first-upper white"}>
                healthy{" "}
                <span className="t-first-upper d-inline-block">eating</span>
                <br />
                is important <br /> part of lifestyle
              </Heading>
              <Pragraph classes="w-75 mb-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                congue arcu
              </Pragraph>
              <Pragraph classes="home__hero-section-1__scroll t-first-upper">
                scroll ------------------------
              </Pragraph>
            </div>
            <div className="home__hero-section-1__img-box">
              <img
                src="https://www9.0zz0.com/2022/03/31/13/162292686.png"
                alt="hero section img"
                className="img-fluid"
              />
            </div>
          </div>
        </Container>
      </section>
      {/* end hero section part one */}

      {/* start hero section part two */}

      <section className="home__hero-section-2">
        <Container>
          <div className="home__hero-section-2__container">
            <div className="home__hero-section-2__content-left">
              <div className="home__hero-section-2__img-box-left mb-xl">
                <img
                  src="https://www3.0zz0.com/2022/03/31/14/528860016.png"
                  alt="home__hero section img"
                  className="img-fluid"
                />
              </div>
              <div className="home__hero-section-2__heading">
                <Heading classes="white mb-lg t-first-upper" type="secondary">
                  start to plan <br /> your diet today
                </Heading>
                <Pragraph classes="mb-xl w-60">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                  congue arcu
                </Pragraph>
              </div>
            </div>

            <div className="home__hero-section-2__content-right">
              <div className="home__hero-section__content-right">
                <Pragraph classes="mb-xl w-90">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                  congue arcu
                </Pragraph>
              </div>
              <div className="home__hero-section-2__img-box-right">
                <img
                  src="https://www3.0zz0.com/2022/03/31/14/890962751.png"
                  alt="hero section img"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* end hero section part two */}

      {/* start menu section */}
      <section className="home__our-menu-section">
        <Container>
          <div className="main-heading mb-xl">
            <Heading classes="dark t-cap mb-sm" type="tertiary">
              our menu
            </Heading>
            <Pragraph classes="t-first-upper w-30" color="grey">
              this is a section of your menu.{" "}
              <span className="t-first-upper d-inline-block">give</span> your
              section a brief description
            </Pragraph>
          </div>
          <div className="home__our-menu-section__container">
            <div className="heading-description">
              <Heading classes="dark mb-lg t-right" type="quaternary">
                <span>$</span>20
              </Heading>
              <Heading classes="dark t-cap mb-lg" type="secondary">
                deep sea snow white <br /> cod fillet
              </Heading>
              <Pragraph color="grey ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni?
              </Pragraph>
            </div>
            <div className="heading-description">
              <Heading classes="dark mb-lg t-right" type="quaternary">
                <span>$</span>22
              </Heading>
              <Heading classes="dark t-cap mb-lg" type="secondary">
                steak with rosemary <br /> butter
              </Heading>
              <Pragraph color="grey ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni?
              </Pragraph>
            </div>
            <div className="heading-description">
              <Heading classes="dark mb-lg t-right" type="quaternary">
                <span>$</span>18
              </Heading>
              <Heading classes="dark t-cap mb-lg" type="secondary">
                cucumber salad
              </Heading>
              <Pragraph color="grey ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni?
              </Pragraph>
            </div>
            <div className="heading-description">
              <Heading classes="dark mb-lg t-right" type="quaternary">
                <span>$</span>90
              </Heading>
              <Heading classes="dark t-cap mb-lg" type="secondary">
                natural wine pairing
              </Heading>
              <Pragraph color="grey ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni?
              </Pragraph>
            </div>
          </div>
        </Container>
      </section>
      {/* end menu section */}

      {/* start cock section */}
      <section className="home__cook-section">
        <Container>
          <div className="home__cook-section__container">
            <div className="home__cook-section__img-box">
              <img
                src="https://www11.0zz0.com/2022/04/01/05/322451068.png"
                alt=""
                className="home__cook-section__img img-fluid "
              />
            </div>

            <div className="main-heading home__cook-section__content">
              <Heading classes="dark t-first-upper mb-sm" type="tertiary">
                excellent <br /> cook
              </Heading>
              <Pragraph classes="t-first-upper" color="grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                lorem id penatibus imperdiet. Turpis egestas ultricies purus
                auctor tincidunt lacus nunc.
              </Pragraph>
            </div>
          </div>
        </Container>
      </section>
      {/* end cock section */}

      {/* start quality section */}
      <section className="home__quality-section">
        <Container>
          <div className="home__quality-section__container">
            <div className="home__quality-section__box  t-center">
              <div className="home__quality-section__icon m-auto mb-lg">
                <IoFishOutline className="d-inline-block" />
              </div>
              <Heading classes="t-cap mb-md" type="quaternary" dashed={false}>
                premium quality
              </Heading>
              <Pragraph color="grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                congue arcu
              </Pragraph>
            </div>
            <div className="home__quality-section__box  t-center">
              <div className="home__quality-section__icon m-auto mb-lg">
                <FaCarrot className="d-inline-block" />
              </div>
              <Heading classes="t-cap mb-md" type="quaternary" dashed={false}>
                seasonal vegetables
              </Heading>
              <Pragraph color="grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                congue arcu
              </Pragraph>
            </div>
            <div className="home__quality-section__box  t-center">
              <div className="home__quality-section__icon m-auto mb-lg">
                <GiCutLemon className="d-inline-block" />
              </div>
              <Heading classes="t-cap mb-md" type="quaternary" dashed={false}>
                fresh fruit
              </Heading>
              <Pragraph color="grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                congue arcu
              </Pragraph>
            </div>
          </div>
        </Container>
      </section>
      {/* enf quality section */}

      {/* start fashion section */}

      <div className="home__fashion-section">
        <Container>
          <Row>
            <FashionCard
              imgCard="https://www2.0zz0.com/2022/04/08/00/392126827.png"
              headingText="Fruit and vegetables and protection against diseases"
              pragraphText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              name="Julie Christie"
              date="October 17,2021"
              time="3:33 pm"
              comments="2 comments"
              linkText="Read More"
              userImg="https://www2.0zz0.com/2022/04/08/00/942727979.png"
            />
            <FashionCard
              imgCard="https://www2.0zz0.com/2022/04/08/00/392126827.png"
              headingText="Fruit and vegetables and protection against diseases"
              pragraphText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              name="Julie Christie"
              date="October 17,2021"
              time="3:33 pm"
              comments="2 comments"
              linkText="Read More"
              userImg="https://www2.0zz0.com/2022/04/08/00/942727979.png"
            />
          </Row>
        </Container>
      </div>
      {/* end fashion section */}

      {/* book now is a component we used it in sevreal places */}
      <BookNow />

      {/* start calories section */}
      <section className="home__calories-section">
        <div className="t-center mb-xl">
          <Heading classes="dark t-cap mb-sm" type="tertiary">
            clories energy <br /> balance
          </Heading>
          <Pragraph classes="t-first-upper" color="grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Pragraph>
        </div>
        <Container>
          <div className="home__calories-section__container">
            <div className="home__calories-section__box " data-des="starters">
              <img
                src="https://www5.0zz0.com/2022/04/04/14/590471982.png"
                alt="starter img"
                className="img-fluid"
              />
            </div>
            <div className="home__calories-section__box " data-des="mains">
              <img
                src="https://www4.0zz0.com/2022/04/04/14/753799530.png"
                alt="Mains img"
                className="img-fluid"
              />
            </div>
            <div className="home__calories-section__box " data-des="soups">
              <img
                src="https://www4.0zz0.com/2022/04/04/14/265061459.png"
                alt="Soups img"
                className="img-fluid"
              />
            </div>
          </div>
        </Container>
      </section>
      {/* end calories section */}

      {/* start quote section */}
      <section className="home__quote-section">
        <Container>
          <div className="home__quote-section__heading-box mb-xl">
            <Heading type="quaternary" dashed={false} classes="w-80 ">
              “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              lorem id penatibus imperdiet. Turpis egestas ultricies purus Lorem
              ipsum dolor sit amet.
            </Heading>
            <img
              src="https://www9.0zz0.com/2022/04/04/21/711026757.png"
              alt="quite img"
              className="home__quote-section__img-quote"
            />
          </div>
          <div className="home__quote-section__container">
            <div className="home__quote-section__user">
              <img
                src="https://www7.0zz0.com/2022/04/04/21/619286015.png"
                alt="user img"
              />
              <div className="home__quote-section__user-details">
                <h5 className="t-cap">john doe</h5>
                <Pragraph classes="t-cap letter-space-lg" color="grey">
                  bloger
                </Pragraph>
              </div>
            </div>
            <div className="home__quote-section__pagination">
              <span className="home__quote-section__pagination--arrow-left">
                ←
              </span>
              2/3
              <span className="home__quote-section__pagination--arrow-right">
                →
              </span>
            </div>
          </div>
        </Container>
      </section>
      {/* end quote section */}
    </div>
  );
}

export default Home;

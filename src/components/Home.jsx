import Heading from "./Heading";
import Container from "./Container";
import Pragraph from "./Pragraph";

import { IoFishOutline } from "react-icons/io5";
import { FaCarrot } from "react-icons/fa";
import { GiCutLemon } from "react-icons/gi";
import { HiOutlineArrowRight } from "react-icons/hi";
import FashionCard from "./FashionCard";
import UserComment from "./UserComment";
import Button from "./Button";
import BookNow from "./BookNow";

function Home() {
  return (
    <>
      <section className="hero-section-1">
        <Container>
          <div className="hero-section-1__container">
            <div className="hero-section-1__content">
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
              <Pragraph classes="hero-section-1__scroll t-first-upper">
                scroll ------------------------
              </Pragraph>
            </div>
            <div className="hero-section-1__img-box">
              <img
                src="https://www9.0zz0.com/2022/03/31/13/162292686.png"
                alt="hero section img"
                className="img-fluid"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="hero-section-2">
        <Container>
          <div className="hero-section-2__container">
            <div className="hero-section-2__content-left">
              <div className="hero-section-2__img-box-left mb-xl">
                <img
                  src="https://www3.0zz0.com/2022/03/31/14/528860016.png"
                  alt="hero section img"
                  className="img-fluid"
                />
              </div>
              <div className="hero-section-2__heading">
                <Heading classes="white mb-lg t-first-upper" type="secondary">
                  start to plan <br /> your diet today
                </Heading>
                <Pragraph classes="mb-xl w-60">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                  congue arcu
                </Pragraph>
              </div>
            </div>

            <div className="hero-section-2__content-right">
              <div className="hero-section__content-right">
                <Pragraph classes="mb-xl w-90">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                  congue arcu
                </Pragraph>
              </div>
              <div className="hero-section-2__img-box-right">
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

      <section className="our-menu-section">
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
          <div className="our-menu-section__container">
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

      <section className="cook-section">
        <Container>
          <div className="cook-section__container">
            <div className="cook-section__img-box">
              <img
                src="https://www11.0zz0.com/2022/04/01/05/322451068.png"
                alt=""
                className="cook-section__img img-fluid "
              />
            </div>

            <div className="main-heading cook-section__content">
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

      <section className="quality-section">
        <Container>
          <div className="quality-section__container">
            <div className="quality-section__box  t-center">
              <div className="quality-section__icon m-auto mb-lg">
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
            <div className="quality-section__box  t-center">
              <div className="quality-section__icon m-auto mb-lg">
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
            <div className="quality-section__box  t-center">
              <div className="quality-section__icon m-auto mb-lg">
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

      <section className="fashion-section">
        <Container>
          <div className="fashion-section__container">
            <div className="fashion-section__box">
              <div className="fashion-section__img">
                <FashionCard
                  imgUrl={"https://www6.0zz0.com/2022/04/03/11/292754293.png"}
                  namePlaceHolder="fashion"
                />
              </div>
              <div className="fashion-section__content">
                <UserComment
                  useName="Julie Christie"
                  commentsNumber="2"
                  img="https://www6.0zz0.com/2022/04/02/08/683589710.png"
                  date="October 17,2021"
                  time="3:33 pm"
                  classes="mb-md"
                />
                <Heading classes="mb-sm" type="quaternary">
                  Fruit and vegetables and protection against diseases
                </Heading>
                <Pragraph classes="mb-lg" color="grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Pragraph>
                <div className="fashion-section__link-box">
                  <Button classes="dark" type="tertiary">
                    read more
                  </Button>
                  <HiOutlineArrowRight />
                </div>
              </div>
            </div>
            <div className="fashion-section__box">
              <div className="fashion-section__img">
                <FashionCard
                  imgUrl={"https://www14.0zz0.com/2022/04/03/21/365000523.png"}
                  namePlaceHolder="fashion"
                />
              </div>
              <div className="fashion-section__content">
                <UserComment
                  useName="Dianne Russell"
                  commentsNumber="2"
                  img="https://www11.0zz0.com/2022/04/03/21/679364818.png"
                  date="October 17,2021"
                  time="3:33 pm"
                  classes="mb-md"
                />
                <Heading classes="mb-sm" type="quaternary">
                  &nbsp;
                </Heading>
                <Pragraph classes="mb-lg" color="grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Pragraph>
                <div className="fashion-section__link-box">
                  <Button classes="dark" type="tertiary">
                    read more
                  </Button>
                  <HiOutlineArrowRight />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <BookNow />

      <section className="calories-section">
        <div className="t-center mb-xl">
          <Heading classes="dark t-cap mb-sm" type="tertiary">
            clories energy <br /> balance
          </Heading>
          <Pragraph classes="t-first-upper" color="grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Pragraph>
        </div>
        <Container>
          <div className="calories-section__container">
            <div className="calories-section__box " data-des="starters">
              <img
                src="https://www5.0zz0.com/2022/04/04/14/590471982.png"
                alt="starter img"
                className="img-fluid"
              />
            </div>
            <div className="calories-section__box " data-des="mains">
              <img
                src="https://www4.0zz0.com/2022/04/04/14/753799530.png"
                alt="Mains img"
                className="img-fluid"
              />
            </div>
            <div className="calories-section__box " data-des="soups">
              <img
                src="https://www4.0zz0.com/2022/04/04/14/265061459.png"
                alt="Soups img"
                className="img-fluid"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="quote-section">
        <Container>
          <div className="quote-section__heading-box mb-xl">
            <Heading type="quaternary" dashed={false} classes="w-80 ">
              “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              lorem id penatibus imperdiet. Turpis egestas ultricies purus Lorem
              ipsum dolor sit amet.
            </Heading>
            <img
              src="https://www9.0zz0.com/2022/04/04/21/711026757.png"
              alt="quite img"
              className="quote-section__img-quote"
            />
          </div>
          <div className="quote-section__container">
            <div className="quote-section__user">
              <img
                src="https://www7.0zz0.com/2022/04/04/21/619286015.png"
                alt="user img"
              />
              <div className="quote-section__user-details">
                <h5 className="t-cap">john doe</h5>
                <Pragraph classes="t-cap letter-space-lg" color="grey">
                  bloger
                </Pragraph>
              </div>
            </div>
            <div className="quote-section__pagination">
              <span className="quote-section__pagination--arrow-left">←</span>
              2/3
              <span className="quote-section__pagination--arrow-right">→</span>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Home;

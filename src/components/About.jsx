import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import InfoCard from "./InfoCard";
import Pragraph from "./Pragraph";
import Row from "./Row";

import rosemaryLeft from "../imgs/rosemary-left.svg";
import rosemaryRight from "../imgs/rosemary-right.svg";
import PlayIcon from "../imgs/Play.svg";
import BookNow from "./BookNow";

function About() {
  return (
    <div className="about">
      <section className="about__hero-section">
        <Container>
          <div className="about__hero-section__container">
            <div className="about__hero-section__content">
              <Heading classes={"mb-md t-cap white"}>who we are</Heading>
              <Pragraph classes="w-75">
                The most important thing for us is to give you the comfortable
                dining experience
              </Pragraph>
            </div>
          </div>
        </Container>
      </section>

      <section className="about__our-story">
        <Container>
          <Row classes="about__our-story__container">
            <div className="main-heading mb-xl">
              <Heading classes="dark t-cap mb-sm" type="tertiary">
                our story
              </Heading>
              <Pragraph classes="t-first-upper w-80" color="grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                lorem id penatibus imperdiet. Turpis egestas ultricies purus
                auctor tincidunt lacus nunc.
              </Pragraph>
            </div>

            <img
              src="https://www14.0zz0.com/2022/04/18/22/733305665.png"
              alt="our story img"
              className="img-fluid"
            />
          </Row>
        </Container>
      </section>

      <section className="about__info">
        <Container>
          <div className="about__info__container about__info__container--first">
            <InfoCard
              name="Restuarant Manager"
              jobTitle="Carson Hugn"
              img="https://www8.0zz0.com/2022/04/18/22/991839556.png"
            />
            <Pragraph color="grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed
              in pellentesque ornare nunc nisl.
            </Pragraph>
          </div>
          <div className="about__info__container about__info__container--second">
            <Pragraph classes="w-65 t-right ms-auto" color="grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed
              in pellentesque ornare nunc nisl. Augue habitant accumsan, ut
              parturient orci ac etiam congue mi.
            </Pragraph>
            <InfoCard
              name="Executive Chef"
              jobTitle="Jane Cooper"
              img="https://www2.0zz0.com/2022/04/18/22/689318001.png"
              classes="about__info__info-card--second"
            />
          </div>
        </Container>
      </section>

      <section className="about__play white">
        <div className="main-heading mb-xl t-center about__play__heading">
          <Heading classes="dark t-cap mb-sm white" type="tertiary">
            It looks delicious
          </Heading>
          <Pragraph classes="t-first-upper mb-lg white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Pragraph>
          <img src={PlayIcon} alt="play icon" />
        </div>
      </section>

      <section className="about__how-we-make">
        <div className="about__how-we-make__shape">
          <div className="about__how-we-make__shape about__how-we-make__shape--right">
            <img
              src={rosemaryRight}
              alt="rosemary right icon"
              className="img-fluid"
            />
          </div>
          <div className="about__how-we-make__shape about__how-we-make__shape--left">
            <img
              src={rosemaryLeft}
              alt="rosemary Left icon"
              className="img-fluid"
            />
          </div>
        </div>
        <Container>
          <div className="main-heading mb-xl">
            <Heading classes="dark t-cap mb-sm t-center" type="tertiary">
              sophisticated process
            </Heading>
          </div>

          <div className="about__how-we-make__container about__how-we-make__container--first  mb-lg">
            <img
              src="https://www13.0zz0.com/2022/04/19/22/814124759.png"
              alt="img how we make"
              className="img-fluid"
            />
            <div className="about__how-we-make__content">
              <Heading classes="t-cap mb-md" type="secondary">
                01.slice
              </Heading>
              <Pragraph color="grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                lorem id penatibus imperdiet. Turpis egestas ultricies purus
                auctor tincidunt lacus nunc. Convallis pellentesque quis
                fringilla sagittis. Egestas in risus sit nunc nunc, arcu donec
                nam etiam.
              </Pragraph>
            </div>
          </div>
          <div className="about__how-we-make__container about__how-we-make__container--second">
            <div className="about__how-we-make__content about__how-we-make__content--first">
              <Heading classes="t-cap mb-md" type="secondary">
                03.Bake
              </Heading>
              <Pragraph classes="mb-md" color="grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                lorem id penatibus imperdiet.
              </Pragraph>
              <img
                src="https://www3.0zz0.com/2022/04/19/22/888648252.png"
                alt="img how we make"
                className="img-fluid"
              />
            </div>
            <div className="about__how-we-make__content about__how-we-make__content--second">
              <img
                src="https://www3.0zz0.com/2022/04/19/22/308546478.png"
                alt="img how we make"
                className="img-fluid mb-md"
              />
              <Heading classes="t-cap mb-md" type="secondary">
                02.Pickled
              </Heading>
              <Pragraph color="grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                lorem id penatibus imperdiet.
              </Pragraph>
            </div>
          </div>
        </Container>
      </section>

      <BookNow classes="about__book-now--box" />
    </div>
  );
}

export default About;

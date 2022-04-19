import React from "react";
import Heading from "./Heading";
import Pragraph from "./Pragraph";

function InfoCard({ img, name, jobTitle, classes = "" }) {
  return (
    <div className={`info-card ${classes}`}>
      <Heading classes="t-cap mb-md t-center" type="quaternary" dashed={false}>
        {name}
      </Heading>
      <Pragraph classes="t-cap mb-md fs-lg t-center" color="grey">
        {jobTitle}
      </Pragraph>

      <div className="info-card__info-img-box">
        <img src={img} alt="info img" className="img-fluid" />
      </div>
    </div>
  );
}

export default InfoCard;

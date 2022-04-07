import { useState } from "react";
import Button from "./Button";
import Container from "./Container";

import Heading from "./Heading";
import Pragraph from "./Pragraph";

function BookNow() {
  const today = new Date();
  const date = today.setDate(today.getDate());
  const defaultValue = new Date(date).toISOString().split("T")[0];

  const [values, setValues] = useState({
    time: "18:00",
    date: defaultValue,
    option: "",
  });

  const handleChange = (e) => {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;
    setValues((prvState) => ({ ...prvState, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(values);
  };

  console.log(defaultValue);
  return (
    <section className="booknow  t-center">
      <Container>
        <div className="t-center mb-xl">
          <Heading classes="dark t-first-upper mb-sm" type="tertiary">
            Make a Reservation
          </Heading>
          <Pragraph classes="t-first-upper" color="grey">
            Get in touch with restaurant
          </Pragraph>
        </div>

        <form className="booknow__form" onSubmit={handleSubmit}>
          <div className="booknow__container mb-xl">
            <input
              type="date"
              name="date"
              onChange={handleChange}
              defaultValue={values.date}
            />
            <input
              type="time"
              name="time"
              value={values.time}
              onChange={handleChange}
            />
            <select name="option" onChange={handleChange} value={values.option}>
              <option value="1">2 person</option>
              <option value="1">2 person</option>
              <option value="1">2 person</option>
            </select>
          </div>
          <Button tag="buttonSubmit-1">book now</Button>
        </form>
      </Container>
    </section>
  );
}

export default BookNow;

// import react router dom components

import { Route, Routes } from "react-router-dom";

import { useState } from "react";

// import components
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Navigation from "./components/Navigation";

function App() {
  const [toggleState, setToggleState] = useState(false);

  const handleToggleState = (value) => {
    setToggleState(value);
  };
  return (
    <>
      <Navbar toggleState={toggleState} handleToggleState={handleToggleState} />
      <Navigation
        toggleState={toggleState}
        handleToggleState={handleToggleState}
      />
      <main>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="menu" element={<Menu />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;

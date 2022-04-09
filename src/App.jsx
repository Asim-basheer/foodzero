// import react router dom components

import { Route, Routes } from "react-router-dom";

// import components
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Navbar />
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

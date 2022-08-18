// import react router dom components

import { Route, Routes } from 'react-router-dom';

import { useState } from 'react';

// import components
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Navigation from './components/Navigation';
import About from './components/About';
import Blogs from './components/Blogs';
import Contact from './components/Contact';

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
          <Route path='' element={<Home />} />
          <Route path='menu' element={<Menu />} />
          <Route path='about' element={<About />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;

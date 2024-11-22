import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import History from "./pages/History";
import Significance from "./pages/Significance";
import Temples from "./pages/Temples";
import Festivals from "./pages/Festivals";
import Prayers from "./pages/Prayers";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/significance" element={<Significance />} />
          <Route path="/temples" element={<Temples />} />
          <Route path="/festivals" element={<Festivals />} />
          <Route path="/prayers" element={<Prayers />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import NotFound from "./components/NotFound";
import Contact from "./components/page/Contact";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/lain">Halaman Lain</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    );
  }
}

export default App;

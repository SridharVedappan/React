import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import WebDevelopment from "./component/WebDevelopment";
import AppDevelopment from "./component/AppDevelopment";
import UxDesign from "./component/UxDesign";
import Contact from "./component/Contact";
import Profile from "./component/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>

        <div className="dropdown">
          <Link to="/Services" className="dropbtn">
            Services ▾
          </Link>

          <div className="dropdown-content">
            <Link to="/Services/WebDevelopment">Web Development</Link>
            <Link to="/Services/AppDevelopment">App Development</Link>
            <Link to="/Services/UxDesign">UX Design</Link>
          </div>
        </div>

        <Link to="/Contact">Contact</Link>
        <Link to="/Profile">Profile</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />}>
          <Route path="WebDevelopment" element={<WebDevelopment />} />
          <Route path="AppDevelopment" element={<AppDevelopment />} />
          <Route path="UxDesign" element={<UxDesign />} />
        </Route>
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

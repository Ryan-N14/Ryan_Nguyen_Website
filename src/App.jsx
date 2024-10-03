import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Project from "./components/Project";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <About />
      <Project />
      <Contact />
      <footer>
        <nav>
          <div className="nav-link-container">
            <ul className="nav-link">
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#project">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; Ryan Nguyen. All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default App;

import logo from "./logo.svg";
import "./App.css";
import "../src/components/home.css";
import picture from "./ty.png";
import doo from "./do.jpg";
import download from "./oo.jpg";
import original from "./original.jpg";
import p from "./p.jfif";
function App() {
  return (
    <div className="App">
      <>
        <nav class="navbar">
          <div class="left-side">
            <a href="#">Brand Name</a>
          </div>
          <div class="middle-side">
            <a href="#">Home</a>
            <a href="#">Product</a>
            <a href="#">Pricing</a>
          </div>
          <div class="right-side">
            <a href="#">Login</a>
            <a class="join-us" href="#">
              Join Us
            </a>
          </div>
        </nav>
        <section class="hero">
          <div class="hero-content">
            <h1>Welcome</h1>
            <h2>Highly Distinguished Courses</h2>
            <h6>
              Learn how to master online selling in 4 weeks of intensive online
              training.Limited registration time!
            </h6>
            <a class="cta-btn" href="#">
              Join Us
            </a>
          </div>
        </section>
        <div class="secondcontent">
          <section class="mid">
            <h5 className="smalltitle">Practise Advice</h5>
            <h3>Make online education accessible</h3>
            <p>
              Problms trying to resolve the conflict between <br /> the two
              major realms of Classical physics.Newtonian mechanics.
            </p>
          </section>
          <div class="second-sec-content">
            <div class="box">
              <h5>Lifetime access</h5>
              <div className="boxicon">
                <i class="fa-sharp fa-regular fa-face-smile"></i>
              </div>{" "}
              <p>
                The gradual <br /> accumulation of <br />
                information about
              </p>
            </div>
            <div class="box">
              <h5>2,768 online courses</h5>
              <div className="boxicon">
                <i class="fa-solid fa-check"></i>
              </div>
              <p>
                The gradual <br /> accumulation of <br />
                information about
              </p>
            </div>
            <div class="box colorbox">
              <h5>Certified Teacher</h5>
              <div className="boxicon">
                <i class="fa-sharp fa-solid fa-bars-progress"></i>{" "}
              </div>
              <p>
                The gradual <br /> accumulation of <br />
                information about
              </p>
            </div>
            <div class="box">
              <h5>Books Liberary</h5>
              <div className="boxicon">
                <i class="fa-solid fa-sliders"></i>{" "}
              </div>
              <p>
                The gradual <br /> accumulation of <br />
                information about
              </p>
            </div>
          </div>
        </div>
        <div class="thirdcontainer">
          <div>
            <img src={picture} width="500" height="500"></img>
          </div>
          <div>
          <div className="thirdconline"></div>
            <h4 className="lar">
              Packages that <br /> are aprodable
            </h4>
            <p className="pclas">
              Problems trying to resolve the conflits between <br /> the two
              major realms of Classical physics.
              <br />
              Newtonian mechanics.
            </p>
            <a>Learn More </a>
          </div>
        </div>
        <div className="coursessection">
          <h5>Course</h5>
          <h3>Watch our Courses</h3>
          <p>
            Problms trying to resolve the conflict between <br /> the two major
            realms of Classical physics.Newtonian mechanics.
          </p>
        </div>
        <div className="imgontop">
          <div class="coursessec">
            <img src={doo}></img>
            <div class="coursecon">
              <div className="sorry">
                <i class="fa-regular fa-heart"></i>
              </div>
              <div className="sorry">
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
              <div className="sorry">
                <i class="fa-solid fa-eye"></i>
              </div>
            </div>
          </div>
          <div class="coursessec">
            <img src={download}></img>
            <div class="coursecon">
              <div className="sorry">
                <i class="fa-regular fa-heart"></i>
              </div>
              <div className="sorry">
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
              <div className="sorry">
                <i class="fa-solid fa-eye"></i>
              </div>
            </div>
          </div>
          <div class="coursessec">
            <img src={original}></img>
            <div class="coursecon">
              <div className="sorry">
                <i class="fa-regular fa-heart"></i>
              </div>
              <div className="sorry">
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
              <div className="sorry">
                <i class="fa-solid fa-eye"></i>
              </div>
            </div>
          </div>
          <div class="coursessec">
            <img src={p}></img>
            <div class="coursecon">
              <div className="sorry">
                <i class="fa-regular fa-heart"></i>
              </div>
              <div className="sorry">
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
              <div className="sorry">
                <i class="fa-solid fa-eye"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="Bcon">
          <div class="">
            <h3>Get In Touch</h3>
            <p>
              The quick fox jumps over the <br />
              lazy dog
            </p>
            <span class="icons">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-twitter"></i>
            </span>
            <p>Returns</p>
          </div>
          <div class="">
            <h3>Company Info</h3>
            <p>Service and Support</p>
            <p>About</p>
            <p>Carrers</p>
            <p>Site Map</p>
          </div>
          <div class="">
            <h3>Feature</h3>
            <p>Press Room</p>
            <p>Business Marketing</p>
            <p>Live Chat</p>
          </div>
          <div class="">
            <h3>Resources</h3>
            <p>iOS & Android</p>
            <p>Watch a demo</p>
            <p>Customers</p>
          </div>
        </div>
      </>
    </div>
  );
}
export default App;

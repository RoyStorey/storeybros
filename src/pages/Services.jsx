import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/services.css";
import storeImage1 from "../media/storex1.jpg";
import service1 from "../media/serv1.jpg";
import service2 from "../media/serv2.jpg";
import service3 from "../media/serv3.jpg";
import service4 from "../media/serv4.png";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <>
      <Header />
      <dir className="services-hero">
        <h1>Our Services</h1>
      </dir>
      <div className="services-wedo-section">
        <img src={storeImage1} />
        <div className="services-wedo-text-container">
          <div className="services-wedo-header">
            <h2>What we do</h2>
            <p>
              Regardless of what your fireplace needs may be, Storey Fireplace &
              Chimney is here to assist you. Your home goals will be exceeded
              with our assistance. Our top-of-the-line equipment will take your
              living space to the next level.
            </p>
            <p>
              We also offer chimney repairs, sweeps, inspections, and rebuilds.
            </p>
          </div>
          <div className="find-out-more red button">
            <Link to="/contact">
              <p>Find out more</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="ribbon-section">
        <div className="ribbon">
          <div className="ribbon-header">
            <img src={service1}></img>
            <h3>Installations</h3>
          </div>
          <p>
            Our installation technicians are licensed and insured to take on
            your fireplace projects. We can handle jobs Big or Small. Whether
            you just need a unit set in an existing space, or you would like
            something custom-built, we are ready to help make your vision come
            to life. We will treat you and your home as if it were our own, and
            help to guide you in deciding what is best to fit your needs.
          </p>
        </div>
        <div className="ribbon">
          <div className="ribbon-header">
            <img src={service2}></img>
            <h3>Service and Maintenance</h3>
          </div>
          <p>
            Regular maintenance ensures the safety, reliability, and efficiency
            of your unit. Our licensed technicians can handle diagnostics and
            repairs for all of your wood, coal, gas, and pellet-burning units.
            To be sure your unit is ready for the cold winter months we
            recommend scheduling your appointments in the late summer or early
            fall.
          </p>
        </div>
        <div className="ribbon">
          <div className="ribbon-header">
            <img src={service3}></img>
            <h3>Chimney Sweeps</h3>
          </div>
          <p>
            The National Fire Protection Association (NFPA) recommends annual
            sweeps and inspections of your chimney. Sweeps and inspections play
            a crucial role in the fire safety of your home. Our certified
            technicians are highly trained, and will only treat your home with
            the utmost respect and care. Leaving behind only a clean, safe, and
            ready-to-use chimney.
          </p>
        </div>
        <div className="ribbon">
          <div className="ribbon-header">
            <img src={service4}></img>
            <h3>Chimney Repairs and Rebuilds</h3>
          </div>
          <p>
            Leaky chimneys can cause damage to your unit as well as the interior
            of your home. Our techs are equipped to aid in preventing leaks and
            save on further damage. We specialize in tuck-pointing and mortar
            repair, crown seals, custom flashing, caps and more. However in some
            cases these minor repairs are not enough, and we can rebuild your
            chimney from the roof up for a guaranteed fix to the problems you
            have encountered.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

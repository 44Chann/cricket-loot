import Hero from "./hero";
import MintSection from "./mintcard";
const Mainsection = () => {
  {
    return (
      <div className="hero-cards-container">
        <div className="narro-container">
          <div className="postionincontainer">
            <div className="main-section">
              <MintSection />
            </div>
            <div className="hero-section">
              <Hero />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Mainsection;

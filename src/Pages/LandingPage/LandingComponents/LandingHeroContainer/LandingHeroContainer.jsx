import "./LandingHeroContainer.css";

export const LandingHeroContainer = () => {
  return (
    <div className="hero-container">
      <img
        className="hero-img"
        src="https://i.ytimg.com/vi/dBk2_yB2TUU/maxresdefault.jpg"
        alt="Hero-Img"
      />
      <div className="text-container">
        <span className="text-header">
          Welcome to a <span className="highlight">ONE STOP</span> site to clear all your doubts about
          PC Building!
        </span>
        <button className="text-btn">Explore More</button>
      </div>
    </div>
  );
};

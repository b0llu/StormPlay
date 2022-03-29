import "./LandingHeroContainer.css";
import { Link } from "react-router-dom";

export const LandingHeroContainer = () => {
  return (
    <div className="hero-container">
      <img
        className="hero-img"
        src="https://cdn.discordapp.com/attachments/470238446514995222/952524810385227786/hero-img.png"
        alt="Hero-Img"
      />
      <div className="text-container">
        <span className="text-header">
          Welcome to a <span className="highlight">ONE STOP</span> site to clear
          all your doubts about PC Building!
        </span>
        <Link to="/videos">
          <button className="text-btn">Explore More</button>
        </Link>
      </div>
    </div>
  );
};

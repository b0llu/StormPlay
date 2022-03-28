import { CategoryContainer, LandingHeroContainer } from "./LandingComponents";
import "./LandingPage.css";

export const LandingPage = () => {
  return (
    <div className="landing-main">
      <LandingHeroContainer />
      <CategoryContainer />
    </div>
  );
};

import { CategoryContainer, LandingHeroContainer } from "./LandingComponents";
import {useDocTitle} from 'Hook/useTitle'
import "./LandingPage.css";

export const LandingPage = () => {
  useDocTitle("Home | StormPlay")
  return (
    <div className="landing-main">
      <LandingHeroContainer />
      <CategoryContainer />
    </div>
  );
};

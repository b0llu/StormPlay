import { CategoryContainer, LandingHeroContainer } from "./LandingComponents";
import "./LandingPage.css";
import {useDocTitle} from '../../Hook/useTitle'

export const LandingPage = () => {
  useDocTitle("Home | StormPlay")
  return (
    <div className="landing-main">
      <LandingHeroContainer />
      <CategoryContainer />
    </div>
  );
};

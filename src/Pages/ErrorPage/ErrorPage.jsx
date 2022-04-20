import { Link } from "react-router-dom";
import "./ErrorPage.css";

export const ErrorPage = () => {
  return (
    <div className="error-page-container">
      <h1 className="error-page-header">404 Not Found</h1>
      <h2 className="error-page-text">
        Go back to{" "}
        <Link to="/">
          <span>Home Page</span>
        </Link>
      </h2>
    </div>
  );
};

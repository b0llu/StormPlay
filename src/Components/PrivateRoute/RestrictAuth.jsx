import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../Context/Auth.context";

const RestrictAuth = () => {
  const { userState } = useAuthContext();
  const location = useLocation();

  return userState._id ? (
    <Navigate to="/notes" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export default RestrictAuth;

import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../Context";


export const RestrictAuth = () => {
  const { userState } = useAuthContext();
  const location = useLocation();

  return userState._id ? (
    <Navigate to="/videos" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};


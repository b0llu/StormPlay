import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../Context";

export const RequireAuth = () => {
  const { userState } = useAuthContext();
  const location = useLocation();
  return userState._id ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};


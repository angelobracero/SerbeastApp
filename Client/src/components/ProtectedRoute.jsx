import { Navigate } from "react-router-dom";
import { useUser } from "../store/UserContext";

const ProtectedRoute = ({ role, children }) => {
  const { user } = useUser();

  if (!user || user.role !== role) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default ProtectedRoute;

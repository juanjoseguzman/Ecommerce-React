import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../../Context/AuthContext";
import Layout from "../../Layout";

export default function PrivateRoute() {
  const { auth } = useAuthContext();

  if (!auth) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Layout />
    </div>
  );
}

import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../../Context/AuthContext";
import Layout from "../../Layout";

export default function PublicRoute() {
  const { auth } = useAuthContext();

  if (auth) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Layout />
    </div>
  );
}

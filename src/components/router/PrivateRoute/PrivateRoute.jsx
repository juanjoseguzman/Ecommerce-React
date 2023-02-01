import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../../Context/AuthContext";
import Layout from "../../Layout";

export default function PrivateRoute({ allowedRoles }) {
  const { dataToken } = useAuthContext();
  console.log(dataToken);
  return allowedRoles?.includes(dataToken.role) ? (
    <>
      <Layout />
    </>
  ) : dataToken.email ? (
    <Navigate to="/Unauthorization" />
  ) : (
    <Navigate to="/" />
  );
}

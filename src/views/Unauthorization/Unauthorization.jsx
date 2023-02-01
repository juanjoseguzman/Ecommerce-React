import { useNavigate } from "react-router-dom";

export default function Unauthorization() {
  const navigate = useNavigate();
  const goBack = () => navigate("/");

  return (
    <>
      <h2>No esta autorizado</h2>
      <button onClick={goBack}>Volver</button>
    </>
  );
}

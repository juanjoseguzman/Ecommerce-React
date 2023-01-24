import Carrusel from "../../components/Carrusel/Carrusel";
import { useAuthContext } from "../../Context/AuthContext";

export default function Home() {
  const { logout, auth } = useAuthContext();
  return (
    <>
      <h1>Esto es la Home</h1>

      <Carrusel />
    </>
  );
}

import Card from "../../components/card/Card.jsx";
import { productos } from "../../components/card/Card.jsx";

export default function Todos_Productos() {
  return (
    <>
      <h1>Todos los Productos</h1>
      {productos.map((producto) => (
        <Card
          key={producto.id}
          imagen={producto.imagen}
          nombre={producto.nombre}
          precio={producto.precio}
          moneda={producto.moneda}
          marca={producto.marca}
        />
      ))}
    </>
  );
}

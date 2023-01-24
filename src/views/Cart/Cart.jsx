import { useState } from "react";
import botaAmarilla from "../../assets/botaAmarilla.jfif";
import botaMorada from "../../assets/botaMorada.jfif";
import botaVerde from "../../assets/botaVerde.jfif";

const productos = [
  {
    id: 1,
    imagen: botaAmarilla,
    nombre: "Bota Amarilla",
    precio: "49,90",
    moneda: "€",
    marca: "Nike",
  },
  {
    id: 2,
    imagen: botaMorada,
    nombre: "Bota Morada",
    precio: "53,90",
    moneda: "€",
    marca: "Nike",
  },
  {
    id: 3,
    imagen: botaVerde,
    nombre: "Bota Verde",
    precio: "44,90",
    moneda: "€",
    marca: "Adidas",
  },
];

export default function Cart() {
  const [productos, setProductos] = useState();
  return (
    <div>
      <p>Titulo: {productos}</p>
      <button onClick={() => setProductos()}>X</button>
    </div>
  );
}

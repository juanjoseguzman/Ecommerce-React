import Card from "../../components/card/Card.jsx";
import { useState } from "react";
import { useEffect } from "react";

export default function Todos_Productos() {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    async function getProducts() {
      const response = await fetch("http://localhost:3000/product/products", {
        method: "GET",
      });
      if (response.status == 200) {
        setProducts(await response.json());
        console.log(products);
      }
    }
    getProducts();
  }, []);

  return (
    <>
      <h1>Todos los Productos</h1>
      <div className="tarjetasProductos">
        {!products ? (
          <p>No tienes Productos</p>
        ) : (
          products.map((producto) => (
            <Card
              key={producto.id}
              imagen={producto.imagenes[0]}
              nombre={producto.nombre}
              precio={producto.precio}
              stock={producto.stock}
              rating={producto.rating}
              categoria={producto.categoria}
              referencia={producto.referencia}
            />
          ))
        )}
      </div>
    </>
  );
}

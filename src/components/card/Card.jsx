import "./card.css";
import botaAmarilla from "./botaAmarilla.jfif";
import botaMorada from "./botaMorada.jfif";
import botaVerde from "./botaVerde.jfif";

export const productos = [
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

function Card({ imagen, nombre, precio, moneda, marca }) {
  return (
    <div className="botas-futbol-1">
      <article>
        <figure>
          <img
            src={`http://localhost:3000${imagen}`}
            alt="bota amarilla"
            width="300px"
          />
        </figure>
        <div className="bota">
          <div className="nombre">
            <span>{nombre}</span>
          </div>
          <div className="grupo-precio">
            <div className="numero-precio">
              <span>
                <b>{precio}</b>
              </span>
            </div>
            <div className="moneda">
              <span>
                <b>{moneda}</b>
              </span>
            </div>
          </div>
        </div>
        <div>
          <p>{marca}</p>
        </div>
        <div className="rating">
          <p className="filled">★ </p>
          <p className="filled">★ </p>
          <p className="filled">★ </p>
          <p className="filled">★ </p>
          <p className="filled-off">★ </p>
        </div>

        <div className="botones-card">
          <a href="#" onclick="agregarCarrito()" className="button">
            Añadir a Carrito
          </a>
          <a href="/HTML/detalles-productos.html" className="button">
            Ver
          </a>
        </div>
      </article>
    </div>
  );
}

export default Card;

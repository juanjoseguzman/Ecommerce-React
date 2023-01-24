import "./header.css";

export default function Cabezera({ logo }) {
  return (
    <header>
      <div className="cabezera" id="cabezera">
        <h1>
          <a href="/HTML/index.html">
            <img src={logo} alt="logo" width="360px" />
          </a>
        </h1>
        <input
          type="search"
          id="buscar"
          name="buscar"
          placeholder="🔍 Busca tu bota favorita"
        />

        <div className="carrito">
          <a href="/HTML/carrito.html" className="button">
            🛒Carrito{" "}
            <span className="contador">
              <span className="circule">
                <span>5</span>
              </span>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}

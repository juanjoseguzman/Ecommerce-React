import "./footer.css";

export default function Footer({ logo }) {
  return (
    <footer>
      <section className="logo-susbribete">
        <div className="politicas">
          <div>
            <a href="/HTML/index.html">
              <img src={logo} alt="logo" width="320px" />
            </a>
            <div className="lista">
              <ul>
                <li>Centro de ayuda</li>
                <li>Servicio al consumidor</li>
                <li>Escribenos</li>
                <li>Servicio telefonico</li>
              </ul>
              <ul>
                <li>
                  <a href="/HTML/politica-privacidad.html">
                    Politica de privacidad
                  </a>
                </li>
                <li>Condiciones de compra</li>
                <li>Opiniones de clientes</li>
                <li>Aviso de privacidad y cookies</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="suscribete">
          <h5>Unete a nuestra newsletter y recibe ofertas diarias</h5>
          <form>
            <div className="suscribirme">
              <input
                type="email"
                name="email"
                placeholder="introduce tu email"
              />
              <button className="button" type="submit">
                Suscribirme
              </button>
              <br />
            </div>
            <input type="checkbox" name="acepto" id="acepto" />
            <label htmlFor="acepto">Acepto Politica de privacidad</label>
          </form>
        </div>
      </section>
      <section className="politicas-redes">
        <div className="redes">
          <h5>Síguenos en redes</h5>

          <a href="https://www.facebook.com/">
            <img src="../assets/facebook.png" alt="facebook" width="50px" />
          </a>
          <a href="https://www.youtube.com/">
            <img src="/HTML/icono/youtube.png" alt="youtube" width="50px" />
          </a>
          <a href="https://www.twitch.tv/">
            <img src="/HTML/icono/twitch.png" alt="twitch" width="50px" />
          </a>
          <a href="https://www.instagram.com/">
            <img src="/HTML/icono/insta.png" alt="instagram" width="50px" />
          </a>
        </div>
      </section>
    </footer>
  );
}

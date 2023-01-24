import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormLogin() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleLogin(event) {
    const newLogin = {
      ...login,
      [event.target.name]: event.target.value,
    };
    setLogin(newLogin);
  }

  function checkLogin(event) {
    event.preventDefault();
    fetch("http://localhost:3000/user/login", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(login),
    }).then((response) => {
      console.log(response.status);
      if (response.status == 400) {
        alert("error al recibir el body");
      } else if (response.status == 200) {
        alert("login correcto");
        navigate("/Todos_Productos");
        setNewUsuario(initialUserState);
      } else if (response.status == 404) {
        alert("usuario no registrado");
      } else if (response.status == 401) {
        alert("usuario o contraseña incorrecta");
      }
    });
  }

  return (
    <div className="formulario">
      <h4>Iniciar Sesión</h4>
      <p>Accede con tus datos anteriores</p>
      <form method="get" onSubmit={checkLogin}>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="email"
          value={login.email}
          onChange={handleLogin}
        />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="contraseña"
          value={login.password}
          onChange={handleLogin}
        />
        <br />
        <div className="error" id="error">
          <span>Error en algunos de los campos</span>
        </div>
        <button className="button" type="submit">
          Iniciar Sesion
        </button>
      </form>
    </div>
  );
}

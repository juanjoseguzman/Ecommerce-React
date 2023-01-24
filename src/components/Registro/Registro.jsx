import { useState } from "react";

const initialUserState = {
  nombre: "",
  apellidos: "",
  email: "",
  password: "",
};

export default function Registro() {
  const [newUsuario, setNewUsuario] = useState(initialUserState);

  function handleInput(e) {
    const newRegistro = {
      ...newUsuario,
      [e.target.name]: e.target.value,
    };
    setNewUsuario(newRegistro);
  }

  function registrar(e) {
    e.preventDefault();
    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(newUsuario),
    }).then((response) => {
      console.log(response.status);
      if (response.status == 400) {
        alert("error al recibir el body");
      } else if (response.status == 200) {
        alert("usuario registrado correctamente");
        setNewUsuario(initialUserState);
      } else if (response.status == 409) {
        alert("usuario ya registrado");
      }
    });
  }

  return (
    <div className="formulario">
      <h4>Registrate</h4>
      <p>Crea una cuenta My SerFoot Store</p>
      <form method="post" onSubmit={registrar}>
        <input
          type="text"
          name="nombre"
          placeholder="nombre"
          id="nombre"
          value={newUsuario.nombre}
          onChange={handleInput}
        />
        <br />
        <input
          type="text"
          name="apellidos"
          placeholder="apellidos"
          id="apellidos"
          value={newUsuario.apellidos}
          onChange={handleInput}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="email"
          id="emailRegistro"
          value={newUsuario.email}
          onChange={handleInput}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="contraseña"
          id="passwordRegistro"
          value={newUsuario.password}
          onChange={handleInput}
        />
        <br />
        <div className="error">
          <span>Error en algunos de los campos</span>
        </div>
        <button className="button" type="submit">
          Crear cuenta ahora
        </button>
      </form>
    </div>
  );
}

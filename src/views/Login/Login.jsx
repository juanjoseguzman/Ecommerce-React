import { useState } from "react";
import AdvancedForm from "../../components/AdvanceForm/AdvancedForm";
import BasicForm from "../../components/BasicForm/BasicForm";
import { useAuthContext } from "../../Context/AuthContext";
import "./login.css";

export default function Login() {
  const { login, errorMessage } = useAuthContext();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleInput(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={(e) => login(e, user)}>
        <input
          type="email"
          value={user.email}
          onChange={handleInput}
          placeholder="introduce email"
          name="email"
        />
        <input
          type="password"
          value={user.password}
          onChange={handleInput}
          placeholder="introduce password"
          name="password"
        />
        <button className="button">Iniciar</button>
      </form>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <BasicForm />
      <AdvancedForm />
    </>
  );
}

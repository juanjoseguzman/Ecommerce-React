import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  auth: null,
  login: () => {},
  logout: () => {},
  errorMessage: null,
});

export default AuthContext;

const MY_AUTH_APP = "MY_AUTH_APP";

export function AuthContextProvaider({ children }) {
  const [auth, setAuth] = useState(
    window.localStorage.getItem(MY_AUTH_APP) ?? null
  );
  const [errorMessage, setErrorMessage] = useState(null);

  function login(e, user) {
    e.preventDefault();

    // aqui se haria el fetch

    if (user.email === "pepe@gmail.com" && user.password === "12345") {
      setAuth("ahjkfhjksdhajfhasdhfhsdfhsdhasdhasdhh");
      window.localStorage.setItem(
        MY_AUTH_APP,
        "ahjkfhjksdhajfhasdhfhsdfhsdhasdhasdhh"
      );
      setErrorMessage(null);
    } else {
      // la respuesta de la API cuando falle el login
      setErrorMessage("Error en el email o password");
    }
  }

  function logout() {
    window.localStorage.removeItem(MY_AUTH_APP);
    setAuth(null);
  }

  console.log(auth);
  const value = {
    auth,
    errorMessage,
    login,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}

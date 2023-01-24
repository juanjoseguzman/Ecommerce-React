import { useState } from "react";
import List from "../../components/List";

/* export default function About() {
  const [title, setTitle] = useState("About");
  return (
    <div>
      <p>Titulo: {title}</p>
      <button onClick={() => setTitle("Mejor este About")}>
        Cambiar titulo
      </button>
    </div>
  );
} */

const todoList = [
  {
    id: 1,
    title: "Aprender a pasar props a los componentes",
  },
  {
    id: 2,
    title: "Poner el return en los componentes",
  },
  {
    id: 3,
    title: "Devolver un solo elemento en el JSX",
  },
  {
    id: 4,
    title: "Aprender a crear rutas con React Router",
  },
  {
    id: 5,
    title: "Cambiar los estados de un elemento padre a traves de su hijo",
  },
];

export default function About() {
  const [todos, setTodos] = useState(todoList);

  return (
    <>
      <List list={todos} onClick={setTodos} />
    </>
  );
}

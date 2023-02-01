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
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m54!1m12!1m3!1d6397.4635300555165!2d-4.4361109069722815!3d36.70498312072919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m39!3e2!4m5!1s0xd72f7817c584411%3A0x7a67b2eb09a0d974!2zQy4gVG9tw6FzIEVjaGV2ZXJyw61hLCA1LCAyOTAwMiBNw6FsYWdh!3m2!1d36.7048347!2d-4.4357245!4m5!1s0xd72f78416af814d%3A0xf03d279a3233400!2sParque%20de%20Huelin%2C%20M%C3%A1laga!3m2!1d36.7060317!2d-4.4325846!4m5!1s0xd72f78242aa52f7%3A0xa531b33ab048fae8!2sC.%20Jord%C3%A1n%20Marbella%2C%2029002%20M%C3%A1laga!3m2!1d36.706860299999995!2d-4.4375469999999995!4m5!1s0xd72f71bd4395bd1%3A0xdb2bbc88d5b17acf!2sRestaurante%20BAGAZO%2C%20Paseo%20Maritimo%20Antonio%20Machado%2C%20M%C3%A1laga!3m2!1d36.7034169!2d-4.4331781999999995!4m3!3m2!1d36.7056712!2d-4.4403166!4m3!3m2!1d36.707598!2d-4.4382781!4m5!1s0xd72f783cf5a506b%3A0x2dd67e1ef9092c0d!2sSofipan%20Panaderia%20y%20Restaurante%20Colombiano!3m2!1d36.706177!2d-4.4355006999999995!5e0!3m2!1ses!2ses!4v1675187910966!5m2!1ses!2ses"
        width="600"
        height="450"
        //style="border:20;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}

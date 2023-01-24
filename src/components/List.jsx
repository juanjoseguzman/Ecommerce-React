export default function List({ list, onClick }) {
  function handleClick(id) {
    const newList = list.filter((item) => item.id !== id);
    onClick(newList);
  }

  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          {item.title}
          <button onClick={() => handleClick(item.id)}>X</button>
        </li>
      ))}
    </ul>
  );
}

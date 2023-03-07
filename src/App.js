import React from "react";
import { Button } from "./Button";

const App = () => {
  // https://viacep.com.br/ws/01001000/json/

  const [dados, setDados] = React.useState(false);
  let [item, setItem] = React.useState("tatu");
  let [lista, setLista] = React.useState(["item 1"]);
  let [x, setX] = React.useState(1);

  function handleClick() {
    setX((x) => {
      return x + 1;
    });
    setLista((lista) => [...lista, "item " + x]);
  }

  return (
    <>
      <button onClick={handleClick}>{x}</button>
      <div>
        {lista.map((lista) => (
          <li key={lista}>{lista}</li>
        ))}
      </div>
      <button onClick={() => setItem("toper")}>Setar letra</button>
      <p>{item}</p>
      <Button dados={dados} setDados={setDados} />
      <div>{dados ? "Ativo" : "Desativado"}</div>
    </>
  );
};

export default App;

import React from "react";

const Button = ({ dados, setDados }) => {
  return <button onClick={() => setDados(!dados)}>Abrir</button>;
};

export { Button };

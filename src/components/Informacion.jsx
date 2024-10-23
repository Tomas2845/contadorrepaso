import React from "react";
import Teoria from "./Teoria";

// aqui la mayor parte de la logica
const Informacion = () => {
  return (
    // algo de logica
    <section>
      <h2>Introduccion a react</h2>
      <p>
        React es una biblioteca de JavaScript desarrollada por Facebook para
        construir interfaces de usuario. Se centra en la creación de
        <span className="parrafoResaltado">componentes</span>
        reutilizables que permiten desarrollar aplicaciones web de manera más
        eficiente y organizada.
      </p>
      {/* enviar un props */}
      <Teoria comision = '101i'></Teoria>
    </section>
  )
};

export default Informacion;

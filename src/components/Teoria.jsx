const Teoria = (props) => {
  return (
    <article>
      <h3>Componentes</h3>
      <p>
        : React permite dividir la UI en piezas independientes y reutilizables,
        conocidas como componentes, lo que facilita el mantenimiento y la
        escalabilidad de la aplicación.
      </p>
      <h4>comision: {props.comision} </h4>
    </article>
  );
};

export default Teoria;

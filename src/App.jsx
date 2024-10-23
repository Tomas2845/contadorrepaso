import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Informacion from "./components/Informacion";

function App() {
  return (
    <>
      <main className="container my-1">
        <h1 className="text-center"> Primer proyecto react</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
          consequatur accusamus, optio recusandae iste amet nihil? Iure
          doloribus quod architecto et ut magni odio? Asperiores incidunt ipsum
          aut laboriosam enim.
        </p>
        {/* invocar los componentes*/}

        <Informacion></Informacion>
        
      </main>
    </>
  );
}

export default App;

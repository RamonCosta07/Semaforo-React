import "./App.css";
import Sinalizacao from "./components/Sinalizacao";

function App() {

  return (
    <div className="App">
      <h1>Semáforo</h1>
      <Sinalizacao
        colors={[
          { color: "red", name: "Vermelho" },
          { color: "yellow", name: "Amarelo" },
          { color: "lime", name: "Verde" },
        ]}
      />
    </div>
  );
}

export default App;

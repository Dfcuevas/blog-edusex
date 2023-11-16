import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { HomePage } from "./components/HomePage";
import Estudiantes from "./components/Estudiantes";
import Maestros from "./components/Maestros";
import Padres from "./components/Padres";
import ContenidoMaestros from "./components/ContenidoMaestros";
import ContenidoEstudiantes from "./components/ContenidoEstudiantes";
import ContenidoPadres from "./components/ContenidoPadres";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/maestros" element={<Maestros />}>
          <Route path="contenido-maestros" element={<ContenidoMaestros />} />
        </Route>
        <Route path="/estudiantes" element={<Estudiantes />}>
          <Route
            path="contenido-estudiantes"
            element={<ContenidoEstudiantes />}
          />
        </Route>
        <Route path="/padres" element={<Padres />}>
          <Route path="contenido-padres" element={<ContenidoPadres />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

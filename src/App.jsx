import GastosTable from "./components/gastos/GastosTable";
import NavBar from "./components/NavBar";
import Login from "./login/Login";
import { Routes, Route } from "react-router-dom";
import Inventario from "./inventory/Inventario";

const App = () => {
  return (
    <>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<GastosTable />} />
          <Route path="/login" element={<Login />} />
          <Route path="/inventory" element={<Inventario />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

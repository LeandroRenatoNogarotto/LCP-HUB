import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Fundos from "./pages/Fundos";
import FundoDetalhes from "./pages/FundoDetalhes";
import Relatorios from "./pages/Relatorios";
import Contato from "./pages/Contato";
import "./styles.css";

const App = () => (
  <div className="app-container">
    <Navbar />
    <main className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fundos" element={<Fundos />} />
        <Route path="/fundos/:fundoId" element={<FundoDetalhes />} />
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </main>
    <Footer />
  </div>
);

export default App;

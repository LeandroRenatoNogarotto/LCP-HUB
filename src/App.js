import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Fundos from "./pages/fundos/Fundos";
import Life11 from "./pages/fundos/life11/Life11";
import FundoDetalhes from "./pages/fundos/FundoDetalhes";
import Relatorios from "./pages/relatorios/Relatorios";
import Noticias from "./pages/noticias/Noticias";
import Contato from "./pages/Contato";
import CarteiraIndicadores from "./pages/fundos/life11/CarteiraIndicadores";
import OperacaoDetalhes from "./pages/fundos/life11/OperacaoDetalhes";

import "./styles.css";

const App = () => (
  <div className="app-container">
    <Navbar />
    <main className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fundos" element={<Fundos />} />
        <Route path="/fundos/:fundoId" element={<FundoDetalhes />} />
        <Route path="/fundos/life11" element={<Life11 />} />
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/noticias" element={<Noticias/>} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/fundos/life11/carteira" element={<CarteiraIndicadores />} />
        <Route path="/fundos/life11/carteira/:nome" element={<OperacaoDetalhes />} />
      </Routes>
    </main>
    <Footer />
  </div>
);

export default App;

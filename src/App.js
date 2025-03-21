import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Fundos from "./pages/fundos/Fundos";
import FundoDetalhes from "./pages/fundos/FundoDetalhes";
import Relatorios from "./pages/relatorios/Relatorios";
import Noticias from "./pages/noticias/Noticias";
import Macro from "./pages/Macro";
import Time from "./pages/Time";

import Life11 from "./pages/fundos/life11/Life11";
import CarteiraIndicadores from "./pages/fundos/life11/CarteiraIndicadores";
import OperacaoDetalhes from "./pages/fundos/life11/OperacaoDetalhes";
import EvolucaoVendas from "./pages/fundos/life11/EvolucaoVendas";  
import Inadimplencia from "./pages/fundos/life11/Inadimplencia"; 
import HistoricoDividendos from "./pages/fundos/life11/HistoricoDividendos";
import ExposicaoProjetos from "./pages/fundos/life11/ExposicaoProjetos";

import Lred11 from "./pages/fundos/lred11/Lred11";
import CarteiraIndicadoresLRED from "./pages/fundos/lred11/CarteiraIndicadoresLRED";
import EvolucaoVendasLRED from "./pages/fundos/lred11/EvolucaoVendasLRED";
import InadimplenciaLRED from "./pages/fundos/lred11/InadimplenciaLRED";
import HistoricoDividendosLRED from "./pages/fundos/lred11/HistoricoDividendosLRED";
import ExposicaoProjetosLRED from "./pages/fundos/lred11/ExposicaoProjetosLRED";
import OperacaoDetalhesLRED from "./pages/fundos/lred11/OperacaoDetalhesLRED";

import Lsoi11 from "./pages/fundos/lsoi11/Lsoi11";
import CarteiraIndicadoresLSOI from "./pages/fundos/lsoi11/CarteiraIndicadoresLSOI";
import OperacaoDetalhesLSOI from "./pages/fundos/lsoi11/OperacaoDetalhesLSOI";
import EvolucaoVendasLSOI from "./pages/fundos/lsoi11/EvolucaoVendasLSOI";
import InadimplenciaLSOI from "./pages/fundos/lsoi11/InadimplenciaLSOI";
import HistoricoDividendosLSOI from "./pages/fundos/lsoi11/HistoricoDividendosLSOI";
import ExposicaoProjetosLSOI from "./pages/fundos/lsoi11/ExposicaoProjetosLSOI";

import Tera11 from "./pages/fundos/tera11/Tera11";
import CarteiraIndicadoresTERA from "./pages/fundos/tera11/CarteiraIndicadoresTERA";
import OperacaoDetalhesTERA from "./pages/fundos/tera11/OperacaoDetalhesTERA";
import EvolucaoVendasTERA from "./pages/fundos/tera11/EvolucaoVendasTERA";
import InadimplenciaTERA from "./pages/fundos/tera11/InadimplenciaTERA";
import HistoricoDividendosTERA from "./pages/fundos/tera11/HistoricoDividendosTERA";
import ExposicaoProjetosTERA from "./pages/fundos/tera11/ExposicaoProjetosTERA";
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
        <Route path="/noticias" element={<Noticias/>} />
        <Route path="/macro" element={<Macro />} />
        <Route path="/time" element={<Time />} />

        <Route path="/fundos/life11" element={<Life11 />} />
        <Route path="/fundos/life11/carteira" element={<CarteiraIndicadores />} />
        <Route path="/fundos/life11/carteira/:nome" element={<OperacaoDetalhes />} />
        <Route path="/fundos/life11/:nome/evolucao-vendas" element={<EvolucaoVendas />} />
        <Route path="/fundos/life11/:nome/inadimplencia" element={<Inadimplencia />} />
        <Route path="/fundos/life11/dividendos" element={<HistoricoDividendos />} />
        <Route path="/fundos/life11/exposicao" element={<ExposicaoProjetos />} />

        <Route path="/fundos/lred11" element={<Lred11 />} />
        <Route path="/fundos/lred11/carteira" element={<CarteiraIndicadoresLRED />} />
        <Route path="/fundos/lred11/:nome/evolucao-vendas" element={<EvolucaoVendasLRED />} />
        <Route path="/fundos/lred11/:nome/inadimplencia" element={<InadimplenciaLRED />} />
        <Route path="/fundos/lred11/dividendos" element={<HistoricoDividendosLRED />} />
        <Route path="/fundos/lred11/exposicao" element={<ExposicaoProjetosLRED />} />
        <Route path="/fundos/lred11/carteira/:nome" element={<OperacaoDetalhesLRED />} />

        <Route path="/fundos/lsoi11" element={<Lsoi11 />} />
        <Route path="/fundos/lsoi11/carteira" element={<CarteiraIndicadoresLSOI />} />
        <Route path="/fundos/lsoi11/carteira/:nome" element={<OperacaoDetalhesLSOI />} />
        <Route path="/fundos/lsoi11/:nome/evolucao-vendas" element={<EvolucaoVendasLSOI />} />
        <Route path="/fundos/lsoi11/:nome/inadimplencia" element={<InadimplenciaLSOI />} />
        <Route path="/fundos/lsoi11/dividendos" element={<HistoricoDividendosLSOI />} />
        <Route path="/fundos/lsoi11/exposicao" element={<ExposicaoProjetosLSOI />} />

        <Route path="/fundos/tera11" element={<Tera11 />} />
        <Route path="/fundos/tera11/carteira" element={<CarteiraIndicadoresTERA />} />
        <Route path="/fundos/tera11/carteira/:nome" element={<OperacaoDetalhesTERA />} />
        <Route path="/fundos/tera11/:nome/evolucao-vendas" element={<EvolucaoVendasTERA />} />
        <Route path="/fundos/tera11/:nome/inadimplencia" element={<InadimplenciaTERA />} />
        <Route path="/fundos/tera11/dividendos" element={<HistoricoDividendosTERA />} />
        <Route path="/fundos/tera11/exposicao" element={<ExposicaoProjetosTERA />} />
      </Routes>
    </main>
    <Footer />
  </div>
);

export default App;

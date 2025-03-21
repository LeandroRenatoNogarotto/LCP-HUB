import React from "react";
import "../../styles/Noticias.css"; // Arquivo de estilos

const noticias = [
  {
    titulo: "FIIs que pagam dividendos acima do CDI",
    descricao: "Seis fundos imobiliários estão pagando dividendos acima da Selic. Confira quais são e como investir.",
    link: "https://www.infomoney.com.br/onde-investir/so-6-fiis-fundos-imobiliarios-pagam-dividendos-acima-do-cdi-com-selic-a-1425-copom-veja-lista/",
    imagem: "https://www.infomoney.com.br/wp-content/uploads/2024/08/individual-expressing-concern-about-rising-cost-living-1.jpg?w=1536&quality=70&strip=all", // Exemplo de imagem
  },
  {
    titulo: "Fundo LIFE 11 entra no IFIX",
    descricao: "O LIFE11 agora faz parte do índice IFIX, aumentando sua relevância no mercado de FIIs.",
    link: "https://bpmoney.com.br/mercado/fundo-life-11-passa-a-fazer-parte-do-ifix/",
    imagem: "https://bpmoney.com.br/wp-content/uploads/2023/08/FOTO_NOTICIA_3-1454-1024x1024.jpg", // Exemplo de imagem
  },
  {
    titulo: "LIFE11: Fundo imobiliário com alta rentabilidade",
    descricao: "Descubra por que o LIFE11 pode ser uma excelente oportunidade de investimento.",
    link: "https://opetroleo.com.br/life11-o-fundo-imobiliario-que-promete-alta-rentabilidade/",
    imagem: "https://opetroleo.com.br/wp-content/uploads/2025/03/Taxacao-FIIs-450x253.webp", // Exemplo de imagem
  }
];

const Noticias = () => (
  <div className="noticias-container">
    <h1 id="noticias">Notícias</h1>
    <p>Confira as últimas notícias sobre nossos fundos e oportunidades de investimento.</p>

    <div className="noticias-lista">
      {noticias.map((noticia, index) => (
        <a key={index} href={noticia.link} target="_blank" rel="noopener noreferrer" className="noticia-card">
          <img src={noticia.imagem} alt={noticia.titulo} className="noticia-imagem" />
          <div className="noticia-texto">
            <h2>{noticia.titulo}</h2>
            <p>{noticia.descricao}</p>
          </div>
        </a>
      ))}
    </div>
  </div>
);

export default Noticias;

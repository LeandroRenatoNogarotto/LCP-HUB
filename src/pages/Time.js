import React, { useState } from "react";
import "../styles/Time.css";

const setores = {
  "Diretoria": [
    { id: 1, nome: "João Gabriel Leitão", cargo: "Diretor Presidente", telefone: "(21) 98845-2654 / +1 (412) 692-0425", email: "jleitao@lifecapitalpartners.com.br" }
  ],
  "Operações": [
    { id: 2, nome: "Bernardo Favorito", cargo: "Diretor de Operações", telefone: "(41) 98812-6083", email: "bfavorito@lifecapitalpartners.com.br" },
    { id: 3, nome: "Felippe Teobaldo", cargo: "Estagiário", telefone: "(41) 99831-2478", email: "fteobaldo@lifecapitalpartners.com.br" },
    { id: 4, nome: "Fellipe Gomes", cargo: "Estagiário", telefone: "(41) 99151-9342", email: "fgomes@lifecapitalpartners.com.br" },
    { id: 5, nome: "Leandro Nogarotto", cargo: "Analista de IA", telefone: "(41) 99278-7359", email: "lnogarotto@lifecapitalpartners.com.br",  foto: "/images/leandro.png"  },
    { id: 6, nome: "Milena Garcia", cargo: "Analista de Controladoria e Risco", telefone: "(41) 99690-4195", email: "mgarcia@lifecapitalpartners.com.br" },
  ],
  "Gestão de Recursos": [
    { id: 7, nome: "Caio Roland", cargo: "Analista de Investimentos", telefone: "(65) 99637-9015", email: "croland@lifecapitalpartners.com.br" },
    { id: 8, nome: "Christian Solon", cargo: "Head de Real Estate", telefone: "(41) 99179-0203 / +1 (773) 236-5315", email: "csolon@lifecapitalpartners.com.br" },
    { id: 9, nome: "Gabriel Tatara", cargo: "Analista de Investimentos", telefone: "(41) 99852-7584", email: "gtatara@lifecapitalpartners.com.br" },
    { id: 10, nome: "Gabriel Wescher", cargo: "Estagiário", telefone: "(41) 99730-1021", email: "gwescher@lifecapitalpartners.com.br" },
    { id: 11, nome: "Maurício Villatore", cargo: "Engenheiro Civil", telefone: "(41) 98889-7674", email: "mvillatore@lifecapitalpartners.com.br" },
    { id: 12, nome: "Renan Guedes", cargo: "Analista de Investimentos", telefone: "(41) 99664-9086", email: "rguedes@lifecapitalpartners.com.br" },
    { id: 13, nome: "Thomas Gomes", cargo: "Head de Incorporação", telefone: "(41) 99191-5072", email: "tgomes@lifecapitalpartners.com.br" },
  ],
  "Relação com o Investidor": [
    { id: 14, nome: "Caio Frare", cargo: "Estagiário", telefone: "(41) 99236-7474", email: "cfrare@lifecapitalpartners.com.br" },
    { id: 15, nome: "Felipe Carninatti", cargo: "Analista de RI", telefone: "(54) 99205-7007", email: "fcarminatti@lifecapitalpartners.com.br" },
    { id: 16, nome: "Fernanda Moutinho", cargo: "Diretora de RI", telefone: "(21) 99761-0025", email: "fmoutinho@lifecapitalpartners.com.br" },
    { id: 17, nome: "Stefano Parodi", cargo: "Analista de RI", telefone: "(41) 99119-8686", email: "sparodi@lifecapitalpartners.com.br" },
  ],
  "Estruturação": [
    { id: 18, nome: "Jan Dallegrave", cargo: "Estagiário", telefone: "(41) 9685-8987", email: "jdallegrave@lifecapitalpartners.com.br" },
    { id: 19, nome: "Juliane Effting", cargo: "Head de Estruturação", telefone: "(11) 97396-3893", email: "jeffting@lifecapitalpartners.com.br" },
  ],
  "Administrativo/RH/Financeiro": [
    { id: 20, nome: "Caroline Fiala", cargo: "Head Administrativa", telefone: "(41) 99981-3433", email: "cfiala@lifecapitalpartners.com.br" }
  ]
};

const Time = () => {
  const [membroSelecionado, setMembroSelecionado] = useState(null);

  const toggleContato = (id) => {
    setMembroSelecionado(membroSelecionado === id ? null : id);
  };

  return (
    <div id="time-container">
      <h1 id="time-title">Nosso Time</h1>

      {Object.keys(setores).map((setor, index) => (
        <div key={index} className="time-setor">
          <h2 id={`time-setor-${index}`}>{setor}</h2>

          <div className="time-membros">
            {setores[setor].map((membro) => (
              <div key={membro.id} className="time-membro">
                <img 
                    src={membro.foto || "/images/default.png"} 
                    alt={membro.nome} 
                    className="time-foto" 
                  />

                <h3 onClick={() => toggleContato(membro.id)} id={`membro-nome-${membro.id}`} className="time-membro-nome">
                  {membro.nome}
                </h3>
                <p className="time-membro-cargo">{membro.cargo}</p>

                {membroSelecionado === membro.id && (
                  <div id={`contato-${membro.id}`} className="time-contato">
                    <p>📞 {membro.telefone}</p>
                    <p>📧 {membro.email}</p>
                  </div>
                )}


              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Time;

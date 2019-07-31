import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  //Estado do jogo (INICIO, RODANDO, FIM)
  const [estado, setEstado] = useState("INICIO");
  const [palpite, setPalpite] = useState(150);
  const [tentativas, setTentativas] = useState(1);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setPalpite(150);
    setTentativas(1);
  };

  if (estado === "INICIO") {
    return (
      <div>
        <p>Pense em um número de 0 à 300</p>
        <button onClick={iniciarJogo}>Começar Jogo!</button>
      </div>
    );
  }

  // <> 300
  const menor = () => {
    setTentativas(tentativas + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setTentativas(tentativas + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "FIM") {
    return (
      <div>
        <p>Fim do Jogo</p>
        <p>
          Acertei o número {palpite} com {tentativas} chute(s)!
        </p>
        <button onClick={iniciarJogo}>Recomeçar</button>
      </div>
    );
  }

  return (
    <div className="App">
      <p>O seu número é {palpite}?</p>
      <button onClick={menor}>Menor</button>
      <button onClick={acertou}>Acertou</button>
      <button onClick={maior}>Maior</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

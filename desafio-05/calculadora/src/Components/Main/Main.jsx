import { useState } from "react";
import './Main.scss'

export default function Main() {
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();

  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
  };

  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
  };

  const soma = () => {
    setResultado(primeiroValor + segundoValor);
  };

  const subtracao = () => {
    setResultado(primeiroValor - segundoValor);
  };

  const multiplicacao = () => {
    setResultado(primeiroValor * segundoValor);
  };

  const divisao = () => {
    setResultado(primeiroValor / segundoValor);
  };

  return (
    <main>
      <section className="inicio">
        <h1>Calculadora</h1>
        <input
          type="number"
          onChange={capturandoPrimeiroValor}
          placeholder="Digite o primeiro valor"
        />
        <input
          type="number"
          onChange={capturandoSegundoValor}
          placeholder="Digite o segundo valor"
        />
        <section className="botoes">
          <button onClick={soma} className="btn">
            +
          </button>
          <button onClick={subtracao} className="btn">
            -
          </button>
          <button onClick={multiplicacao} className="btn">
            *
          </button>
          <button onClick={divisao} className="btn">
            /
          </button>
        </section>
        <section className="result">
          {resultado !== undefined && <h2>Resultado: {resultado}</h2>}
        </section>
      </section>
    </main>
  );
}

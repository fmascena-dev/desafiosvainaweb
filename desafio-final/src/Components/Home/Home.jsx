import { useState } from 'react';
import copoVerde from '../../assets/Images/Home/copo1.png';
import copoVermelho from '../../assets/Images/Home/copo2.png';
import copoAmarelo from '../../assets/Images/Home/copo3.png';
import copaoVerde from '../../assets/Images/Home/copao-verde.png';
import copaoVermelho from '../../assets/Images/Home/copao-red.png';
import copaoAmarelo from '../../assets/Images/Home/copao-amarelo.png';
import ellipseVerde from '../../assets/Images/Home/ellipse-green.png';
import ellipseVermelho from '../../assets/Images/Home/ellipse-red.png';
import ellipseAmarelo from '../../assets/Images/Home/ellipse-yellow.png';
import Button from '../Button/Button';

export default function Home() {
  const [corAtual, setCorAtual] = useState('verde');

  const cores = {
    verde: {
      backgroundImage: 'url(' + ellipseVerde + ')',
      copo: copaoVerde,
    },
    vermelho: {
      backgroundImage: `url(${ellipseVermelho})`,
      copo: copaoVermelho,
    },
    amarelo: {
      backgroundImage: `url(${ellipseAmarelo})`,
      copo: copaoAmarelo,
    },
  };

  const handleChangeColor = (color) => {
    setCorAtual(color);
  };

  return (
    <main>
      <section>
        <div>
          <p>Mais que Café</p>
          <h1>Isso é Starbucks</h1>
          <p>
            A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns
            dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o
            Latte Macchiato e o Espresso. Além disso, a Starbucks oferece
            bebidas quentes e frias, doces diferenciados e sanduíches.
          </p>
          <Button />
        </div>
      </section>
      <section>
        <figure>
          <img
            src={copoVerde}
            alt="Copo Verde"
            onClick={() => handleChangeColor('verde')}
          />
          <img
            src={copoVermelho}
            alt="Copo Vermelho"
            onClick={() => handleChangeColor('vermelho')}
          />
          <img
            src={copoAmarelo}
            alt="Copo Amarelo"
            onClick={() => handleChangeColor('amarelo')}
          />
        </figure>
      </section>
      <section>
        <div
          className="image-section"
          style={{
            backgroundImage: cores[corAtual].backgroundImage,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <img
            src={cores[corAtual].copo}
            alt={`Copo ${corAtual}`}
            className="main-copo"
          />
        </div>
      </section>
    </main>
  );
}

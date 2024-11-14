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
import {
  ButtonWrapper,
  Description,
  Figure,
  ImageSection,
  Main,
  MainCopo,
  Section,
  Subtitle,
  TextContainer,
  Thumbnail,
  Title,
} from '/src/Components/Home/HomeStyles';

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
    <Main>
      <Section>
        <TextContainer>
          <Subtitle>Mais que Café</Subtitle>
          <Title>
            Isso é <span>Starbucks</span>
          </Title>
          <Description>
            A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns
            dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o
            Latte Macchiato e o Espresso. Além disso, a Starbucks oferece
            bebidas quentes e frias, doces diferenciados e sanduíches.
          </Description>
          <ButtonWrapper>
            <Button />
          </ButtonWrapper>
        </TextContainer>
      </Section>
      <Section>
        <Figure>
          <Thumbnail
            src={copoVerde}
            alt="Copo Verde"
            onClick={() => handleChangeColor('verde')}
          />
          <Thumbnail
            src={copoVermelho}
            alt="Copo Vermelho"
            onClick={() => handleChangeColor('vermelho')}
          />
          <Thumbnail
            src={copoAmarelo}
            alt="Copo Amarelo"
            onClick={() => handleChangeColor('amarelo')}
          />
        </Figure>
      </Section>
      <ImageSection
        className="image-section"
        style={{
          backgroundImage: cores[corAtual].backgroundImage,
        }}
      >
        <MainCopo
          src={cores[corAtual].copo}
          alt={`Copo ${corAtual}`}
          className="main-copo"
        />
      </ImageSection>
    </Main>
  );
}

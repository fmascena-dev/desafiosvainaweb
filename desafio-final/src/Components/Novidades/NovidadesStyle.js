import styled from 'styled-components';

export const SecaoNovidades = styled.section`
  display: flex;
  align-items: center;
  background: rgba(30, 57, 50, 1);
  color: #fff;
  /* height: 100vh; */
  padding: 2rem;

  /* Responsivo para telas pequenas (celulares) */
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
    height: auto;
  }
`;

export const FigureNovidades = styled.figure`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 5rem 0;

  /* Ajustes para tablets e telas menores */
  @media (max-width: 1024px) {
    flex-direction: column;
    margin: 3rem 0;
  }

  /* Ajustes para celulares */
  @media (max-width: 768px) {
    margin: 2rem 0;
    gap: 2rem;
  }
`;

export const FigCapNovi = styled.figcaption`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 30%;

  /* Ajuste para telas médias */
  @media (min-width: 970px) and (max-width: 1300px) {
    width: 40%;
  }

  /* Ajustes para tablets */
  @media (min-width: 460px) and (max-width: 969px) {
    display: flex;
    flex-direction: column;
    width: 70%;
    gap: 0.4rem;
    align-items: center;
    text-align: center;
  }

  /* Ajustes para celulares */
  @media (min-width: 250px) and (max-width: 459px) {
    width: 80%;
    align-items: center;
    text-align: center;
    gap: 0.4rem;
  }
`;

export const SpanParagrafo = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 1.1rem;

  /* Ajuste para tablets */
  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  /* Ajuste para celulares */
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const Titulo = styled.h2`
  font-size: 2.8rem;

  /* Ajuste para tablets */
  @media (max-width: 1024px) {
    font-size: 2.2rem;
  }

  /* Ajuste para celulares */
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const Paragrafo = styled.p`
  font-size: 1.4rem;

  /* Ajuste para tablets */
  @media (max-width: 1024px) {
    font-size: 1.2rem;
  }

  /* Ajuste para celulares */
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ImgGrao = styled.img`
  width: 40%;

  /* Ajuste para tablets */
  @media (min-width: 460px) and (max-width: 1024px) {
    width: 60%;
    margin-top: 1rem;
    margin-bottom: 10rem;
  }

  /* Ajuste para celulares */
  @media (min-width: 250px) and (max-width: 459px) {
    width: 80%;
    margin-top: 1rem;
  }
`;

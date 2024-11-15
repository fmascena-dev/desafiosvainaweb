import styled from 'styled-components';

export const Titulo = styled.h2`
  font-size: 2.8rem;
  color: rgba(30, 50, 50, 1);

  /* Ajuste para tablets */
  @media (max-width: 1024px) {
    font-size: 2.4rem;
  }

  /* Ajuste para celulares */
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Img = styled.img`
  border-radius: 10px;
  width: 30%;

  /* Ajuste para celulares */
  @media (min-width: 250px) and (max-width: 459px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  /* Ajuste para tablets */
  @media (min-width: 460px) and (max-width: 969px) {
    width: 80%;
  }
`;

export const Secao = styled.section`
  width: 100%;
  margin: 4rem 0;
  padding: 0 2rem;

  /* Ajuste para celulares */
  @media (max-width: 768px) {
    margin: 2rem 0;
  }
`;

export const Fig = styled.figure`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 4rem;

  /* Ajuste para tablets */
  @media (min-width: 460px) and (max-width: 969px) {
    flex-direction: column;
    padding: 3rem;
    gap: 3rem;
  }

  /* Ajuste para celulares */
  @media (min-width: 250px) and (max-width: 459px) {
    flex-direction: column;
    padding: 2rem;
  }
`;

export const FigCap = styled.figcaption`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 50%;

  /* Ajuste para tablets */
  @media (min-width: 460px) and (max-width: 969px) {
    width: 70%;
    align-items: center;
    text-align: center;
  }

  /* Ajuste para celulares */
  @media (min-width: 250px) and (max-width: 459px) {
    width: 90%;
    align-items: center;
    text-align: center;
  }
`;

export const Span = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 1.1rem;
  color: rgba(30, 50, 50, 1);

  /* Ajuste para tablets */
  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  /* Ajuste para celulares */
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const Paragrafo = styled.p`
  font-size: 1.4rem;
  width: 80%;
  color: rgba(30, 57, 50, 1);
  line-height: 1.5;
  letter-spacing: 0.1em;

  /* Ajuste para tablets */
  @media (min-width: 460px) and (max-width: 969px) {
    font-size: 1.2rem;
    width: 90%;
  }

  /* Ajuste para celulares */
  @media (min-width: 250px) and (max-width: 459px) {
    font-size: 1.2rem;
    width: 100%;
  }
`;

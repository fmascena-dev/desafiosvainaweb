import styled from 'styled-components';

export const Rodape = styled.footer`
  display: flex;
  width: 100%;
  position: absolute;
  box-shadow: 0 1px 10px rgba(30, 57, 50, 0.7);

  @media (min-width: 250px) and (max-width: 459px){
    position: relative;
    top: 31.3rem;
  }
  
  @media (min-width: 460px) and (max-width: 959px){
    position: relative;
    top: 22.8rem;
  }
`;

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 2.5rem;

  /* Ajuste para celulares */
  @media (min-width: 250px) and (max-width: 459px) {
    flex-direction: column;
    align-items: center;
  }

  /* Ajuste para tablets */
  @media (min-width: 460px) and (max-width: 969px){
    padding: 1rem;
  }
`;

export const ImgLogo = styled.img`
    width: 100%;
`

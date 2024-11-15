import styled from 'styled-components';

export const Rodape = styled.footer`
  display: flex;
  z-index: 1;
  width: 100%;
  /* box-shadow: 0 1px 10px rgba(30, 57, 50, 0.7); */

  @media (min-width: 250px) and (max-width: 459px) {
    position: relative;
    top: 31.3rem;
  }

  @media (min-width: 460px) and (max-width: 959px) {
    position: relative;
    top: 22.97rem;
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
    gap: 0.8rem;
  }

  /* Ajuste para tablets */
  @media (min-width: 460px) and (max-width: 969px) {
    padding: 1rem;
    gap: 1rem;
  }
`;

export const ImgLogo = styled.img`
  width: 100%;
`;
export const Text = styled.p`
  font-size: 1.4rem;
  color: rgba(30, 57, 50, 1);
  margin-left: 1rem;

  a {
    color: rgba(30, 110, 50, 1);
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;

    &:hover {
      color: rgba(30, 200, 50, 0.7);
      text-decoration: underline;
    }
  }

  /* Ajuste para celulares */
  @media (min-width: 250px) and (max-width: 459px) {
    margin-left: 0;
    text-align: center;

    a {
      font-size: 1.6rem;
    }
  }

  /* Ajuste para tablets */
  @media (min-width: 460px) and (max-width: 969px) {
    text-align: center;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  font-size: 2rem;

  @media (min-width: 250px) and (max-width: 459px) {
    font-size: 1.8rem;
  }

  @media (min-width: 460px) and (max-width: 969px) {
    font-size: 1.8rem;
  }
`;

export const UlMedia = styled.ul`
  list-style: none;
  display: flex;
  gap: 0.8rem;

  @media (min-width: 250px) and (max-width: 459px) {
    gap: 2rem;
  }

  @media (min-width: 460px) and (max-width: 969px) {
    flex-direction: column;
    gap: 0.4rem;
  }
`;

export const LiMedia = styled.li`
  a {
    color: rgba(30, 110, 50, 1);
    text-decoration: none;

    &:hover {
      color: rgba(30, 200, 50, 0.7);
      text-decoration: underline;
    }
  }
`;

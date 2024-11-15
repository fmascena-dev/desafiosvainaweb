import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: auto;

  /* Celular */
  @media (max-width: 600px) {
    padding: 10px;
  }

  /* Tablet */
  @media (min-width: 601px) and (max-width: 900px) {
    padding: 15px;
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;

  /* Celular */
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 10px;
  }

  /* Tablet */
  @media (min-width: 601px) and (max-width: 900px) {
    padding: 15px;
  }
`;

export const TextContainer = styled.div`
  max-width: 55%;
  margin: 2rem 0rem 0rem 2rem;

  /* Celular */
  @media (max-width: 600px) {
    max-width: 90%;
    margin: 1rem 0;
  }

  /* Tablet */
  @media (min-width: 601px) and (max-width: 900px) {
    max-width: 70%;
    margin: 1.5rem 1rem;
  }
`;

export const Title = styled.h2`
  font-size: 2.6rem;
  font-weight: normal;
  color: rgba(30, 50, 50, 1);

  span {
    color: #00704a;
    font-size: 4.1rem;
    font-weight: bold;
  }

  /* Celular */
  @media (max-width: 600px) {
    font-size: 2rem;

    span {
      font-size: 3rem;
    }
  }

  /* Tablet */
  @media (min-width: 601px) and (max-width: 900px) {
    font-size: 2.4rem;

    span {
      font-size: 3.5rem;
    }
  }
`;

export const Subtitle = styled.p`
  font-size: 2.5rem;
  font-weight: 300;
  color: rgba(30, 50, 50, 1);

  /* Celular */
  @media (max-width: 600px) {
    font-size: 1.6rem;
  }

  /* Tablet */
  @media (min-width: 601px) and (max-width: 900px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: rgba(30, 50, 50, 1);
  line-height: 1.5;
  letter-spacing: 0.1em;

  /* Celular */
  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 1.4;
  }

  /* Tablet */
  @media (min-width: 601px) and (max-width: 900px) {
    font-size: 1.1rem;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 5px;

  /* Celular */
  @media (max-width: 600px) {
    margin-top: 10px;
  }

  /* Tablet */
  @media (min-width: 601px) and (max-width: 900px) {
    margin-top: 8px;
  }
`;

export const ImageSection = styled.div`
  background-image: ${(props) => props.backgroundImage};
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  z-index: -1;
  padding: 9rem 0 0 5rem;
  right: 0;
  bottom: 0;
  transform: translateY(42%);

  /* Celular */
  @media (max-width: 600px) {
    padding: 6rem 0 0 2rem;
    transform: translateY(115%);
  }

  /* Tablet */
  @media (min-width: 601px) and (max-width: 900px) {
    padding: 4rem 0 0 3rem;
    transform: translateY(110%);
  }
`;

export const MainCopo = styled.img`
  width: 80%;
  transform: translateY(-35%) translateX(-18%);

  /* Celular */
  @media (max-width: 600px) {
    width: 100%;
    transform: translateY(-30%) translateX(-10%);
  }

  /* Tablet */
  @media (min-width: 601px) and (max-width: 900px) {
    width: 60%;
    transform: translateY(-25%) translateX(-12%);
  }
`;

export const Figure = styled.figure`
  display: flex;
  justify-content: center;
  width: 100%;

  /* Celular */
  @media (max-width: 600px) {
    margin: 0;
  }
`;

export const Thumbnail = styled.img`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 1s ease;

  &:hover {
    transform: rotate(360deg);
  }

  /* Celular */
  @media (max-width: 600px) {
    width: 20%;
  }

  /* Tablet */
  @media (min-width: 601px) and (max-width: 900px) {
    width: 15%;
  }
`;

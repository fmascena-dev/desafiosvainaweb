import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: auto;
  border: 1px solid red;
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  box-sizing: border-box;
`;

export const TextContainer = styled.div`
  max-width: 500px;
`;

export const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: normal;

  span {
    color: #00704a;
    font-size: 3.4rem;
    font-weight: bold;
  }
`;

export const Subtitle = styled.p`
  font-size: 2rem;
  font-weight: 300;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #333;
  line-height: 1.5;
`;

export const ButtonWrapper = styled.div`
  margin-top: 5px;
`;

export const ImageSection = styled.div`
  background-image: ${(props) => props.backgroundImage};
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute; /* Permite o posicionamento absoluto */
  right: 0; /* Cola o contêiner no lado direito */
  bottom: 0;
  transform: translateY(40%);
`;

export const MainCopo = styled.img`
  width: 100%;
  transform: translateY(-15%);
`;

export const Figure = styled.figure`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
`;

export const Thumbnail = styled.img`
  width: 30%;
  cursor: pointer;
  transition: transform 1s ease;

  &:hover {
    transform: rotate(360deg);
  }
`;

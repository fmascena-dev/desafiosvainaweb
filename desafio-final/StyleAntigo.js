import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 100vh;
  background-color: #f4f4f9;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  padding: 20px;
  box-sizing: border-box;
`;

export const TextContainer = styled.div`
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: normal;
  color: rgba(30, 50, 50, 1);

  span {
    color: #00704a;
    font-size: 3.8rem;
    font-weight: bold;
  }
`;

export const Subtitle = styled.p`
  font-size: 2.5rem;
  font-weight: 300;
  color: rgba(30, 50, 50, 1);
`;

export const Description = styled.p`
  font-size: 1rem;
  color: rgba(30, 50, 50, 1);
  line-height: 1.5;
`;

export const ButtonWrapper = styled.div`
  margin-top: 1.5rem;
`;

export const ImageSection = styled.div`
  background-image: ${(props) => props.backgroundImage};
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  width: 45%;
  height: 84.2vh;
`;

export const MainCopo = styled.img`
  width: 60%;
  position: absolute;
  bottom: 0;
`;

export const Figure = styled.figure`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
`;

export const Thumbnail = styled.img`
  width: 30%;
  margin: 0 1rem;
  cursor: pointer;
  transition: transform 1s ease;

  &:hover {
    transform: rotate(360deg);
  }
`;

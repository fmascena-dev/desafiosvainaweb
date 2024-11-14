import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: auto;
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

export const TextContainer = styled.div`
  max-width: 55%;
  margin: 2rem 0rem 0rem 2rem;
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
`;

export const Subtitle = styled.p`
  font-size: 2.5rem;
  font-weight: 300;
  color: rgba(30, 50, 50, 1);
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: rgba(30, 50, 50, 1);
  line-height: 1.5;
  letter-spacing: 0.1em;
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
  position: absolute;
  z-index: -1;
  padding: 9rem 0 0 5rem;
  right: 0;
  bottom: 0;
  transform: translateY(33%);
`;

export const MainCopo = styled.img`
  width: 80%;
  transform: translateY(-35%) translateX(-18%);
`;

export const Figure = styled.figure`
  display: flex;
  justify-content: center;
  width: 100%;
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
`;

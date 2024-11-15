import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Container, ImgLogo, Rodape } from './FooterStyle';

export default function Footer() {
  return (
    <Rodape>
      <Container>
        <figure>
          <ImgLogo src="/Images/logomarca.png" alt="logomarca Starbucks" />
        </figure>
        <div>
          <p>
            Desafio Final desenvolvido por{' '}
            <a href="https://linkedin.com/in/felipe-mascena" target="_blank">
              Felipe Mascena
            </a>{' '}
          </p>
        </div>
        <div>
          <a href="">
            <FaFacebook />
          </a>
          <a href="">
            <FaLinkedin />
          </a>
          <a href="">
            <FaInstagram />
          </a>
        </div>
      </Container>
    </Rodape>
  );
}

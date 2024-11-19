import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import {
  Container,
  ImgLogo,
  LiMedia,
  Rodape,
  SocialMedia,
  Text,
  UlMedia,
} from './FooterSobreStyle.js';

export default function FooterSobre() {
  return (
    <Rodape>
      <Container>
        <figure>
          <ImgLogo src="/Images/logomarca.png" alt="logomarca Starbucks" />
        </figure>
        <div>
          <Text>
            Desafio Final desenvolvido por{' '}
            <a href="https://linkedin.com/in/felipe-mascena" target="_blank">
              Felipe Mascena
            </a>{' '}
          </Text>
        </div>
        <SocialMedia>
          <UlMedia>
            <LiMedia>
              <a
                href="https://www.facebook.com/felipe.mascena17"
                target="_blank"
              >
                <FaFacebook />
              </a>
            </LiMedia>
            <LiMedia>
              <a
                href="https://www.linkedin.com/in/felipe-mascena"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </LiMedia>
            <LiMedia>
              <a href="https://www.instagram.com/f_mascena.dev" target="_blank">
                <FaInstagram />
              </a>
            </LiMedia>
          </UlMedia>
        </SocialMedia>
      </Container>
    </Rodape>
  );
}

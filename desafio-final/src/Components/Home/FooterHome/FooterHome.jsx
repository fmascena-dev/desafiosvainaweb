import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import {
  Container,
  ImgLogo,
  LiMedia,
  Rodape,
  SocialMedia,
  Text,
  UlMedia,
} from './FooterHomeStyle.js';

export default function FooterHome() {
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
              <a href="">
                <FaFacebook />
              </a>
            </LiMedia>
            <LiMedia>
              <a href="">
                <FaLinkedin />
              </a>
            </LiMedia>
            <LiMedia>
              <a href="">
                <FaInstagram />
              </a>
            </LiMedia>
          </UlMedia>
        </SocialMedia>
      </Container>
    </Rodape>
  );
}

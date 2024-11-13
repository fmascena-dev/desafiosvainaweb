import loja from '../../assets/Images/sobre.png'
import Button from '../Button/Button';
import { Fig, FigCap, Img, Paragrafo, Secao, Span, Titulo } from './SobreStyle';


export default function Sobre() {
    return (
      <Secao>
        <Fig>
          <Img src={loja} alt="foto da Starbucks" />
          <FigCap>
            <Span>PREPARAÇÃO</Span>
            <Titulo>Níveis de torra</Titulo>
            <Paragrafo>
              Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou
              Torra Escura? Estas são as torras que fazem parte dos níveis de
              torra Starbucks®.
            </Paragrafo>
            <Button />
          </FigCap>
        </Fig>
      </Secao>
    );
};

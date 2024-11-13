import novidade from '../../assets/Images/novidades.png';
import Button from '../Button/Button';
import {
  FigCapNovi,
  FigureNovidades,
  SecaoNovidades,
  SpanParagrafo,
  Titulo,
  Paragrafo,
  ImgGrao
} from './Novidades';

export default function Novidades() {
  return (
    <SecaoNovidades>
      <FigureNovidades>
        <FigCapNovi>
          <SpanParagrafo>PREPARAÇÃO</SpanParagrafo>
          <Titulo>Níveis de torra</Titulo>
          <Paragrafo>
            Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou
            Torra Escura? Estas sãos as torras que fazem parte dos níveis de
            torra Starbucks®.
          </Paragrafo>
          <Button />
        </FigCapNovi>
        <ImgGrao src={novidade} alt="Grão de café" />
      </FigureNovidades>
    </SecaoNovidades>
  );
}

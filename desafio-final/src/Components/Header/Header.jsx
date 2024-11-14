import { Link } from 'react-router-dom';
import { Lista, Nav, Principal } from './HeaderStyle';

export default function Header() {
  return (
    <Principal>
      <img src="/Images/logomarca.png" alt="logomarca" />
      <Nav>
        <Lista>
          <Link to="/">Home</Link>
        </Lista>
        <Lista>
          <Link to="/novidades">Novidades</Link>
        </Lista>
        <Lista>
          <Link to="/sobre">Sobre</Link>
        </Lista>
      </Nav>
    </Principal>
  );
}

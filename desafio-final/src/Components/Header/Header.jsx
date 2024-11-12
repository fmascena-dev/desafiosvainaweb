import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <img src="" alt="logomarca" />
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/novidades">Novidades</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
      </nav>
    </header>
  );
}

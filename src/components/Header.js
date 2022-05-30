import { Link } from 'react-router-dom';

export default function Header() {
  return(
    <header className="header">
      <nav className='header--nav'>
        <Link to="/">Home</Link>
        <br />
        <Link to="/Resume">Resume</Link>
      </nav>
    </header>
  );
}
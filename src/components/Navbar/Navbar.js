import { Link } from 'react-router-dom';
import '../Navbar/index.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>Movie blogs</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
      </div>
    </nav>
  );
};

export default NavBar;

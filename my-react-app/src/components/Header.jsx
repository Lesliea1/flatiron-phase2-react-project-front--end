import '../styles/Header.css';
import { Link } from 'react-router-dom';


const Header = () => {

  return (
    <header className="header-container">
          <h1 className="header-title">Sweden for Thought!</h1>
          
           <img
        className="header-image"
        src="https://wallpapercave.com/wp/wp2025142.jpg"
        alt="City life Sweden"
          />
          
 <nav className='home-nav'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
           <li>
           <Link to="/about">About</Link>
          </li>
        </ul>
</nav>
           <div className="header-line"></div>
          
    </header>
  );
};

export default Header;

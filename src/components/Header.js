import { Link } from 'react-router-dom';
import '../css/homepage.css';

function Header() {
    return(
        <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/">My Steam Games Blog</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item ps-lg-3">
                            <Link className="nav-link" aria-current="page" to="/dota2">DOTA 2</Link>
                        </li>
                        <li className="nav-item ps-lg-3">
                            <Link className="nav-link" to="/csgo">CSGO</Link>
                        </li>
                        <li className="nav-item ps-lg-3">
                            <Link className="nav-link" to="/freestyle2">FreeStyle 2</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;
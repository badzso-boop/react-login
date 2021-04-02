import {Link} from 'react-router-dom';

function Navbar() {
    return(
        <nav className="navbar navbar-expand-xl bg-dark navbar-dark">
            <Link className="navbar-brand" to='/naplo'>Családi Napló</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link py-2 px-3" to = '/'>Belépés/Regisztráció</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link py-2 px-3" to='/main'>Főoldal</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link py-2 px-3" to='/todo'>Teendők</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link py-2 px-3" to='/gep'>Géphasználat</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link py-2 px-3" to='/exit'>Kilépés</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link py-2 px-3" to='/profile'>Felhasználói profil</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
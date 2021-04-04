import {Link} from 'react-router-dom';

function Navbar() {
    return(
            <nav className="navbar navbar-expand-xl bg-dark navbar-dark">
                <Link className="navbar-brand text-uppercase font-weight-bold" to='/naplo'>Családi Napló</Link>
                <button className="btn navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
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
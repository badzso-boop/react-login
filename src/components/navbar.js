import {Link} from 'react-router-dom';

function Navbar() {
    return(
        <nav>
            <ul>
                <li>
                    <Link to={'/'}>Belépés/Regisztráció</Link>
                </li>
                <li>
                    <Link to={'/todo'}>Teendők</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
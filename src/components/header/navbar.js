import './navbar.css';
import khwaLogo from '../../assets/khwaLogo.png';


const Navbar = () => {
    return (
        <nav class="header">
            <div class="nav-logo">
                <img class="img-logo" src={khwaLogo} alt='logo'/>
            </div>
            <ul class="nav nav-underline">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#servicios">Servicios</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Equipo</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contacto</a>
                </li>
            </ul>
        </nav>
        
        )
    }

    export default Navbar;

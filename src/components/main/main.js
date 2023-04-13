import './main.css';
import flecha from '../../assets/flecha.png';
import whatsapp from '../../assets/whatsapp.png';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import khwaGif from '../../assets/khwaGif.gif';

const Hola = () => {
    return(
        <main>
            <div class="main">
            <div class="hola">
                <div class="subt">
                    <h1>Hola, somos KHWA!</h1>
                    <h3>Profesionales en </h3>
                    <h3>Datos, Ciencia &</h3>
                    <h3>Creatividad</h3>
                </div>
                <div>
                    <h2>Comienza a crecer junto a nosotros</h2>
                </div>
                <div>
                    <button class="btn btn-primary btn-contact" type="button">CONTACTÁNOS</button>
                </div>
                <div class="iconos-div">
                    <ul class="nav nav-underline">
                        <li class="nav-item">
                            <a href="#"><img src={instagram} alt='insta'/></a>
                        </li>
                        <li class="nav-item">
                            <a href="#"><img src={whatsapp} alt='wsp'/></a>
                        </li>
                        <li class="nav-item">
                            <a href="#"><img src={facebook} alt='face'/></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="isologo-div">
                <img class="isologo-img" src={khwaGif} alt='khwa'/>
            </div>
            </div>
            <div class="div-btn-serv">
                <button class="btn btn-primary btn-serv" type="button">Ver nuestros SERVICIOS</button>
            </div>
        </main>
    )
}

export default Hola;
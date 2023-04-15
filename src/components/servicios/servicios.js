import './servicios.css';
import nereaFotovideo from '../../assets/nereaFotovideo.gif';
import flexz from '../../assets/flexz.gif';

const Servicios = () => {
    return (
    <div id="servicios" class="div-father">
        <div class="titulo-serv">
                <h1><mark>SERVICIOS . servicies . SERVICIOS  . servicies . SERVICIOS . servicies</mark></h1>
            </div>
        <div class="servicios">
            <div class="tarjeta-div card">
                <h2>IDENTIDAD DE MARCA</h2>
                <a class="btn btn-primary btn-mas" href="#identidad" role="button">Ver más</a>
            </div>
            <div class="tarjeta-div card">
                <img />
            </div>
            <div class="tarjeta-div card color-bronce">
                <h2>DISEÑO DE LOGO</h2>
                <a class="btn btn-primary btn-mas" href="#" role="button">Ver más</a>
            </div>
            <div class="tarjeta-div card">
                <img />
            </div>
            <div class="tarjeta-div card color-yellow">
                <h2>VIDEOS PUBLICITARIOS & CORPORATIVOS</h2>
                <a class="btn btn-primary btn-mas" href="#" role="button">Ver más</a>
            </div>
            <div class="tarjeta-div card">
                <img />
            </div>
            <div class="tarjeta-div card color-lila">
                <h2>ANIMACIONES</h2>
                <a class="btn btn-primary btn-mas" href="#" role="button">Ver más</a>
            </div>
            <div class="tarjeta-div card black">
                <img src={flexz} alt='img'/>
            </div>
            <div class="tarjeta-div card">
                <h2>SITIO WEB</h2>
                <a class="btn btn-primary btn-mas" href="#sitioWeb" role="button">Ver más</a>
            </div>
            <div class="tarjeta-div card">
                <img />
            </div>
            <div class="tarjeta-div card color-bronce">
                <h2>SOCIAL MEDIA</h2>
                <a class="btn btn-primary btn-mas" href="#" role="button">Ver más</a>
            </div>
            <div class="tarjeta-div card">
                <img />
            </div>
            <div class="tarjeta-div card color-yellow">
                <h2>FOTOS & </h2> <h2>VIDEOS DE PRODUCTO/ SERVICIO</h2>
                <a class="btn btn-primary btn-mas" href="#" role="button">Ver más</a>
            </div>
            <div class="tarjeta-div card black">
                <img src={nereaFotovideo} alt='gif'/>
            </div>
            <div class="tarjeta-div card color-lila">
                <h2>ANUNCIOS</h2>
                <a class="btn btn-primary btn-mas" href="#" role="button">Ver más</a>
            </div>
        </div>
    </div>
    )
}

export default Servicios; 
import './servicios.css';
import nereaFotovideo from '../../assets/nereaFotovideo.gif';
import flexz from '../../assets/flexz.gif';
import comidas from '../../assets/comidas.gif';
import animacion from '../../assets/animacion.gif'

const Servicios = () => {
    return (
    <div id="servicios" class="div-father">
        <div class="titulo-serv">
                <h1><mark>SERVICIOS . servicies . SERVICIOS  . servicies . SERVICIOS . servicies</mark></h1>
            </div>
        <div class="servicios">
            <div class="tarjeta-div card">
                <h1>IDENTIDAD DE MARCA</h1>
                <a class="btn btn-primary btn-mas" href="#identidad" role="button">Ver más</a>
            </div>
            <div class="tarjeta-div card color-bronce">
                <h1>DISEÑO GRÁFICO</h1>
                <a class="btn btn-primary btn-mas" href="#diseno" role="button">Ver más</a>
            </div>
            <div class="tarjeta-div card black img-sinpad">
                <img class="card" src={flexz}/>
            </div>
            <div class="tarjeta-div card black img-sinpad">
                <img class="card" src={animacion}/>
            </div>
            <div class="tarjeta-div card color-yellow">
                <h1>SITIO WEB</h1>
                <a class="btn btn-primary btn-mas" href="#sitioWeb" role="button">Ver más</a>
            </div>
            <div class="tarjeta-div card color-lila">
                <h1>SOCIAL MEDIA</h1>
                <a class="btn btn-primary btn-mas" href="#social" role="button">Ver más</a>
            </div>
            <div class="tarjeta-div card">
                <h2>VIDEOS PUBLICITARIOS & CORPORATIVOS</h2>
                <a class="btn btn-primary btn-mas" href="#sitioWeb" role="button">Ver más</a>
            </div>
            <div class="tarjeta-div card color-bronce">
                <h2>ANIMACIONES</h2>
                <a class="btn btn-primary btn-mas" href="#" role="button">Ver más</a>
            </div>
            <div class="tarjeta-div card black img-sinpad">
                <img class="card" src={comidas}/>
            </div>
            <div class="tarjeta-div card black img-sinpad">
                <img class='card' src={nereaFotovideo} alt='gif'/>
            </div>
            <div class="tarjeta-div card color-yellow">
                <h2>FOTOS & </h2> <h2>VIDEOS DE PRODUCTO/ SERVICIO</h2>
                <a class="btn btn-primary btn-mas" href="#" role="button">Ver más</a>
            </div>
            <div class="tarjeta-div card color-lila">
                <h1>ANUNCIOS</h1>
                <a class="btn btn-primary btn-mas" href="#" role="button">Ver más</a>
            </div>
        </div>
    </div>
    )
}

export default Servicios; 
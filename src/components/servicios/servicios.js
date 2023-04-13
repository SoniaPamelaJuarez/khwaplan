import './servicios.css';
import yourlogo from '../../assets/yourlogo.jpg';

const Servicios = () => {
    return (
    <div class="div-father">
        <div class="titulo-serv">
                <h1><mark>SERVICIOS . servicies . SERVICIOS  . servicies . SERVICIOS . servicies</mark></h1>
            </div>
        <div class="servicios">
            <div class="tarjeta-div card">
                <h2>IDENTIDAD DE MARCA</h2>
                <a class="btn btn-primary btn-servi" href="#" role="button">Ver más</a>
            </div>
            <div class="div-img card">
                <img src={yourlogo} alt='img1'/>
            </div>
            <div class="tarjeta-div card color-lila">
                <h2>DISEÑO DE LOGO</h2>
                <a class="btn btn-primary btn-servi" href="#" role="button">Ver más</a>
            </div>
            <div class="tarjeta-div card">
                <img />
            </div>
            <div class="tarjeta-div card">
                <h2>VIDEOS PUBLICITARIOS & CORPORATIVOS</h2>
                <a class="btn btn-primary btn-servi" href="#" role="button">Ver más</a>
            </div>
            <div class="tarjeta-div card">
                <img />
            </div>
            <div class="tarjeta-div card">
                <h2>ANIMACIONES</h2>
                <a class="btn btn-primary btn-servi" href="#" role="button">Ver más</a>
            </div>
            <div class="tarjeta-div card">
                <img />
            </div>
            <div class="tarjeta-div card color-lila">
                <h2>SITIO WEB</h2>
                <a class="btn btn-primary btn-servi" href="#" role="button">Ver más</a>
            </div>
            <div class="tarjeta-div card">
                <img />
            </div>
            <div class="tarjeta-div card">
                <h2>SOCIAL MEDIA</h2>
                <a class="btn btn-primary btn-servi" href="#" role="button">Ver más</a>
            </div>
            <div class="tarjeta-div card">
                <img />
            </div>
            <div class="tarjeta-div card">
                <h2>FOTOS & </h2> <h2>VIDEOS DE PRODUCTO/ SERVICIO</h2>
                <a class="btn btn-primary btn-servi" href="#" role="button">Ver más</a>
            </div>
            <div class="tarjeta-div card">
                <img />
            </div>
            <div class="tarjeta-div card">
                <h2>ANUNCIOS</h2>
                <a class="btn btn-primary btn-servi" href="#" role="button">Ver más</a>
            </div>
        </div>
    </div>
    )
}

export default Servicios; 
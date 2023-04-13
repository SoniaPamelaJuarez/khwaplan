import './identidad.css';
import identPreg1 from '../../assets/identPreg1.png';
import identPreg2 from '../../assets/identPreg2.png';
import identPreg3 from '../../assets/identPreg3.png';
import identPreg4 from '../../assets/identPreg4.png';

const Identidad = () => {
    return(
        <div id="identidad" class="identidad">
            <div>
                <h1><mark>Identidad de Marca . Branding Identity</mark></h1>
            </div>
            <div class="div-father-ident">
                <div class="div-one">
                    <div>
                        <h3>¿Quieres destacar en un mundo lleno de RUIDO?</h3>
                        <h5>En KHWA te ayudamos a construir una identidad que conecte con tu público: Queremos que se enamoren de tu marca </h5>
                    </div>
                    <div class="preguntas">
                        <div class="img1-preg"> <img src={identPreg1} alt='img1'/> </div>
                        <div class="img2-preg"> <img src={identPreg2} alt='img2'/> </div>
                        <div class="img3-preg"> <img src={identPreg3} alt='img3'/> </div>
                        <div class="img4-preg"> <img src={identPreg4} alt='img4'/> </div> 
                    </div>
                    <h5>Hay algo en tu marca que te hace <strong>ESPECIAL</strong> y te hará <strong>DESTACAR</strong>. Te proponemos que lo encontremos <strong>JUNTOS</strong> y lo transformemos en la <strong>ESENCIA</strong> de tu marca, haremos que te identifiquen al instante!</h5>
                </div>
                <div class="div_two">
                    <div class="plan color-yellow">
                        <h2>Basic Khwa</h2>
                    </div>
                    <div class="plan color-yellow">
                        <h2>Premium Khwa</h2>
                    </div>
                    <div class="personalizado">
                        <h4>¿Quieres algo más personalizado?</h4>
                        <a class="btn btn-primary btn-mas" href="#" role="button">Contactános</a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Identidad
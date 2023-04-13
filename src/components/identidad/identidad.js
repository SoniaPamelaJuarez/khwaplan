import './identidad.css';
import identPreg1 from '../../assets/identPreg1.png';
import identPreg2 from '../../assets/identPreg2.png';
import identPreg3 from '../../assets/identPreg3.png';
import identPreg4 from '../../assets/identPreg4.png';

const Identidad = () => {
    return(
        <div class="identidad">
            <div>
                <h1><mark>Identidad de Marca . Branding Identity</mark></h1>
            </div>
            <div class="div-father-ident">
                <div class="div-one">
                    <div>
                        <h2>¿Quieres destacar en un mundo lleno de RUIDO?</h2>
                        <h3>En KHWA te ayudamos a construir una identidad que conecte con tu público</h3>
                    </div>
                    <div class="preguntas">
                        <div class="img1-preg"> <img src={identPreg1} alt='img1'/> </div>
                        <div class="img2-preg"> <img src={identPreg2} alt='img2'/> </div>
                        <div class="img3-preg"> <img src={identPreg3} alt='img3'/> </div>
                        <div class="img4-preg"> <img src={identPreg4} alt='img4'/> </div> 
                    </div>
                    <h2>Hay algo en tu marca que te hace ESPECIAL y te hará DESTACAR. Te propongo que lo encontremos JUNTOS y lo transformemos en la ESENCIA de tu marca, haremos que te identifiquen al instante!</h2>
                </div>
                <div class="div_two">
                    <div class="plan">
                        <h1>Basic Khwa</h1>
                    </div>
                    <div class="plan">
                        <h1>Premium Khwa</h1>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Identidad
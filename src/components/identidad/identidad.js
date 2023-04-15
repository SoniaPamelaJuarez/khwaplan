import './identidad.css';
import identPreg1 from '../../assets/identPreg1.png';
import identPreg2 from '../../assets/identPreg2.png';
import identPreg3 from '../../assets/identPreg3.png';
import identPreg4 from '../../assets/identPreg4.png';
import brand from '../../assets/brand.gif';

const Identidad = () => {
    return(
        <div id="identidad" class="identidad">
            <div>
                <h1><mark>Identidad de Marca . Branding Identity</mark></h1>
            </div>
            <div class="div-father-ident">
                <div class="div-one">
                    <div class="div-one-txt">
                        <h3>¿Quieres destacar en un mundo lleno de RUIDO?</h3>
                        <h5>En KHWA te ayudamos a construir una identidad que conecte con tu público: Queremos que se enamoren de tu marca </h5>
                    </div>
                    <div class="preguntas">
                        <div class="img1-preg"> <img src={identPreg1} alt='img1'/> </div>
                        <div class="img2-preg"> <img src={identPreg2} alt='img2'/> </div>
                        <div class="img3-preg"> <img src={identPreg3} alt='img3'/> </div>
                        <div class="img4-preg"> <img src={identPreg4} alt='img4'/> </div> 
                    </div>
                    <div class="div-one-txt">
                        <h5>Hay algo en tu marca que te hace <strong>ESPECIAL</strong> y te hará <strong>DESTACAR</strong>. Te proponemos que lo encontremos <strong>JUNTOS</strong></h5> 
                        <h5>y lo transformemos en la <strong>ESENCIA</strong> de tu marca, haremos que te identifiquen al instante!</h5>
                    </div>
                </div>
                <div class="div_two">
                    <div class="plan">
                        <h2>Basic Khwa</h2>
                        <div class="plan-style">
                            <div>
                                <p class='font-secondary'>Especial para nuevos emprendedores que desean destacar desde el comienzo.También para los que quieren una nueva mirada fresca para su marca (rebranding)</p>
                                <h4>Incluye:</h4>
                                <ul class="list-style font-secondary">
                                    <li>Diseño de logo principal, isologo e icono</li>
                                    <li>Paleta de color</li>
                                    <li>Tipografías</li>
                                    <li>Brandboard</li>
                                </ul>
                                <h4>¡De regalo!</h4>
                                <p class='font-secondary'>(Opción a escoger: 1 opción)</p>
                                <ul class="list-style font-secondary">
                                    <li>Foto de perfil de Redes Sociales</li>
                                    <li>Diseño de portada de facebook</li>
                                    <li>Diseño de tarjetas</li>
                                    <li>Diseño de hoja membretada</li>
                                </ul>                     
                            </div>
                        </div>
                        <a class="btn btn-primary font-secondary color-lila" href="#" role="button">Quiero más información</a> 
                    </div>
                    <div class="plan-img">
                        <img src={brand} alt='img-brand'/>
                        <div class="personalizado">
                            <h4>¿Quieres algo más personalizado?</h4>
                            <a class="btn btn-primary font-secondary color-lila" href="#" role="button">Contactános</a>
                        </div>
                    </div>
                    <div class="plan">
                        <h2>Premium Khwa</h2>
                        <div class="plan-style">
                            <div>
                                <p class='font-secondary'>¿Quieres llevar tu marca al siguiente nivel? Este plan esta especialmente diseñado para ti</p>
                                <h4>Incluye:</h4>
                                    <ul class="list-style font-secondary">
                                    <li>Diseño de logo principal, isologo e icono</li>
                                    <li>Paleta de color</li>
                                    <li>Tipografías</li>
                                    <li>Elementos gráficos</li>
                                    <li>Brandboard</li>
                                    <li>Brandbook</li>
                                    <li>Gif animado del logo</li>
                                    <li>Reel para anuncio (1)</li>
                                </ul>
                                <h4>¡De regalo!</h4> 
                                <p class='font-secondary'>(Opciones a escoger: 2 opciones)</p>
                                <ul class="list-style font-secondary">
                                    <li>Foto de perfil de Redes Sociales</li>
                                    <li>Diseño de portada de facebook</li>
                                    <li>Diseño de tarjetas</li>
                                    <li>Diseño de hoja membretada</li>
                                </ul>                     
                            </div>
                        </div>
                        <a class="btn btn-primary font-secondary color-lila" href="#" role="button">Quiero más información</a>  
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Identidad
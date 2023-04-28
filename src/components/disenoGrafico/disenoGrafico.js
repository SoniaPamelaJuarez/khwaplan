import './disenoGrafico.css';
import CarouselComponent from './carrousel';
import DisenoCard from '../disenoGrafico/DisenoCard';

const DisenoGrafico = () => {
    return (
        <div id="diseno">
            <h1><mark>Diseño Gráfico . Graphic Desing</mark></h1>
            <div className='bloque1'>
                <div className='historia'>
                    <h1>. ¿Cuál es TU HISTORIA? .</h1>
                    <h1>. What's YOUR HISTORY? .</h1>
                </div>
                <CarouselComponent />
            </div>
            <div className="cards-diseno">
                <DisenoCard
                image="https://ejemplo.com/imagen1.jpg"
                title="Digital"
                />
                <DisenoCard
                image="https://ejemplo.com/imagen2.jpg"
                title="Folletería lista para imprimir"
                />
            </div>
        </div>
    )
}

export default DisenoGrafico; 
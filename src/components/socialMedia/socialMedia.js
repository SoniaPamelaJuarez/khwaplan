import './socialMedia.css';
import SocialMediaCard from './socialMediaCard';
import SocialMediaServices from './socialMediaServices';

const SocialMediaPage = () => {
    return (
        <div id="social" className="social-media-page">
            <h1><mark>Social Media</mark></h1>
            <h5>Ya tienes tu identidad de Marca lista para arrancar y quieres comenzar a publicar contenido en tus RRSS pero no tienes mucha idea de <mark>¿CÓMO?</mark>, o simplemente quieres un <mark>cambio renovador</mark> para tu feed? Entonces estas en el <mark>lugar correcto</mark>, estos planes son ideales para tí. No dudes en contactarnos para que tengamos una reunión y hablemos sobre tus objetivos y espectativas!</h5>
            <div className="cards-social">
                <SocialMediaCard
                image="https://ejemplo.com/imagen1.jpg"
                title="Contenido para RRSS"
                description="Creación de contenido, incluye:"
                services={[
                    'Posteos estáticos',
                    'Reels/Videos',
                    'Foto de perfil',
                    'Banner si corresponde',
                    'Portada para historias destacadas'
                ]}
                />
                <SocialMediaCard
                image="https://ejemplo.com/imagen2.jpg"
                title="Manejo de RRSS"
                services={[
                    'Creación de contenido para redes sociales',
                    'Gestión de redes sociales',
                    'Estrategia de contenido',
                    'Publicidad en redes sociales',
                    'Análisis de métricas',
                ]}
                />
            </div>
        <h3>Nuestros planes son personalizados porque nos fijamos en los objetivos y necesidades de nuestros clientes. Sabemos que es un trabajo en equipo, queremos que funcione y crezcamos juntos</h3>
        </div>
    );
};

export default SocialMediaPage;
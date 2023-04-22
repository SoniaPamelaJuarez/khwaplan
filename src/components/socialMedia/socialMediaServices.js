import './socialMedia.css';

const SocialMediaServices = () => {
    const services = [
      'Creación de contenido para redes sociales',
      'Gestión de redes sociales',
      'Publicidad en redes sociales',
      'Análisis de métricas',
    ];
  
    return (
      <div className="services">
        <ul>
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default SocialMediaServices;

import './socialMedia.css';

const SocialMediaCard = ({ image, title, services, description }) => {
    return (
        <div className="card-social">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
            <ul>
                {services.map((service) => (
                <li className='list-style' key={service}>{service}</li>
                ))}
            </ul>
            <a class="btn btn-primary font-secondary color-lila"  href="#" target="_blank" rel="noopener noreferrer">Contactar</a>
        </div>
    );
};

export default SocialMediaCard;
import './Card.css';

const Card = (props) => {
    return (
        <div className="card">
            <div className="card__container">
                <h2 className="card__title">{props.title}</h2>
            </div>
            <h3 className="card__author">{props.author}</h3>
            <p className="card__paragraph">{props.city}
                <span className="card__year">{props.year}</span>
            </p>
        </div>
    );
}

export default Card;
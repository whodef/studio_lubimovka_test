import './Card.css';

const Card = () => {
    return (
        <>
            <div className="card">
                <div className="card__container">
                    <h2 className="card__title">Август 1999 или Никита, любовь и голуби</h2>
                </div>
                <h3 className="card__author">Бжожовский Теодор</h3>
                <p className="card__paragraph">Санкт-Петербург
                    <span className="card__year">2020</span>
                </p>
            </div>
            <div className="card">
                <div className="card__container">
                    <h2 className="card__title">Августина и Степан</h2>
                </div>
                <h3 className="card__author">Пастернак Ангелина</h3>
                <p className="card__paragraph">Санкт-Петербург
                    <span className="card__year">2020</span>
                </p>
            </div>
            <div className="card">
                <div className="card__container">
                    <h2 className="card__title">По ту сторону августа</h2>
                </div>
                <h3 className="card__author">Евдокимов Платон</h3>
                <p className="card__paragraph">Москва
                    <span className="card__year">2017</span>
                </p>
            </div>
        </>
    );
}

export default Card;
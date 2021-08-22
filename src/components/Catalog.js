import './Catalog.css';

const Catalog = () => {
    return (
        <aside className="catalog-section">
            <div className="catalog">
                <h3 className="catalog__index">А</h3>
                <p className="catalog__paragraph">Августеняк Екатерина</p>
                <p className="catalog__paragraph">Августовский Борис</p>
            </div>
            <div className="catalog">
                <h3 className="catalog__index">Б</h3>
                <p className="catalog__paragraph">Богатова Августина</p>
            </div>
        </aside>
    );
}

export default Catalog;
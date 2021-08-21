import './App.css';

function App() {
    return (
        <div className="App">
            <header className="header">
                <h1 className="app-title">По запросу «август» мы нашли</h1>
            </header>
            <main className="main">
                <form className="search" name="form" title="Search Form">
                    <label>
                        <input className="search__input" type="search" name="search-input" placeholder="Введите запрос"
                               minLength="2" maxLength="50" required/>
                    </label>
                    <button className="search__submit" type="submit">
                        <span className="search__image-arrow"/>
                        <span className="search__submit-text">Искать</span>
                    </button>
                </form>
                <section className="cards">
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
                </section>
            </main>
        </div>
    );
}

export default App;

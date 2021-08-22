import './Search.css';

const Search = () => {
    return (
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
    );
}

export default Search;
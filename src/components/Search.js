import './Search.css';
import React from "react";

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchString: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({searchString: e.target.value});
        this.props.onChange(e.target.value);
    }

    render() {
        return (
            <form className="search" name="form" title="Search Form">
                <label>
                    <input className="search__input" type="search" name="search-input" placeholder="Введите запрос"
                           minLength="2" maxLength="50" required onChange={this.handleChange} value={this.state.searchString} />
                </label>
                <button className="search__submit" type="submit">
                    <span className="search__image-arrow"/>
                    <span className="search__submit-text">Искать</span>
                </button>
            </form>
        );
    }
}

export default Search;
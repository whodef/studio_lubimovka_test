import './Header.css';
import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            found: false
        }
    }

    render() {
        return (
            <header className="header">
                <h1 className="app-title">
                    {this.state.query.length === 0 ? 'Поиск' :
                        (`По запросу «${this.state.query}» мы ` + (this.state.found ? 'нашли' : 'ничего не нашли'))}
                </h1>
            </header>
        );
    }
}

export default Header;
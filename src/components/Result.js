import './Result.css';
import Card from './Card';
import Catalog from './Catalog';
import React from "react";

class Result extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            results: []
        }
    }

    render() {
        let cards = [];

        this.state.results.forEach(elem => {
            cards.push(
                <Card key={elem._id} title={elem.title} author={`${elem.author_firstName} ${elem.author_lastName}`}
                      city={elem.city} year={elem.year}/>
            );
        })

        return (
            <main className="search-result">
                {cards}
                <Catalog/>
            </main>
        );
    }

}

export default Result;
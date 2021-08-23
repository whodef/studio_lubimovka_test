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
// Танцы с бубном:
    render() {
        let cards = [];
        let catalog = {};
        let authorsIncluded = [];

        this.state.results.forEach(element => {
            const authorFullName = `${element.author_firstName} ${element.author_lastName}`;

            if (authorsIncluded.indexOf(authorFullName) < 0) {
                // Результат по каталогу
                authorsIncluded.push(authorFullName)
                const firstLetter = element.author_lastName.charAt(0);
                catalog.hasOwnProperty(firstLetter) ? catalog[firstLetter].push(element) : catalog[firstLetter] = [element];
            }
            // Результат по карточкам
            cards.push(
                <Card key={element._id} title={element.title} author={authorFullName} city={element.city}
                      year={element.year}
                />
            );
        });

        return (
            <main className="search-result">
                {cards}
                <Catalog data={catalog}/>
            </main>
        );
    }

}

export default Result;
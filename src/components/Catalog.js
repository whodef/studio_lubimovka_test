import './Catalog.css';
import React from "react";

const Catalog = (props) => {

    // Индекс должен браться с заглавной буквы фамилии автора
    // Индекс должен выводиться не более двух раз
    // Параграфы генерируются в таком количестве, сколько находится элементов в JSON по запросу
    // ...и выводятся вместе с именами авторов (сначала идёт фамилия, потом имя)

    let catalogs = [];

    for (const [key, list] of Object.entries(props.data).sort((a, b) => b[0].localeCompare(a[0]))) {
        let paragraphs = [];

        list.forEach(element => {
            paragraphs.push(
                <p className="catalog__paragraph"
                   key={element._id}>{`${element.author_lastName} ${element.author_firstName}`}</p>
            );
        });

        catalogs.push({
            firstLetter: key,
            paragraphs: paragraphs
        });
    }

    return (
        <aside className="catalog-section">
            {catalogs.map((element, index) => (
                <div className="catalog" key={index}>
                    <h3 className="catalog__index">{element.firstLetter}</h3>
                    {element.paragraphs}
                </div>
            ))}
        </aside>
    );
}

export default Catalog;
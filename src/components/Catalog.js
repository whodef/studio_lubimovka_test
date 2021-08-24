import './Catalog.css';
import React from "react";

const Catalog = (props) => {

    // Индекс должен браться с заглавной буквы фамилии автора
    // Индекс должен выводиться не более двух раз
    // Параграфы генерируются в таком количестве, сколько находится элементов в JSON по запросу
    // ...и выводятся вместе с именами авторов (сначала идёт фамилия, потом имя)

    let catalogs = [];

    for (const [key, list] of Object
        .entries(props.data)
        .sort((a, b) => a[0].localeCompare(b[0]))) {

        let paragraphs = [];

        list.sort((a, b) => `${a.author_lastName} ${a.author_firstName}`
            .localeCompare(`${b.author_lastName} ${b.author_firstName}`))
            .forEach(element => {
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
import './App.css';
import React from 'react';
import Header from './Header';
import Search from './Search';
import Result from './Result';
import data from '../data.json';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
        this.handleSearchBar = this.handleSearchBar.bind(this);
        this.headerComponent = React.createRef();
        this.resultComponent = React.createRef();
    }

    componentDidMount() {
        this.setState({
            data: data.result
        })
    }

    handleSearchBar(value) {
        let results = [];

        this.state.data.forEach(element => {
            // Отобразить результат не более 3-х карт
            if (results.length > 2) {
                return;
            }
            // Выборка совпадений с запросом
            let matches = 0;
            // Выборка по ключам заголовка и автора
            ['title', 'author_firstName', 'author_lastName'].forEach(field => {
                matches += element[field].toLowerCase().includes(value.toLowerCase()) ? 1 : 0;
            })

            if (matches > 0) {
                results.push(element);
            }
        });

        this.resultComponent.current.setState({
            results: results
        });
        this.headerComponent.current.setState({
            query: value,
            found: results.length > 0
        });
    }

    render() {
        return (
            <div className="App">
                <Header ref={this.headerComponent}/>
                <Search onChange={this.handleSearchBar}/>
                <Result ref={this.resultComponent}/>
            </div>
        );
    }
}

export default App;

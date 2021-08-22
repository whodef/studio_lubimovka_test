import './App.css';
import Header from './Header';
import Search from './Search';
import Card from './Card';
import Catalog from './Catalog';

function App() {
    return (
        <div className="App">
            <Header/>
            <Search/>
            <main className="search-results">
                <Card/>
                <Catalog/>
            </main>
        </div>
    );
}

export default App;

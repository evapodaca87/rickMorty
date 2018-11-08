import React, { Component } from 'react';
import './App.css';
import { Input } from 'semantic-ui-react';
import Card from './Card';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        };
    }
    componentDidMount() {
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'https://rickandmortyapi.com/api/character';
        fetch(proxyUrl + targetUrl).then((res) => res.json()).then((data) => {
            this.setState({ cards: data.results });
        });
    }

    render() {
        return (
            <div className='App'>
                <img
                    className='imageHead'
                    alt='Rick and Morty'
                    src='https://mbtskoudsalg.com/images/rick-and-morty-logo-png-1.png'
                />
                <h1 className='head'>API Library</h1>
                <Input className='search' size='large' icon='search' placeholder='Search...' />
                <br />
                <br />
                <Card cards={this.state.cards} />
            </div>
        );
    }
}

export default App;

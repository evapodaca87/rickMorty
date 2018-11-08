import React, { Component } from 'react';
import './App.css';
import { Input } from 'semantic-ui-react';
import CardList from './CardList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [ 1, 2, 3 ]
        };
    }

    async componentDidMount() {
        const cardFetch = await fetch('https://rickandmortyapi.com/api/character');
        const cardJson = await cardFetch.json();
        this.setState({ cards: cardJson });
        console.log(this.state.cards);
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
                <CardList cards={this.state.cards} />
            </div>
        );
    }
}

export default App;

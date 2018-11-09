import React, { Component } from 'react';
import './App.css';
import { Input } from 'semantic-ui-react';
import Card from './Card';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            results: []
        };
    }

    search = (e) => {
        console.log(e.target.value);
        let newcards = [];
        for (var i = 0; i < this.state.cards.length; i++) {
            let currentcard = this.state.cards[i];
            if (currentcard.name.includes(e.target.value)) {
                console.log(currentcard);
                newcards.push(currentcard);
            }
        }
        this.setState({ results: newcards });
    };

    componentDidMount() {
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'https://rickandmortyapi.com/api/character';
        var proxyUrl1 = 'https://cors-anywhere.herokuapp.com/',
            targetUrl1 = 'https://rickandmortyapi.com/api/character/?page=2';
        var proxyUrl2 = 'https://cors-anywhere.herokuapp.com/',
            targetUrl2 = 'https://rickandmortyapi.com/api/character/?page=3';
        var proxyUrl3 = 'https://cors-anywhere.herokuapp.com/',
            targetUrl3 = 'https://rickandmortyapi.com/api/character/?page=4';
        var proxyUrl4 = 'https://cors-anywhere.herokuapp.com/',
            targetUrl4 = 'https://rickandmortyapi.com/api/character/?page=5';

        fetch(proxyUrl + targetUrl).then((res) => res.json()).then((data) => {
            this.setState({ cards: data.results });
        });
        // fetch(proxyUrl1 + targetUrl1).then((res) => res.json()).then((data) => {
        //     this.setState({ cards: data.results });
        // });
        // fetch(proxyUrl2 + targetUrl2).then((res) => res.json()).then((data) => {
        //     this.setState({ cards: data.results });
        // });
        // fetch(proxyUrl3 + targetUrl3).then((res) => res.json()).then((data) => {
        //     this.setState({ cards: data.results });
        // });
        // fetch(proxyUrl4 + targetUrl4).then((res) => res.json()).then((data) => {
        //     this.setState({ cards: data.results });
        // });
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
                <Input onChange={this.search} className='search' size='large' icon='search' placeholder='Search...' />
                <br />
                <br />
                <Card cards={this.state.results} />
            </div>
        );
    }
}

export default App;

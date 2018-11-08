import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <img
                    className='imageHead'
                    alt='Rick and Morty'
                    src='https://mbtskoudsalg.com/images/rick-and-morty-logo-png-1.png'
                />
                <h1 className='head'>Library</h1>

                <div>SEARCHBAR PLACEHOLDER</div>
                <div>CARD PLACEHOLDER</div>
            </div>
        );
    }
}

export default App;

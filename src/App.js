import React, { Component } from 'react';
import './App.css';
import { Input, Card, Image } from 'semantic-ui-react';
import Cards from './Cards';

class App extends Component {
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
                <Cards />
            </div>
        );
    }
}

export default App;

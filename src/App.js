import React, { Component } from 'react';
import './App.css';

import { Input } from 'semantic-ui-react';

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
                <Input size='large' icon='search' placeholder='Search...' />
                <br />
                <br />
                <div>CARD PLACEHOLDER</div>
            </div>
        );
    }
}

export default App;

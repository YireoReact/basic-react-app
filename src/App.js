import React from 'react';
import Menu from './Menu.js';
import Greeting from './Greeting.js';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            menuItems: [
                {
                    "id": "home",
                    "name": "Home",
                    "link": "#home"
                },
                {
                    "id": "about",
                    "name": "About us",
                    "link": "#about"
                },
                {
                    "id": "dealers",
                    "name": "Dealers",
                    "link": "#dealers"
                }
            ]
        }
    }
    
    render() {
        return (
            <div id="app">
                <Menu items={this.state.menuItems} />
                <h1><Greeting name="John" /></h1>
                <p>This is a simple calculation: {1+1}</p>
            </div>
        );
    }
}

export default App;
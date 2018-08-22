import React, { Component } from 'react';
import './App.css';
import contacts from './data/contacts.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        {contacts.map(({name, picture, popularity}, index) => <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding:'0 30em',

          justifyContent: 'center'
      }}>
          <img src={picture} width='30px'/> <p>{name} - {popularity}</p> 
        </div>)}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Navigation from '../../components/navigation/Navigation.js'
import '../../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-menu">
          <Navigation />
        </div>
        <div className="App-main container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import ProductContainer from './components/ProductContainer'

class App extends Component {
  render() {
    return (
      <div className="Container">
        <div className="App-body">
          <h2 className="title">DMS</h2>
        </div>
        <p className="App-intro">
          put video here
        </p>
        <ProductContainer />
      </div>
    );
  }
}

export default App;

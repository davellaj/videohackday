import React, { Component } from 'react';
import ProductImg from './components/productImg'

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
        <ProductImg />
      </div>
    );
  }
}

export default App;

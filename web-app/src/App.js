import React, { Component } from 'react';
import { sum } from 'business-logic';

class App extends Component {
  render() {
    return (
      <p>Sum of 3 & 4 is {sum(3,4)}</p>
    );
  }
}

export default App;

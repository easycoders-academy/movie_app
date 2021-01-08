import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {

  state = {
    count: 0
  };

  add = () => {
    console.log('Плюс');
  }

  minus = () => {
    console.log('Минус');
  }

  render() {
    return <div>
      <h1>Текущее число: {this.state.count}</h1>
      <button onClick={this.add}>Плюс</button>
      <button onClick={this.minus}>Минус</button>
    </div>
  }
}

export default App;

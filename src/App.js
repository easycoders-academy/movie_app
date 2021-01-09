import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {

  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({count: current.count + 1}));
  }

  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  }

  componentDidMount() {
    console.log('Компонент отрендерился');
  }

  componentDidUpdate(){
    console.log('Компонент обновился');
  }

  componentWillUnmount(){
    console.log('Компонент умер :(');
  }

  render() {
    console.log('Я рендерюсь');
    return <div>
      <h1>Текущее число: {this.state.count}</h1>
      <button onClick={this.add}>Плюс</button>
      <button onClick={this.minus}>Минус</button>
    </div>
  }
}

export default App;

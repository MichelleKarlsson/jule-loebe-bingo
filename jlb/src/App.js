import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';


class App extends Component {

  state = {
    num: 0,
    prev: []
  }

  constructor (props) {
    super(props);
    this.generateNum = this.generateNum.bind(this);
  }
  render() {
    return (
      
      <div className="App">
        <header className="App-header">
          <p>
            Jule-Løbe-Bingo
          </p>
          <p>
            Dagens tal:
          </p>
          <p className="number">{this.state.num}</p>
          <p>Denne uges tal:</p>
          <p className="prev_nums">{this.state.prev}</p>
          <button onClick={this.generateNum}>Nyt tal</button>
        </header>
      
    </div>
  );
}
  generateNum(e) {
    var rand = Math.floor(Math.random() * 10);

    if (!this.state.prev.includes(rand)) {
    this.setState({
      num: rand 
    });

    this.state.prev.push(rand);
  } else if (this.state.prev.length <= 7) {
    this.generateNum(e);
  } else {
    this.setState({prev:[]})
  }

  }

}
export default App;

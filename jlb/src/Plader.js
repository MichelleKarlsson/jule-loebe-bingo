import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Plader.css';


class Plader extends Component {
    state = {
        plader: 0,
        nums: [],
      }
    
      constructor (props) {
        super(props);
        this.submitPlader = this.submitPlader.bind(this);
        this.submitNum = this.submitNum.bind(this);
        this.generateBoards = this.generateBoards.bind(this);
      }

    render() {
        return(
            <div className="Plader">
                <p>Vælg antal plader: </p>
                <form name="input" onSubmit={this.submitNum}>
                <input type="input" className="num" ref="num" onChange={this.submitPlader}></input>
                <button type="submit">Plader</button>
                </form>
            </div>
        );
    }

    submitPlader(e) {
        //setState is asynchronous, use this to ensure all values captured.
        this.setState({plader: e.target.value}, () => {console.log(this.state.plader)});
    }

    submitNum(e) {
        e.preventDefault();
        this.generateBoards(this.state.plader);
        this.refs.num.value = '';
        
    }

    generateBoards(x) {
        //Make numbers for one board
        this.generateSevenNumbers();
        console.log(this.state.nums);

        //Make a grid for one board
        

    }

    generateSevenNumbers() {
        var rand = Math.floor(Math.random() * 10);

        if (!this.state.nums.includes(rand) && this.state.nums.length <7) {
            this.state.nums.push(rand);
            if (this.state.nums.length < 7) {
                this.generateSevenNumbers();
            }
        } else if (this.state.nums.length < 7) {
            this.generateSevenNumbers()
        } else {
            return;
        }
    }
}


export default Plader;
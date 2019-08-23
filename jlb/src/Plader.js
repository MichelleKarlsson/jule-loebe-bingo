import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Plader.css';


class Plader extends Component {
    state = {
        plader: "",
      }
    
      constructor (props) {
        super(props);
        this.submitNum = this.submitNum.bind(this);
      }

    render() {
        return(
            <div className="Plader">
                <p>Vælg antal plader: </p>
                <div className="input">
                <input className="num"></input>
                <button className="btn" onClick={this.submitNum}/>
                </div>
            </div>
        );
    }

    submitNum(e) {
        console.log(e.target);
    }
}

export default Plader;
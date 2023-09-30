import {Component} from "react";
import "./index.css"

class Clock extends Component {
    state={date:new Date()}
    render() {
        const {date}=this.state;
        console.log(date);
        return(
        <div className="container">
            <div className="clock-container">
                <h1 className="main-heading">Clock</h1>
                <p>{date.toLocaleTimeString()}</p>
            </div>
        </div>)
    }
} 

export default Clock;
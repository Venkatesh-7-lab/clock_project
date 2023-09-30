import Clock from "./components/Clock/index"
import {Component} from "react";
import './App.css';

class App extends Component {
  state={showClock:true}
  onToggle=()=>{
    this.setState(prevState=>{
      const {showClock}=prevState
      return { showClock:!showClock}
    })
  }
  render() {
    const {showClock}=this.state;
    return(
      <div className="container">
        <button className="button" onClick={this.onToggle}>{showClock?"Hide Clock":"Show Clock"}</button>
        {showClock&&<Clock/>}
      </div>
    )
  }
}


export default App;

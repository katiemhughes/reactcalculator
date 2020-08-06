import React, { Component } from 'react';
import './App.css';
import ResultComponent from "./components/ResultComponent";
import KeypadComponent from "./components/KeypadComponent";

fetch('https://api.github.com/users/hacktivist123/repos')
  .then(response => response.json())
  .then(data => console.log(data));


class App extends Component {
  state = {
    result: ""
  }

  handleClick = button => {
    // console.log(button)
    if (button === "="){
      this.calculate()
    } else if (button === "Clear"){
      this.reset()
    } else {
      let temp = this.state.result
      this.setState({
        result: temp + button
      })

      // this.setState(prevState => ({
      //   result: prevState.result + button
      // }))
    }
  };

  calculate = () => {
    try {
      this.setState({
        result: eval(this.state.result || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })
    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  render() {
    return(
      <div>
        <div className="calc-body">
          <h1>Calculator</h1>
          <ResultComponent result={this.state.result}/>
          <KeypadComponent handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}
  

export default App;
import React, { Component } from 'react';
import './App.css';
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: ""
    };
  }

  addToInput = (props) => {
    this.setState({ input: this.state.input + props});
  };

  addDecimal = (props) => {
    //only add decimal if there is no current decimal point present in the input area.
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + props });
    }
  };

  addZeroToInput = (props) => {
    //if this.state.input is not empty, then add zero.
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + props });
    }
  };

  clearInput = () => {
    this.setState({ input: "" });
  };

  add = () => {
    const { input } = this.state
    const digits = input.split(" ")
    const output = digits.reduce((sum, digit) => sum + parseInt(digit, 10), 0)
    this.setState({ input: output })
  };

  subtract = () => {
    this.state.previousNumber = this.state.input;
    this.setState({
      input: "",
      operator: "subtract"
    });
  };

  multiply = () => {
    const { input } = this.state
    const digits = input.split(" ")
    const output = digits.reduce((product, digit) => product * parseInt(digit, 10), 1)
    this.setState({ input: output })
  };

  divide = () => {
    this.state.previousNumber = this.state.input;
    this.setState({
      input: "",
      operator: "divide"
    });
  };


  evaluate = () => {
    this.state.currentNumber = this.state.input;

    if (this.state.operator === "plus") {
      this.setState({
        input: 
        parseFloat(this.state.previousNumber) + 
        parseFloat(this.state.currentNumber)
      });
    } else if (this.state.operator === "subtract") {
      this.setState({
        input:
        parseFloat(this.state.previousNumber) - 
        parseFloat(this.state.currentNumber)
      });
    } else if (this.state.operator === "multiply") {
      this.setState({
        input:
        parseFloat(this.state.previousNumber) * 
        parseFloat(this.state.currentNumber)
      });
    } else if (this.state.operator === "divide") {
      this.setState({
        input:
        parseFloat(this.state.previousNumber) /
        parseFloat(this.state.currentNumber)
      });
    }
  };

  render () {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
    <Input>{this.state.input}</Input>
            </div>
            <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.divide}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.multiply}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.add}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.evaluate}>=</Button>
            <Button handleClick={this.subtract}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
          </div>
        </div>
      </div>
    )
  };
}

export default App;
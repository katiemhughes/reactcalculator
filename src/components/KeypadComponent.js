import React, { Component } from "react";

const KeypadComponent = ({ handleClick }) => {
    return (
        <div className="calc-wrapper">
            <div className="row">
                <button value="7" onClick={(e) => handleClick(e.target.value)}>7</button>
                <button value="8" onClick={(e) => handleClick(e.target.value)}>8</button>
                <button value="9" onClick={(e) => handleClick(e.target.value)}>9</button>
                <button className="operator" value="/" onClick={(e) => handleClick(e.target.value)}>/</button>
            </div>
            <div className="row">
                <button value="4" onClick={(e) => handleClick(e.target.value)}>4</button>
                <button value="5" onClick={(e) => handleClick(e.target.value)}>5</button>
                <button value="6" onClick={(e) => handleClick(e.target.value)}>6</button>
                <button value="*" className="operator" onClick={(e) => handleClick(e.target.value)}>*</button>
            </div>
            <div className="row">
                <button value="1" onClick={(e) => handleClick(e.target.value)}>1</button>
                <button value="2" onClick={(e) => handleClick(e.target.value)}>2</button>
                <button value="3" onClick={(e) => handleClick(e.target.value)}>3</button>
                <button value="+" className="operator" onClick={(e) => handleClick(e.target.value)}>+</button>
            </div>
            <div className="row">
                <button value="." className="operator" onClick={(e) => handleClick(e.target.value)}>.</button>
                <button value="0" onClick={(e) => handleClick(e.target.value)}>0</button>
                <button value="=" className="operator" onClick={(e) => handleClick(e.target.value)}>=</button>
                <button value="-" className="operator" onClick={(e) => handleClick(e.target.value)}>-</button>
            </div>
            <div className="row" className="clear">
                <button value="Clear" className="operator" onClick={(e) => handleClick(e.target.value)}>Clear</button>
            </div>
        </div>
    )
};

export default KeypadComponent;
import React, { Component } from 'react';
import './Button.css';


class Button extends Component {
    isOperator = props => {
        return !isNaN(props) || props === "." || props === "=";
    };

    render () {
      return (
        <div className={`button ${this.isOperator(this.props.children) ? "" : "operator"}`}
        onClick={() => this.props.handleClick (this.props.children)}
        >
            {this.props.children}
        </div>
      )
    }
}

    export default Button;
import React, { Component } from 'react';
import calculate from "./Filter.js";

activeButton = 'All';

class NavButton extends Component {
    state = {
        isActive: true
    }
    handleClick = () => {
        
    }
    render() {
        return <button onClick={this.handleClick}>{this.props.name}</button>
    }
}

export default NavButton;
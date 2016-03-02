import React from 'react';
import { Component } from 'react';

export default class NavBar extends Component {

	constructor(props) {
	    super(props);
	    this.state = {name : ''};
	    this.handleInput = this.handleInput.bind(this)
  	}

	handleInput() {
	    this.setState({
	      name: this.refs.input.value
	    })
	}

	render() {
	    return (
	      <div id="navbar">
	      	<input id="nav-title" placeholder="Presentation Name..." ref="name" onChange={this.handleInput}></input>
	      	<button type="button">Run</button>
	      </div>
	    );
	}
}
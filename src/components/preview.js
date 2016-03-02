import React from 'react';
import { Component } from 'react';

export default class Preview extends Component {
  render() {
    return (
      <div id="previewcontainer">
      	<div id="preview">
      		<input id="slide-title" placeholder="Enter Title..." ref="slide-title"></input> <br />
      		<textarea id="slide-content" placeholder="Enter content..." ref="slide-content"></textarea>
      	</div>
      	
      </div>
    );
  }
}
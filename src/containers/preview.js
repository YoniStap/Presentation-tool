import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Preview extends Component {
  render() {

    if(!this.props.selectedSlide) {
      return (
      <div id="previewcontainer">
        <div id="preview">
          <input id="slide-title" placeholder="Enter Title..." ref="slide-title"></input> <br />
          <textarea id="slide-content" placeholder="Enter content..." ref="slide-content"></textarea>
        </div>
        
      </div>
      )
    }

    return (
      <div id="previewcontainer">
      	<div id="preview">
          <input id="slide-title" placeholder={this.props.selectedSlide.title} ref="slide-title"></input> <br />
      		<textarea id="slide-content" placeholder="Enter content..." ref="slide-content"></textarea>
      	</div>
      	
      </div>
    );
  }

}

function mapStateToProps(state) {

  return {

    selectedSlide: state.selectedSlide

  }

}

export default connect(mapStateToProps)(Preview);
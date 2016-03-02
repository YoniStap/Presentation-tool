import React from 'react';
import { Component } from 'react';

export default class SlideList extends Component {
  render() {
    return (
      <div id="slidelist">
      		<div id="slidecontainer">
		      	<div className="slide">Slide 1</div>
		      	<div className="slide">Slide 2</div>
		      	<div className="slide">Slide 3</div>
		      	<div className="slide">Slide 4</div>
		      	<div className="slide">Slide 5</div>
		      	<div className="slide">Slide 6</div>
		      	<div className="slide">Slide 7</div>
		      	<div className="slide">Slide 8</div>
		      	<div className="slide">Slide 9</div>
		      	Add slide
		    </div>
      </div>
    );
  }
}
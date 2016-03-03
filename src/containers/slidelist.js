import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SlideList extends Component {

	renderList() {

		return this.props.slides.map((slide) => {

			return(

				<li key={slide.title}>
					{slide.title}
				</li>
			)
		})
	}

  	render() {
    	return (
      		<div id="slidelist">
      			<ul id="slidecontainer">
		  			{this.renderList()}
		  			<li>Add slide</li>
		  		</ul>
     		</div>
    	);
  	}
}

function mapStateToProps(state) {

	return {

		slides: state.slides

	}

} 

export default connect(mapStateToProps)(SlideList)
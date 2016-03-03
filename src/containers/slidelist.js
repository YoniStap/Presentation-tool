import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectSlide } from '../actions/index';

class SlideList extends Component {

	renderList() {

		return this.props.slides.map((slide) => {

			return(

				<li key={slide.title}
					onClick={ () => this.props.selectSlide(slide)}>
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

function mapDispatchToProps(dispatch) {

	return bindActionCreators( { selectSlide: selectSlide }, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(SlideList)
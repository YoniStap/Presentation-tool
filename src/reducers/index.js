import { combineReducers } from 'redux';

import SlidesReducer from './reducer_slides'
import ActiveSlideReducer from './reducer_active_slide'

const rootReducer = combineReducers({

	slides: SlidesReducer,
	selectedSlide: ActiveSlideReducer

});

export default rootReducer;
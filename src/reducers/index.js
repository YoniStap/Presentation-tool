import { combineReducers } from 'redux';

import SlidesReducer from './reducer_slides'

const rootReducer = combineReducers({

	slides: SlidesReducer

});

export default rootReducer;
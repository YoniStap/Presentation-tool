export default function(state = null, action) {

	switch(action.type) {

		case 'SLIDE_SELECTED':
			return action.payload;

	}

	return state

}
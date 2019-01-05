import { actionTypes } from '../actions'
/**
 * @function successReducer
 * @param {array} state - array of guessed words.
 * @param {object} action - action to be reducer.
 * @returns {boolean} - new success status.
 */
export default (state=false, action) => {

	switch (action.type) {

		case (actionTypes.CORRECT_GUESS):
			return true;

		default:
			return state;

	}

}
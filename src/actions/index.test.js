import {correctGuess, actionTypes} from './';

describe("correctGuess", () => {
	test("return an action with type `CURRENT_GUESS`", () => {
		const action = correctGuess();
		expect(action).toEqual({type: actionTypes.CORRECT_GUESS});
	});
});
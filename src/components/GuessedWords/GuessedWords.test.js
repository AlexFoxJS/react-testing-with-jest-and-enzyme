import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr, checkProps} from '../../../test/testUtils';
import GuessedWords from './GuessedWords';

const defaultProps = {
	guessedWords: [{guessedWord: 'train', letterMatchCount: 3}],
};

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 *
 * @param {object} props
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
	const setupProps = {...defaultProps, ...props};
	return shallow(<GuessedWords {...setupProps} />);
};

test("does not throw warning with expected props", () => {
	checkProps(GuessedWords, defaultProps);
});

describe("if there are no words guessed", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = setup({ guessedWords: [] });
	});

	test("renders without error", () => {
		const component = findByTestAttr(wrapper, "component-guessed-word");
		expect(component.length).toBe(1)
	});

	test("renders instructions to guess a word", () => {
		const instructions = findByTestAttr(wrapper, "guess-instructions");
		expect(instructions.text().length).not.toBe(0)
	});
});

describe("if there are words guessed", () => {
	const guessedWords = [
		{ guessedWord: "train", letterMatchCount: 3 },
		{ guessedWord: "agile", letterMatchCount: 1 },
		{ guessedWord: "party", letterMatchCount: 5 },
	];

	let wrapper;

	beforeEach(() => {
		wrapper = setup({ guessedWords });
	});

	test("renders without error", () => {
		const component = findByTestAttr(wrapper, "component-guessed-word");
		expect(component.length).toBe(1)
	});

	test("renders guest word section", () => {
		const guessedWordsNode = findByTestAttr(wrapper, "guessed-words");
		expect(guessedWordsNode.length).toBe(1);
	});

	test("correct number of guessed words", () => {
		const guessedWordNode = findByTestAttr(wrapper, "guessed-word");
		expect(guessedWordNode.length).toBe(guessedWords.length);
	});
});
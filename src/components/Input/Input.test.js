import React from 'react';
import {shallow} from 'enzyme';

import {findByTestAttr, storeFactory} from '../../../test/testUtils';
import Input from './Input';


const setup = (initialState={}) => {
	const store = storeFactory(initialState);
	return shallow(<Input store={store}/>).dive();
};


describe("render", () => {

	describe("word has not been guessed", () => {
		let wrapper;

		beforeEach(() => {
			const initialState = {success: false};
			wrapper = setup(initialState);
		});

		test("renders component without error", () => {
			const component = findByTestAttr(wrapper, "component-input");
			expect(component.length).toBe(1);
		});

		test("renders input box", () => {
			const inputBox = findByTestAttr(wrapper, "input-box");
			expect(inputBox.length).toBe(0);
		});

		test("renders submit button", () => {
			const submitButton = findByTestAttr(wrapper, "submit-button");
			expect(submitButton.length).toBe(0);
		});

	});

	describe("word has been guessed", () => {

		test("renders component without error", () => {

		});

		test("does not render input box", () => {

		});

		test("does not render submit button", () => {

		});

	});

});

describe("update state", () => {

});
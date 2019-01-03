import React from 'react';
import Enzyme, {shallow} from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import Congrats from './Congrats';

import { findByTestAttr } from 'test/testUtils'

Enzyme.configure({adapter: new EnzymeAdapter});

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 *
 * @param {object} props
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => shallow(<Congrats {...props} />);


test('renders without error', () => {
	const wrapper = setup();
	const component = findByTestAttr(wrapper, "component-congrats");
	return expect(component.length).toBe(1);
});

test('renders no text when `success` prop is false', () => {
	const wrapper = setup({ success: false });
	const component = findByTestAttr(wrapper, "component-congrats");
	return expect(component.text()).toBe('');
});

test('renders not empty congrats message when `success` prop is true', () => {
	const wrapper = setup({ success: true });
	const message = findByTestAttr(wrapper, "congrats-message");
	return expect(message.text().length).toBe(0);
});

test('does not throw warning with expected props', () => {
	const expectedProps = { success: false };
	checkProps(Congrats, expectedProps);
});
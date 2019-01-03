import React from 'react';
import Enzyme, {shallow} from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import { findByTestAttr, checkProps } from '../../../test/testUtils';

import Congrats from './Congrats';

Enzyme.configure({adapter: new EnzymeAdapter});

const defaultProps = { success: false };

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 *
 * @param {object} props
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
	const setupProps = { ...defaultProps, ...props };
	return shallow(<Congrats {...setupProps} />);
};


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
	return expect(message.text().length).not.toBe(0);
});

test('does not throw warning with expected props', () => {
	checkProps(Congrats, defaultProps);
});

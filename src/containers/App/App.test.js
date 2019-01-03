import React from 'react';
import {shallow} from 'enzyme'

import App from './App';


/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 *
 * @param {object} props
 * @param {object} state
 * @returns {ShallowWrapper}
 */
const setup = (props={}, state=null) => {
	const wrapper = shallow(<App {...props} />);

	return state ? wrapper.setState(state) : wrapper
};
/**
 * Return ShallowWrapper containing node(s) with the given [data-test] value
 *
 * @param wrapper
 * @param val
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);


test('renders without error', () => {
	const wrapper = setup();
	const appComponent = findByTestAttr(wrapper, "component-app");

	return expect(appComponent.length).toBe(1)
});
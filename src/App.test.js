import React from 'react';
import Enzyme, {shallow} from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter});

/**
 * Factory function to create a ShallowWrapper for the App component.
 *
 * @param {object} props
 * @param {any} state
 * @returns {ShallowWrapper}
 */
const setup = (props={}, state=null) => shallow(<App {...props} />);
/**
 * Return ShallowWrapper containing node(s) with the given [data-test] value
 *
 * @param wrapper
 * @param val
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

const appComponent = findByTestAttr(setup(), "component-app");
const incrementButton = findByTestAttr(setup(),"increment-button");
const counterDisplay = findByTestAttr(setup(),"counter-display");

test('renders without error', () => expect(appComponent.length).toBe(1));

test('renders increment button', () => expect(incrementButton.length).toBe(1));

test('renders counter display', () => expect(counterDisplay.length).toBe(1));

test('counter starts at 0', () => {

});

test('clicking button increment counter display', () => {

});

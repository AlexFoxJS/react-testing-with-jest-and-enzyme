import React from 'react';
import Enzyme, {shallow} from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter});

/**
 * Factory function to create a ShallowWrapper for the App component.
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

test('renders increment button', () => {
	const wrapper = setup();
	const incrementButton = findByTestAttr(wrapper,"increment-button");

	return expect(incrementButton.length).toBe(1)
});

test('renders counter display', () => {
	const wrapper = setup();
	const counterDisplay = findByTestAttr(wrapper,"counter-display");

	return expect(counterDisplay.length).toBe(1)
});

test('counter starts at 0', () => {
	const wrapper = setup();
	const initialCounterState = wrapper.state('counter');

	return expect(initialCounterState).toBe(0)
});

test('clicking button increment counter display', () => {
	const counter = 7;
	const wrapper = setup(null, { counter } );
	const incrementButton = findByTestAttr(wrapper,"increment-button");

	// find button and click
	incrementButton.simulate('click');
	wrapper.update();

	// find display and test value
	const counterDisplay = findByTestAttr(wrapper,"counter-display");
	expect(counterDisplay.text()).toContain("The counter is corrently " + (counter + 1))
});

test('clicking button decrement counter display', () => {
	const counter = 7;
	const wrapper = setup(null, { counter } );
	const decrementButton = findByTestAttr(wrapper,"decrement-button");

	// find button and click
	decrementButton.simulate('click');
	wrapper.update();

	// find display and test value
	const counterDisplay = findByTestAttr(wrapper,"counter-display");
	expect(counterDisplay.text()).toContain("The counter is corrently " + (counter - 1))
});

test('clicking button decrement counter display when counter === 0', () => {
	const counter = 0;
	const wrapper = setup(null, { counter } );
	const decrementButton = findByTestAttr(wrapper,"decrement-button");

	// find button and click
	decrementButton.simulate('click');
	wrapper.update();

	// find display and test value
	const counterDisplay = findByTestAttr(wrapper,"counter-display");
	expect(counterDisplay.text()).toContain("The counter is corrently 0")
});

test('check display error block when counter === 0 and user click decrement', () => {
	const counter = 0;
	const wrapper = setup(null, { counter } );
	const decrementButton = findByTestAttr(wrapper,"decrement-button");

	// find button and click
	decrementButton.simulate('click');
	wrapper.update();

	// find error block
	const errorBlock = findByTestAttr(wrapper,"error-block");
	return expect(errorBlock.length).toBe(1)
});
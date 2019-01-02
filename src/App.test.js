import React from 'react';
import Enzyme, {shallow} from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter});

const wrapper = shallow(<App/>);
const appComponent = wrapper.find('[data-test="component-app"]');
const incrementButton = wrapper.find('[data-test="increment-button"]');
const counterDisplay = wrapper.find('[data-test="counter-display"]');

test('renders without error', () => expect(appComponent.length).toBe(1));

test('renders increment button', () => expect(incrementButton.length).toBe(1));

test('renders counter display', () => expect(counterDisplay.length).toBe(1));

test('counter starts at 0', () => {

});

test('clicking button increment counter display', () => {

});

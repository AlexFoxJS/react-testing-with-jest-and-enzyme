import React, {Component} from 'react';
import './App.css';

class App extends Component {
	state = {
		counter: 0,
	};

	render() {
		return (
			<div className="App" data-test="component-app">
				<h1 data-test="counter-display">The counter is corrently</h1>
				<button data-test="increment-button">Increment counter</button>
			</div>
		);
	}
}

export default App;

import React, {Component} from 'react';
import './App.css';

class App extends Component {
	state = {
		counter: 0,
	};

	increment = () => {
		this.setState({ counter: this.state.counter + 1 })
	};

	render() {
		return (
			<div className="App" data-test="component-app">
				<h1 data-test="counter-display">The counter is corrently {this.state.counter}</h1>
				<button data-test="increment-button" onClick={() => this.increment()}>Increment counter</button>
			</div>
		);
	}
}

export default App;

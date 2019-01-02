import React, {Component} from 'react';
import './App.css';

class App extends Component {
	state = {
		counter: 0,
		error: false,
	};

	increment = () => {
		const { counter, error } = this.state;

		if (error) this.setState({
			counter: counter + 1,
			error: false,
		});
		else this.setState({
			counter: counter + 1
		});
	};

	decrement = () => {
		const { counter } = this.state;

		if (counter !== 0) this.setState({ counter: counter - 1 });
		else this.setState({ error: true });
	};

	render() {
		const { counter, error } = this.state;

		return (
			<div className="App" data-test="component-app">
				<h1 data-test="counter-display">
					The counter is corrently {counter}
				</h1>

				<button data-test="increment-button" onClick={this.increment}>
					Increment counter
				</button>
				<button data-test="decrement-button" onClick={this.decrement}>
					Decrement counter
				</button>

				{error && (
					<h2 data-test="error-block" style={{color: 'red'}}>
						The counter cannot go below 0
					</h2>
				)}

			</div>
		);
	}
}

export default App;

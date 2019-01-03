import React, {Component} from 'react';
import './App.css';

class App extends Component {

	render() {

		return (
			<div className="App" data-test="component-app">
				<h1 data-test="counter-display">Jotto</h1>
				<p>the secret word is lucky</p>

				<div className="Input">
					<input type="text"/>
					<button data-test="increment-button">Submit</button>
				</div>

				<div className="GuessedWords">
					<p>Try to gess secret word!</p>
					<table>
						<th>
							<tr></tr>
						</th>
						<tr>

						</tr>
					</table>
				</div>

			</div>
		);
	}
}

export default App;

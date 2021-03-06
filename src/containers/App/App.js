import React, {Component} from 'react';
import './App.css';

import GuessedWords from '../../components/GuessedWords/GuessedWords'
import Congrats from '../../components/Congrats/Congrats'

class App extends Component {

	render() {

		return (
			<div className="App container" data-test="component-app">
				<h1>Jotto</h1>
				<Congrats success={true} />
				<GuessedWords guessedWords={[
					{ guessedWord: 'train', letterMatchCount: 3 }
				]} />
			</div>
		);
	}
}

export default App;

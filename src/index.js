import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './index.css';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
import store from './configureStore';

ReactDOM.render((
	<Provider store={store}>
		<App/>
	</Provider>
), document.getElementById('root'));
serviceWorker.unregister();

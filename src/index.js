import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import reducer from './reducers';

import './index.css';
function devtools(){
	return window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
}
const store = createStore(reducer, devtools() );


render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
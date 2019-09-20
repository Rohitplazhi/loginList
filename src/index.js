import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import './index.css';
import * as serviceWorker from './serviceWorker';
import reducer from './store/reducer/listReducer';
const store = createStore(reducer,applyMiddleware(thunk));
ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));

serviceWorker.unregister();

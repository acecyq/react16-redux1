import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducer from './store/Reducer';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(Reducer);
const app = <Provider store={store} >
                <App />
            </Provider>
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();

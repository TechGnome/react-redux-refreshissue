import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import MyName from './reducers/MyNameReducer'

const store = createStore(MyName, {myNewName:"enter your name"})

ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

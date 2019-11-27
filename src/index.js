import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import userReducer from './reducers/reducer';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import UserList from "./components/UserList";
const store = createStore(userReducer);
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path='/users' component={UserList}/>
        </Router>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

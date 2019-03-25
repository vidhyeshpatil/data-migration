import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes';
import  { Provider } from 'react-redux';
import store from './redux/store';
import * as serviceWorker from './serviceWorker';

const RenderRoot = () => {
    return (
        <Provider store = {store} >
            <Routes />
        </Provider>
    );
}

ReactDOM.render(<RenderRoot />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

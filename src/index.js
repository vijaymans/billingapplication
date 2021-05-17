import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import App from './components/App'
import ConfigureStore from './store/configureStore'


const store = ConfigureStore()
//console.log('STATE',store.getState())

store.subscribe ( ()=>
{
    console.log('state updated' , store.getState())
} )
ReactDOM.render(
                 <Provider store ={store}>
                     <BrowserRouter>
                        <App />
                     </BrowserRouter>
                </Provider>, document.getElementById('root'));



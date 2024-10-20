import React, { Component} from 'react';
import store from './src/store'
import { Provider } from 'react-redux'

export default class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <TodoApp />
            </Provider>
        )
    }
}

/**
 * Here, we have imported our store and also used something 
 * called Provider from react-redux. 
 * Once we pass our Provider and store within that, 
 * it can be accessed anywhere in TodoApp 
 * no matter how many levels deep it is. 
 * Great! With this our store is set up.
 */
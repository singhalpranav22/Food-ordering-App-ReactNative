import thunk from "redux-thunk" 
import {createStore,applyMiddleware} from 'redux';
import reducer from './reducers/index';

export default function configureStore(initialState){
    const store = createStore(reducer, initialState,applyMiddleware(thunk));
    return store;
}
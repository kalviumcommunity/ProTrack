import { applyMiddleware,  legacy_createStore} from 'redux'
import logger from 'redux-logger'
import  Reducer  from './Reducer/Reducer';


let Store = legacy_createStore( Reducer , applyMiddleware( logger ) );

export default Store;
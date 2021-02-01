import {combineReducers, createStore} from 'redux'
import dialogsReducer from "./dialogs-reducer";
import mainContentReducer from "./mainContent-reducer";




let reducers = combineReducers({
	mainContentPage: mainContentReducer,
	dialogsPage: dialogsReducer
});

let store = createStore(reducers)




export default store;
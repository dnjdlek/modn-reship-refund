import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { createWrapper } from 'next-redux-wrapper';

import CartReducer from './cart';
import MeReducer from './me';
import RegisterReducer from './register';
import GlobalReducer from './global';

// convert object to string and store in localStorage
function saveToLocalStorage(state) {
	try {
		const serialisedState = JSON.stringify(state);
		localStorage.setItem('mmpersistantState', serialisedState);
	} catch (e) {
		console.warn(e);
	}
}

// load string from localStarage and convert into an Object
// invalid output must be undefined
function loadFromLocalStorage() {
	try {
		var serialisedState = localStorage.getItem('mmpersistantState');
		var state = JSON.parse(serialisedState);
		state.global.loading = 0;
		// serialisedState.global.loading = 0;
		if (serialisedState === null) return undefined;
		return state;
	} catch (e) {
		console.warn(e);
		return undefined;
	}
}

const reducers = combineReducers({
	cart: CartReducer,
	me: MeReducer,
	global: GlobalReducer,
	register: RegisterReducer,
});

const configureStore = () => {
	const store = createStore(reducers, loadFromLocalStorage());
	store.subscribe(() => saveToLocalStorage(store.getState()));
	return store;
};

const Wrapper = createWrapper(configureStore, { debug: true });

export default Wrapper;

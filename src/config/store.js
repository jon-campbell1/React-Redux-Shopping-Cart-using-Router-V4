import { createStore, combineReducers, applyMiddleware } from 'redux';
import cartReducer from '../features/cart/reducer';
import discountReducer from '../features/cart/discountReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  discount: discountReducer
});

const myLogger = (store) => (next) => (action) => {
  console.log("Action logged!");
  next(action);
}

const store = createStore(rootReducer, applyMiddleware(myLogger) );

export default store;

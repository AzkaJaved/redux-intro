import { applyMiddleware, combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountsSlice";
import customerReducer from "./features/customers/customersSlice";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;

// store.dispatch(deposit(1000));
// store.dispatch(withdraw(200));

// store.dispatch(requestLoan(50, "Buy a Car"));
// store.dispatch(payLoan());

// console.log(store.getState());

// store.dispatch(createCustomer("Alice", "123456789"));
// console.log(store.getState());

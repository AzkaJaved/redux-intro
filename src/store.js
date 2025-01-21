import { combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountsSlice";
import customerReducer from "./features/customers/customersSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);
export default store;

// store.dispatch(deposit(1000));
// store.dispatch(withdraw(200));

// store.dispatch(requestLoan(50, "Buy a Car"));
// store.dispatch(payLoan());

// console.log(store.getState());

// store.dispatch(createCustomer("Alice", "123456789"));
// console.log(store.getState());

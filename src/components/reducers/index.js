import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { searchReducer } from "./searchReducer";
import { cartReducer } from "./cartReducer";

const rootReducers = combineReducers({
  user: userReducer,
  search: searchReducer,
  cart: cartReducer,
});

export default rootReducers;

import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import favoriteReducer from "./favorites/reducer";
import hotelListReducer from "./hotels/reducer";
import loginReducer from "./login/reducer";
import searchReducer from "./search/reducer";
import errorsReducer from "./errors/reducer";

const reducer = combineReducers({
  login: loginReducer,
  search: searchReducer,
  errors: errorsReducer,
  hotels: hotelListReducer,
  favorites: favoriteReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;

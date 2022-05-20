import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { appReducer, productsReducer } from "./reducers";

const rootReducer = combineReducers({ appReducer, productsReducer });

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

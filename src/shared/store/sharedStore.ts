import { applyMiddleware, createStore, Store } from "redux";
import thunk from "redux-thunk";
import reducers from "./rootReducer";

export const sharedStore: Store = createStore(reducers, applyMiddleware(thunk));
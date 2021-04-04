import { createStore, applyMiddleware, Store, compose } from "redux"
import thunk from "redux-thunk"

import reducer from "./reducer"

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store: Store<UserState, UserAction> & {
    dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk, composeEnhancers));
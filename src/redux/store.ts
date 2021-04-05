import { AppState } from "@auth0/auth0-react";
import { createStore, applyMiddleware, compose } from "redux"
import thunk, { ThunkMiddleware } from "redux-thunk"

import rootReducer from "./index"
import { AppActionType } from "./state";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActionType>))
);
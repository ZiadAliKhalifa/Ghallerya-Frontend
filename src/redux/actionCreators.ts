import * as actionTypes from "./actionTypes"
import { store } from "../redux/store"

function _setUser(user: User) {
    return { type: actionTypes.UserActionTypes.SET_USER, payload: user };
}

// TODO: Do not call store.dispatch from here
// Component should get the dispatch ability via connect
export function setUser(user: User) {
    store.dispatch(_setUser(user));
}
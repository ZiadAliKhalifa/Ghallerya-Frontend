import * as actionTypes from "../actionTypes"
import { AppActionType } from "../state";


export const setUser = (user: User): AppActionType => ({
    type: actionTypes.UserActionTypes.SET_USER,
    payload: user
});
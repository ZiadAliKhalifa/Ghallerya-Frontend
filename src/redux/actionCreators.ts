import * as actionTypes from "./actionTypes"

export function setUser(user: IUser, dispatch: DispatchType) {
    const action: UserAction = {
        type: actionTypes.SET_USER,
        user,
    }

    dispatch(action);
}

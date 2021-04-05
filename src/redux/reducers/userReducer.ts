import * as actionTypes from "../actionTypes"

const initialState: User = {
    email: "",
    email_verified: false,
    family_name: "",
    given_name: "",
    locale: "",
    name: "",
    nickname: "",
    picture: "",
    sub: "",
    updated_at: ""
}

const reducer = (
    state: User = initialState,
    action: actionTypes.UserActionType
): User => {
    switch (action.type) {
        case actionTypes.UserActionTypes.SET_USER:
            const newUser: User = {
                email: action.payload.email,
                email_verified: action.payload.email_verified,
                family_name: action.payload.family_name,
                given_name: action.payload.given_name,
                locale: action.payload.locale,
                name: action.payload.name,
                nickname: action.payload.nickname,
                picture: action.payload.picture,
                sub: action.payload.sub,
                updated_at: action.payload.updated_at
            }

            return {
                ...state,
                ...newUser,
            }
        default:
            return state;
    }
}

export default reducer
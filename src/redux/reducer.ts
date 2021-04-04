import * as actionTypes from "./actionTypes"

const initialState: UserState = {
    user: {
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
}

const reducer = (
    state: UserState = initialState,
    action: UserAction
): UserState => {
    switch (action.type) {
        case actionTypes.SET_USER:
            const newUser: IUser = {
                email: action.user.email,
                email_verified: action.user.email_verified,
                family_name: action.user.family_name,
                given_name: action.user.given_name,
                locale: action.user.locale,
                name: action.user.name,
                nickname: action.user.nickname,
                picture: action.user.picture,
                sub: action.user.sub,
                updated_at: action.user.updated_at
            }

            return {
                ...state,
                user: newUser,
            }
    }
    return state
}

export default reducer
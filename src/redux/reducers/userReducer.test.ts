import { UserActionTypes } from "../actionTypes";
import userReducer from "./userReducer";

describe('Users Reducer', () => {
    const initialState = {
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
    };

    it('Checks that initial state is changed when a user action occurs', () => {
        const test_user = {
            email: "user_email",
            email_verified: true,
            family_name: "family",
            given_name: "given",
            locale: "en_en",
            name: "name",
            nickname: "nickname",
            picture: "picture.png",
            sub: "00000",
            updated_at: "121212"
        };

        const reducer = userReducer(initialState, { type: UserActionTypes.SET_USER, payload: test_user });
        expect(reducer).not.toEqual(initialState);
    });

    it('returns new state when a user is passed to set user', () => {

        const test_user = {
            email: "user_email",
            email_verified: true,
            family_name: "family",
            given_name: "given",
            locale: "en_en",
            name: "name",
            nickname: "nickname",
            picture: "picture.png",
            sub: "00000",
            updated_at: "121212"
        };

        const reducer = userReducer(undefined, { type: UserActionTypes.SET_USER, payload: test_user });
        expect(reducer).toEqual(test_user);
    });




});
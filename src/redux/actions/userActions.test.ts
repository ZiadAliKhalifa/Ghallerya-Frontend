import { UserActionTypes } from "../actionTypes";
import { AppActionType } from "../state";
import * as userActions from "./userActions"

describe('user action creators', () => {
    it('load current user success', async () => {
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

        const setUserAction: AppActionType = userActions.setUser(test_user);
        expect(setUserAction.payload).toBe(test_user)
        expect(setUserAction.type).toBe(UserActionTypes.SET_USER)
    });

});
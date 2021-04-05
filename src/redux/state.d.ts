import { UserActionType } from "./actionTypes";

interface IRootState {
    user: UserState
}

// Add other collective action types as they appear
type AppActionType = UserActionType

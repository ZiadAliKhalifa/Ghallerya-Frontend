export enum UserActionTypes {
  SET_USER = "@User/SET_USER",
}

export interface setUserAction {
  type: typeof UserActionTypes.SET_USER;
  payload: User;
}

// The collective type for all actions concerning the user
export type UserActionType = setUserAction;

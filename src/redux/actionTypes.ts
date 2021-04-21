export enum UserActionTypes {
  SET_USER = "@User/SET_USER",
}

export interface setUserAction {
  type: typeof UserActionTypes.SET_USER;
  payload: User;
}

// The collective type for all actions concerning the user
export type UserActionType = setUserAction;


export enum FeaturedImageActionTypes {
  LOAD_FEATURED_IMAGES = "@FeaturedImage/LOAD_FEATURED_IMAGES",
  SET_FEATURED_IMAGES = "@FeaturedImage/SET_FEATURED_IMAGES"
}

export interface FeaturedImageAction {
  type: typeof FeaturedImageActionTypes.LOAD_FEATURED_IMAGES | FeaturedImageActionTypes.SET_FEATURED_IMAGES;
  payload?: FeaturedImages;
}

export type FeaturedImageActionType = FeaturedImageAction;

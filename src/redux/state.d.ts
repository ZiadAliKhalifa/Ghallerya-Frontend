import { UserActionType, FeaturedImageActionType } from "./actionTypes";


interface IRootState {
    user: UserState,
    featuredImages: FeatureImagesState
}

// Add other collective action types as they appear
type AppActionType = UserActionType | FeaturedImageActionType

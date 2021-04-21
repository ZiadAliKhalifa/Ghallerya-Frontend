import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';

import * as actionTypes from "../actionTypes"
import getFeaturedImages from "../../api/FeaturedImagesApi"


export const setFeaturedImages = (featuredImages: FeaturedImages): AnyAction => ({
    type: actionTypes.FeaturedImageActionTypes.SET_FEATURED_IMAGES,
    payload: featuredImages
});


export const loadFeaturedImages = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        return getFeaturedImages().then((featuredImages) => {
            if (featuredImages != null) {
                dispatch(setFeaturedImages(featuredImages))
            }

        });
    }
}
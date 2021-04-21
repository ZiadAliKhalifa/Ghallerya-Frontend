import * as actionTypes from "../actionTypes"

const initialState: FeaturedImages = {
    page: null,
    per_page: null,
    photos: null,
    total_results: null,
    next_page: null
}

const reducer = (
    state: FeaturedImages = initialState,
    action: actionTypes.FeaturedImageAction
): FeaturedImages => {
    switch (action.type) {
        case actionTypes.FeaturedImageActionTypes.SET_FEATURED_IMAGES:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default reducer
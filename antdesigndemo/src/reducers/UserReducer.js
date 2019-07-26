import { HomeConstants } from '../constants/homeConstants'
const defaultState = {
    isNoFound: false
}
export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case HomeConstants.IS_NAV_SHOW:
            return {
                ...state, isNoFound: true
            };
        case HomeConstants.IS_NAV_HIDE:
            return {
                ...state, isNoFound: false
            };
        case HomeConstants.CLEAR_ALL:
            return {
                ...action.data
            }
        default:
            return state
    }
}
import { SET_PARK, SET_PARK_INFO, SET_PARK_IMAGE, SET_PARK_STAR, SET_PARK_EMPTYSLOT, SET_PARK_IMAGE2, 
    SET_PARK_IMAGE3, SET_PARK_LATITUDE, SET_PARK_LONGTITUDE, SET_CURRENT_LATITUDE, SET_CURRENT_LONGTITUDE, 
    SET_FAVORITE_LIST, GET_BOOKS, ADD_TO_BOOKMARK_LIST, REMOVE_FROM_BOOKMARK_LIST
} from "./action";

const initialState = {
    park: '',
    parkInfo: '',
    parkImage: '',
    parkStar: 0,
    parkEmptyslot: 0,
    parkLatitude: '',
    parkLongtitude: '',
    currentLatitude: '14.069905376912853',
    currentLongtitude: '100.60598635193016',
    favoriteList: [],
    parkImage2: '',
    parkImage3: '',
}

function dbReducer(state=initialState, action){
    switch (action.type) {
        case SET_PARK:
            return {...state, park: action.payload};
        case SET_PARK_INFO:
            return {...state, parkInfo: action.payload};
        case SET_PARK_IMAGE:
            return {...state, parkImage: action.payload};
        case SET_PARK_STAR:
            return {...state, parkStar: action.payload};
        case SET_PARK_EMPTYSLOT:
            return {...state, parkEmptyslot: action.payload};
        case SET_PARK_LATITUDE:
            return {...state, parkLatitude: action.payload};
        case SET_PARK_LONGTITUDE:
            return {...state, parkLongtitude: action.payload};
        case SET_CURRENT_LATITUDE:
            return {...state, currentLatitude: action.payload};
        case SET_CURRENT_LONGTITUDE:
            return {...state, currentLongtitude: action.payload};
        case SET_FAVORITE_LIST:
            return {...state, favoriteList: action.payload};
        case SET_PARK_IMAGE2:
            return {...state, parkImage2: action.payload};
        case SET_PARK_IMAGE3:
            return {...state, parkImage3: action.payload};
        default:
            return state;
    }
}

export default dbReducer;
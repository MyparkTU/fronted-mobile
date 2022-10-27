import { SET_PARK, SET_PARK_INFO, SET_PARK_IMAGE, SET_PARK_STAR, SET_PARK_EMPTYSLOT } from "./action";

const initialState = {
    park: '',
    parkInfo: '',
    parkImage: 0,
    parkStar: 0,
    parkEmptyslot: 0,
}

function dbReducer(state=initialState, action){
    switch (action.type) {
        case SET_PARK:
            return {...state, park: action.payload};
        case SET_PARK_INFO:
            return {...state, parkInfo: action.payload};
        case SET_PARK_IMAGE:
            return {...state, park: action.payload};
        case SET_PARK_STAR:
            return {...state, parkInfo: action.payload};
        case SET_PARK_EMPTYSLOT:
            return {...state, parkInfo: action.payload};
        default:
            return state;
    }
}

export default dbReducer;
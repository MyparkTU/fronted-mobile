export const SET_PARK = 'SET_PARK';
export const SET_PARK_INFO = 'SET_PARK_INFO';
export const SET_PARK_IMAGE = 'SET_PARK_IMAGE';
export const SET_PARK_STAR = 'SET_PARK_STAR';
export const SET_PARK_EMPTYSLOT = 'SET_PARK_EMPTYSLOT';

export const setPark = park => dispatch => {
    dispatch({
        type: SET_PARK,
        payload: park,
    });
};

export const setParkInfo = parkInfo => dispatch => {
    dispatch({
        type: SET_PARK_INFO,
        payload: parkInfo,
    });
};

export const setParkImage = parkImage => dispatch => {
    dispatch({
        type: SET_PARK_IMAGE,
        payload: parkImage,
    });
};

export const setParkStar = parkStar => dispatch => {
    dispatch({
        type: SET_PARK_STAR,
        payload: parkStar,
    });
};

export const setParkEmptyslot = parkEmptyslot => dispatch => {
    dispatch({
        type: SET_PARK_EMPTYSLOT,
        payload: parkEmptyslot,
    });
};
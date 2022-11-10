import { SET_PARK, SET_PARK_INFO, SET_PARK_IMAGE, SET_PARK_STAR, SET_PARK_EMPTYSLOT,
    SET_PARK2, SET_PARK_INFO2, SET_PARK_IMAGE2, SET_PARK_STAR2, SET_PARK_EMPTYSLOT2,
    SET_PARK3, SET_PARK_INFO3, SET_PARK_IMAGE3, SET_PARK_STAR3, SET_PARK_EMPTYSLOT3,
    SET_PARK4, SET_PARK_INFO4, SET_PARK_IMAGE4, SET_PARK_STAR4, SET_PARK_EMPTYSLOT4,
    SET_PARK5, SET_PARK_INFO5, SET_PARK_IMAGE5, SET_PARK_STAR5, SET_PARK_EMPTYSLOT5,
    SET_PARK6, SET_PARK_INFO6, SET_PARK_IMAGE6, SET_PARK_STAR6, SET_PARK_EMPTYSLOT6,
    SET_PARK7, SET_PARK_INFO7, SET_PARK_IMAGE7, SET_PARK_STAR7, SET_PARK_EMPTYSLOT7,
    SET_PARK8, SET_PARK_INFO8, SET_PARK_IMAGE8, SET_PARK_STAR8, SET_PARK_EMPTYSLOT8,
    SET_PARK9, SET_PARK_INFO9, SET_PARK_IMAGE9, SET_PARK_STAR9, SET_PARK_EMPTYSLOT9,
    SET_PARK10, SET_PARK_INFO10, SET_PARK_IMAGE10, SET_PARK_STAR10, SET_PARK_EMPTYSLOT10,
    SET_PARK11, SET_PARK_INFO11, SET_PARK_IMAGE11, SET_PARK_STAR11, SET_PARK_EMPTYSLOT11,
    SET_PARK12, SET_PARK_INFO12, SET_PARK_IMAGE12, SET_PARK_STAR12, SET_PARK_EMPTYSLOT12,
    SET_PARK13, SET_PARK_INFO13, SET_PARK_IMAGE13, SET_PARK_STAR13, SET_PARK_EMPTYSLOT13,
    SET_PARK14, SET_PARK_INFO14, SET_PARK_IMAGE14, SET_PARK_STAR14, SET_PARK_EMPTYSLOT14,
    SET_PARK15, SET_PARK_INFO15, SET_PARK_IMAGE15, SET_PARK_STAR15, SET_PARK_EMPTYSLOT15,
    SET_PARK16, SET_PARK_INFO16, SET_PARK_IMAGE16, SET_PARK_STAR16, SET_PARK_EMPTYSLOT16,
    SET_PARK_LATITUDE, SET_PARK_LONGTITUDE, SET_CURRENT_LATITUDE, SET_CURRENT_LONGTITUDE, 
    SET_FAVORITE_LIST
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
    park2: '',
    parkInfo2: '',
    parkImage2: '',
    parkStar2: 0,
    parkEmptyslot2: 0,
    park3: '',
    parkInfo3: '',
    parkImage3: '',
    parkStar3: 0,
    parkEmptyslot3: 0,
    park4: '',
    parkInfo4: '',
    parkImage4: [],
    parkStar4: 0,
    parkEmptyslot4: 0,
    park5: '',
    parkInfo5: '',
    parkImage5: 0,
    parkStar5: 0,
    parkEmptyslot5: 0,
    park6: '',
    parkInfo6: '',
    parkImage6: 0,
    parkStar6: 0,
    parkEmptyslot6: 0,
    park7: '',
    parkInfo7: '',
    parkImage7: 0,
    parkStar7: 0,
    parkEmptyslot7: 0,
    park8: '',
    parkInfo8: '',
    parkImage8: 0,
    parkStar8: 0,
    parkEmptyslot8: 0,
    park9: '',
    parkInfo9: '',
    parkImage9: 0,
    parkStar9: 0,
    parkEmptyslot9: 0,
    park10: '',
    parkInfo10: '',
    parkImage10: 0,
    parkStar10: 0,
    parkEmptyslot10: 0,
    park11: '',
    parkInfo11: '',
    parkImage11: 0,
    parkStar11: 0,
    parkEmptyslot11: 0,
    park12: '',
    parkInfo12: '',
    parkImage12: 0,
    parkStar12: 0,
    parkEmptyslot12: 0,
    park13: '',
    parkInfo13: '',
    parkImage13: 0,
    parkStar13: 0,
    parkEmptyslot13: 0,
    park14: '',
    parkInfo14: '',
    parkImage14: 0,
    parkStar14: 0,
    parkEmptyslot14: 0,
    park15: '',
    parkInfo15: '',
    parkImage15: 0,
    parkStar15: 0,
    parkEmptyslot15: 0,
    park16: '',
    parkInfo16: '',
    parkImage16: 0,
    parkStar16: 0,
    parkEmptyslot16: 0,
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

        case SET_PARK2:
            return {...state, park2: action.payload};
        case SET_PARK_INFO2:
            return {...state, parkInfo2: action.payload};
        case SET_PARK_IMAGE2:
            return {...state, parkImage2: action.payload};
        case SET_PARK_STAR2:
            return {...state, parkStar2: action.payload};
        case SET_PARK_EMPTYSLOT2:
            return {...state, parkEmptyslot2: action.payload};
        
        case SET_PARK3:
            return {...state, park3: action.payload};
        case SET_PARK_INFO3:
            return {...state, parkInfo3: action.payload};
        case SET_PARK_IMAGE3:
            return {...state, parkImage3: action.payload};
        case SET_PARK_STAR3:
            return {...state, parkStar3: action.payload};
        case SET_PARK_EMPTYSLOT3:
            return {...state, parkEmptyslot3: action.payload};

        case SET_PARK4:
            return {...state, park4: action.payload};
        case SET_PARK_INFO4:
            return {...state, parkInfo4: action.payload};
        case SET_PARK_IMAGE4:
            return {...state, parkImage4: action.payload};
        case SET_PARK_STAR4:
            return {...state, parkStar4: action.payload};
        case SET_PARK_EMPTYSLOT4:
            return {...state, parkEmptyslot4: action.payload};

        case SET_PARK5:
            return {...state, park5: action.payload};
        case SET_PARK_INFO5:
            return {...state, parkInfo5: action.payload};
        case SET_PARK_IMAGE5:
            return {...state, parkImage5: action.payload};
        case SET_PARK_STAR5:
            return {...state, parkStar5: action.payload};
        case SET_PARK_EMPTYSLOT5:
            return {...state, parkEmptyslot5: action.payload};

        case SET_PARK6:
            return {...state, park6: action.payload};
        case SET_PARK_INFO6:
            return {...state, parkInfo6: action.payload};
        case SET_PARK_IMAGE6:
            return {...state, parkImage6: action.payload};
        case SET_PARK_STAR6:
            return {...state, parkStar6: action.payload};
        case SET_PARK_EMPTYSLOT6:
            return {...state, parkEmptyslot6: action.payload};

        case SET_PARK7:
            return {...state, park7: action.payload};
        case SET_PARK_INFO7:
            return {...state, parkInfo7: action.payload};
        case SET_PARK_IMAGE7:
            return {...state, parkImage7: action.payload};
        case SET_PARK_STAR7:
            return {...state, parkStar7: action.payload};
        case SET_PARK_EMPTYSLOT7:
            return {...state, parkEmptyslot7: action.payload};

        case SET_PARK8:
            return {...state, park8: action.payload};
        case SET_PARK_INFO8:
            return {...state, parkInfo8: action.payload};
        case SET_PARK_IMAGE8:
            return {...state, parkImage8: action.payload};
        case SET_PARK_STAR8:
            return {...state, parkStar8: action.payload};
        case SET_PARK_EMPTYSLOT8:
            return {...state, parkEmptyslot8: action.payload};

        case SET_PARK9:
            return {...state, park9: action.payload};
        case SET_PARK_INFO9:
            return {...state, parkInfo9: action.payload};
        case SET_PARK_IMAGE9:
            return {...state, parkImage9: action.payload};
        case SET_PARK_STAR9:
            return {...state, parkStar9: action.payload};
        case SET_PARK_EMPTYSLOT9:
            return {...state, parkEmptyslot9: action.payload};

        case SET_PARK10:
            return {...state, park10: action.payload};
        case SET_PARK_INFO10:
            return {...state, parkInfo10: action.payload};
        case SET_PARK_IMAGE10:
            return {...state, parkImage10: action.payload};
        case SET_PARK_STAR10:
            return {...state, parkStar10: action.payload};
        case SET_PARK_EMPTYSLOT10:
            return {...state, parkEmptyslot10: action.payload};

        case SET_PARK11:
            return {...state, park11: action.payload};
        case SET_PARK_INFO11:
            return {...state, parkInfo11: action.payload};
        case SET_PARK_IMAGE11:
            return {...state, parkImage11: action.payload};
        case SET_PARK_STAR11:
            return {...state, parkStar11: action.payload};
        case SET_PARK_EMPTYSLOT11:
            return {...state, parkEmptyslot11: action.payload};

        case SET_PARK12:
            return {...state, park12: action.payload};
        case SET_PARK_INFO12:
            return {...state, parkInfo12: action.payload};
        case SET_PARK_IMAGE12:
            return {...state, parkImage12: action.payload};
        case SET_PARK_STAR12:
            return {...state, parkStar12: action.payload};
        case SET_PARK_EMPTYSLOT12:
            return {...state, parkEmptyslot12: action.payload};

        case SET_PARK13:
            return {...state, park13: action.payload};
        case SET_PARK_INFO13:
            return {...state, parkInfo13: action.payload};
        case SET_PARK_IMAGE13:
            return {...state, parkparkImage13: action.payload};
        case SET_PARK_STAR13:
            return {...state, parkStar13: action.payload};
        case SET_PARK_EMPTYSLOT13:
            return {...state, parkEmptyslot13: action.payload};

        case SET_PARK14:
            return {...state, park14: action.payload};
        case SET_PARK_INFO14:
            return {...state, parkInfo14: action.payload};
        case SET_PARK_IMAGE14:
            return {...state, parkImage14: action.payload};
        case SET_PARK_STAR14:
            return {...state, parkStar14: action.payload};
        case SET_PARK_EMPTYSLOT14:
            return {...state, parkEmptyslot14: action.payload};

        case SET_PARK15:
            return {...state, park15: action.payload};
        case SET_PARK_INFO15:
            return {...state, parkInfo15: action.payload};
        case SET_PARK_IMAGE15:
            return {...state, parkImage15: action.payload};
        case SET_PARK_STAR15:
            return {...state, parkStar15: action.payload};
        case SET_PARK_EMPTYSLOT15:
            return {...state, parkEmptyslot15: action.payload};

        case SET_PARK16:
            return {...state, park16: action.payload};
        case SET_PARK_INFO16:
            return {...state, parkInfo16: action.payload};
        case SET_PARK_IMAGE16:
            return {...state, parkImage16: action.payload};
        case SET_PARK_STAR16:
            return {...state, parkStar16: action.payload};
        case SET_PARK_EMPTYSLOT16:
            return {...state, parkEmptyslot16: action.payload};
        default:
            return state;
    }
}

export default dbReducer;
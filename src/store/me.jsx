const SET_USER_DATA = "me/SET_USER_DATA";

export const SetUserData = (userdata) => ({
    type:SET_USER_DATA,
    payload:{
        userdata
    }
})


const initState = {
    user_data: '',
}

const MeReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                user_data: action.payload.userdata
            }
        default:
            return state;
    }
}
export default MeReducer;
const SET_REGISTER_DATA = "register/SET_REGISTER_DATA";

export const SetRegisterData = (name, value) => ({
    type:SET_REGISTER_DATA,
    payload:{
        name,
        value,
    }
})


const initState = {
    register_data: [],
}

const RegisterReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_REGISTER_DATA:
            var draft = state;
            draft.register_data[action.payload.name] = action.payload.value
            // return {
            //     ...state,
            //     register_data: action.payload.registerdata
            // }
            return draft;
        default:
            return state;
    }
}
export default RegisterReducer;
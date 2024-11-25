const SET_LOADING = "global/SET_LOADING";
const TOGGLE_QNA = "global/TOGGLE_QNA";
const TOGGLE_CHATBOT = "global/TOGGLE_CHATBOT";
const SET_RAF = "global/SET_RAF";
const TOGGLE_SCROLL = "global/TOGGLE_SCROLL";
const SET_PAYMENT_METHOD = "global/SET_PAYMENT_METHOD";


export const SetLoading = (loading) => ({
    type:SET_LOADING,
    payload:{
        loading
    }
})
export const SetPaymentMethod = (paymentMethod) => ({
    type:SET_PAYMENT_METHOD,
    payload:{
        paymentMethod
    }
})
export const ToggleQna = (toggle) => ({
    type:TOGGLE_QNA,
    payload:{
        toggle
    }
})
export const ToggleChatbot = (toggle) => ({
    type:TOGGLE_CHATBOT,
    payload:{
        toggle
    }
})
export const SetRaf = (raf) => ({
    type:SET_RAF,
    payload:{
        raf
    }
})
export const ToggleScroll = (scroll) => ({
    type:TOGGLE_SCROLL,
    payload:{
        scroll
    }
})

const initState = {
    loading: 0,
    qna_popup: 0,
    chatbot_popup: 0,
    raf:0,
    scroll: 0,
    paymentMethod: 'bacs'
}

const GlobalReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload.loading
            }
        case SET_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethod: action.payload.paymentMethod
            }
        case TOGGLE_QNA:
            return {
                ...state,
                qna_popup: action.payload.toggle
            }
        case TOGGLE_CHATBOT:
            return {
                ...state,
                chatbot_popup: !state.chatbot_popup
            }
        case SET_RAF:
            return {
                ...state,
                raf: action.payload.raf
            }
        case TOGGLE_SCROLL:
            return {
                ...state,
                scroll: action.payload.scroll
            }
        default:
            return state;
    }
}
export default GlobalReducer;
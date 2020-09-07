import { GET_DATA_START, GET_DATA, GET_DATA_END } from "../action/helper"


const INITIAL_STATE = {
    global: {},
    countries: [],
    loading: false
}

const apiReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case GET_DATA_START:
            return{...state, loading: true}
        case GET_DATA:
            return{...state, global: action.payload.Global, countries: action.payload.Countries}
        case GET_DATA_END:
            return{...state, loading: false}
        default:
            return state
    }
}

export default apiReducer

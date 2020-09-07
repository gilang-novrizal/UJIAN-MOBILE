import { GET_DATA_START, GET_DATA, GET_DATA_END, URL } from "./helper"
import Axios from "axios"

export const getDataAPI = ()=>{
    return async(dispatch)=>{
     try {
         dispatch({type: GET_DATA_START})

         const res = await Axios.get(URL)
         dispatch({type: GET_DATA, payload: res.data})

         dispatch({type: GET_DATA_END})
     } catch (error) {
         console.log(error.response? error.response.data : error)
     }
    }
}
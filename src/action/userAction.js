import { LOGIN_START, LOGIN, LOGIN_END, KEEP_LOGIN, KEEP_LOGIN_END, KEEP_LOGIN_START, LOGOUT } from "./helper"
import AsyncStorage from '@react-native-community/async-storage';

export const LoginAction = (body)=>{
    return async(dispatch)=>{
        try {
            dispatch({type: LOGIN_START})

            dispatch({type: LOGIN, payload: body.username})
            await AsyncStorage.setItem("username", body.username)
            
            dispatch({type: LOGIN_END})
        } catch (error) {
            console.log(error.response? error.response.data : error)
        }
    }
}

export const KeepLogin = ()=>{
    return async (dispatch)=>{
        try {
            dispatch({type: KEEP_LOGIN_START})

            const username = await AsyncStorage.getItem("username")

            dispatch({type: KEEP_LOGIN, payload: username})

            dispatch({type: KEEP_LOGIN_END})
        } catch (error) {
            console.log(error.response? error.response.data : error)
        }
    }
}

export const LogoutAction = ()=>{
    return async(dispatch)=>{
        try {
            await AsyncStorage.clear()
            dispatch({type: LOGOUT})
        } catch (error) {
            console.log(error.response? error.response.data : error)
        }
    }
}
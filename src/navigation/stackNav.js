import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {createStackNavigator} from "@react-navigation/stack"

// import screen
import LoginPage from "../screen/login"
import SplashScreen from "../screen/splash"
import TabNav from "./tabNav"
import { KeepLogin } from "../action"
import DrawerNav from "./drawerNav"

const StackNav = () =>{

    const {user, loading} = useSelector((state)=>{
       return{
           user: state.userReducer.username,
           loading: state.userReducer.authloading
       } 
    })

    const dispatch = useDispatch()
    React.useEffect(()=>{
        dispatch(KeepLogin())
    },[])

    if(loading){
        return <SplashScreen/>
    }
    const Stack = createStackNavigator()
    return(
        <Stack.Navigator>
            {user? 
                // (<Stack.Screen name="Tab" component={TabNav}/>) 
                (<Stack.Screen name="Drawer" component={DrawerNav}/>)
                : ( <Stack.Screen name="Login" component={LoginPage}/>)}
        </Stack.Navigator>
    )
}

export default StackNav
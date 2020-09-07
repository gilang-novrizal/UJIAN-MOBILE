import React from "react"
import {createDrawerNavigator} from "@react-navigation/drawer"

// import screen
import Home from "../screen/home"
import Account from "../screen/account"
import TabNav from "./tabNav"

const DrawerNav = () =>{
    const Drawer = createDrawerNavigator()
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Tab" component={TabNav}/>
            {/* <Drawer.Screen name="Feed" component={Home}/> */}
            <Drawer.Screen name="Account" component={Account}/>
        </Drawer.Navigator>
    )
}

export default DrawerNav
import React from "react"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

// import screen
import Detail from "../screen/detail"
import DrawerNav from "./drawerNav"
import Home  from "../screen/home"

const TabNav = () =>{
    const Tab = createBottomTabNavigator()
    return(
        <Tab.Navigator>
            {/* <Tab.Screen name="Home" component={DrawerNav}/> */}
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Detail" component={Detail}/>
        </Tab.Navigator>
    )
}

export default TabNav
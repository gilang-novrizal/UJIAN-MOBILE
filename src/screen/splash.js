import React from "react"
import {View, Text, StyleSheet} from "react-native"

const SplashScreen = () =>{
    return(
        <View style={styles.root}>
            <Text>Splash Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        backgroundColor: "#e67e22",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default SplashScreen
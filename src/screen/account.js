import React from "react"
import {useDispatch} from "react-redux"
import {View, Text, StyleSheet} from "react-native"
import {Button} from "native-base"
import { LogoutAction } from "../action"

const AccountPage = () =>{
    const dispatch = useDispatch()
    return(
        <View style={styles.root}>
            <Text>Account Page</Text>
            <Button
              rounded
              light
              onPress={()=> dispatch(LogoutAction())}
              style={styles.button}>
                <Text >Logout</Text>
            </Button>
        </View>
    )
}

const styles =StyleSheet.create({
    root:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button:{
        alignSelf: "center",
        padding: 15,
        marginVertical: 10
    }
})

export default AccountPage
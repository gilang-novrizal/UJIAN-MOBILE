import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {View, Text, StyleSheet} from "react-native"
import { Button,Form, Item, Input, Label } from 'native-base'
import { LoginAction } from '../action'

const LoginPage = ({navigation})=>{
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [errorUser, setErrorUser] = React.useState(false)
    const [errorPassword, setErrorPassword]= React.useState(false)
    const [error, setError] = React.useState("")

    const {user, loading} = useSelector((state)=>{
        return{
            user: state.userReducer.username,
            loading: state.userReducer.loading
        }
    })

    React.useEffect(()=>{
        // if(user) navigation.navigate("Tab")
        if(user) navigation.navigate("Drawer")
    })
    const dispatch = useDispatch()
    const handleLogin=()=>{
        const body = {
            username: username,
            password: password
        }
        const passRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/
        const userRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/
        if(!body.username.match(userRegex)){
            console.log("user wrong")
            setErrorUser(true)
            setError("Username Invalid")
            return
        }
        if(!body.password.match(passRegex)){
            console.log("pass invalid")
            setErrorPassword(true)
            setError("Password Invalid")
            return
        }
        console.log("form : ",body)
        dispatch(LoginAction(body))
        setUsername("")
        setPassword("")
        setErrorUser(false)
        setErrorPassword(false)
        setError("")
    }
    return(
        <View style={styles.root}>
            <Text>Login Page</Text>
            <Form style={styles.form}>
                <Item floatingLabel style={styles.input} error={errorUser}>
                    <Label>Username</Label>
                    <Input
                        onChangeText={(value)=> setUsername(value)}/>
                </Item>
                <Item floatingLabel style={styles.input} error={errorPassword}>
                    <Label>Password</Label>
                    <Input
                        secureTextEntry
                        onChangeText={(value)=> setPassword(value)}/>
                </Item>
            </Form>
            <Text>{error}</Text>
            <Button 
                rounded 
                light 
                loading={loading}
                onPress={handleLogin}
                style={styles.button}
                >
                <Text>
                    Login
                </Text>
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
    form:{
        width: 300,
        marginVertical: 15
    },
    input:{
        padding: 15,
        marginVertical: 15,
    },
    button:{
        alignSelf: "center",
        padding: 15,
        marginVertical: 10
    }
})

export default LoginPage
import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {View, StyleSheet} from "react-native"
import {Card, CardItem, Text, Body} from "native-base"
import { getDataAPI } from "../action"

const HomePage = () =>{
    const{global} = useSelector((state)=>{
        return{
            global: state.apiReducer.global
        }
    })

    const dispatch = useDispatch()
    React.useEffect(()=>{
        dispatch(getDataAPI())
    },[])
    return(
        <View style={styles.root}>
            <View style={styles.headContent}>
                <Text>Corona Virus Live Update</Text>
                <View style={styles.cardContainer}>
                    <Card style={styles.card}>
                        <CardItem header>
                            <Text style={styles.cardText}>Total</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text style={styles.cardText}>{global.TotalConfirmed}</Text>
                                <Text style={styles.cardText}>+ {global.NewConfirmed}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={styles.card}>
                        <CardItem header>
                            <Text style={styles.cardText}>Recovered</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text style={styles.cardText}>{global.TotalRecovered}</Text>
                                <Text style={styles.cardText}>+ {global.NewRecovered}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={styles.card}>
                        <CardItem header>
                            <Text style={styles.cardText}>Deaths</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text style={styles.cardText}>{global.TotalDeaths}</Text>
                                <Text style={styles.cardText}>+ {global.NewDeaths}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        padding: 20,
        paddingTop: 0,
        justifyContent: "center"
    },
    headContent:{
        alignItems: "center",
        backgroundColor: "#e74c3c",
        padding: 10,
    },
    cardContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    card:{
        width: 105,
    },
    cardText:{
        fontSize: 13
    }
})


export default HomePage
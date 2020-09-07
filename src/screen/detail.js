import React from "react"
import {useDispatch, useSelector} from "react-redux"
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import {View, Text, StyleSheet, ScrollView} from "react-native"

const DetailPage = () =>{
    const [tableHead, setTableHead] = React.useState(["Region", "New Cases", "Total Cases", "Recovered", "Deaths"])
    const {countries} = useSelector((state)=>{
        return{
            countries: state.apiReducer.countries
        }
    })

    const renderData = ()=>{
        let tableBody = []
        countries.map((item)=>{
            tableBody.push([item.NewConfirmed, item.TotalConfirmed, item.TotalRecovered, item.TotalDeaths])
        })
        return tableBody
    }

    const renderTitle = ()=>{
        let tableTitle = []
        countries.map((item)=>{
            tableTitle.push([item.Country])
        })

        return tableTitle
    }

    const renderTable = ()=>{
        return(
            <View style={styles.container}> 
                <Table  borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                    <Row data={tableHead} flexArr={[1, 1, 1, 1, 1]} style={styles.head}  textStyle={styles.text}/>
                    <TableWrapper style={styles.wrapper}>
                        <Col data={renderTitle()}  style={styles.title} heightArr={[50,50]} textStyle={styles.text}/>
                        <Rows data={renderData()}  flexArr={[1, 1, 1]} style={styles.row} textStyle={styles.text}/>
                    </TableWrapper>
                </Table>
            </View>
        )
    }

    return(
        <ScrollView>
            <Text>Detail Page</Text>
            {renderTable()}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root:{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center"
    },
    button:{
        alignSelf: "center",
        padding: 15
    },
    container: { 
        flex: 1, 
        padding: 16, 
        paddingTop: 30, 
        backgroundColor: '#fff',
        width: 400},
    head: { 
        height: 40, 
        backgroundColor: '#f1f8ff' },
    text: { margin: 6 },
    title: {  flex: 1, backgroundColor: '#f6f8fa' },
    row: {  height: 50  },
    wrapper: { flexDirection: 'row' },
})

export default DetailPage
import React from "react"
import {View, Text} from "react-native"
import { NavigationContainer } from '@react-navigation/native';

// setup redux
import {createStore, applyMiddleware} from "redux"
import {Provider} from "react-redux"
import ReduxThunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import allReducers from "./src/reducer"


// create global store
const globalStore = createStore(
  allReducers, {}, composeWithDevTools(applyMiddleware(ReduxThunk))
)
// import navigation
import StackNav from "./src/navigation/stackNav"
const App = () =>{
  return(
    <Provider store={globalStore}>
      <NavigationContainer>
        <StackNav/>
      </NavigationContainer>
    </Provider>
  )
}

export default App
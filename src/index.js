import React from "react"
import App from "./App"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import allReducers from './reducers/index'
import { Provider } from "react-redux"

const store = createStore(allReducers)



function Index(){
    return(
      <Provider store={store}>
        <App/>
        </Provider>
    )
}

ReactDOM.render(<Index/>,document.getElementById("root"))


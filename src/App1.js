import React from 'react'
import './App.css'
function App1(props) {
    let { data, send, name } = props

    return (<div id="id" className="class" >function component , data : {data}
            <p>
               send : {send}, name : {name}
            </p>
    </div>)
}
export default App1
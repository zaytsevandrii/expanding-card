import { useState } from "react"
import "./App.scss"
import Element from "./Element"

function App() {
    const [checkActive,setCheckActive] = useState(1)
    console.log(checkActive)
    const elements=[
        {id:1,title:'Explore The World',img:'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'},
        {id:2,title:'Wild Forest',img:'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'},
        {id:3,title:'Sunny Beach',img:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80'},
        {id:4,title:'City on Winter',img:'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'},
        {id:5,title:'Mountains - Clouds',img:'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'}
    ]
const changeActive=(id)=>{
    setCheckActive(id)
}
    return (
        <div className="container">
            {elements.map(el=>(
                <Element {...el} key={el.id} changeActive={changeActive} checkActive={checkActive}/>
            ))}
          {/*   <div
                className="panel active"
                style={{backgroundImage:`url(${img1})`}}
            >
                <h3>Explore The World</h3>
            </div>
            <div
                className="panel"
                style={{backgroundImage:`url(${img2})`}}
            >
                <h3>Wild Forest</h3>
            </div>
            <div
                className="panel"
                style={{backgroundImage:`url(${img3})`}}
            >
                <h3>Sunny Beach</h3>
            </div>
            <div
                className="panel"
                style={{backgroundImage:`url(${img4})`}}
            >
                <h3>City on Winter</h3>
            </div>
            <div
                className="panel"
                style={{backgroundImage:`url(${img5})`}}
            >
                <h3>Mountains - Clouds</h3>
            </div> */}
        </div>
    )
}

export default App

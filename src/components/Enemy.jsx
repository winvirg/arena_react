import React from "react"

function Enemy(props) {
        return(
            <div >
                <h1>I'm the enemy {props.name}</h1>
                <img src={props.image} height="100px"/>
            </div>
        )
}
export default Enemy;
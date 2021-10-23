import React from "react"

function Enemy(props) {
console.log(props)
    return(
        <div >
            <h1>I'm the enemy {props.name}</h1>
            <img src={props.image} height="100px" alt="imageEnemy"/>
        </div>
    )
}
export default Enemy;
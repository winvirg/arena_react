import React from "react"

function Hero (props) {
        return(
            <div >
                <h1>I'm the hero {props.name}</h1>
                <img src={props.image} height="100px" />
            </div>
        )
}
export default Hero;
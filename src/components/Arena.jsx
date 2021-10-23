import { render } from "@testing-library/react";
import React, {Component} from "react";
import Enemy from "./Enemy";
import Hero from "./Hero";
import imagemEnemy from '../images/enemy.jpg'
import imagemHero from '../images/hero.jpg'

function Arena(){ 
    render()
        return(
            <div>
                <Hero name="Saitama"/>
                <img src={imagemHero} height="100px" />
                <Enemy name="Boros"/>
                <img src={imagemEnemy} height="100px"/>
            </div>
        )
}
export default Arena;
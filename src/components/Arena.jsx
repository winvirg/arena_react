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
                <Hero name="Saitama" image={imagemHero}/>
                <Enemy name="Boros" image={imagemEnemy}/>
            </div>
        )
}
export default Arena;
import { render } from "@testing-library/react";
import Enemy from "./Enemy";
import Hero from "./Hero";
import * as constants from '../util/constants'

const imgHero = constants.HERO_IMAGE
const imgEnemy = constants.ENEMY_IMAGE
const text = constants.TESTE

function Arena(){ 
    render()
        return(
            <div>
                <h1>{text}</h1>
                <Hero name="Saitama" image={imgHero}/>
                <Enemy name="Boros" image={imgEnemy}/>
            </div>
        )
}
export default Arena;
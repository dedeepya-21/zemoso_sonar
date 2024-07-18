import Image from './tree.jpg'
import ButterFly from './2056977.svg'
import './styles.css'
import { ClickAction } from './clickaction'
export const App=()=>{

    return (
    <>
    <h1>React Typescript Webpack</h1>
    <img src={Image} alt="Tree image" width="400" height="400"></img>
    <img src={ButterFly} alt="Butterfly image" width="400" height="400"></img>
    <ClickAction/>
    </>
    )
}
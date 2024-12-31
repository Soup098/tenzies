import Die from "../components/Die.jsx"
import { useState } from "react"



export default function App(){

    

    const [dieValue, setDieValue] = useState(generateAllNewDice)

    const dice = dieValue.map((value) => <Die value={value}/>)

    function generateAllNewDice(){
        let diceArray = []
        while(diceArray.length < 10){
            let newDie = Math.floor(Math.random()*6)+1
            diceArray.push(newDie)
        }
        return(diceArray)
    }

    function handleClick(){
        setDieValue(generateAllNewDice)
    }

    return(
        <main>
            <div className="dice-container">
                {dice}
            </div>
            <button className="roll-btn" onClick={handleClick}>Roll</button>
        </main>
    )
}
    

import Die from "../components/Die.jsx"
import { useState } from "react"
import { nanoid } from "nanoid"

export default function App(){
    const [dice, setDice] = useState(generateAllNewDice)

    const diceElements = dice.map((dieObject) => (
            <Die 
                key={dieObject.id} 
                value={dieObject.value}
                isHeld={dieObject.isHeld}
                hold={holdDie}
                id={dieObject.id}
            />
    ))

    function generateAllNewDice(){
        let diceArray = []
        while(diceArray.length < 10){
            let newDie = {
                value: Math.floor(Math.random()*6)+1,
                isHeld: false,
                id: nanoid()
                }
            diceArray.push(newDie)
        }
        return(diceArray)
    }
    function handleClick(){
        setDice(prevDice =>
            prevDice.map(die =>
                die.isHeld
                    ? {...die, value: die.value}
                    : {...die, value: Math.floor(Math.random()*6)+1}
            )
        )
    }
    function holdDie(id){
        setDice(prevDice => 
            prevDice.map(die =>
                die.id === id
                    ? {...die, isHeld: !die.isHeld}
                    : die
            ))
    }

    return(
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-btn" onClick={handleClick}>Roll</button>
        </main>
    )
}
    

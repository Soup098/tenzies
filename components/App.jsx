import Die from "../components/Die.jsx"
import { useState, useRef, useEffect} from "react"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"

//main app component
export default function App(){
    //initiate the app state with the array of dice objects
    const [dice, setDice] = useState(generateAllNewDice)
    const buttonRef = useRef(null)
    //create variable called diceElements that is an array of <Die /> components using the values of the dice array for props. rendered to the page in the App() return
    const diceElements = dice.map((dieObject) => (
            <Die 
                key={dieObject.id} 
                value={dieObject.value}
                isHeld={dieObject.isHeld}
                hold={holdDie}
                id={dieObject.id}
            />
    ))
    //logic to switch the gameWon boolean to true if all dice are held and have the same value
    const gameWon = dice.every(die => die.isHeld) &&
                dice.every(die => die.value === dice[0].value)

    useEffect(() => {
        if (gameWon){
            buttonRef.current.focus()
        }
    }, [gameWon])
    //function to generate an array of 10 dice objects with random number values, and initiate an isHeld value of false. called by the useState() on page render
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
    //function for the roll button. if the die isHeld boolean value is true, the die does not change face value, otherwise, it does.
    function rollDice(){
        gameWon
            ? setDice(generateAllNewDice)
            :
        setDice(prevDice =>
            prevDice.map(die =>
                die.isHeld
                    ? die
                    : {...die, value: Math.floor(Math.random()*6)+1}
            )
        )
    }
    //function to toggle the isHeld value of the <Die/> component. sent to component via props.
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
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll the dice until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button ref={buttonRef} className="roll-btn" onClick={rollDice}>
                {gameWon ? "New Game" : "Roll"}
            </button>
            {gameWon 
                ?   <Confetti height={"1080px"}/>
                :null
                }
        </main>
    )
}
    

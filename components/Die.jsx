export default function Die(props){
    //change the style of the die based on the isHeld value
    const styles ={
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    // function to call function from props. to be referenced in the return. 
    function holdDie(){
        return props.hold(props.id)
    }

    return(
         <button 
            className="die" 
            style={styles} 
            onClick={holdDie}// reference to the holdDie function.
            aria-label={`Die with value of ${props.value}`}
            >{props.value}</button>
    )
}
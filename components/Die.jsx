export default function Die(props){
    const styles ={
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    function holdDie(){
        return props.hold(props.id)
    }

    return(
         <button 
            className="die" 
            style={styles} 
            onClick={holdDie}
            >
            {props.value}
        </button>
    )
}
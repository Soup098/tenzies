export default function Die(props){
    const styles ={
        backgroundColor: props.isHeld ? "#59E391" : "whitesmoke"
    }

    return(
         <button className="die" style={styles}>{props.value}</button>
    )
}
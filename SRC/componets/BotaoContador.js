import { Button } from "react-native-paper";

function BotaoContador(props){    
    return(
        <Button onLongPress={props.onLongPress}onPress={props.onPress}>{props.children}</Button>
        
    )
} 

export default BotaoContador;
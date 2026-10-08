import { Button } from "react-native-paper";
import { StyleSheet } from "react-native";

function Botao(){
    // parte lógica do componente 


    // após o return, é a parte visual do componente

    return(
       <Button> 
            Me aperte.
       </Button> 

    )
}

const styles = StyleSheet.create({
    botao: {
        backgroundeColor: "greem",
    },

})


export default Botao;
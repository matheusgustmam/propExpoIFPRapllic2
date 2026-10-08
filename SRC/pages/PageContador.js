import { StyleSheet, View, Text } from "react-native";
import {SafeAreaView } from "react-native-safe-area-context";
import BotaoContador from "../componets/BotaoContador";
import { useState } from "react";

function PageContador(){

    const [contador, setContador] = useState(0)

    function aumentarContadorMil(){
        setContador(contador + 1000);
    } 

    function aumentarContador(){
        setContador(contador + 1);
    }
   
    return(
        <SafeAreaView style={styles.container}>
            <Text>CONTADOR:</Text>
            <Text>{contador}</Text>
            <BotaoContador onLongPress={aumentarContadorMil} onPress={aumentarContador}> Aumentar Contador</BotaoContador>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor : 'blue',
        flex: 1,
        alignItems: 'center',
    }

})

export default PageContador;
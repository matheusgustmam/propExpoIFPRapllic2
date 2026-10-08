import { View, StyleSheet } from "react-native";
import { DataTable } from "react-native-paper"
import Botao from "../componets/Botao";

function PageCard(){
    return (
        <View style={styele.viewContainer}>
            <DataTable.Row>
                <DataTable.Cell numeric>1</DataTable.Cell>
                <DataTable.Cell numeric>2</DataTable.Cell>
                <DataTable.Cell numeric>3</DataTable.Cell>
                <DataTable.Cell numeric>4</DataTable.Cell>
            </DataTable.Row>
            <Botao> Aperte-me.</Botao>
            <Botao> Não me aperte.</Botao>
        </View>
    )


}

const styele = StyleSheet.create({
    viewContainer :{
        marginTop: 50,
        backgroundColor: "orange",
    }
})

export default PageCard;
import { View, StyleSheet, Text } from 'react-native';

function ConteinerLaranja() {
    return(
        <View styele={styele.conteinerLaranja}>
            <Text>ConteinerLaranja</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    conteinerLaranja: {
        BackgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
})

export default ConteinerLaranja;
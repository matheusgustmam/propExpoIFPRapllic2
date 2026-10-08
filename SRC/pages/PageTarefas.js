import { useState , useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";

function PageTarefas(){
    const [carregando, setCarregando ] = useState(false)
    const [tarefas, setTarefas] = useState([])

    async function listarTarefas(){
        setCarregando(true)
        fetch("https://dummyjson.com/todos").then(response => {
            response.json().then(dados => {
                setTimeout(() => {
                    setTarefas(dados.todos)
                    setCarregando(false)
                }, 2000) 
              //  console.log(dados.todos)
            })
         }).catch(err => {
            setCarregando(false)
                alert("Erro ao listar Tarefas!")
        })
    }
    
    useEffect(() => {
        listarTarefas();
    },[])

   /* return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
            {carregando ? (
                <ActivityIndicator size="large" color="white" />
            ) : ( 
                <FlatList
                    data={tarefas}
                    keyExtractor={(tarefa) => tarefa.id}
                    renderItem={({Item}) => (
                    <Card Key = {Item.id}>
                        <Card.Content>
                            <Text>{Item.todos}</Text>
                        </Card.Content>
                    </Card>)
                )}
                refresControl={
                    <RefreshControl
                        refreshing={carregando}
                        onRefresh={listarTarefas}
                    />
                }
            />  
            )   
            }
            </ScrollView>
        </SafeAreaView>
    )
}
*/
return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={tarefas}
                keyExtractor={(tarefa) => tarefa.id}
                renderItem={({ item }) => (
                    <Card key={item.id}>
                        <Card.Content>
                            <Text>{item.todo}</Text>
                        </Card.Content>
                    </Card>
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={carregando}
                        onRefresh={listarTarefas}
                    />
                }
            />
        </SafeAreaView>
    )
}




const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
    },
    textColorCard: {
        color: 'green'
    }
})

export default PageTarefas;
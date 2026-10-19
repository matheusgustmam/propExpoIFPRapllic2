import { useState } from "react";
import { ScrollView } from "react-native";
import {Button ,Card, TextInput, Text} from "react-native-paper";
import useAuthService from "../services/loginService";
import { useNavigation } from "@react-navigation/native";

function PageCadastro(){

    const [usuario , setUsuario] = useState({})
    const [secureText, setSecuriteText] = useState(true)
    const [loading, setLoading] = useState[false]
    const {cadastrarEmailSenha} = useAuthService();
    const navigation = useNavigation();

    async function CadastrarUsuario() {
        try{
            setLoading(true)
            await cadastrarEmail(usuario)
            alert("Cadastro realizado com sucesso!")
        } catch (err){
            console.error(err)
            alert("Erro ao Cadastrar, tente nova mente mais tarde")
        } finally{
            setLoading(false)
        }

    }

    return (
        <ScrollView>
            <Card>
                <Card.Content>
                    <TextInput
                        label ="Nome Completo"
                        placeholder="Insira seu nome completo."
                        value={usuario.nome}
                        onChangeText={(text) => setUsuario({ ...usuario, nome: text})}
                    />
                    <TextInput
                        labe="E-mail:"
                        placeholder="Insria seu email."
                        value={usuario.email}
                        onChangeText={(text) => setUsuario({ ...usuario,email: text })}
                        />
                    <TextInput
                        labe="Senha"
                        placeholder="Insira sua senha."
                        value={usuario.senha}
                        secureTextEntry={true}   
                        onChangeText={(text)=> setUsuario({...usuario, senha: text})} 
                        right={
                            <TextInput.Icon
                                icon="eye"
                                onPress={() => setSecuriteText(!secureText)}
                            />
                        }

                    />
                </Card.Content>
            </Card>
        </ScrollView>   
    )            
}

    export default PageCadastro;
 
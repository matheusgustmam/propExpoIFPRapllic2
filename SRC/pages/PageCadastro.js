import { useState } from "react";
import { ScrollView } from "react-native";
import {Button ,Card, TextInput} from "react-native-paper";
import useAuthService from "../services/loginService";

function PageCadastro(){

    const [usuario , setUsuario] = useState({})
    const [secureText, setSecuriteText] = useState(true)
    const [loading, setLoading] = useState[false]
    const {cadastrarEmailSenha} = useAuthService();


    async function CadastrarUsuariop() {
        try{

        } catch (err){
            console.error(err)
            alert("Erro ao Cadastrar, tente nova mente mais tarde")
        } finally{

        }

    }

    return{
        <ScrollView>
            <Card>
                <Card.Content>
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
                                onPress={() => setSecuriteText(!)}
                                />
                        }

                        />
                </Card.Content>
            </Card>
        </ScrollView>           
    }

    export default PageCadastro;
 
}